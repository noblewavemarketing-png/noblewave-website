import { motion } from "motion/react";
import {
  Search, Globe, PenTool, MapPin, Video, TrendingUp, Cable,
  Compass, Hammer, Cog, LineChart,
  EyeOff, MousePointerClick, CalendarX, Bot, Unplug, PhoneMissed,
  ArrowRight, Check,
} from "lucide-react";

/* 1. Announcement bar — rendered inside Header (withAnnouncement) so it moves
   with the fixed nav instead of sitting behind it. See Hero.tsx. */

/* 3. Business problems */
const problems = [
  { icon: <EyeOff size={28} />, title: "You're hard to find on Google", description: "Homeowners are searching for what you do right now — if your site isn't structured for it, they find a competitor instead." },
  { icon: <MousePointerClick size={28} />, title: "Your website isn't generating inquiries", description: "Traffic without a clear path to \"call now\" or \"book now\" is just visitors leaving." },
  { icon: <CalendarX size={28} />, title: "Content gets posted inconsistently", description: "A blog post here, a social update there, then nothing for two months — search engines and AI models both notice." },
  { icon: <Bot size={28} />, title: "Competitors are showing up in AI search results", description: "ChatGPT, Gemini, and Google AI Overviews are already recommending businesses. If yours isn't structured to be cited, you're invisible there too." },
  { icon: <Unplug size={28} />, title: "Your marketing tools don't talk to each other", description: "A website here, ads there, social somewhere else — nothing feeding the others, nothing adding up to a system." },
  { icon: <PhoneMissed size={28} />, title: "Leads show up with no strong presence behind them", description: "A lead who Googles you before calling back needs to find something that builds confidence, not a dead-end page." },
];

export const Problems = () => (
  <section className="py-28 md:py-32 bg-noble-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Sound Familiar?</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
          The Same Six Problems, <span className="italic text-noble-gold">Every Time.</span>
        </h2>
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

/* 4. Services overview */
const overviewServices = [
  { icon: <Search size={32} />, title: "AI SEO", description: "Managed search optimization — technical fixes, content strategy, and reporting, without you needing to learn SEO.", href: "/ai-seo" },
  { icon: <Globe size={32} />, title: "Websites", description: "Conversion-focused sites built to turn visitors into calls, with local SEO built in from the start.", href: "/websites" },
  { icon: <PenTool size={32} />, title: "AI Content Creation", description: "Blog posts, service pages, and city pages — researched, written, and published on a schedule.", href: "/services#ai-content" },
  { icon: <MapPin size={32} />, title: "Local SEO", description: "Google Business Profile management, review replies, and the local signals that get you found nearby.", href: "/services#local-seo" },
  { icon: <Cable size={32} />, title: "Technical Infrastructure", description: "Forms wired to your CRM, tracking set up correctly, tools connected — so nothing quietly falls through the cracks.", href: "/services#tech-infrastructure" },
  { icon: <Video size={32} />, title: "AI Video & Social Media", description: "Promotional and short-form video with AI voiceovers, plus a content calendar kept full automatically.", href: "/services#ai-video" },
  { icon: <TrendingUp size={32} />, title: "Lead Generation", description: "Managed paid campaigns delivering qualified, exclusive leads straight to your phone.", href: "/lead-generation" },
];

export const ServicesOverview = () => (
  <section id="services-overview" className="py-28 md:py-32 bg-noble-dark relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-20">
        <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">What We Do</span>
        <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
          One System. <span className="italic text-noble-gold">Seven Working Parts.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
          Everything your business needs to get found, build trust, and generate leads — powered by AI and managed for you.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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

/* 5. How the NobleWave system works */
const steps = [
  { icon: <Compass size={28} />, title: "Discover", description: "We audit your business, website, competitors, and market to find where the real opportunity is." },
  { icon: <Hammer size={28} />, title: "Build", description: "We create the website, strategy, tracking, and content system your business is missing." },
  { icon: <Cog size={28} />, title: "Automate", description: "SEO, publishing, social content, and lead workflows get connected so nothing depends on you remembering." },
  { icon: <LineChart size={28} />, title: "Grow", description: "We monitor performance and keep improving the system — reported to you in plain language, monthly." },
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

/* 6. AI SEO spotlight */
export const AiSeoSpotlight = () => (
  <Spotlight
    eyebrow="AI SEO"
    title={<>The Strategy Is <span className="italic text-noble-gold">Ours.</span> The Heavy Lifting Is AI's.</>}
    description="NobleWave manages your SEO strategy end to end — research, content, technical fixes, and tracking, handled continuously by our team instead of once a quarter."
    points={[
      "Full SEO and GEO website audit",
      "Monthly content strategy, written and published",
      "Technical SEO, metadata, and schema markup",
      "Search performance tracked and reported monthly",
    ]}
    href="/ai-seo"
    cta="See How AI SEO Works"
  />
);

/* 7. Website spotlight */
export const WebsiteSpotlight = () => (
  <Spotlight
    eyebrow="Websites"
    title={<>Built to Convert. <span className="italic text-noble-gold">Built to Rank.</span></>}
    description="A NobleWave website isn't a digital brochure — it's engineered to turn visitors into phone calls, and structured from day one to support everything SEO needs to work."
    points={[
      "Mobile-first, fast-loading, conversion-focused design",
      "Lead forms and click-to-call on every page",
      "Service and location pages built in",
      "Analytics, Search Console, and Google Business connected",
    ]}
    href="/websites"
    cta="See What's Included"
    reverse
    dark
  />
);

/* 8. AI content and video spotlight */
export const ContentVideoSpotlight = () => (
  <Spotlight
    eyebrow="AI Content & Video"
    title={<>One Idea. <span className="italic text-noble-gold">Six Pieces of Content.</span></>}
    description="A single business update — a new service, a finished job, a seasonal promotion — gets turned into everything your presence needs, without you writing or filming any of it yourself."
    points={[
      "A blog post and a website FAQ",
      "A Google Business post",
      "Social media posts, captioned and scheduled",
      "A short-form video with an AI voiceover",
    ]}
    href="/services#ai-content"
    cta="See How Content Automation Works"
  />
);

/* 9. Lead-generation spotlight */
export const LeadGenSpotlight = () => (
  <Spotlight
    eyebrow="Lead Generation"
    title={<>Qualified Leads. <span className="italic text-noble-gold">Never Shared.</span></>}
    description="Our original service, still one of the strongest: managed paid campaigns that put you in front of homeowners actively looking for what you do, with qualification built in before a lead ever reaches your phone."
    points={[
      "Paid campaigns built and managed for you",
      "Homeowner qualification before delivery",
      "Real-time delivery — exclusive, never resold",
      "Targeted to your trade and service area",
    ]}
    href="/lead-generation"
    cta="See How Lead Generation Works"
    reverse
    dark
  />
);

/* 9b. AI Strategy Session spotlight — a standalone paid consulting session,
   not part of the managed-service stack above, so it's called out
   separately with its own clear framing. */
export const AiStrategySessionSpotlight = () => (
  <Spotlight
    eyebrow="AI Strategy Session"
    title={<>One Problem. <span className="italic text-noble-gold">One Clear Plan.</span></>}
    description="Not a managed service — a single, private consulting session where you bring one business problem or AI idea and leave with a structured decision and a written action plan."
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
  "Managed for you — not another login to maintain",
  "One connected growth system, not disconnected tools",
  "Built for local businesses, not enterprise budgets",
  "Clear, plain-language reporting every month",
  "Practical AI implementation, not buzzwords",
  "Local GTA support from a real person",
];

export const WhyNobleWave = () => (
  <section className="py-28 md:py-32 bg-noble-black relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
      <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">Why NobleWave</span>
      <h2 className="text-5xl md:text-6xl font-serif mt-6 mb-16 text-white leading-tight">
        No Confusing <span className="italic text-noble-gold">Agency Jargon.</span>
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
        Ready to Build a <span className="italic text-noble-gold">Smarter Growth System?</span>
      </h2>
      <p className="text-gray-300 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
        Tell us where your business is today. We'll identify the best opportunities across your website, SEO, content, and lead generation.
      </p>
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        data-track="cta"
        className="inline-block bg-noble-gold text-noble-black px-12 py-6 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:bg-white transition-all"
      >
        Book Your Free Strategy Call
      </motion.a>
    </div>
  </section>
);
