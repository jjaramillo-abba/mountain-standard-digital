import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract Mountain Standard Digital mountain ridgelines">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="mountain-ridges">
        <path className="ridge-distant" d="M-140 438C5 434 81 404 164 367c61-27 119-21 167 2 51 25 80-8 121-50 50-51 102-64 150-34 37 23 53 47 94 28 71-33 134-81 208-56 54 18 70 62 125 48 90-23 143-111 235-100 62 7 96 49 148 42 94-13 158-76 273-65"/>
        <path className="ridge-middle" d="M-130 654c125-7 211-53 290-111 58-42 110-46 158-16 45 28 70 17 105-27 62-79 142-115 208-80 51 27 74 76 131 53 69-27 116-107 202-112 74-4 115 53 184 37 77-18 139-89 218-82 69 5 102 52 155 47 79-8 134-58 225-61"/>
        <path className="ridge-foreground" d="M-160 880c107-1 184-42 258-112 52-50 103-70 153-46 57 27 93 10 135-48 64-89 151-132 223-91 64 37 82 99 151 82 83-21 133-124 224-132 80-7 123 62 196 47 84-17 137-102 228-103 79 0 116 67 184 73 87 8 145-39 228-41"/>
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
