import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "For Employers",
  description:
    "NOSS helps employers manage new-starter compliance, ongoing renewals, evidence records and follow-up.",
  path: "/industries/employers",
});

export default function EmployersPage() {
  return (
    <>
      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--compliance-teal)]">
          Industries
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          Clear ownership for new starters and ongoing renewals
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          Employer teams often struggle with new-starter checks, evidence
          collection, renewals and unclear ownership. NOSS provides managed
          follow-up and organised records.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="What employers can expect" />
        <FeatureList
          items={[
            {
              title: "New-starter compliance",
              description:
                "A clearer path for onboarding checks and evidence requests.",
            },
            {
              title: "Ongoing expiry monitoring",
              description:
                "Visibility and follow-up support for renewals and re-checks.",
            },
            {
              title: "Evidence records",
              description:
                "Organised records that are easier to find when audits or managers ask.",
            },
            {
              title: "NOSS-managed follow-up",
              description:
                "Less time spent chasing missing items across email threads.",
            },
          ]}
        />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
