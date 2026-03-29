import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars } from "@react-three/drei";

const Globe3D = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#D4AF37"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
                metalness={0.8}
              />
            </Sphere>
          </Float>
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

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
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
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
            <span className="text-[9px] uppercase tracking-[0.4em] text-noble-gold font-black mt-1">Marketing Studio</span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
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
            className="bg-noble-gold text-noble-black px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-white transition-all"
          >
            Get in Touch
          </motion.a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-noble-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
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
          <a href="#contact" onClick={() => setIsOpen(false)} className="bg-noble-gold text-noble-black px-6 py-3 rounded-full font-bold mt-4 text-center">
            Get in Touch
          </a>
        </motion.div>
      )}
    </header>
  );
};

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-noble-black">
      {/* 3D Globe Background */}
      <Globe3D />

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
            Influence • Design • Growth
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif leading-[0.9] mb-8">
            Dominate Your <br />
            <span className="italic text-noble-gold">Local Market.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Elite web design and local influencer networks that drive real-world traffic. Scalable growth, immersive presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)]"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-noble-gold opacity-50"
      >
        <ChevronRight className="rotate-90" size={32} />
      </motion.div>
    </section>
  );
};
