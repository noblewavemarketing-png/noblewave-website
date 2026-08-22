import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = ({ withAnnouncement = false }: { withAnnouncement?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Websites", href: "/websites" },
    { name: "AI SEO", href: "/ai-seo" },
    { name: "AI Voice", href: "/ai-voice" },
    { name: "Content Automation", href: "/content-automation" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-noble-black/90 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl" : "bg-transparent py-6"
      }`}
    >
      {withAnnouncement && (
        <div className="bg-noble-gold text-noble-black text-center text-[11px] md:text-sm font-bold tracking-wide py-2 px-6 -mt-4 md:-mt-6 mb-4 md:mb-6">
          Get Found. Capture Every Lead. Stay Visible.
        </div>
      )}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative w-14 h-14">
            {/* Creative Abstract Wave Logo — ambient, always-looping motion
                (not a one-time "draw in"). A one-time reveal used to replay
                in full on every page navigation, which read as broken on
                this multi-page site (every nav is a fresh mount). A
                continuous loop has no such "incomplete" phase — it looks
                correct the instant it mounts, on every page. Two effects:
                1) the wave strokes gently undulate (a slow path morph)
                2) a soft gold shimmer sweeps across them on a loop. */}
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="wave-shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FFF3C4" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
                  <animateTransform
                    attributeName="gradientTransform"
                    type="translate"
                    values="-1 0; 1 0; -1 0"
                    dur="3.6s"
                    repeatCount="indefinite"
                  />
                </linearGradient>
              </defs>
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="8"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M20 50 Q35 20 50 50 T80 50",
                    "M20 50 Q35 32 50 50 T80 50",
                    "M20 50 Q35 20 50 50 T80 50",
                  ],
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Shimmer overlay — same motion, gradient stroke on top */}
              <motion.path
                fill="none"
                stroke="url(#wave-shimmer)"
                strokeWidth="8"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M20 50 Q35 20 50 50 T80 50",
                    "M20 50 Q35 32 50 50 T80 50",
                    "M20 50 Q35 20 50 50 T80 50",
                  ],
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.path
                fill="none"
                stroke="#D4AF37"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.4"
                animate={{
                  d: [
                    "M20 65 Q35 35 50 65 T80 65",
                    "M20 65 Q35 47 50 65 T80 65",
                    "M20 65 Q35 35 50 65 T80 65",
                  ],
                }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <path
                d="M35 35 L50 65 L65 35"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-serif font-black tracking-tighter text-white">
              NOBLE<span className="text-noble-gold">WAVE</span>
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold font-black mt-1">AI Growth Systems</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap">
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
            href="/ai-strategy-session"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-track="cta"
            className="bg-noble-gold text-noble-black px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-white transition-all"
          >
            Book a Consultation
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
          <a href="/ai-strategy-session" data-track="cta" onClick={() => setIsOpen(false)} className="bg-noble-gold text-noble-black px-6 py-3 rounded-full font-bold mt-4 text-center">
            Book a Consultation
          </a>
        </motion.nav>
      )}
    </header>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 130]);
  const imageScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noble-black pt-48 pb-20 md:pt-36">
      {/* Hero image — two layers of motion, so it never sits still.
          Outer div: scroll-linked parallax (drifts/scales as you scroll).
          Inner img: a slow, continuous ambient drift/zoom loop (18s) that
          plays regardless of scroll -- this is what reads as "alive" /
          video-like on first load, before anyone scrolls at all.
          Generated at full quality, 64KB as WebP: costs nothing on load. */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY, scale: imageScale }} aria-hidden="true">
        <motion.img
          src="/images/hero-wave.webp"
          alt=""
          className="w-full h-full object-cover object-[85%_25%] md:object-center"
          width={2752}
          height={1536}
          fetchPriority="high"
          decoding="async"
          animate={{ scale: [1, 1.08, 1], x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      {/* Legibility scrim — darker under the text, image reads clearly on the right */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-noble-black via-noble-black/75 to-noble-black/25" aria-hidden="true" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-noble-black via-transparent to-noble-black/50" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div style={{ y: y2, opacity }}>
          <span className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
            AI Systems for Modern Businesses
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif leading-[0.95] mb-8">
            Get Found. <br />
            Capture Every Lead. <br />
            <span className="italic text-noble-gold">Stay Visible.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            NobleWave builds high-performance websites, AI-powered SEO, intelligent voice agents, and automated content systems that help businesses attract and convert more customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/ai-strategy-session"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-track="cta"
              className="bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Book an AI Consultation
            </motion.a>
            <motion.a
              href="#system"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              See What We Build
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
