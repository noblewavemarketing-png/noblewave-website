import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const websitePlans = [
  {
    name: "Launch",
    tagline: "For businesses that need a professional foundation.",
    popular: false,
    features: [
      "Custom-designed website, up to 5 pages",
      "Mobile-first, fast-loading build",
      "Basic on-page SEO",
      "Contact & lead-capture forms",
      "Launch support",
    ],
    cta: "Request Pricing",
    href: "/ai-strategy-session",
  },
  {
    name: "Professional",
    tagline: "The core NobleWave website package.",
    popular: true,
    badge: "Most Requested",
    features: [
      "Everything in Launch",
      "Expanded page architecture",
      "Local SEO & Google Business alignment",
      "Analytics & Search Console setup",
      "Schema markup",
      "Conversion-focused copywriting",
    ],
    cta: "Request Pricing",
    href: "/ai-strategy-session",
  },
  {
    name: "Growth",
    tagline: "For businesses that need deeper SEO, service architecture, and lead-generation infrastructure.",
    popular: false,
    features: [
      "Everything in Professional",
      "Service & location page architecture",
      "Technical SEO audit",
      "CRM & tool integrations",
      "Priority build timeline",
    ],
    cta: "Request Pricing",
    href: "/ai-strategy-session",
  },
];

const systemPlans = [
  { name: "AI SEO", description: "Ongoing search architecture, content, and reporting.", href: "/ai-seo" },
  { name: "AI Voice", description: "A 24/7 AI receptionist, scoped to your call volume.", href: "/ai-voice" },
  { name: "Content Automation", description: "A content system sized to how visible you need to be.", href: "/content-automation" },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Pricing"
        title={<>Real Packages. <span className="italic text-noble-blue">Scoped to You.</span></>}
        subtitle="Website packages start from a clear foundation. Ongoing AI systems are scoped to your business — every price is quoted after a real conversation, usually starting with an AI Strategy Session."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
      />

      <section className="py-24 md:py-28 bg-noble-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Websites</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Three Ways to <span className="italic text-noble-blue">Get Started.</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {websitePlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[2.5rem] border flex flex-col ${
                  plan.popular
                    ? "border-noble-blue bg-noble-dark shadow-[0_0_60px_rgba(62,123,250,0.15)]"
                    : "border-white/10 bg-noble-dark"
                }`}
              >
                {plan.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-6 self-start bg-noble-blue text-noble-black">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-serif text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 mb-8 font-light">{plan.tagline}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <Check className="text-noble-blue shrink-0 mt-1" size={16} />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  data-track="cta"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.popular
                      ? "bg-noble-blue text-noble-black hover:bg-white"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-28 bg-noble-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Ongoing AI Systems</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
              Scoped to Your <span className="italic text-noble-blue">Business.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              These run monthly, sized to your call volume, market, and content needs — not a flat rate that fits everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {systemPlans.map((plan, index) => (
              <motion.a
                key={plan.name}
                href={plan.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-noble-black border border-white/5 rounded-[2rem] hover:border-noble-blue/40 transition-all block"
              >
                <h3 className="text-xl font-serif text-white mb-3">{plan.name}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">{plan.description}</p>
                <span className="text-noble-blue text-xs font-bold uppercase tracking-widest">Request Pricing →</span>
              </motion.a>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 p-8 bg-noble-black border border-white/5 rounded-[2rem] text-center">
            <h3 className="text-2xl font-serif text-white mb-3">Want All of It, Connected?</h3>
            <p className="text-gray-400 font-light mb-6">
              A website, AI SEO, voice, and content — built and managed as one system.
            </p>
            <a href="/" className="text-noble-blue font-bold uppercase text-sm tracking-[0.15em] hover:underline">
              See the Full System →
            </a>
          </div>

          <p className="text-gray-600 text-sm font-light text-center max-w-2xl mx-auto mt-12">
            Every plan is quoted after we assess your business, systems, and goals — no fabricated deliverable counts, no fine-print contract terms sprung on you later.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
