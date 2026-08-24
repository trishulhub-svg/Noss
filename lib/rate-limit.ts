type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult =
  | { allowed: true }
  | { allowed: false; retryAfterSec: number };

/**
 * Simple in-memory rate limiter for serverless/edge-lite use.
 * Suitable for Phase 1 low volume; not a distributed store.
 */
export function checkRateLimit(
  key: string,
  windowMs = Number(process.env.LEAD_RATE_LIMIT_WINDOW_MS || 900_000),
  max = Number(process.env.LEAD_RATE_LIMIT_MAX || 8),
): RateLimitResult {
  const now = Date.now();
  const existing = buckets.get(key);

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true };
  }

  if (existing.count >= max) {
    return {
      allowed: false,
      retryAfterSec: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);
  return { allowed: true };
}

export function getClientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return headers.get("x-real-ip") || "unknown";
}

/** Test helper */
export function __resetRateLimitForTests(): void {
  buckets.clear();
}
