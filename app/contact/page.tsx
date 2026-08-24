import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

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
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-verified)]">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-5xl">
            Book a demo
          </h1>
          <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
            Tell us a little about your team. We will get back to you about
            worker or business checks. Pricing is shared after we talk — there
            is no public price list.
          </p>

          <div className="mt-7 rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)]">
            <h2 className="text-base font-bold text-[var(--color-primary)]">
              Prefer to talk now?
            </h2>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              Call or WhatsApp{" "}
              <strong className="text-[var(--color-primary)]">
                {siteConfig.supportPhone}
              </strong>
              .
            </p>
            <div className="mt-4">
              <ContactChannels />
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <ButtonLink
                href={`tel:+${siteConfig.supportPhone.replace(/[^\d]/g, "")}`}
                className="w-full sm:w-auto"
              >
                Call now
              </ButtonLink>
              <ButtonLink
                href={`https://wa.me/${siteConfig.supportPhone.replace(/[^\d]/g, "")}`}
                variant="secondary"
                className="w-full sm:w-auto"
              >
                WhatsApp
              </ButtonLink>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-[var(--color-muted-foreground)]">
            <li>Use this form for demos and sales questions.</li>
            <li>Business contact details only — no worker ID files.</li>
            <li>Your message is saved securely. Email alerts come in a later phase.</li>
          </ul>
        </div>
        <ContactForm sourcePage="/contact" />
      </div>
    </Section>
  );
}
