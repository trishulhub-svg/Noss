import { ButtonLink, Marker } from "@/components/Button";
import {
  FeatureList,
  PortalPreview,
  ProcessSteps,
  PromoPanel,
  ServiceCard,
  TrustStrip,
} from "@/components/Cards";
import { FaqList } from "@/components/FaqList";
import { HeroIllustration } from "@/components/HeroIllustration";
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
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="reveal">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[var(--color-black)] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Make worker checks{" "}
              <Marker>easier to manage</Marker>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-[var(--color-muted-text)]">
              NOSS helps UK agencies and employers organise worker checks,
              business papers, follow-up and progress — in one clear service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a demo
              </ButtonLink>
              <ButtonLink href="/login" variant="secondary" className="w-full sm:w-auto">
                Client login
              </ButtonLink>
            </div>
          </div>
          <div className="reveal">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Problem */}
      <Section>
        <SectionHeading
          title="The problem"
          useMarker
          description="Papers sit in email, folders and different tools. Dates get missed. Follow-up is slow. Nobody is sure what is done."
        />
        <FeatureList
          items={[
            {
              title: "Papers in too many places",
              description: "Evidence is spread across inboxes and shared drives.",
            },
            {
              title: "Missed renewals",
              description: "Certificates and checks can expire without anyone noticing.",
            },
            {
              title: "Slow chasing",
              description: "Managers spend hours chasing missing items by hand.",
            },
            {
              title: "Unclear status",
              description: "Teams cannot see what is finished and what is still open.",
            },
          ]}
        />
      </Section>

      {/* Services */}
      <Section>
        <SectionHeading
          title="Services"
          useMarker
          description="Two clear service areas. Pick the path that fits — or talk to us if you need both."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <ServiceCard
            title="Worker checks"
            description="Right to Work support, ID evidence, DBS help, references, licences and renewal tracking."
            href="/workforce-compliance"
          />
          <ServiceCard
            title="Business checks"
            description="Company checks, VAT support where needed, sanctions review help, insurance and policy tracking."
            href="/business-compliance"
          />
          <ServiceCard
            title="For agencies"
            description="Manage many workers and client needs with clearer progress and less chasing."
            href="/industries/recruitment-agencies"
          />
          <ServiceCard
            title="For employers"
            description="New-starter checks, renewals and organised records with NOSS follow-up."
            href="/industries/employers"
          />
        </div>
      </Section>

      {/* Mid CTA */}
      <Section className="!pt-4">
        <PromoPanel
          title="Want a clearer compliance process?"
          description="Book a short demo. We will walk through how NOSS can help your agency or employer team."
          href="/contact"
          cta="Book a demo"
        />
      </Section>

      {/* How it works */}
      <Section tone="surface">
        <SectionHeading
          title="How it works"
          useMarker
          description="A clear path from request to ready records."
        />
        <ProcessSteps
          steps={[
            { title: "You ask", description: "Add a worker or ask for a check." },
            { title: "We tell them", description: "The worker gets a clear list." },
            { title: "They send proof", description: "Upload or follow the official route." },
            { title: "We review", description: "NOSS checks it and asks for fixes." },
            { title: "You track", description: "See progress and get a ready record." },
          ]}
        />
        <div className="mt-8">
          <ButtonLink href="/how-it-works" variant="secondary">
            See the full process
          </ButtonLink>
        </div>
      </Section>

      {/* Preview */}
      <Section>
        <SectionHeading
          title="Preview"
          useMarker
          description="A simple look at the future portal. This is not live data."
        />
        <PortalPreview
          title="Progress preview"
          description="Example only. This marketing site does not show real worker or customer records."
        />
      </Section>

      {/* Why */}
      <Section tone="surface">
        <SectionHeading
          title="Why NOSS"
          useMarker
          description="Built for trust, not hype."
        />
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
        <SectionHeading title="FAQ" useMarker />
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
              question: "How do I reach you?",
              answer:
                "Use the form, email info@trishulhub.in, or call / WhatsApp +91 966210793.",
            },
          ]}
        />
      </Section>

      {/* Final CTA */}
      <Section tone="surface">
        <div className="card-lift flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
              Ready to talk through your checks?
            </h2>
            <p className="mt-3 text-[var(--color-muted-text)]">
              Book a demo and see how NOSS can help your team stay organised.
            </p>
          </div>
          <ButtonLink href="/contact" className="w-full shrink-0 sm:w-auto">
            Book a demo
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
