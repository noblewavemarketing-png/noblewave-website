import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { trackEvent } from "../lib/analytics";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojrlvga";

const SERVICES = [
  "Lead Generation ($400/mo)",
  "Website Creation ($999 one-time)",
  "Both — Leads + Website",
];

type FormData = {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const EMPTY: FormData = {
  name: "",
  business: "",
  email: "",
  phone: "",
  service: SERVICES[0],
  message: "",
  website: "",
};

const inputCls =
  "w-full bg-noble-black border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-noble-gold transition-all";

const labelCls =
  "text-xs uppercase tracking-widest font-bold text-gray-400";

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

  if (data.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (data.message.trim().length < 5) {
    errors.message = "Please add a short message.";
  }

  return errors;
}

const ContactForm = () => {
  const [data, setData] = useState<FormData>(EMPTY);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData, string>>
  >({});

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const [serverError, setServerError] = useState("");

  const set =
    (field: keyof FormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setData((current) => ({
        ...current,
        [field]: event.target.value,
      }));

      setErrors((current) => ({
        ...current,
        [field]: undefined,
      }));
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
          name: data.name,
          business: data.business,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          website: data.website,
          _subject: `New NobleWave lead: ${data.business}`,
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("success");

        trackEvent("contact_form_submit", {
          service: data.service,
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
      <div
        className="text-center py-16"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2
          className="mx-auto text-noble-gold mb-8"
          size={64}
          aria-hidden="true"
        />

        <h3 className="font-serif text-4xl text-white mb-6">
          Request{" "}
          <span className="italic text-noble-gold">Received.</span>
        </h3>

        <p className="text-gray-400 text-lg font-light max-w-sm mx-auto mb-10">
          Thanks — we&apos;ll get back to you within one business day.
          If it&apos;s urgent, call us at{" "}
          <a
            href="tel:6476735748"
            className="text-noble-gold hover:text-white transition-colors"
          >
            647-673-5748
          </a>
          .
        </p>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="border border-white/20 text-white px-8 py-3 rounded-full font-bold hover:bg-white/5 transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={submit} noValidate>
      <div
        className="absolute left-[-9999px] top-0"
        aria-hidden="true"
      >
        <label htmlFor="contact-website">Website</label>

        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.website}
          onChange={set("website")}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="contact-name" className={labelCls}>
            Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="John Doe"
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
          <label htmlFor="contact-business" className={labelCls}>
            Business Name
          </label>

          <input
            id="contact-business"
            name="business"
            type="text"
            required
            autoComplete="organization"
            placeholder="Your Company Inc."
            className={inputCls}
            value={data.business}
            onChange={set("business")}
            aria-invalid={!!errors.business}
            aria-describedby={
              errors.business ? "err-business" : undefined
            }
          />

          {errors.business && (
            <p id="err-business" className={errCls}>
              {errors.business}
            </p>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="contact-email" className={labelCls}>
            Email
          </label>

          <input
            id="contact-email"
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

        <div className="space-y-3">
          <label htmlFor="contact-phone" className={labelCls}>
            Phone
          </label>

          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="647-000-0000"
            className={inputCls}
            value={data.phone}
            onChange={set("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "err-phone" : undefined}
          />

          {errors.phone && (
            <p id="err-phone" className={errCls}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <label htmlFor="contact-service" className={labelCls}>
          Service Required
        </label>

        <select
          id="contact-service"
          name="service"
          required
          className={`${inputCls} appearance-none`}
          value={data.service}
          onChange={set("service")}
        >
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        <label htmlFor="contact-message" className={labelCls}>
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your trade, service area, and what you need..."
          className={inputCls}
          value={data.message}
          onChange={set("message")}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "err-message" : undefined
          }
        />

        {errors.message && (
          <p id="err-message" className={errCls}>
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && serverError && (
        <div
          className="flex items-start gap-3 bg-red-950/40 border border-red-500/30 rounded-2xl p-5"
          role="alert"
        >
          <AlertCircle
            className="text-red-400 shrink-0 mt-0.5"
            size={20}
            aria-hidden="true"
          />

          <p className="text-red-300 text-sm font-light">
            {serverError}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-noble-gold text-noble-black py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white transition-all shadow-xl text-lg disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2
              size={20}
              className="animate-spin"
              aria-hidden="true"
            />
          </>
        ) : (
          <>
            Request My Spot
            <Send size={20} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-gray-500 text-xs font-light text-center">
        We reply within one business day. Your details are only used
        to contact you about your inquiry.
      </p>
    </form>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-noble-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <span className="text-noble-gold uppercase tracking-[0.3em] text-xs font-bold">
              Claim a Spot
            </span>

            <h2 className="text-5xl md:text-6xl font-serif mt-6 mb-10 text-white">
              Tell Us About <br />
              <span className="italic text-noble-gold">
                Your Company.
              </span>
            </h2>

            <p className="text-gray-400 text-xl mb-12 leading-relaxed font-light">
              Fill this out and we&apos;ll get back to you within one
              business day. If you&apos;re a fit, we&apos;ll walk you
              through exactly how leads will reach you — and lock in
              your spot. One spot per trade per area.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <Mail size={28} />
                </div>

                <div>
                  <h4 className="font-serif text-2xl text-white">
                    Email Us
                  </h4>

                  <p className="text-gray-500 text-lg">
                    <a
                      href="mailto:noblewavemarketing@gmail.com"
                      className="hover:text-noble-gold transition-colors"
                    >
                      noblewavemarketing@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <Phone size={28} />
                </div>

                <div>
                  <h4 className="font-serif text-2xl text-white">
                    Call Us
                  </h4>

                  <p className="text-gray-500 text-lg">
                    <a
                      href="tel:6476735748"
                      className="hover:text-noble-gold transition-colors"
                    >
                      647-673-5748
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-noble-gold/10 flex items-center justify-center text-noble-gold">
                  <MapPin size={28} />
                </div>

                <div>
                  <h4 className="font-serif text-2xl text-white">
                    Location
                  </h4>

                  <p className="text-gray-500 text-lg">
                    Mississauga, Ontario — Serving the GTA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-noble-dark p-12 rounded-[2.5rem] border border-white/5 shadow-2xl"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="py-24 noble-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-noble-gold)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
          Ready for a pipeline that actually shows up? <br />
          <span className="italic text-noble-gold">
            20 spots. First come, first served.
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#contact"
            data-track="cta"
            className="bg-noble-gold text-noble-black px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-white transition-all"
          >
            Claim Your Spot
          </a>

          <a
            href="#pricing"
            className="border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          >
            See the Flat Rate
          </a>
        </div>
      </div>
    </section>
  );
};
