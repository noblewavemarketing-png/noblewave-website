import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { About } from "../components/Sections";
import { WhyNobleWave, FinalCTA } from "../components/HomeSections";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About NobleWave"
        title={<>An AI Consultancy <span className="italic text-noble-gold">and Implementation Partner.</span></>}
        subtitle="NobleWave helps businesses understand, adopt, and implement AI — to automate work, improve operations, strengthen marketing, and grow more efficiently. We work through the whole path: strategy, then the systems that put it into practice."
      />
      <About />
      <WhyNobleWave />
      <FinalCTA />
    </PageShell>
  );
}
