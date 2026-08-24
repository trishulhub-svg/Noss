import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Section";
import { footerLegalLinks, navLinks } from "@/lib/site";

export function Footer() {
  const supportEmail =
    process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "info@trishulhub.in";
  const supportPhone = process.env.NEXT_PUBLIC_SUPPORT_PHONE || "";
  const supportWhatsApp = process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || "";

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--primary-navy)] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="text-2xl font-bold">NOSS</p>
          <p className="mt-3 text-sm leading-relaxed text-white/80">
            UK compliance support for recruitment agencies and employers —
            managed workforce and business compliance with clear progress and
            accountable human review.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contact" className="!bg-white !text-[var(--primary-navy)]">
              Book a Demo
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Services
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/workforce-compliance">
                Workforce Compliance
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/business-compliance">
                Business Compliance
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/how-it-works">
                How It Works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Industries
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:underline" href="/industries/recruitment-agencies">
                Recruitment Agencies
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/industries/employers">
                Employers
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/resources">
                Resources
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Legal & access
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:underline" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:underline" href="/login">
                Login / portals
              </Link>
            </li>
          </ul>
          <div className="mt-6 space-y-1 text-sm text-white/80">
            <p>
              Email:{" "}
              <a className="underline" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
            </p>
            {supportPhone ? <p>Phone: {supportPhone}</p> : null}
            {supportWhatsApp ? <p>WhatsApp: {supportWhatsApp}</p> : null}
            {!supportPhone && !supportWhatsApp ? (
              <p className="text-white/60">
                Mobile and WhatsApp details will be published once owner-approved.
              </p>
            ) : null}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NOSS. All rights reserved.</p>
          <p>
            {navLinks.length} public service areas · English · United Kingdom
          </p>
        </Container>
      </div>
    </footer>
  );
}
