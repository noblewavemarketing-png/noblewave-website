import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect, Suspense, lazy } from "react";

const Globe3D = lazy(() => import("./Globe3D"));

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "How It Works", href: "#services" },
    { name: "Websites", href: "#websites" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-noble-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="relative w-14 h-14">
            {/* Creative Abstract Wave Logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <motion.path
                d="M20 50 Q35 20 50 50 T80 50"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M20 65 Q35 35 50 65 T80 65"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.path
                d="M35 35 L50 65 L65 35"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-serif font-black tracking-tighter text-white">
              NOBLE<span className="text-noble-gold">WAVE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold font-black mt-1">Lead Generation</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide text-gray-400 hover:text-noble-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-track="cta"
            className="bg-noble-gold text-noble-black px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-white transition-all"
          >
            Claim a Spot
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-noble-gold"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-noble-black p-6 flex flex-col gap-4 shadow-2xl border-b border-white/10"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 text-lg font-medium hover:text-noble-gold"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" data-track="cta" onClick={() => setIsOpen(false)} className="bg-noble-gold text-noble-black px-6 py-3 rounded-full font-bold mt-4 text-center">
            Claim a Spot
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export const Hero = () => {
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => {
    const start = () => setShowGlobe(true);
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(start, { timeout: 2000 });
    } else {
      setTimeout(start, 300);
    }
  }, []);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noble-black">
      {/* 3D Globe Background — mounted after idle so hero text paints first */}
      {showGlobe && <Suspense fallback={null}><Globe3D /></Suspense>}

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-noble-gold/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-white/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            Lead Generation • Renovation & HVAC • GTA
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif leading-[0.9] mb-8">
            Booked Jobs. <br />
            <span className="italic text-noble-gold">Not Clicks.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Qualified, exclusive homeowner leads sent straight to your phone — for established home renovation and HVAC companies across the GTA. One flat rate. No contracts. No shared leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-track="cta"
              className="bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Claim Your Spot
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

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-noble-gold opacity-50"
        aria-hidden="true"
      >
        <ChevronRight className="rotate-90" size={32} />
      </motion.div>
    </section>
  );
};
