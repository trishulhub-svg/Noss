export const meta = {
  name: 'noss-enterprise-build',
  description: 'Scaled 12+ Agent parallel team building Noss UK recruitment & compliance agency platform',
  phases: [
    { title: 'Strategy & Instruction Tracking' },
    { title: 'Database & Compliance Backend' },
    { title: 'Frontend UI & Job Board' },
    { title: 'Employer & Candidate Portals' },
    { title: 'Security Audit & Performance QA' }
  ],
}

phase('Strategy & Instruction Tracking')
const [bossPm, instructionMgr] = await parallel([
  () => agent('Boss & PM: Coordinate sprint goals, backlog items, and acceptance criteria for Noss.', {label: 'boss-pm'}),
  () => agent('Instruction Manager: Track build progress, remaining tasks, and technical debt log.', {label: 'instruction-manager'})
])
log('Strategy and instruction tracking synchronized.')

phase('Database & Compliance Backend')
const [dbEngine, complianceVault] = await parallel([
  () => agent('Database Architect: Build Prisma schema for Users, Candidates, Employers, JobPostings, Applications.', {label: 'db-architect'}),
  () => agent('Compliance Engineer: Implement encrypted document storage and UK Right to Work / DBS verification logic.', {label: 'compliance-engineer'})
])
log('Backend database and compliance engine structured.')

phase('Frontend UI & Job Board')
const [landingPage, jobBoard] = await parallel([
  () => agent('Frontend UI Expert: Build high-converting landing page for Noss with enterprise design system.', {label: 'ui-expert'}),
  () => agent('Job Board Expert: Build searchable and filterable job listings page (/jobs) with instant filtering.', {label: 'job-board-expert'})
])
log('Public website and job board built.')

phase('Employer & Candidate Portals')
const [employerPortal, candidatePortal] = await parallel([
  () => agent('Employer Dashboard Expert: Build B2B client portal for posting jobs and reviewing vetted shortlists.', {label: 'employer-portal'}),
  () => agent('Candidate Portal Expert: Build jobseeker profile management and compliance document upload center.', {label: 'candidate-portal'})
])
log('Employer and candidate portals built.')

phase('Security Audit & Performance QA')
const [securityAuditor, qaEngineer] = await parallel([
  () => agent('Security Auditor: Inspect all Server Actions and API routes for Zod validation, SQL injection protection, and OWASP hardening.', {label: 'security-auditor'}),
  () => agent('QA & Performance Engineer: Optimize Core Web Vitals, bundle size, and edge caching for Noss.', {label: 'qa-engineer'})
])
log('Security audit and performance QA completed.')

return { bossPm, instructionMgr, dbEngine, complianceVault, landingPage, jobBoard, employerPortal, candidatePortal, securityAuditor, qaEngineer }
