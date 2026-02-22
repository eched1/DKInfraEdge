import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import sgMail from "@sendgrid/mail";
import { rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";
import { SERVICE_TYPES } from "@/lib/constants";

const contactSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email().max(254),
  company: z.string().min(1).max(100),
  phone: z.string().max(30).optional().default(""),
  serviceType: z.enum(SERVICE_TYPES as unknown as [string, ...string[]]),
  budgetRange: z.string().max(50).optional().default(""),
  timeline: z.string().max(50).optional().default(""),
  message: z.string().min(10).max(5000),
  honeypot: z.string().max(0).optional().default(""),
  turnstileToken: z.string().optional().default(""),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";
    const { success, remaining } = rateLimit(ip);

    if (!success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": "60", "X-RateLimit-Remaining": "0" },
        }
      );
    }

    // Parse body
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Please check your form inputs and try again." },
        { status: 400 }
      );
    }

    const data = result.data;

    // Honeypot check
    if (data.honeypot) {
      // Silently accept but don't send (bot trap)
      return NextResponse.json({ success: true });
    }

    // Turnstile verification
    if (data.turnstileToken) {
      const valid = await verifyTurnstile(data.turnstileToken);
      if (!valid) {
        return NextResponse.json(
          { error: "CAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }
    } else if (process.env.TURNSTILE_SECRET_KEY) {
      // Turnstile is configured but no token provided
      return NextResponse.json(
        { error: "CAPTCHA verification required." },
        { status: 400 }
      );
    }

    // Send email via SendGrid
    const apiKey = process.env.SENDGRID_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL_TO;
    const fromEmail = process.env.CONTACT_EMAIL_FROM;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("SendGrid environment variables not configured");
      return NextResponse.json(
        { error: "Contact form is temporarily unavailable. Please email us directly." },
        { status: 503 }
      );
    }

    sgMail.setApiKey(apiKey);

    const optionalFields = [
      data.phone && `Phone: ${data.phone}`,
      data.budgetRange && `Budget: ${data.budgetRange}`,
      data.timeline && `Timeline: ${data.timeline}`,
    ]
      .filter(Boolean)
      .join("\n");

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: data.email,
      subject: `[DK Infra Edge] ${data.serviceType} inquiry from ${data.company}`,
      text: [
        `Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Company: ${data.company}`,
        `Service: ${data.serviceType}`,
        optionalFields,
        "",
        "Message:",
        data.message,
      ]
        .filter(Boolean)
        .join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px">${escapeHtml(data.fullName)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px">${escapeHtml(data.company)}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Service</td><td style="padding:8px">${escapeHtml(data.serviceType)}</td></tr>
          ${data.phone ? `<tr><td style="padding:8px;font-weight:bold;">Phone</td><td style="padding:8px">${escapeHtml(data.phone)}</td></tr>` : ""}
          ${data.budgetRange ? `<tr><td style="padding:8px;font-weight:bold;">Budget</td><td style="padding:8px">${escapeHtml(data.budgetRange)}</td></tr>` : ""}
          ${data.timeline ? `<tr><td style="padding:8px;font-weight:bold;">Timeline</td><td style="padding:8px">${escapeHtml(data.timeline)}</td></tr>` : ""}
        </table>
        <h3>Message</h3>
        <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
      `,
    });

    return NextResponse.json(
      { success: true },
      { headers: { "X-RateLimit-Remaining": String(remaining) } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
