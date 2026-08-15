import { NextResponse } from "next/server";
import { catalog } from "@/src/catalog/catalog";
import { asModels } from "@/src/catalog/stats";
export const dynamic = "force-static";
export function GET(){ return NextResponse.json({generatedAt:new Date().toISOString(), models:asModels(catalog)}); }
