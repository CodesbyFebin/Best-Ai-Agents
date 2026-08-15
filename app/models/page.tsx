import Link from "next/link";
import { searchCatalog } from "@/src/catalog/search";
import { asModels, getCatalogStats } from "@/src/catalog/stats";
import { providers } from "@/src/catalog/catalog";

export const dynamic = "force-static";
export default async function ModelsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const q = (await searchParams).q ?? ""; const models = asModels(searchCatalog(q)); const stats = getCatalogStats(providers, searchCatalog(""));
  return <main className="authorityPage"><header className="authorityNav"><Link className="brand" href="/">BestAI<span>Agent</span><b>.in</b></Link><nav><Link href="/models">Models</Link><Link href="/agents">Agents</Link><Link href="/providers">Providers</Link><Link href="/categories">Categories</Link></nav></header><section className="authorityHero"><span className="kicker">Verified model directory</span><h1>AI Models</h1><p>Browse models that have passed the publication policy. Unknown fields stay unknown; evidence is the source of truth.</p><form action="/models" method="get"><label htmlFor="model-search">Search models</label><input id="model-search" name="q" defaultValue={q} placeholder="Model, provider, capability…" /><button type="submit">Search</button></form><p>Verified models: {stats.models}</p></section><section className="authorityGrid">{models.map(m => <article className="authorityCard" key={m.id}><span className="cardEyebrow">{m.providerName}</span><h2>{m.name}</h2><p>{m.description ?? "Description not verified."}</p><p>{m.modelType.join(" · ") || "Type not verified"}</p><Link href={`/models/${m.slug}`}>View model →</Link></article>)}{models.length === 0 && <article className="authorityCard"><h2>No verified models published yet</h2><p>The source registry is configured, but records remain unpublished until the deterministic ingestion and evidence validation pipeline produces verified records.</p></article>}</section></main>;
}
