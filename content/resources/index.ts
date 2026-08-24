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
    title: "Right to Work overview for employers and agencies",
    description:
      "A plain-English overview of why Right to Work processes matter and how NOSS supports evidence workflows.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "right-to-work"],
    officialSources: [
      {
        label: "GOV.UK — Check a job applicant’s right to work",
        href: "https://www.gov.uk/check-job-applicant-right-to-work",
      },
    ],
    body: [
      "Employers and recruitment agencies in the UK need a clear process for Right to Work checks. Official requirements can change, so always follow current GOV.UK guidance for the check itself.",
      "NOSS helps organise the surrounding workflow: requesting the right evidence, tracking what is missing, and keeping status visible. NOSS does not replace the official Right to Work check where one is required.",
      "If you are unsure which route applies to a role or worker, treat that as a process question for your compliance owner — not something to guess from a marketing page.",
    ],
  },
  {
    slug: "dbs-support-overview",
    title: "DBS support overview",
    description:
      "How DBS coordination fits into workforce compliance — and why eligibility matters.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "dbs"],
    body: [
      "DBS checks are role-dependent. Not every role is eligible for the same level of check, and the correct route must be followed.",
      "NOSS can coordinate DBS activity where eligible. This website does not submit DBS applications or make eligibility decisions automatically.",
      "Speak with NOSS during a demo if you need help designing a practical DBS workflow for your placements or new starters.",
    ],
  },
  {
    slug: "workforce-compliance-checklist",
    title: "Workforce compliance checklist",
    description:
      "A practical starter checklist for managers organising worker compliance evidence.",
    reviewedAt: "2026-08-24",
    tags: ["workforce", "checklist"],
    body: [
      "Start with role requirements: which checks are mandatory, which are client-specific, and which renew on a schedule.",
      "Confirm ownership: who requests evidence, who reviews it, and who follows up when something is missing.",
      "Keep a single status view for each worker so progress is visible without opening dozens of email threads.",
      "Plan renewals early. Expiry monitoring is often where manual processes fail.",
    ],
  },
  {
    slug: "what-kyb-means",
    title: "What KYB means for business compliance",
    description:
      "A short explanation of Know Your Business (KYB) in a UK company onboarding context.",
    reviewedAt: "2026-08-24",
    tags: ["business", "kyb"],
    officialSources: [
      {
        label: "Companies House developer specifications",
        href: "https://developer-specs.company-information.service.gov.uk/",
      },
    ],
    body: [
      "KYB (Know Your Business) generally means understanding who a company is before you rely on it in a commercial or compliance workflow.",
      "In practice this can include confirming company details using authoritative sources such as Companies House where appropriate, plus collecting insurance, policy and accreditation evidence.",
      "NOSS supports company onboarding / KYB as a service description on this site. Live API automation is a later-phase concern, not part of Phase 1.",
    ],
  },
  {
    slug: "preparing-business-compliance-documents",
    title: "Preparing business compliance documents",
    description:
      "How to prepare policy and evidence packs so audits and client requests are less painful.",
    reviewedAt: "2026-08-24",
    tags: ["business", "documents"],
    body: [
      "List the documents your clients or regulators actually ask for — privacy, health & safety, insurance certificates, accreditations and contracts are common categories.",
      "Assign owners and review dates so policies do not silently go stale.",
      "Store evidence in a controlled register rather than personal inboxes.",
      "NOSS can help organise these packs and prepare audit-ready exports as a service capability.",
    ],
  },
  {
    slug: "faq",
    title: "NOSS frequently asked questions",
    description: "Short answers to common questions about the NOSS service and website.",
    reviewedAt: "2026-08-24",
    tags: ["faq"],
    body: [
      "Is pricing public? No. Phase 1 uses enquiry-only pricing after a conversation.",
      "Is there a customer portal today? Portal applications are later phases. The Login page explains current access status.",
      "Do you use analytics on this site? No analytics are included in Phase 1.",
      "Where do enquiries go? Valid enquiries are stored securely and notified to the configured NOSS business mailbox.",
    ],
  },
];

export function getResource(slug: string): ResourceArticle | undefined {
  return resources.find((r) => r.slug === slug);
}
