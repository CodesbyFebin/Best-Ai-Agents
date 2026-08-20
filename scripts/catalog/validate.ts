import { readFile } from "node:fs/promises";
import { catalog, providers } from "../../src/catalog/catalog";
import { isEntityIndexable } from "../../src/catalog/verification";
const ids=new Set<string>(), slugs=new Set<string>(), aliases=new Set<string>();
for(const entity of catalog){
  if(ids.has(entity.id)) throw new Error(`Duplicate entity id: ${entity.id}`); ids.add(entity.id);
  if(slugs.has(entity.slug)) throw new Error(`Duplicate canonical slug: ${entity.slug}`); slugs.add(entity.slug);
  if(!providers.some(p=>p.id===entity.providerId)) throw new Error(`Unknown provider: ${entity.providerId}`);
  const entityAliases="modelType" in entity ? entity.aliases : [];
  for(const alias of entityAliases){const key=`${entity.providerId}:${alias.toLowerCase()}`; if(aliases.has(key)) throw new Error(`Alias collision: ${key}`); aliases.add(key);}
  if(isEntityIndexable(entity) && !entity.evidence.some(e=>e.verificationStatus==="verified" && ["official","documentation","api","model-card"].includes(e.sourceType))) throw new Error(`Indexable entity without authoritative evidence: ${entity.id}`);
  if(entity.pricing && !entity.evidence.some(e=>e.field?.startsWith("pricing") && e.verificationStatus==="verified")) throw new Error(`Pricing without field evidence: ${entity.id}`);
}
for(const provider of providers) if(!provider.officialUrl.startsWith("https://")) throw new Error(`Provider URL must be HTTPS: ${provider.id}`);
await readFile("data/sources/providers.json","utf8");
console.log(`Catalog validation passed: ${catalog.length} entities, ${providers.length} providers.`);
