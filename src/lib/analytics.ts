/**
 * Analytics — loads each tracker at most once, only when its ID is configured.
 *
 * IDs come from Vite env vars (set in Vercel → Settings → Environment Variables,
 * then redeploy — VITE_ vars are baked in at build time):
 *
 *   VITE_GTM_ID         e.g. GTM-XXXXXXX   (Google Tag Manager)
 *   VITE_GA4_ID         e.g. G-XXXXXXXXXX  (GA4 direct — SKIPPED automatically if GTM is set,
 *                                           to avoid double-counting; put GA4 inside GTM instead)
 *   VITE_META_PIXEL_ID  e.g. 1234567890    (Meta Pixel)
 *   VITE_CLARITY_ID     e.g. abcdefghij    (Microsoft Clarity)
 *
 * Events tracked (fired to GTM dataLayer, GA4 gtag, and Meta Pixel when present):
 *   contact_form_submit      — successful general-contact form submission (Contact.tsx)
 *   ai_strategy_intake_submit — successful AI Strategy Session booking request
 *                               (AiStrategyIntakeForm.tsx), includes which session length
 *   phone_click              — any tel: link
 *   email_click              — any mailto: link
 *   cta_click                — elements with data-track="cta" (booking/session CTAs)
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
    __nwAnalyticsInit?: boolean;
  }
}

const GTM_ID = import.meta.env.VITE_GTM_ID as string | undefined;
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID as string | undefined;

function addScript(src: string, id: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  s.id = id;
  document.head.appendChild(s);
}

function loadGTM(id: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript(`https://www.googletagmanager.com/gtm.js?id=${id}`, "nw-gtm");
}

function loadGA4(id: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
  addScript(`https://www.googletagmanager.com/gtag/js?id=${id}`, "nw-ga4");
}

function loadMetaPixel(id: string) {
  if (window.fbq) return;
  const fbq: any = function (...args: unknown[]) {
    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  addScript("https://connect.facebook.net/en_US/fbevents.js", "nw-fbq");
  window.fbq("init", id);
  window.fbq("track", "PageView");
}

function loadClarity(id: string) {
  if (window.clarity) return;
  const c: any = function (...args: unknown[]) {
    (c.q = c.q || []).push(args);
  };
  window.clarity = c;
  addScript(`https://www.clarity.ms/tag/${id}`, "nw-clarity");
}

/** Fire a named event to every configured tracker. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  try {
    if (window.dataLayer) window.dataLayer.push({ event: name, ...params });
    if (window.gtag) window.gtag("event", name, params);
    if (window.fbq) {
      if (name === "contact_form_submit") {
        window.fbq("track", "Lead", params); // standard Meta conversion event
      } else {
        window.fbq("trackCustom", name, params);
      }
    }
  } catch {
    /* analytics must never break the site */
  }
}

/** Initialize all configured trackers + delegated click tracking. Safe to call once. */
export function initAnalytics() {
  if (typeof window === "undefined" || window.__nwAnalyticsInit) return;
  window.__nwAnalyticsInit = true;

  if (GTM_ID) loadGTM(GTM_ID);
  if (GA4_ID && !GTM_ID) loadGA4(GA4_ID); // GTM takes precedence — configure GA4 inside GTM
  if (GA4_ID && GTM_ID) {
    console.info("[analytics] GTM is configured — direct GA4 skipped to avoid double-counting. Add GA4 as a tag inside GTM.");
  }
  if (PIXEL_ID) loadMetaPixel(PIXEL_ID);
  if (CLARITY_ID) loadClarity(CLARITY_ID);

  // One delegated listener — impossible to double-fire per click.
  document.addEventListener(
    "click",
    (e) => {
      const el = (e.target as HTMLElement)?.closest?.("a, button");
      if (!el) return;
      const href = el.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { location: el.closest("section, header, footer, nav")?.id || "page" });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { location: el.closest("section, header, footer, nav")?.id || "page" });
      } else if (el.getAttribute("data-track") === "cta") {
        trackEvent("cta_click", {
          label: (el.textContent || "").trim().slice(0, 60),
          location: el.closest("section, header, footer, nav")?.id || "page",
        });
      }
    },
    { passive: true }
  );
}
