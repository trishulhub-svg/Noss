import { type ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
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
  tone?: "default" | "surface" | "navy";
}) {
  const toneClass =
    tone === "surface"
      ? "bg-[var(--color-muted)]/60"
      : tone === "navy"
        ? "bg-[var(--color-primary)] text-white"
        : "bg-transparent";

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${toneClass} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  align = "left",
  eyebrow,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
}) {
  return (
    <div
      className={`mb-8 max-w-2xl reveal ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-verified)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight text-[var(--color-primary)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-lg text-[var(--color-muted-foreground)]">{description}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <Section className="!pb-8 !pt-10 sm:!pt-14">
      <div className="reveal max-w-3xl">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-verified)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-[var(--color-primary)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-muted-foreground)] sm:text-xl">
          {description}
        </p>
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </Section>
  );
}
