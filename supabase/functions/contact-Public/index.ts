import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ============================================================================
// CONFIGURATION
// ============================================================================
const CONFIG = {
  allowedOrigins: [
    "https://careernamimi.org",
    "https://www.careernamimi.org",
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
  recaptcha: {
    secretKey: Deno.env.get("RECAPTCHA_SECRET_KEY"),
    verifyUrl: "https://www.google.com/recaptcha/api/siteverify",
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
// RECAPTCHA VALIDATION WITH DETAILED DEBUGGING
// ============================================================================
async function validateRecaptcha(token: string, remoteip?: string) {
  if (!CONFIG.recaptcha.secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not configured, skipping validation");
    return true; // Skip validation if not configured
  }

  if (!token) {
    console.error("No reCAPTCHA token provided");
    return false;
  }

  try {
    const formData = new URLSearchParams({
      secret: CONFIG.recaptcha.secretKey,
      response: token,
      ...(remoteip && { remoteip }),
    });

    // console.log(
    //   "Making reCAPTCHA verification request to:",
    //   CONFIG.recaptcha.verifyUrl
    // );
    // console.log("Form data:", Object.fromEntries(formData.entries()));

    const response = await fetch(CONFIG.recaptcha.verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    // console.log("Google response status:", response.status);
    // console.log(
    //   "Google response headers:",
    //   Object.fromEntries(response.headers.entries())
    // );

    const responseText = await response.text();
    // console.log("Google raw response:", responseText);

    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error("Failed to parse Google response:", parseError);
      return false;
    }

    // console.log("reCAPTCHA validation result:", {
    //   success: result.success,
    //   score: result.score,
    //   action: result.action,
    //   hostname: result.hostname,
    //   challengeTimestamp: result.challenge_ts,
    //   errorCodes: result["error-codes"],
    //   raw: result,
    // });

    if (!result.success) {
      console.error(
        "reCAPTCHA validation failed with errors:",
        result["error-codes"]
      );

      // Detailed error explanations
      const errorMappings = {
        "missing-input-secret": "The secret parameter is missing",
        "invalid-input-secret": "The secret parameter is invalid or malformed",
        "missing-input-response": "The response parameter is missing",
        "invalid-input-response":
          "The response parameter is invalid or malformed",
        "bad-request": "The request is invalid or malformed",
        "timeout-or-duplicate":
          "The response is no longer valid: either is too old or has been used previously",
      };

      if (result["error-codes"]) {
        result["error-codes"].forEach((code: string) => {
          console.error(
            `Error ${code}: ${errorMappings[code] || "Unknown error"}`
          );
        });
      }

      return false;
    }

    // For v2, just check success
    if (result.score !== undefined) {
      // This is v3 - check score
      // console.log("reCAPTCHA v3 detected, score:", result.score);
      const isValid = result.success && result.score >= 0.5;
      // console.log("v3 validation result:", isValid);
      return isValid;
    } else {
      return result.success;
    }
  } catch (error) {
    console.error("reCAPTCHA validation error:", error);
    console.error("Error stack:", error.stack);
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
      host: Deno.env.get("EMAIL_HOST") || "smtp.hostinger.com",
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
      text: `Name: ${name}\nEmail: ${email}\n${
        subject ? `Subject: ${subject}\n` : ""
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
    `${new Date().toISOString()} - ${
      req.method
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
        recaptchaToken: body.recaptchaToken
          ? `TOKEN_LENGTH_${body.recaptchaToken.length}`
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

    // Validate reCAPTCHA if token provided
    if (body.recaptchaToken) {
      const isRecaptchaValid = await validateRecaptcha(
        body.recaptchaToken,
        clientIP
      );
      if (!isRecaptchaValid) {
        return createResponse(
          { success: false, error: "reCAPTCHA validation failed" },
          400,
          corsHeaders
        );
      }
      console.log("reCAPTCHA validation passed");
    } else {
      console.warn("No reCAPTCHA token provided");
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
