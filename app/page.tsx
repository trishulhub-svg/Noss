import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Code, Smartphone, Globe, Layers, Cpu, Server, CheckCircle2, MessageCircle, Star } from 'lucide-react';
import ProjectPlanner from './components/ProjectPlanner';

const TECH_STACK = [
  { name: 'Next.js', category: 'Framework' },
  { name: 'React', category: 'Library' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Prisma & Turso', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Vercel & Cloudflare', category: 'Cloud' },
  { name: 'Docker & Linux', category: 'Infrastructure' },
  { name: 'Python', category: 'Data & AI' },
  { name: 'Figma', category: 'Design' },
  { name: 'GSAP & Framer', category: 'Animation' },
];

const SECTORS = [
  { title: 'Trades & Home Services', desc: 'Booking flows, customer portals, and dispatch systems.' },
  { title: 'Professional Services', desc: 'Secure client dashboards, document vaults, and intake forms.' },
  { title: 'Retail & Ecommerce', desc: 'High-speed storefronts, inventory syncing, and custom checkout flows.' },
  { title: 'Health & Clinics', desc: 'Patient booking, secure records, and GDPR-compliant portals.' },
  { title: 'SaaS & Startups', desc: 'MVP engineering, scalable architecture, and robust APIs.' },
  { title: 'Logistics & Operations', desc: 'Fleet tracking, inventory management, and internal dashboards.' },
];

const WORKFLOW = [
  { step: '01', title: 'Your Idea', desc: 'Initial consultation to understand your business goals, target audience, and functional requirements.' },
  { step: '02', title: 'We Shape & Design', desc: 'Architecting the stack, creating wireframes, and defining clear milestones.' },
  { step: '03', title: 'Engineering & Build', desc: 'High-speed development with weekly updates and complete transparency.' },
  { step: '04', title: 'Ready to Use', desc: 'Rigorous testing, deployment on edge infrastructure, and full git repository handover.' },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-slate-800/80">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              UK digital engineering studio
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              We build digital projects for growing businesses—{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
                high-performing.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design and engineer high-speed marketing websites, bespoke internal software, and robust mobile applications designed to remove manual work and scale reliably from launch.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/#planner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Estimate Project
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-base hover:bg-slate-800/80 hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>

            {/* Key Metrics / Highlights Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-white mb-1">Performance</div>
                <div className="text-xs text-slate-400">Lightning fast edge loading</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">GDPR-Ready</div>
                <div className="text-xs text-slate-400">Secure UK architecture</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-white mb-1">100% Code</div>
                <div className="text-xs text-slate-400">Full git repository ownership</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">UK Based</div>
                <div className="text-xs text-slate-400">Direct engineering access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Three clear services, built to perfection
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need a high-converting web presence, custom operational software, or a cross-platform mobile app, we deliver tools that quietly remove friction every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Websites */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Websites</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Brand-matched pages that load instantly. Built with Next.js and optimized for high conversion rates, technical SEO, and flawless mobile responsiveness.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Blazing fast Core Web Vitals
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Technical SEO & analytics setup
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> CMS & contact integrations
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300">
                Explore websites <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Custom Software */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Code className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Custom Software</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tailored internal tools and SaaS applications designed around your workflow. Featuring role-based permissions, secure databases, and real-time operational dashboards.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Role-based logins & permissions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Automated workflows & reporting
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" /> Secure PostgreSQL & Prisma storage
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300">
                Explore custom software <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Mobile Apps */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition-all group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Smartphone className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mobile Apps</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                iOS and Android applications from one unified engineering plan. Push notifications, offline support, and secure biometric authentication built natively.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Cross-platform iOS & Android
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> Push notifications & sync
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" /> App Store & Google Play deployment
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/services" className="inline-flex items-center gap-2 text-indigo-400 font-semibold text-sm hover:text-indigo-300">
                Explore mobile apps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Planner */}
      <ProjectPlanner />

      {/* Target Sectors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for modern industries and growing businesses
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We partner with businesses across the UK and beyond to digitize operations and accelerate growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS.map((sector) => (
            <div key={sector.title} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all space-y-3">
              <h3 className="text-lg font-bold text-white">{sector.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="bg-slate-900/30 border-y border-slate-800/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Powered by modern, reliable technology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              No bloated legacy frameworks. We use battle-tested, high-performance tools that you own 100%.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center flex flex-col items-center justify-center space-y-1.5 hover:border-cyan-500/50 transition-colors">
                <span className="text-white font-bold text-sm">{tech.name}</span>
                <span className="text-xs text-slate-500">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A clear, transparent engineering workflow
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            From initial concept to deployment, our 4-step process ensures complete visibility and zero surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW.map((item) => (
            <div key={item.step} className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 relative space-y-4">
              <div className="text-cyan-400 font-mono text-xs font-bold tracking-widest">{item.step}</div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
