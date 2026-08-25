import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { About } from "../components/Sections";
import { FinalCTA } from "../components/HomeSections";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About NobleWave"
        title={<>We Build the Systems <span className="italic text-noble-blue">Businesses Grow On.</span></>}
        subtitle="NobleWave designs and implements the digital infrastructure around a business — websites, AI search, voice agents, and content automation, connected as one system instead of a pile of disconnected tools."
      />
      <About />
      <FinalCTA />
    </PageShell>
  );
}
