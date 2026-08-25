import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Lead Generation",
    tagline: "Flat monthly rate. No long-term contracts.",
    badge: "One Spot Per Trade, Per City — GTA",
    popular: true,
    features: [
      "Exclusive qualified leads — never shared with another company",
      "Paid ad campaigns built and managed for you",
      "Homeowner qualification built into every lead",
      "Real-time delivery to your phone and inbox",
      "Your service area, your trade, your leads",
      "Direct line to us — no account managers, no ticket queues"
    ],
    cta: "Request Your Quote",
    note: "Quoted for your trade and service area on a strategy call — no discovery-call runaround."
  },
  {
    name: "Website Creation",
    tagline: "Delivered fast. Yours to keep.",
    badge: "Built for Renovation & HVAC Companies",
    popular: false,
    features: [
      "Conversion-focused design — built to turn visitors into calls",
      "Local SEO built in: structured data, geo targeting, Search Console",
      "Mobile-first and fast-loading on every device",
      "Lead capture forms and click-to-call throughout",
      "Your domain, your hosting, your site — no lock-in",
      "Pairs seamlessly with our lead generation service"
    ],
    cta: "Request Your Quote",
    note: "Add lead generation and your ads, landing experience, and site all work as one system."
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 md:py-28 bg-noble-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-noble-blue uppercase tracking-[0.4em] text-xs font-bold"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            No Guesswork. <br />
            <span className="italic text-noble-blue">A Number Built For You.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mt-10 font-light leading-relaxed"
          >
            Every business is different, so the number should be too. Tell us about yours on a free strategy call and we'll quote it straight.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[3rem] border flex flex-col ${
                plan.popular
                  ? "border-noble-blue bg-noble-dark shadow-[0_0_60px_rgba(62,123,250,0.15)]"
                  : "border-white/10 bg-noble-dark"
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-8 self-start ${
                plan.popular ? "bg-noble-blue text-noble-black" : "border border-white/20 text-gray-400"
              }`}>
                {plan.badge}
              </span>
              <h3 className="text-3xl font-serif text-white mb-3">{plan.name}</h3>
              <p className="text-gray-400 text-lg mb-10 font-light">{plan.tagline}</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-gray-300">
                    <Check className="text-noble-blue shrink-0 mt-1" size={18} />
                    <span className="text-base font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                data-track="cta"
                className={`w-full py-5 rounded-2xl font-bold text-lg text-center transition-all ${
                  plan.popular
                    ? "bg-noble-blue text-noble-black hover:bg-white"
                    : "border border-white/20 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
              <p className="text-gray-500 text-sm mt-6 text-center font-light">{plan.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
