import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ─── Secrets (set via: supabase secrets set GROQ_API_KEY=... ) ────────────────
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY")!;

// ─── CORS ─────────────────────────────────────────────────────────────────────
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

// ─── System Prompt ────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the CareerNamimi Intelligence — an elite AI career counselor and professional growth architect powered by Career Na Mimi, Tanzania's leading youth empowerment organization.

YOUR MISSION: Deliver deeply strategic, richly detailed, and actionable career guidance that genuinely transforms people's professional journeys.

FORMATTING — THIS IS CRITICAL AND NON-NEGOTIABLE:
- NEVER use markdown. This means absolutely NO asterisks (*), NO double asterisks (**), NO pound signs (#), NO backticks, NO underscores for emphasis, NO hyphens as list markers, NO brackets.
- Write in plain, clean prose only. Use numbered lists like "1. 2. 3." when listing items.
- Use section labels like "Contact Information:" followed by a new line — no symbols before or after.
- If you ever feel the urge to bold something with **, write it in plain text instead.

RESPONSE STYLE RULES:
1. Always give real-world examples. If discussing resumes, show actual rewrites. If discussing interviews, include sample questions and model answers.
2. Always include references where appropriate: LinkedIn, Coursera, industry bodies, statistics, named frameworks (e.g., STAR method, OKR, SMART goals).
3. Be thorough, not generic. A user asking "how to improve my resume?" should get a complete breakdown.
4. Maintain full context of the conversation. Reference earlier messages when relevant.
5. Focus exclusively on career topics: job searching, interviews, CVs, salary negotiation, career transitions, professional skills, networking, entrepreneurship, freelancing, and higher education planning.
6. If the question is off-topic, graciously redirect: "That is outside my career expertise, but let me connect it to your professional journey..."
7. Speak with confidence and warmth. You are both expert coach and supportive mentor.
8. End responses with a concrete next step or question to keep the conversation productive.`;

// ─── Types ────────────────────────────────────────────────────────────────────
interface ChatRequest {
  message: string;
  sessionId: string;
  userId?: string;
  conversationHistory?: Array<{ role: "user" | "assistant"; content: string }>;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function jsonResponse(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// ─── Main handler ─────────────────────────────────────────────────────────────
serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: corsHeaders });
  }

  try {
    // ── Parse request ────────────────────────────────────────────────────────
    const {
      message,
      sessionId,
      userId,
      conversationHistory = [],
    }: ChatRequest = await req.json();

    if (!message?.trim() || !sessionId) {
      return jsonResponse({ success: false, error: "Missing message or sessionId" }, 400);
    }

    // ── Validate secrets ─────────────────────────────────────────────────────
    if (!GROQ_API_KEY) {
      console.error("GROQ_API_KEY secret is not set.");
      return jsonResponse({ success: false, error: "Server configuration error" }, 500);
    }

    // ── Build Groq payload ───────────────────────────────────────────────────
    const groqMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      // Include the last 8 turns of conversation history for context
      ...conversationHistory.slice(-8),
      { role: "user", content: message.trim() },
    ];

    const groqPayload = {
      model: "llama-3.3-70b-versatile",
      messages: groqMessages,
      temperature: 0.65,
      max_tokens: 2048,
      top_p: 0.92,
      stream: false,
    };

    // ── Call Groq API ────────────────────────────────────────────────────────
    console.log(`Calling Groq for session: ${sessionId}`);

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groqPayload),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error(`Groq API error ${groqRes.status}:`, errText);
      throw new Error(`Groq API error: ${groqRes.status}`);
    }

    const groqData = await groqRes.json();
    const botResponse: string = groqData?.choices?.[0]?.message?.content?.trim();

    if (!botResponse) {
      throw new Error("Empty or invalid response from Groq");
    }

    // ── Persist conversation to Supabase ────────────────────────────────────
    try {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      // Get or create conversation record
      let conversationId: string;

      const { data: existingConv } = await supabase
        .from("chat_conversations")
        .select("id")
        .eq("session_id", sessionId)
        .single();

      if (existingConv) {
        conversationId = existingConv.id;
      } else {
        const { data: newConv, error: convError } = await supabase
          .from("chat_conversations")
          .insert({ session_id: sessionId, user_id: userId ?? null })
          .select("id")
          .single();

        if (convError) throw convError;
        conversationId = newConv.id;
      }

      // Insert user message + bot response
      await supabase.from("chat_messages").insert([
        {
          conversation_id: conversationId,
          message: message.trim(),
          is_user_message: true,
        },
        {
          conversation_id: conversationId,
          message: botResponse,
          is_user_message: false,
        },
      ]);

      console.log(`Saved messages for conversation: ${conversationId}`);
    } catch (dbError) {
      // DB errors should not block the response — log and continue
      console.warn("DB persistence failed (non-fatal):", dbError);
    }

    // ── Return response ──────────────────────────────────────────────────────
    return jsonResponse({ success: true, response: botResponse });
  } catch (err) {
    console.error("Chatbot edge function error:", err);
    return jsonResponse(
      {
        success: false,
        response:
          "I'm experiencing a technical issue right now. Please try again in a moment — your career questions deserve the best answers!",
        error: "internal_error",
      },
      500
    );
  }
});
