import React from 'react';

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-4xl font-extrabold text-white tracking-tight">Cookie Policy</h1>
      <p className="text-slate-400 text-sm">Last updated: October 2026</p>

      <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          TrishulHub uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and ensure reliable performance across our digital platform.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">1. What Are Cookies?</h2>
        <p>
          Cookies are small data files placed on your device when you visit a website. They are widely used to make websites work efficiently and provide analytical information to site owners.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">2. Managing Cookies</h2>
        <p>
          You can control and manage cookies through your browser settings. Disabling certain cookies may impact the functionality of interactive features on our site.
        </p>
      </div>
    </div>
  );
}
