import { useState } from "react";
import { motion } from "motion/react";
import {
  Compass,
  ClipboardList,
  Video,
  FileText,
  Users,
  ShieldCheck,
  ChevronDown,
  Check,
  Scale,
  Target,
} from "lucide-react";
import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { AiStrategyIntakeForm, SESSION_LABELS } from "../components/AiStrategyIntakeForm";

// Session options — duration, tagline, and inclusions are all set here so
// they're easy to change later. `price` is intentionally left unset: this
// site shows no public pricing anywhere (owner policy, see CLAUDE.md) —
// fill it in and add a rendering branch here once real pricing is approved.
const SESSION_OPTIONS = [
  {
    id: "clarity",
    label: SESSION_LABELS[0],
    name: "AI Clarity Session",
    duration: "45 minutes",
    tagline: "One focused question, answered clearly.",
    bestFor: "A single decision or a quick gut-check before you commit time or budget.",
    price: null as string | null,
    featured: false,
  },
  {
    id: "strategy",
    label: SESSION_LABELS[1],
    name: "AI Strategy Session",
    duration: "60 minutes",
    tagline: "Our most-booked session — enough time to structure a real decision.",
    bestFor: "A workflow, a product idea, or a tool decision with a few moving parts.",
    price: null as string | null,
    featured: true,
  },
  {
    id: "workshop",
    label: SESSION_LABELS[2],
    name: "AI Decision Workshop",
    duration: "90 minutes",
    tagline: "For decisions that involve more than one person.",
    bestFor: "Teams evaluating tools together, or a decision that touches multiple workflows.",
    price: null as string | null,
    featured: false,
  },
];

const outcomes = [
  "A clear, structured picture of the problem — not just more questions",
  "Assumptions separated from facts",
  "Realistic AI opportunities specific to your situation",
  "A straight comparison of the tools or approaches that actually apply",
  "The risks, limitations, and tradeoffs laid out plainly",
  "Prioritized next steps",
  "A written action plan you can act on immediately",
];

const steps = [
  { icon: <Compass size={28} />, title: "Choose a session", description: "Pick the length that fits your problem — 45, 60, or 90 minutes." },
  { icon: <ClipboardList size={28} />, title: "Complete a short intake form", description: "Tell us the problem before we talk, so the session starts at the hard part." },
  { icon: <Video size={28} />, title: "Attend the consultation", description: "A private video call, structured around your specific challenge." },
  { icon: <FileText size={28} />, title: "Receive your action plan", description: "A written summary and prioritized next steps land in your inbox after." },
];

const useCases = [
  "Which parts of my workflow should I automate?",
  "Is this AI product idea practical?",
  "Which AI tools are appropriate for my team?",
  "Should we build a custom solution or use existing software?",
  "How can I introduce AI without creating unnecessary risk?",
  "How should I structure this complicated business decision?",
];

const whoItsFor = [
  "Founders and small-business owners",
  "Independent professionals and consultants",
  "Teams evaluating AI tools together",
  "Anyone deciding whether or how to automate a workflow",
  "Anyone who wants structure before investing in an AI project",
];

const faqs = [
  { q: "What can I bring to the session?", a: "One specific business problem, decision, workflow, product idea, or question about using AI. The session goes deeper on one thing rather than skimming several." },
  { q: "Do I need technical knowledge?", a: "No. The session is conducted in plain business language. You don't need to know how AI works to get value from it." },
  { q: "Will you recommend specific AI tools?", a: "Where appropriate, yes — with the reasoning, tradeoffs, and limitations behind the recommendation, not just a name." },
  { q: "Can you implement the recommendations afterward?", a: "The session itself is strategy and decision support. If implementation makes sense afterward, NobleWave's other services may apply — that's a separate conversation and a separate engagement." },
  { q: "What happens after I book?", a: "You'll receive a short intake questionnaire to complete before the call, so the session starts at the hard part instead of the background. NobleWave confirms your scheduling and session details by email." },
  { q: "What is included in the written summary?", a: "A structured recap of the problem, the options considered, the recommendation and its reasoning, key risks and tradeoffs, and prioritized next steps." },
  { q: "Is my business information kept confidential?", a: "Yes, handled under NobleWave's Privacy Policy. Please don't submit passwords, credentials, regulated personal data, or confidential information you're not authorized to share." },
  { q: "Is this suitable for an entire team?", a: "The 90-minute AI Decision Workshop is built for that — when a decision touches multiple stakeholders or workflows. The other two are built for one decision-maker." },
  { q: "What is the cancellation or rescheduling policy?", a: "Contact NobleWave directly to reschedule or cancel — full policy confirmed when you book." },
];

const SessionCard = ({
  option,
  selected,
  onSelect,
}: {
  option: (typeof SESSION_OPTIONS)[number];
  selected: boolean;
  onSelect: () => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`p-10 rounded-[2.5rem] border flex flex-col text-left transition-all ${
      option.featured || selected
        ? "border-noble-blue bg-noble-dark shadow-[0_0_60px_rgba(62,123,250,0.15)]"
        : "border-white/10 bg-noble-dark"
    }`}
  >
    {option.featured && (
      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full mb-6 self-start bg-noble-blue text-noble-black">
        Most Booked
      </span>
    )}
    <h3 className="text-2xl font-serif text-white mb-1">{option.name}</h3>
    <p className="text-noble-blue text-sm font-bold uppercase tracking-widest mb-6">{option.duration}</p>
    <p className="text-gray-400 mb-4 font-light">{option.tagline}</p>
    <p className="text-gray-500 text-sm font-light mb-8 flex-grow">Best for: {option.bestFor}</p>
    <p className="text-gray-500 text-sm font-light mb-6">
      {option.price ?? "Request a quote"}
    </p>
    <button
      type="button"
      onClick={onSelect}
      data-track="cta"
      className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${
        option.featured || selected
          ? "bg-noble-blue text-noble-black hover:bg-white"
          : "border border-white/20 text-white hover:bg-white/5"
      }`}
    >
      {selected ? "Selected — Scroll to Book" : "Request This Session"}
    </button>
  </motion.div>
);

export default function AiStrategySessionPage() {
  const [selectedSession, setSelectedSession] = useState<(typeof SESSION_LABELS)[number]>(SESSION_LABELS[1]);

  const chooseSession = (label: (typeof SESSION_LABELS)[number]) => {
    setSelectedSession(label);
    document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <PageShell>
      <PageHeader
        eyebrow="AI Strategy Session"
        title={<>Bring One Problem. <span className="italic text-noble-blue">Leave With a Plan.</span></>}
        subtitle="Bring us a complicated business problem or AI idea. Leave with clarity, a structured decision, and an actionable plan — in a private, one-on-one session, not a generic workshop."
        primaryCta={{ label: "Book a Session", href: "#book" }}
        secondaryCta={{ label: "See Session Options", href: "#sessions" }}
      />

      {/* Session options */}
      <section id="sessions" className="py-24 md:py-28 bg-noble-black scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Choose a Session</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
              Structured Time, <span className="italic text-noble-blue">Sized to the Decision.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-light leading-relaxed">
              This is human-led decision support — the AI helps structure the problem, it doesn't decide for you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SESSION_OPTIONS.map((option) => (
              <SessionCard
                key={option.id}
                option={option}
                selected={selectedSession === option.label}
                onSelect={() => chooseSession(option.label)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What you'll leave with */}
      <section className="py-24 md:py-28 bg-noble-dark">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">The Outcome</span>
              <h2 className="text-4xl md:text-5xl font-serif mt-6 mb-8 text-white leading-tight">
                What You&apos;ll <span className="italic text-noble-blue">Leave With.</span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Not a lecture on what AI can do in general — a structured answer to the one problem you brought in.
              </p>
            </div>
            <ul className="space-y-5">
              {outcomes.map((item) => (
                <li key={item} className="flex items-start gap-4 text-gray-300">
                  <Check className="text-noble-blue shrink-0 mt-1" size={20} />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">How It Works</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
              Four Steps. <span className="italic text-noble-blue">Nothing Wasted.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-noble-dark border border-white/5 rounded-[2rem]"
              >
                <span className="text-noble-blue font-serif text-3xl italic">{i + 1}</span>
                <div className="text-noble-blue mt-4 mb-4">{step.icon}</div>
                <h3 className="text-xl font-serif text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example use cases */}
      <section className="py-24 md:py-28 bg-noble-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Bring Something Like This</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
              Real Questions. <span className="italic text-noble-blue">One at a Time.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((q) => (
              <div key={q} className="p-8 bg-noble-black border border-white/5 rounded-[2rem]">
                <p className="text-white text-lg font-serif italic leading-relaxed">&ldquo;{q}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <Users className="mx-auto text-noble-blue mb-6" size={40} />
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Who It&apos;s For</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
              Built for People Making <span className="italic text-noble-blue">a Real Decision.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {whoItsFor.map((item) => (
              <div key={item} className="flex items-start gap-4 p-6 bg-noble-dark border border-white/5 rounded-2xl">
                <Target className="text-noble-blue shrink-0 mt-1" size={20} />
                <span className="text-gray-300 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 md:py-28 bg-noble-dark scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">FAQ</span>
            <h2 className="text-5xl md:text-6xl font-serif mt-6 text-white leading-tight">
              Questions, <span className="italic text-noble-blue">Answered.</span>
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
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

      {/* Boundaries / scope */}
      <section className="py-16 bg-noble-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 md:p-10 bg-noble-dark border border-white/5 rounded-[2rem] flex flex-col md:flex-row gap-6">
            <ShieldCheck className="text-noble-blue shrink-0" size={28} aria-hidden="true" />
            <div>
              <h3 className="text-white font-serif text-xl mb-4">What This Session Is — and Isn&apos;t</h3>
              <ul className="space-y-3 text-gray-500 text-sm font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <Scale className="text-gray-600 shrink-0 mt-0.5" size={16} />
                  This session provides strategic guidance and decision support — not a guaranteed outcome.
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="text-gray-600 shrink-0 mt-0.5" size={16} />
                  Results depend on your specific circumstances and how any recommendation is implemented.
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="text-gray-600 shrink-0 mt-0.5" size={16} />
                  This is not legal, medical, financial, or other regulated professional advice.
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="text-gray-600 shrink-0 mt-0.5" size={16} />
                  The final business decision is always yours to make.
                </li>
                <li className="flex items-start gap-3">
                  <Scale className="text-gray-600 shrink-0 mt-0.5" size={16} />
                  Your information is handled under NobleWave&apos;s{" "}
                  <a href="/privacy" className="text-noble-blue hover:underline">Privacy Policy</a>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / intake */}
      <section id="book" className="py-24 md:py-28 bg-noble-dark scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-noble-blue uppercase tracking-[0.3em] text-xs font-bold">Book a Session</span>
              <h2 className="text-5xl md:text-6xl font-serif mt-6 mb-10 text-white">
                Tell Us the <br />
                <span className="italic text-noble-blue">Problem First.</span>
              </h2>
              <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
                Submit the intake form below and we&apos;ll confirm your session time and next
                steps by email within one business day — no online checkout, just a quick
                conversation to get you scheduled.
              </p>
              <div className="space-y-6 text-gray-500 text-sm font-light">
                <p>
                  Call <a href="tel:6476735748" className="text-noble-blue hover:text-white transition-colors">647-673-5748</a> or
                  email <a href="mailto:noblewavemarketing@gmail.com" className="text-noble-blue hover:text-white transition-colors">noblewavemarketing@gmail.com</a> if
                  you&apos;d rather set this up directly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-noble-black p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
            >
              <AiStrategyIntakeForm defaultSession={selectedSession} />
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
