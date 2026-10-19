import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Briefcase, Users, Building2, CheckCircle2, Award, Clock, Lock, Sparkles, Terminal, FileCheck, Zap, Globe, Cpu } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030508] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">

      {/* Hero Section: Neomorphic / Advanced Bento Grid Fintech Aesthetic */}
      <section className="relative pt-32 pb-36 overflow-hidden border-b border-amber-500/10">
        {/* Background Glowing Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-emerald-600/15 blur-[160px] rounded-full pointer-events-none animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.08),rgba(255,255,255,0))] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full glass-panel text-amber-300 text-xs sm:text-sm font-bold tracking-wide shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              UK's Premier Institutional Compliance & Vetting Platform
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Institutional Vetting Meets{' '}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
                Autonomous Precision.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Noss empowers UK enterprises with encrypted document vaults, automated Right to Work share code validation, and rapid 48-hour placement SLAs.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-extrabold text-base shadow-2xl shadow-amber-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Browse Job Board
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link
                href="/candidates/portal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl glass-panel text-slate-200 font-bold text-base hover:bg-slate-900 transition-all shadow-xl"
              >
                Candidate Compliance Vault
                <Lock className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

            {/* Bento Grid Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-16 max-w-5xl mx-auto">
              <div className="glass-panel p-6 rounded-3xl text-center glass-panel-hover">
                <div className="text-3xl font-black text-white mb-1">100%</div>
                <div className="text-xs text-slate-400 font-medium">Right to Work & DBS Vetted</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl text-center glass-panel-hover">
                <div className="text-3xl font-black text-amber-400 mb-1">48 Hours</div>
                <div className="text-xs text-slate-400 font-medium">Average Placement SLA</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl text-center glass-panel-hover">
                <div className="text-3xl font-black text-white mb-1">UK Wide</div>
                <div className="text-xs text-slate-400 font-medium">Enterprise & Industry Partners</div>
              </div>
              <div className="glass-panel p-6 rounded-3xl text-center glass-panel-hover">
                <div className="text-3xl font-black text-emerald-400 mb-1">AES-256</div>
                <div className="text-xs text-slate-400 font-medium">Encrypted Secure Vaults</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dual Pathway Section (Bento Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Targeted Portals</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for Employers & Ambitious Jobseekers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need enterprise scale or your next career-defining role, Noss delivers uncompromised compliance and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employers Bento Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between glass-panel-hover group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform shadow-lg">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers & Industry Partners</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Streamline your hiring process with pre-vetted candidates. We handle rigorous background checks, Right to Work verification, and referencing.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Rigorous compliance & DBS vetting guarantee
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Permanent, contract & high-volume temporary staffing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" /> Dedicated enterprise recruitment partner
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/employers" className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 group-hover:translate-x-1 transition-all">
                Explore employer solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Jobseekers Bento Card */}
          <div className="glass-panel rounded-3xl p-8 sm:p-10 flex flex-col justify-between glass-panel-hover group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-lg">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Jobseekers</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Find verified roles with top UK companies. Our streamlined digital onboarding makes compliance checks simple and fast.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Verified UK job opportunities across industries
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Secure digital document onboarding & vault
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Transparent application tracking & fast-track SLAs
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/candidates" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 group-hover:translate-x-1 transition-all">
                Join our candidate network <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
