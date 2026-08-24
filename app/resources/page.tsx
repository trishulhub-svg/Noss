import Link from "next/link";
import { PageHero, Section, SectionHeading } from "@/components/Section";
import { resources } from "@/content/resources";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Help & resources",
  description:
    "Simple guides for UK agencies and employers about worker and business checks.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        marker="Help"
        title="Help & resources"
        description="Short guides in plain English. Always check official sources for rules that can change."
      />
      <Section tone="surface">
        <SectionHeading title="Starter guides" />
        <ul className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {resources.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/resources/${article.slug}`}
                className="card-lift flex h-full cursor-pointer flex-col p-4 transition hover:-translate-y-0.5 sm:p-5"
              >
                <h2 className="text-base font-bold text-[var(--color-navy)] sm:text-lg">
                  {article.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-[var(--color-muted-text)]">
                  {article.description}
                </p>
                <p className="mt-3 text-xs text-[var(--color-muted-text)]">
                  Reviewed {article.reviewedAt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
