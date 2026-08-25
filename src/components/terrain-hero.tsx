import Link from "next/link";
import { Header } from "@/components/site-shell";

type Variant = "a" | "b" | "c";

const points = [
  "0,390 92,318 170,357", "92,318 196,222 170,357", "170,357 196,222 290,303",
  "196,222 326,137 290,303", "290,303 326,137 409,252", "326,137 492,88 409,252",
  "409,252 492,88 574,214", "492,88 651,166 574,214", "574,214 651,166 748,300",
  "651,166 806,236 748,300", "748,300 806,236 920,390", "0,390 170,357 306,430",
  "170,357 290,303 306,430", "290,303 409,252 457,430", "290,303 457,430 306,430",
  "409,252 574,214 593,430", "409,252 593,430 457,430", "574,214 748,300 728,430",
  "574,214 728,430 593,430", "748,300 920,390 728,430"
];

function TerrainArtwork() {
  return <svg className="terrain-art" viewBox="0 0 920 430" role="img" aria-label="An abstract mountain terrain progressing from a digital mesh to layered geometric planes" preserveAspectRatio="xMidYMid meet">
    <defs>
      <linearGradient id="terrain-blue" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6e899b"/><stop offset="1" stopColor="#324858"/></linearGradient>
      <linearGradient id="terrain-cream" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#fbf8f0"/><stop offset="1" stopColor="#d7e0e2"/></linearGradient>
      <clipPath id="mountain-clip"><path d="M0 390L92 318 196 222 326 137 492 88 651 166 806 236 920 390V430H0Z"/></clipPath>
    </defs>
    <g className="terrain-grid" opacity=".34"><path d="M40 42H880M40 112H880M40 182H880M40 252H880M40 322H880"/><path d="M80 20V405M220 20V405M360 20V405M500 20V405M640 20V405M780 20V405"/></g>
    <g className="terrain-contours" clipPath="url(#mountain-clip)"><path d="M37 342C164 262 263 264 365 172c73-67 151-66 225-23 65 38 129 97 275 146"/><path d="M10 379C139 295 255 305 381 194c86-75 161-77 249-26 60 35 116 84 257 134"/><path d="M85 405c133-77 226-60 331-160 81-77 153-82 238-30 63 38 101 77 187 113"/></g>
    <g className="terrain-planes" clipPath="url(#mountain-clip)">
      {points.map((p, i) => <polygon key={p} points={p} className={`plane plane-${i % 5}`} />)}
    </g>
    <g className="terrain-mesh" clipPath="url(#mountain-clip)">
      {points.map(p => <polygon key={p} points={p}/>) }
      {["92,318","196,222","326,137","492,88","651,166","806,236","170,357","290,303","409,252","574,214","748,300"].map(p => { const [cx,cy]=p.split(","); return <circle key={p} cx={cx} cy={cy} r="3"/> })}
    </g>
    <path className="terrain-ridge" d="M0 390L92 318 196 222 326 137 492 88 651 166 806 236 920 390"/>
  </svg>;
}

const labels: Record<Variant, string> = { a: "STRUCTURED SPLIT", b: "IMMERSIVE TERRAIN", c: "EDITORIAL OVERLAP" };

export function TerrainHero({variant}: {variant: Variant}) {
  return <div className={`prototype prototype-${variant}`}>
    <Header />
    <main>
      <section className="signature-hero">
        <div className="hero-technical-label" aria-hidden="true"><span>38.274° N</span><span>109.551° W</span><span>MSD / 02A</span></div>
        <div className="hero-wrap">
          <div className="hero-content">
            <p className="hero-kicker">MOUNTAIN STANDARD DIGITAL <span>—</span> {labels[variant]}</p>
            <h1>Modern websites built for how your customers actually browse today.</h1>
            <p className="hero-copy">We turn outdated websites into fast, clear, mobile-first experiences that better represent the quality of the business behind them.</p>
            <div className="hero-actions"><Link className="hero-primary" href="/contact">Modernize My Website <span>↗</span></Link><Link className="hero-secondary" href="/process">See How It Works <span>↓</span></Link></div>
          </div>
          <div className="terrain-stage"><TerrainArtwork/><p className="terrain-caption"><span>01 / 04</span> DIGITAL STRUCTURE <i/> RESOLVED EXPERIENCE</p></div>
        </div>
        <p className="hero-side-note">Digital elevation study<br/>for modern business.</p>
      </section>
    </main>
  </div>;
}
