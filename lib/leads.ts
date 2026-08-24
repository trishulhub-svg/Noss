import { createHash, randomUUID } from "crypto";
import { getDb, ensureLeadsSchema } from "@/lib/db";
import type { LeadInput } from "@/lib/validation";
import { siteConfig } from "@/lib/site";

export type LeadStatus =
  | "received"
  | "notification_pending"
  | "notified"
  | "notification_failed"
  | "closed";

export type LeadRecord = {
  id: string;
  name: string;
  workEmail: string;
  company: string;
  phone: string | null;
  companySize: string | null;
  serviceInterests: string[];
  message: string | null;
  privacyAcknowledged: boolean;
  privacyNoticeVersion: string;
  marketingConsent: boolean;
  sourcePage: string;
  status: LeadStatus;
  createdAt: string;
  updatedAt: string;
  notificationAttempts: number;
  lastNotificationError: string | null;
};

function nowIso(): string {
  return new Date().toISOString();
}

export function buildFingerprint(input: {
  workEmail: string;
  company: string;
  requestToken?: string;
}): string {
  const raw = [
    input.requestToken || "",
    input.workEmail.trim().toLowerCase(),
    input.company.trim().toLowerCase(),
    Math.floor(Date.now() / 60_000), // minute bucket
  ].join("|");
  return createHash("sha256").update(raw).digest("hex");
}

export async function findRecentDuplicate(
  fingerprint: string,
  withinMs = 120_000,
): Promise<LeadRecord | null> {
  await ensureLeadsSchema();
  const db = getDb();
  const cutoff = new Date(Date.now() - withinMs).toISOString();
  const result = await db.execute({
    sql: `SELECT * FROM leads
          WHERE request_fingerprint = ?
            AND created_at >= ?
          ORDER BY created_at DESC
          LIMIT 1`,
    args: [fingerprint, cutoff],
  });
  if (result.rows.length === 0) return null;
  return mapRow(result.rows[0] as Record<string, unknown>);
}

export async function createLead(
  input: LeadInput,
  fingerprint: string,
): Promise<LeadRecord> {
  await ensureLeadsSchema();
  const db = getDb();
  const id = randomUUID();
  const ts = nowIso();
  const emailNormalized = input.workEmail.trim().toLowerCase();

  await db.execute({
    sql: `INSERT INTO leads (
      id, name, work_email, company, phone, company_size, service_interests,
      message, privacy_acknowledged, privacy_notice_version, marketing_consent,
      source_page, status, created_at, updated_at, notification_attempts,
      last_notification_error, request_fingerprint
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?, 0, NULL, ?)`,
    args: [
      id,
      input.name.trim(),
      emailNormalized,
      input.company.trim(),
      input.phone?.trim() || null,
      input.companySize || null,
      JSON.stringify(input.serviceInterests),
      input.message?.trim() || null,
      siteConfig.privacyNoticeVersion,
      input.marketingConsent ? 1 : 0,
      input.sourcePage || "/contact",
      "received",
      ts,
      ts,
      fingerprint,
    ],
  });

  return {
    id,
    name: input.name.trim(),
    workEmail: emailNormalized,
    company: input.company.trim(),
    phone: input.phone?.trim() || null,
    companySize: input.companySize || null,
    serviceInterests: input.serviceInterests,
    message: input.message?.trim() || null,
    privacyAcknowledged: true,
    privacyNoticeVersion: siteConfig.privacyNoticeVersion,
    marketingConsent: Boolean(input.marketingConsent),
    sourcePage: input.sourcePage || "/contact",
    status: "received",
    createdAt: ts,
    updatedAt: ts,
    notificationAttempts: 0,
    lastNotificationError: null,
  };
}

export async function updateLeadNotification(
  id: string,
  status: Extract<LeadStatus, "notified" | "notification_failed" | "notification_pending">,
  error?: string | null,
): Promise<void> {
  const db = getDb();
  const ts = nowIso();
  await db.execute({
    sql: `UPDATE leads
          SET status = ?,
              updated_at = ?,
              notification_attempts = notification_attempts + 1,
              last_notification_error = ?
          WHERE id = ?`,
    args: [status, ts, error ?? null, id],
  });
}

function mapRow(row: Record<string, unknown>): LeadRecord {
  const interestsRaw = String(row.service_interests ?? "[]");
  let serviceInterests: string[] = [];
  try {
    serviceInterests = JSON.parse(interestsRaw);
  } catch {
    serviceInterests = [interestsRaw];
  }
  return {
    id: String(row.id),
    name: String(row.name),
    workEmail: String(row.work_email),
    company: String(row.company),
    phone: row.phone == null ? null : String(row.phone),
    companySize: row.company_size == null ? null : String(row.company_size),
    serviceInterests,
    message: row.message == null ? null : String(row.message),
    privacyAcknowledged: Boolean(row.privacy_acknowledged),
    privacyNoticeVersion: String(row.privacy_notice_version),
    marketingConsent: Boolean(row.marketing_consent),
    sourcePage: String(row.source_page),
    status: String(row.status) as LeadStatus,
    createdAt: String(row.created_at),
    updatedAt: String(row.updated_at),
    notificationAttempts: Number(row.notification_attempts ?? 0),
    lastNotificationError:
      row.last_notification_error == null
        ? null
        : String(row.last_notification_error),
  };
}
