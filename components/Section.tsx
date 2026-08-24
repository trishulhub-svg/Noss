import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { TitleWithUnderline } from "@/components/DrawUnderline";

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
    <section id={id} className={`py-8 sm:py-12 lg:py-16 ${toneClass} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-5 max-w-3xl reveal sm:mb-8 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="font-[family-name:var(--font-display)] text-balance text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base text-[var(--color-muted-text)] sm:mt-4 sm:text-lg">
          {description}
        </p>
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
  showDemo?: boolean;
}) {
  return (
    <Section className="!pb-6 !pt-8 sm:!pb-8 sm:!pt-12">
      <div className="reveal max-w-3xl">
        {marker ? (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)] sm:mb-3 sm:text-sm">
            {marker}
          </p>
        ) : null}
        <h1 className="font-[family-name:var(--font-display)] text-balance text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl lg:text-5xl">
          <TitleWithUnderline title={title} />
        </h1>
        <p className="mt-3 text-base text-[var(--color-muted-text)] sm:mt-4 sm:text-lg lg:text-xl">
          {description}
        </p>
        <div className="mt-5 flex flex-row flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
          {showDemo ? (
            <ButtonLink
              href="/contact"
              className="!min-h-11 !px-4 !text-sm sm:!min-h-12 sm:!px-6 sm:!text-base"
            >
              Book a demo
              <ArrowRight size={16} aria-hidden />
            </ButtonLink>
          ) : null}
          {actions}
        </div>
      </div>
    </Section>
  );
}
