/**
 * NOSS design tokens — aligned to design-system/noss/MASTER.md
 * (UI/UX Pro Max) while keeping a calm trust teal for verified states.
 */
export const colors = {
  primary: "#0F172A",
  secondary: "#334155",
  accent: "#0369A1",
  background: "#F8FAFC",
  foreground: "#020617",
  card: "#FFFFFF",
  muted: "#E8ECF1",
  mutedForeground: "#475569",
  border: "#E2E8F0",
  destructive: "#DC2626",
  success: "#067647",
  verified: "#0F766E",
  // legacy aliases used by older classnames during redesign
  primaryNavy: "#0F172A",
  actionBlue: "#0369A1",
  complianceTeal: "#0F766E",
  slate: "#475569",
  surface: "#F8FAFC",
  text: "#020617",
  white: "#FFFFFF",
  error: "#DC2626",
} as const;

export const siteConfig = {
  name: "NOSS",
  legalNamePending: true,
  domain: "noss.vercel.app",
  leadEmail: "info@trishulhub.in",
  supportPhone: process.env.NEXT_PUBLIC_SUPPORT_PHONE || "+91 966210793",
  supportWhatsApp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || "+91 966210793",
  description:
    "NOSS helps UK agencies and employers organise worker checks, business papers, follow-up and progress in one place.",
  privacyNoticeVersion: process.env.PRIVACY_NOTICE_VERSION || "2026-08-24",
} as const;

/** Digits-only for tel: and wa.me links */
export function phoneDigits(value: string): string {
  return value.replace(/[^\d+]/g, "").replace(/^\+/, "");
}

export const navLinks = [
  {
    label: "Services",
    href: "/workforce-compliance",
    children: [
      { label: "Worker checks", href: "/workforce-compliance" },
      { label: "Business checks", href: "/business-compliance" },
    ],
  },
  {
    label: "Who we help",
    href: "/industries/recruitment-agencies",
    children: [
      { label: "Recruitment agencies", href: "/industries/recruitment-agencies" },
      { label: "Employers", href: "/industries/employers" },
    ],
  },
  { label: "How it works", href: "/how-it-works" },
  { label: "Help", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Complaints", href: "/complaints" },
] as const;

export const serviceInterestOptions = [
  { value: "workforce_compliance", label: "Worker checks" },
  { value: "business_compliance", label: "Business checks" },
  { value: "other", label: "Not sure yet" },
] as const;

export const companySizeOptions = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-500", label: "201–500" },
  { value: "500+", label: "500+" },
] as const;
