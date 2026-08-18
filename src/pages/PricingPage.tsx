import { motion } from "motion/react";
import { Check } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const plans = [
  {
    name: "AI SEO Growth",
    price: "Custom monthly plan",
    tagline: "Starting price available after a free assessment.",
    popular: false,
    features: [
      "SEO and GEO website audit",
      "Keyword and competitor research",
      "Monthly SEO content strategy",
      "Technical SEO, metadata, and schema",
      "Local SEO and Google Business Profile management",
      "Monthly reporting",
    ],
    cta: "Request a Custom Quote",
    href: "/contact",
  },
  {
    name: "Website & Total Setup",
    price: "$999",
    unit: "one-time",
    tagline: "Delivered fast. Yours to keep.",
    popular: true,
    badge: "Most Booked",
    features: [
      "Complete website strategy and build",
      "Conversion-focused, mobile-first design",
      "Lead forms and click-to-call throughout",
      "Metadata, schema, and SEO-friendly structure",
      "Search Console, analytics, and Google Business connection",
      "Pairs with AI SEO Growth or the Complete System",
    ],
    cta: "Get Your Website Built",
    href: "/websites",
  },
  {
    name: "Complete AI Growth System",
    price: "Request a Custom Quote",
    tagline: "Every service, connected — priced after we understand your business.",
    popular: false,
    features: [
      "Everything in AI SEO Growth",
      "Website build and ongoing optimization",
      "AI content creation and auto-publishing",
      "AI video and social media automation",
      "Lead generation",
      "One team managing all of it, reported monthly",
    ],
    cta: "Get a Free Strategy Call",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Pricing"
        title={<>Real Numbers. <span className="italic text-noble-gold">No Surprises.</span></>}
        subtitle="Two of these prices are fixed, because the work behind them is fixed. Everything else depends on your business, so we quote it after a real look — not a guess."
      />

      <section className="py-8 bg-noble-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-10 rounded-[2.5rem] border flex flex-col ${
                  plan.popular
                    ? "border-noble-gold bg-noble-dark shadow-[0_0_60px_rgba(212,175,55,0.15)]"
                    : "border-white/10 bg-noble-dark"
                }`}
              >
                {plan.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-6 self-start bg-noble-gold text-noble-black">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-serif text-white mb-4">{plan.name}</h3>
                <div className="flex items-end gap-3 mb-3">
                  <span className={`font-serif font-black text-white leading-none ${plan.unit ? "text-5xl" : "text-3xl"}`}>{plan.price}</span>
                  {plan.unit && <span className="text-noble-gold text-lg font-serif italic mb-1">{plan.unit}</span>}
                </div>
                <p className="text-gray-400 mb-8 font-light">{plan.tagline}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <Check className="text-noble-gold shrink-0 mt-1" size={16} />
                      <span className="text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.href}
                  data-track="cta"
                  className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
                    plan.popular
                      ? "bg-noble-gold text-noble-black hover:bg-white"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16 p-8 bg-noble-dark border border-white/5 rounded-[2rem] text-center">
            <h3 className="text-2xl font-serif text-white mb-3">Only need Lead Generation?</h3>
            <p className="text-gray-400 font-light mb-6">
              Our original service, still $400/month flat — exclusive leads, no contracts.
            </p>
            <a href="/lead-generation" className="text-noble-gold font-bold uppercase text-sm tracking-[0.15em] hover:underline">
              See Lead Generation Pricing →
            </a>
          </div>

          <p className="text-gray-600 text-sm font-light text-center max-w-2xl mx-auto mt-12">
            Custom-quoted plans are priced after we assess your website, market, and goals — no fabricated deliverable counts or posting quantities, no fine-print contract terms sprung on you later.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
