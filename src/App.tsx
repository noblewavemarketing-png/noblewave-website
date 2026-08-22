/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Hero } from "./components/Hero";
import {
  Problems,
  ServicesOverview,
  HowItWorks,
  WhyNobleWave,
  FinalCTA,
} from "./components/HomeSections";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { motion, useScroll, useSpring, MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { initAnalytics } from "./lib/analytics";

export default function App() {
  useEffect(() => {
    initAnalytics();
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <MotionConfig reducedMotion="user">
    <div className="relative">
      <a href="#main" className="skip-link">Skip to content</a>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-noble-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header withAnnouncement />
      <main id="main">
        <Hero />
        <Problems />
        <ServicesOverview />
        <HowItWorks />
        <WhyNobleWave />
        <FinalCTA />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
    </MotionConfig>
  );
}
