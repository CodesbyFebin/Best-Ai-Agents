import { NextRequest, NextResponse } from "next/server";
import { isGonePath } from "./src/routing/gone-paths";

export function middleware(req: NextRequest) {
  if (isGonePath(req.nextUrl.pathname)) {
    return new NextResponse(null, {
      status: 410,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
