# NobleWave Marketing — website

This is the real source for **noblewavemarketing.ca**, live in production. Edit
here, commit, push to `main` on GitHub — Vercel auto-deploys from that push.
Treat pushes to `main` as publishing to a live public site: confirm with the
business owner before pushing, same as any other outward-facing change.

**Push access note (Aug 2026):** the machine's `gh`/git credentials were
authenticated as a different GitHub account (`SOHVAC`) with no write access to
`noblewavemarketing-png/noblewave-website`. If a push fails with 403, that's
why — the owner needs to fix the local git auth (`gh auth login` /
`gh auth switch` to the right account, or add the other account as a
collaborator). Don't try to work around it by asking for tokens.

## What the business actually is (as of Aug 2026, v2 — full-service pivot)

**This has changed twice.** Originally a narrow HVAC/Reno lead-gen shop,
GTA-only. Then briefly corrected to "Canada-wide, any industry." Then, same
day, expanded into a full-service AI marketing company and reverted service
area back to GTA. **The GTA/full-service version below is current — don't
re-narrow to lead-gen-only or re-expand to Canada-wide without the owner
explicitly saying so again; this has flip-flopped enough that it's worth
confirming before assuming either direction.**

- **Positioning**: "Everything your business needs to get found, build trust,
  and generate leads — powered by AI and managed for you." NobleWave is a
  full-service AI-powered digital marketing company, not just a lead-gen shop.
- **Service area**: Greater Toronto Area (Mississauga, Brampton, Toronto,
  Oakville, Vaughan, Milton). The business itself is based in Mississauga,
  Ontario.
- **Audience**: local businesses generally — not limited to one or two
  industries — with renovation, HVAC, contractors, and home-service companies
  as the initial/flagship vertical (that's where the proof and the existing
  lead-gen product live).
- **Eight services** (see `/services` for the full breakdown): AI SEO (managed,
  powered by NobleWave's internal "Uplift AI" system — present that as
  NobleWave's own technology, not a separate vendor/company), AI content
  creation & auto-publishing, local SEO & Google Business Profile management,
  AI search optimization (GEO/AEO — visibility in ChatGPT/Gemini/Perplexity/
  Google AI, distinct from traditional SEO), website creation, AI video
  generation, social media automation, and lead generation.
- **Real, current prices** — don't invent others: Website Creation **$999
  one-time**; Lead Generation **$400/month flat**, one partner per trade per
  city (not a fixed national/regional cap — exclusivity is local). Every other
  service is quoted after an assessment ("custom monthly plan" / "request a
  custom quote") — no fabricated deliverable counts, posting quantities, or
  numbers for anything else.
- Contact: noblewavemarketing@gmail.com · 647-673-5748 · Mississauga, ON.
- **No fake testimonials, client logos, reviews, or case-study stats** — the
  brief this was built from explicitly forbids it. If the owner wants social
  proof, it needs to be real.

See `src/pages/*.tsx` and `src/components/HomeSections.tsx` for the current
on-site copy — that's the source of truth, not any external doc.

## Site structure (multi-page, Aug 2026 rebuild)

This is a Vite **multi-page app** (MPA), not a single-page site and not a
client router — each route is a real `.html` entry + its own React root,
registered in `vite.config.ts` → `build.rollupOptions.input`. Vercel's
`cleanUrls: true` (in `vercel.json`) maps `/foo` → `foo.html` automatically.

Live pages: `/` (home, overview/hub), `/services` (all 8, one section each),
`/ai-seo`, `/websites`, `/lead-generation`, `/about`, `/pricing` (3 tiers:
AI SEO Growth, Website & Total Setup, Complete AI Growth System — plus the
standalone $400/mo lead-gen callout), `/contact`, `/privacy`, `/mississauga`
(city landing page — see below). Each has its own title/meta/canonical/schema.

**To add a new page**: create `<slug>.html` at the repo root (copy an
existing one's `<head>` pattern), `src/main-<slug>.tsx` (mounts the page
component), `src/pages/<Slug>Page.tsx` (wrap content in `<PageShell>` +
`<PageHeader>` from `src/components/`), then register it in
`vite.config.ts`'s `rollupOptions.input` and add it to `public/sitemap.xml`.

**Shared components**: `PageShell` (Header+Footer+Analytics chrome for every
non-home page), `PageHeader` (lightweight inner-page hero band — no 3D globe,
keeps inner pages fast), `Header`/`Hero` (`Hero.tsx` — Header takes an
optional `withAnnouncement` prop, home-page only), `Footer`. The homepage
(`App.tsx`) assembles its own chrome directly since the 3D-globe Hero needs
scroll effects the shared shell doesn't provide.

**City pages** (`/mississauga`, pattern in `CityIntro.tsx` + `src/pages/`):
still a real thing, additive to the GTA-wide site, not a replacement for it.
Give each city its own distinct paragraph — no find-replace duplicate content.

## Stack

- Vite + React 19 + TypeScript + Tailwind 4, `three`/`@react-three/fiber` for
  the homepage hero's 3D globe/orb visual (lazy-loaded, only pulled into the
  homepage bundle — other pages don't pay for it).
- **Contact form submits via Formspree** (`FORMSPREE_ENDPOINT` in
  `Contact.tsx`), not the `api/contact.js` Resend route — that route exists
  in the repo but the form was switched to Formspree upstream at some point.
  If you need to change where leads land, that's the endpoint to look at.
  (Older docs/commits in this repo may still say "Resend" — that's stale.)
- Analytics: Vercel Analytics/Speed Insights (zero-config; `_vercel/...`
  script 404s are expected in local dev/preview, they only resolve on a real
  Vercel deploy), plus optional GTM/GA4/Meta Pixel/Clarity gated behind env
  vars (`src/lib/analytics.ts`).

## Deploy pipeline

GitHub repo `noblewavemarketing-png/noblewave-website` → imported into Vercel
→ auto-deploys on push to `main`. Full checklist and required env vars are in
`DEPLOY.md` — do not duplicate that list here, it drifts. Never put secrets
(API keys, tokens) in source files; they're Vercel env vars only, and Claude
should never be asked to type them anywhere — the human sets those directly
in the Vercel dashboard.

**Not yet verified from this side** (needs the account owner to confirm in
the Vercel dashboard, Claude has no access there): whether the Formspree
endpoint and the analytics IDs in `DEPLOY.md` are actually receiving/live on
the production project.

## Known loose thread

`~/Downloads/NobleWave_AI_Receptionist_All_Industries_v2/` — a full flyer/PDF
collateral set (Salons, Medical, Dental, Vet, Auto Repair, Law, Home
Services, General) for an "AI Receptionist" product. Not currently
represented on the site. The Aug 2026 rebuild covers AI SEO, websites,
content, local SEO, AI video, social, and lead gen — a standalone AI
receptionist/voice-agent product was explicitly *not* part of that brief.
Confirm with the owner before adding it.

## Working conventions

- `git pull --ff-only` before starting each session — this repo may be
  edited from more than one place (something pushed a 384-line Contact.tsx
  change upstream mid-session once already).
- Run `npm run lint` (tsc typecheck) and `npm run build` after any change —
  the build is an MPA with ~10 entries now; a typo in one page's imports
  breaks the whole build, not just that page.
- Every `.html` entry needs its own unique `<title>`/meta description — don't
  copy one page's `<head>` into another without rewriting these.
