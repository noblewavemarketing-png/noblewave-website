import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "AI Readiness Assessments",
    description: "An honest look at your current systems, data, and workflows — what's actually ready for AI, and what needs work first.",
  },
  {
    title: "AI Strategy",
    description: "A practical plan built around your goals and constraints, not a generic AI playbook.",
  },
  {
    title: "Identifying AI Opportunities",
    description: "We look at your specific operations and point to where AI would make a real difference — and where it wouldn't.",
  },
  {
    title: "AI Implementation Roadmaps",
    description: "A sequenced, prioritized plan for what to build first, second, and third — so adoption doesn't happen all at once, or not at all.",
  },
  {
    title: "Business AI Consulting",
    description: "Ongoing advisory as AI tools and your business both keep changing — a second opinion when you need one.",
  },
  {
    title: "AI Adoption Guidance",
    description: "Practical guidance for rolling AI out to your team: what changes, what doesn't, and how to bring people along.",
  },
];

const included = [
  "A structured intake before every engagement",
  "Plain-language explanations, no unnecessary jargon",
  "Recommendations tied to your actual budget and team size",
  "Honest guidance on where AI isn't the right fit yet",
  "A written summary after every consultation",
  "Direct access to your consultant — no account managers",
];

export default function AiConsultancyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AI Consultancy"
        title={<>Know Where AI <span className="italic text-noble-blue">Actually Fits.</span></>}
        subtitle="Most businesses don't need more AI hype — they need an honest assessment of where it helps, a strategy, and a roadmap. That's what AI consultancy is."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              From Curiosity <span className="italic text-noble-blue">to Roadmap.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="p-8 bg-noble-dark border border-white/5 rounded-[2rem]"
              >
                <h3 className="text-xl font-serif text-noble-blue mb-3">{p.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-noble-dark">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-10 md:p-14 bg-noble-black border border-white/5 rounded-[2.5rem]">
            <h2 className="text-3xl font-serif text-white mb-8">Also Included</h2>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <Check className="text-noble-blue shrink-0 mt-1" size={18} />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                AI consultancy provides strategic guidance and decision support, not a guaranteed
                outcome. Results depend on your specific circumstances, your data, and how any
                recommendation is implemented — the final business decision is always yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to Find Out <span className="italic text-noble-blue">Where AI Fits?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            The AI Strategy Session is the fastest way to start — bring one problem, leave with a plan.
          </p>
          <a
            href="/ai-strategy-session"
            data-track="cta"
            className="inline-flex items-center gap-2 bg-noble-blue text-noble-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
          >
            Book an AI Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
