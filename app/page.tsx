import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Briefcase, Users, Building2, CheckCircle2, Award, Clock } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden border-b border-slate-800/80">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              UK s Premier Compliance-Led Recruitment Agency
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1]">
              Connecting Industry Leaders with{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Fully Vetted Talent.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Noss partners with top UK enterprises and industries to deliver rigorous compliance, Right to Work verification, DBS vetting, and rapid permanent or contract staffing.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/jobs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Browse Job Board
                <Briefcase className="w-5 h-5" />
              </Link>
              <Link
                href="/employers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-base hover:bg-slate-800/80 hover:text-white transition-all"
              >
                Partner as an Employer
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-slate-800/80 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-xs text-slate-400">Right to Work & DBS Vetted</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-1">48 Hours</div>
                <div className="text-xs text-slate-400">Average candidate placement time</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-white mb-1">UK Wide</div>
                <div className="text-xs text-slate-400">Industry & enterprise partners</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 text-center">
                <div className="text-2xl font-bold text-emerald-400 mb-1">GDPR</div>
                <div className="text-xs text-slate-400">Secure encrypted data vaults</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pathway Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built for Employers and Ambitious Jobseekers
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need reliable talent to scale your operations or your next career-defining role, Noss provides uncompromised compliance and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Employers */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/50 transition-all group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers & Industry Partners</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Streamline your hiring process with pre-vetted candidates. We handle rigorous background checks, Right to Work verification, and referencing so you can focus on growth.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Rigorous compliance & DBS vetting
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Permanent, contract & temporary staffing
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Dedicated account management
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/employers" className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm hover:text-blue-300">
                Explore employer solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* For Jobseekers */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/50 transition-all group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Jobseekers</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Find verified roles with top UK companies. Our streamlined digital onboarding makes compliance checks simple and fast, getting you into your next role without delays.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Verified UK job opportunities
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Secure digital document onboarding
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Transparent application tracking
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/candidates" className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm hover:text-emerald-300">
                Join our candidate network <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Guarantee Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-900/30 border border-slate-800 rounded-3xl p-8 sm:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" /> Uncompromising Standards
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              The Noss Compliance & Vetting Guarantee
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              In UK recruitment, compliance is everything. Noss enforces a strict multi-tier vetting protocol for every candidate before they are presented to industry partners:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Right to Work Verification:</strong> Digital share code verification & passport authenticity checks in full adherence to Home Office guidelines.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">DBS & Background Checks:</strong> Enhanced or standard Disclosure and Barring Service checks processed securely.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Professional Referencing:</strong> Verified employment history and skill accreditations.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-2xl p-8 space-y-6 text-center">
            <Award className="w-12 h-12 text-cyan-400 mx-auto" />
            <h3 className="text-xl font-bold text-white">Ready to experience compliant hiring?</h3>
            <p className="text-slate-400 text-sm">
              Partner with Noss today and secure top-tier talent without compliance risks.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <Link href="/employers" className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition-colors">
                Partner as Employer
              </Link>
              <Link href="/jobs" className="w-full py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-colors">
                View Open Roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
