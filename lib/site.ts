/**
 * Design tokens — NOSS Phase 1 brand baseline (Master Doc §6 / Table 20).
 * Do not invent alternate brand colours without an approved change request.
 */
export const colors = {
  primaryNavy: "#102A43",
  actionBlue: "#2563EB",
  complianceTeal: "#0F766E",
  slate: "#486581",
  surface: "#F5F8FB",
  border: "#CBD5E1",
  text: "#1F2937",
  white: "#FFFFFF",
  error: "#B42318",
  success: "#067647",
} as const;

export const siteConfig = {
  name: "NOSS",
  legalNamePending: true,
  domain: "noss.co.uk",
  leadEmail: "info@trishulhub.in",
  description:
    "NOSS helps UK recruitment agencies and employers organise worker checks, business documents, follow-up and compliance progress through one managed service.",
  privacyNoticeVersion: process.env.PRIVACY_NOTICE_VERSION || "2026-08-24",
} as const;

export const navLinks = [
  {
    label: "Services",
    href: "/workforce-compliance",
    children: [
      { label: "Workforce Compliance", href: "/workforce-compliance" },
      { label: "Business Compliance", href: "/business-compliance" },
    ],
  },
  {
    label: "Industries",
    href: "/industries/recruitment-agencies",
    children: [
      { label: "Recruitment Agencies", href: "/industries/recruitment-agencies" },
      { label: "Employers", href: "/industries/employers" },
    ],
  },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLegalLinks = [
  { label: "Privacy Notice", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Notice", href: "/cookies" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Complaints", href: "/complaints" },
] as const;

export const serviceInterestOptions = [
  { value: "workforce_compliance", label: "Workforce Compliance" },
  { value: "business_compliance", label: "Business Compliance" },
  { value: "other", label: "Other / not sure yet" },
] as const;

export const companySizeOptions = [
  { value: "1-10", label: "1–10" },
  { value: "11-50", label: "11–50" },
  { value: "51-200", label: "51–200" },
  { value: "201-500", label: "201–500" },
  { value: "500+", label: "500+" },
] as const;
