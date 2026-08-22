import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "24/7 AI Receptionist",
    description: "Every call gets answered, day or night — no voicemail, no missed opportunity.",
  },
  {
    title: "Natural Voice Conversations",
    description: "Callers talk normally; the agent understands context, not just keywords.",
  },
  {
    title: "Lead Qualification",
    description: "The agent asks the right questions and filters for the leads worth your time.",
  },
  {
    title: "Appointment Booking",
    description: "Callers get scheduled directly, synced to your calendar.",
  },
  {
    title: "Call Summaries",
    description: "Every call is transcribed and summarized, so nothing gets lost in translation.",
  },
  {
    title: "SMS & Email Follow-Up",
    description: "Automatic follow-up keeps the conversation going after the call ends.",
  },
];

const included = [
  "Lead routing to the right person or team",
  "CRM integration",
  "Automated intake forms",
  "Custom call scripts built around your business",
  "Escalation to a real person when needed",
  "Ongoing tuning as real calls reveal gaps",
];

export default function AiVoicePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AI Voice"
        title={<>Never Miss <span className="italic text-noble-gold">Another Call.</span></>}
        subtitle="A 24/7 AI receptionist that has natural conversations, qualifies leads, and books appointments — so no opportunity depends on someone being near the phone."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Solutions", href: "/" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              A Receptionist That <span className="italic text-noble-gold">Never Clocks Out.</span>
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
                <h3 className="text-xl font-serif text-noble-gold mb-3">{p.title}</h3>
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
                  <Check className="text-noble-gold shrink-0 mt-1" size={18} />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-500 text-sm font-light leading-relaxed">
                AI voice agents handle defined, repeatable conversations well, and are built with
                clear handoff to a real person for anything outside their scope. Call volume and
                outcomes depend on your business, your script, and how the agent is configured.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to Stop <span className="italic text-noble-gold">Missing Calls?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            See exactly how an AI receptionist would handle your business's calls.
          </p>
          <a
            href="/ai-strategy-session"
            data-track="cta"
            className="inline-flex items-center gap-2 bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
          >
            Book an AI Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
