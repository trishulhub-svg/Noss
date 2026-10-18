'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserCheck, ShieldCheck, FileCheck, CheckCircle2, Upload, Lock, Clock, AlertCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function CandidatePortalPage() {
  const [activeTab, setActiveTab] = useState<'vault' | 'rtw' | 'dbs' | 'applications'>('vault');

  // RTW Form state
  const [shareCode, setShareCode] = useState('');
  const [dob, setDob] = useState('');
  const [rtwResult, setRtwResult] = useState<any>(null);
  const [rtwLoading, setRtwLoading] = useState(false);

  // DBS Form state
  const [certNumber, setCertNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [dbsResult, setDbsResult] = useState<any>(null);
  const [dbsLoading, setDbsLoading] = useState(false);

  const handleVerifyRtw = async (e: React.FormEvent) => {
    e.preventDefault();
    setRtwLoading(true);
    setRtwResult(null);
    try {
      const res = await fetch('/api/compliance/verify-rtw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shareCode, dateOfBirth: dob }),
      });
      const data = await res.json();
      setRtwResult(data.data || data);
    } catch (err: any) {
      setRtwResult({ success: false, notes: err.message });
    } finally {
      setRtwLoading(false);
    }
  };

  const handleVerifyDbs = async (e: React.FormEvent) => {
    e.preventDefault();
    setDbsLoading(true);
    setDbsResult(null);
    try {
      const res = await fetch('/api/compliance/verify-dbs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateNumber: certNumber, applicantFullName: fullName }),
      });
      const data = await res.json();
      setDbsResult(data.data || data);
    } catch (err: any) {
      setDbsResult({ success: false, notes: err.message });
    } finally {
      setDbsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4 bg-slate-900/80 border border-amber-500/20 p-8 rounded-3xl shadow-xl backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20 mb-3 shadow-sm">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>Candidate Compliance & Vetting Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Welcome, Alexander Wright</h1>
          <p className="text-slate-400 text-sm mt-1">Manage your secure document vault, live UKVI share codes, and DBS verification credentials.</p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2.5 rounded-2xl text-emerald-400 text-xs font-bold shadow-lg shadow-emerald-500/10">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 mr-1.5" />
          <span>Status: Verified Professional (Ready for Hire)</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-amber-500/20 mb-8 space-x-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('vault')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'vault' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          Secure Document Vault & GDPR
        </button>
        <button
          onClick={() => setActiveTab('rtw')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'rtw' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          Live Right to Work Verifier
        </button>
        <button
          onClick={() => setActiveTab('dbs')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'dbs' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          DBS Certificate Checker
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'applications' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'
          }`}
        >
          Job Applications & Shortlists
        </button>
      </div>

      {/* Tab: Vault */}
      {activeTab === 'vault' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-slate-900/80 p-8 rounded-3xl border border-amber-500/20 shadow-xl space-y-6 backdrop-blur-xl">
            <h3 className="text-lg font-bold text-white flex items-center">
              <ShieldCheck className="w-5 h-5 text-amber-400 mr-2" /> Security & Privacy
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Your files are encrypted with AES-256-GCM. In compliance with GDPR Article 17, unselected records are automatically purged after 90 days.
            </p>
            <div className="p-4 bg-amber-500/10 rounded-2xl border border-amber-500/20 text-xs text-amber-300 space-y-2">
              <div className="font-bold flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-amber-400" /> AES-256 Vault Secured</div>
              <p className="text-slate-300">Home Office Statutory Excuse certificate active until Oct 2027.</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-slate-900/80 p-8 rounded-3xl border border-amber-500/20 shadow-xl space-y-6 backdrop-blur-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Your Uploaded Compliance Documents</h3>
              <Link href="/candidates" className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30">
                Upload New Document
              </Link>
            </div>
            <div className="divide-y divide-slate-800">
              <div className="py-5 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white">Right to Work Share Code (W88492019)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Verified by UK Home Office API &bull; Retention expires in 82 days</p>
                </div>
                <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">Verified</span>
              </div>
              <div className="py-5 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white">Enhanced DBS Certificate (Cert #481920381920)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Checked against DBS database &bull; Clear disclosure</p>
                </div>
                <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">Clear</span>
              </div>
              <div className="py-5 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-white">UK Biometric Passport</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Encrypted vault storage &bull; Biometric validity confirmed</p>
                </div>
                <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: RTW Verifier */}
      {activeTab === 'rtw' && (
        <div className="max-w-2xl mx-auto bg-slate-900/80 p-8 sm:p-10 rounded-3xl border border-amber-500/20 shadow-xl space-y-6 backdrop-blur-xl">
          <div>
            <h3 className="text-2xl font-bold text-white">Test UK Right to Work Share Code</h3>
            <p className="text-slate-400 text-sm mt-1">
              Enter a 9-character share code (e.g. W12345678) to instantly query the simulated UK Home Office API.
            </p>
          </div>

          <form onSubmit={handleVerifyRtw} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Share Code *</label>
              <input
                type="text"
                required
                placeholder="e.g. W12345678"
                value={shareCode}
                onChange={(e) => setShareCode(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-white text-sm uppercase focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Date of Birth *</label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={rtwLoading}
              className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-extrabold py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition"
            >
              {rtwLoading ? 'Querying UKVI Database...' : 'Verify Right to Work Instantly'}
            </button>
          </form>

          {rtwResult && (
            <div className={`p-6 rounded-2xl border ${rtwResult.status === 'VERIFIED' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-rose-500/10 border-rose-500/30 text-rose-300'}`}>
              <h4 className="font-bold text-lg mb-1 flex items-center text-white">
                {rtwResult.status === 'VERIFIED' ? <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-400" /> : <AlertCircle className="w-5 h-5 mr-2 text-rose-400" />}
                Verification Status: {rtwResult.status}
              </h4>
              <p className="text-sm mt-2 text-slate-300">{rtwResult.notes}</p>
              {rtwResult.immigrationStatus && (
                <div className="mt-4 pt-3 border-t border-emerald-500/20 text-xs space-y-1 text-slate-300">
                  <p><strong>Immigration Status:</strong> {rtwResult.immigrationStatus}</p>
                  <p><strong>Statutory Excuse Granted:</strong> {rtwResult.statutoryExcuseGranted ? 'Yes (Protected)' : 'No'}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab: DBS Checker */}
      {activeTab === 'dbs' && (
        <div className="max-w-2xl mx-auto bg-slate-900/80 p-8 sm:p-10 rounded-3xl border border-amber-500/20 shadow-xl space-y-6 backdrop-blur-xl">
          <div>
            <h3 className="text-2xl font-bold text-white">Check DBS Certificate</h3>
            <p className="text-slate-400 text-sm mt-1">
              Verify 12-digit Disclosure and Barring Service certificate numbers against secure compliance databases.
            </p>
          </div>

          <form onSubmit={handleVerifyDbs} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">DBS Certificate Number (12 digits) *</label>
              <input
                type="text"
                required
                maxLength={12}
                placeholder="e.g. 001928374650"
                value={certNumber}
                onChange={(e) => setCertNumber(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Applicant Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Alexander Wright"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-white text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none transition"
              />
            </div>
            <button
              type="submit"
              disabled={dbsLoading}
              className="w-full bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950 font-extrabold py-3.5 rounded-2xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition"
            >
              {dbsLoading ? 'Querying DBS Database...' : 'Verify DBS Certificate'}
            </button>
          </form>

          {dbsResult && (
            <div className={`p-6 rounded-2xl border ${dbsResult.status === 'CLEAR' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' : 'bg-amber-500/10 border-amber-500/30 text-amber-300'}`}>
              <h4 className="font-bold text-lg mb-1 flex items-center text-white">
                {dbsResult.status === 'CLEAR' ? <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-400" /> : <AlertCircle className="w-5 h-5 mr-2 text-amber-400" />}
                DBS Result: {dbsResult.status}
              </h4>
              <p className="text-sm mt-2 text-slate-300">{dbsResult.notes}</p>
              {dbsResult.issueDate && (
                <div className="mt-4 pt-3 border-t border-slate-800 text-xs space-y-1 text-slate-300">
                  <p><strong>Check Type:</strong> {dbsResult.checkType}</p>
                  <p><strong>Issue Date:</strong> {dbsResult.issueDate}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tab: Applications */}
      {activeTab === 'applications' && (
        <div className="bg-slate-900/80 p-8 sm:p-10 rounded-3xl border border-amber-500/20 shadow-xl space-y-6 backdrop-blur-xl">
          <h3 className="text-xl font-bold text-white">Your Job Applications & Shortlist Status</h3>
          <div className="space-y-4">
            <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">FinTech London Ltd</span>
                <h4 className="text-lg font-bold text-white mt-2">Senior Full Stack Engineer (Next.js)</h4>
                <p className="text-xs text-slate-400 mt-1">Applied via Noss Verified Profile &bull; Salary: £95,000 / yr</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1.5 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-xl border border-emerald-500/20">
                  Shortlisted & Compliance Cleared
                </span>
                <Link href="/jobs" className="text-xs font-bold text-amber-400 hover:underline">View Spec</Link>
              </div>
            </div>

            <div className="p-6 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">Global Cloud Systems</span>
                <h4 className="text-lg font-bold text-white mt-2">DevOps & Cloud Security Architect</h4>
                <p className="text-xs text-slate-400 mt-1">Applied via Noss Verified Profile &bull; Salary: £110,000 / yr</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3.5 py-1.5 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-xl border border-blue-500/20">
                  Technical Interview Scheduled
                </span>
                <Link href="/jobs" className="text-xs font-bold text-amber-400 hover:underline">View Spec</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
