import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract Mountain Standard Digital mountain ridgelines">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="mountain-ridges">
        <path className="ridge-distant" d="M-140 430C14 426 100 397 174 360c58-29 111-30 157-4 55 31 91 9 137-38 49-50 103-59 151-26 35 24 57 45 98 27 66-30 124-62 188-52 51 8 87 41 123 35 63-11 110-67 157-67 42 0 70 22 101 43L1050 286c42 43 83 72 138 68 67-5 116-57 181-59 84-3 137 45 231 35"/>
        <path className="ridge-middle" d="M-130 654c128-5 221-50 294-111 56-47 107-56 154-30 48 27 78 17 116-28 58-71 130-102 191-73 48 23 76 67 127 52 59-18 101-73 137-99L812 334c43 62 91 103 150 91 69-14 120-75 184-70 71 5 107 56 171 39 64-17 113-70 177-71 69-1 110 46 165 47 68 2 118-38 211-38"/>
        <path className="ridge-foreground" d="M-160 880c111 0 191-40 263-108 51-49 100-73 150-54 54 21 89 8 133-48 58-75 137-115 202-83 57 28 79 85 139 77 69-9 114-82 153-125l34-36c42 66 91 112 154 102 76-12 128-91 202-92 74-2 117 53 183 47 71-7 119-74 193-91 73-16 122 29 172 60 61 39 117 34 212 4"/>
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
