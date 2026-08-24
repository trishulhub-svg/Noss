import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { Container } from "@/components/Section";
import { footerLegalLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="inline-flex items-center gap-2 text-2xl font-extrabold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-lime)] text-sm font-black text-[var(--color-black)]">
              N
            </span>
            NOSS
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            We help UK agencies and employers keep worker and business checks
            organised, clear and ready for audit.
          </p>
          <div className="mt-5">
            <ButtonLink href="/contact" variant="lime">
              Book a demo
            </ButtonLink>
          </div>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-lime)]">
            Services
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/workforce-compliance">
                Worker checks
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/business-compliance">
                Business checks
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/how-it-works">
                How it works
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-lime)]">
            Company
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/industries/recruitment-agencies">
                Agencies
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/industries/employers">
                Employers
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/resources">
                Help
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-lime)]">
            Legal & contact
          </h2>
          <ul className="mt-4 space-y-1 text-sm">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="tap inline-flex items-center hover:text-[var(--color-lime)]" href="/login">
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
        <Container className="py-5 text-xs text-white/45">
          © {new Date().getFullYear()} NOSS · United Kingdom
        </Container>
      </div>
    </footer>
  );
}
