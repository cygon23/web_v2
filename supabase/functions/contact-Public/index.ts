import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ============================================================================
// CONFIGURATION
// ============================================================================
const CONFIG = {
  allowedOrigins: [
    "https://careernamimii.org",
    "https://www.careernamimii.org",
    "http://localhost:8080",
    "http://localhost:5173", // Vite default
    "https://localhost:8000",
  ],
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  limits: {
    nameMaxLength: 100,
    subjectMaxLength: 200,
    messageMaxLength: 2000,
  },
  turnstile: {
    secretKey: Deno.env.get("TURNSTILE_SECRET_KEY"),
    verifyUrl: "https://challenges.cloudflare.com/turnstile/v0/siteverify",
  },
};

// ============================================================================
// CORS HELPER
// ============================================================================
function getCorsHeaders(origin: string) {
  const isAllowed =
    CONFIG.allowedOrigins.includes(origin) ||
    origin.includes("localhost") ||
    origin.includes("127.0.0.1");

  return {
    "Access-Control-Allow-Origin": isAllowed
      ? origin
      : CONFIG.allowedOrigins[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Content-Type": "application/json",
  };
}

// ============================================================================
// TURNSTILE VALIDATION
// ============================================================================
async function validateTurnstile(token: string, remoteip?: string) {
  if (!CONFIG.turnstile.secretKey) {
    console.warn("TURNSTILE_SECRET_KEY not configured, skipping validation");
    return true; // Skip validation if not configured
  }

  if (!token) {
    console.error("No Turnstile token provided");
    return false;
  }

  try {
    const formData = new URLSearchParams({
      secret: CONFIG.turnstile.secretKey,
      response: token,
      ...(remoteip && { remoteip }),
    });

    const response = await fetch(CONFIG.turnstile.verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      console.error(
        "Turnstile validation failed with errors:",
        result["error-codes"]
      );
      return false;
    }

    return true;
  } catch (error) {
    console.error("Turnstile validation error:", error);
    return false;
  }
}

// ============================================================================
// VALIDATION
// ============================================================================
function validateInput(body: any) {
  const { name, email, message, subject } = body;

  if (!name || !email || !message) {
    throw new Error("Missing required fields: name, email, message");
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string"
  ) {
    throw new Error("Invalid field types");
  }

  if (!CONFIG.emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }

  if (name.length < 2 || name.length > CONFIG.limits.nameMaxLength) {
    throw new Error(
      `Name must be between 2 and ${CONFIG.limits.nameMaxLength} characters`
    );
  }

  if (subject && subject.length > CONFIG.limits.subjectMaxLength) {
    throw new Error(
      `Subject must be less than ${CONFIG.limits.subjectMaxLength} characters`
    );
  }

  if (message.length < 10 || message.length > CONFIG.limits.messageMaxLength) {
    throw new Error(
      `Message must be between 10 and ${CONFIG.limits.messageMaxLength} characters`
    );
  }

  return true;
}

// ============================================================================
// EMAIL FUNCTION
// ============================================================================
async function sendEmail(contactData: any) {
  try {
    const nodemailer = await import("npm:nodemailer@6.9.4");

    const transporter = nodemailer.createTransport({
      host: Deno.env.get("EMAIL_HOST") || "smtp.zoho.com",
      port: Number(Deno.env.get("EMAIL_PORT") || 465),
      secure: true,
      auth: {
        user: Deno.env.get("EMAIL_USER"),
        pass: Deno.env.get("EMAIL_PASS"),
      },
    });

    const { name, email, subject, message } = contactData;
    const emailSubject = subject || "New Contact Form Submission";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-left: 4px solid #007bff; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This message was sent from your website contact form.
        </p>
      </div>
    `;

    const mailOptions = {
      from: `"Website Contact Form" <${Deno.env.get("EMAIL_USER")}>`,
      to: Deno.env.get("RECIPIENT_EMAIL") || Deno.env.get("EMAIL_USER"),
      subject: `Contact Form: ${emailSubject}`,
      text: `Name: ${name}\nEmail: ${email}\n${subject ? `Subject: ${subject}\n` : ""
        }Message:\n${message}`,
      html: htmlBody,
      replyTo: email,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
}

// ============================================================================
// RESPONSE HELPERS
// ============================================================================
function createResponse(data: any, status: number, corsHeaders: any) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

// ============================================================================
// MAIN SERVER
// ============================================================================
serve(async (req: Request) => {
  const origin = req.headers.get("origin") || "";
  const corsHeaders = getCorsHeaders(origin);
  const clientIP =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  console.log("=== NEW REQUEST ===");
  console.log(
    `${new Date().toISOString()} - ${req.method
    } request from ${origin} (IP: ${clientIP})`
  );

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Only allow POST requests
  if (req.method !== "POST") {
    return createResponse(
      { success: false, error: "Method not allowed" },
      405,
      corsHeaders
    );
  }

  try {
    // Parse request body
    let body;
    try {
      body = await req.json();
      console.log("Request body received:", {
        ...body,
        captchaToken: body.captchaToken
          ? `TOKEN_LENGTH_${body.captchaToken.length}`
          : undefined,
      });
    } catch (error) {
      console.error("JSON parsing error:", error);
      return createResponse(
        { success: false, error: "Invalid JSON in request body" },
        400,
        corsHeaders
      );
    }

    // Validate input
    validateInput(body);

    // Validate Turnstile if token provided
    if (body.captchaToken) {
      const isTurnstileValid = await validateTurnstile(
        body.captchaToken,
        clientIP
      );
      if (!isTurnstileValid) {
        return createResponse(
          { success: false, error: "Security check validation failed" },
          400,
          corsHeaders
        );
      }
      console.log("Turnstile validation passed");
    } else {
      console.warn("No Turnstile token provided");
    }

    // Send email
    await sendEmail(body);

    console.log("Contact form processed successfully");
    return createResponse(
      {
        success: true,
        message: "Your message has been sent successfully!",
      },
      200,
      corsHeaders
    );
  } catch (error) {
    console.error("Server error:", error);
    return createResponse(
      {
        success: false,
        error: error.message || "Internal server error",
      },
      500,
      corsHeaders
    );
  }
});
