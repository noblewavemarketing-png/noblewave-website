import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-2xl font-serif text-white mb-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Effective August 23, 2026. This page explains what information NobleWave collects, how it's used, and the choices you have."
      />
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-3xl mx-auto px-6 text-gray-400 font-light leading-relaxed space-y-10">
          <Section title="Who we are">
            <p>
              NobleWave ("NobleWave," "we," "us") is a marketing and AI systems provider based in
              Mississauga, Ontario, serving businesses across the Greater Toronto Area. This
              policy applies to noblewavemarketing.ca and covers every page on this site.
            </p>
          </Section>

          <Section title="Information we collect">
            <p>
              <strong className="text-white font-medium">Information you give us directly.</strong>{" "}
              When you submit a contact form or book a consultation, we collect what you provide:
              your name, business name, email address, phone number, website, the service you're
              interested in, and your message.
            </p>
            <p>
              <strong className="text-white font-medium">Information collected automatically.</strong>{" "}
              Like most websites, we use cookies and similar technologies (pixels, tags, local
              storage) to collect standard technical data — pages visited, referring site, device
              and browser type, approximate location, and how you interact with the page. This is
              collected through the tools listed under "Cookies &amp; advertising" below.
            </p>
          </Section>

          <Section title="Cookies & advertising">
            <p>
              We use the following third-party services, each of which may set its own cookies or
              similar identifiers in your browser:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-noble-gold">
              <li>
                <strong className="text-white font-medium">Vercel Analytics &amp; Speed Insights</strong> — privacy-focused,
                cookieless traffic and performance measurement, always on.
              </li>
              <li>
                <strong className="text-white font-medium">Google Analytics &amp; Google Tag Manager</strong> — site usage
                measurement, where enabled.
              </li>
              <li>
                <strong className="text-white font-medium">Google Ads</strong> — conversion tracking and remarketing, so we can
                measure ad performance and show relevant ads to past visitors on other sites,
                where enabled.
              </li>
              <li>
                <strong className="text-white font-medium">Meta Pixel</strong> (Facebook/Instagram) — conversion tracking and
                remarketing on Meta platforms, where enabled. Meta may combine this data with
                other information it has about you, subject to Meta's own privacy policy.
              </li>
              <li>
                <strong className="text-white font-medium">Microsoft Clarity</strong> — session-behavior analytics (e.g.
                anonymized scroll/click heatmaps) to help us improve the site, where enabled.
              </li>
            </ul>
            <p>
              You can block or delete cookies in your browser settings at any time. To opt out of
              Google's advertising cookies specifically, visit{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-gold hover:underline"
              >
                Google Ads Settings
              </a>
              . To control Meta's ad personalization, visit your{" "}
              <a
                href="https://www.facebook.com/adpreferences/ad_settings"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-gold hover:underline"
              >
                Meta Ad Preferences
              </a>
              . You can also opt out of interest-based advertising broadly via the{" "}
              <a
                href="https://optout.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-gold hover:underline"
              >
                Digital Advertising Alliance
              </a>
              .
            </p>
          </Section>

          <Section title="How we use your information">
            <p>
              We use the information you submit to respond to your inquiry, assess fit for our
              services, and follow up about work you've asked about. With your consent, we may
              also send occasional updates about our services — every message includes a way to
              opt out, in line with Canada's Anti-Spam Legislation (CASL). We use aggregated,
              de-identified analytics data to understand site performance; it is not used to
              identify you personally.
            </p>
          </Section>

          <Section title="How we share your information">
            <p>
              Form submissions are delivered to us through{" "}
              <a
                href="https://formspree.io/legal/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-gold hover:underline"
              >
                Formspree
              </a>
              , our form-processing provider. Site hosting and traffic analytics run on{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-noble-gold hover:underline"
              >
                Vercel
              </a>
              . Where enabled, usage and advertising data also flows to Google, Meta, and
              Microsoft as described above. We do not sell your personal information, and we
              don't share it with other businesses for their own marketing purposes.
            </p>
          </Section>

          <Section title="Data retention">
            <p>
              We keep contact-form submissions for as long as needed to respond to your inquiry
              and maintain a record of our business communications, and delete or anonymize them
              on request. Aggregated analytics data may be retained longer since it isn't tied to
              your identity.
            </p>
          </Section>

          <Section title="Your rights">
            <p>
              Under Canadian privacy law (PIPEDA), you can request access to, correction of, or
              deletion of the personal information we hold about you, and you can withdraw consent
              to be contacted at any time. To make a request, email{" "}
              <a href="mailto:noblewavemarketing@gmail.com" className="text-noble-gold hover:underline">
                noblewavemarketing@gmail.com
              </a>
              . We'll respond within a reasonable time.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              This site and our services are intended for businesses and business owners. We do
              not knowingly collect information from children under 13.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy as our tools or practices change. The "Effective" date
              above reflects the most recent version; material changes will be reflected here.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy or a privacy request:{" "}
              <a href="mailto:noblewavemarketing@gmail.com" className="text-noble-gold hover:underline">
                noblewavemarketing@gmail.com
              </a>{" "}
              or{" "}
              <a href="tel:6476735748" className="text-noble-gold hover:underline">
                647-673-5748
              </a>
              .
            </p>
          </Section>
        </div>
      </section>
    </PageShell>
  );
}
