import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Code, Users, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="space-y-24 pb-20 pt-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
          About TrishulHub
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          UK digital engineering studio
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Founded in 2023, we build tools that quietly remove friction from a business every single day.
        </p>
      </section>

      {/* Story & Mission */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Story & Evolution</h2>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              TrishulHub was launched in 2023 with a clear focus on high-performance websites. As our client partnerships grew, we expanded into tailor-made internal software in 2024, followed by robust mobile applications in 2025.
            </p>
            <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
              Today, we operate as an active full studio combining all three pillars under co-founders <strong className="text-white">Taroon</strong> and <strong className="text-white">Pruthviraj</strong>, delivering reliable digital solutions from our base in London, United Kingdom, with global remote execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800">
            <div className="space-y-2">
              <div className="text-3xl font-extrabold text-cyan-400">2023</div>
              <div className="text-sm text-slate-400">Company established in the UK</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-extrabold text-white">3 Core</div>
              <div className="text-sm text-slate-400">Specialized engineering services</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-extrabold text-cyan-400">100%</div>
              <div className="text-sm text-slate-400">Client repository ownership</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-white">Our Operating Principles</h2>
          <p className="text-slate-400">How we collaborate with expanding businesses across the UK and globally.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Speed is a Feature</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We optimize every millisecond. Fast load times, responsive UI, and streamlined workflows directly improve customer satisfaction and conversion.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Own Your Stack</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              No vendor lock-in. Every line of code is handed over in your own git repository with complete documentation and structural independence.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Direct Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Speak directly with the engineers building your product. No layers of account managers or delayed feedback loops.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-950 border border-cyan-500/30 rounded-3xl p-12 space-y-6">
        <h2 className="text-3xl font-bold text-white">Ready to start your project with TrishulHub?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Get in touch with our engineering team for a direct consultation and structured project plan.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-all"
          >
            Contact TrishulHub <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
