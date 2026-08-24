import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Workforce Compliance",
  description:
    "NOSS helps organise workforce compliance checks, evidence collection, review and follow-up for UK recruitment agencies and employers.",
  path: "/workforce-compliance",
});

const services = [
  {
    title: "Right to Work workflow support",
    description:
      "Evidence management and process support aligned to official Right to Work routes. NOSS does not replace the official check where one is required.",
  },
  {
    title: "Identity and document verification support",
    description:
      "Organised collection and review support for identity evidence used in onboarding workflows.",
  },
  {
    title: "DBS check coordination",
    description:
      "Coordination where eligible and through the correct DBS route. Eligibility depends on the role and must be assessed carefully.",
  },
  {
    title: "Employment history and references",
    description:
      "Structured collection of employment history and reference evidence to reduce chasing.",
  },
  {
    title: "Address history and proof of address",
    description:
      "Collection support for address history and proof-of-address evidence where required.",
  },
  {
    title: "Qualifications and professional registrations",
    description:
      "Evidence checks for certificates, qualifications and professional registrations relevant to the role.",
  },
  {
    title: "Training, driving and licence evidence",
    description:
      "Tracking for role-specific licence, driving or training evidence where applicable.",
  },
  {
    title: "Expiry monitoring and re-check scheduling",
    description:
      "Visibility and follow-up support so renewals and re-checks are harder to miss.",
  },
];

export default function WorkforceCompliancePage() {
  return (
    <>
      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--compliance-teal)]">
          Services
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          Workforce compliance, organised end to end
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          NOSS helps organise workforce compliance checks, evidence collection,
          review and follow-up so employers and recruiters can see progress
          without drowning in email and folders.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading
          title="What we support"
          description="These are service descriptions, not guarantees that every check is available for every role or customer."
        />
        <FeatureList items={services} />
      </Section>

      <Section>
        <SectionHeading title="A practical process" />
        <ol className="grid gap-4 md:grid-cols-5">
          {[
            "Request raised",
            "Worker action",
            "NOSS review",
            "Clarification if needed",
            "Status and evidence managed",
          ].map((step, i) => (
            <li key={step} className="rounded-lg border border-[var(--border)] bg-white p-4">
              <p className="text-sm font-semibold text-[var(--compliance-teal)]">
                {i + 1}
              </p>
              <p className="mt-2 font-medium text-[var(--primary-navy)]">{step}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 max-w-3xl text-[var(--slate)]">
          Official or certified routes are used where required. Significant
          outcomes may require trained human review. NOSS does not claim “100%
          automated compliance” or government endorsement.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
