import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { Websites } from "../components/Sections";

export default function WebsitesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Websites"
        title={<>Your Website Should Look <span className="italic text-noble-gold">As Good As Your Business.</span></>}
        subtitle="Fully built, SEO-optimized, and connected to everything else NobleWave manages for you — delivered fast."
        primaryCta={{ label: "Get Your Website Built", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Solutions", href: "/" }}
      />

      {/* Real portfolio — a live project, not a mockup. The site itself is
          the proof: no fabricated client logos or testimonials here. */}
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-3xl mx-auto px-6 text-center mb-12">
          <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Live Project</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
            See It <span className="italic text-noble-gold">In the Wild.</span>
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-[1.75rem] overflow-hidden border border-white/10 bg-noble-dark shadow-2xl"
        >
          <div className="flex items-center gap-2 px-5 py-4 bg-white/[0.03] border-b border-white/5">
            <span className="w-3 h-3 rounded-full bg-noble-gold/40" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="w-3 h-3 rounded-full bg-white/20" />
            <span className="ml-4 text-gray-500 text-xs font-mono truncate">sohvac.ca</span>
          </div>
          <div className="p-10 md:p-14 text-center">
            <h3 className="text-3xl font-serif text-white mb-3">SO HVAC</h3>
            <p className="text-gray-500 font-light leading-relaxed mb-8 max-w-lg mx-auto">
              A conversion-focused HVAC services website for the Mississauga &amp; Oakville area —
              built mobile-first, with local SEO structured in from day one, and a lead form that
              actually works.
            </p>
            <a
              href="https://www.sohvac.ca"
              target="_blank"
              rel="noopener noreferrer"
              data-track="cta"
              className="inline-flex items-center gap-2 bg-noble-gold text-noble-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
            >
              View Live Site <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      <Websites />
    </PageShell>
  );
}
