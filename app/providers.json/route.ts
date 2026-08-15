import { NextResponse } from "next/server";
import { providers } from "@/src/catalog/catalog";
export const dynamic="force-static";
export function GET(){return NextResponse.json({generatedAt:new Date().toISOString(),providers:providers.filter(p=>p.verificationStatus==="verified")});}
