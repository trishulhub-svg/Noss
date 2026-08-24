import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Section } from "@/components/Section";
import { getResource, resources } from "@/content/resources";
import { createPageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) return {};
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

export default async function ResourceArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getResource(slug);
  if (!article) notFound();

  return (
    <Section className="!pt-10">
      <p className="text-sm">
        <Link href="/resources" className="font-bold underline">
          Help
        </Link>
      </p>
      <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-[var(--color-black)]">
        {article.title}
      </h1>
      <p className="mt-3 text-sm text-[var(--color-muted-text)]">
        Reviewed {article.reviewedAt}
      </p>
      <div className="mt-8 max-w-3xl space-y-4 text-[var(--color-muted-text)]">
        {article.body.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>
      {article.officialSources?.length ? (
        <div className="card-lift mt-10 max-w-3xl bg-[var(--color-lime)] p-5">
          <h2 className="font-extrabold text-[var(--color-black)]">Official sources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {article.officialSources.map((source) => (
              <li key={source.href}>
                <a
                  href={source.href}
                  className="font-bold underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-10">
        <ButtonLink href="/contact" variant="lime">
          Book a demo
        </ButtonLink>
      </div>
    </Section>
  );
}
