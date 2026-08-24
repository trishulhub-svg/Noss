"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks } from "@/lib/site";

function linkActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemActive(
  pathname: string,
  item: (typeof navLinks)[number],
): boolean {
  if (linkActive(pathname, item.href)) return true;
  if ("children" in item && item.children) {
    return item.children.some((c) => linkActive(pathname, c.href));
  }
  return false;
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = (active: boolean) =>
    `tap inline-flex items-center rounded-lg px-3 text-sm font-semibold transition ${
      active
        ? "bg-[var(--color-navy)] text-white"
        : "text-[var(--color-text)] hover:bg-black/5"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5">
      <div className="glass-panel">
        <div className="relative mx-auto grid h-14 max-w-[1600px] grid-cols-[1fr_auto] items-center gap-3 px-4 sm:h-16 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <Link
            href="/"
            className="tap inline-flex items-center gap-2 justify-self-start text-xl font-bold tracking-tight text-[var(--color-navy)]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--color-navy)] text-sm font-bold text-white sm:h-9 sm:w-9">
              N
            </span>
            <span className="font-[family-name:var(--font-display)] tracking-tight">
              NO<span className="text-[var(--color-muted-text)]">SS</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((item) => {
              const active = itemActive(pathname, item);
              if ("children" in item && item.children) {
                return (
                  <div key={item.label} className="group relative">
                    <Link href={item.href} className={navClass(active)}>
                      {item.label}
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 min-w-56 -translate-x-1/2 rounded-xl border border-[var(--color-border)] bg-white/95 p-2 opacity-0 shadow-[var(--shadow-card)] backdrop-blur-md transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((child) => {
                        const childActive = linkActive(pathname, child.href);
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block rounded-lg px-3 py-2.5 text-sm font-medium ${
                              childActive
                                ? "bg-[var(--color-blue-soft)] text-[var(--color-navy)]"
                                : "hover:bg-[var(--color-surface)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return (
                <Link key={item.href} href={item.href} className={navClass(active)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center justify-self-end gap-2 lg:flex">
            <Link
              href="/login"
              className={navClass(linkActive(pathname, "/login")).replace(
                "text-[var(--color-text)]",
                "text-[var(--color-muted-text)]",
              )}
            >
              Login
            </Link>
            <Link
              href="/contact"
              className="group inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full bg-[var(--color-navy)] px-5 text-sm font-semibold text-white transition hover:bg-[#0b1c2d]"
            >
              Book a demo
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="tap inline-flex cursor-pointer items-center justify-center gap-2 justify-self-end rounded-xl border border-[var(--color-border)] bg-white/80 px-3 text-sm font-semibold text-[var(--color-navy)] lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="fixed inset-x-0 bottom-0 top-14 z-50 overflow-y-auto border-t border-[var(--color-border)] bg-white sm:top-16 lg:hidden"
        >
          <div className="mx-auto flex max-w-[1600px] flex-col gap-1 px-4 py-4 pb-10 sm:px-6">
            {navLinks.flatMap((item) => {
              if ("children" in item && item.children) {
                return item.children.map((child) => {
                  const active = linkActive(pathname, child.href);
                  return (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={`tap rounded-xl px-4 py-3 text-lg font-semibold ${
                        active ? "bg-[var(--color-navy)] text-white" : "hover:bg-[var(--color-surface)]"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </Link>
                  );
                });
              }
              const active = linkActive(pathname, item.href);
              return [
                <Link
                  key={item.href}
                  href={item.href}
                  className={`tap rounded-xl px-4 py-3 text-lg font-semibold ${
                    active ? "bg-[var(--color-navy)] text-white" : "hover:bg-[var(--color-surface)]"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>,
              ];
            })}
            <Link
              href="/login"
              className={`tap rounded-xl px-4 py-3 text-lg font-semibold ${
                linkActive(pathname, "/login")
                  ? "bg-[var(--color-navy)] text-white"
                  : "text-[var(--color-muted-text)] hover:bg-[var(--color-surface)]"
              }`}
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
            <div className="mt-3 px-1">
              <Link
                href="/contact"
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-6 text-base font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Book a demo
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
