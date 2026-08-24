import { z } from "zod";
import { companySizeOptions, serviceInterestOptions } from "@/lib/site";

const serviceValues = serviceInterestOptions.map((o) => o.value) as [
  string,
  ...string[],
];
const sizeValues = companySizeOptions.map((o) => o.value) as [string, ...string[]];

export const leadInputSchema = z
  .object({
    name: z.preprocess(
      (v) => (typeof v === "string" ? v : ""),
      z
        .string()
        .trim()
        .min(2, "Please enter your name.")
        .max(100, "Name is too long."),
    ),
    workEmail: z.preprocess(
      (v) => (typeof v === "string" ? v : ""),
      z
        .string()
        .trim()
        .min(1, "Please enter a valid work email.")
        .email("Please enter a valid work email.")
        .max(254, "Email is too long."),
    ),
    company: z.preprocess(
      (v) => (typeof v === "string" ? v : ""),
      z
        .string()
        .trim()
        .min(2, "Please enter your company name.")
        .max(150, "Company name is too long."),
    ),
    phone: z.preprocess(
      (v) => (v == null ? "" : v),
      z.string().trim().max(40, "Phone number is too long."),
    ),
    companySize: z.preprocess(
      (v) => (v == null || v === "" ? undefined : v),
      z.enum(sizeValues).optional(),
    ),
    serviceInterests: z.preprocess(
      (v) => (Array.isArray(v) ? v : []),
      z
        .array(z.enum(serviceValues))
        .min(1, "Select at least one service interest."),
    ),
    message: z.preprocess(
      (v) => (v == null ? "" : v),
      z.string().trim().max(2000, "Message is too long."),
    ),
    privacyAcknowledged: z
      .boolean()
      .refine((v) => v === true, {
        message: "You must acknowledge the Privacy Notice to continue.",
      }),
    marketingConsent: z.preprocess((v) => v === true, z.boolean()),
    website: z.preprocess(
      (v) => (typeof v === "string" ? v : ""),
      // Honeypot: allow filled values; route treats non-empty as bot and returns fake success
      z.string().max(200),
    ),
    sourcePage: z.preprocess(
      (v) => {
        if (typeof v !== "string" || !v.trim()) return "/contact";
        const trimmed = v.trim().slice(0, 200);
        return trimmed.startsWith("/") ? trimmed : "/contact";
      },
      z.string().max(200),
    ),
    requestToken: z.preprocess(
      (v) => (typeof v === "string" ? v : undefined),
      z.string().trim().min(8).max(128).optional(),
    ),
  })
  .strict();

export type LeadInput = z.infer<typeof leadInputSchema>;

export type FieldErrors = Record<string, string>;

export function formatZodErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form";
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
