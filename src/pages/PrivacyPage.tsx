import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated August 2026. This page explains what information NobleWave Marketing collects and how it's used."
      />
      <section className="py-24 md:py-28 bg-noble-black">
        <div className="max-w-3xl mx-auto px-6 text-gray-400 font-light leading-relaxed space-y-10">
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">Information we collect</h2>
            <p>When you submit our contact form, we collect the information you provide directly: your name, business name, email address, phone number, website, the service you're interested in, and your message. We also use standard analytics tools (Vercel Analytics, and where enabled, Google Analytics, Google Tag Manager, Meta Pixel, and Microsoft Clarity) to understand how visitors use this site.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">How we use it</h2>
            <p>We use the information you submit solely to respond to your inquiry, assess whether we're a fit for your business, and follow up about our services. We do not sell your information to third parties. Analytics data is used in aggregate to understand site performance and is not used to identify you personally.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">Data sharing</h2>
            <p>Contact form submissions are processed through our form provider to deliver them to our inbox. We do not share your information with other businesses or marketing lists without your consent.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">Your rights</h2>
            <p>Under Canadian privacy law (PIPEDA), you can request access to, correction of, or deletion of the personal information we hold about you. To make a request, email <a href="mailto:noblewavemarketing@gmail.com" className="text-noble-gold hover:underline">noblewavemarketing@gmail.com</a>.</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif text-white mb-4">Contact</h2>
            <p>Questions about this policy: <a href="mailto:noblewavemarketing@gmail.com" className="text-noble-gold hover:underline">noblewavemarketing@gmail.com</a> or <a href="tel:6476735748" className="text-noble-gold hover:underline">647-673-5748</a>.</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
