import { ButtonLink } from "@/components/Button";
import { FeatureList, PortalPreview } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "For Recruitment Agencies",
  description:
    "NOSS helps recruitment agencies manage multi-worker compliance, client requirements, progress visibility and audit readiness.",
  path: "/industries/recruitment-agencies",
});

export default function RecruitmentAgenciesPage() {
  return (
    <>
      <Section>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--compliance-teal)]">
          Industries
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          Built for recruitment agencies juggling many workers and clients
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          When every placement has different requirements, manual chasing and
          scattered evidence create audit pressure. NOSS helps agencies organise
          multi-worker onboarding and keep progress visible.
        </p>
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Agency-focused capabilities" />
        <FeatureList
          items={[
            {
              title: "Multi-worker onboarding",
              description:
                "Coordinate checks across many workers without losing track of missing items.",
            },
            {
              title: "Client separation concept",
              description:
                "Keep client requirements and evidence concepts separated as the platform evolves.",
            },
            {
              title: "Live progress concept",
              description:
                "Help managers see what is complete, pending or blocked.",
            },
            {
              title: "Audit readiness",
              description:
                "Organise evidence so audit packs are less of a last-minute scramble.",
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading
          title="Illustrative workflow example"
          description="This example is synthetic. It does not show fabricated customers or real worker personal data."
        />
        <PortalPreview
          title="Agency progress example"
          description="Example only: an agency operations lead reviews workers in progress, missing items and verified records before a client audit request."
        />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
