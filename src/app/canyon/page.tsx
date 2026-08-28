import type { Metadata } from "next";
import { cardMetadata, DigitalBusinessCardPage } from "@/components/digital-business-card-page";
import { contactCards } from "@/lib/contact-cards";
export const metadata: Metadata = cardMetadata(contactCards.canyon);
export default function CanyonPage() { return <DigitalBusinessCardPage contact={contactCards.canyon} />; }
