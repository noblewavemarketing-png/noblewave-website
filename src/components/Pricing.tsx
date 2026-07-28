import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Lead Generation",
    price: "$400",
    unit: "/month",
    tagline: "Flat. Month to month. Cancel anytime.",
    badge: "20 Partner Spots — First Come, First Served",
    popular: true,
    features: [
      "Exclusive qualified leads — never shared with another company",
      "Paid ad campaigns built and managed for you",
      "Homeowner qualification built into every lead",
      "Real-time delivery to your phone and inbox",
      "Your service area, your trade, your leads",
      "Direct line to us — no account managers, no ticket queues"
    ],
    cta: "Claim Your Spot",
    note: "Compare that to agency retainers of $1,500–$3,000/month — before ad spend."
  },
  {
    name: "Website Creation",
    price: "$999",
    unit: "one-time",
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
    cta: "Get Your Website Built",
    note: "Add lead generation and your ads, landing experience, and site all work as one system."
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
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl font-serif mt-8 text-white leading-tight"
          >
            Real Numbers. <br />
            <span className="italic text-noble-gold">No Surprises.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto mt-10 font-light leading-relaxed"
          >
            Agencies bury pricing behind discovery calls because the number is scary. Ours isn't, so here it is.
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
                  ? "border-noble-gold bg-noble-dark shadow-[0_0_60px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-noble-dark"
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-8 self-start ${
                plan.popular ? "bg-noble-gold text-noble-black" : "border border-white/20 text-gray-400"
              }`}>
                {plan.badge}
              </span>
              <h3 className="text-3xl font-serif text-white mb-6">{plan.name}</h3>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-6xl md:text-7xl font-serif font-black text-white leading-none">{plan.price}</span>
                <span className="text-noble-gold text-xl font-serif italic mb-1">{plan.unit}</span>
              </div>
              <p className="text-gray-400 text-lg mb-10 font-light">{plan.tagline}</p>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-4 text-gray-300">
                    <Check className="text-noble-gold shrink-0 mt-1" size={18} />
                    <span className="text-base font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                data-track="cta"
                className={`w-full py-5 rounded-2xl font-bold text-lg text-center transition-all ${
                  plan.popular
                    ? "bg-noble-gold text-noble-black hover:bg-white"
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
