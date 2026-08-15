import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function sourceFiles(directory) {
  const absolute = path.join(root, directory);
  if (!fs.existsSync(absolute)) return [];
  const result = [];
  for (const entry of fs.readdirSync(absolute, { withFileTypes: true })) {
    const child = path.join(absolute, entry.name);
    if (entry.isDirectory()) {
      result.push(...sourceFiles(path.relative(root, child)));
    } else if (/\.(?:tsx?|jsx?|html)$/.test(entry.name)) {
      result.push(child);
    }
  }
  return result;
}

const nextConfig = read("next.config.ts");
const layout = read("app/layout.tsx");
const home = read("app/page.tsx");
const pillar = read("src/components/pillars/PillarPage.tsx");
const directAnswer = read("src/components/seo/DirectAnswer.tsx");
const pageJsonLd = read("src/components/seo/PageJsonLd.tsx");
const llms = read("public/llms.txt");

assert(!/^\s*["']use client["'];/m.test(home), "Homepage must remain a Server Component.");
assert(home.includes('from "next/image"'), "Homepage hero must use next/image.");
assert(home.includes("preload"), "Homepage LCP image must be explicitly discoverable/preloaded.");
assert(layout.includes('from "next/font/google"'), "Fonts must use next/font.");
assert(layout.includes('display: "swap"'), "Primary fonts must declare display: swap.");
assert(nextConfig.includes('formats: ["image/avif", "image/webp"]'), "Image formats must include AVIF and WebP.");
assert(nextConfig.includes("poweredByHeader: false"), "X-Powered-By must be disabled.");
assert(nextConfig.includes("Content-Security-Policy"), "CSP header must be configured.");
assert(nextConfig.includes("Strict-Transport-Security"), "HSTS must be configured.");

assert(directAnswer.includes("itemScope"), "Direct answer must expose microdata.");
assert(directAnswer.includes('itemType="https://schema.org/Question"'), "Direct answer must expose Question microdata.");
assert(pageJsonLd.includes("SpeakableSpecification"), "Generic page schema must expose SpeakableSpecification.");
assert(pageJsonLd.includes("datePublished"), "Generic page schema must expose datePublished.");
assert(pageJsonLd.includes("dateModified"), "Generic page schema must expose dateModified.");
assert(pillar.includes("SpeakableSpecification"), "Pillar schema must expose SpeakableSpecification.");
assert(pillar.includes('"@type": "FAQPage"'), "Pillar schema must expose FAQPage.");
assert(pillar.includes('"@type": "HowTo"'), "Pillar schema must expose HowTo.");
assert(pillar.includes("datePublished"), "Pillar schema must expose datePublished.");
assert(pillar.includes("dateModified"), "Pillar schema must expose dateModified.");

for (const relativePath of [
  "app/page.tsx",
  "app/categories/page.tsx",
  "app/built-in-india/page.tsx",
  "app/marketplace/page.tsx",
  "app/resources/page.tsx",
]) {
  assert(read(relativePath).includes("<DirectAnswer"), `${relativePath} must render a top-level direct answer.`);
}
assert(pillar.includes("<DirectAnswer"), "All priority pillar pages must render DirectAnswer through PillarPage.");

for (const file of [...sourceFiles("app"), ...sourceFiles("src")]) {
  const source = fs.readFileSync(file, "utf8");
  assert(!/<img\b/i.test(source), `Raw <img> found in ${path.relative(root, file)}; use next/image.`);

  const externalScripts = source.match(/<(?:script|Script)\b[^>]*\bsrc=[^>]*https?:\/\/[^>]*>/gi) ?? [];
  for (const tag of externalScripts) {
    assert(/\bintegrity\s*=/.test(tag), `External script without SRI in ${path.relative(root, file)}.`);
  }
}

assert(!/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(layout), "Browser-time Google Font requests are forbidden; use next/font self-hosting.");
assert(llms.includes("## Freshness contract"), "llms.txt must document freshness signals.");
assert(llms.includes("SpeakableSpecification"), "llms.txt must document the structured-data contract.");

console.log("Performance/AEO/security gate passed: server rendering, optimized media, structured answers, and headers verified.");
