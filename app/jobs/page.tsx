'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Briefcase,
  PoundSterling,
  ShieldCheck,
  CheckCircle2,
  Building2,
  SlidersHorizontal,
  X,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  salary: string;
  salaryNum: number;
  type: 'Permanent' | 'Contract' | 'Temporary';
  industry: string;
  department: string;
  description: string;
  complianceReq: string[];
  postedDate: string;
  postedTimestamp: number;
}

const INITIAL_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Senior Full Stack Engineer (Next.js / TypeScript)',
    company: 'FinTech London Ltd',
    location: 'London',
    locationType: 'Hybrid',
    salary: '£85,000 - £105,000 / yr',
    salaryNum: 105000,
    type: 'Permanent',
    industry: 'Financial Services',
    department: 'Engineering',
    description: 'Seeking a senior full stack engineer to scale our high-throughput payment infrastructure and secure client portals using Next.js and Tailwind CSS.',
    complianceReq: ['Right to Work Verified', 'Basic DBS Check', '5-Year Reference Check'],
    postedDate: '2 hours ago',
    postedTimestamp: Date.now() - 2 * 60 * 60 * 1000,
  },
  {
    id: 'job-2',
    title: 'Compliance & GDPR Officer',
    company: 'HealthTech UK Solutions',
    location: 'Manchester',
    locationType: 'Remote',
    salary: '£55,000 - £68,000 / yr',
    salaryNum: 68000,
    type: 'Permanent',
    industry: 'Healthcare',
    department: 'Legal & Compliance',
    description: 'Manage NHS data governance, DPIAs, GDPR requests, and ISO 27001 compliance standards across clinical software products.',
    complianceReq: ['Enhanced DBS Check', 'Data Protection Officer Certification', 'Right to Work Verified'],
    postedDate: '1 day ago',
    postedTimestamp: Date.now() - 24 * 60 * 60 * 1000,
  },
  {
    id: 'job-3',
    title: 'DevOps & Cloud Security Architect',
    company: 'Global Cloud Systems',
    location: 'Edinburgh',
    locationType: 'Hybrid',
    salary: '£90,000 - £120,000 / yr',
    salaryNum: 120000,
    type: 'Contract',
    industry: 'Enterprise SaaS',
    department: 'Infrastructure',
    description: 'Lead AWS security hardening, IAM policies, automated compliance pipelines, and SOC2 Type II audit readiness.',
    complianceReq: ['SC Clearance Eligible', 'Right to Work Verified', 'AWS Certified Security'],
    postedDate: '3 days ago',
    postedTimestamp: Date.now() - 3 * 24 * 60 * 60 * 1000,
  },
  {
    id: 'job-4',
    title: 'Senior Clinical Research Nurse',
    company: 'London BioCore Trials',
    location: 'London',
    locationType: 'On-site',
    salary: '£48,000 - £56,000 / yr',
    salaryNum: 56000,
    type: 'Permanent',
    industry: 'Life Sciences',
    department: 'Clinical Operations',
    description: 'Coordinate Phase II clinical trials, patient onboarding, regulatory documentation, and safety reporting in central London.',
    complianceReq: ['NMC Registration', 'Enhanced DBS with Barred Lists', 'Right to Work Verified'],
    postedDate: '4 hours ago',
    postedTimestamp: Date.now() - 4 * 60 * 60 * 1000,
  },
  {
    id: 'job-5',
    title: 'Lead Cyber Threat Intelligence Analyst',
    company: 'SecureNet UK Defense',
    location: 'Bristol',
    locationType: 'Hybrid',
    salary: '£75,000 - £95,000 / yr',
    salaryNum: 95000,
    type: 'Permanent',
    industry: 'Cybersecurity',
    department: 'Security Operations',
    description: 'Monitor advanced persistent threats, lead incident response playbooks, and ensure NCSC compliance frameworks for critical national infrastructure.',
    complianceReq: ['Developed Vetting (DV) Clearance', 'Right to Work Verified', 'CISSP / CREST Certified'],
    postedDate: '5 hours ago',
    postedTimestamp: Date.now() - 5 * 60 * 60 * 1000,
  },
  {
    id: 'job-6',
    title: 'Principal Civil Infrastructure Engineer',
    company: 'MetroBuild Engineering UK',
    location: 'Birmingham',
    locationType: 'On-site',
    salary: '£80,000 - £100,000 / yr',
    salaryNum: 100000,
    type: 'Permanent',
    industry: 'Engineering',
    department: 'Civil & Transport',
    description: 'Direct major UK rail and urban transit renewal programs with rigorous environmental compliance and structural health audits.',
    complianceReq: ['Chartered Engineer (CEng MICE)', 'Right to Work Verified', 'Standard DBS Check'],
    postedDate: '2 days ago',
    postedTimestamp: Date.now() - 48 * 60 * 60 * 1000,
  },
];

export default function JobBoardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedLocationType, setSelectedLocationType] = useState('All');
  const [sortBy, setSortBy] = useState<'newest' | 'salary-high' | 'alphabetical'>('newest');

  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([]);
  const [selectedJobForModal, setSelectedJobForModal] = useState<Job | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);

  // Filter and sort jobs instantly
  const filteredJobs = useMemo(() => {
    return INITIAL_JOBS.filter((job) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.company.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.description.toLowerCase().includes(q) ||
        job.complianceReq.some(req => req.toLowerCase().includes(q));

      const matchesType = selectedType === 'All' || job.type === selectedType;
      const matchesIndustry = selectedIndustry === 'All' || job.industry === selectedIndustry;
      const matchesLocationType = selectedLocationType === 'All' || job.locationType === selectedLocationType;

      return matchesSearch && matchesType && matchesIndustry && matchesLocationType;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.postedTimestamp - a.postedTimestamp;
      if (sortBy === 'salary-high') return b.salaryNum - a.salaryNum;
      if (sortBy === 'alphabetical') return a.title.localeCompare(b.title);
      return 0;
    });
  }, [searchQuery, selectedType, selectedIndustry, selectedLocationType, sortBy]);

  const handleApply = (jobId: string) => {
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setApplySuccess(true);
      if (!appliedJobIds.includes(jobId)) {
        setAppliedJobIds(prev => [...prev, jobId]);
      }
      setTimeout(() => {
        setApplySuccess(false);
        setSelectedJobForModal(null);
      }, 1500);
    }, 800);
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedType('All');
    setSelectedIndustry('All');
    setSelectedLocationType('All');
    setSortBy('newest');
  };

  const activeFiltersCount = (selectedType !== 'All' ? 1 : 0) +
                             (selectedIndustry !== 'All' ? 1 : 0) +
                             (selectedLocationType !== 'All' ? 1 : 0) +
                             (searchQuery ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Verified UK Job Board & Compliance Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Discover Pre-Vetted Opportunities
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Browse verified UK positions with transparent salary bands and automated compliance onboarding. Instant search and filter.
        </p>
      </div>

      {/* Advanced Search & Filter Bar */}
      <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl shadow-xl backdrop-blur-md mb-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Search Input */}
          <div className="relative md:col-span-5">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title, company, skill, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Contract Type Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full py-3 px-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              <option value="All">All Types</option>
              <option value="Permanent">Permanent</option>
              <option value="Contract">Contract</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

          {/* Industry Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full py-3 px-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              <option value="All">All Industries</option>
              <option value="Financial Services">Financial Services</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Enterprise SaaS">Enterprise SaaS</option>
              <option value="Life Sciences">Life Sciences</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full py-3 px-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="salary-high">Highest Salary</option>
              <option value="alphabetical">Job Title A-Z</option>
            </select>
          </div>
        </div>

        {/* Secondary Filters Bar: Location Type & Active Filter Tags */}
        <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-800/80 gap-3 text-sm">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" /> Work Style:
            </span>
            {['All', 'Remote', 'Hybrid', 'On-site'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedLocationType(type)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition ${
                  selectedLocationType === type
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-medium">
              Showing <strong className="text-white">{filteredJobs.length}</strong> verified positions
            </span>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Job Listings Feed */}
      <div className="space-y-6">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white">No matching job listings found</h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              We couldn't find any roles matching your current search or filter criteria. Try adjusting your search keywords or clearing filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-500 transition shadow-lg shadow-blue-500/20"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => {
            const isApplied = appliedJobIds.includes(job.id);
            return (
              <div
                key={job.id}
                className="bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8 rounded-3xl shadow-lg hover:border-blue-500/40 transition-all flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 group"
              >
                <div className="space-y-3.5 flex-grow">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                      {job.industry}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700/60">
                      {job.type}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                      {job.locationType}
                    </span>
                    <span className="text-xs text-slate-500 font-medium ml-1">Posted {job.postedDate}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-slate-400" />{job.company}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-400" />{job.location}</span>
                    <span className="flex items-center gap-1.5 font-semibold text-cyan-400"><PoundSterling className="w-4 h-4 text-cyan-400" />{job.salary}</span>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed max-w-3xl line-clamp-2">
                    {job.description}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" /> Compliance Requirements:
                    </span>
                    {job.complianceReq.map((req, i) => (
                      <span key={i} className="text-xs bg-emerald-500/10 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/20 font-medium">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-auto flex flex-col shrink-0 gap-3">
                  <button
                    onClick={() => setSelectedJobForModal(job)}
                    className="w-full lg:w-auto px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-700 hover:text-white transition shadow-sm text-center"
                  >
                    View Details & Requirements
                  </button>

                  {isApplied ? (
                    <div className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Application Submitted
                    </div>
                  ) : (
                    <button
                      onClick={() => handleApply(job.id)}
                      className="w-full lg:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition text-center"
                    >
                      Apply with Noss Profile
                    </button>
                  )}

                  <Link
                    href="/candidates"
                    className="text-center text-xs text-slate-500 hover:text-slate-400 font-medium flex items-center justify-center gap-1"
                  >
                    Check RTW & DBS readiness <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Job Details & Application Modal */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJobForModal(null)}
              className="absolute right-6 top-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
                  {selectedJobForModal.industry}
                </span>
                <span className="text-xs font-bold px-3 py-1 bg-slate-800 text-slate-300 rounded-full">
                  {selectedJobForModal.type}
                </span>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full">
                  {selectedJobForModal.locationType}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedJobForModal.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 font-medium pt-1">
                <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-blue-400" />{selectedJobForModal.company}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-red-400" />{selectedJobForModal.location}</span>
                <span className="flex items-center gap-1.5 font-bold text-cyan-400"><PoundSterling className="w-4 h-4 text-cyan-400" />{selectedJobForModal.salary}</span>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Role Description</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedJobForModal.description}
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-800">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Mandatory Compliance & Vetting Checklist
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {selectedJobForModal.complianceReq.map((req, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-400 italic">
                Noss provides secure digital verification share code validation and DBS certificate processing before final placement confirmation.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setSelectedJobForModal(null)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm hover:bg-slate-700 transition"
              >
                Close
              </button>
              {appliedJobIds.includes(selectedJobForModal.id) ? (
                <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Application Submitted
                </div>
              ) : (
                <button
                  disabled={isApplying || applySuccess}
                  onClick={() => handleApply(selectedJobForModal.id)}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition disabled:opacity-50 text-center"
                >
                  {isApplying ? 'Submitting Application...' : applySuccess ? 'Application Successful!' : 'Apply Now with Noss Profile'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
