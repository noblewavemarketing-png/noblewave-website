import { motion } from "motion/react";
import { Check, ArrowRight, Compass, Cog, Bot, Megaphone, Cable } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  problem: string;
  provides: string;
  included: string[];
  benefit: string;
  ctaLabel: string;
  ctaHref: string;
}

const services: Service[] = [
  {
    id: "ai-consultancy",
    icon: <Compass size={32} />,
    title: "AI Consultancy & Strategy",
    problem: "AI feels important, but with no clear starting point, most businesses either do nothing or chase whatever tool made headlines this week.",
    provides: "We assess where your business actually stands, identify the AI opportunities worth pursuing, and build a practical roadmap — so every next step is deliberate, not a guess.",
    included: [
      "AI readiness assessments",
      "AI strategy development",
      "Identifying AI opportunities specific to your business",
      "AI implementation roadmaps",
      "Business AI consulting",
      "AI adoption guidance",
    ],
    benefit: "A clear, honest picture of where AI fits your business — and a plan for what to do about it.",
    ctaLabel: "See the Full AI Consultancy Page",
    ctaHref: "/ai-consultancy",
  },
  {
    id: "ai-automation",
    icon: <Cog size={32} />,
    title: "AI Automation",
    problem: "Your team is spending real hours on work that follows the same steps every time — and every hour spent on it is an hour not spent on what actually needs a person.",
    provides: "We map your existing workflows, identify what can safely run itself, and build automation that connects to the tools you already use instead of replacing them.",
    included: [
      "Workflow automation",
      "Repetitive task automation",
      "Business process automation",
      "CRM and lead automation",
      "Internal workflow optimization",
    ],
    benefit: "Less manual work, fewer dropped handoffs, and more of your team's time back.",
    ctaLabel: "See the Full AI Automation Page",
    ctaHref: "/ai-automation",
  },
  {
    id: "ai-agents",
    icon: <Bot size={32} />,
    title: "AI Agents",
    problem: "Customers expect a fast response any time of day — but a real person can't always be the one answering, qualifying, or booking.",
    provides: "We build custom AI agents around your actual processes: what a customer-service rep, a sales rep, or an internal assistant would do, running consistently and around the clock.",
    included: [
      "AI customer-service agents",
      "AI sales agents",
      "AI lead qualification",
      "AI appointment and booking agents",
      "Internal AI assistants",
      "Custom AI agents",
    ],
    benefit: "Faster responses and fewer missed opportunities, without needing to staff for every hour.",
    ctaLabel: "See the Full AI Agents Page",
    ctaHref: "/ai-agents",
  },
  {
    id: "ai-marketing",
    icon: <Megaphone size={32} />,
    title: "AI-Powered Marketing",
    problem: "Marketing tools that don't talk to each other — content, ads, and leads running as separate efforts instead of one system — waste both budget and time.",
    provides: "We apply AI to the marketing work itself: content systems, search and local visibility, video and social, automation, and lead generation, connected as one system instead of six disconnected tools.",
    included: [
      "AI content systems (SEO, blogs, service pages)",
      "Local SEO & Google Business management",
      "AI video & social media automation",
      "Marketing automation",
      "Lead-generation systems",
      "AI-assisted campaign optimization",
    ],
    benefit: "Marketing that runs as one connected system — with specific, AI-driven improvements you can point to, not just \"we post more now.\"",
    ctaLabel: "Talk to Us About AI Marketing",
    ctaHref: "/contact",
  },
  {
    id: "custom-ai-solutions",
    icon: <Cable size={32} />,
    title: "Custom AI Solutions",
    problem: "Off-the-shelf tools cover the common cases — but your business has workflows, systems, and edge cases a generic tool was never built for.",
    provides: "We design and build custom AI workflows, integrations, and internal tools around exactly what your business needs — including AI-integrated websites, connected forms and CRMs, and internal assistants.",
    included: [
      "Custom AI workflows",
      "AI integrations",
      "Business-specific AI systems",
      "AI tools and internal assistants",
      "AI-integrated websites & systems",
      "Forms, CRM & tool integrations",
    ],
    benefit: "A system built around your business, not the other way around.",
    ctaLabel: "Talk to Us About a Custom Build",
    ctaHref: "/contact",
  },
];

const ServiceBlock = ({ service, index }: { service: Service; index: number }) => (
  <section id={service.id} className={`py-24 md:py-28 scroll-mt-24 ${index % 2 === 1 ? "bg-noble-dark" : "bg-noble-black"}`}>
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-noble-blue/10 flex items-center justify-center text-noble-blue shrink-0">
            {service.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white">{service.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-noble-blue uppercase tracking-[0.2em] text-xs font-bold mb-3">The Problem</h3>
            <p className="text-gray-400 font-light leading-relaxed">{service.problem}</p>
          </div>
          <div>
            <h3 className="text-noble-blue uppercase tracking-[0.2em] text-xs font-bold mb-3">What NobleWave Provides</h3>
            <p className="text-gray-400 font-light leading-relaxed">{service.provides}</p>
          </div>
        </div>

        <div className="p-8 bg-noble-black border border-white/5 rounded-[2rem] mb-8">
          <h3 className="text-white font-serif text-xl mb-6">What's Included</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="text-noble-blue shrink-0 mt-0.5" size={16} />
                <span className="font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 bg-noble-blue/5 border border-noble-blue/20 rounded-2xl">
          <p className="text-gray-300 font-light"><span className="text-noble-blue font-bold">The benefit: </span>{service.benefit}</p>
          <a
            href={service.ctaHref}
            data-track="cta"
            className="inline-flex items-center gap-2 shrink-0 bg-noble-blue text-noble-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-all"
          >
            {service.ctaLabel} <ArrowRight size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title={<>Five Ways We Help You Put <span className="italic text-noble-blue">AI to Work.</span></>}
        subtitle="Consultancy, automation, agents, marketing, and custom builds — plus a standalone AI Strategy Session if what you need is one clear decision, not an ongoing engagement."
        primaryCta={{ label: "Book an AI Consultation", href: "/ai-strategy-session" }}
      />
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}

      {/* AI Strategy Session — a different kind of product (one paid session,
          not an ongoing managed service), so it gets its own distinct
          treatment here rather than folding into the ServiceBlock loop
          above. Full detail lives at /ai-strategy-session. */}
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="p-10 md:p-16 bg-noble-dark border border-noble-blue/30 rounded-[3rem] shadow-[0_0_80px_rgba(62,123,250,0.1)]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-8 inline-block bg-noble-blue text-noble-black">
              One-Time Session — Not a Subscription
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Need One Decision, Not a Retainer? <br />
              <span className="italic text-noble-blue">Book an AI Strategy Session.</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-10 max-w-2xl">
              Bring one business problem or AI idea to a private, one-on-one consulting session.
              Leave with clarity, a structured decision, and a written action plan — 45, 60, or
              90 minutes, sized to the decision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="/ai-strategy-session"
                data-track="cta"
                className="inline-flex items-center justify-center gap-2 bg-noble-blue text-noble-black px-8 py-4 rounded-full font-bold hover:bg-white transition-all"
              >
                See Session Details &amp; Book
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a
                href="/ai-strategy-session#faq"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-all"
              >
                Read the FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
