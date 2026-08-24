import { beforeEach, describe, expect, it } from "vitest";
import {
  __resetRateLimitForTests,
  checkRateLimit,
} from "@/lib/rate-limit";

describe("checkRateLimit", () => {
  beforeEach(() => {
    __resetRateLimitForTests();
  });

  it("allows requests under the max", () => {
    expect(checkRateLimit("k", 60_000, 3).allowed).toBe(true);
    expect(checkRateLimit("k", 60_000, 3).allowed).toBe(true);
    expect(checkRateLimit("k", 60_000, 3).allowed).toBe(true);
  });

  it("blocks when max exceeded", () => {
    checkRateLimit("k2", 60_000, 1);
    const blocked = checkRateLimit("k2", 60_000, 1);
    expect(blocked.allowed).toBe(false);
    if (!blocked.allowed) {
      expect(blocked.retryAfterSec).toBeGreaterThan(0);
    }
  });
});
