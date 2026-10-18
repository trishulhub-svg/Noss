'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserCheck, ShieldCheck, FileCheck, CheckCircle2, Upload, Lock, Clock, AlertCircle, ArrowRight } from 'lucide-react';

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-100 mb-2">
            <UserCheck className="w-4 h-4" />
            <span>Candidate Compliance Portal</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">Welcome, Alexander Wright</h1>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-xl text-emerald-800 text-xs font-bold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 mr-1.5" />
          <span>Status: Verified Professional (Ready for Hire)</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-8 space-x-8 overflow-x-auto">
        <button
          onClick={() => setActiveTab('vault')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'vault' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Secure Document Vault & GDPR
        </button>
        <button
          onClick={() => setActiveTab('rtw')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'rtw' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Live Right to Work Verifier
        </button>
        <button
          onClick={() => setActiveTab('dbs')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'dbs' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          DBS Certificate Checker
        </button>
        <button
          onClick={() => setActiveTab('applications')}
          className={`pb-4 text-sm font-bold border-b-2 transition whitespace-nowrap ${
            activeTab === 'applications' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Job Applications & Shortlists
        </button>
      </div>

      {/* Tab: Vault */}
      {activeTab === 'vault' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center">
              <ShieldCheck className="w-5 h-5 text-blue-600 mr-2" /> Security & Privacy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your files are encrypted with AES-256-GCM. In compliance with GDPR Article 17, unselected records are automatically purged after 90 days.
            </p>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-xs text-blue-900 space-y-2">
              <div className="font-bold flex items-center"><Lock className="w-3.5 h-3.5 mr-1 text-blue-600" /> AES-256 Vault Secured</div>
              <p>Home Office Statutory Excuse certificate active until Oct 2027.</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-slate-900">Your Uploaded Compliance Documents</h3>
              <Link href="/candidates" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-xs transition">
                Upload New Document
              </Link>
            </div>
            <div className="divide-y divide-slate-200">
              <div className="py-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Right to Work Share Code (W88492019)</h4>
                  <p className="text-xs text-slate-500">Verified by UK Home Office API &bull; Retention expires in 82 days</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Verified</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Enhanced DBS Certificate (Cert #481920381920)</h4>
                  <p className="text-xs text-slate-500">Checked against DBS database &bull; Clear disclosure</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Clear</span>
              </div>
              <div className="py-4 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">UK Biometric Passport</h4>
                  <p className="text-xs text-slate-500">Encrypted vault storage &bull; Biometric validity confirmed</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200">Encrypted</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab: RTW Verifier */}
      {activeTab === 'rtw' && (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Test UK Right to Work Share Code</h3>
            <p className="text-slate-600 text-sm mt-1">
              Enter a 9-character share code (e.g. W12345678) to instantly query the simulated UK Home Office API.
            </p>
          </div>

          <form onSubmit={handleVerifyRtw} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Share Code *</label>
              <input
                type="text"
                required
                placeholder="e.g. W12345678"
                value={shareCode}
                onChange={(e) => setShareCode(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm uppercase focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Date of Birth *</label>
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={rtwLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow transition"
            >
              {rtwLoading ? 'Querying UKVI Database...' : 'Verify Right to Work Instantly'}
            </button>
          </form>

          {rtwResult && (
            <div className={`p-6 rounded-xl border ${rtwResult.status === 'VERIFIED' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'}`}>
              <h4 className="font-bold text-lg mb-1 flex items-center">
                {rtwResult.status === 'VERIFIED' ? <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" /> : <AlertCircle className="w-5 h-5 mr-2 text-rose-600" />}
                Verification Status: {rtwResult.status}
              </h4>
              <p className="text-sm mt-2">{rtwResult.notes}</p>
              {rtwResult.immigrationStatus && (
                <div className="mt-4 pt-3 border-t border-emerald-200 text-xs space-y-1">
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
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Check DBS Certificate</h3>
            <p className="text-slate-600 text-sm mt-1">
              Verify 12-digit Disclosure and Barring Service certificate numbers against secure compliance databases.
            </p>
          </div>

          <form onSubmit={handleVerifyDbs} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">DBS Certificate Number (12 digits) *</label>
              <input
                type="text"
                required
                maxLength={12}
                placeholder="e.g. 001928374650"
                value={certNumber}
                onChange={(e) => setCertNumber(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Applicant Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Alexander Wright"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={dbsLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow transition"
            >
              {dbsLoading ? 'Querying DBS Database...' : 'Verify DBS Certificate'}
            </button>
          </form>

          {dbsResult && (
            <div className={`p-6 rounded-xl border ${dbsResult.status === 'CLEAR' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-amber-50 border-amber-200 text-amber-900'}`}>
              <h4 className="font-bold text-lg mb-1 flex items-center">
                {dbsResult.status === 'CLEAR' ? <CheckCircle2 className="w-5 h-5 mr-2 text-emerald-600" /> : <AlertCircle className="w-5 h-5 mr-2 text-amber-600" />}
                DBS Result: {dbsResult.status}
              </h4>
              <p className="text-sm mt-2">{dbsResult.notes}</p>
              {dbsResult.issueDate && (
                <div className="mt-4 pt-3 border-t border-slate-200 text-xs space-y-1">
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
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900">Your Job Applications & Shortlist Status</h3>
          <div className="space-y-4">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">FinTech London Ltd</span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">Senior Full Stack Engineer (Next.js)</h4>
                <p className="text-xs text-slate-500 mt-1">Applied via Noss Verified Profile &bull; Salary: £95,000 / yr</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-xl border border-emerald-200">
                  Shortlisted & Compliance Cleared
                </span>
                <Link href="/jobs" className="text-xs font-bold text-blue-600 hover:underline">View Spec</Link>
              </div>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-full">Global Cloud Systems</span>
                <h4 className="text-lg font-bold text-slate-900 mt-2">DevOps & Cloud Security Architect</h4>
                <p className="text-xs text-slate-500 mt-1">Applied via Noss Verified Profile &bull; Salary: £110,000 / yr</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold rounded-xl border border-blue-200">
                  Technical Interview Scheduled
                </span>
                <Link href="/jobs" className="text-xs font-bold text-blue-600 hover:underline">View Spec</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
