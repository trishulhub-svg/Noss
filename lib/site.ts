/**
 * NOSS visual theme — bold black / white / lime (WizardZ-inspired).
 * Fonts remain Plus Jakarta Sans. Features unchanged.
 */
export const colors = {
  black: "#191A23",
  white: "#FFFFFF",
  lime: "#B9FF66",
  gray: "#F3F3F3",
  primary: "#191A23",
  accent: "#B9FF66",
  background: "#FFFFFF",
  foreground: "#191A23",
  muted: "#F3F3F3",
  mutedForeground: "#51525C",
  border: "#E0E0E0",
  destructive: "#DC2626",
  success: "#067647",
  verified: "#9AE63A",
  // legacy aliases
  primaryNavy: "#191A23",
  actionBlue: "#191A23",
  complianceTeal: "#9AE63A",
  slate: "#51525C",
  surface: "#F3F3F3",
  text: "#191A23",
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
