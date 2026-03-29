/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Hero } from "./components/Hero";
import { About, Services } from "./components/Sections";
import { Testimonials } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { Pricing } from "./components/Pricing";
import { Contact, CTA } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-noble-gold z-[60] origin-left"
        style={{ scaleX }}
      />

      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
