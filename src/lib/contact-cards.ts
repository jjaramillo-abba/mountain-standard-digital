export type ContactCard = {
  slug: string;
  firstName: string;
  lastName: string;
  name: string;
  title: string | null;
  organization: string;
  website: string;
  linkedin: string | null;
  descriptor?: string;
  vCardFilename: string;
};

const sharedContact = {
  organization: "Mountain Standard Digital",
  website: "https://mountainstandarddigital.com",
  linkedin: null, // Add only a confirmed LinkedIn URL.
} as const;

// This is the single source of truth for the card system. Do not publish
// unverified titles or public-facing profile details; leave them null until confirmed.
export const contactCards = {
  joseph: { ...sharedContact, slug: "joseph", firstName: "Joseph", lastName: "Jaramillo", name: "Joseph Jaramillo", title: "Co-Founder", vCardFilename: "joseph-jaramillo.vcf" },
  asa: { ...sharedContact, slug: "asa", firstName: "Asa", lastName: "Shows", name: "Asa Shows", title: "Co-Founder", vCardFilename: "asa-shows.vcf" },
  nicholas: { ...sharedContact, slug: "nicholas", firstName: "Nicholas", lastName: "Jaramillo", name: "Nicholas Jaramillo", title: null, vCardFilename: "nicholas-jaramillo.vcf" },
  andrea: { ...sharedContact, slug: "andrea", firstName: "Andrea", lastName: "Jaramillo", name: "Andrea Jaramillo", title: null, vCardFilename: "andrea-jaramillo.vcf" },
  suzi: { ...sharedContact, slug: "suzi", firstName: "Suzi", lastName: "Shows", name: "Suzi Shows", title: null, vCardFilename: "suzi-shows.vcf" },
  canyon: { ...sharedContact, slug: "canyon", firstName: "Canyon", lastName: "Shows", name: "Canyon Shows", title: null, vCardFilename: "canyon-shows.vcf" },
} satisfies Record<string, ContactCard>;

export type ContactCardSlug = keyof typeof contactCards;

export const josephJaramillo = contactCards.joseph;
