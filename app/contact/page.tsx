import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Book a Demo / Contact",
  description:
    "Book a NOSS demo or send an enquiry. Tell us about your workforce or business compliance needs.",
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
          <ul className="mt-6 space-y-2 text-sm text-[var(--slate)]">
            <li>Primary route for sales conversations and demos.</li>
            <li>Business contact details only — no worker identity documents.</li>
            <li>
              Enquiries are stored securely and notified to the NOSS business
              mailbox.
            </li>
          </ul>
        </div>
        <ContactForm sourcePage="/contact" />
      </div>
    </Section>
  );
}
