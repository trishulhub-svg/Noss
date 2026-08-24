import Link from "next/link";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { type ReactNode } from "react";
import { LearnMoreLink } from "@/components/Button";

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
  /** ignored — all cards share the same white style */
  tone?: "light" | "dark" | "lime";
  illustration?: ReactNode;
}) {
  return (
    <article className="card-lift flex h-full flex-col p-6 sm:p-8">
      <div className="grid flex-1 gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--color-navy)]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted-text)] sm:text-base">
            {description}
          </p>
          <div className="mt-6">
            <LearnMoreLink href={href} />
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          <DefaultServiceArt />
        </div>
      </div>
    </article>
  );
}

function DefaultServiceArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-28 w-36" aria-hidden>
      <rect
        x="20"
        y="18"
        width="70"
        height="84"
        rx="12"
        fill="#FFFFFF"
        stroke="#102A43"
        strokeWidth="2.5"
      />
      <rect
        x="55"
        y="34"
        width="70"
        height="70"
        rx="12"
        fill="#EFF6FF"
        stroke="#102A43"
        strokeWidth="2.5"
      />
      <path
        d="M70 58h40M70 72h28M70 86h20"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function FeatureList({
  items,
}: {
  items: { title: string; description: string; icon?: LucideIcon }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = item.icon || CheckCircle2;
        return (
          <li key={item.title} className="card-lift p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-[var(--color-blue)]">
                <Icon size={18} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted-text)]">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string; visual?: ReactNode }[];
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="card-lift p-4">
          <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-sm font-bold text-[var(--color-blue)]">
            {index + 1}
          </p>
          <h3 className="mt-3 font-bold text-[var(--color-navy)]">{step.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-muted-text)]">
            {step.description}
          </p>
          {step.visual ? <div className="mt-3">{step.visual}</div> : null}
        </li>
      ))}
    </ol>
  );
}

export function PortalPreview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <figure className="card-lift overflow-hidden">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-xs font-semibold text-[var(--color-muted-text)]">
        <ShieldCheck size={14} aria-hidden className="text-[var(--color-blue)]" />
        Preview only — not real customer data
      </div>
      <figcaption className="sr-only">{title}</figcaption>
      <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
        {[
          { label: "In progress", value: "12", icon: ClipboardList },
          { label: "Missing items", value: "4", icon: FileCheck2 },
          { label: "Checked", value: "7", icon: CheckCircle2, ok: true },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-text)]">
                  {item.label}
                </p>
                <Icon
                  size={16}
                  aria-hidden
                  className={item.ok ? "text-[var(--color-verified)]" : "text-[var(--color-blue)]"}
                />
              </div>
              <p
                className={`mt-2 text-3xl font-bold ${
                  item.ok ? "text-[var(--color-verified)]" : "text-[var(--color-navy)]"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted-text)]">Example numbers</p>
            </div>
          );
        })}
      </div>
      <p className="border-t border-[var(--color-border)] px-4 py-4 text-sm text-[var(--color-muted-text)] sm:px-5">
        {description}
      </p>
    </figure>
  );
}

export function TrustStrip() {
  const items = [
    "UK-focused",
    "Human review",
    "Clear progress",
    "Audit-ready",
    "Secure handling",
    "Plain English",
  ];
  return (
    <div className="overflow-hidden border-y border-[var(--color-border)] bg-[var(--color-surface)] py-5">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:gap-x-12">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-muted-text)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PromoPanel({
  title,
  description,
  href,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="card-lift grid gap-6 bg-[var(--color-surface)] p-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:p-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-[var(--color-navy)]">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--color-muted-text)]">{description}</p>
        <div className="mt-6">
          <Link
            href={href}
            className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl bg-[var(--color-blue)] px-6 py-3 text-base font-semibold text-white hover:bg-[#1d4ed8]"
          >
            {cta}
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[var(--color-navy)] text-white shadow-[var(--shadow-card)]">
          <span className="text-4xl font-bold">N</span>
        </div>
      </div>
    </div>
  );
}
