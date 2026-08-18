import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { About } from "../components/Sections";
import { WhyNobleWave, FinalCTA } from "../components/HomeSections";

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About NobleWave"
        title={<>Built by a Contractor, <span className="italic text-noble-gold">Not an Agency.</span></>}
        subtitle="We started in lead generation because we needed it ourselves. Today NobleWave runs the full system — SEO, websites, content, and leads — managed the way we always wished someone would manage it for us."
      />
      <About />
      <WhyNobleWave />
      <FinalCTA />
    </PageShell>
  );
}
