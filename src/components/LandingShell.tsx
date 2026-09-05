import { useEffect, type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Phone } from "lucide-react";
import { initAnalytics } from "../lib/analytics";

/**
 * Minimal chrome for standalone paid-traffic landing pages — deliberately
 * NOT the site-wide Header/Footer (see Hero.tsx / Footer.tsx), which are
 * full of links to every other page on the site. Every one of those links
 * is an exit ramp for a visitor who arrived from an ad wanting one specific
 * thing. This shell keeps just enough chrome for trust (logo, phone number,
 * privacy link) and nothing that invites browsing away before converting.
 */
export const LandingShell = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <div className="relative bg-noble-black">
      <a href="#main" className="skip-link">Skip to content</a>

      <header className="py-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-noble-blue flex items-center justify-center">
              <span className="text-noble-black font-serif text-sm font-bold">N</span>
            </div>
            <span className="text-xl font-serif font-bold tracking-wider text-white">
              Noble<span className="text-noble-blue">Wave</span>
            </span>
          </div>
          <a
            href="tel:6476735748"
            data-track="cta"
            className="flex items-center gap-2 text-white text-sm font-bold border border-white/15 rounded-full px-5 py-2.5 hover:border-noble-blue hover:text-noble-blue transition-colors"
          >
            <Phone size={16} aria-hidden="true" />
            647-673-5748
          </a>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="py-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} NobleWave. Serving HVAC, plumbing, electrical, and other home service businesses across the GTA.</p>
          <a href="/privacy" className="hover:text-noble-blue transition-colors">Privacy Policy</a>
        </div>
      </footer>

      <Analytics />
      <SpeedInsights />
    </div>
  );
};
