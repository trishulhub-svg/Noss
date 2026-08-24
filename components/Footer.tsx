"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
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
      { label: "Home", href: "/" },
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
      <Container className="grid gap-5 py-5 sm:grid-cols-2 sm:gap-6 sm:py-6 lg:grid-cols-4 lg:items-start">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="inline-flex items-center gap-2 text-base font-bold">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/10 text-xs font-bold">
              N
            </span>
            NOSS
          </p>
          <p className="mt-1.5 max-w-xs text-xs leading-relaxed text-white/60">
            UK worker and business checks, kept organised.
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title} className="hidden sm:block">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
              {group.title}
            </h2>
            <ul className="mt-1.5 space-y-0 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="inline-flex min-h-7 items-center hover:underline" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {group.title === "Legal" ? (
              <div className="mt-2 [&_ul]:space-y-0.5 [&_li]:text-xs">
                <ContactChannels tone="dark" />
              </div>
            ) : null}
          </div>
        ))}

        <div className="space-y-1 sm:hidden">
          {groups.map((group) => {
            const isOpen = open === group.title;
            return (
              <div key={group.title} className="rounded-lg border border-white/10">
                <button
                  type="button"
                  className="flex min-h-9 w-full cursor-pointer items-center justify-between px-3 py-1.5 text-left text-sm font-semibold"
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
                  <ul className="space-y-0 border-t border-white/10 px-3 py-1.5 text-sm">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          className="inline-flex min-h-7 items-center hover:underline"
                          href={link.href}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    {group.title === "Legal" ? (
                      <li className="pt-1.5 text-xs">
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
        <Container className="py-2.5 text-[11px] text-white/40">
          © {new Date().getFullYear()} NOSS · United Kingdom
        </Container>
      </div>
    </footer>
  );
}
