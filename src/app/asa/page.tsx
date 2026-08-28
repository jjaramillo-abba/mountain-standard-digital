import type { Metadata } from "next";
import { cardMetadata, DigitalBusinessCardPage } from "@/components/digital-business-card-page";
import { contactCards } from "@/lib/contact-cards";
export const metadata: Metadata = cardMetadata(contactCards.asa);
export default function AsaPage() { return <DigitalBusinessCardPage contact={contactCards.asa} />; }
