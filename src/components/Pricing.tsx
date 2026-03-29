import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const influencerPackages = [
  {
    name: "Essential Content",
    description: "The perfect entry point for founders to start their local influence journey.",
    features: [
      "3 Vetted Local Influencers",
      "3 High-Impact Edited Videos",
      "Ready-to-Launch Content",
      "1 Collaboration Post",
      "Basic Content Strategy"
    ],
    cta: "Start Your Wave",
    popular: false
  },
  {
    name: "Growth Wave",
    description: "Our most popular system for scaling local presence and content volume.",
    features: [
      "8 Vetted Local Influencers",
      "9 Pro-Edited Videos",
      "Full Content Management",
      "4 Collaboration Posts",
      "Advanced Editing & Hooks",
      "Monthly Strategy Session"
    ],
    cta: "Scale Your Influence",
    popular: true
  },
  {
    name: "Empire Scale",
    description: "A complete content empire designed for market domination.",
    features: [
      "15 Vetted Local Influencers",
      "Pro Content Production",
      "Dedicated Content Manager",
      "Weekly Collaboration Drops",
      "Full Scale Market Influence",
      "Paid Ad Content Integration"
    ],
    cta: "Build Your Empire",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-noble-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-noble-gold uppercase tracking-[0.4em] text-xs font-bold"
          >
            Investment
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            Influencer Content <br />
            <span className="italic text-noble-gold">Systems.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {influencerPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[3rem] border flex flex-col ${
                pkg.popular ? "border-noble-gold bg-noble-dark shadow-[0_0_60px_rgba(212,175,55,0.15)] scale-105 z-10" : "border-white/10 bg-noble-black"
              }`}
            >
              {pkg.popular && (
                <span className="bg-noble-gold text-noble-black text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-8 self-start">
                  Most Popular
                </span>
              )}
              <h4 className="text-4xl font-serif text-white mb-6">{pkg.name}</h4>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-light">{pkg.description}</p>
              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-gray-300">
                    <Check className="text-noble-gold shrink-0 mt-1" size={20} />
                    <span className="text-lg font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-5 rounded-2xl font-bold text-lg transition-all ${
                pkg.popular ? "bg-noble-gold text-noble-black hover:bg-white" : "border border-white/20 text-white hover:bg-white/5"
              }`}>
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
