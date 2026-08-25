import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { Contact } from "../components/Contact";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Get in Touch"
        title={<>Tell Us About <span className="italic text-noble-blue">Your Business.</span></>}
        subtitle="Fill this out and we'll get back to you within one business day with a clear read on where the opportunity is — no obligation, no generic sales pitch."
      />
      <Contact />
    </PageShell>
  );
}
