export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  reviewedAt: string;
  tags: string[];
  officialSources?: { label: string; href: string }[];
  body: string[];
};

/**
 * Code-managed Phase 1 resources.
 * A future CMS can replace this module without changing public routes.
 */
export const resources: ResourceArticle[] = [
  {
    slug: "right-to-work-overview",
    title: "Right to Work — a simple overview",
    description:
      "Why Right to Work processes matter, and how NOSS helps with evidence workflows.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "right-to-work"],
    officialSources: [
      {
        label: "GOV.UK — Check a job applicant’s right to work",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
      },
    ],
    body: [
      "UK employers and agencies need a clear Right to Work process. Official rules can change, so always follow current GOV.UK guidance for the check itself.",
      "NOSS helps with the surrounding work: asking for the right evidence, tracking what is missing, and keeping status visible. NOSS does not replace the official check where one is required.",
      "If you are unsure which route applies, treat that as a process question for your compliance owner — not something to guess from a marketing page.",
    ],
  },
  {
    slug: "dbs-support-overview",
    title: "DBS support — simple overview",
    description: "How DBS help fits into worker checks, and why eligibility matters.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "dbs"],
    body: [
      "DBS checks depend on the role. Not every role gets the same level of check, and the correct route must be used.",
      "NOSS can help coordinate DBS work where eligible. This website does not submit DBS applications or decide eligibility automatically.",
      "Book a demo if you want help designing a practical DBS process for your placements or new starters.",
    ],
  },
  {
    slug: "workforce-compliance-checklist",
    title: "Worker checks checklist",
    description: "A practical starter checklist for managers organising worker evidence.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "checklist"],
    body: [
      "Start with role needs: which checks are required, which are client-specific, and which renew on a schedule.",
      "Confirm ownership: who asks for evidence, who reviews it, and who follows up when something is missing.",
      "Keep one status view for each worker so progress is visible without opening dozens of emails.",
      "Plan renewals early. Expiry tracking is often where manual processes fail.",
    ],
  },
  {
    slug: "what-kyb-means",
    title: "What KYB means",
    description: "A short explanation of Know Your Business in plain English.",
    reviewedAt: "2026-08-24",
    tags: ["business", "kyb"],
    officialSources: [
      {
        label: "Companies House developer specifications",
        href: "https://developer-specs.company-information.service.gov.uk/",
      },
    ],
    body: [
      "KYB (Know Your Business) usually means understanding who a company is before you rely on it in a commercial or compliance process.",
      "In practice this can include confirming company details from sources such as Companies House, plus collecting insurance, policy and accreditation evidence.",
      "NOSS supports company onboarding / KYB as a service. Live API automation is a later-phase topic, not part of Phase 1.",
    ],
  },
  {
    slug: "preparing-business-compliance-documents",
    title: "Preparing business documents",
    description: "How to prepare policy and evidence packs so audits are less painful.",
    reviewedAt: "2026-08-24",
    tags: ["business", "documents"],
    body: [
      "List the documents your clients or regulators actually ask for — privacy, health & safety, insurance certificates and contracts are common.",
      "Assign owners and review dates so policies do not quietly go out of date.",
      "Keep evidence in a controlled register rather than personal inboxes.",
      "NOSS can help organise these packs and prepare audit-ready exports.",
    ],
  },
  {
    slug: "faq",
    title: "NOSS FAQ",
    description: "Short answers to common questions about the NOSS service and website.",
    reviewedAt: "2026-08-24",
    tags: ["faq"],
    body: [
      "Is pricing public? No. Phase 1 shares pricing after a conversation.",
      "Is there a customer portal today? Portals come later. The Login page explains current access.",
      "Do you use analytics on this site? No analytics in Phase 1.",
      "Where do enquiries go? Valid messages are stored securely for the NOSS team.",
    ],
  },
];

export function getResource(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug);
}
