import { motion } from "motion/react";
import { MapPin, Search, FileSearch, Smartphone, Star, ClipboardCheck, ChevronDown } from "lucide-react";
import { LandingShell } from "../components/LandingShell";
import { FreeAuditForm } from "../components/FreeAuditForm";

const checks = [
  { icon: <MapPin size={22} />, label: "Google Business Profile" },
  { icon: <Search size={22} />, label: "Local Search Visibility" },
  { icon: <FileSearch size={22} />, label: "On-Page SEO" },
  { icon: <Smartphone size={22} />, label: "Mobile & Speed" },
  { icon: <Star size={22} />, label: "Reviews & Trust" },
  { icon: <ClipboardCheck size={22} />, label: "Listing Consistency" },
];

const faqs = [
  {
    q: "Is this actually free?",
    a: "Yes — no cost, no obligation to hire us afterward. You get the findings either way.",
  },
  {
    q: "What happens after I submit the form?",
    a: "We check your Google Business Profile and website (if you gave us one) and send written findings within 2 business days. No call needed unless you want one.",
  },
  {
    q: "Do I need to give you a login or anything private?",
    a: "No. Everything we check is publicly visible — your Google Business listing, your live website, and public directories.",
  },
];

export default function FreeAuditPage() {
  return (
    <LandingShell>
      {/* Hero + form, side by side — the whole conversion happens above the fold */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-30" aria-hidden="true">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-noble-blue/10 blur-[150px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-noble-blue uppercase tracking-[0.4em] text-xs font-bold mb-6 block">
              Free Local SEO Audit
            </span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8 text-white">
              Is Your Business Actually <span className="italic text-noble-blue">Showing Up?</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-10">
              A free, no-obligation review of your Google Business Profile and website —
              built for GTA home service businesses. Written findings in 2 business days,
              no sales call required.
            </p>
            <div className="flex flex-wrap gap-3">
              {checks.map((item) => (
                <span
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 bg-noble-dark border border-white/10 rounded-full text-gray-300 text-sm"
                >
                  <span className="text-noble-blue">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-noble-dark p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <h2 className="text-2xl font-serif text-white mb-2">Get My Free Audit</h2>
            <p className="text-gray-500 text-sm font-light mb-8">Takes under a minute.</p>
            <FreeAuditForm />
          </motion.div>
        </div>
      </section>

      {/* Short FAQ — objection handling only, no scroll-padding */}
      <section className="py-20 bg-noble-dark border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-white text-center">
            Quick <span className="italic text-noble-blue">Questions.</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group bg-noble-black border border-white/5 rounded-2xl p-6 open:border-noble-blue/40"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif text-lg text-white">
                  {item.q}
                  <ChevronDown
                    className="text-noble-blue shrink-0 transition-transform group-open:rotate-180"
                    size={20}
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-gray-400 font-light leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </LandingShell>
  );
}
