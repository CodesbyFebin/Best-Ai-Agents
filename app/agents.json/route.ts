import { NextResponse } from "next/server";
import { catalog } from "@/src/catalog/catalog";
import { asAgents } from "@/src/catalog/stats";
export const dynamic = "force-static";
export function GET(){ return NextResponse.json({generatedAt:new Date().toISOString(), agents:asAgents(catalog)}); }
