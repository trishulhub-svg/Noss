import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Mail,
  ShieldCheck,
  Users,
} from "lucide-react";
import { DrawUnderline, TitleWithUnderline } from "@/components/DrawUnderline";
import { FaqList } from "@/components/FaqList";
import { SpotlightCard } from "@/components/SpotlightCard";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "NOSS",
  description:
    "Make worker checks easier to manage. NOSS helps UK agencies and employers organise checks, papers, follow-up and progress.",
  path: "/",
});

const marqueeItems = [
  "Right to Work",
  "DBS support",
  "ID evidence",
  "References",
  "Renewals",
  "Company checks",
  "VAT support",
  "Policy packs",
];

export default function HomePage() {
  return (
    <>
      {/* LAYER 2 — Hero */}
      <section className="relative z-10 overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--color-blue-soft)] blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-16 top-32 h-72 w-72 rounded-full bg-white/80 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-[1600px] gap-6 px-4 pb-8 pt-8 sm:gap-10 sm:px-6 sm:pb-16 sm:pt-12 lg:grid-cols-12 lg:gap-8 lg:px-10 lg:pb-20">
          <div className="animate-fade-up text-center lg:col-span-7 lg:text-left">
            <p className="mb-4 inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)] backdrop-blur">
              UK compliance, kept simple
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-balance text-3xl font-extrabold leading-[0.95] tracking-tighter text-[var(--color-navy)] sm:text-5xl lg:text-6xl xl:text-7xl">
              Make worker checks{" "}
              <DrawUnderline>easier</DrawUnderline> to manage
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-[var(--color-muted-text)] sm:mt-6 sm:text-lg lg:mx-0">
              NOSS helps UK agencies and employers organise worker checks,
              business papers, follow-up and progress — in one clear service.
            </p>
            <div className="mt-5 flex flex-row flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start">
              <Link
                href="/contact"
                className="glass-button group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full bg-[var(--color-navy)] px-5 text-sm font-semibold text-white shadow-[var(--shadow-card)] sm:min-h-12 sm:px-7 sm:text-base"
              >
                <span className="button-shine" aria-hidden />
                Book a demo
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
              <Link
                href="/login"
                className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 px-5 text-sm font-semibold text-[var(--color-navy)] backdrop-blur hover:bg-white sm:min-h-12 sm:px-7 sm:text-base"
              >
                Client login
              </Link>
            </div>
          </div>

          {/* Floating cards: desktop only — keep mobile hero text-only */}
          <div className="relative hidden w-full max-w-md lg:col-span-5 lg:mx-0 lg:block lg:max-w-none">
            <div className="relative mx-auto h-[380px] w-full max-w-sm">
              <HeroFloatCard
                className="left-0 top-4 w-[72%] animate-float"
                style={{ animationDelay: "0s" }}
                icon={<Mail size={16} aria-hidden />}
                title="Request sent"
                subtitle="Worker checklist ready"
                badge="Email"
              />
              <HeroFloatCard
                className="right-0 top-[28%] w-[70%] animate-float"
                style={{ animationDelay: "1.5s" }}
                icon={<ShieldCheck size={16} aria-hidden />}
                title="Evidence reviewed"
                subtitle="ID · DBS · references"
                badge="Checks"
              />
              <HeroFloatCard
                className="bottom-2 left-[12%] w-[74%] animate-float"
                style={{ animationDelay: "2.5s" }}
                icon={<ClipboardList size={16} aria-hidden />}
                title="Status updated"
                subtitle="Ready for your record"
                badge="Progress"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LAYER 3 — white foreground */}
      <div className="relative z-20 -mt-2 rounded-t-[24px] bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.02)] sm:rounded-t-[40px]">
        <div className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          {/* Highlight strip — always one row */}
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-navy)] px-2 py-3 text-white sm:rounded-[28px] sm:px-6 sm:py-6">
            <div className="grid grid-cols-4 divide-x divide-white/15">
              {[
                { value: "UK", label: "UK checks" },
                { value: "2", label: "Service areas" },
                { value: "5", label: "Process steps" },
                { value: "1", label: "Progress place" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center px-1.5 text-center sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:text-left lg:px-6"
                >
                  <p className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-tight text-white/70 sm:mt-0 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bento services */}
          <div className="mt-8 sm:mt-14">
            <div className="mb-5 max-w-2xl sm:mb-8">
              <p className="mb-2 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Services
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
                Two clear paths. Same calm <TitleWithUnderline title="process." />
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted-text)] sm:mt-3 sm:text-base">
                Pick the path that fits — or talk to us if you need both.
              </p>
            </div>

            <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
              {/* Worker checks */}
              <article className="relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-navy)] p-4 text-white sm:rounded-[28px] sm:p-6">
                <h3 className="text-lg font-bold sm:text-xl">Worker checks</h3>
                <p className="mt-1.5 text-sm text-white/70">
                  People checks, kept in one clear list.
                </p>
                <div className="mt-3 flex-1 overflow-hidden rounded-xl border border-white/10 bg-white/5 sm:mt-5 sm:rounded-2xl">
                  <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5 sm:py-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-amber-400/80 sm:h-2.5 sm:w-2.5" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400/80 sm:h-2.5 sm:w-2.5" />
                    <span className="ml-2 text-[10px] text-white/50">Worker checklist</span>
                  </div>
                  <ul className="space-y-1.5 p-2.5 text-xs sm:space-y-2 sm:p-3">
                    {[
                      { label: "Right to Work", status: "Needed" },
                      { label: "ID evidence", status: "Needed" },
                      { label: "DBS / references", status: "Optional" },
                    ].map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-2 rounded-lg bg-white/5 px-2.5 py-2 sm:px-3 sm:py-2.5"
                      >
                        <span className="font-medium">{row.label}</span>
                        <span className="shrink-0 rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
                          {row.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/workforce-compliance"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-white/90 hover:text-white sm:mt-5 sm:min-h-11"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Business checks */}
              <article className="relative flex flex-col overflow-hidden rounded-2xl bg-[var(--color-blue-soft)] p-4 sm:rounded-[28px] sm:p-6 md:col-span-2 xl:col-span-2">
                <h3 className="text-lg font-bold text-[var(--color-navy)] sm:text-xl">
                  Business checks
                </h3>
                <p className="mt-1.5 max-w-lg text-sm text-[var(--color-muted-text)]">
                  Company papers move through three clear stages.
                </p>
                <div className="mt-3 grid flex-1 gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3">
                  {[
                    {
                      step: "1",
                      title: "Request",
                      detail: "Ask for the company check or policy pack.",
                    },
                    {
                      step: "2",
                      title: "Review",
                      detail: "NOSS checks papers and asks for anything missing.",
                    },
                    {
                      step: "3",
                      title: "Ready",
                      detail: "You get a clear record for audit or clients.",
                    },
                  ].map((col) => (
                    <div
                      key={col.title}
                      className="rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-sm sm:rounded-2xl sm:p-4"
                    >
                      <p className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-navy)] text-[11px] font-bold text-white sm:h-7 sm:w-7 sm:text-xs">
                        {col.step}
                      </p>
                      <p className="mt-2 text-sm font-bold text-[var(--color-navy)] sm:mt-3">
                        {col.title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[var(--color-muted-text)]">
                        {col.detail}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  href="/business-compliance"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--color-navy)] sm:mt-5 sm:min-h-11"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Agencies */}
              <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-neutral-50 p-4 sm:rounded-[28px] sm:p-6">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-sm sm:mb-4 sm:h-10 sm:w-10">
                  <Users size={18} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy)] sm:text-xl">For agencies</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted-text)]">
                  Many workers. Clear progress. Less chasing.
                </p>
                <div className="mt-3 flex-1 space-y-2 sm:mt-5">
                  <div className="rounded-xl bg-white p-2.5 shadow-sm sm:rounded-2xl sm:p-3">
                    <p className="text-xs font-semibold text-[var(--color-navy)]">Agency</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-[var(--color-muted-text)]">
                      We need DBS and Right to Work for 12 new starters.
                    </p>
                  </div>
                  <div className="ml-2 rounded-xl bg-[var(--color-navy)] p-2.5 text-white shadow-sm sm:ml-3 sm:rounded-2xl sm:p-3">
                    <p className="text-xs font-semibold">NOSS</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-white/75">
                      Lists sent. We will track missing items for you.
                    </p>
                  </div>
                </div>
                <Link
                  href="/industries/recruitment-agencies"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--color-navy)] sm:mt-5 sm:min-h-11"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>

              {/* Employers */}
              <article className="relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-sky-50/80 p-4 sm:rounded-[28px] sm:p-6 md:col-span-2 xl:col-span-1">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--color-navy)] shadow-sm sm:mb-4 sm:h-10 sm:w-10">
                  <Building2 size={18} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-navy)] sm:text-xl">For employers</h3>
                <p className="mt-1.5 text-sm text-[var(--color-muted-text)]">
                  New starters and renewals, owned clearly.
                </p>
                <div className="mt-3 flex-1 rounded-xl border border-[var(--color-border)] bg-white p-3 shadow-sm sm:mt-5 sm:rounded-2xl sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-[var(--color-navy)]">Starter pack</p>
                      <p className="mt-0.5 text-xs text-[var(--color-muted-text)]">3 checks open</p>
                    </div>
                    <span className="rounded-full bg-[var(--color-navy)] px-2.5 py-1 text-[10px] font-bold text-white">
                      Active
                    </span>
                  </div>
                  <ul className="mt-2.5 space-y-1 text-xs text-[var(--color-muted-text)] sm:mt-3 sm:space-y-1.5">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-[var(--color-navy)]" aria-hidden />
                      ID received
                    </li>
                    <li className="flex items-center gap-2">
                      <ClipboardList size={14} className="text-[var(--color-navy)]" aria-hidden />
                      Right to Work waiting
                    </li>
                    <li className="flex items-center gap-2">
                      <ShieldCheck size={14} className="text-[var(--color-navy)]" aria-hidden />
                      Renewal due later
                    </li>
                  </ul>
                </div>
                <Link
                  href="/industries/employers"
                  className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[var(--color-navy)] sm:mt-5 sm:min-h-11"
                >
                  Learn more <ArrowRight size={16} aria-hidden />
                </Link>
              </article>
            </div>
          </div>

          {/* Marquee — service keywords, not fake logos */}
          <div className="mt-8 overflow-hidden border-y border-[var(--color-border)] py-4 sm:mt-14 sm:py-6">
            <div className="flex w-max animate-marquee gap-10 pr-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-navy)] opacity-40 transition hover:opacity-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Solutions spotlight */}
          <div className="mt-8 sm:mt-14">
            <div className="mb-5 text-center sm:mb-8">
              <p className="mb-2 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Our solutions
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
                Built for trust, not <TitleWithUnderline title="hype" />
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "People lead",
                  description: "Trained review stays central for important outcomes.",
                  href: "/about",
                },
                {
                  title: "Tools help",
                  description: "Less chasing. Missing items show up earlier.",
                  href: "/how-it-works",
                },
                {
                  title: "Clear records",
                  description: "Evidence is easier to find when audits ask.",
                  href: "/resources",
                },
              ].map((item) => (
                <SpotlightCard key={item.title} className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-muted-text)]">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--color-navy)]"
                  >
                    Explore <ArrowRight size={16} aria-hidden />
                  </Link>
                </SpotlightCard>
              ))}
            </div>
          </div>

          {/* Dark dashboard preview */}
          <div className="mt-8 sm:mt-14">
            <div className="overflow-hidden rounded-2xl bg-stone-900 p-4 shadow-[0_30px_60px_rgba(24,24,27,0.25)] sm:rounded-[32px] sm:p-8 lg:p-10">
              <div className="mb-4 flex flex-col gap-2 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/45">
                    Preview only
                  </p>
                  <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-bold text-white sm:mt-2 sm:text-3xl">
                    Progress you can <TitleWithUnderline title="see" />
                  </h2>
                </div>
                <p className="text-sm text-white/50">Example only — not live customer data</p>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <p className="font-mono text-xs text-white/60">noss-progress.exe</p>
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                      Demo
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {[
                      { label: "In progress", value: "12", icon: ClipboardList },
                      { label: "Missing", value: "4", icon: FileCheck2 },
                      { label: "Checked", value: "7", icon: CheckCircle2 },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="rounded-xl border border-white/10 bg-stone-950/40 p-4"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-[11px] uppercase tracking-wide text-white/45">
                              {item.label}
                            </p>
                            <Icon size={14} className="text-white/50" aria-hidden />
                          </div>
                          <p className="mt-2 text-3xl font-bold text-white">{item.value}</p>
                          <p className="mt-1 text-[11px] text-white/40">Example numbers</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-[10px] sm:p-5">
                  <p className="mb-3 text-sm font-semibold text-white">Live activity</p>
                  <ul className="space-y-3">
                    {[
                      "Worker list sent",
                      "ID evidence received",
                      "Missing item chased",
                      "Record marked ready",
                    ].map((row) => (
                      <li key={row} className="flex items-center gap-3 text-sm text-white/75">
                        <CheckCircle2 size={16} className="shrink-0 text-emerald-400/80" aria-hidden />
                        {row}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="mt-8 sm:mt-14">
            <div className="mb-5 max-w-2xl sm:mb-8">
              <p className="mb-2 inline-flex rounded-full border border-[var(--color-border)] bg-neutral-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-text)]">
                Process
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
                How it <TitleWithUnderline title="works" />
              </h2>
              <p className="mt-2 text-sm text-[var(--color-muted-text)] sm:mt-3 sm:text-base">
                A clear path from request to ready records.
              </p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                { title: "You ask", description: "Add a worker or ask for a check." },
                { title: "We tell them", description: "The worker gets a clear list." },
                { title: "They send proof", description: "Upload or follow the official route." },
                { title: "We review", description: "NOSS checks it and asks for fixes." },
                { title: "You track", description: "See progress and get a ready record." },
              ].map((step, index) => (
                <li key={step.title} className="card-lift p-4">
                  <p className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-blue-soft)] text-sm font-bold text-[var(--color-blue)]">
                    {index + 1}
                  </p>
                  <h3 className="mt-3 font-bold text-[var(--color-navy)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-muted-text)]">{step.description}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Link
                href="/how-it-works"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 text-sm font-semibold text-[var(--color-navy)] hover:bg-neutral-50"
              >
                See the full process
              </Link>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 sm:mt-14">
            <div className="mb-5 max-w-2xl sm:mb-8">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[var(--color-navy)] sm:text-3xl lg:text-4xl">
                <TitleWithUnderline title="FAQ" />
              </h2>
            </div>
            <FaqList
              items={[
                {
                  question: "Is my data safe?",
                  answer:
                    "This website only collects business enquiry details. It does not collect worker ID papers or customer check files.",
                },
                {
                  question: "What does the worker do?",
                  answer:
                    "They get a clear list, send what is needed, and we follow up on anything missing.",
                },
                {
                  question: "Do you replace official Right to Work checks?",
                  answer:
                    "No. We help with the process and evidence. Official checks still follow GOV.UK rules where required.",
                },
                {
                  question: "Can you help with DBS?",
                  answer:
                    "Yes, where the role allows it and through the correct route. We check eligibility carefully.",
                },
                {
                  question: "How fast is it?",
                  answer:
                    "It depends on the check and how quickly evidence arrives. We talk through real timings on a demo.",
                },
                {
                  question: "How do I reach you?",
                  answer:
                    "Use the form, email info@trishulhub.in, or call / WhatsApp +91 966210793.",
                },
              ]}
            />
          </div>

          {/* Final CTA */}
          <div className="mt-8 sm:mt-14">
            <div className="rounded-2xl bg-[var(--color-navy)] px-5 py-8 text-center text-white sm:rounded-[32px] sm:px-10 sm:py-14">
              <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Ready to talk through your <TitleWithUnderline title="checks?" />
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/70">
                Book a demo and see how NOSS can help your team stay organised.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-[var(--color-navy)] hover:bg-neutral-100"
              >
                Book a demo
                <ArrowRight size={18} aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroFloatCard({
  className,
  style,
  icon,
  title,
  subtitle,
  badge,
}: {
  className?: string;
  style?: CSSProperties;
  icon: ReactNode;
  title: string;
  subtitle: string;
  badge: string;
}) {
  return (
    <div
      className={`glass-panel absolute rounded-2xl p-4 shadow-[var(--shadow-card)] ${className ?? ""}`}
      style={style}
    >
      <div className="flex items-start gap-3">
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-navy)] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <p className="truncate text-sm font-bold text-[var(--color-navy)]">{title}</p>
            <span className="rounded-full bg-[var(--color-blue-soft)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-blue)]">
              {badge}
            </span>
          </div>
          <p className="mt-0.5 truncate text-xs text-[var(--color-muted-text)]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
