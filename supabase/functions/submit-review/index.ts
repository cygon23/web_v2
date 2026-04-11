import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.7";

const CONFIG = {
  allowedOrigins: [
    "https://careernamimii.org",
    "https://www.careernamimii.org",
    "http://localhost:8080",
    "http://localhost:5173",
  ],
  turnstile: {
    secretKey: Deno.env.get("TURNSTILE_SECRET_KEY"),
    verifyUrl: "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  },
};

function getCorsHeaders(origin: string) {
  const isAllowed =
    CONFIG.allowedOrigins.includes(origin) ||
    origin.includes("localhost") ||
    origin.includes("127.0.0.1");

  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : CONFIG.allowedOrigins[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, x-client-info, apikey",
    "Content-Type": "application/json",
  };
}

async function validateTurnstile(token: string, remoteip?: string) {
  if (!CONFIG.turnstile.secretKey) {
    console.warn("TURNSTILE_SECRET_KEY not configured, skipping validation");
    return true;
  }

  if (!token) return false;

  try {
    const formData = new URLSearchParams({
      secret: CONFIG.turnstile.secretKey,
      response: token,
      ...(remoteip && { remoteip }),
    });

    const response = await fetch(CONFIG.turnstile.verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    const result = await response.json();
    return result.success;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return false;
  }
}

serve(async (req) => {
  const origin = req.headers.get("origin") || "";
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const body = await req.json();
    const { name, role, content, rating, captchaToken, avatar_url } = body;

    if (!name || !content || !rating || !captchaToken) {
      throw new Error("Missing required fields");
    }

    // Validate Turnstile
    const clientIP = req.headers.get("x-forwarded-for") || "unknown";
    const isTurnstileValid = await validateTurnstile(captchaToken, clientIP);
    if (!isTurnstileValid) {
      return new Response(JSON.stringify({ success: false, error: "Invalid security token" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    // Insert into DB
    const { error } = await supabaseClient
      .from("testimonials")
      .insert([
        { 
          name, 
          role, 
          content, 
          rating, 
          avatar_url,
          approved: true // Live immediately per user request
        }
      ]);

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, message: "Review submitted successfully!" }), {
      status: 200,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: corsHeaders,
    });
  }
});
