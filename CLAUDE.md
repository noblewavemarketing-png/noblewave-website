# NobleWave Marketing — website

This is the real source for **noblewavemarketing.ca**, live in production. Edit
here, commit, push to `main` on GitHub — Vercel auto-deploys from that push.
Treat pushes to `main` as publishing to a live public site: confirm with the
business owner before pushing, same as any other outward-facing change.

## What the business actually is (as of Aug 2026)

Not a broad "do everything" marketing agency. The live positioning is narrow
and deliberate:

- **Lead Generation — $400/mo flat**, exclusive leads (never shared), capped
  at 20 partner spots total, no contracts. Ads run by NobleWave, leads
  qualified before delivery, sent by text/email in real time.
- **Website Creation — $999 one-time**, conversion-focused, local SEO built
  in, pairs with lead gen.
- Niche: established **home renovation and HVAC companies in the GTA** only.
- Trust angle: "Built by a Contractor, Not an Agency" — the owner runs a home
  services company themselves.
- Contact: noblewavemarketing@gmail.com · 647-673-5748 · Mississauga, ON.

See `src/components/Pricing.tsx`, `Hero.tsx`, `Sections.tsx` for the current
on-site copy — that's the source of truth, not any external doc.

## Stack

- Vite + React 19 + TypeScript + Tailwind 4, `three`/`@react-three/fiber` for
  the hero's 3D globe/orb visual.
- `api/contact.js` — Vercel serverless function, sends the contact form via
  Resend. **This only works when Vercel builds from the git source** — a
  `dist/`-only deploy breaks the form (see `DEPLOY.md`).
- Analytics: Vercel Analytics/Speed Insights (zero-config), plus optional
  GTM/GA4/Meta Pixel/Clarity gated behind env vars (`src/lib/analytics.ts`).

## Deploy pipeline

GitHub repo `noblewavemarketing-png/noblewave-website` → imported into Vercel
→ auto-deploys on push to `main`. Full checklist and required env vars are in
`DEPLOY.md` — do not duplicate that list here, it drifts. Never put secrets
(API keys, tokens) in source files; they're Vercel env vars only, and Claude
should never be asked to type them anywhere — the human sets those directly
in the Vercel dashboard.

**Not yet verified from this side** (needs the account owner to confirm in
the Vercel dashboard, Claude has no access there): whether `RESEND_API_KEY`,
`CONTACT_TO_EMAIL`, and the analytics IDs in `DEPLOY.md` are actually set on
the live project. If the contact form on the live site silently fails, start
there.

## Known loose thread

`~/Downloads/NobleWave_AI_Receptionist_All_Industries_v2/` — a full flyer/PDF
collateral set (Salons, Medical, Dental, Vet, Auto Repair, Law, Home
Services, General) for an "AI Receptionist" product that is **not**
currently represented anywhere on this site. Either it's a parked idea, a
future product line, or collateral for a different offer entirely — confirm
with the owner before assuming it belongs here.

## Working conventions

- This repo is scoped to Home Reno/HVAC lead gen + website creation only.
  Broader "growth stack" ideas (SEO retainers, paid media management, AI
  creative, digital receptionist) are *not* live products yet — don't add
  them to the site copy without the owner explicitly signing off on scope
  and pricing first.
- `git pull --ff-only` before starting each session — this repo may be
  edited from more than one place.
