import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
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
    <Section className="!pt-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="reveal">
          <p className="mb-4">
            <span className="marker">Contact</span>
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-black)] sm:text-5xl">
            Book a demo
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted-text)]">
            Tell us a little about your team. We will get back to you about
            worker or business checks. Pricing is shared after we talk.
          </p>

          <div className="card-lift mt-7 bg-[var(--color-gray)] p-5">
            <h2 className="text-base font-extrabold text-[var(--color-black)]">
              Prefer to talk now?
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted-text)]">
              Call or WhatsApp{" "}
              <strong className="text-[var(--color-black)]">
                {siteConfig.supportPhone}
              </strong>
              .
            </p>
            <div className="mt-4">
              <ContactChannels />
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <ButtonLink
                href={`tel:+${phoneDigits(siteConfig.supportPhone)}`}
                className="w-full sm:w-auto"
              >
                Call now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${phoneDigits(siteConfig.supportWhatsApp)}`}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
        <ContactForm sourcePage="/contact" />
      </div>
    </Section>
  );
}
