import { motion, useScroll, useTransform } from "motion/react";
import { ChevronRight } from "lucide-react";

interface CityIntroProps {
  city: string;
  eyebrow: string;
  paragraph: string;
}

/**
 * City-landing hero. Same offer, same brand, same CTAs as the homepage Hero —
 * only the eyebrow, headline, and local paragraph change per city. Pricing,
 * Contact, and every other section below it are the shared, real components.
 */
export const CityIntro = ({ city, eyebrow, paragraph }: CityIntroProps) => {
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noble-black">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-noble-blue/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div style={{ y: y2, opacity }}>
          <span className="text-noble-blue uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            {eyebrow}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[0.95] mb-8">
            Booked Jobs in {city}. <br />
            <span className="italic text-noble-blue">Not Clicks.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            NobleWave is based in Mississauga, Ontario, serving local businesses across the GTA — qualified, exclusive homeowner leads sent straight to your phone for companies serving {city}. One flat rate. No contracts. No shared leads.
          </p>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            {paragraph}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-track="cta"
              className="bg-noble-blue text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(62,123,250,0.3)]"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              See the Flat Rate
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-noble-blue opacity-50"
        aria-hidden="true"
      >
        <ChevronRight className="rotate-90" size={32} />
      </motion.div>
    </section>
  );
};
