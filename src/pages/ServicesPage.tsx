import { motion } from "motion/react";
import { Check, ArrowRight, Search, PenTool, MapPin, Sparkles, Globe, Cable, Video, Share2, TrendingUp } from "lucide-react";
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
    id: "ai-seo",
    icon: <Search size={32} />,
    title: "Fully Managed AI SEO",
    problem: "You know you need SEO, but you don't have time to research keywords, write content, and fix technical issues every month — and hiring that out is usually a black box you pay for and never understand.",
    provides: "NobleWave manages your SEO strategy end to end. You're onboarded into our managed AI SEO system — we handle the research, drafting, optimization, and tracking, so it's never a separate product you have to manage yourself.",
    included: [
      "SEO and GEO website audits",
      "Keyword and competitor research",
      "Monthly SEO content strategy",
      "Technical SEO improvements",
      "Metadata and schema markup",
      "Internal linking",
      "Service-page optimization",
      "Location and city pages",
      "Search performance tracking",
      "Monthly reporting",
    ],
    benefit: "A search presence that improves month over month, without it costing you any of your own time.",
    ctaLabel: "See the Full AI SEO Page",
    ctaHref: "/ai-seo",
  },
  {
    id: "ai-content",
    icon: <PenTool size={32} />,
    title: "AI Content Creation and Auto-Publishing",
    problem: "Content only works when it's consistent, and consistency is exactly what falls off when you're running a business.",
    provides: "We research, write, and publish content built around your services and area — brand-aligned, kept current, and published on a schedule instead of whenever someone remembers to.",
    included: [
      "SEO blog writing",
      "Service pages",
      "City landing pages",
      "FAQs",
      "Website content",
      "Brand-aligned tone and voice",
      "Scheduled content refreshes",
      "Automatic publishing, with optional human approval",
      "WordPress, Shopify, Webflow, and other supported CMS integrations",
    ],
    benefit: "A content presence that keeps growing whether or not you have time to think about it that week.",
    ctaLabel: "Talk to Us About Content",
    ctaHref: "/contact",
  },
  {
    id: "local-seo",
    icon: <MapPin size={32} />,
    title: "Local SEO and Google Business Profile Management",
    problem: "Most of your customers are searching \"near me,\" and an unmanaged or incomplete Google Business Profile is the fastest way to lose them to a competitor who shows up first.",
    provides: "We manage your Google Business Profile as an ongoing job, not a one-time setup — kept accurate, posted to regularly, and monitored for how you actually show up in local search and Maps.",
    included: [
      "Google Business Profile optimization",
      "Scheduled Google Business posts",
      "Business information and service updates",
      "AI-assisted review replies",
      "Local keyword research",
      "City and service-area targeting",
      "Google Maps visibility monitoring",
      "Local SEO reporting",
    ],
    benefit: "Stronger visibility in the local searches and map results your actual customers are using.",
    ctaLabel: "Ask About Local SEO",
    ctaHref: "/contact",
  },
  {
    id: "ai-search",
    icon: <Sparkles size={32} />,
    title: "AI Search Optimization (GEO & AEO)",
    problem: "Search isn't only Google anymore — ChatGPT, Gemini, and other AI tools are already answering \"who should I hire for this,\" and most local businesses aren't structured to be part of that answer.",
    provides: "In plain terms: SEO gets you found on Google, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) get you cited by AI tools when someone asks them a question instead of typing a search. We structure your content so both can find and use it.",
    included: [
      "ChatGPT visibility optimization",
      "Google AI visibility",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Citation-friendly content structure",
      "Structured questions and answers",
      "Brand mention tracking",
      "Visibility tracking across ChatGPT, Gemini, Claude, Perplexity, and Google AI",
    ],
    benefit: "A presence in front of the growing share of people asking AI tools for recommendations instead of searching.",
    ctaLabel: "See the Full AI SEO Page",
    ctaHref: "/ai-seo",
  },
  {
    id: "websites",
    icon: <Globe size={32} />,
    title: "Fully Built and SEO-Optimized Websites",
    problem: "A website that looks fine but doesn't convert, doesn't rank, or doesn't connect to anything else you do is a cost, not an asset.",
    provides: "We plan, build, and set up a complete website — designed to convert visitors into calls and inquiries, and structured from day one to support the SEO and content work around it.",
    included: [
      "Complete website strategy and setup",
      "Conversion-focused design",
      "Mobile-first development",
      "Fast-loading pages",
      "SEO-friendly structure",
      "Service and location pages",
      "Lead forms",
      "Click-to-call buttons",
      "Metadata and schema",
      "Google Search Console setup",
      "Analytics and conversion tracking",
      "Domain and hosting setup",
      "Google Business Profile connection",
      "Automated content integration",
    ],
    benefit: "A site that does the job a website is supposed to do: turn visitors into customers.",
    ctaLabel: "See the Full Websites Page",
    ctaHref: "/websites",
  },
  {
    id: "tech-infrastructure",
    icon: <Cable size={32} />,
    title: "Technical Infrastructure & Integrations",
    problem: "A lead fills out a form and it sits in an inbox nobody checks. A booking gets made and nothing tracks it. Your website, your CRM, and your ads don't talk to each other, so nothing adds up to a system.",
    provides: "We wire the parts together — forms connected to your CRM or inbox, tracking set up correctly, domain and email configured properly — so a lead or a booking actually goes somewhere instead of disappearing.",
    included: [
      "Forms connected to your CRM or inbox",
      "Analytics and conversion tracking, set up correctly",
      "Domain, email, and hosting configuration",
      "Booking and lead-capture wired end to end",
      "Tools connected instead of running in isolation",
      "Ongoing monitoring, so a broken form gets caught before you lose leads to it",
    ],
    benefit: "Every lead and every booking lands somewhere real — nothing quietly falls through the cracks.",
    ctaLabel: "Ask About Your Setup",
    ctaHref: "/contact",
  },
  {
    id: "ai-video",
    icon: <Video size={32} />,
    title: "AI Video Generation",
    problem: "Video works better than almost anything else for trust and attention — and it's also the content type small businesses skip because filming and editing take real time and skill.",
    provides: "We produce video content using AI generation and voiceover tools, built from your business's own information and branding, without you needing a camera crew.",
    included: [
      "Promotional videos",
      "Service explainer videos",
      "Short-form vertical videos",
      "Social media videos",
      "AI voiceovers",
      "Captions",
      "Branded templates",
      "Video repurposing across formats",
    ],
    benefit: "A steady supply of video content for your website and social channels, without production overhead.",
    ctaLabel: "Ask About AI Video",
    ctaHref: "/contact",
  },
  {
    id: "social",
    icon: <Share2 size={32} />,
    title: "Social Media Content and Automatic Posting",
    problem: "Social media only builds trust when it's active — an account that posts twice and goes quiet does more harm than not having one.",
    provides: "We plan, create, and schedule your social content on a calendar, so your profiles stay active and on-brand without you writing captions between jobs. Automatic posting is available where your platform has a supported integration; other platforms are handled subject to that integration being available.",
    included: [
      "AI-generated captions",
      "Social media content calendars",
      "Branded graphics",
      "Short-form videos",
      "Scheduled automatic posting (supported platforms)",
      "Multi-platform repurposing",
      "Promotional and educational campaigns",
      "Monthly content management",
    ],
    benefit: "Active, consistent social profiles that reinforce everything else you're doing, without eating your time.",
    ctaLabel: "Ask About Social Automation",
    ctaHref: "/contact",
  },
  {
    id: "lead-generation",
    icon: <TrendingUp size={32} />,
    title: "Lead Generation",
    problem: "Traffic and visibility are only useful if they turn into actual inquiries — and generic, shared-lead services often mean you're one of five companies calling the same homeowner back.",
    provides: "We build and manage paid ad campaigns that put you in front of people actively looking for what you do, with qualification built in before a lead reaches you.",
    included: [
      "Managed paid advertising",
      "Homeowner qualification",
      "Exclusive leads",
      "Real-time delivery",
      "Trade and service-area targeting",
      "Landing pages",
      "Lead capture",
      "Conversion tracking",
    ],
    benefit: "Qualified inquiries landing directly with you — not guaranteed volume, but a system built to convert what it does bring you.",
    ctaLabel: "See the Full Lead Generation Page",
    ctaHref: "/lead-generation",
  },
];

const ServiceBlock = ({ service, index }: { service: Service; index: number }) => (
  <section id={service.id} className={`py-20 scroll-mt-24 ${index % 2 === 1 ? "bg-noble-dark" : "bg-noble-black"}`}>
    <div className="max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-5 mb-8">
          <div className="w-16 h-16 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold shrink-0">
            {service.icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white">{service.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-noble-gold uppercase tracking-[0.2em] text-xs font-bold mb-3">The Problem</h3>
            <p className="text-gray-400 font-light leading-relaxed">{service.problem}</p>
          </div>
          <div>
            <h3 className="text-noble-gold uppercase tracking-[0.2em] text-xs font-bold mb-3">What NobleWave Provides</h3>
            <p className="text-gray-400 font-light leading-relaxed">{service.provides}</p>
          </div>
        </div>

        <div className="p-8 bg-noble-black border border-white/5 rounded-[2rem] mb-8">
          <h3 className="text-white font-serif text-xl mb-6">What's Included</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {service.included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="text-noble-gold shrink-0 mt-0.5" size={16} />
                <span className="font-light">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 bg-noble-gold/5 border border-noble-gold/20 rounded-2xl">
          <p className="text-gray-300 font-light"><span className="text-noble-gold font-bold">The benefit: </span>{service.benefit}</p>
          <a
            href={service.ctaHref}
            data-track="cta"
            className="inline-flex items-center gap-2 shrink-0 bg-noble-gold text-noble-black px-6 py-3 rounded-full font-bold text-sm hover:bg-white transition-all"
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
        title={<>Everything Your Business Needs to <span className="italic text-noble-gold">Get Found and Grow.</span></>}
        subtitle="Nine connected services, each managed for you. Explore what's included in every one, and where to go for the full picture."
        primaryCta={{ label: "Get a Free Strategy Call", href: "/contact" }}
      />
      {services.map((service, i) => (
        <ServiceBlock key={service.id} service={service} index={i} />
      ))}
    </PageShell>
  );
}
