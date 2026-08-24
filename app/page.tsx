import {
  Building2,
  Clock3,
  FolderSearch,
  ShieldCheck,
  Users,
} from "lucide-react";
import { ButtonLink } from "@/components/Button";
import {
  FeatureList,
  PortalPreview,
  ProcessSteps,
  ServiceCard,
} from "@/components/Cards";
import { FaqList } from "@/components/FaqList";
import { Section, SectionHeading } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NOSS",
  description:
    "Make worker checks easier to manage. NOSS helps UK agencies and employers organise checks, papers, follow-up and progress.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--color-primary)] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, #0f766e 0%, transparent 42%), radial-gradient(circle at 88% 8%, #0369a1 0%, transparent 36%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-8 lg:py-24">
          <div className="reveal">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">
              NOSS
            </p>
            <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.1]">
              Make worker checks easier to manage.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">
              NOSS helps UK agencies and employers organise worker checks,
              business papers, follow-up and progress — in one clear service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink
                href="/contact"
                className="w-full !bg-white !text-[var(--color-primary)] hover:!bg-[var(--color-muted)] sm:w-auto"
              >
                Book a demo
              </ButtonLink>
              <ButtonLink
                href="/login"
                variant="secondary"
                className="w-full !border-white/25 !bg-transparent !text-white hover:!bg-white/10 sm:w-auto"
              >
                Client login
              </ButtonLink>
            </div>
          </div>

          <div className="reveal rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
              What you get
            </p>
            <ul className="mt-4 space-y-3 text-sm text-white/95">
              {[
                "Checks kept in one place",
                "Missing items easy to see",
                "People check the important results",
                "Records ready when audits ask",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-white/10 px-3 py-3"
                >
                  <ShieldCheck className="mt-0.5 shrink-0" size={18} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <Section tone="surface" className="!py-8">
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Made for UK checks",
            "Careful with documents",
            "People still review key results",
            "Clear progress for your team",
          ].map((item) => (
            <li
              key={item}
              className="rounded-xl border border-[var(--color-border)] bg-white px-4 py-4 text-sm font-semibold text-[var(--color-primary)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      {/* Problem */}
      <Section>
        <SectionHeading
          eyebrow="The problem"
          title="Checks often get messy"
          description="Papers sit in email, folders and different tools. Dates get missed. Follow-up is slow. Nobody is sure what is done."
        />
        <FeatureList
          items={[
            {
              title: "Papers in too many places",
              description: "Evidence is spread across inboxes and shared drives.",
              icon: FolderSearch,
            },
            {
              title: "Missed renewals",
              description: "Certificates and checks can expire without anyone noticing.",
              icon: Clock3,
            },
            {
              title: "Slow chasing",
              description: "Managers spend hours chasing missing items by hand.",
              icon: Users,
            },
            {
              title: "Unclear status",
              description: "Teams cannot see what is finished and what is still open.",
              icon: Building2,
            },
          ]}
        />
      </Section>

      {/* Solution */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="The NOSS way"
          title="One simple managed process"
          description="Clients see progress. Workers know what to send. NOSS people review the important results and keep a clear record."
        />
        <p className="max-w-2xl text-[var(--color-muted-foreground)]">
          Tools help with the work. Some checks still need official routes. Big
          decisions may need a trained person — we do not claim “fully
          automatic” or “government approved”.
        </p>
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Two clear service areas"
          description="Pick the path that fits your team — or talk to us if you need both."
        />
        <div className="grid gap-5 lg:grid-cols-2">
          <ServiceCard
            title="Worker checks"
            description="Right to Work support, ID evidence, DBS help, references, licences and renewal tracking."
            href="/workforce-compliance"
          />
          <ServiceCard
            title="Business checks"
            description="Company checks, VAT support where needed, sanctions review help, insurance and policy tracking."
            href="/business-compliance"
            icon={Building2}
          />
        </div>
      </Section>

      {/* How it works */}
      <Section tone="surface">
        <SectionHeading
          eyebrow="How it works"
          title="Five simple steps"
          description="A clear path from request to ready records."
        />
        <ProcessSteps
          steps={[
            {
              title: "You ask",
              description: "Add a worker or ask for a check.",
            },
            {
              title: "We tell them",
              description: "The worker gets a clear list of what is needed.",
            },
            {
              title: "They send proof",
              description: "They upload evidence or follow the official route.",
            },
            {
              title: "We review",
              description: "NOSS checks it and asks for fixes if needed.",
            },
            {
              title: "You track",
              description: "You see progress and get a ready record.",
            },
          ]}
        />
        <div className="mt-8">
          <ButtonLink href="/how-it-works" variant="secondary">
            See the full process
          </ButtonLink>
        </div>
      </Section>

      {/* Portal preview */}
      <Section>
        <SectionHeading
          eyebrow="Coming later"
          title="A clearer view of progress"
          description="This is a simple preview of the future portal. It is not live data."
        />
        <PortalPreview
          title="Progress preview"
          description="Example only. This marketing site does not show real worker or customer records."
        />
      </Section>

      {/* Why NOSS */}
      <Section tone="surface">
        <SectionHeading eyebrow="Why NOSS" title="Built for trust, not hype" />
        <FeatureList
          items={[
            {
              title: "People lead",
              description: "Trained review stays central for important outcomes.",
            },
            {
              title: "Tools help",
              description: "Less chasing. Missing items show up earlier.",
            },
            {
              title: "Clear records",
              description: "Evidence is easier to find when audits ask.",
            },
            {
              title: "Ready for many clients",
              description: "Designed for agencies and employers who manage many people.",
            },
          ]}
        />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading title="Common questions" />
        <FaqList
          items={[
            {
              question: "Is my data safe?",
              answer:
                "This website only collects business enquiry details. It does not collect worker ID papers or customer check files.",
            },
            {
              question: "What does the worker do?",
              answer:
                "They get a clear list, send what is needed, and we follow up on anything missing.",
            },
            {
              question: "Do you replace official Right to Work checks?",
              answer:
                "No. We help with the process and evidence. Official checks still follow GOV.UK rules where required.",
            },
            {
              question: "Can you help with DBS?",
              answer:
                "Yes, where the role allows it and through the correct route. We check eligibility carefully.",
            },
            {
              question: "How fast is it?",
              answer:
                "It depends on the check and how quickly evidence arrives. We talk through real timings on a demo.",
            },
            {
              question: "Will you connect to our systems?",
              answer:
                "Not in Phase 1. Tell us what you use when you book a demo.",
            },
            {
              question: "How do I reach you?",
              answer:
                "Use the form, email info@trishulhub.in, or call / WhatsApp +91 966210793.",
            },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <Section tone="navy">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Want a clearer compliance process?
            </h2>
            <p className="mt-3 text-white/80">
              Book a short demo. We will walk through how NOSS can help your
              agency or employer team.
            </p>
          </div>
          <ButtonLink
            href="/contact"
            className="w-full shrink-0 !bg-white !text-[var(--color-primary)] sm:w-auto"
          >
            Book a demo
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
