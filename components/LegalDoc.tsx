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
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--primary-navy)]">
        {title}
      </h1>
      <p className="mt-3 text-sm text-[var(--slate)]">Version {version}</p>
      <p className="mt-4 rounded-md border border-[var(--border)] bg-[var(--surface)] p-4 text-sm text-[var(--slate)]">
        This page describes actual Phase 1 website data flows. It is not
        professional legal advice. Final legal entity details and owner approval
        are required before production freeze.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-[var(--primary-navy)]">
              {section.heading}
            </h2>
            <div className="mt-3 space-y-3 text-[var(--text)]">
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
