import type { Metadata } from "next";
import { DigitalBusinessCard } from "@/components/digital-business-card";
import type { ContactCard } from "@/lib/contact-cards";

export function cardMetadata(contact: ContactCard): Metadata {
  return {
    title: { absolute: `${contact.name} | Mountain Standard Digital` },
    description: `Contact ${contact.name} at Mountain Standard Digital.`,
    robots: { index: false, follow: true },
  };
}

export function DigitalBusinessCardPage({ contact }: { contact: ContactCard }) {
  return <DigitalBusinessCard contact={contact} />;
}
