'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, ShieldCheck, Briefcase, Users, Building2, Lock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#07090e]/95 backdrop-blur-xl border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              N
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-lg tracking-tight flex items-center gap-1.5">
                Noss
                <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" title="Institutional Compliance & Vetting"></span>
              </span>
              <span className="text-[11px] text-amber-400/80 font-semibold tracking-wider uppercase">UK Compliance & Recruitment</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/jobs" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-400" /> Job Board
            </Link>
            <Link href="/employers" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-amber-400" /> Employers
            </Link>
            <Link href="/employers/dashboard" className="text-sm font-medium text-amber-300 hover:text-amber-200 transition-colors flex items-center gap-1.5 bg-amber-950/40 px-3.5 py-1.5 rounded-lg border border-amber-500/30 shadow-sm">
              <Building2 className="w-4 h-4 text-amber-400" /> Employer Dashboard
            </Link>
            <Link href="/candidates/portal" className="text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-1.5 bg-emerald-950/40 px-3.5 py-1.5 rounded-lg border border-emerald-500/30 shadow-sm">
              <Users className="w-4 h-4 text-emerald-400" /> Candidate Portal
            </Link>
            <Link href="/admin/compliance" className="text-sm font-medium text-yellow-300 hover:text-yellow-200 transition-colors flex items-center gap-1.5 bg-yellow-950/40 px-3.5 py-1.5 rounded-lg border border-yellow-500/30 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-yellow-400" /> Compliance Queue
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <Link
              href="/candidates/portal"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Candidate Login
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-lg text-amber-400 hover:text-white hover:bg-slate-900 transition-colors border border-amber-500/20"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-[#07090e]/98 border-b border-amber-500/20 px-4 pt-4 pb-6 space-y-3 backdrop-blur-2xl">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400"
          >
            Home
          </Link>
          <Link
            href="/jobs"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400"
          >
            Job Board
          </Link>
          <Link
            href="/employers"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-amber-400"
          >
            Employer Partnership & Info
          </Link>
          <Link
            href="/employers/dashboard"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-amber-300 bg-amber-950/40 border border-amber-500/30"
          >
            Employer Dashboard
          </Link>
          <Link
            href="/candidates/portal"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-emerald-300 bg-emerald-950/40 border border-emerald-500/30"
          >
            Candidate Portal & Vault
          </Link>
          <Link
            href="/admin/compliance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-yellow-300 bg-yellow-950/40 border border-yellow-500/30"
          >
            Admin Compliance Verification Queue
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/candidates/portal"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-bold shadow-lg shadow-amber-500/20"
            >
              Candidate Login
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
