import type { Metadata } from "next";
import { cardMetadata, DigitalBusinessCardPage } from "@/components/digital-business-card-page";
import { josephJaramillo } from "@/lib/contact-cards";

export const metadata: Metadata = cardMetadata(josephJaramillo);

export default function JosephPage() {
  return <DigitalBusinessCardPage contact={josephJaramillo} />;
}
