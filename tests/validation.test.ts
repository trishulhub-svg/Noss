import { describe, expect, it } from "vitest";
import { formatZodErrors, leadInputSchema } from "@/lib/validation";

const valid = {
  name: "Alex Example",
  workEmail: "alex@example.com",
  company: "Example Ltd",
  phone: "+44 7700 900123",
  companySize: "11-50",
  serviceInterests: ["workforce_compliance"],
  message: "Please book a demo",
  privacyAcknowledged: true,
  marketingConsent: false,
  sourcePage: "/contact",
  website: "",
  requestToken: "test-token-123456",
};

describe("leadInputSchema", () => {
  it("accepts a valid payload", () => {
    const result = leadInputSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("rejects missing required fields", () => {
    const result = leadInputSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      const errors = formatZodErrors(result.error);
      expect(errors.name).toBeTruthy();
      expect(errors.workEmail).toBeTruthy();
      expect(errors.company).toBeTruthy();
    }
  });

  it("rejects invalid email", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      workEmail: "not-an-email",
    });
    expect(result.success).toBe(false);
  });

  it("requires at least one service interest", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      serviceInterests: [],
    });
    expect(result.success).toBe(false);
  });

  it("requires privacy acknowledgement", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      privacyAcknowledged: false,
    });
    expect(result.success).toBe(false);
  });

  it("keeps marketing consent optional/independent", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      marketingConsent: false,
    });
    expect(result.success).toBe(true);
  });

  it("rejects unknown fields", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      unexpected: "nope",
    });
    expect(result.success).toBe(false);
  });

  it("allows honeypot fill so the API can silently ignore bots", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      website: "https://spam.example",
    });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.website).toBe("https://spam.example");
  });

  it("normalises unsafe sourcePage values to /contact", () => {
    const result = leadInputSchema.safeParse({
      ...valid,
      sourcePage: "javascript:alert(1)",
    });
    expect(result.success).toBe(true);
    if (result.success) expect(result.data.sourcePage).toBe("/contact");
  });
});
