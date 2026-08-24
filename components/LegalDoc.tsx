export function LegalDoc({
  title,
  version,
  sections,
}: {
  title: string;
  version: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <article className="max-w-3xl">
      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-primary)]">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[var(--color-muted-foreground)]">
        Version {version}
      </p>
      <p className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-muted)]/50 p-4 text-sm text-[var(--color-muted-foreground)]">
        This page describes how the Phase 1 website works. It is not legal advice.
        Full company legal details will be added when the owner supplies them.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-[var(--color-primary)]">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-[var(--color-foreground)]">
              {section.body.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
