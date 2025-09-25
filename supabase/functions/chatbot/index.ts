import { config } from "https://deno.land/std@0.168.0/dotenv/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = await config({ path: "../../.env" });
const SUPABASE_URL = env.SUPABASE_URL ?? Deno.env.get("SUPABASE_URL");
const SUPABASE_SERVICE_ROLE_KEY =
  env.SUPABASE_SERVICE_ROLE_KEY ?? Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const HF_API_KEY = env.HF_API_KEY ?? Deno.env.get("HF_API_KEY");

console.log("Loaded SUPABASE_URL:", Boolean(SUPABASE_URL));
console.log(
  "Loaded SUPABASE_SERVICE_ROLE_KEY:",
  Boolean(SUPABASE_SERVICE_ROLE_KEY)
);
console.log("Loaded HF_API_KEY:", Boolean(HF_API_KEY));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ChatRequest {
  message: string;
  sessionId: string;
  userId?: string;
}

// Fallback function for when embedding API fails
async function getContextWithoutEmbedding(
  supabase: any,
  message: string
): Promise<string> {
  try {
    // Try text search on document_chunks table
    const { data: docs, error } = await supabase
      .from("document_chunks")
      .select("content")
      .textSearch("content", message, { type: "websearch" })
      .limit(3);

    if (error) {
      console.log("Text search failed, using keywords:", error.message);
      // If text search fails, try simple LIKE query
      const keywords = message
        .toLowerCase()
        .split(" ")
        .filter((word) => word.length > 3);
      if (keywords.length > 0) {
        const { data: keywordDocs } = await supabase
          .from("document_chunks")
          .select("content")
          .ilike("content", `%${keywords[0]}%`)
          .limit(3);

        return keywordDocs?.map((doc: any) => doc.content).join("\n\n") || "";
      }
      return "";
    }

    return docs?.map((doc: any) => doc.content).join("\n\n") || "";
  } catch (error) {
    console.error("Context retrieval error:", error);
    return "";
  }
}

// Simple response generator for when AI models fail
function generateSimpleResponse(message: string, context: string): string {
  const lowerMessage = message.toLowerCase();

  if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
    return `Here are some key tips for improving your resume:

🎯 **Structure & Format**
- Use a clean, professional layout with consistent formatting
- Keep it to 1-2 pages maximum
- Use bullet points for easy scanning

📊 **Content Strategy**
- Include quantifiable achievements (e.g., "Increased sales by 25%")
- Use action verbs to start each bullet point
- Tailor your resume for each specific job application
- Include relevant keywords from the job posting

💼 **Key Sections**
- Professional summary (2-3 lines at the top)
- Skills section aligned with job requirements
- Work experience with specific accomplishments
- Education and relevant certifications

${
  context
    ? `\n📚 **Additional insights from our knowledge base:**\n${context.substring(
        0,
        200
      )}...`
    : ""
}`;
  }

  if (lowerMessage.includes("interview")) {
    return `Here's your comprehensive interview preparation guide:

🔍 **Research Phase**
- Study the company's mission, values, and recent news
- Understand the role requirements thoroughly
- Research your interviewer(s) on LinkedIn if possible

🗣️ **Practice & Preparation**
- Use the STAR method (Situation, Task, Action, Result) for behavioral questions
- Prepare 3-5 specific examples of your achievements
- Practice common questions out loud
- Prepare thoughtful questions about the role and company

👔 **Day of Interview**
- Dress appropriately for the company culture
- Arrive 10-15 minutes early
- Bring extra copies of your resume
- Follow up with a thank-you email within 24 hours

${
  context
    ? `\n📚 **From our knowledge base:**\n${context.substring(0, 200)}...`
    : ""
}`;
  }

  if (
    lowerMessage.includes("career") ||
    lowerMessage.includes("job") ||
    lowerMessage.includes("growth")
  ) {
    return `Here's your career development roadmap:

🎯 **Goal Setting**
- Define clear short-term (1 year) and long-term (3-5 year) career goals
- Identify the skills needed for your target roles
- Create a timeline with specific milestones

📈 **Skill Development**
- Stay updated with industry trends and technologies
- Take relevant courses or certifications
- Seek opportunities for stretch assignments
- Find a mentor in your field

🤝 **Networking**
- Attend industry events and conferences
- Join professional associations
- Engage on professional social media platforms
- Maintain relationships with former colleagues

${
  context ? `\n📚 **Relevant insights:**\n${context.substring(0, 200)}...` : ""
}`;
  }

  // Default response for general queries
  return `Hello! I'm CareerNamimi's AI assistant, here to help with your career development needs.

I can assist you with:
• **Resume & CV writing** - Structure, content, and optimization
• **Interview preparation** - Practice questions and strategies  
• **Career planning** - Goal setting and skill development
• **Job search strategies** - Finding opportunities and applications
• **Professional networking** - Building meaningful connections

${
  context
    ? `Here's some relevant information from our knowledge base:\n${context.substring(
        0,
        250
      )}...`
    : "Please let me know what specific aspect of your career you'd like help with, and I'll provide detailed guidance!"
}

What would you like to focus on today?`;
}

serve(async (req) => {
  try {
    const url = new URL(req.url);

    if (!url.pathname.endsWith("/api/v1/chatbot")) {
      return new Response("Not Found", { status: 404 });
    }

    if (req.method === "OPTIONS") {
      return new Response("ok", { headers: corsHeaders });
    }

    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const supabase = createClient(SUPABASE_URL!, SUPABASE_SERVICE_ROLE_KEY!);

    const { message, sessionId, userId }: ChatRequest = await req.json();
    if (!message || !sessionId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing message or sessionId",
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }

    let context = "";
    let botResponse = "";

    // Try to get context with embeddings, fallback to text search
    try {
      const embeddingRes = await fetch(
        "https://api-inference.huggingface.co/embed/sentence-transformers/all-MiniLM-L6-v2",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inputs: message }),
        }
      );

      if (embeddingRes.ok) {
        const embeddingData = await embeddingRes.json();
        const queryEmbedding = embeddingData?.embedding;

        if (queryEmbedding) {
          const { data: similarChunks, error: searchError } =
            await supabase.rpc("match_documents_ollama", {
              query_embedding: queryEmbedding,
              match_threshold: 0.7,
              match_count: 5,
            });

          if (!searchError) {
            context =
              similarChunks?.map((c: any) => c.content).join("\n\n") || "";
          }
        }
      } else {
        console.log("Embedding API failed, using fallback context retrieval");
        context = await getContextWithoutEmbedding(supabase, message);
      }
    } catch (error) {
      console.log("Embedding failed, using fallback:", error.message);
      context = await getContextWithoutEmbedding(supabase, message);
    }

    // Try HF generation, fallback to simple response
    try {
      const systemPrompt = `You are CareerNamimi's AI assistant. Answer concisely and professionally (max 300 words):
Context: ${context}
Question: ${message}
Answer:`;

      const hfRes = await fetch(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${HF_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            inputs: systemPrompt,
            parameters: { max_new_tokens: 300, temperature: 0.7 },
          }),
        }
      );

      if (hfRes.ok) {
        const hfData = await hfRes.json();
        const generatedText = hfData[0]?.generated_text;
        if (generatedText) {
          botResponse = generatedText;
        }
      }
    } catch (error) {
      console.log(
        "HF generation failed, using simple response:",
        error.message
      );
    }

    // Use simple response if AI generation failed
    if (!botResponse) {
      console.log("Using fallback response generator");
      botResponse = generateSimpleResponse(message, context);
    }

    // Store conversation in Supabase
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
        .insert({ session_id: sessionId, user_id: userId })
        .select("id")
        .single();
      if (convError) throw convError;
      conversationId = newConv.id;
    }

    await supabase.from("chat_messages").insert([
      { conversation_id: conversationId, message, is_user_message: true },
      {
        conversation_id: conversationId,
        message: botResponse,
        is_user_message: false,
      },
    ]);

    return new Response(
      JSON.stringify({ response: botResponse, success: true }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("Chatbot error:", err);
    return new Response(
      JSON.stringify({
        response:
          "I'm experiencing technical difficulties right now. Please try again later.",
        success: false,
        error: "fallback_response",
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
