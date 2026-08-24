import Link from "next/link";
import { type ReactNode } from "react";

export function ServiceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-lg border border-[var(--border)] bg-white p-6 transition hover:border-[var(--action-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--action-blue)]"
    >
      <h3 className="text-xl font-semibold text-[var(--primary-navy)]">{title}</h3>
      <p className="mt-3 text-[var(--slate)]">{description}</p>
      <p className="mt-4 text-sm font-semibold text-[var(--action-blue)]">
        Learn more →
      </p>
    </Link>
  );
}

export function FeatureList({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title}
          className="rounded-lg border border-[var(--border)] bg-white p-5"
        >
          <h3 className="font-semibold text-[var(--primary-navy)]">{item.title}</h3>
          <p className="mt-2 text-sm text-[var(--slate)]">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export function ProcessSteps({
  steps,
}: {
  steps: { title: string; description: string; visual?: ReactNode }[];
}) {
  return (
    <ol className="grid gap-6 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-lg border border-[var(--border)] bg-white p-4">
          <p className="text-sm font-semibold text-[var(--compliance-teal)]">
            Step {index + 1}
          </p>
          <h3 className="mt-2 font-semibold text-[var(--primary-navy)]">{step.title}</h3>
          <p className="mt-2 text-sm text-[var(--slate)]">{step.description}</p>
          {step.visual ? <div className="mt-4">{step.visual}</div> : null}
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
    <figure className="overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)]">
      <div className="border-b border-[var(--border)] bg-white px-4 py-3 text-xs font-medium text-[var(--slate)]">
        Product / workflow preview — not live customer data
      </div>
      <figcaption className="sr-only">{title}</figcaption>
      <div className="grid gap-3 p-5 sm:grid-cols-3">
        <div className="rounded-md bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--slate)]">Workers</p>
          <p className="mt-2 text-2xl font-semibold text-[var(--primary-navy)]">12</p>
          <p className="mt-1 text-xs text-[var(--slate)]">In progress (example)</p>
        </div>
        <div className="rounded-md bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--slate)]">Missing items</p>
          <p className="mt-2 text-2xl font-semibold text-[var(--primary-navy)]">4</p>
          <p className="mt-1 text-xs text-[var(--slate)]">Awaiting action (example)</p>
        </div>
        <div className="rounded-md bg-white p-4 shadow-sm">
          <p className="text-xs uppercase tracking-wide text-[var(--slate)]">Verified</p>
          <p className="mt-2 text-2xl font-semibold text-[var(--compliance-teal)]">7</p>
          <p className="mt-1 text-xs text-[var(--slate)]">Ready for audit pack (example)</p>
        </div>
      </div>
      <p className="border-t border-[var(--border)] px-5 py-4 text-sm text-[var(--slate)]">
        {description}
      </p>
    </figure>
  );
}
