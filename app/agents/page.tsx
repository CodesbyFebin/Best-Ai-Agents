import Link from "next/link";
import { searchCatalog } from "@/src/catalog/search";
import { asAgents } from "@/src/catalog/stats";

export const dynamic = "force-static";
export default async function AgentsPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const q = (await searchParams).q ?? ""; const agents = asAgents(searchCatalog(q));
  return <main className="authorityPage"><header className="authorityNav"><Link className="brand" href="/">BestAI<span>Agent</span><b>.in</b></Link><nav><Link href="/models">Models</Link><Link href="/agents">Agents</Link><Link href="/providers">Providers</Link><Link href="/categories">Categories</Link></nav></header><section className="authorityHero"><span className="kicker">Verified agent directory</span><h1>AI Agents</h1><p>Discover coding, research, business, automation, voice, computer-use and framework products only after evidence-backed publication.</p><form action="/agents" method="get"><label htmlFor="agent-search">Search agents</label><input id="agent-search" name="q" defaultValue={q} placeholder="Agent, provider, category…" /><button type="submit">Search</button></form></section><section className="authorityGrid">{agents.map(a => <article className="authorityCard" key={a.id}><span className="cardEyebrow">{a.providerName}</span><h2>{a.name}</h2><p>{a.description ?? "Description not verified."}</p><p>{a.categories.join(" · ") || "Category not verified"}</p><Link href={`/agents/${a.slug}`}>View agent →</Link></article>)}{agents.length === 0 && <article className="authorityCard"><h2>No verified agents published yet</h2><p>Configured providers are intentionally not presented as verified products until ingestion captures authoritative evidence and the publication gate passes.</p></article>}</section></main>;
}
