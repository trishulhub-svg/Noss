import Link from "next/link";
import { ButtonLink } from "@/components/Button";
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
      <Section tone="surface" className="!pt-0">
        <SectionHeading title="Starter guides" useMarker />
        <ul className="grid gap-4 md:grid-cols-2">
          {resources.map((article, index) => (
            <li key={article.slug}>
              <Link
                href={`/resources/${article.slug}`}
                className={`card-lift flex h-full cursor-pointer flex-col p-5 transition hover:-translate-y-0.5 ${
                  index % 2
                    ? "bg-[var(--color-black)] text-white"
                    : "bg-white text-[var(--color-black)]"
                }`}
              >
                <h2 className="text-lg font-extrabold">{article.title}</h2>
                <p className={`mt-2 flex-1 text-sm ${index % 2 ? "text-white/70" : "text-[var(--color-muted-text)]"}`}>
                  {article.description}
                </p>
                <p className={`mt-4 text-xs ${index % 2 ? "text-[var(--color-lime)]" : "text-[var(--color-muted-text)]"}`}>
                  Reviewed {article.reviewedAt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact" variant="lime">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
