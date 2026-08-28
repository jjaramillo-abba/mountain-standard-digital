import { NextRequest, NextResponse } from "next/server";
import { contactCards } from "@/lib/contact-cards";
import { createVCard, isContactCardSlug } from "@/lib/private-contact-cards";

export const dynamic = "force-dynamic";

function noStoreHeaders() {
  return { "Cache-Control": "no-store, max-age=0" };
}

function isSameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin || request.headers.get("sec-fetch-site") === "same-origin";
}

export async function GET(request: NextRequest, { params }: RouteContext<"/api/contact-card/[slug]/vcard">) {
  const { slug } = await params;

  if (!isContactCardSlug(slug)) {
    return new NextResponse("Not found", { status: 404, headers: noStoreHeaders() });
  }

  if (!isSameOrigin(request)) {
    return new NextResponse("Unavailable", { status: 403, headers: noStoreHeaders() });
  }

  return new NextResponse(createVCard(slug), {
    headers: {
      ...noStoreHeaders(),
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": `attachment; filename="${contactCards[slug].vCardFilename}"`,
    },
  });
}
