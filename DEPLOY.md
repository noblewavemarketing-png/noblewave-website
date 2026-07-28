# NobleWave — Deployment & Setup Guide

## 1. Deploy to Vercel (IMPORTANT: deploy the SOURCE, not just dist/)

The contact form runs on a serverless function (`api/contact.js`). Vercel only creates
that function when it builds the **project source** — a drag-and-drop of the `dist`
folder alone will give you a site with a broken form.

**Recommended — Git (auto-deploys on every change):**
1. Push this folder to a GitHub repo.
2. vercel.com/new → Import the repo → Framework preset auto-detects Vite → Deploy.

**Alternative — CLI:**
```
npm i -g vercel
vercel          # from this folder; accept defaults
vercel --prod
```

## 2. Environment variables (Vercel → Project → Settings → Environment Variables)

Server-side (required for the contact form to deliver):

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from resend.com (free tier: 100 emails/day) |
| `CONTACT_TO_EMAIL` | `noblewavemarketing@gmail.com` (where leads arrive) |
| `CONTACT_FROM_EMAIL` | `onboarding@resend.dev` for testing; switch to `leads@noblewavemarketing.ca` after verifying the domain in Resend → Domains |

Client-side analytics (each optional — its tracker only loads if set; **redeploy after adding**, since VITE_ vars are baked in at build time):

| Variable | Example |
|---|---|
| `VITE_GTM_ID` | `GTM-XXXXXXX` |
| `VITE_GA4_ID` | `G-XXXXXXXXXX` (skipped automatically if GTM is set — add GA4 inside GTM instead) |
| `VITE_META_PIXEL_ID` | `1234567890` |
| `VITE_CLARITY_ID` | `abcdefghij` |

Vercel Analytics & Speed Insights need no IDs — enable them with one click in the
Vercel dashboard (Project → Analytics / Speed Insights).

## 3. Resend setup (contact form email delivery) — 5 minutes
1. Sign up at resend.com (free).
2. API Keys → Create → copy into `RESEND_API_KEY`.
3. (Later, for professional sender address) Domains → Add `noblewavemarketing.ca` →
   add the DNS records it shows → set `CONTACT_FROM_EMAIL=leads@noblewavemarketing.ca`.
4. Submit the live form once and confirm the email arrives.

## 4. Domain
Vercel → Project → Settings → Domains → add `noblewavemarketing.ca` and `www.noblewavemarketing.ca`
→ update DNS at your registrar as shown (A record + CNAME). HTTPS is automatic.

## 5. Analytics account setup
- **GA4**: analytics.google.com → Admin → Create Property → Web stream for
  `https://noblewavemarketing.ca` → copy the `G-` ID.
- **GTM** (optional, replaces direct GA4): tagmanager.google.com → Create Account →
  Web container → copy the `GTM-` ID. Add a GA4 Configuration tag inside GTM.
- **Meta Pixel**: business.facebook.com → Events Manager → Data Sources → Create Pixel →
  copy the numeric ID. The form fires the standard `Lead` event — usable directly as a
  conversion for your Meta campaigns.
- **Clarity**: clarity.microsoft.com → New project → copy the project ID.
- **Search Console**: search.google.com/search-console → Add property
  `noblewavemarketing.ca` (domain property, verify via DNS) → Sitemaps → submit
  `https://noblewavemarketing.ca/sitemap.xml`.

## 6. Events fired (no duplicates — single delegated listener)
| Event | Trigger |
|---|---|
| `contact_form_submit` | Successful form submission (also Meta standard `Lead`) |
| `phone_click` | Any tel: link |
| `email_click` | Any mailto: link |
| `cta_click` | Any "Claim Your Spot" / booking CTA (`data-track="cta"`) |

## 7. Local development
```
npm install
npm run dev      # site at localhost:3000 (form needs `vercel dev` to test the API locally)
npm run build    # production build to dist/
npm run lint     # typecheck
```
