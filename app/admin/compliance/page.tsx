'use client';

import { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Clock, Search, FileText, User, AlertCircle, Download } from 'lucide-react';

interface Submission {
  id: string;
  candidateName: string;
  email: string;
  docType: string;
  codeOrCert: string;
  submittedAt: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  retentionExpires: string;
}

const INITIAL_SUBMISSIONS: Submission[] = [
  {
    id: 'sub-1',
    candidateName: 'Alexander Wright',
    email: 'alex.wright@devdomain.co.uk',
    docType: 'Right to Work Share Code',
    codeOrCert: 'W88492019',
    submittedAt: '15 mins ago',
    status: 'PENDING',
    retentionExpires: '89 days remaining',
  },
  {
    id: 'sub-2',
    candidateName: 'Elena Rostova',
    email: 'elena.rostova@medics.org.uk',
    docType: 'Enhanced DBS Certificate',
    codeOrCert: '001928475620',
    submittedAt: '2 hours ago',
    status: 'PENDING',
    retentionExpires: '90 days remaining',
  },
  {
    id: 'sub-3',
    candidateName: 'Marcus Sterling',
    codeOrCert: 'X99283746',
    email: 'm.sterling@capitalholdings.co.uk',
    docType: 'Biometric Passport',
    submittedAt: '1 day ago',
    status: 'APPROVED',
    retentionExpires: '88 days remaining',
  },
];

export default function AdminComplianceCenter() {
  const [submissions, setSubmissions] = useState<Submission[]>(INITIAL_SUBMISSIONS);
  const [filter, setFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [testShareCode, setTestShareCode] = useState('');
  const [testDob, setTestDob] = useState('');
  const [verifyResult, setVerifyResult] = useState<any>(null);

  const handleUpdateStatus = (id: string, newStatus: 'APPROVED' | 'REJECTED') => {
    setSubmissions(submissions.map(sub => sub.id === id ? { ...sub, status: newStatus } : sub));
  };

  const handleQuickVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/compliance/verify-rtw', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ shareCode: testShareCode, dateOfBirth: testDob }),
      });
      const data = await res.json();
      setVerifyResult(data.data || data);
    } catch (err: any) {
      setVerifyResult({ status: 'ERROR', notes: err.message });
    }
  };

  const filteredSubmissions = submissions.filter(sub => {
    const matchesFilter = filter === 'ALL' || sub.status === filter;
    const matchesSearch = sub.candidateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          sub.docType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Compliance & Vetting Vault</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900">Secure Verification Queue & Audit Center</h1>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => alert('Compliance Audit Bundle CSV exported successfully!')}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition flex items-center shadow-sm"
          >
            <Download className="w-4 h-4 mr-2" /> Export Audit Reports
          </button>
        </div>
      </div>

      {/* Quick Live Verification Widget */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center">
          <ShieldCheck className="w-5 h-5 text-blue-600 mr-2" /> Live UKVI / DBS Inspector Tool
        </h3>
        <form onSubmit={handleQuickVerify} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Share Code / Cert Number</label>
            <input
              type="text"
              required
              placeholder="e.g. W12345678"
              value={testShareCode}
              onChange={(e) => setTestShareCode(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs uppercase focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth / Applicant Name</label>
            <input
              type="text"
              required
              placeholder="e.g. 1990-01-01"
              value={testDob}
              onChange={(e) => setTestDob(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs shadow transition"
          >
            Run Instant Verification Query
          </button>
        </form>

        {verifyResult && (
          <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 flex justify-between items-center">
            <div>
              <span className="font-bold text-slate-900">Result: {verifyResult.status}</span> &bull; {verifyResult.notes}
            </div>
            <span className="text-slate-400">{verifyResult.checkedAt ? new Date(verifyResult.checkedAt).toLocaleTimeString() : ''}</span>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search candidate name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
          />
        </div>
        <div className="flex gap-2 bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm w-full md:w-auto overflow-x-auto">
          {['ALL', 'PENDING', 'APPROVED', 'REJECTED'].map((statusOption) => (
            <button
              key={statusOption}
              onClick={() => setFilter(statusOption)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                filter === statusOption
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {statusOption}
            </button>
          ))}
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="py-4 px-6">Candidate</th>
                <th className="py-4 px-6">Document Type & Identifier</th>
                <th className="py-4 px-6">Submitted / GDPR Retention</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-sm">
              {filteredSubmissions.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-500">
                    No compliance submissions found matching your criteria.
                  </td>
                </tr>
              ) : (
                filteredSubmissions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6">
                      <div className="font-bold text-slate-900 flex items-center">
                        <User className="w-4 h-4 mr-2 text-slate-400" />
                        {sub.candidateName}
                      </div>
                      <div className="text-xs text-slate-500">{sub.email}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium text-slate-800 flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-blue-600" />
                        {sub.docType}
                      </div>
                      <div className="text-xs font-mono text-slate-500">{sub.codeOrCert}</div>
                    </td>
                    <td className="py-4 px-6 text-slate-500 text-xs">
                      <div>{sub.submittedAt}</div>
                      <div className="text-emerald-700 font-medium mt-0.5">{sub.retentionExpires}</div>
                    </td>
                    <td className="py-4 px-6">
                      {sub.status === 'PENDING' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <Clock className="w-3 h-3 mr-1" /> Pending Review
                        </span>
                      )}
                      {sub.status === 'APPROVED' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Verified
                        </span>
                      )}
                      {sub.status === 'REJECTED' && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          <XCircle className="w-3 h-3 mr-1" /> Needs Revision
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-right space-x-2">
                      {sub.status === 'PENDING' ? (
                        <>
                          <button
                            onClick={() => handleUpdateStatus(sub.id, 'APPROVED')}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleUpdateStatus(sub.id, 'REJECTED')}
                            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition"
                          >
                            Reject
                          </button>
                        </>
                      ) : (
                        <span className="text-xs text-slate-400 font-medium">Logged & Statutory Excuse Active</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
