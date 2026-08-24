# Phase 1 acceptance & open blockers

## Quality checks run (local)

- `npm run lint` — pass
- `npm run typecheck` — pass
- `npm test` — pass (13 tests)
- `npm run build` — pass (28 routes)
- Lead API smoke: validation 422, successful Turso persist 201, duplicate suppressed, email status `notification_failed` / `email_not_configured` when SMTP/Resend not set (DB-first behaviour per master doc)

## Implemented routes

`/`, `/workforce-compliance`, `/business-compliance`, `/industries/recruitment-agencies`, `/industries/employers`, `/how-it-works`, `/about`, `/resources`, `/resources/[slug]`, `/contact`, `/privacy`, `/terms`, `/cookies`, `/accessibility`, `/complaints`, `/login`, `/sitemap.xml`, `/robots.txt`, `POST /api/leads`

## Open owner inputs (production blockers from master doc)

| ID | Item | Status |
|----|------|--------|
| O-01 | Legal entity details | Not supplied — legal pages state this explicitly |
| O-02 | Public phone / WhatsApp | Env placeholders only |
| O-03 | noss.co.uk DNS access | Not confirmed in this environment |
| O-04 | Owner approval of compliance/legal wording | Pending |
| O-05 | Launch date confirmation | Assumed 30 Aug 2026 |
| Email | SMTP or Resend credentials | Missing — leads store in Turso; notification marked failed for retry |
| Vercel plan | Commercial-eligible plan | Token sees project `noss`; plan tier not verified here |
| Gate 1–4 | Owner sign-off | Pending human approval |

## Explicitly not built (Phase 2/3)

Auth, portals, document uploads, compliance API automation, analytics, CMS, CRM, payments, public pricing.
