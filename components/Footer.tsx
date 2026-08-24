"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { ContactChannels } from "@/components/ContactChannels";
import { Container } from "@/components/Section";
import { footerLegalLinks } from "@/lib/site";

type FooterGroup = {
  title: string;
  links: { label: string; href: string }[];
};

const groups: FooterGroup[] = [
  {
    title: "Services",
    links: [
      { label: "Worker checks", href: "/workforce-compliance" },
      { label: "Business checks", href: "/business-compliance" },
      { label: "How it works", href: "/how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Agencies", href: "/industries/recruitment-agencies" },
      { label: "Employers", href: "/industries/employers" },
      { label: "Help", href: "/resources" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      ...footerLegalLinks.map((l) => ({ label: l.label, href: l.href })),
      { label: "Login", href: "/login" },
    ],
  },
];

export function Footer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <Container className="grid gap-6 py-6 sm:grid-cols-2 sm:gap-6 sm:py-8 lg:grid-cols-4 lg:items-start">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="inline-flex items-center gap-2 text-lg font-bold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold">
              N
            </span>
            NOSS
          </p>
          <p className="mt-2 max-w-xs text-xs leading-relaxed text-white/65">
            UK worker and business checks, kept organised.
          </p>
          <div className="mt-3">
            <ButtonLink
              href="/contact"
              className="!min-h-10 !border-white !bg-white !px-4 !py-2 !text-sm !text-[var(--color-navy)] hover:!bg-[var(--color-surface)]"
            >
              Book a demo
            </ButtonLink>
          </div>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="hidden sm:block">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              {group.title}
            </h2>
            <ul className="mt-2 space-y-0.5 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="inline-flex min-h-8 items-center hover:underline"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {group.title === "Legal" ? (
              <div className="mt-3 [&_ul]:space-y-1 [&_li]:text-xs">
                <ContactChannels tone="dark" />
              </div>
            ) : null}
          </div>
        ))}

        <div className="space-y-1.5 sm:hidden">
          {groups.map((group) => {
            const isOpen = open === group.title;
            return (
              <div key={group.title} className="rounded-lg border border-white/10">
                <button
                  type="button"
                  className="flex min-h-10 w-full cursor-pointer items-center justify-between px-3 py-2 text-left text-sm font-semibold"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : group.title)}
                >
                  {group.title}
                  <ChevronDown
                    size={16}
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <ul className="space-y-0.5 border-t border-white/10 px-3 py-2 text-sm">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="inline-flex min-h-8 items-center py-0.5 hover:underline"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {group.title === "Legal" ? (
                      <li className="pt-2 text-xs">
                        <ContactChannels tone="dark" />
                      </li>
                    ) : null}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="py-3 text-[11px] text-white/40">
          © {new Date().getFullYear()} NOSS · United Kingdom
        </Container>
      </div>
    </footer>
  );
}
