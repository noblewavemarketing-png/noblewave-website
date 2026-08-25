import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "Workflow Automation",
    description: "Multi-step processes — approvals, handoffs, follow-ups — connected and running automatically instead of depending on someone remembering the next step.",
  },
  {
    title: "Repetitive Task Automation",
    description: "The manual, repeatable tasks eating your team's time: data entry, status updates, routine communications.",
  },
  {
    title: "Business Process Automation",
    description: "End-to-end processes across departments, automated and monitored, not just individual tasks in isolation.",
  },
  {
    title: "CRM & Lead Automation",
    description: "Leads routed, tagged, and followed up on the moment they come in — nothing sitting unseen in an inbox.",
  },
  {
    title: "Internal Workflow Optimization",
    description: "We look at how your team actually works and remove the friction — not just add another tool on top of the existing mess.",
  },
  {
    title: "Automation Audits",
    description: "A review of your current tools and processes to find where automation would save the most time first.",
  },
];

const included = [
  "Automation built on tools you already use, not a rip-and-replace",
  "Clear documentation of what's automated and how",
  "Monitoring, so a broken automation gets caught early",
  "Human checkpoints built in wherever judgment is still needed",
  "Training for your team on the new workflow",
  "Ongoing optimization as your business changes",
];

export default function AiAutomationPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AI Automation"
        title={<>Work That <span className="italic text-noble-blue">Runs Itself.</span></>}
        subtitle="We find the repetitive, manual work already happening in your business and build automated systems to handle it — connected to what you already use, not replacing it."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Six Kinds of <span className="italic text-noble-blue">Manual Work.</span>
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
                Automation removes repetitive work — it doesn't replace judgment where judgment is
                still needed. We design every workflow with appropriate human checkpoints, and
                results depend on your existing systems, tools, and data quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to See What Should <span className="italic text-noble-blue">Run Itself?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            A consultation starts with a real look at your workflows and where the time is actually going.
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
