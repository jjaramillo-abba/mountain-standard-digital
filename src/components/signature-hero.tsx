import Link from "next/link";
import { Header } from "@/components/site-shell";

function SignatureGeometry() {
  return <div className="signature-geometry" role="img" aria-label="Abstract spatial geometry aligning into a modern, mobile-oriented digital layout">
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g className="spatial-field">
        <path d="M-90 642C180 452 404 734 660 490S1105 300 1680 480"/><path d="M-70 748C194 525 450 816 742 568s530-151 938 36"/><path d="M75 192c245 155 350-82 590 72s403 55 746-137"/><path d="M118 110v694M330 62v758M560 112v652M822 52v796M1088 102v704M1352 48v780M1514 118v628"/>
      </g>
      <g className="alignment-grid"><path d="M72 152H1530M72 289H1530M72 426H1530M72 563H1530M72 700H1530"/><path d="M235 70V824M493 70V824M751 70V824M1009 70V824M1267 70V824"/></g>
      <g className="layout-geometry">
        <g className="layout-nav"><path d="M974 188h58M1062 188h44M1135 188h52M1218 188h48"/></g>
        <g className="layout-media"><rect x="976" y="244" width="406" height="245"/><path d="M1010 286h107v141h-107zM1147 286h190v141h-190z"/><path d="M976 427h406"/></g>
        <g className="layout-copy"><path d="M973 548h296"/><path d="M973 582h338"/><path d="M973 616h218"/><path className="copy-fine" d="M973 668h122M973 684h169"/><rect x="973" y="726" width="132" height="35"/></g>
        <g className="layout-detail"><path d="M1240 548h143M1240 582h93M1240 616h128"/></g>
      </g>
      <g className="mobile-geometry">
        <path className="mobile-nav" d="M1212 199h48M1284 199h48"/>
        <rect className="mobile-media" x="1116" y="253" width="252" height="144"/><path className="mobile-shape" d="M1140 276h82v97h-82zM1250 276h94v97h-94z"/>
        <path className="mobile-type" d="M1116 451h193M1116 479h226M1116 507h141"/><path className="mobile-fine" d="M1116 556h178M1116 572h149"/><rect className="mobile-action" x="1116" y="613" width="128" height="34"/>
      </g>
      <g className="geometry-nodes"><circle cx="974" cy="188" r="4"/><circle cx="976" cy="489" r="4"/><circle cx="973" cy="548" r="4"/><circle cx="1105" cy="761" r="4"/></g>
    </svg>
  </div>;
}

export function SignatureHero() {
  return <div className="signature-prototype">
    <Header/>
    <main><section className="signature-canvas">
      <SignatureGeometry/>
      <div className="signature-content">
        <p className="signature-name">MOUNTAIN STANDARD <span>DIGITAL</span></p>
        <h1>Your business moved forward.<br/>Your website should too.</h1>
        <p className="signature-copy">Mountain Standard Digital modernizes outdated websites into fast, clear, mobile-first experiences that better represent the business behind them.</p>
        <div className="signature-actions"><Link className="signature-primary" href="/contact">Modernize My Website <span>↗</span></Link><Link className="signature-secondary" href="/process">See How It Works</Link></div>
      </div>
    </section></main>
  </div>;
}
