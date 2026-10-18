# Noss — UK Recruitment & Compliance Agency Platform
## Master Architectural Blueprint & Specification

---

### 1. Executive Summary
**Noss** is a high-performance UK recruitment and compliance agency platform designed to bridge the gap between growing enterprises/industries and fully vetted, compliant jobseekers. The platform automates candidate acquisition, rigorous UK compliance checks (Right to Work, DBS, referencing), and employer placement pipelines with enterprise-grade security and speed.

---

### 2. User Roles & Personas
1. **Jobseeker (Candidate)**:
   - Registers profile, uploads CV and qualifications.
   - Browses and filters verified UK job listings (Permanent, Contract, Temporary).
   - Completes secure digital compliance onboarding (Right to Work share code, passport, DBS certificate).
   - Tracks application and vetting status in real-time.

2. **Employer (Client Company)**:
   - Posts job openings with custom compliance prerequisites and salary ranges.
   - Reviews pre-vetted candidate shortlists (only candidates who have passed Noss compliance).
   - Schedules interviews and tracks hiring pipeline.

3. **Compliance Officer / Administrator**:
   - Reviews candidate document submissions in a secure verification queue.
   - Approves or requests re-submission of Right to Work and background check documents.
   - Maintains GDPR audit logs and client billing records.

---

### 3. Core Platform Modules & Pages
- **Public Website**:
  - `Landing Page`: High-converting hero, trust metrics, client testimonials, and dual CTAs ("Hire Talent" vs. "Find Jobs").
  - `Job Board (`/jobs`)`: Advanced search & filter by industry, location, pay rate, and contract type.
  - `Employers (`/employers`)`: SLA-backed vetting guarantees, compliance assurance, and partnership onboarding.
  - `Candidate Hub (`/candidates`)`: Career guidance, compliance checklist, and quick registration.
- **Candidate Portal (`/candidate/dashboard`)**:
  - Application status tracker & profile settings.
  - Secure Compliance Vault (upload & view verification status).
- **Employer Portal (`/employer/dashboard`)**:
  - Job posting manager & applicant review queue.
- **Admin Compliance Center (`/admin/compliance`)**:
  - Secure vetting queue with tamper-proof audit trails.

---

### 4. Database Schema Blueprint (Prisma ORM)
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  role          UserRole  @default(JOBSEEKER)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  candidate     Candidate?
  employer      Employer?
  complianceLogs ComplianceLog[]
}

enum UserRole {
  JOBSEEKER
  EMPLOYER
  COMPLIANCE_OFFICER
  ADMIN
}

model Candidate {
  id            String    @id @default(cuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  phone         String?
  cvUrl         String?
  status        VettingStatus @default(PENDING)
  applications  Application[]
  documents     ComplianceDocument[]
}

enum VettingStatus {
  PENDING
  UNDER_REVIEW
  VERIFIED
  REJECTED
}

model ComplianceDocument {
  id            String    @id @default(cuid())
  candidateId   String
  candidate     Candidate @relation(fields: [candidateId], references: [id])
  docType       DocType
  fileUrl       String    @encrypted
  status        DocStatus @default(PENDING)
  verifiedAt    DateTime?
}

enum DocType {
  RIGHT_TO_WORK
  PASSPORT
  DBS_CERTIFICATE
  QUALIFICATION
}

enum DocStatus {
  PENDING
  APPROVED
  REJECTED
}

model Employer {
  id            String    @id @default(cuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  companyName   String
  industry      String
  jobs          JobPosting[]
}

model JobPosting {
  id            String    @id @default(cuid())
  employerId    String
  employer      Employer  @relation(fields: [employerId], references: [id])
  title         String
  description   String
  location      String
  salaryRange   String
  jobType       JobType   @default(PERMANENT)
  status        JobStatus @default(ACTIVE)
  applications  Application[]
  createdAt     DateTime  @default(now())
}

enum JobType {
  PERMANENT
  CONTRACT
  TEMPORARY
}

enum JobStatus {
  ACTIVE
  CLOSED
  DRAFT
}

model Application {
  id            String    @id @default(cuid())
  jobId         String
  job           JobPosting @relation(fields: [jobId], references: [id])
  candidateId   String
  candidate     Candidate @relation(fields: [candidateId], references: [id])
  status        AppStatus @default(APPLIED)
  appliedAt     DateTime  @default(now())
}

enum AppStatus {
  APPLIED
  SHORTLISTED
  INTERVIEWING
  PLACED
  REJECTED
}

model ComplianceLog {
  id            String    @id @default(cuid())
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  action        String
  details       String
  timestamp     DateTime  @default(now())
}
```

---

### 5. Security & GDPR Compliance
- **Data Minimization**: Automatically delete unselected candidate compliance documents after 90 days.
- **Signed URLs**: All sensitive document URLs in storage are signed with 15-minute expiration timers.
- **Zero Bloat (Ponytail Code)**: Clean, modular components with strict Zod validation on every API endpoint and Server Action.
