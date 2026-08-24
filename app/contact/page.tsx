import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
import { TitleWithUnderline } from "@/components/DrawUnderline";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";
import { phoneDigits, siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Book a demo",
  description:
    "Book a NOSS demo or send a message. Call or WhatsApp +91 966210793.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section className="!pb-4 !pt-8 sm:!pb-6 sm:!pt-12">
        <div className="reveal max-w-3xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)] sm:text-sm">
            Contact
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-balance text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl lg:text-5xl">
            Book a <TitleWithUnderline title="demo" />
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[var(--color-muted-text)] sm:mt-4 sm:text-lg">
            Tell us about your team. We will reply about worker or business checks.
            Pricing is shared after we talk.
          </p>
        </div>
      </Section>

      <Section tone="surface" className="!pt-0">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-8">
          <aside className="card-lift p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[var(--color-navy)]">Prefer to talk now?</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-text)]">
              Call or WhatsApp{" "}
              <strong className="text-[var(--color-navy)]">{siteConfig.supportPhone}</strong>.
            </p>
            <div className="mt-4">
              <ContactChannels />
            </div>
            <div className="mt-5 flex flex-row flex-wrap gap-2">
              <ButtonLink
                href={`tel:+${phoneDigits(siteConfig.supportPhone)}`}
                className="!min-h-11 !px-4 !text-sm"
              >
                Call now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${phoneDigits(siteConfig.supportWhatsApp)}`}
                variant="secondary"
                className="!min-h-11 !px-4 !text-sm"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </aside>

          <div>
            <ContactForm sourcePage="/contact" />
          </div>
        </div>
      </Section>
    </>
  );
}
