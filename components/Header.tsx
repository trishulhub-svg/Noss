"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Section";
import { navLinks } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-[var(--primary-navy)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
        >
          NOSS
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[var(--text)] hover:text-[var(--action-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-56 rounded-md border border-[var(--border)] bg-white p-2 opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded px-3 py-2 text-sm text-[var(--text)] hover:bg-[var(--surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--text)] hover:text-[var(--action-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/login"
            className="text-sm font-medium text-[var(--slate)] hover:text-[var(--action-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
          >
            Login
          </Link>
          <ButtonLink href="/contact" className="!py-2 !px-4 text-sm">
            Book a Demo
          </ButtonLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--primary-navy)] lg:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close menu" : "Menu"}
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="border-t border-[var(--border)] bg-white lg:hidden"
        >
          <Container className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto py-4">
            {navLinks.flatMap((item) =>
              "children" in item && item.children
                ? item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="rounded-md px-3 py-3 text-base font-medium text-[var(--text)] hover:bg-[var(--surface)]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))
                : [
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base font-medium text-[var(--text)] hover:bg-[var(--surface)]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>,
                  ],
            )}
            <Link
              href="/login"
              className="rounded-md px-3 py-3 text-base font-medium text-[var(--text)] hover:bg-[var(--surface)]"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <ButtonLink href="/contact" className="mt-2" >
              Book a Demo
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
