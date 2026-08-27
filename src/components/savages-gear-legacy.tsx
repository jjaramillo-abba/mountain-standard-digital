import Image from "next/image";
import Link from "next/link";

const products = [
  { name: "Last Cast", image: "/assets/savages-sticker-last-cast.png", alt: "Last Cast Savages Fly Gear sticker artwork" },
  { name: "Dry January", image: "/assets/savages-sticker-dry-january.png", alt: "Dry January Savages Fly Gear sticker artwork" },
  { name: "Streamer Envy", image: "/assets/savages-sticker-streamer-envy.png", alt: "Streamer Envy Savages Fly Gear sticker artwork" },
  { name: "I Like Big Bugs", image: "/assets/savages-sticker-big-bugs.png", alt: "I Like Big Bugs Savages Fly Gear sticker artwork" },
  { name: "LeBrown James", image: "/assets/savages-sticker-lebrown-james.png", alt: "LeBrown James Savages Fly Gear sticker artwork" },
  { name: "Endless Summer", image: "/assets/savages-sticker-endless-summer.png", alt: "Endless Summer Savages Fly Gear sticker artwork" },
  { name: "Strippin' Streamers", image: "/assets/savages-sticker-strippin-streamers.png", alt: "Strippin Streamers Savages Fly Gear sticker artwork" },
];

export function SavagesGearLegacyContent() {
  return <div className="savages-gear-legacy"><div className="legacy-gear-site">
    <header className="legacy-gear-header"><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={76} height={76} priority /><div><p>SAVAGES FLY GEAR</p><small>Streamer flies and gear for serious anglers.</small></div><form aria-label="Site search"><input aria-label="Search our site" placeholder="Search our site" /><button type="button">Search</button></form></header>
    <nav className="legacy-gear-nav" aria-label="Savages primary navigation"><Link href="/savages-legacy">Home</Link><Link href="/savages-legacy">Flies</Link><Link className="is-active" href="/savages-gear-legacy" aria-current="page">Gear</Link><Link href="/savages-legacy">Stories</Link><Link href="/savages-legacy">About</Link><Link href="/savages-legacy">Contact</Link></nav>
    <section className="legacy-gear-content"><aside aria-label="Gear categories"><p>GEAR CATEGORIES</p><a href="#stickers">Stickers</a><a href="#stickers">Fly Boxes</a><a href="#stickers">Hats</a><a href="#stickers">Shirts</a><a href="#stickers">Accessories</a></aside><div className="legacy-gear-catalog"><p className="legacy-breadcrumb">Home &gt; Gear</p><h1>Gear</h1><p className="legacy-gear-intro">Savages stickers and gear for the river, truck, cooler, and fly box.</p><div id="stickers" className="legacy-product-grid">{products.map((product) => <article key={product.name}><div className="legacy-product-image"><Image src={product.image} alt={product.alt} fill sizes="240px" /></div><h2>{product.name}</h2><p>$5.00</p><button type="button">View Item</button></article>)}</div></div></section>
    <footer className="legacy-gear-footer"><span>© 2016 Savages Fly Gear</span><span>Home | Flies | Gear | Stories | About | Contact</span><span>Built for streamer anglers.</span></footer>
  </div></div>;
}
