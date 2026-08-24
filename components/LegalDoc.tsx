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
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)] sm:text-sm">
        Legal
      </p>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[var(--color-navy)] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[var(--color-muted-text)]">Version {version}</p>
      <p className="card-lift mt-4 bg-[var(--color-surface)] p-4 text-sm text-[var(--color-muted-text)]">
        This page describes how the Phase 1 website works. It is not legal advice.
        Full company legal details will be added when the owner supplies them.
      </p>
      <div className="mt-8 space-y-8 sm:mt-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-bold text-[var(--color-navy)]">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.body.map((p) => (
                <p key={p.slice(0, 40)} className="text-[var(--color-muted-text)]">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
