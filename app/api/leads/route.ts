import { NextResponse } from "next/server";
import {
  buildFingerprint,
  createLead,
  findRecentDuplicate,
  updateLeadNotification,
} from "@/lib/leads";
import { sendLeadNotification } from "@/lib/email";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { createCorrelationId, logLeadOutcome } from "@/lib/logging";
import { formatZodErrors, leadInputSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const correlationId = createCorrelationId();

  try {
    const ip = getClientIp(request.headers);
    const limited = checkRateLimit(`lead:${ip}`);
    if (!limited.allowed) {
      logLeadOutcome({
        correlationId,
        status: "rate_limited",
        httpStatus: 429,
        errorCategory: "rate_limited",
      });
      return NextResponse.json(
        {
          ok: false,
          message:
            "Too many submissions from this network. Please wait and try again.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(limited.retryAfterSec) },
        },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, message: "Invalid request body." },
        { status: 400 },
      );
    }

    // Reject oversize payloads early (text-only forms)
    const rawSize = JSON.stringify(body).length;
    if (rawSize > 20_000) {
      return NextResponse.json(
        { ok: false, message: "Request is too large." },
        { status: 400 },
      );
    }

    const parsed = leadInputSchema.safeParse(body);
    if (!parsed.success) {
      logLeadOutcome({
        correlationId,
        status: "validation_error",
        httpStatus: 422,
        errorCategory: "validation",
      });
      return NextResponse.json(
        {
          ok: false,
          message: "Please check the highlighted fields.",
          errors: formatZodErrors(parsed.error),
        },
        { status: 422 },
      );
    }

    // Honeypot filled → pretend success without storing
    if (parsed.data.website) {
      return NextResponse.json({
        ok: true,
        message:
          "Thank you. Your enquiry has been received. A NOSS team member will follow up using the details you provided.",
      });
    }

    const fingerprint = buildFingerprint({
      workEmail: parsed.data.workEmail,
      company: parsed.data.company,
      requestToken: parsed.data.requestToken,
    });

    const duplicate = await findRecentDuplicate(fingerprint);
    if (duplicate) {
      logLeadOutcome({
        correlationId,
        status: "success",
        httpStatus: 200,
        leadId: duplicate.id,
        errorCategory: "duplicate_suppressed",
      });
      return NextResponse.json({
        ok: true,
        message:
          "Thank you. Your enquiry has already been received. A NOSS team member will follow up using the details you provided.",
      });
    }

    const lead = await createLead(parsed.data, fingerprint);

    await updateLeadNotification(lead.id, "notification_pending");
    const emailResult = await sendLeadNotification(lead);

    if (emailResult.ok) {
      await updateLeadNotification(lead.id, "notified");
      logLeadOutcome({
        correlationId,
        status: "success",
        httpStatus: 201,
        leadId: lead.id,
      });
    } else {
      await updateLeadNotification(
        lead.id,
        "notification_failed",
        emailResult.error,
      );
      logLeadOutcome({
        correlationId,
        status: "success",
        httpStatus: 201,
        leadId: lead.id,
        errorCategory: emailResult.error,
      });
    }

    // DB-first reliability: enquiry retained even if notification failed
    return NextResponse.json(
      {
        ok: true,
        message:
          "Thank you. Your enquiry has been received. A NOSS team member will follow up using the details you provided.",
      },
      { status: 201 },
    );
  } catch {
    logLeadOutcome({
      correlationId,
      status: "server_error",
      httpStatus: 500,
      errorCategory: "server_error",
    });
    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit your enquiry right now. Please try again shortly.",
        correlationId,
      },
      { status: 500 },
    );
  }
}
