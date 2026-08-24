/**
 * Professional blue theme — accents used sparingly.
 */
export const colors = {
  navy: "#102A43",
  blue: "#2563EB",
  blueSoft: "#EFF6FF",
  white: "#FFFFFF",
  surface: "#F5F8FB",
  border: "#DBE3EE",
  text: "#1F2937",
  mutedForeground: "#486581",
  primary: "#102A43",
  accent: "#2563EB",
  background: "#FFFFFF",
  foreground: "#1F2937",
  muted: "#F5F8FB",
  destructive: "#B42318",
  success: "#067647",
  verified: "#0F766E",
  // legacy
  primaryNavy: "#102A43",
  actionBlue: "#2563EB",
  complianceTeal: "#0F766E",
  slate: "#486581",
  error: "#B42318",
  lime: "#EFF6FF",
  black: "#102A43",
  gray: "#F5F8FB",
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
