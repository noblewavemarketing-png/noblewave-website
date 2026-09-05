import { motion } from "motion/react";
import {
  Search, Globe, PhoneCall, Workflow, PenTool,
  ArrowRight, ArrowDown, Check, CheckCircle2,
  Compass, Hammer, Rocket, LineChart,
  Megaphone, ExternalLink, ChevronDown,
} from "lucide-react";

/* 1. Announcement bar — rendered inside Header (withAnnouncement) so it moves
   with the fixed nav instead of sitting behind it. See Hero.tsx. */

/* 2. The NobleWave System — doubles as the hero's companion visual (it's the
   first thing after the hero) and the dedicated "one connected system"
   section from the brief. Five nodes, connected, not five separate services. */
const systemNodes = [
  { icon: <Search size={24} />, title: "Search", description: "Customer discovers the business." },
  { icon: <Globe size={24} />, title: "Website", description: "Customer understands the offer." },
  { icon: <PhoneCall size={24} />, title: "AI Voice", description: "Every opportunity gets handled." },
  { icon: <Workflow size={24} />, title: "Automation", description: "Leads are organized and followed up." },
  { icon: <PenTool size={24} />, title: "Content", description: "Visibility keeps building, on its own." },
];

export const SystemFlow = () => (
  <section id="system" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-black relative overflow-hidden scroll-mt-20">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-10 md:mb-16">
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">The NobleWave System</span>
        <h2 className="text-4xl md:text-6xl font-serif mt-6 text-white leading-tight">
          One Connected <span className="italic text-noble-blue">Growth System.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
          Instead of stitching together agencies, freelancers, and disconnected tools, NobleWave designs and implements the digital system around your business.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-stretch gap-3 lg:gap-0">
        {systemNodes.map((node, i) => (
          <div key={node.title} className="flex flex-col lg:flex-row items-center flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="w-full p-6 bg-noble-dark border border-white/5 rounded-[1.75rem] text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-noble-blue/10 flex items-center justify-center text-noble-blue mb-4">
                {node.icon}
              </div>
              <h3 className="text-base font-serif text-white mb-1">{node.title}</h3>
              <p className="text-gray-500 text-xs font-light leading-snug">{node.description}</p>
            </motion.div>
            {i < systemNodes.length - 1 && (
              <div className="text-noble-blue/40 shrink-0 py-2 lg:py-0 lg:px-2" aria-hidden="true">
                <ArrowDown size={18} className="lg:hidden" />
                <ArrowRight size={18} className="hidden lg:block" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* 3. Outcome 1 — Get Found (Websites + AI Search). */
const getFoundPoints = [
  "Premium business websites",
  "AI SEO & technical SEO",
  "Local SEO & Google Business alignment",
  "Search architecture & schema",
  "Analytics & Search Console",
  "Conversion-focused design",
];

export const GetFound = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-dark relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Get Found</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">
          Websites <span className="italic text-noble-blue">+ AI Search.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          Build a digital presence designed to be discovered — and designed to convert when customers arrive.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-left max-w-xl mx-auto">
          {getFoundPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-300 text-sm">
              <Check className="text-noble-blue shrink-0 mt-0.5" size={16} />
              <span className="font-light">{point}</span>
            </li>
          ))}
        </ul>
        <a href="/websites" className="inline-flex items-center gap-2 text-noble-blue font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all">
          See What We Build <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

/* 4. Outcome 2 — Capture Every Lead (AI Voice + automation), made tangible
   with a simulated incoming-call transcript rather than an abstract graphic. */
const captureLeadPoints = [
  "24/7 AI receptionist",
  "Natural voice conversations",
  "Lead qualification",
  "Appointment booking",
  "Call summaries & follow-up",
  "CRM integration",
];

export const CaptureEveryLead = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="lg:order-2"
      >
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Capture Every Lead</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">
          AI Voice <span className="italic text-noble-blue">+ Lead Automation.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
          Your business shouldn't lose opportunities because nobody answered the phone.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
          {captureLeadPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-300 text-sm">
              <Check className="text-noble-blue shrink-0 mt-0.5" size={16} />
              <span className="font-light">{point}</span>
            </li>
          ))}
        </ul>
        <a href="/ai-voice" className="inline-flex items-center gap-2 text-noble-blue font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all">
          See How AI Voice Works <ArrowRight size={14} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="lg:order-1 rounded-[1.75rem] overflow-hidden border border-white/10 bg-noble-dark shadow-2xl p-8 md:p-10"
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-noble-blue opacity-60" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-noble-blue" />
          </span>
          <span className="text-white font-serif text-lg">Incoming Call</span>
        </div>
        <div className="bg-noble-black border border-white/5 rounded-2xl p-5 mb-6">
          <p className="text-gray-300 text-sm font-light italic leading-relaxed">
            &ldquo;Hi, I&apos;m looking for an estimate on a new furnace installation...&rdquo;
          </p>
        </div>
        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-full bg-noble-blue/10 flex items-center justify-center text-noble-blue shrink-0">
            <PhoneCall size={14} />
          </div>
          <span className="text-noble-blue text-xs font-bold uppercase tracking-widest">AI Agent</span>
        </div>
        <ul className="space-y-3">
          {["Service identified", "Appointment requested", "Contact information captured", "Lead qualified"].map((item) => (
            <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
              <CheckCircle2 className="text-noble-blue shrink-0" size={16} />
              <span className="font-light">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </section>
);

/* 5. Outcome 3 — Stay Visible (content automation), shown as one input
   fanning out into everything a business's presence needs. */
const stayVisiblePoints = [
  "SEO articles",
  "Social posts, scheduled and published",
  "Short-form video",
  "Google Business content",
  "FAQs & website updates",
  "Content repurposing",
];

const contentOutputs = ["Blog Article", "Social Post", "Short Video", "Google Business Post", "FAQ", "Website Update"];

export const StayVisible = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-dark relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Stay Visible</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">
          One Idea. <span className="italic text-noble-blue">A Month of Content.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
          Stay active online without spending every week creating content yourself.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10">
          {stayVisiblePoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-300 text-sm">
              <Check className="text-noble-blue shrink-0 mt-0.5" size={16} />
              <span className="font-light">{point}</span>
            </li>
          ))}
        </ul>
        <a href="/content-automation" className="inline-flex items-center gap-2 text-noble-blue font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all">
          See How Content Automation Works <ArrowRight size={14} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="rounded-[1.75rem] border border-white/10 bg-noble-black shadow-2xl p-8 md:p-10 text-center"
      >
        <div className="inline-block px-5 py-2.5 bg-noble-blue/10 border border-noble-blue/30 rounded-full text-noble-blue text-sm font-bold mb-4">
          One Business Update
        </div>
        <ArrowDown className="mx-auto text-gray-600 mb-4" size={18} aria-hidden="true" />
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white text-sm font-bold mb-6">
          <PenTool size={14} className="text-noble-blue" /> AI Content Engine
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
          {contentOutputs.map((output) => (
            <span key={output} className="px-3 py-2.5 bg-noble-dark border border-white/5 rounded-xl text-gray-300 text-xs font-light">
              {output}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-2 text-noble-blue text-xs font-bold uppercase tracking-widest">
          <CheckCircle2 size={14} /> Scheduled &amp; Published
        </span>
      </motion.div>
    </div>
  </section>
);

/* 5b. Outcome 4 — Paid Media (Meta & Google Ads). SEO and content take
   months to compound; this is the outcome for businesses that need
   qualified traffic while that foundation is being built. */
const paidMediaPoints = [
  "Google Search & Local Services Ads",
  "Meta (Facebook & Instagram) lead campaigns",
  "Conversion tracking set up correctly from day one",
  "Budgets targeted at your actual service area",
  "Plain-language weekly reporting, not a black box",
  "Paused the moment it stops paying for itself",
];

export const PaidMedia = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-black relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Megaphone className="mx-auto text-noble-blue mb-6" size={36} aria-hidden="true" />
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Show Up Now</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">
          Meta &amp; Google Ads <span className="italic text-noble-blue">While SEO Catches Up.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed max-w-2xl mx-auto">
          SEO and content compound over months. Paid media puts you in front of buyers this
          week — run properly, measured honestly, and never left on autopilot.
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 text-left max-w-xl mx-auto">
          {paidMediaPoints.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-300 text-sm">
              <Check className="text-noble-blue shrink-0 mt-0.5" size={16} />
              <span className="font-light">{point}</span>
            </li>
          ))}
        </ul>
        <a href="/free-audit" className="inline-flex items-center gap-2 text-noble-blue font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all">
          Get Your Free Ads &amp; SEO Audit <ArrowRight size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

/* 5c. Proof — a real, verifiable build instead of manufactured stats. Links
   out to the actual live site so it's independently checkable, not just a
   claim. */
export const Proof = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-dark relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Proof, Not Promises</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-6 text-white leading-tight">
          Built For a <span className="italic text-noble-blue">Real GTA Business.</span>
        </h2>
        <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          This is the same system described above, already running for a real HVAC company
          in the GTA — full technical SEO foundation (schema markup, sitemap, breadcrumbs),
          a live blog with real published articles, an active Google Business Profile, and
          analytics wired in from day one. Not a mockup — you can visit it right now.
        </p>
        <a
          href="https://sohvac.ca"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-noble-blue font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all"
        >
          See the Live Site <ExternalLink size={14} />
        </a>
      </motion.div>
    </div>
  </section>
);

/* 6. Process — from problem to working system. */
const steps = [
  { icon: <Compass size={28} />, title: "Discover", description: "We identify where your business is losing visibility, leads, or time." },
  { icon: <Rocket size={28} />, title: "Design", description: "We design the right website, search, and automation architecture." },
  { icon: <Hammer size={28} />, title: "Build", description: "NobleWave implements and connects the system." },
  { icon: <LineChart size={28} />, title: "Grow", description: "SEO, content, and automation continue improving the digital presence." },
];

export const Process = () => (
  <section className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-black relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-10 md:mb-16">
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Process</span>
        <h2 className="text-4xl md:text-6xl font-serif mt-6 text-white leading-tight">
          From Problem to <span className="italic text-noble-blue">Working System.</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative p-8 bg-noble-dark border border-white/5 rounded-[2rem]"
          >
            <span className="absolute top-6 right-8 text-5xl font-serif text-white/5">{`0${i + 1}`}</span>
            <div className="w-14 h-14 rounded-2xl bg-noble-blue/10 flex items-center justify-center text-noble-blue mb-6 relative z-10">
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

/* 6b. FAQ — answers the objections that stall a "book a call" click, and
   doubles as FAQPage structured data (kept in sync with index.html). */
const homeFaqs = [
  {
    q: "What does NobleWave actually do?",
    a: "One connected system for getting found and staying visible online: a real website, technical and AI-aware SEO, an AI voice agent that answers every call, ongoing content and social publishing, and — when it makes sense — Meta and Google ads on top.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Local and home-service businesses across the GTA — HVAC, plumbing, electrical, and similar trades — where showing up in local search and answering the phone directly drives revenue.",
  },
  {
    q: "Do you do paid ads, or just SEO?",
    a: "Both. SEO and content build compounding, long-term visibility. Meta and Google ads get you in front of buyers immediately while that foundation is being built.",
  },
  {
    q: "How much does this cost?",
    a: "It depends on what your business actually needs, so we don't publish a number here. Start with a free audit and we'll tell you plainly what we'd recommend and what it costs.",
  },
  {
    q: "Can you take over my existing website, ads, or Google Business Profile?",
    a: "Yes. We start with an audit of what's already there — no need to rebuild from zero unless that's genuinely the right call.",
  },
  {
    q: "Do you guarantee rankings or results?",
    a: "No one honestly can — anyone who guarantees a #1 Google ranking is guessing. What we do commit to: the work gets done, reported monthly, and prioritized around what's actually moving the needle.",
  },
  {
    q: "How long before I see results?",
    a: "Paid ads can bring in leads within days. SEO and content typically take a few months to compound — which is exactly why we usually recommend running both together.",
  },
  {
    q: "Where is NobleWave based?",
    a: "Mississauga, Ontario, serving businesses across the Greater Toronto Area.",
  },
];

export const HomeFAQ = () => (
  <section id="faq" className="py-14 sm:py-20 md:py-24 lg:py-28 bg-noble-dark scroll-mt-20">
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-10 md:mb-16">
        <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">FAQ</span>
        <h2 className="text-4xl md:text-5xl font-serif mt-6 text-white leading-tight">
          Questions, <span className="italic text-noble-blue">Answered.</span>
        </h2>
      </div>
      <div className="space-y-4">
        {homeFaqs.map((item) => (
          <details
            key={item.q}
            className="group bg-noble-black border border-white/5 rounded-2xl p-6 open:border-noble-blue/40"
          >
            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-serif text-lg text-white">
              {item.q}
              <ChevronDown
                className="text-noble-blue shrink-0 transition-transform group-open:rotate-180"
                size={20}
                aria-hidden="true"
              />
            </summary>
            <p className="text-gray-400 font-light leading-relaxed mt-4">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

/* 7. Final CTA */
export const FinalCTA = () => (
  <section className="py-14 sm:py-20 md:py-24 noble-gradient relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
      <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight">
        Your Business Shouldn&apos;t Have to <span className="italic text-noble-blue">Chase Technology.</span>
      </h2>
      <p className="text-gray-300 text-xl mb-12 font-light leading-relaxed max-w-2xl mx-auto">
        NobleWave builds the digital systems so you can focus on running the business.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <motion.a
          href="/ai-strategy-session"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          data-track="cta"
          className="inline-block bg-noble-blue text-noble-black px-12 py-6 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(62,123,250,0.3)] hover:bg-white transition-all"
        >
          Book an AI Consultation
        </motion.a>
        <a
          href="/contact"
          className="inline-flex items-center justify-center border border-white/30 text-white px-12 py-6 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
        >
          Tell Us What You&apos;re Trying to Fix
        </a>
      </div>
    </div>
  </section>
);
