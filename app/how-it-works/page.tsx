import { ButtonLink } from "@/components/Button";
import { PortalPreview, ProcessSteps } from "@/components/Cards";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How it works",
  description:
    "See the five-step NOSS process: request, worker action, evidence, review and progress tracking.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        marker="Process"
        title="How NOSS works"
        description="A clear process that connects your company, workers and the NOSS team — with progress you can see."
      />
      <Section tone="surface">
        <SectionHeading title="Five steps" useMarker />
        <ProcessSteps
          steps={[
            { title: "You ask for a check", description: "Add a worker or request a service." },
            { title: "Worker gets a list", description: "They see exactly what is needed." },
            { title: "Evidence is sent", description: "Upload or follow the official route. No live upload on this website." },
            { title: "NOSS reviews", description: "We ask for fixes if needed and record the result." },
            { title: "You track progress", description: "See status and get a ready record where it applies." },
          ]}
        />
      </Section>
      <Section>
        <SectionHeading title="Product preview" useMarker description="Static mock only — not live customer data." />
        <PortalPreview
          title="Workflow preview"
          description="Future portals will live on separate apps. This marketing site does not log users in or store worker documents."
        />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
