'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const [service, setService] = useState('Custom Software');
  const [budget, setBudget] = useState('£5,000');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [website, setWebsite] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const s = searchParams.get('service');
    const b = searchParams.get('budget');
    const scope = searchParams.get('scope');

    if (s) setService(s);
    if (b) setBudget(b);
    if (scope) setMessage(`Project Goals / Scope: ${scope}`);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Left Column: Contact info */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wide uppercase">
            Get in touch
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Let&apos;s build something exceptional together</h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Reach out for a direct engineering consultation. We typically respond within 24–48 hours.
          </p>
        </div>

        <div className="space-y-6 pt-4">
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <MapPin className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold">UK Headquarters</div>
              <div className="text-slate-400 text-sm">London, United Kingdom (Remote & Global Delivery)</div>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Mail className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold">Email Us</div>
              <a href="mailto:info@trishulhub.com" className="text-cyan-400 text-sm hover:underline">info@trishulhub.com</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <Phone className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold">Call Us</div>
              <a href="tel:+447552563277" className="text-cyan-400 text-sm hover:underline">+44 75525 63277</a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
            <MessageCircle className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <div className="text-white font-semibold">Instant WhatsApp Chat</div>
              <a href="https://wa.me/447552563277" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-sm hover:underline">Chat with our engineers</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="lg:col-span-7 bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 backdrop-blur-xl">
        {submitted ? (
          <div className="text-center py-16 space-y-6">
            <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Received Successfully!</h3>
            <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
              Thank you for reaching out to TrishulHub. Our engineering team has received your request and will get back to you within 24–48 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-xl bg-slate-800 text-white text-sm font-semibold hover:bg-slate-700 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-bold text-white pb-2 border-b border-slate-800">Project Inquiry Form</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Taroon / Pruthviraj"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="info@trishulhub.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Company / Organization</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="TrishulHub Client Ltd"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Existing Website (optional)</label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourbusiness.co.uk"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Service Required</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="Custom Software">Custom Software</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Mobile Applications">Mobile Applications</option>
                  <option value="Performance / SEO audit">Performance / SEO audit</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-white mb-2">Target Budget Range</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                >
                  <option value="£1,500">£1,500</option>
                  <option value="£2,500">£2,500</option>
                  <option value="£5,000">£5,000</option>
                  <option value="£10,000">£10,000</option>
                  <option value="Custom">Custom</option>
                  <option value="Not decided yet">Not decided yet</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-white mb-2">Project Details & Goals *</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your project, timeline, and key requirements..."
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              Send Inquiry <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="text-center py-24 text-slate-400">Loading contact form...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
