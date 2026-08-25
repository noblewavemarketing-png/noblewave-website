import { useEffect, useState } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldAlert,
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

// Same inbox as the general contact form — this project has no separate
// booking/payment system, so every product on this site routes through a
// form to manual follow-up. Distinguished from general leads by _subject
// and the "product" field so they're easy to spot in the inbox.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojrlvga";

export const SESSION_LABELS = [
  "AI Clarity Session — 45 minutes",
  "AI Strategy Session — 60 minutes",
  "AI Decision Workshop — 90 minutes",
] as const;

const AI_EXPERIENCE_LEVELS = [
  "Prefer not to say",
  "None yet",
  "A little — tried a tool or two",
  "Fairly comfortable",
  "Advanced / technical background",
];

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  session: string;
  challenge: string;
  outcome: string;
  currentTools: string;
  aiExperience: string;
  links: string;
  consent: boolean;
  hp: string; // honeypot
};

const EMPTY: FormData = {
  name: "",
  email: "",
  company: "",
  role: "",
  website: "",
  session: SESSION_LABELS[1],
  challenge: "",
  outcome: "",
  currentTools: "",
  aiExperience: AI_EXPERIENCE_LEVELS[0],
  links: "",
  consent: false,
  hp: "",
};

const inputCls =
  "w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-blue transition-all";

const labelCls = "text-xs uppercase tracking-widest font-bold text-gray-400";

const optionalCls = "text-gray-600 normal-case tracking-normal font-normal";

const errCls = "text-red-400 text-sm font-light";

function validateClient(data: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};

  if (data.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.company.trim().length < 2) {
    errors.company = "Please enter your company or project name.";
  }

  if (data.challenge.trim().length < 10) {
    errors.challenge = "Please describe the problem or decision in a sentence or two.";
  }

  if (data.outcome.trim().length < 5) {
    errors.outcome = "Please add a short line on what a good outcome looks like.";
  }

  if (!data.consent) {
    errors.consent = "Please confirm you've read the Privacy Policy to continue.";
  }

  return errors;
}

interface AiStrategyIntakeFormProps {
  defaultSession?: (typeof SESSION_LABELS)[number];
}

export const AiStrategyIntakeForm = ({ defaultSession }: AiStrategyIntakeFormProps) => {
  const [data, setData] = useState<FormData>(() => ({
    ...EMPTY,
    session: defaultSession ?? EMPTY.session,
  }));

  // Selecting a different session card (in the parent) should update the
  // form's preselected option without wiping out anything else the visitor
  // has already typed.
  useEffect(() => {
    if (defaultSession) {
      setData((current) => ({ ...current, session: defaultSession }));
    }
  }, [defaultSession]);

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set =
    (field: keyof FormData) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      const value =
        event.target instanceof HTMLInputElement && event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value;

      setData((current) => ({ ...current, [field]: value }));
      setErrors((current) => ({ ...current, [field]: undefined }));
    };

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const clientErrors = validateClient(data);

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("sending");
    setServerError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: "AI Strategy Session",
          session: data.session,
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          website: data.website,
          challenge: data.challenge,
          desired_outcome: data.outcome,
          current_tools: data.currentTools,
          ai_experience: data.aiExperience,
          links: data.links,
          _subject: `AI Strategy Session request: ${data.company || data.name}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");

        trackEvent("ai_strategy_intake_submit", {
          session: data.session,
        });

        setData({ ...EMPTY, session: defaultSession ?? EMPTY.session });
        setErrors({});
        return;
      }

      setStatus("error");

      const formspreeMessage =
        result?.errors?.[0]?.message ||
        result?.error ||
        "Something went wrong. Please try again, or call 647-673-5748.";

      setServerError(formspreeMessage);
    } catch {
      setStatus("error");
      setServerError(
        "Network error. Please check your connection and try again, or call 647-673-5748."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-16" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto text-noble-blue mb-8" size={64} aria-hidden="true" />

        <h3 className="font-serif text-4xl text-white mb-6">
          Request <span className="italic text-noble-blue">Received.</span>
        </h3>

        <p className="text-gray-400 text-lg font-light max-w-md mx-auto mb-10">
          Thanks — we&apos;ll confirm your session time and next steps by email within one
          business day. If it&apos;s urgent, call{" "}
          <a href="tel:6476735748" className="text-noble-blue hover:text-white transition-colors">
            647-673-5748
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={submit} noValidate>
      <div className="absolute left-[-9999px] top-0" aria-hidden="true">
        <label htmlFor="ai-session-hp">Leave this field empty</label>
        <input
          id="ai-session-hp"
          name="hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.hp}
          onChange={set("hp")}
        />
      </div>

      <div className="flex items-start gap-3 bg-noble-blue/5 border border-noble-blue/20 rounded-2xl p-5">
        <ShieldAlert className="text-noble-blue shrink-0 mt-0.5" size={20} aria-hidden="true" />
        <p className="text-gray-400 text-sm font-light leading-relaxed">
          General descriptions are enough for us to help — please don&apos;t include passwords,
          private credentials, regulated personal data, or confidential information you&apos;re
          not authorized to share.
        </p>
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-session-session" className={labelCls}>
          Session
        </label>
        <select
          id="ai-session-session"
          name="session"
          required
          className={`${inputCls} appearance-none`}
          value={data.session}
          onChange={set("session")}
        >
          {SESSION_LABELS.map((label) => (
            <option key={label} value={label}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="ai-session-name" className={labelCls}>
            Name
          </label>
          <input
            id="ai-session-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jordan Lee"
            className={inputCls}
            value={data.name}
            onChange={set("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "err-name" : undefined}
          />
          {errors.name && (
            <p id="err-name" className={errCls}>
              {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="ai-session-email" className={labelCls}>
            Email
          </label>
          <input
            id="ai-session-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputCls}
            value={data.email}
            onChange={set("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "err-email" : undefined}
          />
          {errors.email && (
            <p id="err-email" className={errCls}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="ai-session-company" className={labelCls}>
            Company or Project Name
          </label>
          <input
            id="ai-session-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder="Your Company, or project name"
            className={inputCls}
            value={data.company}
            onChange={set("company")}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "err-company" : undefined}
          />
          {errors.company && (
            <p id="err-company" className={errCls}>
              {errors.company}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="ai-session-role" className={labelCls}>
            Role <span className={optionalCls}>(optional)</span>
          </label>
          <input
            id="ai-session-role"
            name="role"
            type="text"
            autoComplete="organization-title"
            placeholder="Founder, Operations Lead, etc."
            className={inputCls}
            value={data.role}
            onChange={set("role")}
          />
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-session-website" className={labelCls}>
          Website <span className={optionalCls}>(optional)</span>
        </label>
        <input
          id="ai-session-website"
          name="companyWebsite"
          type="text"
          autoComplete="url"
          placeholder="yourcompany.com"
          className={inputCls}
          value={data.website}
          onChange={set("website")}
        />
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-session-challenge" className={labelCls}>
          The Problem or Decision You Want to Bring
        </label>
        <textarea
          id="ai-session-challenge"
          name="challenge"
          rows={4}
          required
          placeholder="What's the one problem, decision, workflow, or AI idea you want to work through?"
          className={inputCls}
          value={data.challenge}
          onChange={set("challenge")}
          aria-invalid={!!errors.challenge}
          aria-describedby={errors.challenge ? "err-challenge" : undefined}
        />
        {errors.challenge && (
          <p id="err-challenge" className={errCls}>
            {errors.challenge}
          </p>
        )}
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-session-outcome" className={labelCls}>
          What Would a Good Outcome Look Like?
        </label>
        <textarea
          id="ai-session-outcome"
          name="outcome"
          rows={3}
          required
          placeholder="What do you want to walk away with?"
          className={inputCls}
          value={data.outcome}
          onChange={set("outcome")}
          aria-invalid={!!errors.outcome}
          aria-describedby={errors.outcome ? "err-outcome" : undefined}
        />
        {errors.outcome && (
          <p id="err-outcome" className={errCls}>
            {errors.outcome}
          </p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="ai-session-tools" className={labelCls}>
            Current Tools or Workflow <span className={optionalCls}>(optional)</span>
          </label>
          <textarea
            id="ai-session-tools"
            name="currentTools"
            rows={3}
            placeholder="What are you using today, if anything?"
            className={inputCls}
            value={data.currentTools}
            onChange={set("currentTools")}
          />
        </div>

        <div className="space-y-3">
          <label htmlFor="ai-session-experience" className={labelCls}>
            Previous Experience with AI
          </label>
          <select
            id="ai-session-experience"
            name="aiExperience"
            className={`${inputCls} appearance-none`}
            value={data.aiExperience}
            onChange={set("aiExperience")}
          >
            {AI_EXPERIENCE_LEVELS.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="ai-session-links" className={labelCls}>
          Relevant Links <span className={optionalCls}>(optional — links only, please)</span>
        </label>
        <input
          id="ai-session-links"
          name="links"
          type="text"
          placeholder="A doc, deck, or tool link that helps us prepare"
          className={inputCls}
          value={data.links}
          onChange={set("links")}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="ai-session-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1.5 w-5 h-5 shrink-0 rounded border-white/20 bg-noble-black text-noble-blue focus:outline-none focus:ring-2 focus:ring-noble-blue accent-[#3E7BFA]"
          checked={data.consent}
          onChange={set("consent")}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "err-consent" : undefined}
        />
        <label htmlFor="ai-session-consent" className="text-gray-400 text-sm font-light leading-relaxed">
          I&apos;ve read and agree to NobleWave&apos;s{" "}
          <a href="/privacy" className="text-noble-blue hover:text-white transition-colors underline">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p id="err-consent" className={errCls}>
          {errors.consent}
        </p>
      )}

      {status === "error" && serverError && (
        <div
          className="flex items-start gap-3 bg-red-950/40 border border-red-500/30 rounded-2xl p-5"
          role="alert"
        >
          <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} aria-hidden="true" />
          <p className="text-red-300 text-sm font-light">{serverError}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        data-track="cta"
        className="w-full bg-noble-blue text-noble-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
          </>
        ) : (
          <>
            Request This Session
            <Send size={20} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs font-light text-center">
        We reply within one business day to confirm your session time. Your details are only used
        to prepare for and deliver your session.
      </p>
    </form>
  );
};
