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
      ? "bg-[var(--surface)]"
      : tone === "navy"
        ? "bg-[var(--primary-navy)] text-white"
        : "bg-white";

  return (
    <section id={id} className={`py-14 sm:py-16 lg:py-20 ${toneClass} ${className}`}>
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
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--primary-navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg text-[var(--slate)]">{description}</p>
      ) : null}
    </div>
  );
}
