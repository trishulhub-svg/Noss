import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { type ReactNode } from "react";

export function FeatureList({
  items,
}: {
  items: { title: string; description: string; icon?: LucideIcon }[];
}) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
      {items.map((item) => {
        const Icon = item.icon || CheckCircle2;
        return (
          <li key={item.title} className="card-lift p-4 sm:p-5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-[var(--color-navy)]">
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
    <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="card-lift p-4">
          <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-sm font-bold text-[var(--color-navy)]">
            {index + 1}
          </p>
          <h3 className="mt-3 font-bold text-[var(--color-navy)]">{step.title}</h3>
          <p className="mt-2 text-sm text-[var(--color-muted-text)]">{step.description}</p>
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
        <ShieldCheck size={14} aria-hidden className="text-[var(--color-navy)]" />
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
                  className={item.ok ? "text-[var(--color-verified)]" : "text-[var(--color-navy)]"}
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
