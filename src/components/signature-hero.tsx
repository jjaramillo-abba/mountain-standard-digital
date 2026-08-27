import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract Mountain Standard Digital mountain ridgelines">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <image className="mountain-outline" href="/assets/msd-mountain-outline.png" x="-80" y="70" width="1180" height="588" preserveAspectRatio="xMidYMid meet"/>
    </svg>
  </div>;
}

function ResolvedExperience() {
  return <div className="resolved-experience savages-experience" aria-label="Savages Fly Gear homepage experience resolving from Mountain Standard Digital geometry">
    <p className="savages-cue savages-before">BEFORE</p><p className="savages-cue savages-after">MODERNIZED</p><p className="savages-cue savages-mobile-cue">MOBILE FIRST</p>
    <div className="savages-legacy-state">
      <div className="legacy-mini-head"><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={46} height={46}/><b>SAVAGES FLY GEAR</b><span>Home　 Flies　 Gear　 About　 Contact</span><i>Search</i></div>
      <div className="legacy-mini-hero"><Image src="/assets/savages-trout.jpg" alt="Brown trout and streamer fly" fill sizes="31vw"/><div><strong>Savages Fly Gear</strong><small>Streamer flies and gear for serious anglers.</small><button type="button">View Our Flies</button></div></div>
      <div className="legacy-mini-columns">
        <article><h3>Welcome to Savages</h3><p>Savages Fly Gear is built for anglers who fish big water and throw big flies. From proven streamer patterns to the gear we use ourselves, everything here is made with serious fishing in mind.</p><a href="/savages-legacy">Learn More »</a></article>
        <article><h3>Featured Flies</h3><p><b>Yellow Dungeon &amp; Olive Sculpin</b><br/>These proven streamer patterns are tied for long casts and hard takes. See what is currently available in the fly shop.</p><a href="/savages-legacy">View All Flies »</a></article>
        <article><h3>Latest from the River</h3><small>October 14, 2016</small><p>Five tips for fishing streamers when the water starts to cool. A few simple adjustments can make a slow fall day productive.</p><a href="/savages-legacy">Read More »</a></article>
      </div>
      <footer className="legacy-mini-footer"><span>Home | Flies | Gear | About | Contact</span><span>© Savages Fly Gear · Built for streamer anglers.</span></footer>
    </div>
    <div className="savages-modern-state"><div className="modern-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><nav aria-label="Savages primary navigation"><button className="is-active" type="button" aria-current="page"><em>01</em> FLIES</button><button type="button"><em>02</em> GEAR</button><button type="button"><em>03</em> STORIES</button><button type="button"><em>04</em> ABOUT</button></nav><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={50} height={50}/></div><div className="modern-page-track"><div className="modern-mini-body"><div className="modern-mini-image"><Image src="/assets/savages-trout.jpg" alt="Brown trout held beside a streamer fly" fill sizes="42vw"/></div><div className="modern-mini-copy"><p>STREAMER-FOCUSED FLY GEAR</p><h2>CHASE BIG FISH.<br/>THROW BIG FLIES.</h2><span>Streamer-focused flies and gear for anglers who hunt the fish worth remembering.</span><div><button type="button">SHOP GEAR ↗</button><i>#StripStreamers</i></div></div></div><section className="modern-editorial"><div className="modern-editorial-image"><Image src="/assets/savages-flies.jpg" alt="A curated selection of streamer flies" fill sizes="42vw"/></div><div><p>THE STREAMER VAULT / 01</p><h2>BIG FLIES.<br/>BIGGER EATS.</h2><span>Purpose-built patterns for the next hard pull.</span><button type="button">EXPLORE THE COLLECTION ↗</button></div></section></div></div>
    <div className="savages-collection-state"><div className="collection-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><nav>Flies　 Gear　 Stories　 About</nav></div><div className="collection-mini-image"><Image src="/assets/savages-flies.jpg" alt="A curated selection of streamer flies" fill sizes="31vw"/></div><div className="collection-mini-copy"><p>THE STREAMER VAULT / 01</p><h2>BUILT TO<br/>MOVE WATER.</h2><span>Purpose-built patterns for the next hard pull.</span><button type="button">EXPLORE THE COLLECTION ↗</button></div></div>
    <div className="savages-mobile-state"><div className="mobile-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={42} height={42}/><strong>MENU</strong></div><div className="mobile-mini-image"><Image src="/assets/savages-trout.jpg" alt="Brown trout held beside a streamer fly" fill sizes="100vw"/></div><p>STREAMER-FOCUSED FLY GEAR</p><h2>CHASE BIG FISH.<br/>THROW BIG FLIES.</h2><span>Streamer-focused flies and gear for anglers who hunt the fish worth remembering.</span><button type="button">SHOP GEAR ↗</button></div>
  </div>;
}

export function SignatureHero() {
  return <div className="signature-prototype">
    <Header/>
    <main><section className="signature-canvas">
      <SignatureGeometry/>
      <div className="signature-content">
        <p className="signature-name">MOUNTAIN STANDARD <span>DIGITAL</span></p>
        <h1><span>Your business moved forward.</span><span>Your website should too.</span></h1>
        <p className="signature-copy">Mountain Standard Digital modernizes outdated websites into fast, clear, mobile-first experiences that better represent the business behind them.</p>
        <div className="signature-actions"><Link className="signature-primary" href="/contact">Modernize My Website <span>↗</span></Link><Link className="signature-secondary" href="/pricing">See Pricing</Link></div>
      </div>
      <ResolvedExperience/>
    </section></main>
  </div>;
}
