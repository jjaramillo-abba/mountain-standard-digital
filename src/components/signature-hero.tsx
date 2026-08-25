import Link from "next/link";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract spatial geometry aligning into a modern, mobile-oriented digital layout">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="spatial-field">
        <path d="M-90 634C175 448 390 702 640 488S1118 314 1680 466"/><path d="M-50 742C210 548 454 792 726 572s536-145 944 26"/><path d="M90 204c230 142 355-70 578 78s400 48 732-125"/><path d="M414 850c176-124 258-239 449-205s301 20 519-128"/>
      </g>
      <g className="alignment-grid"><path d="M820 192H1515M820 326H1515M820 460H1515M820 594H1515M820 728H1515"/><path d="M922 132V790M1124 132V790M1326 132V790M1492 132V790"/></g>
      <g className="layout-geometry">
        <g className="layout-nav"><path d="M930 188h58M1019 188h44M1094 188h52"/><rect x="1242" y="171" width="104" height="33"/></g>
        <g className="layout-media"><rect className="media-plane" x="930" y="244" width="452" height="248"/><rect className="media-sky" x="930" y="244" width="186" height="248"/><path className="media-crop" d="M960 287h124v162H960zM1147 287h202v74h-202zM1147 385h202v74h-202z"/><path className="media-rule" d="M930 447h452"/></g>
        <g className="layout-copy"><path className="type-strong" d="M930 558h272M930 596h353M930 634h228"/><path className="copy-fine" d="M930 682h160M930 699h228"/><rect x="930" y="744" width="143" height="38"/></g>
        <g className="layout-detail"><path d="M1218 558h163M1218 596h116M1218 634h145"/><path className="detail-accent" d="M1218 682h80"/></g>
      </g>
      <g className="mobile-geometry">
        <path className="mobile-nav" d="M1120 194h48M1285 194h48"/><rect className="mobile-nav-active" x="1350" y="177" width="35" height="32"/>
        <rect className="mobile-media" x="1116" y="253" width="270" height="155"/><rect className="mobile-media-sky" x="1116" y="253" width="104" height="155"/><path className="mobile-shape" d="M1140 277h58v106h-58zM1242 277h119v48h-119zM1242 342h119v41h-119z"/>
        <path className="mobile-type" d="M1116 462h206M1116 493h244M1116 524h152"/><path className="mobile-fine" d="M1116 572h193M1116 590h159"/><rect className="mobile-action" x="1116" y="631" width="139" height="37"/>
      </g>
      <g className="geometry-nodes"><circle cx="974" cy="188" r="4"/><circle cx="976" cy="489" r="4"/><circle cx="973" cy="548" r="4"/><circle cx="1105" cy="761" r="4"/></g>
    </svg>
  </div>;
}

function ResolvedExperience() {
  return <div className="resolved-experience" aria-label="A finished editorial demonstration of a responsive website experience">
    <div className="experience-desktop">
      <div className="experience-nav"><span>STUDIO</span><div><i>Approach</i><i>Spaces</i><i>Journal</i></div><b>Contact</b></div>
      <div className="experience-art" aria-hidden="true"><span className="art-sky"/><span className="art-orbit"/><span className="art-column art-column-a"/><span className="art-column art-column-b"/><span className="art-column art-column-c"/><span className="art-rule"/></div>
      <div className="experience-story"><p>DESIGN WITH DIRECTION</p><h2>Built around the way people browse now.</h2><span>Clear hierarchy. Faster decisions. A better experience on every screen.</span><button type="button">Explore <b>↗</b></button></div>
      <p className="experience-detail">A more considered digital first impression.</p>
    </div>
    <div className="experience-mobile">
      <div className="mobile-experience-nav"><span>STUDIO</span><b>MENU</b></div>
      <div className="mobile-experience-art" aria-hidden="true"><span/><i/><em/></div>
      <p>DESIGN WITH DIRECTION</p><h2>Built around the way people browse now.</h2><span>Clear hierarchy. Faster decisions. A better experience on every screen.</span><button type="button">Explore <b>↗</b></button>
    </div>
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
