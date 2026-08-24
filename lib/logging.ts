import { randomUUID } from "crypto";

export function createCorrelationId(): string {
  return randomUUID();
}

/**
 * Structured outcome log — never log full form payloads or secrets.
 */
export function logLeadOutcome(input: {
  correlationId: string;
  status: "success" | "validation_error" | "rate_limited" | "server_error";
  httpStatus: number;
  leadId?: string;
  errorCategory?: string;
}): void {
  const entry = {
    ts: new Date().toISOString(),
    event: "lead_submission",
    ...input,
  };
  console.info(JSON.stringify(entry));
}
