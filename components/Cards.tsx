import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { type ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  href,
  icon: Icon = FileCheck2,
}: {
  title: string;
  description: string;
  href: string;
  icon?: LucideIcon;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full cursor-pointer flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)] transition duration-200 hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-accent)]">
        <Icon size={22} aria-hidden />
      </span>
      <h3 className="mt-4 text-xl font-bold text-[var(--color-primary)]">{title}</h3>
      <p className="mt-2 flex-1 text-[var(--color-muted-foreground)]">{description}</p>
      <p className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-[var(--color-accent)]">
        Learn more <ArrowRight size={16} aria-hidden className="transition group-hover:translate-x-0.5" />
      </p>
    </Link>
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
          <li
            key={item.title}
            className="rounded-2xl border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-sm)]"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--color-muted)] text-[var(--color-verified)]">
                <Icon size={18} aria-hidden />
              </span>
              <div>
                <h3 className="font-bold text-[var(--color-primary)]">{item.title}</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted-foreground)]">
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
        <li
          key={step.title}
          className="rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-sm)]"
        >
          <p className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
            {index + 1}
          </p>
          <h3 className="mt-3 font-bold text-[var(--color-primary)]">{step.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
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
    <figure className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white shadow-[var(--shadow-md)]">
      <div className="flex items-center gap-2 border-b border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-3 text-xs font-semibold text-[var(--color-muted-foreground)]">
        <ShieldCheck size={14} aria-hidden />
        Preview only — not real customer data
      </div>
      <figcaption className="sr-only">{title}</figcaption>
      <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
        {[
          { label: "In progress", value: "12", icon: ClipboardList },
          { label: "Missing items", value: "4", icon: FileCheck2 },
          { label: "Checked", value: "7", icon: CheckCircle2, tone: "ok" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-foreground)]">
                  {item.label}
                </p>
                <Icon
                  size={16}
                  aria-hidden
                  className={item.tone === "ok" ? "text-[var(--color-verified)]" : "text-[var(--color-accent)]"}
                />
              </div>
              <p
                className={`mt-2 text-3xl font-extrabold ${
                  item.tone === "ok"
                    ? "text-[var(--color-verified)]"
                    : "text-[var(--color-primary)]"
                }`}
              >
                {item.value}
              </p>
              <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
                Example numbers
              </p>
            </div>
          );
        })}
      </div>
      <p className="border-t border-[var(--color-border)] px-4 py-4 text-sm text-[var(--color-muted-foreground)] sm:px-5">
        {description}
      </p>
    </figure>
  );
}
