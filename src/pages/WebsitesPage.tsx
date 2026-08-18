import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { Websites } from "../components/Sections";

export default function WebsitesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Websites"
        title={<>A Website That <span className="italic text-noble-gold">Works While You Do.</span></>}
        subtitle="Fully built, SEO-optimized, and connected to everything else NobleWave manages for you — one flat price, delivered fast."
        primaryCta={{ label: "Get Your Website Built — $999", href: "/pricing" }}
        secondaryCta={{ label: "See All Services", href: "/services" }}
      />
      <Websites />
    </PageShell>
  );
}
