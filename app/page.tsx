import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Briefcase, Users, Building2, CheckCircle2, Award, Clock, Lock, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-28 pb-24">
      {/* Hero Section */}
      <section className="relative pt-24 pb-36 overflow-hidden border-b border-slate-800/60">
        {/* Background Grid & Luminous Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_65%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/15 to-emerald-500/15 blur-[160px] rounded-full pointer-events-none animate-pulse-glow"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide shadow-xl shadow-blue-500/10 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              UK's Premier Compliance-Led Recruitment & Vetting Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
              Connecting Industry Leaders with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
                Fully Vetted Talent.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
              Noss partners with top UK enterprises to deliver rigorous compliance, Right to Work verification, DBS vetting, and rapid permanent or contract staffing with zero friction.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-base shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all border border-blue-400/30"
              >
                Browse Job Board
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link
                href="/candidates/portal"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 text-slate-200 font-bold text-base hover:bg-slate-800 hover:text-white transition-all backdrop-blur-md shadow-xl"
              >
                Candidate Compliance Vault
                <Lock className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 pt-16 border-t border-slate-800/80 max-w-5xl mx-auto">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl text-center group hover:border-emerald-500/40 transition-all">
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-105 transition-transform">100%</div>
                <div className="text-xs text-slate-400 font-medium">Right to Work & DBS Vetted</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl text-center group hover:border-cyan-500/40 transition-all">
                <div className="text-3xl font-black text-cyan-400 mb-1 group-hover:scale-105 transition-transform">48 Hours</div>
                <div className="text-xs text-slate-400 font-medium">Average candidate placement SLA</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl text-center group hover:border-blue-500/40 transition-all">
                <div className="text-3xl font-black text-white mb-1 group-hover:scale-105 transition-transform">UK Wide</div>
                <div className="text-xs text-slate-400 font-medium">Enterprise & industry partners</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl text-center group hover:border-emerald-500/40 transition-all">
                <div className="text-3xl font-black text-emerald-400 mb-1 group-hover:scale-105 transition-transform">GDPR</div>
                <div className="text-xs text-slate-400 font-medium">Encrypted secure data vaults</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pathway Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Built for Employers and Ambitious Jobseekers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need reliable talent to scale your operations or your next career-defining role, Noss provides uncompromised compliance and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Employers */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/50 transition-all group shadow-2xl backdrop-blur-xl">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers & Industry Partners</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Streamline your hiring process with pre-vetted candidates. We handle rigorous background checks, Right to Work verification, and referencing so you can focus on growth.
              </p>
              <ul className="space-y-3.5 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Rigorous compliance & DBS vetting guarantee
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Permanent, contract & high-volume temporary staffing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Dedicated enterprise recruitment partner
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/employers" className="inline-flex items-center gap-2 text-blue-400 font-bold text-sm hover:text-blue-300 group-hover:translate-x-1 transition-all">
                Explore employer solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* For Jobseekers */}
          <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800/80 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/50 transition-all group shadow-2xl backdrop-blur-xl">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Jobseekers</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Find verified roles with top UK companies. Our streamlined digital onboarding makes compliance checks simple and fast, getting you into your next role without delays.
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

      {/* Compliance Guarantee Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-slate-900/80 border border-slate-800/80 rounded-3xl p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <ShieldCheck className="w-4 h-4" /> Uncompromising Standards
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              The Noss Compliance & Vetting Guarantee
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              In UK recruitment, compliance is everything. Noss enforces a strict multi-tier vetting protocol for every candidate before they are presented to industry partners:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">Right to Work Verification:</strong> Digital share code verification & passport authenticity checks in full adherence to Home Office guidelines.
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">DBS & Background Checks:</strong> Enhanced or standard Disclosure and Barring Service checks processed securely with instant tracking.
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white">Professional Referencing:</strong> Verified employment history and skill accreditations backed by GDPR Article 17 data protection.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-3xl p-8 space-y-6 text-center shadow-2xl backdrop-blur-md">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mx-auto shadow-lg shadow-cyan-500/10">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Ready to experience compliant hiring?</h3>
            <p className="text-slate-400 text-sm">
              Partner with Noss today and secure top-tier talent without compliance risks.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <Link href="/employers" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] transition-all">
                Partner as Employer
              </Link>
              <Link href="/jobs" className="w-full py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-bold text-sm hover:bg-slate-800 transition-all">
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
