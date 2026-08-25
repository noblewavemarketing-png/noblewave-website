import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "AI Customer-Service Agents",
    description: "Answers common questions accurately, using your actual business information — available any time, not just business hours.",
  },
  {
    title: "AI Sales Agents",
    description: "Engages inbound interest, answers product questions, and moves a real conversation forward before it reaches your sales team.",
  },
  {
    title: "AI Lead Qualification",
    description: "Filters and scores incoming leads against your actual criteria, so your team spends time on the ones worth calling.",
  },
  {
    title: "AI Appointment & Booking Agents",
    description: "Handles scheduling, confirmations, and rescheduling without back-and-forth emails or missed calls.",
  },
  {
    title: "Internal AI Assistants",
    description: "Support for your own team — answering internal questions, pulling information, handling routine internal requests.",
  },
  {
    title: "Custom AI Agents",
    description: "Built around a process specific to your business that doesn't fit a template.",
  },
];

const included = [
  "Agents trained on your actual business information",
  "Clear handoff to a real person when a conversation needs one",
  "Conversation logs and reporting",
  "Ongoing tuning as real conversations reveal gaps",
  "Integration with your existing CRM or inbox",
  "Testing before anything goes live with real customers",
];

export default function AiAgentsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AI Agents"
        title={<>An AI That <span className="italic text-noble-blue">Handles the Work.</span></>}
        subtitle="Custom AI agents built around your actual processes — answering, qualifying, booking, and supporting your team, consistently and around the clock."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Six Kinds of <span className="italic text-noble-blue">AI Agents.</span>
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
                AI agents handle defined, repeatable interactions well, and are built with clear
                handoff points to a real person for anything outside their scope. Performance
                depends on the quality and clarity of the information they're given.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to See What an <span className="italic text-noble-blue">AI Agent Could Handle?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            A consultation starts with a real look at the conversations and tasks eating your team's time.
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
