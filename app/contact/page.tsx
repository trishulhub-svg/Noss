import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
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
  const phone = siteConfig.supportPhone;
  const whatsapp = siteConfig.supportWhatsApp;
  const email = siteConfig.leadEmail;

  return (
    <>
      <Section className="!pb-6 !pt-8 sm:!pb-8 sm:!pt-12">
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

      <Section tone="surface">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-8">
          <aside className="card-lift p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[var(--color-navy)]">Prefer to talk now?</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-text)]">
              Reach us by call, WhatsApp or email — we usually reply within one working day.
            </p>

            <div className="mt-5 space-y-3">
              <Link
                href={`tel:+${phoneDigits(phone)}`}
                className="group flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 transition hover:border-[var(--color-navy)]/30 hover:bg-[var(--color-blue-soft)]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-white">
                  <Phone size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-text)]">
                    Call
                  </span>
                  <span className="block truncate text-sm font-semibold text-[var(--color-navy)]">
                    {phone}
                  </span>
                </span>
              </Link>

              <Link
                href={`https://wa.me/${phoneDigits(whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 transition hover:border-[var(--color-navy)]/30 hover:bg-[var(--color-blue-soft)]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-white">
                  <MessageCircle size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-text)]">
                    WhatsApp
                  </span>
                  <span className="block truncate text-sm font-semibold text-[var(--color-navy)]">
                    {whatsapp}
                  </span>
                </span>
              </Link>

              <Link
                href={`mailto:${email}`}
                className="group flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white px-4 py-3 transition hover:border-[var(--color-navy)]/30 hover:bg-[var(--color-blue-soft)]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy)] text-white">
                  <Mail size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-text)]">
                    Email
                  </span>
                  <span className="block truncate text-sm font-semibold text-[var(--color-navy)]">
                    {email}
                  </span>
                </span>
              </Link>
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
