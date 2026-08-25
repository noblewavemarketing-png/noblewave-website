import { Header } from "../components/Hero";
import { CityIntro } from "../components/CityIntro";
import { About, Services, Websites } from "../components/Sections";
import { Fit } from "../components/Portfolio";
import { Pricing } from "../components/Pricing";
import { Contact, CTA } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useEffect } from "react";
import { motion, useScroll, useSpring, MotionConfig } from "motion/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { initAnalytics } from "../lib/analytics";

export default function MississaugaPage() {
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-noble-blue z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      <main id="main">
        <CityIntro
          city="Mississauga"
          eyebrow="Lead Generation • Renovation & HVAC • Mississauga"
          paragraph="Homeowners in Mississauga are already searching for renovation and HVAC help online, right now, on their phones. We run the ad campaigns that put you in front of them, filter out the shoppers who were never going to book, and hand you the address, the job, and the number — exclusively. No lead you didn't pay for gets sent to your competitor down the street."
        />
        <About />
        <Services />
        <Fit />
        <Websites />
        <Pricing />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
    </MotionConfig>
  );
}
