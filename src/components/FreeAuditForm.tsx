import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldAlert } from "lucide-react";
import { trackEvent } from "../lib/analytics";

// Same inbox as every other form on this site (see AiStrategyIntakeForm.tsx)
// — distinguished by _subject and the "product" field.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojrlvga";

export const AUDIT_TRADE_OPTIONS = [
  "HVAC (heating & cooling)",
  "Plumbing",
  "Electrical",
  "Roofing",
  "Cleaning services",
  "Landscaping",
  "Other home service",
] as const;

type FormData = {
  name: string;
  business: string;
  trade: string;
  website: string;
  email: string;
  phone: string;
  consent: boolean;
  hp: string; // honeypot
};

const EMPTY: FormData = {
  name: "",
  business: "",
  trade: AUDIT_TRADE_OPTIONS[0],
  website: "",
  email: "",
  phone: "",
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
  if (data.business.trim().length < 2) {
    errors.business = "Please enter your business name.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.consent) {
    errors.consent = "Please confirm you've read the Privacy Policy to continue.";
  }

  return errors;
}

export const FreeAuditForm = () => {
  const [data, setData] = useState<FormData>(EMPTY);
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
          product: "Free Local SEO & Google Business Audit",
          trade: data.trade,
          name: data.name,
          business: data.business,
          website: data.website,
          email: data.email,
          phone: data.phone,
          _subject: `Free Audit request: ${data.business} (${data.trade})`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");

        trackEvent("free_audit_form_submit", {
          trade: data.trade,
        });

        setData(EMPTY);
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
          Audit <span className="italic text-noble-blue">Requested.</span>
        </h3>
        <p className="text-gray-400 text-lg font-light max-w-md mx-auto mb-10">
          Thanks — we&apos;ll go through your Google Business Profile and website and send
          your written findings within 2 business days. No call needed unless you want one.
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
        <label htmlFor="audit-hp">Leave this field empty</label>
        <input
          id="audit-hp"
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
          Just your business basics — no passwords, logins, or confidential information needed
          for this audit.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="audit-business" className={labelCls}>
            Business Name
          </label>
          <input
            id="audit-business"
            name="business"
            type="text"
            required
            placeholder="e.g. Second Opinion HVAC"
            className={inputCls}
            value={data.business}
            onChange={set("business")}
            aria-invalid={!!errors.business}
            aria-describedby={errors.business ? "err-business" : undefined}
          />
          {errors.business && (
            <p id="err-business" className={errCls}>
              {errors.business}
            </p>
          )}
        </div>

        <div className="space-y-3">
          <label htmlFor="audit-trade" className={labelCls}>
            Trade
          </label>
          <select
            id="audit-trade"
            name="trade"
            required
            className={`${inputCls} appearance-none`}
            value={data.trade}
            onChange={set("trade")}
          >
            {AUDIT_TRADE_OPTIONS.map((label) => (
              <option key={label} value={label}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="audit-website" className={labelCls}>
          Website URL <span className={optionalCls}>(optional, but we can check more with it)</span>
        </label>
        <input
          id="audit-website"
          name="website"
          type="text"
          placeholder="yourbusiness.ca"
          className={inputCls}
          value={data.website}
          onChange={set("website")}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="audit-name" className={labelCls}>
            Your Name
          </label>
          <input
            id="audit-name"
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
          <label htmlFor="audit-email" className={labelCls}>
            Email
          </label>
          <input
            id="audit-email"
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

      <div className="space-y-3">
        <label htmlFor="audit-phone" className={labelCls}>
          Phone <span className={optionalCls}>(optional)</span>
        </label>
        <input
          id="audit-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(647) 555-0123"
          className={inputCls}
          value={data.phone}
          onChange={set("phone")}
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="audit-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1.5 w-5 h-5 shrink-0 rounded border-white/20 bg-noble-black text-noble-blue focus:outline-none focus:ring-2 focus:ring-noble-blue accent-[#3E7BFA]"
          checked={data.consent}
          onChange={set("consent")}
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "err-consent" : undefined}
        />
        <label htmlFor="audit-consent" className="text-gray-400 text-sm font-light leading-relaxed">
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
            Get My Free Audit
            <Send size={20} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs font-light text-center">
        Free, no obligation. We reply within 2 business days with your written findings.
      </p>
    </form>
  );
};
