import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Briefcase, Users, Building2, CheckCircle2, Award, Clock, Lock, Sparkles, Terminal, FileCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      {/* Hero Section: Editorial Broadsheet meets Precision Fintech */}
      <section className="relative pt-28 pb-32 overflow-hidden border-b border-amber-500/15">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3708_1px,transparent_1px),linear-gradient(to_bottom,#d4af3708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-amber-600/10 via-yellow-500/10 to-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-widest uppercase shadow-xl">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>UK Home Office Compliant Vetting</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                Elite UK Talent. <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-400 bg-clip-text text-transparent">
                  Zero Compliance Risk.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Noss connects premier UK enterprises with rigorously vetted, fully compliant professionals. Automated Right to Work share code verification, Enhanced DBS checks, and instant secure onboarding.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Browse Job Board
                  <Briefcase className="w-5 h-5" />
                </Link>
                <Link
                  href="/candidates/portal"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-slate-950 border border-slate-800 text-slate-200 font-bold text-base hover:bg-slate-900 transition-all shadow-lg"
                >
                  Candidate Vault <Lock className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>

              {/* Trust metrics */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-amber-500/15">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Statutory Compliant</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">48h</div>
                  <div className="text-xs text-slate-400 mt-0.5">Average Placement SLA</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">AES-256</div>
                  <div className="text-xs text-slate-400 mt-0.5">Encrypted Vaults</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Live Compliance Status Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/90 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">Live Vetting Terminal</h4>
                      <p className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> UKVI API Connected
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    SECURE-256
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Sample Candidate:</span>
                      <span className="font-bold text-white">Alexander Wright</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Right to Work Share Code:</span>
                      <span className="font-mono text-amber-300">W88492019</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Enhanced DBS Status:</span>
                      <span className="font-bold text-emerald-400">CLEAR (001928475620)</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2 text-emerald-200">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Statutory Excuse Established
                    </div>
                    <p className="text-slate-300">
                      Immigration status verified under Home Office guidelines. Valid until October 2027. Audit trail archived.
                    </p>
                  </div>
                </div>

                <Link
                  href="/candidates/portal"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold text-sm transition-all"
                >
                  Launch Candidate Compliance Portal <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dual Pathway Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Tailored Ecosystems</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Designed for Employers & Ambitious Talent
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you are scaling an enterprise workforce or securing your next career-defining role, Noss delivers precision and absolute compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Employers Card */}
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-amber-500/60 transition-all shadow-2xl group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Building2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Employers & Enterprise Partners</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Streamline recruitment with pre-screened, fully vetted shortlists. We assume full liability for Right to Work and DBS compliance audits.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Dedicated enterprise account management
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Permanent, contract & high-volume temporary staffing
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> Automated SLA & compliance audit export
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/employers" className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 group-hover:translate-x-1 transition-transform">
                Explore employer solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Candidates Card */}
          <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-emerald-500/25 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/60 transition-all shadow-2xl group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">For Ambitious Jobseekers</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Unlock verified roles across UK finance, healthcare, tech, and defense. Our secure digital vault makes onboarding lightning fast.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Verified UK job opportunities with transparent salaries
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Secure encrypted document vault & GDPR protection
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Fast-track interview SLAs with industry leaders
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/candidates" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 group-hover:translate-x-1 transition-transform">
                Join our candidate network <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
