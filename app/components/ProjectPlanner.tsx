'use client';

import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Calculator, Sparkles } from 'lucide-react';
import Link from 'next/link';

const SERVICES = [
  { id: 'website', name: 'Website Development', basePrice: 1500, time: '2–4 weeks' },
  { id: 'software', name: 'Custom Software', basePrice: 4000, time: '4–8 weeks' },
  { id: 'mobile', name: 'Mobile Application', basePrice: 6000, time: '6–12 weeks' },
  { id: 'audit', name: 'Performance & SEO Audit', basePrice: 800, time: '1–2 weeks' },
];

const BUDGETS = [
  { label: '£1,500', value: 1500 },
  { label: '£2,500', value: 2500 },
  { label: '£5,000', value: 5000 },
  { label: '£10,000+', value: 10000 },
  { label: 'Custom', value: 15000 },
];

export default function ProjectPlanner() {
  const [selectedService, setSelectedService] = useState(SERVICES[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGETS[1]);
  const [scope, setScope] = useState('Standard Features & API integration');

  return (
    <section id="planner" className="py-24 bg-slate-900/50 border-y border-slate-800/80 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            <Calculator className="w-3.5 h-3.5" />
            Interactive Project Planner
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate your project timeline and investment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose your requirements below to instantly configure your engineering plan with TrishulHub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Configurator */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800/80 rounded-3xl p-6 sm:p-8 space-y-8 backdrop-blur-xl">
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3 flex items-center justify-between">
                <span>1. Select Core Service</span>
                <span className="text-xs text-cyan-400 font-normal">Required</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s)}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      selectedService.id === s.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-sm mb-1">{s.name}</div>
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>Est. {s.time}</span>
                      <span className="text-cyan-400 font-medium">from £{s.basePrice.toLocaleString()}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Target Budget */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                2. Select Target Budget Tier
              </label>
              <div className="flex flex-wrap gap-2.5">
                {BUDGETS.map((b) => (
                  <button
                    key={b.label}
                    onClick={() => setSelectedBudget(b)}
                    className={`px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      selectedBudget.label === b.label
                        ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Scope Notes */}
            <div>
              <label className="block text-sm font-semibold text-white mb-3">
                3. What are your main goals?
              </label>
              <input
                type="text"
                value={scope}
                onChange={(e) => setScope(e.target.value)}
                placeholder="e.g. Role-based logins, Stripe checkout, Mobile app push notifications..."
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {/* Right Column: Summary & CTA */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-400 text-slate-950 text-xs font-bold shadow-md">
                <Sparkles className="w-3 h-3" /> Ready to Build
              </span>
            </div>

            <h3 className="text-xl font-bold text-white tracking-tight">Project Estimate Summary</h3>

            <div className="space-y-4 py-4 border-y border-slate-800">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Selected Service:</span>
                <span className="text-white font-semibold">{selectedService.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Estimated Timeline:</span>
                <span className="text-cyan-400 font-semibold">{selectedService.time}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Target Budget:</span>
                <span className="text-white font-semibold">{selectedBudget.label}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Scope Focus:</span>
                <span className="text-slate-200 text-right truncate max-w-[200px]" title={scope}>{scope}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>100% Client Code Ownership (Git repository handover)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Direct unmediated access to engineers</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Secure, GDPR-ready UK architecture</span>
              </div>
            </div>

            <Link
              href={`/contact?service=${encodeURIComponent(selectedService.name)}&budget=${encodeURIComponent(selectedBudget.label)}&scope=${encodeURIComponent(scope)}`}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Book Consultation & Kickoff
              <ArrowRight className="w-5 h-5" />
            </Link>

            <p className="text-center text-xs text-slate-500">
              Response time within 24–48 hours. No spam, direct engineering consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
