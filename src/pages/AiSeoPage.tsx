import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const pillars = [
  {
    title: "Traditional SEO",
    description: "The fundamentals: keyword research, on-page optimization, and content built around what your customers actually search for.",
  },
  {
    title: "Local SEO",
    description: "Google Business Profile management, local keyword targeting, and the signals that determine whether you show up in \"near me\" searches and the Maps pack.",
  },
  {
    title: "Technical SEO",
    description: "Site speed, mobile-friendliness, crawlability, metadata, and schema markup — the behind-the-scenes work that lets search engines read your site correctly.",
  },
  {
    title: "Content SEO",
    description: "Blog posts, service pages, city pages, and FAQs, researched and written around real search intent, then kept current instead of going stale.",
  },
  {
    title: "GEO — Generative Engine Optimization",
    description: "Structuring your content so AI tools like ChatGPT and Gemini can find, understand, and cite it when someone asks them a question instead of searching.",
  },
  {
    title: "AEO — Answer Engine Optimization",
    description: "Writing content in a clear question-and-answer structure, so it's positioned to be pulled directly into AI Overviews and answer boxes.",
  },
];

const included = [
  "Automated content publishing on a set schedule",
  "Google Business Profile management",
  "Internal linking between related pages",
  "Backlink strategy",
  "Monthly performance reporting",
  "AI visibility tracking across ChatGPT, Gemini, Claude, Perplexity, and Google AI",
];

export default function AiSeoPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="AI SEO"
        title={<>Search Engines. <span className="italic text-noble-gold">And AI Engines.</span></>}
        subtitle="NobleWave manages your SEO strategy end to end — researching, creating, optimizing, publishing, and measuring the work continuously, so your search presence is never sitting idle between check-ins."
        primaryCta={{ label: "Get a Free Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />

      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">What's Covered</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Six Parts of Search. <span className="italic text-noble-gold">One Managed System.</span>
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
                SEO is a long-term growth strategy, not an overnight switch. Results vary based on your competition, your website's existing authority, your market, your budget, and how the strategy is implemented — we report on real movement every month rather than promising a specific ranking or timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 noble-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
            Ready to See Where You <span className="italic text-noble-gold">Actually Stand?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed">
            A strategy call starts with a real look at your site, your competitors, and where the opportunity actually is.
          </p>
          <a
            href="/contact"
            data-track="cta"
            className="inline-flex items-center gap-2 bg-noble-gold text-noble-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all"
          >
            Get a Free Strategy Call <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
