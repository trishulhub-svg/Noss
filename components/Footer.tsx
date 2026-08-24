import Link from "next/link";
import { ContactChannels } from "@/components/ContactChannels";
import { footerLegalLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[var(--color-background)] pb-6 pt-2 sm:pb-10">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <div className="overflow-hidden rounded-[28px] border border-[var(--color-border)] bg-neutral-50 sm:rounded-[32px]">
          <div className="grid gap-10 p-6 sm:grid-cols-2 sm:p-10 lg:grid-cols-4 lg:p-12">
            <div>
              <p className="inline-flex items-center gap-2 text-2xl font-bold text-[var(--color-navy)]">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-navy)] text-sm font-bold text-white">
                  N
                </span>
                NOSS
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-text)]">
                We help UK agencies and employers keep worker and business checks
                organised, clear and ready for audit.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Solutions
              </h2>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-navy)]">
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
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Company
              </h2>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-navy)]">
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
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Legal
              </h2>
              <ul className="mt-4 space-y-1 text-sm text-[var(--color-navy)]">
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
                <ContactChannels />
              </div>
            </div>
          </div>

          <div className="border-t border-[var(--color-border)] px-6 py-5 text-xs text-[var(--color-muted-text)] sm:px-10">
            © {new Date().getFullYear()} NOSS · United Kingdom
          </div>
        </div>
      </div>
    </footer>
  );
}
