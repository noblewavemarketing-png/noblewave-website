import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { Services } from "../components/Sections";
import { Fit } from "../components/Portfolio";
import { CTA } from "../components/Contact";
import { Check } from "lucide-react";
import { motion } from "motion/react";

export default function LeadGenerationPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Lead Generation"
        title={<>Booked Jobs. <span className="italic text-noble-gold">Not Clicks.</span></>}
        subtitle="Qualified, exclusive homeowner leads sent straight to your phone. Managed paid campaigns, homeowner qualification, and real-time delivery — targeted to your trade and service area."
        primaryCta={{ label: "Get in Touch", href: "/contact" }}
      />
      <Services />
      <Fit />

      <section className="py-24 md:py-28 bg-noble-dark">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-noble-black border border-noble-gold/30 rounded-[2.5rem] text-center"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-8 inline-block bg-noble-gold text-noble-black">
              One Partner Per Trade, Per City
            </span>
            <h2 className="text-4xl font-serif text-white mb-3">Flat Monthly Rate.</h2>
            <p className="text-gray-400 text-lg mb-10 font-light">No long-term contracts. Cancel anytime.</p>
            <ul className="space-y-4 mb-10 text-left max-w-md mx-auto">
              {[
                "Exclusive qualified leads — never shared with another company",
                "Paid ad campaigns built and managed for you",
                "Homeowner qualification built into every lead",
                "Real-time delivery to your phone and inbox",
                "Direct line to us — no account managers, no ticket queues",
              ].map((f) => (
                <li key={f} className="flex items-start gap-4 text-gray-300">
                  <Check className="text-noble-gold shrink-0 mt-1" size={18} />
                  <span className="font-light">{f}</span>
                </li>
              ))}
            </ul>
            <a href="/contact" data-track="cta" className="inline-block bg-noble-gold text-noble-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              Request Your Quote
            </a>
            <p className="text-gray-500 text-sm mt-6">Lead volume isn't guaranteed — it depends on your trade, area, and market demand. We'll be direct with you about what to expect on your strategy call.</p>
          </motion.div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
