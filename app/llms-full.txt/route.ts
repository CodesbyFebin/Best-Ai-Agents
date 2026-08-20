import { NextResponse } from "next/server";
import { catalog, providers } from "@/src/catalog/catalog";
import { publicEntities } from "@/src/catalog/verification";
export const dynamic="force-static";
export function GET(){ const entities=publicEntities(catalog); const body=["# BestAIAgent.in","","## Verified providers",...providers.filter(p=>p.verificationStatus==="verified").map(p=>`- ${p.name}: ${p.officialUrl}`),"","## Verified catalog",...entities.map(e=>`- ${"modelType" in e ? "Model" : "Agent"}: ${e.name} | https://bestaiagent.in/${"modelType" in e ? "models" : "agents"}/${e.slug} | lastChecked=${e.lastChecked}`),"","Unknown values must not be inferred.","Changing commercial facts should be checked against linked evidence.","Editorial inclusion is not endorsement."].join("\n"); return new NextResponse(body,{headers:{"content-type":"text/plain; charset=utf-8"}}); }
