# Environment variable inventory (names only)

See `.env.example` for descriptions. Never commit real values.

## Public (NEXT_PUBLIC_*)

| Name | Purpose |
|------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site origin |
| `NEXT_PUBLIC_SITE_ENV` | `development` \| `staging` \| `production` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Public support email |
| `NEXT_PUBLIC_SUPPORT_PHONE` | Owner-approved phone (empty until supplied) |
| `NEXT_PUBLIC_SUPPORT_WHATSAPP` | Owner-approved WhatsApp (empty until supplied) |

## Server-only

| Name | Purpose |
|------|---------|
| `TURSO_DATABASE_URL` | Turso / libSQL URL |
| `TURSO_AUTH_TOKEN` | Turso auth token |
| `LEAD_NOTIFY_TO` | Notification recipient (default `info@trishulhub.in`) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_SECURE` / `SMTP_USER` / `SMTP_PASS` / `SMTP_FROM` | SMTP sending |
| `RESEND_API_KEY` | Optional email alternative if SMTP not set |
| `PRIVACY_NOTICE_VERSION` | Version stored with each lead |
| `LEAD_RATE_LIMIT_WINDOW_MS` | Rate-limit window |
| `LEAD_RATE_LIMIT_MAX` | Max submissions per window per key |

## Local tooling only (not required by Next.js)

| Name | Purpose |
|------|---------|
| `VERCEL_TOKEN` | Deploy tooling |
| `GITHUB_TOKEN` | Repo tooling |
