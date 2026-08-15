import { NextResponse } from "next/server";
import { catalog, providers } from "@/src/catalog/catalog";
import { publicEntities } from "@/src/catalog/verification";
export const dynamic = "force-static";
export function GET(){ const entities=publicEntities(catalog); return NextResponse.json({generatedAt:new Date().toISOString(), providers:providers.filter(p=>p.verificationStatus==="verified"), entities}); }
