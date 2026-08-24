# NOSS Phase 1 — Documentation Index

**Source of truth:** `docs/NOSS_Phase_1_Final_Master_Document.docx` (text extract: `docs/NOSS_Phase_1_Final_Master_Document.txt`)

This repository implements **Phase 1 only**: the public marketing and lead-generation website for NOSS (noss.co.uk).

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js + TypeScript |
| Hosting | Vercel |
| Database | Turso (lead records only) |
| Email | SMTP / optional Resend → `info@trishulhub.in` |
| Analytics / CMS / CRM | Out of scope for Phase 1 |

## Open owner inputs (do not invent)

- **O-01** Legal entity details (name, company number, address)
- **O-02** Public support mobile / WhatsApp
- **O-03** DNS access for noss.co.uk
- **O-04** Final owner approval of compliance/legal wording
- **O-05** Confirm launch date assumption (30 August 2026)
- Email sending credentials (SMTP or Resend) — required for live notifications

## Local development

```bash
cp .env.example .env.local   # then fill Turso + email values
npm install
npm run db:migrate
npm run dev
```

## Quality checks

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Phase boundaries

Do **not** implement Phase 2/3 (portals, auth, document processing, compliance APIs, analytics, CMS, CRM).
