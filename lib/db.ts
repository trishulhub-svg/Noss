import { createClient, type Client } from "@libsql/client";

let client: Client | null = null;

export function getDb(): Client {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error("Turso credentials are not configured");
  }

  if (!client) {
    client = createClient({ url, authToken });
  }

  return client;
}

export const LEADS_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS leads (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  work_email TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  company_size TEXT,
  service_interests TEXT NOT NULL,
  message TEXT,
  privacy_acknowledged INTEGER NOT NULL CHECK (privacy_acknowledged = 1),
  privacy_notice_version TEXT NOT NULL,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  source_page TEXT NOT NULL,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  notification_attempts INTEGER NOT NULL DEFAULT 0,
  last_notification_error TEXT,
  request_fingerprint TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at);
CREATE INDEX IF NOT EXISTS idx_leads_work_email ON leads(work_email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_fingerprint ON leads(request_fingerprint);
`;

export async function ensureLeadsSchema(): Promise<void> {
  const db = getDb();
  await db.executeMultiple(LEADS_SCHEMA_SQL);
}
