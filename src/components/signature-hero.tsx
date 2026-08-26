import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract Mountain Standard Digital mountain ridgelines">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="mountain-ridges">
        <path className="ridge-far" d="M-120 590L70 552 178 470l72 42 108-132 80 84 96-29 126 76 104-89 80 44 132-128 91 84 94-23 110 73 136-122 116 74 190-36"/>
        <path className="ridge-mid" d="M-100 730l202-42 116-79 83 58 121-171 89 92 101-35 89 65 128-163 94 91 101-44 89 64 124-143 100 97 119-46 93 63 170-59"/>
        <path className="ridge-near" d="M-100 850l194-48 111-102 90 70 111-160 96 91 88-33 111 76 129-184 107 106 91-42 127 80 106-154 116 100 111-49 120 87"/>
        <path className="ridge-accent" d="M390 900l114-109 99 66 103-123 86 72 109-120 95 83 107-33 120 71 96-112 116 81 98-34 124 69"/>
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
