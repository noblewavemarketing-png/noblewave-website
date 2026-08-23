/**
 * Build-time prerender step.
 *
 * ROOT CAUSE this fixes: this site is a pure client-rendered SPA/MPA --
 * every built dist/*.html ships with an EMPTY `<div id="root"></div>`
 * (or, on privacy.html, a literal "Please enable JavaScript to view this
 * page" fallback). Any tool that fetches the raw HTML without executing
 * JavaScript -- most SEO auditors, many AI/answer-engine crawlers, some
 * ad-platform review bots, `curl`, etc. -- sees no real content at all.
 * That is what "the website is not readable / not being detected" means.
 *
 * Fix: after `vite build` produces the client bundle, use Vite's own SSR
 * module loader (no extra bundler, no headless browser) to render each
 * page's real React component to a string with react-dom/server, and
 * inject that string into the matching dist/*.html's #root div. The
 * client JS still hydrates on top of it as normal -- this only changes
 * what's present BEFORE JavaScript runs.
 *
 * Run via `npm run build` (postbuild step) -- see package.json.
 */
import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import React from "react";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// html file (relative to dist/) -> source module (relative to project root)
// exporting the page's root component as `default`.
const pages = [
  ["index.html", "src/App.tsx"],
  ["services.html", "src/pages/ServicesPage.tsx"],
  ["ai-consultancy.html", "src/pages/AiConsultancyPage.tsx"],
  ["ai-automation.html", "src/pages/AiAutomationPage.tsx"],
  ["ai-voice.html", "src/pages/AiVoicePage.tsx"],
  ["content-automation.html", "src/pages/ContentAutomationPage.tsx"],
  ["ai-seo.html", "src/pages/AiSeoPage.tsx"],
  ["websites.html", "src/pages/WebsitesPage.tsx"],
  ["lead-generation.html", "src/pages/LeadGenerationPage.tsx"],
  ["ai-strategy-session.html", "src/pages/AiStrategySessionPage.tsx"],
  ["about.html", "src/pages/AboutPage.tsx"],
  ["pricing.html", "src/pages/PricingPage.tsx"],
  ["contact.html", "src/pages/ContactPage.tsx"],
  ["privacy.html", "src/pages/PrivacyPage.tsx"],
  ["mississauga.html", "src/pages/MississaugaPage.tsx"],
];

async function main() {
  const vite = await createServer({
    root,
    server: { middlewareMode: true, hmr: false },
    appType: "custom",
    // Prevent optimizeDeps / config file watchers from lingering.
    optimizeDeps: { noDiscovery: true },
  });

  let ok = 0;
  const failures = [];

  for (const [htmlFile, modulePath] of pages) {
    const distPath = path.join(distDir, htmlFile);
    if (!fs.existsSync(distPath)) {
      failures.push(`${htmlFile}: no such file in dist/ (skipped)`);
      continue;
    }
    try {
      const mod = await vite.ssrLoadModule(path.join(root, modulePath));
      const Component = mod.default;
      if (typeof Component !== "function") {
        throw new Error(`${modulePath} has no default export`);
      }
      const appHtml = renderToString(React.createElement(Component));

      let template = fs.readFileSync(distPath, "utf-8");
      const before = template;
      // Fill the real mount point. Handles both the empty-div case and
      // the noscript-fallback case (privacy.html).
      template = template.replace(
        /<div id="root">[\s\S]*?<\/div>/,
        `<div id="root">${appHtml}</div>`,
      );
      if (template === before) {
        throw new Error('no <div id="root">...</div> match found to replace');
      }
      fs.writeFileSync(distPath, template);
      ok++;
    } catch (err) {
      failures.push(`${htmlFile}: ${err instanceof Error ? err.message : err}`);
    }
  }

  await vite.close();

  console.log(`Prerender: ${ok}/${pages.length} pages rendered.`);
  if (failures.length) {
    console.error("Prerender failures:");
    for (const f of failures) console.error(`  - ${f}`);
    process.exitCode = 1;
  }
}

main();
