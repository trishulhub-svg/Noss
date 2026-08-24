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
      />
      <Section tone="surface" className="!pt-0">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card-lift bg-[var(--color-lime)] p-6">
            <h2 className="text-xl font-extrabold">Client portal</h2>
            <p className="mt-2 text-sm text-[var(--color-muted-text)]">Planned: app.noss.co.uk</p>
            <p className="mt-4 rounded-xl border border-[var(--color-black)] bg-white px-3 py-3 text-sm">
              Not available yet. Contact support if you need help with an existing NOSS engagement.
            </p>
          </div>
          <div className="card-lift bg-[var(--color-black)] p-6 text-white">
            <h2 className="text-xl font-extrabold">Service portal</h2>
            <p className="mt-2 text-sm text-white/70">Planned: service.noss.co.uk</p>
            <p className="mt-4 rounded-xl border border-[var(--color-lime)] bg-[#2b2c35] px-3 py-3 text-sm text-white/90">
              Not available yet. Staff access comes in a later phase.
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/contact" variant="lime">Contact support</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Book a demo</ButtonLink>
        </div>
      </Section>
    </>
  );
}
