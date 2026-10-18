import React from 'react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-4xl font-extrabold text-white tracking-tight">Terms of Service</h1>
      <p className="text-slate-400 text-sm">Last updated: October 2026</p>

      <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          Welcome to TrishulHub. By accessing our website or engaging our digital engineering services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">1. Services & Deliverables</h2>
        <p>
          TrishulHub provides website development, custom software engineering, and mobile application development. All deliverables are governed by individual project statements of work and milestone agreements.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">2. Intellectual Property & Code Ownership</h2>
        <p>
          Upon full payment of project milestones, clients receive 100% ownership of their custom source code via git repository handover.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">3. Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of the United Kingdom, and any disputes shall be subject to the exclusive jurisdiction of the courts of London, UK.
        </p>
      </div>
    </div>
  );
}
