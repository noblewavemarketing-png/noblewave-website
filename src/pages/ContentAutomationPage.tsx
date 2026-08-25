import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "SEO Articles",
    description: "Long-form content built around real search intent, not just keyword stuffing.",
  },
  {
    title: "Social Posts",
    description: "Captioned, branded posts ready for your platforms.",
  },
  {
    title: "Short-Form Video",
    description: "AI-assisted video content sized for social and Google Business.",
  },
  {
    title: "Google Business Content",
    description: "Regular posts that keep your local listing active and current.",
  },
  {
    title: "FAQs & Website Updates",
    description: "New content added to your site as your business evolves.",
  },
  {
    title: "Content Repurposing",
    description: "One idea reshaped into every format your presence needs.",
  },
];

const included = [
  "A content calendar planned around your business",
  "Brand-aligned tone and voice",
  "Scheduled automatic publishing",
  "Optional human approval before anything goes live",
  "Multi-platform repurposing",
  "Monthly content reporting",
];

export default function ContentAutomationPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Content Automation"
        title={<>One Idea. <span className="italic text-noble-blue">A Month of Content.</span></>}
        subtitle="Give us one topic, promotion, or business update. NobleWave's system turns it into everything your online presence needs — written, scheduled, and published."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Solutions", href: "/" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Stay Active <span className="italic text-noble-blue">Without the Weekly Grind.</span>
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
                Content automation handles the production and scheduling — results depend on your
                market, your offer, and how consistently the system runs. We report on what's
                actually published, not projected engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to <span className="italic text-noble-blue">Stay Visible?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            Bring one idea. See exactly what a month of content built from it looks like.
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
