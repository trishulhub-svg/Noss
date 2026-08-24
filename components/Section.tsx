import { type ReactNode } from "react";
import { Marker } from "@/components/Button";

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
  tone?: "default" | "surface" | "navy" | "black";
}) {
  const toneClass =
    tone === "surface" || tone === "navy"
      ? "bg-[var(--color-gray)]"
      : tone === "black"
        ? "bg-[var(--color-black)] text-white"
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
  useMarker = false,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  /** When true, wrap the whole title in the lime marker */
  useMarker?: boolean;
}) {
  return (
    <div
      className={`mb-8 max-w-3xl reveal ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-[var(--color-black)] sm:text-4xl">
        {useMarker ? <Marker>{title}</Marker> : title}
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
}: {
  marker?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <Section className="!pb-8 !pt-10 sm:!pt-14">
      <div className="reveal max-w-3xl">
        {marker ? (
          <p className="mb-4">
            <Marker>{marker}</Marker>
          </p>
        ) : null}
        <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[var(--color-black)] sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-[var(--color-muted-text)] sm:text-xl">
          {description}
        </p>
        {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </Section>
  );
}
