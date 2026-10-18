'use client';

import React, { useState } from 'react';
import { Users, ShieldCheck, CheckCircle2, ArrowRight, Upload, FileText, Lock } from 'lucide-react';
import Link from 'next/link';

export default function CandidatesPage() {
  const [registered, setRegistered] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="space-y-20 pb-20 pt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
          <Users className="w-4 h-4" /> Noss Jobseeker & Candidate Hub
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Your Career Path, Backed by Verified Compliance
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Join the Noss talent network. We match ambitious professionals with top UK employers and guide you through a seamless digital onboarding process.
        </p>
      </div>

      {/* Onboarding Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-lg">
            01
          </div>
          <h3 className="text-xl font-bold text-white">Register & Upload CV</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Create your candidate profile, specify your expertise, and upload your CV to our secure talent database.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-lg">
            02
          </div>
          <h3 className="text-xl font-bold text-white">Secure Compliance Vault</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Upload your Right to Work share code, passport, and DBS certificates into our encrypted GDPR-compliant vault.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-lg">
            03
          </div>
          <h3 className="text-xl font-bold text-white">Get Placed Rapidly</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Once verified by our compliance team, you are fast-tracked to interviews with leading UK industry partners.
          </p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-12 backdrop-blur-xl">
        {registered ? (
          <div className="text-center py-16 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Welcome to the Noss Talent Network!</h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
              Your profile has been created successfully. Check your email for instructions to access your secure Compliance Vault and upload your Right to Work verification.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/20"
            >
              Browse Open Positions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="text-center space-y-2 pb-4">
              <h3 className="text-2xl font-bold text-white">Candidate Registration & Vetting</h3>
              <p className="text-slate-400 text-sm">Create your candidate account to get started.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.co.uk"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Professional Title / Expertise *</label>
              <input
                type="text"
                required
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="e.g. Compliance Specialist, Senior Engineer, Operations Manager"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
              <Lock className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Your documents are stored in an encrypted GDPR-compliant vault with restricted access reserved solely for certified compliance verification.</span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white font-semibold text-base shadow-lg shadow-emerald-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Register & Start Vetting <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
