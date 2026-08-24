import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/Button";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "surface" | "navy" | "black";
}) {
  const toneClass =
    tone === "surface"
      ? "bg-[var(--color-surface)]"
      : tone === "navy" || tone === "black"
        ? "bg-[var(--color-navy)] text-white"
        : "bg-white";

  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
  useMarker: _useMarker = false,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Kept for call-site compatibility — paint markers are disabled site-wide */
  useMarker?: boolean;
}) {
  void _useMarker;
  return (
    <div
      className={`mb-8 max-w-3xl reveal ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-[var(--color-muted-text)]">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  marker,
  title,
  description,
  actions,
  showDemo = true,
}: {
  marker?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  /** Always show Book a demo in the hero unless false */
  showDemo?: boolean;
}) {
  return (
    <Section className="!pb-8 !pt-10 sm:!pt-14">
      <div className="reveal max-w-3xl">
        {marker ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
            {marker}
          </p>
        ) : null}
        <h1 className="font-[family-name:var(--font-display)] text-balance text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-muted-text)] sm:text-xl">
          {description}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {showDemo ? (
            <ButtonLink href="/contact">
              Book a demo
              <ArrowRight size={18} aria-hidden />
            </ButtonLink>
          ) : null}
          {actions}
        </div>
      </div>
    </Section>
  );
}

/** Compact page CTA used below content when needed */
export function PageCtaLink({ href = "/contact", label = "Book a demo" }: { href?: string; label?: string }) {
  return (
    <Link
      href={href}
      className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-6 text-sm font-semibold text-white"
    >
      {label}
      <ArrowRight size={16} aria-hidden />
    </Link>
  );
}
