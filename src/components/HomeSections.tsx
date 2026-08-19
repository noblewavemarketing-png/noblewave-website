import { motion } from "motion/react";
import {
  Search, Compass, Hammer, LineChart, Cog, Bot, Cable,
  HelpCircle, ListFilter, Workflow, Unplug, Gauge, Clock,
  Target, Megaphone,
  ArrowRight, Check,
} from "lucide-react";

/* 1. Announcement bar — rendered inside Header (withAnnouncement) so it moves
   with the fixed nav instead of sitting behind it. See Hero.tsx. */

/* 3. Business problems — why businesses struggle to actually get value from AI */
const problems = [
  { icon: <HelpCircle size={28} />, title: "You know AI matters, but not where to start", description: "It's everywhere in the news and nowhere in a plan you can actually follow — so it's easier to do nothing." },
  { icon: <ListFilter size={28} />, title: "You can't tell which tools actually matter", description: "A new AI tool launches every week. Most are noise. Very few are actually right for your business." },
  { icon: <Workflow size={28} />, title: "You're not sure what should be automated", description: "Some of what your team does by hand could run itself — but automating the wrong thing wastes time and trust." },
  { icon: <Unplug size={28} />, title: "AI doesn't connect to how you actually work", description: "A tool that doesn't plug into your existing systems and workflows just becomes one more thing to manage." },
  { icon: <Gauge size={28} />, title: "There's no way to measure if it's working", description: "Without a clear before-and-after, \"we're using AI now\" is a claim, not a result." },
  { icon: <Clock size={28} />, title: "Competitors are already moving", description: "The businesses that work this out first get the efficiency gain and the head start — waiting has a real cost." },
];

export const Problems = () => (
  <section className="py-28 md:py-32 bg-noble-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Sound Familiar?</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
          AI Curiosity Alone <span className="italic text-noble-gold">Doesn't Move a Business.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
          We help businesses move from AI curiosity to AI strategy to AI implementation to measurable results.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            className="p-8 bg-noble-dark border border-white/5 rounded-[2rem]"
          >
            <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold mb-6">
              {p.icon}
            </div>
            <h3 className="text-xl font-serif text-white mb-3">{p.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* 4. Services overview — the six core service categories */
const overviewServices = [
  { icon: <Compass size={32} />, title: "AI Consultancy", description: "Understand where AI realistically fits your business — readiness, opportunities, and a roadmap, not hype.", href: "/ai-consultancy" },
  { icon: <Target size={32} />, title: "AI Strategy", description: "A practical, prioritized plan for AI adoption, built around your goals, budget, and constraints.", href: "/ai-strategy-session" },
  { icon: <Cog size={32} />, title: "AI Automation", description: "Workflow and process automation that removes repetitive work, connected to the tools you already use.", href: "/ai-automation" },
  { icon: <Bot size={32} />, title: "AI Agents", description: "Custom AI agents for customer service, sales, lead qualification, booking, and internal support.", href: "/ai-agents" },
  { icon: <Megaphone size={32} />, title: "AI-Powered Marketing", description: "Content systems, marketing automation, and lead generation — AI applied to marketing, not the other way around.", href: "/services#ai-marketing" },
  { icon: <Cable size={32} />, title: "Custom AI Solutions", description: "Custom workflows, integrations, and internal tools built around exactly what your business needs.", href: "/services#custom-ai-solutions" },
];

export const ServicesOverview = () => (
  <section id="services-overview" className="py-28 md:py-32 bg-noble-dark relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">What We Do</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
          Six Ways We Put <span className="italic text-noble-gold">AI to Work.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
          From first assessment to a fully built system — strategy, automation, agents, and implementation, managed for you.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {overviewServices.map((s, i) => (
          <motion.a
            key={s.title}
            href={s.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1 }}
            whileHover={{ y: -6 }}
            className="p-10 bg-noble-black border border-white/5 rounded-[2.5rem] hover:border-noble-gold/40 transition-all group flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold mb-8 group-hover:bg-noble-gold group-hover:text-noble-black transition-all">
              {s.icon}
            </div>
            <h3 className="text-2xl font-serif text-white mb-4">{s.title}</h3>
            <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow">{s.description}</p>
            <span className="inline-flex items-center gap-2 text-noble-gold font-bold uppercase text-xs tracking-[0.2em] group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={14} />
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

/* 5. How it works — Discover, Strategize, Build, Optimize */
const steps = [
  { icon: <Search size={28} />, title: "Discover", description: "We get to know your business and identify where AI can realistically make a difference." },
  { icon: <Compass size={28} />, title: "Strategize", description: "We develop a practical AI roadmap based on your goals, priorities, and constraints." },
  { icon: <Hammer size={28} />, title: "Build", description: "We implement the automations, AI agents, integrations, and systems the roadmap calls for." },
  { icon: <LineChart size={28} />, title: "Optimize", description: "We measure results and continuously improve the systems — reported to you in plain language." },
];

export const HowItWorks = () => (
  <section className="py-28 md:py-32 bg-noble-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">How It Works</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
          Four Steps. <span className="italic text-noble-gold">Fully Managed.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 bg-noble-dark border border-white/5 rounded-[2rem]"
          >
            <span className="absolute top-6 right-8 text-5xl font-serif text-white/5">{i + 1}</span>
            <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold mb-6 relative z-10">
              {s.icon}
            </div>
            <h3 className="text-2xl font-serif text-white mb-3 relative z-10">{s.title}</h3>
            <p className="text-gray-500 font-light leading-relaxed relative z-10">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* Shared spotlight shell — 6-9. */
interface SpotlightProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  points: string[];
  href: string;
  cta: string;
  reverse?: boolean;
  dark?: boolean;
}

const Spotlight = ({ eyebrow, title, description, points, href, cta, reverse, dark }: SpotlightProps) => (
  <section className={`py-24 relative overflow-hidden ${dark ? "bg-noble-dark" : "bg-noble-black"}`}>
    <div className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">{eyebrow}</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">{title}</h2>
        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">{description}</p>
        <a href={href} className="inline-flex items-center gap-2 text-noble-gold font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all">
          {cta} <ArrowRight size={14} />
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="p-10 bg-noble-black border border-white/5 rounded-[2.5rem]"
      >
        <ul className="space-y-5">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-4 text-gray-300">
              <Check className="text-noble-gold shrink-0 mt-1" size={20} />
              <span className="font-light">{point}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

/* 6. AI Consultancy spotlight */
export const AiConsultancySpotlight = () => (
  <Spotlight
    eyebrow="AI Consultancy"
    title={<>The Strategy Is Ours. <span className="italic text-noble-gold">The Roadmap Is Yours to Act On.</span></>}
    description="We help you understand where AI actually fits your business — realistic opportunities weighed against real tradeoffs — then hand you a practical roadmap for adopting it."
    points={[
      "AI readiness assessment",
      "Opportunity identification, specific to your business",
      "A practical implementation roadmap",
      "Plain-language guidance on adoption, not jargon",
    ]}
    href="/ai-consultancy"
    cta="See How AI Consultancy Works"
  />
);

/* 7. AI Automation spotlight */
export const AiAutomationSpotlight = () => (
  <Spotlight
    eyebrow="AI Automation"
    title={<>Less Repetitive Work. <span className="italic text-noble-gold">More Time on What Matters.</span></>}
    description="We identify the repetitive, manual work already happening in your business and build automated systems that handle it — connected to the tools you already use, not replacing them."
    points={[
      "Workflow and business process automation",
      "Repetitive task automation",
      "CRM and lead automation",
      "Internal workflow optimization",
    ]}
    href="/ai-automation"
    cta="See What We Automate"
    reverse
    dark
  />
);

/* 8. AI Agents spotlight */
export const AiAgentsSpotlight = () => (
  <Spotlight
    eyebrow="AI Agents"
    title={<>An AI That <span className="italic text-noble-gold">Actually Handles the Work.</span></>}
    description="Custom AI agents that answer questions, qualify leads, book appointments, and support your team — built around how your business actually operates, not a generic chatbot."
    points={[
      "AI customer-service agents",
      "AI sales and lead-qualification agents",
      "AI appointment and booking agents",
      "Internal AI assistants",
    ]}
    href="/ai-agents"
    cta="See What AI Agents Can Do"
  />
);

/* 9. AI-Powered Marketing spotlight */
export const AiMarketingSpotlight = () => (
  <Spotlight
    eyebrow="AI-Powered Marketing"
    title={<>Marketing Is an <span className="italic text-noble-gold">Application of AI</span> — Not the Whole Company.</>}
    description="Content systems, automation, and lead generation, built and managed with AI doing the heavy lifting — one connected system instead of six disconnected tools."
    points={[
      "AI content systems",
      "Marketing automation",
      "Lead-generation systems",
      "AI-assisted campaign optimization",
    ]}
    href="/services#ai-marketing"
    cta="See AI-Powered Marketing"
    reverse
    dark
  />
);

/* 9b. AI Strategy Session spotlight — the flagship bookable product of the
   AI Consultancy pillar: a standalone paid session, not part of the
   managed-service stack above, so it's called out with its own framing. */
export const AiStrategySessionSpotlight = () => (
  <Spotlight
    eyebrow="AI Strategy Session"
    title={<>One Problem. <span className="italic text-noble-gold">One Clear Plan.</span></>}
    description="The fastest way to start: a single, private consulting session where you bring one business problem or AI idea and leave with a structured decision and a written action plan."
    points={[
      "One private, one-on-one video consultation",
      "Realistic AI opportunities weighed against real tradeoffs",
      "Prioritized next steps, not just observations",
      "A written action plan delivered after the call",
    ]}
    href="/ai-strategy-session"
    cta="See Session Options & Book"
  />
);

/* 10. Why NobleWave */
const reasons = [
  "Practical AI implementation, not hype or buzzwords",
  "A clear roadmap before any building starts",
  "Systems connected to how you already work, not more logins",
  "Honest about where AI fits — and where it doesn't",
  "Clear, plain-language reporting on what's actually working",
  "Local GTA support from a real person",
];

export const WhyNobleWave = () => (
  <section className="py-28 md:py-32 bg-noble-black relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Why NobleWave</span>
      <h2 className="text-5xl md:text-6xl font-serif mt-6 mb-16 text-white leading-tight">
        No Confusing <span className="italic text-noble-gold">AI Hype.</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 text-left max-w-3xl mx-auto">
        {reasons.map((r) => (
          <div key={r} className="flex items-start gap-4">
            <Check className="text-noble-gold shrink-0 mt-1" size={20} />
            <span className="text-gray-300 text-lg font-light">{r}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* 11. Final CTA */
export const FinalCTA = () => (
  <section className="py-28 noble-gradient relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-5xl md:text-6xl font-serif mb-8 text-white leading-tight">
        Ready to Put AI to Work <span className="italic text-noble-gold">in Your Business?</span>
      </h2>
      <p className="text-gray-300 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
        Tell us where your business is today. We'll identify where AI can make the biggest difference — and build the systems to make it happen.
      </p>
      <motion.a
        href="/ai-strategy-session"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-track="cta"
        className="inline-block bg-noble-gold text-noble-black px-12 py-6 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-white transition-all"
      >
        Book an AI Consultation
      </motion.a>
    </div>
  </section>
);
