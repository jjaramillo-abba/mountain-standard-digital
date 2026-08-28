import "server-only";
import { contactCards, type ContactCardSlug } from "@/lib/contact-cards";

type PrivateContact = {
  mobile?: string;
  email?: string;
};

// Keep direct details in deployment environment variables, never in public config
// or NEXT_PUBLIC_* variables. Empty/unset values make that action unavailable.
const privateContacts: Record<ContactCardSlug, PrivateContact> = {
  joseph: { mobile: process.env.MSD_JOSEPH_MOBILE, email: process.env.MSD_JOSEPH_EMAIL },
  asa: { mobile: process.env.MSD_ASA_MOBILE, email: process.env.MSD_ASA_EMAIL },
  nicholas: { mobile: process.env.MSD_NICHOLAS_MOBILE, email: process.env.MSD_NICHOLAS_EMAIL },
  andrea: { mobile: process.env.MSD_ANDREA_MOBILE, email: process.env.MSD_ANDREA_EMAIL },
  suzi: { mobile: process.env.MSD_SUZI_MOBILE, email: process.env.MSD_SUZI_EMAIL },
  canyon: { mobile: process.env.MSD_CANYON_MOBILE, email: process.env.MSD_CANYON_EMAIL },
};

export function isContactCardSlug(slug: string): slug is ContactCardSlug {
  return Object.prototype.hasOwnProperty.call(contactCards, slug);
}

export function getPrivateContact(slug: ContactCardSlug): PrivateContact {
  return privateContacts[slug];
}

function escapeVCardValue(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

export function createVCard(slug: ContactCardSlug) {
  const contact = contactCards[slug];
  const privateContact = getPrivateContact(slug);
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${escapeVCardValue(contact.lastName)};${escapeVCardValue(contact.firstName)};;;`,
    `FN:${escapeVCardValue(contact.name)}`,
    `ORG:${escapeVCardValue(contact.organization)}`,
    contact.title && `TITLE:${escapeVCardValue(contact.title)}`,
    privateContact.mobile && `TEL;TYPE=CELL:${escapeVCardValue(privateContact.mobile)}`,
    privateContact.email && `EMAIL:${escapeVCardValue(privateContact.email)}`,
    `URL:${contact.website}`,
    "END:VCARD",
  ];

  return `${lines.filter(Boolean).join("\r\n")}\r\n`;
}
