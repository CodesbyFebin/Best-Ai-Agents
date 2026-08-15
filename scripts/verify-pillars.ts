import fs from "node:fs";
import path from "node:path";
import { pillarManifests } from "../src/data/pillars";
import { routeRegistry } from "../src/routing/routeRegistry";

const requiredSlugs = [
  "best-ai-agent",
  "best-ai-agent-for-business",
  "best-ai-agent-for-coding",
  "best-ai-agent-alternatives",
  "best-ai-agents-for-automation",
] as const;

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function wordCount(value: string) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

const root = process.cwd();
const sitemapSource = fs.readFileSync(path.join(root, "app/sitemap.ts"), "utf8");
const llmsSource = fs.readFileSync(path.join(root, "public/llms.txt"), "utf8");
const pillarSource = fs.readFileSync(
  path.join(root, "src/components/pillars/PillarPage.tsx"),
  "utf8",
);
const dataSource = fs.readFileSync(path.join(root, "src/data/pillars.ts"), "utf8");

const emitsAggregateRating =
  /["']@type["']\s*:\s*["']AggregateRating["']/.test(pillarSource) ||
  /(?:["']aggregateRating["']|\baggregateRating)\s*:/.test(pillarSource);

assert(!emitsAggregateRating, "Pillar structured data must not emit AggregateRating.");
assert(!/\b(score|rating)\s*:/i.test(dataSource), "Pillar data must not define unsupported score/rating fields.");
assert(pillarSource.includes('"@type": "FAQPage"'), "Pillars must emit FAQPage when visible FAQs exist.");
assert(pillarSource.includes('"@type": "HowTo"'), "Pillars must emit HowTo for the visible evaluation process.");
assert(pillarSource.includes("SpeakableSpecification"), "Pillars must expose speakable direct-answer content.");
assert(pillarSource.includes("datePublished"), "Pillars must expose datePublished.");
assert(pillarSource.includes("dateModified"), "Pillars must expose dateModified.");
assert(pillarSource.includes("<DirectAnswer"), "Pillars must render structured direct-answer microdata.");

for (const slug of requiredSlugs) {
  const manifest = pillarManifests[slug];
  assert(manifest, `Missing pillar manifest: ${slug}`);
  assert(manifest.primaryKeyword.length > 0, `Missing primary keyword: ${slug}`);

  const directAnswerWords = wordCount(manifest.directAnswer);
  assert(
    directAnswerWords >= 40 && directAnswerWords <= 60,
    `${slug} direct answer must be 40-60 words; got ${directAnswerWords}.`,
  );

  assert(manifest.agents.length >= 3, `${slug} must have at least three evidence-backed candidates.`);
  assert(manifest.faqs.length >= 2, `${slug} must have at least two visible FAQs.`);
  assert(manifest.evidence.length > 0, `${slug} must expose source evidence.`);

  for (const agent of manifest.agents) {
    assert(agent.evidence.length > 0, `${slug}/${agent.slug} is missing evidence.`);
    assert(agent.officialUrl.startsWith("https://"), `${slug}/${agent.slug} official URL must use HTTPS.`);
    for (const item of agent.evidence) {
      assert(item.url.startsWith("https://"), `${slug}/${agent.slug} evidence URL must use HTTPS.`);
      assert(/^\d{4}-\d{2}-\d{2}$/.test(item.verifiedOn), `${slug}/${agent.slug} evidence needs YYYY-MM-DD verification date.`);
    }
  }

  const route = routeRegistry.find((item) => item.path === `/${slug}`);
  assert(route?.kind === "pillar", `Route registry missing pillar contract: /${slug}`);
  assert(route.indexable && route.sitemap, `Pillar must be indexable and in sitemap: /${slug}`);

  const routeFile = path.join(root, "app", slug, "page.tsx");
  assert(fs.existsSync(routeFile), `Missing Next.js route file: app/${slug}/page.tsx`);
  assert(sitemapSource.includes(`/${slug}`), `Sitemap source missing /${slug}`);
  assert(llmsSource.includes(`https://bestaiagent.in/${slug}`), `llms.txt missing canonical /${slug}`);
}

console.log(`Priority pillar gate passed: ${requiredSlugs.length} canonical routes verified.`);
