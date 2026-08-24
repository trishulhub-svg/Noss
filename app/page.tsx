import { ButtonLink } from "@/components/Button";
import { FeatureList, PortalPreview, ProcessSteps, ServiceCard } from "@/components/Cards";
import { FaqList } from "@/components/FaqList";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NOSS",
  description:
    "Make workforce compliance easier to manage. NOSS helps UK recruitment agencies and employers organise worker checks, business documents, follow-up and compliance progress.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* 1 Header via layout · 2 Hero */}
      <section className="relative overflow-hidden bg-[var(--primary-navy)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #0f766e 0%, transparent 40%), radial-gradient(circle at 80% 0%, #2563eb 0%, transparent 35%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              NOSS
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Make workforce compliance easier to manage.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              NOSS helps UK recruitment agencies and employers organise worker
              checks, business documents, follow-up and compliance progress
              through one managed service.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="!bg-white !text-[var(--primary-navy)]">
                Book a Demo
              </ButtonLink>
              <ButtonLink href="/login" variant="secondary" className="!border-white/30 !bg-transparent !text-white hover:!bg-white/10">
                Client Login
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-white/70">
              Managed workflow snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              <li className="rounded-md bg-white/10 px-3 py-3">Worker checks organised in one place</li>
              <li className="rounded-md bg-white/10 px-3 py-3">Missing items made visible early</li>
              <li className="rounded-md bg-white/10 px-3 py-3">Human review where outcomes matter</li>
              <li className="rounded-md bg-white/10 px-3 py-3">Audit-ready completion records</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3 Trust strip */}
      <Section tone="surface">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "UK-focused compliance support",
            "Secure document handling approach",
            "Accountable human verification",
            "Live progress concept for clients",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[var(--border)] bg-white px-4 py-5 text-sm font-medium text-[var(--primary-navy)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* 4 Problem */}
      <Section>
        <SectionHeading
          title="Compliance work often becomes scattered"
          description="Many teams still rely on email threads, shared folders and multiple suppliers. That makes expiry dates easy to miss, follow-up slow, and audit preparation stressful."
        />
        <FeatureList
          items={[
            {
              title: "Documents in too many places",
              description: "Evidence lives across inboxes, drives and third-party tools.",
            },
            {
              title: "Missed renewals",
              description: "Certificates, licences and checks can expire without clear ownership.",
            },
            {
              title: "Slow chasing",
              description: "Manual follow-up consumes manager time and delays placements.",
            },
            {
              title: "Unclear progress",
              description: "Clients and workers struggle to see what is complete and what is missing.",
            },
          ]}
        />
      </Section>

      {/* 5 Solution */}
      <Section tone="surface">
        <SectionHeading
          title="One managed NOSS workflow"
          description="NOSS coordinates workforce and business compliance work so clients can see progress, workers know what is needed, and trained reviewers keep accountability and the audit trail."
        />
        <p className="max-w-3xl text-[var(--slate)]">
          Technology assists the workflow. Significant outcomes may still require
          trained human review, and some checks use official or certified
          third-party routes where required.
        </p>
      </Section>

      {/* 6 Services grid */}
      <Section>
        <SectionHeading
          title="Services"
          description="Two core service areas for UK recruitment agencies and employers."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ServiceCard
            title="Workforce Compliance"
            description="Right to Work support, identity evidence, DBS coordination, references, qualifications, licences and expiry tracking."
            href="/workforce-compliance"
          />
          <ServiceCard
            title="Business Compliance"
            description="Company/KYB support, VAT checks where required, sanctions screening support, insurance and policy document tracking."
            href="/business-compliance"
          />
        </div>
      </Section>

      {/* 7 How it works */}
      <Section tone="surface">
        <SectionHeading
          title="How NOSS works"
          description="A clear five-step service flow designed for multi-worker and multi-company reality."
        />
        <ProcessSteps
          steps={[
            {
              title: "Company requests",
              description: "A company adds a worker or requests a compliance service.",
            },
            {
              title: "Worker informed",
              description: "The worker is told exactly what evidence or action is needed.",
            },
            {
              title: "Evidence submitted",
              description: "Evidence is submitted or the correct official/certified route is followed.",
            },
            {
              title: "NOSS reviews",
              description: "NOSS reviews, requests clarification if needed, and records the outcome.",
            },
            {
              title: "Client tracks",
              description: "The client tracks progress and receives an audit-ready completion record where applicable.",
            },
          ]}
        />
        <div className="mt-8">
          <ButtonLink href="/how-it-works" variant="secondary">
            See the full workflow
          </ButtonLink>
        </div>
      </Section>

      {/* 8 Portal preview */}
      <Section>
        <SectionHeading
          title="A clearer view of progress"
          description="Phase 1 shows a non-live product preview so visitors can understand the future NOSS experience."
        />
        <PortalPreview
          title="Portal progress preview"
          description="Illustrative statuses only. No live worker or customer records are shown on this marketing site."
        />
      </Section>

      {/* 9 Why NOSS */}
      <Section tone="surface">
        <SectionHeading title="Why NOSS" />
        <FeatureList
          items={[
            {
              title: "Human-led",
              description: "Trained review remains central for significant compliance outcomes.",
            },
            {
              title: "Automation-assisted",
              description: "Workflow support reduces chasing and makes missing items visible earlier.",
            },
            {
              title: "Auditable",
              description: "Evidence and status are organised for audit-ready records.",
            },
            {
              title: "Multi-company ready concept",
              description: "Designed for agencies and employers who need client/worker separation in later product phases.",
            },
          ]}
        />
      </Section>

      {/* 10 FAQ */}
      <Section>
        <SectionHeading title="Frequently asked questions" />
        <FaqList
          items={[
            {
              question: "How does NOSS handle data security?",
              answer:
                "Phase 1 collects only business enquiry data through this website. Worker identity documents and customer records are not collected on the public site. Later platform phases will apply separate security and access controls.",
            },
            {
              question: "What does the worker need to do?",
              answer:
                "Workers are told what evidence or official route is required, then submit or complete those steps. NOSS follows up on missing items so managers spend less time chasing.",
            },
            {
              question: "Does NOSS replace official Right to Work checks?",
              answer:
                "No. NOSS supports Right to Work workflow and evidence management. Official checks must follow the correct GOV.UK routes where required.",
            },
            {
              question: "Can NOSS help with DBS?",
              answer:
                "NOSS can coordinate DBS activity where eligible and through the correct DBS route. Eligibility and process details depend on the role and must be assessed carefully.",
            },
            {
              question: "Do you publish turnaround times?",
              answer:
                "Turnaround depends on the check type, third-party routes and how quickly evidence is provided. We discuss realistic expectations during a demo rather than publishing unverified promises.",
            },
            {
              question: "Will NOSS integrate with our systems?",
              answer:
                "Integrations are not part of Phase 1. Tell us about your stack when you book a demo so future roadmap conversations stay grounded.",
            },
            {
              question: "How do I get support?",
              answer:
                "Use the contact form, email info@trishulhub.in, or call / WhatsApp +91 966210793.",
            },
          ]}
        />
      </Section>

      {/* 11 Final CTA */}
      <Section tone="navy">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Ready to talk through your compliance workflow?</h2>
            <p className="mt-3 max-w-2xl text-white/80">
              Book a demo to see how NOSS can help your agency or employer team organise checks, documents and follow-up.
            </p>
          </div>
          <ButtonLink href="/contact" className="!bg-white !text-[var(--primary-navy)]">
            Book a Demo
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
