import Image from "next/image";
import Link from "next/link";

const stickers = [
  { name: "Dry January", image: "/assets/savages-sticker-dry-january.png", alt: "Dry January Savages Fly Gear sticker artwork", className: "gear-art-dry" },
  { name: "Streamer Envy", image: "/assets/savages-sticker-streamer-envy.png", alt: "Streamer Envy Savages Fly Gear sticker artwork", className: "gear-art-envy" },
  { name: "I Like Big Bugs", image: "/assets/savages-sticker-big-bugs.png", alt: "I Like Big Bugs Savages Fly Gear sticker artwork", className: "gear-art-bugs" },
  { name: "LeBrown James", image: "/assets/savages-sticker-lebrown-james.png", alt: "LeBrown James Savages Fly Gear sticker artwork", className: "gear-art-lebrown" },
  { name: "Endless Summer", image: "/assets/savages-sticker-endless-summer.png", alt: "Endless Summer Savages Fly Gear sticker artwork", className: "gear-art-summer" },
  { name: "Strippin' Streamers", image: "/assets/savages-sticker-strippin-streamers.png", alt: "Strippin' Streamers Savages Fly Gear sticker artwork", className: "gear-art-strippin" },
];

export default function SavagesGear() {
  return <main className="savages-gear-page">
    <header className="gear-header">
      <Link className="gear-lockup" href="/savages-modern" aria-label="Savages Fly Gear home"><span>SAVAGES</span><small>FLY GEAR</small></Link>
      <nav aria-label="Savages primary navigation"><Link href="/savages-modern"><em>01</em> FLIES</Link><Link className="is-active" href="/savages-gear" aria-current="page"><em>02</em> GEAR</Link><a href="#collection"><em>03</em> STORIES</a><a href="#about"><em>04</em> ABOUT</a></nav>
      <Image className="gear-logo" src="/assets/savages-logo.png" alt="Savages Fly Gear" width={50} height={50} priority />
    </header>

    <section className="gear-intro"><div><p>GEAR / STICKERS</p><h1>Stick it somewhere<br />irresponsible.</h1></div><span>A collection of Savages artwork for fly boxes, coolers, trucks, boats, and wherever else good judgment runs out.</span></section>

    <section className="gear-feature" aria-labelledby="last-cast-title"><div className="gear-feature-copy"><p>FEATURED ARTWORK / 01</p><h2 id="last-cast-title">LAST<br />CAST.</h2><span>Sticker · $5</span><a href="#collection">View Sticker <b>→</b></a></div><figure><Image src="/assets/savages-sticker-last-cast.png" alt="Last Cast Savages Fly Gear sticker artwork" fill sizes="(max-width: 800px) 100vw, 60vw" priority /></figure></section>

    <section id="collection" className="gear-collection" aria-labelledby="collection-title"><div className="gear-collection-heading"><p>THE STICKER BIN / 07</p><h2 id="collection-title">Built for boxes,<br />boats, and bad ideas.</h2></div><div className="gear-art-grid"><div className="gear-art-row">{stickers.slice(0, 3).map((sticker) => <article className={sticker.className} key={sticker.name}><div><Image src={sticker.image} alt={sticker.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><p>{sticker.name}<span>Sticker · $5</span></p></article>)}</div><div className="gear-art-row">{stickers.slice(3).map((sticker) => <article className={sticker.className} key={sticker.name}><div><Image src={sticker.image} alt={sticker.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" /></div><p>{sticker.name}<span>Sticker · $5</span></p></article>)}</div></div></section>

    <section id="about" className="gear-close"><p>SAVAGES FLY GEAR</p><h2>Keep it weird.<br />Keep stripping.</h2><Link href="/savages-modern">Back to the water <span>→</span></Link></section>
  </main>;
}
