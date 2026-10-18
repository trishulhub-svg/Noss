import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <h1 className="text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
      <p className="text-slate-400 text-sm">Last updated: October 2026</p>

      <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
        <p>
          At TrishulHub, operating from London, United Kingdom, we respect your privacy and are committed to protecting your personal data in compliance with the UK GDPR and Data Protection Act 2018.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">1. Information We Collect</h2>
        <p>
          We collect information you provide directly to us when filling out our project inquiry forms, contacting us via email or WhatsApp, or engaging with our engineering services. This may include your name, email address, company name, phone number, and project scope details.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to communicate with you regarding your project inquiry, provide engineering estimates, deliver contracted software and website development services, and ensure secure operations.
        </p>

        <h2 className="text-xl font-bold text-white pt-4">3. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please contact us at <a href="mailto:info@trishulhub.com" className="text-cyan-400 hover:underline">info@trishulhub.com</a> or via phone at +44 75525 63277.
        </p>
      </div>
    </div>
  );
}
