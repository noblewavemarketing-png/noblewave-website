import { PageShell } from "../components/PageShell";
import { PageHeader } from "../components/PageHeader";
import { Websites } from "../components/Sections";

export default function WebsitesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Websites"
        title={<>Your Website Should Look <span className="italic text-noble-gold">As Good As Your Business.</span></>}
        subtitle="Fully built, SEO-optimized, and connected to everything else NobleWave manages for you — delivered fast."
        primaryCta={{ label: "Get Your Website Built", href: "/ai-strategy-session" }}
        secondaryCta={{ label: "See All Solutions", href: "/" }}
      />
      <Websites />
    </PageShell>
  );
}
