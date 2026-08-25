import { motion } from "motion/react";
import { Check, X } from "lucide-react";

const fits = [
  "Established renovation, HVAC, or home-service companies in the GTA",
  "A crew with capacity to take on more jobs",
  "Someone who answers the phone the same day a lead comes in",
  "Owners who want a predictable pipeline, not marketing promises",
];

const notFits = [
  "Brand-new businesses still finding their footing",
  "Companies that let leads sit for days before calling",
  "Anyone shopping for the cheapest shared-lead list",
  "Owners who want to \"try it for a week\"",
];

export const Fit = () => {
  return (
    <section className="py-24 md:py-28 bg-noble-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Who This Is For</span>
          <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white">
            We're Selective. <span className="italic text-noble-blue">On Purpose.</span>
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mt-8 font-light leading-relaxed">
            Lead generation only works when the company behind it can actually handle the jobs. So we don't take everyone.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-12 bg-noble-dark border border-noble-blue/40 rounded-[2.5rem]"
          >
            <h3 className="font-serif text-3xl text-noble-blue mb-8">A Fit</h3>
            <ul className="space-y-5">
              {fits.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-300">
                  <Check className="text-noble-blue shrink-0 mt-1" size={20} />
                  <span className="text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="p-12 bg-noble-dark border border-white/5 rounded-[2.5rem]"
          >
            <h3 className="font-serif text-3xl text-gray-400 mb-8">Not a Fit</h3>
            <ul className="space-y-5">
              {notFits.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-500">
                  <X className="text-gray-600 shrink-0 mt-1" size={20} />
                  <span className="text-lg font-light">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
