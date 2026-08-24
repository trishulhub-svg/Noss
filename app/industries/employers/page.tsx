import { ButtonLink } from "@/components/Button";
import { FeatureList } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "For employers",
  description:
    "NOSS helps employers manage new-starter checks, renewals, evidence and follow-up.",
  path: "/industries/employers",
});

export default function EmployersPage() {
  return (
    <>
      <PageHero
        marker="Who we help"
        title="Clear ownership for new starters and renewals"
        description="Employer teams often struggle with new-starter checks, renewals and unclear ownership. NOSS helps with follow-up and organised records."
        actions={<ButtonLink href="/contact">Book a demo</ButtonLink>}
      />
      <Section tone="surface">
        <SectionHeading title="What employers get" useMarker />
        <FeatureList
          items={[
            { title: "New-starter checks", description: "A clearer path for onboarding evidence requests." },
            { title: "Ongoing renewals", description: "Help spotting renewals and re-checks earlier." },
            { title: "Evidence records", description: "Easier to find papers when managers or audits ask." },
            { title: "NOSS follow-up", description: "Less time spent chasing missing items by email." },
          ]}
        />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
