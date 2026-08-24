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
        marker="Access"
        title="Client login"
        description="The client portal and service portal are later-phase apps. They are not live yet, so this page will not send you to a broken link."
        actions={
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="!min-h-11 !px-4 !text-sm sm:!min-h-12 sm:!px-6 sm:!text-base"
          >
            Contact support
          </ButtonLink>
        }
      />
      <Section tone="surface" className="!pt-0">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          <div className="card-lift p-4 sm:p-6">
            <h2 className="text-lg font-bold text-[var(--color-navy)] sm:text-xl">Client portal</h2>
            <p className="mt-1.5 text-sm text-[var(--color-muted-text)]">Planned: app.noss.co.uk</p>
            <p className="mt-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-muted-text)]">
              Not available yet. Contact support if you need help with an existing NOSS engagement.
            </p>
          </div>
          <div className="card-lift p-4 sm:p-6">
            <h2 className="text-lg font-bold text-[var(--color-navy)] sm:text-xl">Service portal</h2>
            <p className="mt-1.5 text-sm text-[var(--color-muted-text)]">Planned: service.noss.co.uk</p>
            <p className="mt-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5 text-sm text-[var(--color-muted-text)]">
              Not available yet. Staff access comes in a later phase.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
