import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract Mountain Standard Digital mountain ridgelines">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="mountain-ridges">
        <path className="ridge-distant" d="M-140 532C15 510 119 455 218 386c56-39 111-48 161-22 49 26 79 14 121-25 42-39 86-47 127-19 35 24 65 51 109 35 52-19 95-63 157-63 62 0 108 38 151 70 52 38 107 47 180 26"/>
        <path className="ridge-middle" d="M-140 736C10 699 108 629 190 559c48-41 93-58 136-41 43 17 77 1 117-43 50-56 105-82 155-55 43 23 66 68 111 53 46-16 81-76 125-111l42-34c38 56 81 104 135 109 59 5 109-37 171-36"/>
        <path className="ridge-foreground" d="M-170 900C-7 866 103 793 199 702c54-51 105-79 153-55 53 27 91 4 137-54 58-73 108-156 163-216l55-59c27-29 52-25 77 15l162 260c34 54 69 92 118 101 57 11 109-24 166-70 52-42 108-66 179-57"/>
      </g>
    </svg>
  </div>;
}

function ResolvedExperience() {
  return <div className="resolved-experience savages-experience" aria-label="Savages Fly Gear homepage experience resolving from Mountain Standard Digital geometry">
    <p className="savages-cue savages-before">BEFORE</p><p className="savages-cue savages-after">MODERNIZED</p><p className="savages-cue savages-mobile-cue">MOBILE FIRST</p>
    <div className="savages-legacy-state"><div className="legacy-mini-head"><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={46} height={46}/><b>SAVAGES FLY GEAR</b><span>Home　 Flies　 Gear　 About　 Contact</span><i>Search</i></div><div className="legacy-mini-hero"><Image src="/assets/savages-trout.jpg" alt="Brown trout and streamer fly" fill sizes="31vw"/><div><strong>Savages Fly Gear</strong><small>Streamer flies and gear for serious anglers.</small><button type="button">View Our Flies</button></div></div><div className="legacy-mini-columns"><span>Welcome to Savages</span><span>Featured Flies</span><span>Latest from the River</span></div></div>
    <div className="savages-modern-state"><div className="modern-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><nav>Flies　 Gear　 Stories　 About</nav><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={50} height={50}/></div><div className="modern-page-track"><div className="modern-mini-body"><div className="modern-mini-image"><Image src="/assets/savages-trout.jpg" alt="Brown trout held beside a streamer fly" fill sizes="42vw"/></div><div className="modern-mini-copy"><p>STREAMER-FOCUSED FLY GEAR</p><h2>CHASE BIG FISH.<br/>THROW BIG FLIES.</h2><span>Streamer-focused flies and gear for anglers who hunt the fish worth remembering.</span><div><button type="button">SHOP STREAMERS ↗</button><i>#StripStreamers</i></div></div></div><section className="modern-editorial"><div className="modern-editorial-image"><Image src="/assets/savages-flies.jpg" alt="A curated selection of streamer flies" fill sizes="42vw"/></div><div><p>THE STREAMER VAULT / 01</p><h2>BIG FLIES.<br/>BIGGER EATS.</h2><span>Purpose-built patterns for the next hard pull.</span><button type="button">EXPLORE THE COLLECTION ↗</button></div></section></div></div>
    <div className="savages-collection-state"><div className="collection-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><nav>Flies　 Gear　 Stories　 About</nav></div><div className="collection-mini-image"><Image src="/assets/savages-flies.jpg" alt="A curated selection of streamer flies" fill sizes="31vw"/></div><div className="collection-mini-copy"><p>THE STREAMER VAULT / 01</p><h2>BUILT TO<br/>MOVE WATER.</h2><span>Purpose-built patterns for the next hard pull.</span><button type="button">EXPLORE THE COLLECTION ↗</button></div></div>
    <div className="savages-mobile-state"><div className="mobile-mini-head"><div><b>SAVAGES</b><small>FLY GEAR</small></div><Image src="/assets/savages-logo.png" alt="Savages Fly Gear" width={42} height={42}/><strong>MENU</strong></div><div className="mobile-mini-image"><Image src="/assets/savages-trout.jpg" alt="Brown trout held beside a streamer fly" fill sizes="100vw"/></div><p>STREAMER-FOCUSED FLY GEAR</p><h2>CHASE BIG FISH.<br/>THROW BIG FLIES.</h2><span>Streamer-focused flies and gear for anglers who hunt the fish worth remembering.</span><button type="button">SHOP STREAMERS ↗</button></div>
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
        <div className="signature-actions"><Link className="signature-primary" href="/contact">Modernize My Website <span>↗</span></Link><Link className="signature-secondary" href="/process">See How It Works</Link></div>
      </div>
      <ResolvedExperience/>
    </section></main>
  </div>;
}
