import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe, Code, Smartphone, ShieldCheck, Zap, Cpu } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="space-y-24 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          Our Services & Pricing
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Engineering solutions designed for scale
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Transparent pricing, fixed timelines, and 100% code ownership. Explore our core engineering services below.
        </p>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Service 1: Custom Software */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">Custom Software & Internal Tools</h2>
            <p className="text-slate-300 leading-relaxed">
              Tailored web applications, role-based portals, and operational dashboards built to eliminate manual friction and streamline your business workflows.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Role-based logins & permissions
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Secure PostgreSQL & Prisma
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Automated workflows & reports
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> API integrations (Stripe, etc.)
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Estimated Timeline</span>
              <span className="text-cyan-400 font-semibold">4–8 weeks</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Starting Investment</span>
              <span className="text-white font-bold text-lg">from £4,000</span>
            </div>
            <Link
              href="/contact?service=Custom Software"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
            >
              Discuss Custom Software <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Service 2: Website Development */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">High-Speed Website Development</h2>
            <p className="text-slate-300 leading-relaxed">
              Brand-matched marketing websites built on Next.js. Engineered for maximum speed, immaculate technical SEO, and seamless lead generation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Blazing fast Core Web Vitals
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Technical SEO & analytics setup
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Responsive mobile layouts
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> CMS & form integrations
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Estimated Timeline</span>
              <span className="text-cyan-400 font-semibold">2–4 weeks</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Starting Investment</span>
              <span className="text-white font-bold text-lg">from £1,500</span>
            </div>
            <Link
              href="/contact?service=Website Development"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
            >
              Discuss Website Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Service 3: Mobile Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Smartphone className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">Cross-Platform Mobile Apps</h2>
            <p className="text-slate-300 leading-relaxed">
              Deliver iOS and Android applications from one clear, unified engineering plan. Secure authentication, push notifications, and native performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> iOS & Android from one codebase
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Push notifications & real-time sync
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Secure biometric authentication
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> App Store & Google Play publishing
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Estimated Timeline</span>
              <span className="text-cyan-400 font-semibold">6–12 weeks</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <span className="text-slate-400 text-sm">Starting Investment</span>
              <span className="text-white font-bold text-lg">from £6,000</span>
            </div>
            <Link
              href="/contact?service=Mobile Applications"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:scale-[1.01] transition-all"
            >
              Discuss Mobile App <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
