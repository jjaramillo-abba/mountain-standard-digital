import { SignatureHero } from "@/components/signature-hero";
import { HomepageSections } from "@/components/homepage-sections";
import { Footer } from "@/components/site-shell";

export default function Home() {
  return <div className="homepage-root"><SignatureHero /><HomepageSections /><Footer /></div>;
}
