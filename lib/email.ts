import nodemailer from "nodemailer";
import type { LeadRecord } from "@/lib/leads";

export type EmailResult =
  | { ok: true; provider: "smtp" | "resend" }
  | { ok: false; error: string };

function hasSmtpConfig(): boolean {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.SMTP_FROM,
  );
}

function formatInterests(interests: string[]): string {
  return interests.join(", ");
}

function buildBodies(lead: LeadRecord): { text: string; html: string } {
  const lines = [
    `New NOSS website enquiry`,
    ``,
    `Lead ID: ${lead.id}`,
    `Timestamp (UTC): ${lead.createdAt}`,
    `Source page: ${lead.sourcePage}`,
    ``,
    `Name: ${lead.name}`,
    `Work email: ${lead.workEmail}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone || "—"}`,
    `Company size: ${lead.companySize || "—"}`,
    `Service interests: ${formatInterests(lead.serviceInterests)}`,
    `Message: ${lead.message || "—"}`,
    ``,
    `Privacy acknowledged: yes (${lead.privacyNoticeVersion})`,
    `Marketing consent: ${lead.marketingConsent ? "yes" : "no"}`,
  ];
  const text = lines.join("\n");
  const html = `<pre style="font-family:ui-sans-serif,system-ui,sans-serif;white-space:pre-wrap">${text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")}</pre>`;
  return { text, html };
}

async function sendViaSmtp(lead: LeadRecord): Promise<EmailResult> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  const to = process.env.LEAD_NOTIFY_TO || "info@trishulhub.in";
  const { text, html } = buildBodies(lead);

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to,
    subject: `New NOSS website enquiry - ${lead.company}`,
    text,
    html,
  });

  return { ok: true, provider: "smtp" };
}

async function sendViaResend(lead: LeadRecord): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, error: "email_not_configured" };
  }

  const to = process.env.LEAD_NOTIFY_TO || "info@trishulhub.in";
  const from = process.env.SMTP_FROM || "NOSS Website <onboarding@resend.dev>";
  const { text, html } = buildBodies(lead);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New NOSS website enquiry - ${lead.company}`,
      text,
      html,
    }),
  });

  if (!res.ok) {
    return { ok: false, error: "email_provider_error" };
  }

  return { ok: true, provider: "resend" };
}

/**
 * Sends lead notification. Credentials remain server-only.
 * Returns a sanitized error category — never stack traces.
 */
export async function sendLeadNotification(
  lead: LeadRecord,
): Promise<EmailResult> {
  try {
    if (hasSmtpConfig()) {
      return await sendViaSmtp(lead);
    }
    if (process.env.RESEND_API_KEY) {
      return await sendViaResend(lead);
    }
    return { ok: false, error: "email_not_configured" };
  } catch {
    return { ok: false, error: "email_send_failed" };
  }
}
