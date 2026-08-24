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
      <p className="mb-4">
        <span className="marker">Legal</span>
      </p>
      <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-black)]">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[var(--color-muted-text)]">Version {version}</p>
      <p className="card-lift mt-4 bg-[var(--color-gray)] p-4 text-sm text-[var(--color-muted-text)]">
        This page describes how the Phase 1 website works. It is not legal advice.
        Full company legal details will be added when the owner supplies them.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-extrabold text-[var(--color-black)]">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-[var(--color-black)]">
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
