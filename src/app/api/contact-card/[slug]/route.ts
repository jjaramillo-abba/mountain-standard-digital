import { NextRequest, NextResponse } from "next/server";
import { getPrivateContact, isContactCardSlug } from "@/lib/private-contact-cards";

export const dynamic = "force-dynamic";

function noStoreHeaders() {
  return { "Cache-Control": "no-store, max-age=0" };
}

function isSameOrigin(request: NextRequest) {
  return request.headers.get("origin") === request.nextUrl.origin || request.headers.get("sec-fetch-site") === "same-origin";
}

export async function GET(request: NextRequest, { params }: RouteContext<"/api/contact-card/[slug]">) {
  const { slug } = await params;

  if (!isContactCardSlug(slug)) {
    return NextResponse.json({ error: "Not found" }, { status: 404, headers: noStoreHeaders() });
  }

  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Unavailable" }, { status: 403, headers: noStoreHeaders() });
  }

  const contact = getPrivateContact(slug);
  return NextResponse.json({ mobile: contact.mobile ?? null, email: contact.email ?? null }, { headers: noStoreHeaders() });
}
