import { ButtonLink } from "@/components/Button";
import { FeatureList, PortalPreview } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "For recruitment agencies",
  description:
    "NOSS helps agencies manage many workers, client needs, progress and audit readiness.",
  path: "/industries/recruitment-agencies",
});

export default function RecruitmentAgenciesPage() {
  return (
    <>
      <PageHero
        marker="Who we help"
        title="Built for agencies with many workers and clients"
        description="Different clients need different checks. Manual chasing creates stress. NOSS helps you keep onboarding and progress clear."
        actions={<ButtonLink href="/contact">Book a demo</ButtonLink>}
      />
      <Section tone="surface">
        <SectionHeading title="What agencies get" useMarker />
        <FeatureList
          items={[
            { title: "Many workers at once", description: "Keep checks moving without losing missing items." },
            { title: "Client separation", description: "Keep client needs and evidence concepts separate as the product grows." },
            { title: "Clear progress", description: "See what is done, waiting or blocked." },
            { title: "Audit readiness", description: "Less last-minute scrambling for evidence packs." },
          ]}
        />
      </Section>
      <Section>
        <SectionHeading title="Example view" useMarker description="This is a made-up example. It does not show real customers or workers." />
        <PortalPreview title="Agency example" description="Example only: an operations lead reviews workers in progress before a client audit request." />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
