"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-white/95 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
        <Link
          href="/"
          className="tap inline-flex items-center text-xl font-extrabold tracking-tight text-[var(--color-primary)]"
        >
          NOSS
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="tap inline-flex items-center rounded-lg px-3 text-sm font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-muted)] hover:text-[var(--color-primary)]"
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-56 rounded-xl border border-[var(--color-border)] bg-white p-2 opacity-0 shadow-[var(--shadow-md)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-foreground)] hover:bg-[var(--color-muted)]"
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
                className="tap inline-flex items-center rounded-lg px-3 text-sm font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/login"
            className="tap inline-flex items-center rounded-lg px-3 text-sm font-semibold text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted)]"
          >
            Login
          </Link>
          <ButtonLink href="/contact" className="ml-2 !min-h-11 !px-4 !py-2.5 text-sm">
            Book a demo
          </ButtonLink>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="tap inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[var(--color-border)] bg-white px-3 text-sm font-semibold text-[var(--color-primary)] lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </Container>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-[var(--color-border)] bg-white lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4 pb-10">
            {navLinks.flatMap((item) =>
              "children" in item && item.children
                ? item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="tap rounded-xl px-4 py-3 text-lg font-semibold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))
                : [
                    <Link
                      key={item.href}
                      href={item.href}
                      className="tap rounded-xl px-4 py-3 text-lg font-semibold text-[var(--color-primary)] hover:bg-[var(--color-muted)]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>,
                  ],
            )}
            <Link
              href="/login"
              className="tap rounded-xl px-4 py-3 text-lg font-semibold text-[var(--color-secondary)] hover:bg-[var(--color-muted)]"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <div className="mt-3 px-1">
              <ButtonLink href="/contact" className="w-full" >
                Book a demo
              </ButtonLink>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
