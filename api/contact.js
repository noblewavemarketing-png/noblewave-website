// Vercel Serverless Function — POST /api/contact
// Delivers form submissions by email via Resend (https://resend.com).
// Secrets live in Vercel environment variables only — never in frontend code.
//
// Required env vars (set in Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY     — API key from resend.com (free tier: 100 emails/day)
//   CONTACT_TO_EMAIL   — where submissions are delivered (e.g. noblewavemarketing@gmail.com)
//   CONTACT_FROM_EMAIL — verified sender (e.g. leads@noblewavemarketing.ca once domain is verified in Resend;
//                        "onboarding@resend.dev" works for testing before domain verification)

// --- Simple in-memory rate limit (best-effort on serverless: per warm instance) ---
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const ipHits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const hits = (ipHits.get(ip) || []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (hits.length >= RATE_LIMIT_MAX) return true;
  hits.push(now);
  ipHits.set(ip, hits);
  // prevent unbounded growth
  if (ipHits.size > 5000) ipHits.clear();
  return false;
}

// --- Validation & sanitization ---
const SERVICES = new Set([
  "Lead Generation ($400/mo)",
  "Website Creation ($999 one-time)",
  "Both — Leads + Website",
]);

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ") // strip control chars
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim()
    .slice(0, max);
}

function validate(body) {
  const errors = {};
  const name = clean(body.name, 100);
  const business = clean(body.business, 150);
  const email = clean(body.email, 150);
  const phone = clean(body.phone, 30);
  const service = typeof body.service === "string" ? body.service.trim() : "";
  const message = clean(body.message, 2000);

  if (name.length < 2) errors.name = "Please enter your name.";
  if (business.length < 2) errors.business = "Please enter your business name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Please enter a valid email address.";
  if (phone.replace(/\D/g, "").length < 10) errors.phone = "Please enter a valid phone number.";
  if (!SERVICES.has(service)) errors.service = "Please choose a service.";
  if (message.length < 5) errors.message = "Please add a short message.";

  return { errors, data: { name, business, email, phone, service, message } };
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed." });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").toString().split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (rateLimited(ip)) {
    return res.status(429).json({
      ok: false,
      error: "Too many submissions. Please wait a few minutes and try again, or call us directly.",
    });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid request." });
    }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ ok: false, error: "Invalid request." });
  }

  // Honeypot: hidden "website" field — humans leave it empty, bots fill it.
  if (typeof body.website === "string" && body.website.length > 0) {
    // Pretend success so bots don't adapt.
    return res.status(200).json({ ok: true });
  }

  const { errors, data } = validate(body);
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({ ok: false, errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    console.error("Contact form not configured: missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return res.status(500).json({
      ok: false,
      error: "The form isn't set up yet. Please email noblewavemarketing@gmail.com or call 647-673-5748.",
    });
  }

  const html = `
    <h2>New NobleWave inquiry</h2>
    <table cellpadding="6" style="font-family:Arial,sans-serif;font-size:14px">
      <tr><td><b>Name</b></td><td>${data.name}</td></tr>
      <tr><td><b>Business</b></td><td>${data.business}</td></tr>
      <tr><td><b>Email</b></td><td>${data.email}</td></tr>
      <tr><td><b>Phone</b></td><td>${data.phone}</td></tr>
      <tr><td><b>Service</b></td><td>${data.service}</td></tr>
      <tr><td><b>Message</b></td><td>${data.message.replace(/\n/g, "<br/>")}</td></tr>
      <tr><td><b>IP</b></td><td>${clean(ip, 60)}</td></tr>
    </table>`;

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `NobleWave Website <${fromEmail}>`,
        to: [toEmail],
        reply_to: data.email,
        subject: `New lead: ${data.business} — ${data.service}`,
        html,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text();
      console.error("Resend error:", resp.status, detail);
      return res.status(502).json({
        ok: false,
        error: "We couldn't send your message right now. Please email noblewavemarketing@gmail.com or call 647-673-5748.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({
      ok: false,
      error: "Something went wrong. Please email noblewavemarketing@gmail.com or call 647-673-5748.",
    });
  }
}
