import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONFIG = {
  allowedOrigins: [
    "https://careernamimi.org",
    "http://localhost:8080",
    "http://localhost:8000",
  ],

  validBudgets: ["under-50", "100-250", "250-300", "500-plus", "discuss"],

  validServices: [
    "ai-development",
    "branding-design",
    "cybersecurity",
    "system-analysis",
    "consulting",
  ],

  limits: {
    nameMaxLength: 100,
    companyMaxLength: 100,
    messageMaxLength: 2000,
  },

  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

// ============================================================================
// CORS HELPER
// ============================================================================

function getCorsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": CONFIG.allowedOrigins.includes(origin)
      ? origin
      : "https://careernamimi.org",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  };
}

// ============================================================================
// VALIDATION FUNCTIONS
// ============================================================================

function validateRequiredFields(body) {
  const { name, email, message } = body;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }
}

function validateEmail(email) {
  if (!CONFIG.emailRegex.test(email)) {
    throw new Error("Invalid email format");
  }
}

function validateOptionalFields(body) {
  const { service, budget } = body;

  if (service && !CONFIG.validServices.includes(service)) {
    throw new Error("Invalid service selection");
  }

  if (budget && !CONFIG.validBudgets.includes(budget)) {
    throw new Error("Invalid budget selection");
  }
}

function validateFieldLengths(body) {
  const { name, company, message } = body;

  if (name.length > CONFIG.limits.nameMaxLength) {
    throw new Error("Name too long");
  }

  if (company && company.length > CONFIG.limits.companyMaxLength) {
    throw new Error("Company name too long");
  }

  if (message.length > CONFIG.limits.messageMaxLength) {
    throw new Error("Message too long");
  }
}

function validateRequestBody(body) {
  validateRequiredFields(body);
  validateEmail(body.email);
  validateOptionalFields(body);
  validateFieldLengths(body);
}

// ============================================================================
// SUPABASE DATABASE FUNCTIONS
// ============================================================================

async function initializeSupabase() {
  const { createClient } = await import(
    "https://esm.sh/@supabase/supabase-js@2"
  );

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Supabase URL or Service Role Key missing");
  }

  return createClient(supabaseUrl, supabaseKey);
}

async function saveContactToDatabase(contactData) {
  const supabase = await initializeSupabase();

  const { error } = await supabase.from("contacts").insert([contactData]);

  if (error) {
    throw new Error(`Database error: ${error.message}`);
  }
}

// ============================================================================
// EMAIL FUNCTIONS
// ============================================================================

function getEmailConfig() {
  const emailUser = Deno.env.get("EMAIL_USER");
  const emailPass = Deno.env.get("EMAIL_PASS");
  const emailHost = Deno.env.get("EMAIL_HOST") || "smtp.hostinger.com";
  const emailPort = Number(Deno.env.get("EMAIL_PORT") || 465);
  const recipient = Deno.env.get("RECIPIENT_EMAIL");

  if (!emailUser || !emailPass || !recipient) {
    throw new Error("SMTP credentials missing");
  }

  return { emailUser, emailPass, emailHost, emailPort, recipient };
}

function generatePlainTextEmail(contactData) {
  const { name, email, company, service, budget, message } = contactData;

  return `
New Contact Request:
Name: ${name}
Email: ${email}
${company ? `Company: ${company}` : ""}
${service ? `Service: ${service}` : ""}
${budget ? `Budget: ${budget}` : ""}
Message:
${message}
  `;
}

function generateHtmlEmail(contactData) {
  const { name, email, company, service, budget, message } = contactData;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Arial', 'Helvetica', sans-serif; background-color: #f5f7fa; color: #333333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #fa057e 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <div style="background-color: rgba(255,255,255,0.1); display: inline-block; padding: 15px; border-radius: 50%; margin-bottom: 10px;">
                <div style="width: 40px; height: 40px; background-color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                    <span style="font-size: 20px; color: #fa057e;">📧</span>
                </div>
            </div>
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">
                New Contact Request
            </h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">
                Someone just reached out through your website
            </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 40px 30px;">
            
            <!-- Contact Info Grid -->
            <div style="display: table; width: 100%; margin-bottom: 30px;">
                
                <!-- Name -->
                <div style="display: table-row;">
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Name</span>
                    </div>
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; padding-left: 20px;">
                        <span style="font-size: 16px; color: #333; font-weight: 500;">${name}</span>
                    </div>
                </div>
                
                <!-- Email -->
                <div style="display: table-row;">
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Email</span>
                    </div>
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; padding-left: 20px;">
                        <a href="mailto:${email}" style="color: #fa057e; text-decoration: none; font-size: 16px; font-weight: 500;">${email}</a>
                    </div>
                </div>
                
                ${
                  company
                    ? `
                <!-- Company -->
                <div style="display: table-row;">
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Company</span>
                    </div>
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; padding-left: 20px;">
                        <span style="font-size: 16px; color: #333; font-weight: 500;">${company}</span>
                    </div>
                </div>
                `
                    : ""
                }
                
                ${
                  service
                    ? `
                <!-- Service -->
                <div style="display: table-row;">
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Service</span>
                    </div>
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; padding-left: 20px;">
                        <span style="background: linear-gradient(135deg, #fa057e, #764ba2); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-size: 16px; font-weight: 600;">${service}</span>
                    </div>
                </div>
                `
                    : ""
                }
                
                ${
                  budget
                    ? `
                <!-- Budget -->
                <div style="display: table-row;">
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; width: 120px;">
                        <span style="font-weight: 600; color: #555; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">Budget</span>
                    </div>
                    <div style="display: table-cell; padding: 12px 0; border-bottom: 1px solid #f0f0f0; vertical-align: top; padding-left: 20px;">
                        <span style="font-size: 16px; color: #28a745; font-weight: 600;">${budget}</span>
                    </div>
                </div>
                `
                    : ""
                }
                
            </div>
            
            <!-- Message Section -->
            <div style="margin-top: 30px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">
                    💬 Message
                </h3>
                <div style="background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%); border-left: 4px solid #fa057e; padding: 25px; border-radius: 8px; line-height: 1.6;">
                    <p style="margin: 0; font-size: 16px; color: #444; white-space: pre-line;">${message.replace(
                      /\n/g,
                      "<br/>"
                    )}</p>
                </div>
            </div>
            
            <!-- Action Button -->
            <div style="text-align: center; margin-top: 35px;">
                <a href="mailto:${email}?subject=Re: Your inquiry" 
                   style="display: inline-block; 
                          background: linear-gradient(135deg, #fa057e 0%, #764ba2 100%); 
                          color: #ffffff; 
                          text-decoration: none; 
                          padding: 15px 30px; 
                          border-radius: 25px; 
                          font-weight: 600; 
                          font-size: 16px; 
                          letter-spacing: 0.5px;
                          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                          transition: all 0.3s ease;">
                    Reply to ${name} →
                </a>
            </div>
            
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 25px 30px; border-top: 1px solid #e9ecef; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #6c757d; line-height: 1.5;">
                📅 <strong>Received:</strong> ${new Date().toLocaleString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  }
                )}
            </p>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #dee2e6;">
                <p style="margin: 0; font-size: 12px; color: #adb5bd;">
                    This message was automatically sent from your website contact form
                </p>
            </div>
        </div>
        
    </div>
</body>
</html>
  `;
}

async function sendNotificationEmail(contactData) {
  const config = getEmailConfig();
  const nodemailer = await import("npm:nodemailer@6.9.4");

  const transporter = nodemailer.createTransport({
    host: config.emailHost,
    port: config.emailPort,
    secure: config.emailPort === 465,
    auth: {
      user: config.emailUser,
      pass: config.emailPass,
    },
  });

  const textBody = generatePlainTextEmail(contactData);
  const htmlBody = generateHtmlEmail(contactData);

  await transporter.sendMail({
    from: `"Website Contact" <${config.emailUser}>`,
    to: config.recipient,
    subject: `New contact from ${contactData.name}`,
    text: textBody,
    html: htmlBody,
    replyTo: contactData.email,
  });
}

// ============================================================================
// REQUEST HANDLERS
// ============================================================================

function handleOptionsRequest(corsHeaders) {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
}

function handleInvalidMethod(corsHeaders) {
  return new Response(JSON.stringify({ error: "Method not allowed" }), {
    status: 405,
    headers: corsHeaders,
  });
}

function handleError(error, corsHeaders) {
  console.error("Error in function:", error);

  return new Response(JSON.stringify({ error: error.message }), {
    status:
      error.message.includes("Missing") ||
      error.message.includes("Invalid") ||
      error.message.includes("too long")
        ? 400
        : 500,
    headers: corsHeaders,
  });
}

function handleSuccess(corsHeaders) {
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: corsHeaders,
  });
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

async function handleContactRequest(req, corsHeaders) {
  // Parse JSON body
  let body;
  try {
    body = await req.json();
  } catch {
    throw new Error("Invalid JSON");
  }

  // Extract contact data
  const { name, email, company, service, budget, message } = body;
  const contactData = { name, email, company, service, budget, message };

  // Validate all input
  validateRequestBody(contactData);

  // Save to database
  await saveContactToDatabase(contactData);

  // Send notification email
  await sendNotificationEmail(contactData);

  return handleSuccess(corsHeaders);
}

// ============================================================================
// MAIN SERVER FUNCTION
// ============================================================================

serve(async (req) => {
  try {
    const origin = req.headers.get("origin") || "";
    const corsHeaders = getCorsHeaders(origin);

    // Handle preflight OPTIONS request
    if (req.method === "OPTIONS") {
      return handleOptionsRequest(corsHeaders);
    }

    // Only allow POST requests
    if (req.method !== "POST") {
      return handleInvalidMethod(corsHeaders);
    }

    // Process the contact request
    return await handleContactRequest(req, corsHeaders);
  } catch (error) {
    const origin = req.headers.get("origin") || "";
    const corsHeaders = getCorsHeaders(origin);
    return handleError(error, corsHeaders);
  }
});
