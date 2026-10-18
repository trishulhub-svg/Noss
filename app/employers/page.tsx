'use client';

import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Send, Clock, Award } from 'lucide-react';

export default function EmployersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [hiringNeed, setHiringNeed] = useState('Permanent Staffing');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold">
          <Building2 className="w-4 h-4" /> Noss Employer Partnerships
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Rigorous Vetting & Rapid Staffing for UK Industry
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Partner with Noss to access pre-vetted, compliant candidates. We manage Right to Work, DBS checks, and referencing so you hire with absolute certainty.
        </p>
      </div>

      {/* Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Full Compliance Guarantee</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every candidate undergoes rigorous Home Office Right to Work checks and DBS screening before reaching your desk.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Rapid Placement SLAs</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Our active talent pool and automated shortlisting engine deliver pre-vetted candidate shortlists within 48 hours.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">Dedicated Account Partner</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            A dedicated recruitment consultant manages your enterprise hiring pipeline, interviews, and onboarding compliance.
          </p>
        </div>
      </div>

      {/* Partnership Inquiry Form */}
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl">
        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Partnership Inquiry Received!</h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for partnering with Noss. Our corporate recruitment team will contact you within 24 hours to schedule your compliance onboarding.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center space-y-2 pb-4">
              <h3 className="text-2xl font-bold text-white">Request Employer Partnership</h3>
              <p className="text-slate-400 text-sm">Tell us about your staffing requirements.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Enterprise Partner Ltd"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Corporate Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hr@enterprise.co.uk"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Hiring Requirement</label>
              <select
                value={hiringNeed}
                onChange={(e) => setHiringNeed(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Permanent Staffing">Permanent Staffing</option>
                <option value="Contract / Interim Talent">Contract / Interim Talent</option>
                <option value="High-Volume Temporary Staffing">High-Volume Temporary Staffing</option>
                <option value="Compliance & Vetting Audit">Compliance & Vetting Audit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Project Details & Open Roles *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe the roles you need to fill, required compliance standards, and timeline..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Submit Partnership Request <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
