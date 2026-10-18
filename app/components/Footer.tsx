import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                T
              </div>
              <span className="text-white font-bold text-lg tracking-tight">TrishulHub</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              UK digital engineering studio delivering high-speed marketing websites, bespoke internal software, and robust mobile applications for expanding businesses.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/447552563277"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@trishulhub.com"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+447552563277"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/#planner" className="hover:text-cyan-400 transition-colors">Project Planner</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Custom Software</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Website Development</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Mobile Applications</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cyan-400 transition-colors">Performance & SEO Audits</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>London, United Kingdom (Remote & Global Delivery)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="mailto:info@trishulhub.com" className="hover:text-white transition-colors">info@trishulhub.com</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href="tel:+447552563277" className="hover:text-white transition-colors">+44 75525 63277</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 TrishulHub. All rights reserved. Founded in 2023.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-slate-200 transition-colors">Cookie Settings</Link>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
