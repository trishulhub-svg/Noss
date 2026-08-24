import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { Container } from "@/components/Section";
import { footerLegalLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-primary)] text-white">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="text-2xl font-extrabold tracking-tight">NOSS</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">
            We help UK agencies and employers keep worker and business checks
            organised, clear and ready for audit.
          </p>
          <div className="mt-5">
            <ButtonLink
              href="/contact"
              className="!bg-white !text-[var(--color-primary)] hover:!bg-[var(--color-muted)]"
            >
              Book a demo
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Services
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/workforce-compliance">
                Worker checks
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/business-compliance">
                Business checks
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/how-it-works">
                How it works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Company
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/industries/recruitment-agencies">
                Agencies
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/industries/employers">
                Employers
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/resources">
                Help
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-white/55">
            Legal & contact
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link className="tap inline-flex items-center hover:underline" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="tap inline-flex items-center hover:underline" href="/login">
                Login
              </Link>
            </li>
          </ul>
          <div className="mt-5">
            <ContactChannels tone="dark" />
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-5 text-xs text-white/50">
          © {new Date().getFullYear()} NOSS · United Kingdom
        </Container>
      </div>
    </footer>
  );
}
