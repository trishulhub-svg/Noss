import { ButtonLink } from "@/components/Button";
import { PortalPreview, ProcessSteps } from "@/components/Cards";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "How NOSS Works",
  description:
    "See the five-step NOSS workflow: company request, worker action, evidence submission, NOSS review and client progress tracking.",
  path: "/how-it-works",
});

export default function HowItWorksPage() {
  return (
    <>
      <Section>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
          How NOSS works
        </h1>
        <p className="mt-5 max-w-3xl text-lg text-[var(--slate)]">
          A managed workflow that connects client companies, workers and the NOSS
          compliance team — with clear progress and accountable human review.
        </p>
      </Section>

      <Section tone="surface">
        <SectionHeading title="Five steps" />
        <ProcessSteps
          steps={[
            {
              title: "Company adds a worker or requests a service",
              description: "The engagement starts with a clear service request.",
              visual: (
                <div className="rounded-md bg-[var(--surface)] p-3 text-xs text-[var(--slate)]">
                  Company / worker card mockup
                </div>
              ),
            },
            {
              title: "Worker is told exactly what is needed",
              description: "Requirements are presented as an actionable checklist.",
              visual: (
                <div className="rounded-md bg-[var(--surface)] p-3 text-xs text-[var(--slate)]">
                  Checklist mockup
                </div>
              ),
            },
            {
              title: "Worker submits evidence or follows the official route",
              description:
                "Upload/action concept only in Phase 1 — no live upload on this website.",
              visual: (
                <div className="rounded-md bg-[var(--surface)] p-3 text-xs text-[var(--slate)]">
                  Evidence action concept
                </div>
              ),
            },
            {
              title: "NOSS reviews and records the outcome",
              description:
                "Clarifications are requested where needed. Significant outcomes may need trained human review.",
              visual: (
                <div className="rounded-md bg-[var(--surface)] p-3 text-xs text-[var(--slate)]">
                  Reviewer workflow preview
                </div>
              ),
            },
            {
              title: "Client tracks progress",
              description:
                "Clients receive progress visibility and an audit-ready completion record where applicable.",
              visual: (
                <div className="rounded-md bg-[var(--surface)] p-3 text-xs text-[var(--slate)]">
                  Progress dashboard preview
                </div>
              ),
            },
          ]}
        />
      </Section>

      <Section>
        <SectionHeading
          title="Product preview"
          description="Static mock only — labelled so it cannot be mistaken for live customer data."
        />
        <PortalPreview
          title="Workflow preview"
          description="Future client and worker portal experiences will live on separate applications. This marketing site does not authenticate users or store worker documents."
        />
        <div className="mt-8">
          <ButtonLink href="/contact">Book a Demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
