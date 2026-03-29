import { motion } from "motion/react";
import { Users, Layout, PenTool, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Influencer Content",
    description: "Turnkey production of high-impact video content. We manage creators, editing, and distribution so you get ready-to-launch assets that drive engagement.",
    icon: <Users className="w-10 h-10" />,
    link: "#contact"
  },
  {
    title: "Elite Web Design",
    description: "High-conversion digital storefronts tailored for elite brands. We build immersive websites designed to turn influencer traffic into loyal customers.",
    icon: <Layout className="w-10 h-10" />,
    link: "#contact"
  },
  {
    title: "Full-Cycle Content",
    description: "Complete content creation services. From creative direction to professional post-production, we provide the full engine to power your brand's growth.",
    icon: <PenTool className="w-10 h-10" />,
    link: "#contact"
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-noble-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-noble-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold"
          >
            Agency Vision
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            AI-Powered <br />
            <span className="italic text-noble-gold">Growth Strategy.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mt-10 font-light leading-relaxed"
          >
            Our strategy works because it's data-driven. We utilize an advanced AI-based system to create, test, and implement your marketing strategies. By leveraging local influencers, we tap into existing trust and community authority, driving real-world foot traffic and digital dominance that generic ads simply can't match.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5, 
                rotateX: -5,
                boxShadow: "0 20px 40px rgba(212,175,55,0.1)"
              }}
              className="p-14 bg-noble-black border border-white/5 rounded-[3rem] hover:border-noble-gold/40 transition-all group flex flex-col items-center text-center perspective-1000"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-noble-gold/10 flex items-center justify-center text-noble-gold mb-12 group-hover:bg-noble-gold group-hover:text-noble-black transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 shadow-xl">
                {service.icon}
              </div>
              <h3 className="text-4xl font-serif mb-8 text-white group-hover:text-noble-gold transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-12 text-xl font-light">
                {service.description}
              </p>
              <a 
                href={service.link} 
                className="inline-flex items-center gap-3 text-noble-gold font-bold hover:gap-5 transition-all uppercase text-sm tracking-[0.2em] border-b border-noble-gold/30 pb-2 hover:border-noble-gold"
              >
                Get in Touch <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-noble-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800&h=1000"
              alt="Influencer Content System"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-12 -right-12 bg-noble-gold p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(212,175,55,0.3)] hidden md:block">
            <p className="text-noble-black font-serif text-4xl italic font-black leading-tight">Local <br />Authority.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold">The NobleWave Advantage</span>
          <h2 className="text-6xl md:text-7xl font-serif mt-8 mb-10 text-white leading-tight">
            Local Influence, <br />
            <span className="italic text-noble-gold">Global Standards.</span>
          </h2>
          <p className="text-gray-400 text-2xl mb-10 leading-relaxed font-light">
            We build systems that turn local creators into your brand's most powerful growth engine. NobleWave provides high-impact digital assets and influencer networks without the complexity.
          </p>
          <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
            Our focus is on the two most powerful levers for local growth: **Elite Web Design** and **Local Influencer Networks**. We handle the setup, you handle the growth.
          </p>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="font-serif text-3xl text-white mb-4">Turnkey</h4>
              <p className="text-lg text-gray-500 font-light">Ready-to-launch content systems that require zero management.</p>
            </div>
            <div>
              <h4 className="font-serif text-3xl text-white mb-4">Impact</h4>
              <p className="text-lg text-gray-500 font-light">Vetted creators who drive real foot traffic and digital authority.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
