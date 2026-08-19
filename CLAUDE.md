# NobleWave Marketing — website

This is the real source for **noblewavemarketing.ca**, live in production. Edit
here, commit, push to `main` on GitHub — Vercel auto-deploys from that push.
Treat pushes to `main` as publishing to a live public site: confirm with the
business owner before pushing, same as any other outward-facing change.

**Push access note (Aug 2026, resolved):** this machine also has a `SOHVAC`
GitHub account (used for an unrelated client repo). Both accounts are now
logged in via `gh`, and this repo's `origin` remote has the username pinned
directly in the URL (`https://noblewavemarketing-png@github.com/...`), so
pushes always authenticate as the right account regardless of which one is
"active" in `gh auth switch` — verified by switching the active account to
`SOHVAC` and confirming this repo still authenticated correctly. If a push
ever 403s again, check `git remote get-url origin` still has the username
pinned before assuming it's an auth problem.

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
- **Nine services** (see `/services` for the full breakdown): AI SEO, AI
  content creation & auto-publishing, local SEO & Google Business Profile
  management, AI search optimization (GEO/AEO — visibility in ChatGPT/Gemini/
  Perplexity/Google AI, distinct from traditional SEO), website creation,
  **technical infrastructure & integrations** (forms wired to CRM, tracking
  setup, domain/email config — added Aug 2026, don't drop it, and don't let
  "AI SEO" dominate the homepage/meta copy at the expense of content
  creation, website design, and infrastructure being equally visible), AI
  video generation, social media automation, and lead generation.
- **No public pricing, anywhere, as of Aug 2026** — this was explicitly
  removed by the owner. Every service (including Website Creation and Lead
  Generation, which briefly had real published prices — $999 one-time and
  $400/month — do NOT bring those back) is "request a custom quote" /
  "flat monthly rate" with no dollar figure shown. This applies to visible
  copy, `<title>`/meta descriptions, and structured-data `Offer.price`
  fields alike — check all three when touching pricing-adjacent copy.
- **Never name the underlying tooling/tech stack to customers.** The owner
  was explicit: no "Uplift AI" or any other internal/vendor tool name in
  customer-facing copy (site copy, meta, schema). Describe capability and
  outcome only — "NobleWave manages your SEO strategy end to end," not
  "powered by X." This applies to anything added later too, not just SEO.
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

- Vite + React 19 + TypeScript + Tailwind 4. The hero's background glow is
  pure CSS (`AmbientGlow.tsx` + `.ambient-orb`/`.ambient-stars` in
  `index.css`) — it used to be a `three`/`@react-three/fiber` WebGL globe,
  which was the #1 cause of a slow first load (~900KB/~245KB gzipped, on top
  of everything else). Removed Aug 2026. **Do not reintroduce three.js or
  any other heavy animation library for decorative/background visuals** —
  if a future ask wants something fancier here, push back and reach for
  CSS/SVG first; this is a marketing site where load speed is the product.
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

## AI Strategy Session (added Aug 2026)

A standalone, separately-purchasable product — a paid one-on-one AI
consulting session, not part of the managed-service stack. Deliberately
**not** folded into the `services` array in `ServicesPage.tsx` (that array
is fully-managed monthly services; this is a one-time session) — it has its
own distinct panel there instead, plus its own page, its own homepage
spotlight, and its own footer link. If you're tempted to merge it into the
services loop for "consistency," don't — that would misrepresent it exactly
the way the brief this was built from explicitly said not to.

- **Page**: `/ai-strategy-session` (`src/pages/AiStrategySessionPage.tsx`).
  Session data (name/duration/tagline/`price: null`) lives at the top of
  that file — `price` is intentionally unset; see the pricing note below.
- **Intake form**: `src/components/AiStrategyIntakeForm.tsx` — deliberately
  a separate component from `Contact.tsx`'s `ContactForm`, not a reuse,
  because the fields are genuinely different (challenge/outcome/AI
  experience/consent vs. general lead fields). Same Formspree endpoint as
  the general contact form (only one configured) — distinguished in the
  inbox by `_subject` and a `product` field.
- **No calendar/booking or payment integration** — none exists anywhere on
  this site. "Book a Session" submits the intake form; the owner follows up
  by email to confirm scheduling and payment, same as every other product
  here. Don't add a fake Calendly link or checkout without the owner
  providing a real one.
- **No public pricing shown** — consistent with the site-wide no-pricing
  rule above. Each session card shows "Request a quote" instead of a
  number. The moment real pricing is approved, fill in `SESSION_OPTIONS[].price`
  in `AiStrategySessionPage.tsx` and add a rendering branch for when it's
  set (currently the JSX only handles the null case).

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
- **This is a true multi-page site (Vite MPA), not an SPA.** Every nav-link
  click is a full hard page reload — no client router, no persisted React
  state across pages. That makes above-the-fold entrance animations far
  more costly here than on a typical SPA: `initial={{opacity:0}}` (or an
  SVG `pathLength` draw-in) on anything visible without scrolling — the
  Header logo, `Hero`, `PageHeader`, `CityIntro` — replays in full on
  *every single navigation*, not just once. This was a real, reported bug
  (Aug 2026: "moving from page to page is slow") — it wasn't network speed,
  it was the UI hiding already-loaded content behind a fade/draw for the
  first 0.5–1.5s of every page. Fixed by removing mount-time entrance
  animation from all above-the-fold content; only `whileInView`
  (scroll-triggered, below-the-fold) animation remains. **Don't add
  `initial`/`animate` entrance fades back to anything in the first
  viewport** — scroll-linked (`useScroll`/`useTransform` via the `style`
  prop) is fine, mount-time fade-in on first-viewport content is not.
- **Standard section vertical rhythm is `py-24 md:py-28`.** Before Aug 2026
  this was an inconsistent mix (`py-8`, `py-20`, `py-24`, `py-32` all used
  for what should've been the same visual gap) — reported as "spacing is
  inconsistent between pages." Use `py-24 md:py-28` for any new top-level
  `<section>`, and keep `PageHeader`'s own bottom padding small (`pb-4
  md:pb-8`) since it's always immediately followed by a section that
  supplies its own top padding — don't let both sides pad the same gap.
  (Homepage-only sections in `HomeSections.tsx` — `Problems`,
  `ServicesOverview`, `HowItWorks`, spotlights, `WhyNobleWave`, `FinalCTA`
  — are the one exception, left at their own `py-24`–`py-32` mix; the
  homepage's rhythm wasn't part of the reported problem, don't change it
  without a reason.)
