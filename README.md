# NOSS Phase 1 — Marketing Website

Public marketing and lead-generation website for **NOSS** (`noss.co.uk`).

**Source of truth:** [`docs/NOSS_Phase_1_Final_Master_Document.docx`](docs/NOSS_Phase_1_Final_Master_Document.docx)  
Index: [`docs/MASTER.md`](docs/MASTER.md)

## Scope

Phase 1 only:

- Public responsive marketing pages
- Book a Demo / Contact lead capture
- Turso lead persistence + email notification to `info@trishulhub.in`
- Legal routes, SEO basics, security headers, accessibility baseline

**Out of scope:** portals, auth, document uploads, compliance APIs, analytics, CMS, CRM, payments.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · Turso · Vercel · GitHub Actions

## Setup

```bash
cp .env.example .env.local
# fill TURSO_* and SMTP_* or RESEND_API_KEY
npm install
npm run db:migrate
npm run dev
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm test` | Vitest unit tests |
| `npm run build` | Production build |
| `npm run db:migrate` | Ensure Turso leads schema |

## Open owner inputs

Do not invent: legal entity details (O-01), public phone/WhatsApp (O-02), DNS access (O-03), final legal/content approval (O-04), launch date confirmation (O-05), SMTP/Resend credentials for live email.

## Deployment notes

- Production must use a commercial-eligible Vercel plan (not Hobby).
- Staging should set `NEXT_PUBLIC_SITE_ENV=staging` (noindex).
- Production secrets belong in Vercel project settings only.
