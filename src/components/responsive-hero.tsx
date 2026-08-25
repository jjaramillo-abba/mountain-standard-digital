import Link from "next/link";
import { Header } from "@/components/site-shell";

type Variant = "a" | "b" | "c";

function TransformInterface() {
  return <div className="transform-system" role="img" aria-label="A fictional business website transforming from a rigid desktop layout into a refined mobile website">
    <div className="interface-stage">
      <div className="interface-window">
        <div className="interface-bar"><span className="interface-brand">NORTHLINE</span><div className="interface-nav"><i/> <i/> <i/></div><span className="interface-menu">MENU</span></div>
        <div className="interface-main">
          <div className="interface-copy"><span className="interface-eyebrow">SPACE, CONSIDERED</span><strong>A place for your next chapter.</strong><p>Thoughtful spaces for how life actually moves.</p><b>Explore spaces <em>↗</em></b></div>
          <div className="interface-image"><span className="image-sun"/><span className="image-block image-block-one"/><span className="image-block image-block-two"/><span className="image-line"/></div>
          <div className="interface-details"><span>01</span><p>Designed around the way you live now.</p><i/></div>
        </div>
      </div>
      <div className="interface-progress"><span>DESKTOP</span><i/><span>RESPONSIVE</span><i/><span>MOBILE</span></div>
    </div>
  </div>;
}

const layoutNames: Record<Variant,string> = {a:"EDITORIAL SPLIT",b:"RESPONSIVE COMPOSITION",c:"TYPOGRAPHY / SYSTEM"};

export function ResponsiveHero({variant}:{variant:Variant}) {
  return <div className={`responsive-prototype responsive-${variant}`}>
    <Header/>
    <main><section className="responsive-hero">
      <div className="responsive-wrap">
        <div className="responsive-content">
          <p className="responsive-name">MOUNTAIN STANDARD <span>DIGITAL</span></p>
          <p className="responsive-kicker">WEBSITES THAT MOVE WITH YOU <i/> {layoutNames[variant]}</p>
          <h1>Your business moved forward.<br/>Your website should too.</h1>
          <p className="responsive-copy">Mountain Standard Digital modernizes outdated websites into fast, clear, mobile-first experiences that better represent the business behind them.</p>
          <div className="responsive-actions"><Link className="responsive-primary" href="/contact">Modernize My Website <span>↗</span></Link><Link className="responsive-secondary" href="/process">See How It Works</Link></div>
        </div>
        <TransformInterface/>
      </div>
      <p className="responsive-index" aria-hidden="true">MSD <span>02</span></p>
    </section></main>
  </div>;
}
