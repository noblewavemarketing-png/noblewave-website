# NobleWave — website

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

## What the business actually is (as of Aug 2026, v3 — AI-first rebrand)

**This has changed three times.** Originally a narrow HVAC/Reno lead-gen
shop, GTA-only → briefly "Canada-wide, any industry" → a full-service
AI-*marketing* company, GTA-only → now (current) an **AI consultancy and
implementation partner**, marketing demoted to one of several applications
of AI rather than the core identity. **Don't re-narrow back to marketing-
agency framing, and don't reintroduce "NobleWave Marketing" as the brand
name, without the owner explicitly saying so again** — this has flip-flopped
enough times that it's worth confirming before assuming any direction.

- **Brand name is "NobleWave"**, not "NobleWave Marketing" — dropped
  deliberately in the Aug 2026 rebrand (og:site_name, JSON-LD `name` fields,
  page titles, footer copyright all updated). The domain
  (`noblewavemarketing.ca`) and the contact email
  (`noblewavemarketing@gmail.com`) keep the word "marketing" and were
  intentionally **not** changed — only the brand-facing text was.
- **Positioning**: "AI Solutions & Consultancy" — "We help businesses
  understand, adopt, and implement AI to automate work, improve operations,
  strengthen marketing, and grow more efficiently." Marketing is now an
  *application* of AI (one of five service categories), not what the company
  is. If you catch homepage/meta copy leading with "AI SEO" or a marketing
  frame again, that's a regression — rebalance it.
- **Service area unchanged**: Greater Toronto Area, based in Mississauga, ON.
- **Five core services** (see `/services`, and three have their own
  dedicated pages): **AI Consultancy & Strategy** (`/ai-consultancy`) — AI
  readiness assessments, strategy, opportunity ID, implementation roadmaps;
  **AI Automation** (`/ai-automation`) — workflow/process/repetitive-task
  automation, CRM & lead automation; **AI Agents** (`/ai-agents`) — customer
  service, sales, lead-qualification, booking, and internal AI agents;
  **AI-Powered Marketing** (`/services#ai-marketing`, no dedicated page) —
  absorbs the old AI SEO / content / local SEO / video / social / lead-gen
  services as facets of this one category now; **Custom AI Solutions**
  (`/services#custom-ai-solutions`, no dedicated page) — absorbs the old
  "Websites" and "Technical Infrastructure" services.
- **AI Strategy Session is the flagship bookable product** — the primary
  nav CTA ("Book an AI Consultation") and most CTAs site-wide now link
  straight to `/ai-strategy-session`, not `/contact`. See its own section
  below — unchanged by this rebrand, it already fit perfectly.
- **No public pricing, anywhere** — unchanged rule from before, still in
  force. Every service is "request a custom quote"; no dollar figures in
  visible copy, `<title>`/meta, or `Offer.price` schema fields.
- **Never name the underlying tooling/tech stack to customers** — unchanged
  rule from before, still in force ("NobleWave manages this for you," not
  "powered by X").
- Contact: noblewavemarketing@gmail.com · 647-673-5748 · Mississauga, ON.
- **No fake testimonials, client logos, reviews, awards, certifications, or
  case-study stats** — explicitly forbidden by the brief this rebrand was
  built from. If the owner wants social proof, it needs to be real.

See `src/pages/*.tsx` and `src/components/HomeSections.tsx` for the current
on-site copy — that's the source of truth, not any external doc.

## Legacy pages — redirected, not deleted (Aug 2026)

`/ai-seo`, `/websites`, `/lead-generation`, and `/mississauga` represented
the pre-rebrand marketing-agency/lead-gen identity and actively contradicted
the new AI-consultancy positioning. Rather than delete them, they're
**301-redirected** (see `redirects` in `vercel.json`) to their closest
new-identity equivalent — preserves any inbound links/SEO equity without
ever showing contradictory content to a visitor or crawler:
- `/ai-seo` → `/services#ai-marketing`
- `/websites` → `/services#custom-ai-solutions`
- `/lead-generation` → `/services#ai-marketing`
- `/mississauga` → `/`

The source files, page components, and their `vite.config.ts` build entries
are all still intact and still build (content preserved per the owner's
instruction to keep useful existing content where possible) — they're just
not linked from anywhere live, not in `sitemap.xml`, and unreachable in
production because the redirect fires first. **If you're asked to fully
retire vs. fully revive one of these, that's an explicit decision for the
owner — don't unilaterally delete the files or unilaterally remove a
redirect.**

## Site structure (multi-page, Aug 2026)

This is a Vite **multi-page app** (MPA), not a single-page site and not a
client router — each route is a real `.html` entry + its own React root,
registered in `vite.config.ts` → `build.rollupOptions.input`. Vercel's
`cleanUrls: true` (in `vercel.json`) maps `/foo` → `foo.html` automatically.

Live pages: `/` (home), `/services` (hub — 5 categories, one section each),
`/ai-consultancy`, `/ai-automation`, `/ai-agents`, `/ai-strategy-session`,
`/pricing`, `/about`, `/contact`, `/privacy`. Each has its own
title/meta/canonical/schema. (`/ai-seo`, `/websites`, `/lead-generation`,
`/mississauga` still build too, per the section above, but are redirected
away in production.)

**To add a new page**: create `<slug>.html` at the repo root (copy an
existing one's `<head>` pattern), `src/main-<slug>.tsx` (mounts the page
component), `src/pages/<Slug>Page.tsx` (wrap content in `<PageShell>` +
`<PageHeader>` from `src/components/`), then register it in
`vite.config.ts`'s `rollupOptions.input` and add it to `public/sitemap.xml`.

**Shared components**: `PageShell` (Header+Footer+Analytics chrome for every
non-home page), `PageHeader` (lightweight inner-page hero band — no 3D globe,
keeps inner pages fast), `Header`/`Hero` (`Hero.tsx` — Header takes an
optional `withAnnouncement` prop, home-page only; nav links live in
`navLinks` inside `Header`), `Footer`. The homepage (`App.tsx`) assembles
its own chrome directly since the Hero needs scroll effects the shared shell
doesn't provide.

**City pages** (`/mississauga`, pattern in `CityIntro.tsx` + `src/pages/`):
currently redirected away (see Legacy pages above) — the city-page *pattern*
is still there in the code if a future geo-specific push wants it, but
nothing links to it right now.

## Stack

- Vite + React 19 + TypeScript + Tailwind 4. The hero's background glow is
  pure CSS (`AmbientGlow.tsx` + `.ambient-orb`/`.ambient-stars` in
  `index.css`) — it used to be a `three`/`@react-three/fiber` WebGL globe,
  which was the #1 cause of a slow first load (~900KB/~245KB gzipped, on top
  of everything else). Removed Aug 2026. **Do not reintroduce three.js or
  any other heavy animation library for decorative/background visuals** —
  if a future ask wants something fancier here, push back and reach for
  CSS/SVG first; this is a site where load speed is the product.
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

## AI Strategy Session (added Aug 2026, unaffected by the rebrand)

A standalone, separately-purchasable product — a paid one-on-one AI
consulting session, not part of the managed-service stack. It already fit
the AI-consultancy identity perfectly, so the rebrand only changed how
prominently it's linked (now the primary nav CTA and most site-wide CTAs go
straight here) — not its own content. Deliberately **not** folded into the
`services` array in `ServicesPage.tsx` (that array is fully-managed ongoing
services; this is a one-time session) — it has its own distinct panel there
instead, plus its own page, its own homepage spotlight, and its own footer
link. Don't merge it into the services loop for "consistency."

- **Page**: `/ai-strategy-session` (`src/pages/AiStrategySessionPage.tsx`).
  Session data (name/duration/tagline/`price: null`) lives at the top of
  that file — `price` is intentionally unset; see the pricing note above.
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
represented on the site. Given the Aug 2026 AI-consultancy rebrand, this is
now arguably closer to fitting (an AI Receptionist would naturally be an
"AI Agent") than it was before — but it still wasn't part of any brief given
so far. Confirm with the owner before adding it; don't assume the rebrand
implicitly authorizes it.

## Working conventions

- `git pull --ff-only` before starting each session — this repo may be
  edited from more than one place.
- Run `npm run lint` (tsc typecheck) and `npm run build` after any change —
  the build is an MPA with 13+ entries now; a typo in one page's imports
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
- **Nav uses `whitespace-nowrap` + a tighter `gap-5 xl:gap-7`** (not `gap-8`)
  because "AI Consultancy" / "AI Automation" / "AI Agents" are two-word nav
  items that were wrapping to two lines at `gap-8`. If more/longer nav items
  get added later, re-check nav fit at 1440px and above before assuming it's
  fine.
