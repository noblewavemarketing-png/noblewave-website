import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  MapPin,
  Search,
  FileSearch,
  Smartphone,
  Star,
  ClipboardCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { LandingShell } from "../components/LandingShell";
import { FreeAuditForm } from "../components/FreeAuditForm";
import { AmbientGlow } from "../components/AmbientGlow";

const checks = [
  { icon: <MapPin size={22} />, label: "Google Business Profile" },
  { icon: <Search size={22} />, label: "Local Search Visibility" },
  { icon: <Sparkles size={22} />, label: "AI Search Visibility" },
  { icon: <FileSearch size={22} />, label: "On-Page & AI SEO" },
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

// A quick, honest cross-section of what actually gets checked — cycled to
// reinforce that this is a real (AI-assisted) analysis, not a static claim.
const scanSteps = [
  "Scanning Google Business Profile…",
  "Checking local search rankings…",
  "Testing AI search visibility…",
  "Reviewing on-page & schema SEO…",
  "Checking mobile experience…",
];

function ScanTicker() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % scanSteps.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-3 text-sm font-light text-gray-400 h-6">
      <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-noble-blue opacity-60" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-noble-blue" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={scanSteps[i]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          {scanSteps[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export default function FreeAuditPage() {
  return (
    <LandingShell>
      {/* Hero + form, side by side — the whole conversion happens above the fold */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <AmbientGlow />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-noble-blue/30 bg-noble-blue/5 text-noble-blue uppercase tracking-[0.25em] text-[11px] font-bold"
            >
              <Sparkles size={13} aria-hidden="true" />
              Free AI-Powered Local SEO Audit
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-serif leading-[1.1] mb-8 text-white">
              Is Your Business Showing Up —{" "}
              <span className="italic text-noble-blue">Even to AI?</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed mb-6">
              A free, no-obligation, AI-assisted review of your Google Business Profile,
              website, and visibility in AI search tools like ChatGPT and Gemini — built
              for GTA home service businesses. Written findings in 2 business days.
            </p>
            <div className="mb-10">
              <ScanTicker />
            </div>
            <div className="flex flex-wrap gap-3">
              {checks.map((item, i) => (
                <motion.span
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-noble-dark border border-white/10 rounded-full text-gray-300 text-sm"
                >
                  <span className="text-noble-blue">{item.icon}</span>
                  {item.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="relative bg-noble-dark p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <span className="absolute -top-3 right-8 flex items-center gap-1.5 px-3 py-1 rounded-full bg-noble-blue text-noble-black text-[11px] font-bold uppercase tracking-wide">
              <Sparkles size={12} aria-hidden="true" />
              AI-Reviewed
            </span>
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
