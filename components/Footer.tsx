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
    title: "Legal & contact",
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
      <Container className="grid gap-8 py-10 sm:gap-10 sm:py-14 lg:grid-cols-4">
        <div>
          <p className="inline-flex items-center gap-2 text-2xl font-bold">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm font-bold">
              N
            </span>
            NOSS
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            We help UK agencies and employers keep worker and business checks
            organised, clear and ready for audit.
          </p>
          <div className="mt-5">
            <ButtonLink
              href="/contact"
              className="!border-white !bg-white !text-[var(--color-navy)] hover:!bg-[var(--color-surface)]"
            >
              Book a demo
            </ButtonLink>
          </div>
        </div>

        {/* Desktop columns */}
        {groups.map((group) => (
          <div key={group.title} className="hidden sm:block">
            <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-1 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="tap inline-flex items-center hover:underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {group.title === "Legal & contact" ? (
              <div className="mt-5">
                <ContactChannels tone="dark" />
              </div>
            ) : null}
          </div>
        ))}

        {/* Mobile accordion */}
        <div className="space-y-2 sm:hidden">
          {groups.map((group) => {
            const isOpen = open === group.title;
            return (
              <div key={group.title} className="rounded-xl border border-white/10">
                <button
                  type="button"
                  className="tap flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : group.title)}
                >
                  {group.title}
                  <ChevronDown
                    size={18}
                    className={`transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                {isOpen ? (
                  <ul className="space-y-1 border-t border-white/10 px-4 py-3 text-sm">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link className="tap inline-flex items-center py-1 hover:underline" href={link.href}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {group.title === "Legal & contact" ? (
                      <li className="pt-3">
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
        <Container className="py-5 text-xs text-white/45">
          © {new Date().getFullYear()} NOSS · United Kingdom
        </Container>
      </div>
    </footer>
  );
}
