import type { MetadataRoute } from "next";
import { catalog, providers } from "@/src/catalog/catalog";
import { isEntityIndexable } from "@/src/catalog/verification";
const base="https://bestaiagent.in";
export default function sitemap(): MetadataRoute.Sitemap { const now=new Date(); const routes=["/","/models","/agents","/providers","/categories","/compare","/best-ai-agent","/best-ai-agent-for-business","/best-ai-agent-for-coding","/best-ai-agent-alternatives","/best-ai-agents-for-automation","/built-in-india","/marketplace","/resources","/about","/methodology"].map(path=>({url:base+path,lastModified:now})); const entities=catalog.filter(isEntityIndexable).map(e=>({url:`${base}/${"modelType" in e?"models":"agents"}/${e.slug}`,lastModified:new Date(e.lastModified)})); const providerRoutes=providers.filter(p=>p.verificationStatus==="verified").map(p=>({url:`${base}/providers/${p.slug}`,lastModified:new Date(p.updatedAt)})); return [...routes,...entities,...providerRoutes]; }
