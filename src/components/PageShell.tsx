import { useEffect, type ReactNode } from "react";
import { motion, useScroll, useSpring, MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Header } from "./Hero";
import { Footer } from "./Footer";
import { initAnalytics } from "../lib/analytics";

/**
 * Shared chrome for every non-homepage page: skip link, scroll-progress bar,
 * Header, Footer, analytics. The homepage (App.tsx) still assembles its own
 * chrome directly since its Hero section needs its own scroll-linked parallax
 * effects the Header alone doesn't need — this is for every page after that.
 */
export const PageShell = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    initAnalytics();
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <a href="#main" className="skip-link">Skip to content</a>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-noble-gold z-[60] origin-left"
          style={{ scaleX }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </MotionConfig>
  );
};
