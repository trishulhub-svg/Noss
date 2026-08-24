import { ContactChannels } from "@/components/ContactChannels";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: "Book a Demo / Contact",
  description:
    "Book a NOSS demo or send an enquiry. Call or WhatsApp +91 966210793, or use the form.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
            Book a Demo / Contact NOSS
          </h1>
          <p className="mt-5 text-lg text-[var(--slate)]">
            Share a few details and we will follow up about your workforce or
            business compliance needs. Pricing is provided after enquiry — there
            is no public pricing table in Phase 1.
          </p>

          <div className="mt-8 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <h2 className="text-base font-semibold text-[var(--primary-navy)]">
              Prefer to talk now?
            </h2>
            <p className="mt-2 text-sm text-[var(--slate)]">
              Call or message us on mobile / WhatsApp using{" "}
              <strong>{siteConfig.supportPhone}</strong>.
            </p>
            <div className="mt-4">
              <ContactChannels />
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-[var(--slate)]">
            <li>Primary route for sales conversations and demos.</li>
            <li>Business contact details only — no worker identity documents.</li>
            <li>
              Enquiries are stored securely. Email notification setup is planned
              for a later phase; your submission is still retained.
            </li>
          </ul>
        </div>
        <ContactForm sourcePage="/contact" />
      </div>
    </Section>
  );
}
