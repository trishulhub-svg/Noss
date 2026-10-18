'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, ShieldCheck, Users, CheckCircle2, Clock, AlertTriangle, FileText, Plus, Search, ArrowRight, Briefcase, Calendar, Download, Eye, X, Check, Trash2, Edit3 } from 'lucide-react';

interface CandidateShortlist {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  experience: string;
  skills: string[];
  rtwStatus: 'VERIFIED' | 'PENDING';
  dbsStatus: 'CLEAR' | 'PENDING';
  matchScore: string;
  appliedDate: string;
  bio: string;
  shareCode?: string;
  dbsCertNumber?: string;
}

interface JobPostingItem {
  id: string;
  title: string;
  dept: string;
  status: 'Active' | 'Reviewing' | 'Paused' | 'Closed';
  candidatesCount: number;
  salary: string;
  location: string;
  employmentType: string;
  createdAt: string;
}

const INITIAL_CANDIDATES: CandidateShortlist[] = [
  {
    id: 'cand-1',
    name: 'Alexander Wright',
    role: 'Senior Full Stack Engineer',
    email: 'alexander.wright@noss-candidate.co.uk',
    phone: '+44 20 7946 0912',
    experience: '8 Years',
    skills: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
    rtwStatus: 'VERIFIED',
    dbsStatus: 'CLEAR',
    matchScore: '98%',
    appliedDate: 'Today',
    bio: 'Ex-FinTech Lead Engineer specializing in secure, high-throughput B2B SaaS architecture and SOC2 / GDPR compliance.',
    shareCode: 'W88492019',
    dbsCertNumber: '001928475620',
  },
  {
    id: 'cand-2',
    name: 'Elena Rostova',
    role: 'Compliance & GDPR Officer',
    email: 'elena.rostova@noss-candidate.co.uk',
    phone: '+44 20 7946 4821',
    experience: '6 Years',
    skills: ['GDPR Article 15-22', 'Data Governance', 'ISO 27001', 'Risk Auditing'],
    rtwStatus: 'VERIFIED',
    dbsStatus: 'CLEAR',
    matchScore: '95%',
    appliedDate: 'Yesterday',
    bio: 'Certified Information Privacy Professional (CIPP/E) with extensive experience managing statutory compliance in UK financial institutions.',
    shareCode: 'R91827364',
    dbsCertNumber: '009837465210',
  },
  {
    id: 'cand-3',
    name: 'Marcus Sterling',
    role: 'DevOps & Cloud Architect',
    email: 'marcus.sterling@noss-candidate.co.uk',
    phone: '+44 20 7946 1938',
    experience: '10 Years',
    skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD', 'Security Hardening'],
    rtwStatus: 'PENDING',
    dbsStatus: 'PENDING',
    matchScore: '91%',
    appliedDate: '3 days ago',
    bio: 'Infrastructure specialist with deep expertise in zero-trust cloud architectures and automated compliance verification pipelines.',
    shareCode: 'M55443322',
    dbsCertNumber: '004455667788',
  },
];

const INITIAL_POSTINGS: JobPostingItem[] = [
  {
    id: 'job-1',
    title: 'Senior Full Stack Engineer (Next.js)',
    dept: 'Engineering',
    status: 'Active',
    candidatesCount: 8,
    salary: '£95,000',
    location: 'London (Hybrid)',
    employmentType: 'Permanent',
    createdAt: 'Oct 10, 2026',
  },
  {
    id: 'job-2',
    title: 'Compliance & GDPR Officer',
    dept: 'Legal & Risk',
    status: 'Active',
    candidatesCount: 5,
    salary: '£62,000',
    location: 'Remote / London',
    employmentType: 'Permanent',
    createdAt: 'Oct 12, 2026',
  },
  {
    id: 'job-3',
    title: 'DevOps Cloud Architect',
    dept: 'Infrastructure',
    status: 'Active',
    candidatesCount: 3,
    salary: '£110,000',
    location: 'London (On-site)',
    employmentType: 'Contract',
    createdAt: 'Oct 14, 2026',
  },
  {
    id: 'job-4',
    title: 'Senior Clinical Research Lead',
    dept: 'Clinical',
    status: 'Reviewing',
    candidatesCount: 2,
    salary: '£74,000',
    location: 'Manchester / Hybrid',
    employmentType: 'Permanent',
    createdAt: 'Oct 15, 2026',
  },
];

export default function EmployerDashboardPage() {
  const [candidates, setCandidates] = useState<CandidateShortlist[]>(INITIAL_CANDIDATES);
  const [postings, setPostings] = useState<JobPostingItem[]>(INITIAL_POSTINGS);
  const [activeTab, setActiveTab] = useState<'shortlists' | 'postings' | 'audit'>('shortlists');
  const [newRoleModal, setNewRoleModal] = useState(false);
  const [newJobModal, setNewJobModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateShortlist | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // New Job Form State
  const [jobTitle, setJobTitle] = useState('');
  const [jobDept, setJobDept] = useState('Engineering');
  const [jobSalary, setJobSalary] = useState('£80,000');
  const [jobLocation, setJobLocation] = useState('London (Hybrid)');
  const [jobType, setJobType] = useState('Permanent');

  // New Shortlist Request State
  const [requestTitle, setRequestTitle] = useState('');
  const [requestCompliance, setRequestCompliance] = useState('Enhanced DBS + RTW Share Code');

  const handleApproveCompliance = (id: string) => {
    setCandidates(candidates.map(c => c.id === id ? { ...c, rtwStatus: 'VERIFIED', dbsStatus: 'CLEAR' } : c));
    if (selectedCandidate && selectedCandidate.id === id) {
      setSelectedCandidate({ ...selectedCandidate, rtwStatus: 'VERIFIED', dbsStatus: 'CLEAR' });
    }
  };

  const handleCreateJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobTitle) return;
    const newJob: JobPostingItem = {
      id: `job-${Date.now()}`,
      title: jobTitle,
      dept: jobDept,
      status: 'Active',
      candidatesCount: 0,
      salary: jobSalary,
      location: jobLocation,
      employmentType: jobType,
      createdAt: 'Today',
    };
    setPostings([newJob, ...postings]);
    setJobTitle('');
    setNewJobModal(false);
  };

  const handleCreateShortlistRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestTitle) return;
    alert(`Shortlist request for "${requestTitle}" submitted successfully! Our vetting team will populate matches within 24 hours.`);
    setRequestTitle('');
    setNewRoleModal(false);
  };

  const handleDeleteJob = (id: string) => {
    setPostings(postings.filter(p => p.id !== id));
  };

  const filteredCandidates = candidates.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
            <Building2 className="w-4 h-4" />
            <span>Enterprise Employer Client Portal</span>
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Acme Financial UK — Dashboard</h1>
          <p className="text-slate-500 text-sm">Manage job openings, review pre-vetted Right to Work & DBS shortlists, and audit compliance trails.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setNewJobModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm transition flex items-center"
          >
            <Plus className="w-4 h-4 mr-2" /> Post New Job
          </button>
          <button
            onClick={() => setNewRoleModal(true)}
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm transition flex items-center"
          >
            <Users className="w-4 h-4 mr-2" /> Request Vetted Shortlist
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Openings</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2">{postings.length} Roles</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Briefcase className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-emerald-600 font-semibold mt-4 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1" /> 100% SLA compliance rate
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Vetted Shortlists</p>
              <h3 className="text-3xl font-black text-slate-900 mt-2">{candidates.length * 5} Candidates</h3>
            </div>
            <div className="p-3 bg-cyan-50 text-cyan-600 rounded-xl">
              <Users className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">Pre-screened & interview ready</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Right to Work Status</p>
              <h3 className="text-3xl font-black text-emerald-600 mt-2">100% Cleared</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-emerald-700 mt-4">Statutory excuse established</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Avg. Time-to-Hire</p>
              <h3 className="text-3xl font-black text-blue-600 mt-2">14 Days</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Clock className="w-6 h-6" />
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4">3x faster than UK industry average</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 space-x-8">
        <button
          onClick={() => setActiveTab('shortlists')}
          className={`pb-4 text-sm font-bold border-b-2 transition ${
            activeTab === 'shortlists' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Verified Candidate Shortlists ({candidates.length})
        </button>
        <button
          onClick={() => setActiveTab('postings')}
          className={`pb-4 text-sm font-bold border-b-2 transition ${
            activeTab === 'postings' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Active Job Postings ({postings.length})
        </button>
        <button
          onClick={() => setActiveTab('audit')}
          className={`pb-4 text-sm font-bold border-b-2 transition ${
            activeTab === 'audit' ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          Compliance Audit Trails & SLA
        </button>
      </div>

      {/* Tab Content: Shortlists */}
      {activeTab === 'shortlists' && (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Pre-Vetted Shortlist for Open Roles</h3>
              <p className="text-xs text-slate-500">All candidates have undergone UKVI Right to Work and Enhanced DBS background checks.</p>
            </div>
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, role or skill..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Candidate Name</th>
                  <th className="py-4 px-6">Applied Role</th>
                  <th className="py-4 px-6">Right to Work</th>
                  <th className="py-4 px-6">Enhanced DBS</th>
                  <th className="py-4 px-6">Match Score</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {filteredCandidates.map((cand) => (
                  <tr key={cand.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {cand.name}
                      <span className="block text-xs text-slate-400 font-normal">Applied {cand.appliedDate}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-medium">{cand.role}</td>
                    <td className="py-4 px-6">
                      {cand.rtwStatus === 'VERIFIED' ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <CheckCircle2 className="w-3 h-3 mr-1" /> Verified (UKVI)
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <Clock className="w-3 h-3 mr-1" /> Pending Share Code
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {cand.dbsStatus === 'CLEAR' ? (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <ShieldCheck className="w-3 h-3 mr-1" /> Clear / Enhanced
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                          <Clock className="w-3 h-3 mr-1" /> Pending Check
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 font-extrabold text-blue-600">{cand.matchScore}</td>
                    <td className="py-4 px-6 text-right space-x-2">
                      <button
                        onClick={() => setSelectedCandidate(cand)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-2 rounded-xl transition inline-flex items-center"
                      >
                        <Eye className="w-3.5 h-3.5 mr-1" /> Review Profile
                      </button>
                      <Link
                        href="/admin/compliance"
                        className="bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold px-3 py-2 rounded-xl transition inline-block"
                      >
                        Audit Vault
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab Content: Postings */}
      {activeTab === 'postings' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-slate-900">Active Job Postings & Requisitions</h3>
            <button
              onClick={() => setNewJobModal(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl text-xs transition flex items-center"
            >
              <Plus className="w-4 h-4 mr-1.5" /> Post New Job
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {postings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-blue-300 transition">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">{job.dept}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">{job.status}</span>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="text-slate-400 hover:text-red-600 transition p-1"
                      title="Delete Posting"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-slate-900">{job.title}</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <div>Salary: <strong className="text-slate-900">{job.salary}</strong></div>
                  <div>Type: <strong className="text-slate-900">{job.employmentType}</strong></div>
                  <div>Location: <strong className="text-slate-900">{job.location}</strong></div>
                  <div>Shortlisted: <strong className="text-blue-600">{job.candidatesCount} candidates</strong></div>
                </div>
                <div className="pt-2 flex justify-between items-center">
                  <span className="text-xs text-slate-400">Posted: {job.createdAt}</span>
                  <Link href="/jobs" className="text-xs font-bold text-blue-600 hover:underline flex items-center">
                    View Public Job Spec <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab Content: Audit Trails */}
      {activeTab === 'audit' && (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Statutory Excuse & Compliance Audit Log</h3>
              <p className="text-xs text-slate-500 mt-1">Immutable cryptographic records compliant with UK Home Office prevention of illegal working guidance.</p>
            </div>
            <button
              onClick={() => alert('Compliance audit bundle exported successfully as secure PDF & CSV archive.')}
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-xs transition flex items-center"
            >
              <Download className="w-4 h-4 mr-2" /> Export Audit Bundle (PDF / CSV)
            </button>
          </div>
          <div className="border border-slate-200 rounded-xl overflow-hidden">
            <div className="bg-slate-50 px-6 py-3 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
              Recent Verified Compliance Events
            </div>
            <div className="divide-y divide-slate-200 text-xs text-slate-700">
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">RTW Share Code Verified (UKVI API)</span> — Alexander Wright (Code: W88492019)
                  <p className="text-slate-400 mt-0.5">Statutory excuse established. Valid until: Oct 2027. IP: 192.168.1.45</p>
                </div>
                <span className="text-slate-500 font-medium">2 hours ago</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">Enhanced DBS Check Cleared</span> — Elena Rostova (Cert: 001928475620)
                  <p className="text-slate-400 mt-0.5">Disclosure Barring Service confirmed no disclosable history or police records.</p>
                </div>
                <span className="text-slate-500 font-medium">1 day ago</span>
              </div>
              <div className="px-6 py-4 flex justify-between items-center">
                <div>
                  <span className="font-bold text-slate-900">GDPR Data Processing Agreement Signed</span> — Acme Financial UK & Noss
                  <p className="text-slate-400 mt-0.5">Article 28 DPA signed electronically under corporate seal.</p>
                </div>
                <span className="text-slate-500 font-medium">3 days ago</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Candidate Review Modal */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Match Score: {selectedCandidate.matchScore}</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">{selectedCandidate.name}</h3>
                <p className="text-slate-600 font-medium text-sm">{selectedCandidate.role} • {selectedCandidate.experience} Exp</p>
              </div>
              <button
                onClick={() => setSelectedCandidate(null)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-1">Professional Bio</h4>
                <p className="text-slate-700 text-sm leading-relaxed bg-slate-50 p-4 rounded-2xl">{selectedCandidate.bio}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Core Skills & Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCandidate.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 font-bold text-xs rounded-lg border border-blue-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Right to Work (UKVI)</span>
                    {selectedCandidate.rtwStatus === 'VERIFIED' ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" /> Verified
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-amber-600 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" /> Pending
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">Share Code: <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono">{selectedCandidate.shareCode}</code></p>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Enhanced DBS Check</span>
                    {selectedCandidate.dbsStatus === 'CLEAR' ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center">
                        <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Clear
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-amber-600 flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" /> Pending
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">Cert #: <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono">{selectedCandidate.dbsCertNumber}</code></p>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedCandidate(null)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                Close
              </button>
              {selectedCandidate.rtwStatus !== 'VERIFIED' && (
                <button
                  onClick={() => handleApproveCompliance(selectedCandidate.id)}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow"
                >
                  Fast-Track Verify Compliance
                </button>
              )}
              <button
                onClick={() => { alert(`Interview invitation dispatched to ${selectedCandidate.name}!`); setSelectedCandidate(null); }}
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow"
              >
                Schedule Interview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Job Modal */}
      {newJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateJob} className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-slate-900">Post New Job Opening</h3>
              <button type="button" onClick={() => setNewJobModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Job Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Security Engineer"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Department</label>
                  <select
                    value={jobDept}
                    onChange={(e) => setJobDept(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="Legal & Risk">Legal & Risk</option>
                    <option value="Infrastructure">Infrastructure</option>
                    <option value="Clinical">Clinical</option>
                    <option value="Finance">Finance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Employment Type</label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="Permanent">Permanent</option>
                    <option value="Contract">Contract</option>
                    <option value="Temporary">Temporary</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Salary Range</label>
                  <input
                    type="text"
                    value={jobSalary}
                    onChange={(e) => setJobSalary(e.target.value)}
                    placeholder="e.g. £90,000 - £110,000"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Location</label>
                  <input
                    type="text"
                    value={jobLocation}
                    onChange={(e) => setJobLocation(e.target.value)}
                    placeholder="e.g. London (Hybrid)"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setNewJobModal(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow"
              >
                Publish Job Posting
              </button>
            </div>
          </form>
        </div>
      )}

      {/* New Shortlist Request Modal */}
      {newRoleModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <form onSubmit={handleCreateShortlistRequest} className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-200 pb-4">
              <h3 className="text-2xl font-bold text-slate-900">Request Verified Role Shortlist</h3>
              <button type="button" onClick={() => setNewRoleModal(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-slate-600 text-sm">
              Specify your hiring requirement. Noss compliance officers will run automated RTW and DBS checks to deliver pre-screened candidates.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Target Role / Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lead Security Architect"
                  value={requestTitle}
                  onChange={(e) => setRequestTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Mandatory Compliance Tier</label>
                <select
                  value={requestCompliance}
                  onChange={(e) => setRequestCompliance(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:ring-2 focus:ring-blue-600"
                >
                  <option>Enhanced DBS + RTW Share Code</option>
                  <option>Standard DBS + RTW</option>
                  <option>SC Clearance Eligible + RTW</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end space-x-3 pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setNewRoleModal(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
