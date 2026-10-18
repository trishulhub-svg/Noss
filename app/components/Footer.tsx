import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ShieldCheck, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white font-extrabold text-lg shadow-lg shadow-blue-500/20">
                N
              </div>
              <span className="text-white font-extrabold text-lg tracking-tight">Noss Recruitment</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Premier UK recruitment and compliance agency partnering with industry leaders to provide rigorously vetted, fully compliant employment solutions.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" /> UK Right to Work & DBS Vetting Compliant
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/jobs" className="hover:text-cyan-400 transition-colors">Job Board</Link></li>
              <li><Link href="/employers" className="hover:text-cyan-400 transition-colors">For Employers</Link></li>
              <li><Link href="/candidates" className="hover:text-cyan-400 transition-colors">For Jobseekers</Link></li>
            </ul>
          </div>

          {/* Compliance & Legal */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Compliance</h3>
            <ul className="space-y-2.5 text-sm">
              <li><span className="text-slate-400">Right to Work Vetting</span></li>
              <li><span className="text-slate-400">DBS & Background Checks</span></li>
              <li><span className="text-slate-400">GDPR Data Privacy</span></li>
              <li><span className="text-slate-400">Agency Terms of Business</span></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Headquarters</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>London, United Kingdom (UK-Wide Deployment)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@noss.co.uk" className="hover:text-white transition-colors">info@noss.co.uk</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+442079460999" className="hover:text-white transition-colors">+44 20 7946 0999</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 Noss Recruitment Agency Ltd. All rights reserved. Registered in England & Wales.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">Cookie Settings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
