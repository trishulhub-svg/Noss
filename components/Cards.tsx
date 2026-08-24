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
  tone = "light",
  illustration,
}: {
  title: string;
  description: string;
  href: string;
  tone?: "light" | "dark" | "lime";
  illustration?: ReactNode;
}) {
  const shell =
    tone === "dark"
      ? "bg-[var(--color-black)] text-white"
      : tone === "lime"
        ? "bg-[var(--color-lime)] text-[var(--color-black)]"
        : "bg-[var(--color-gray)] text-[var(--color-black)]";

  return (
    <article className={`card-lift flex h-full flex-col p-6 sm:p-8 ${shell}`}>
      <div className="grid flex-1 gap-6 sm:grid-cols-[1.1fr_0.9fr] sm:items-center">
        <div>
          <h3 className="text-2xl font-extrabold tracking-tight">
            {tone === "dark" ? (
              title
            ) : (
              <>
                <span className="marker">{title.split(" ")[0]}</span>{" "}
                {title.split(" ").slice(1).join(" ")}
              </>
            )}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed sm:text-base ${
              tone === "dark" ? "text-white/75" : "text-[var(--color-muted-text)]"
            }`}
          >
            {description}
          </p>
          <div className="mt-6">
            <LearnMoreLink href={href} dark={tone === "dark"} />
          </div>
        </div>
        <div className="flex justify-center sm:justify-end">
          {illustration || <DefaultServiceArt tone={tone} />}
        </div>
      </div>
    </article>
  );
}

function DefaultServiceArt({ tone }: { tone: "light" | "dark" | "lime" }) {
  const stroke = tone === "dark" ? "#B9FF66" : "#191A23";
  const fill = tone === "dark" ? "#2B2C35" : "#FFFFFF";
  return (
    <svg viewBox="0 0 160 120" className="h-28 w-36" aria-hidden>
      <rect x="20" y="18" width="70" height="84" rx="12" fill={fill} stroke={stroke} strokeWidth="3" />
      <rect x="55" y="34" width="70" height="70" rx="12" fill={tone === "lime" ? "#FFFFFF" : "#B9FF66"} stroke={stroke} strokeWidth="3" />
      <path d="M70 58h40M70 72h28M70 86h20" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
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
      {items.map((item, index) => {
        const Icon = item.icon || CheckCircle2;
        const dark = index % 2 === 1;
        return (
          <li
            key={item.title}
            className={`card-lift p-5 ${
              dark ? "bg-[var(--color-black)] text-white" : "bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-black)] ${
                  dark
                    ? "bg-[var(--color-lime)] text-[var(--color-black)]"
                    : "bg-[var(--color-lime)] text-[var(--color-black)]"
                }`}
              >
                <Icon size={18} aria-hidden />
              </span>
              <div>
                <h3 className="font-extrabold">{item.title}</h3>
                <p
                  className={`mt-1.5 text-sm ${
                    dark ? "text-white/70" : "text-[var(--color-muted-text)]"
                  }`}
                >
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
      {steps.map((step, index) => {
        const dark = index % 2 === 1;
        return (
          <li
            key={step.title}
            className={`card-lift p-4 ${
              dark ? "bg-[var(--color-black)] text-white" : "bg-[var(--color-gray)]"
            }`}
          >
            <p
              className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-black)] text-sm font-extrabold ${
                dark
                  ? "bg-[var(--color-lime)] text-[var(--color-black)]"
                  : "bg-[var(--color-black)] text-white"
              }`}
            >
              {index + 1}
            </p>
            <h3 className="mt-3 font-extrabold">{step.title}</h3>
            <p
              className={`mt-2 text-sm ${
                dark ? "text-white/70" : "text-[var(--color-muted-text)]"
              }`}
            >
              {step.description}
            </p>
            {step.visual ? <div className="mt-3">{step.visual}</div> : null}
          </li>
        );
      })}
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
    <figure className="card-lift overflow-hidden bg-white">
      <div className="flex items-center gap-2 border-b border-[var(--color-black)] bg-[var(--color-lime)] px-4 py-3 text-xs font-extrabold text-[var(--color-black)]">
        <ShieldCheck size={14} aria-hidden />
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
              className={`rounded-2xl border border-[var(--color-black)] p-4 ${
                item.ok ? "bg-[var(--color-lime)]" : "bg-[var(--color-gray)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wide">
                  {item.label}
                </p>
                <Icon size={16} aria-hidden />
              </div>
              <p className="mt-2 text-3xl font-black">{item.value}</p>
              <p className="mt-1 text-xs opacity-70">Example numbers</p>
            </div>
          );
        })}
      </div>
      <p className="border-t border-[var(--color-black)] px-4 py-4 text-sm text-[var(--color-muted-text)] sm:px-5">
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
    <div className="overflow-hidden border-y border-[var(--color-black)] bg-white py-5">
      <ul className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:gap-x-12">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm font-extrabold uppercase tracking-[0.14em] text-[var(--color-black)]/70"
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
    <div className="card-lift grid gap-6 bg-[var(--color-gray)] p-6 sm:grid-cols-[1.2fr_0.8fr] sm:items-center sm:p-10">
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-black)]">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-[var(--color-muted-text)]">{description}</p>
        <div className="mt-6">
          <Link
            href={href}
            className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-xl border border-[var(--color-black)] bg-[var(--color-black)] px-6 py-3 text-base font-bold text-white hover:bg-[#2b2c35]"
          >
            {cta}
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-[var(--color-black)] bg-[var(--color-black)] text-[var(--color-lime)] shadow-[var(--shadow-card)]">
          <span className="text-5xl font-black">N</span>
          <span className="absolute -right-2 -top-2 h-10 w-10 rounded-full border border-[var(--color-black)] bg-[var(--color-lime)]" />
        </div>
      </div>
    </div>
  );
}
