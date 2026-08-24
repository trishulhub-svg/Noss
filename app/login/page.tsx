import { ButtonLink } from "@/components/Button";
import { PageHero, Section } from "@/components/Section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Login",
  description:
    "NOSS portals come in a later phase. Contact us if you need help today.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Client login"
        description="The client portal and service portal are later-phase apps. They are not live yet, so this page will not send you to a broken link."
      />

      <Section tone="surface" className="!pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-xl font-bold text-[var(--color-primary)]">Client portal</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              Planned: app.noss.co.uk
            </p>
            <p className="mt-4 rounded-xl bg-[var(--color-muted)] px-3 py-3 text-sm text-[var(--color-foreground)]">
              Not available yet. Contact support if you need help with an existing NOSS engagement.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-sm)]">
            <h2 className="text-xl font-bold text-[var(--color-primary)]">Service portal</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-foreground)]">
              Planned: service.noss.co.uk
            </p>
            <p className="mt-4 rounded-xl bg-[var(--color-muted)] px-3 py-3 text-sm text-[var(--color-foreground)]">
              Not available yet. Staff access comes in a later phase.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact">Contact support</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Book a demo
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
