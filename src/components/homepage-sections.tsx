import Link from "next/link";
import { SavagesStudy } from "@/components/savages-study";

const principles = [
  ["01", "Mobile-first", "Built for how customers actually browse today."],
  ["02", "Built around your business", "Keep what makes your company recognizable. Improve the experience around it."],
  ["03", "Clear scope", "Know what we’re changing, what we’re keeping, and what it will cost before we build."],
];

const inclusions = [
  ["Modern visual design", "A current visual experience built around your existing brand."],
  ["Mobile-first responsive build", "Designed to work naturally across the screens your customers actually use."],
  ["Clear navigation and contact paths", "Make important information easy to find—and make the next step obvious."],
  ["Existing content carried forward", "Keep useful copy, photography, and brand assets where they still work."],
  ["Launch-ready fundamentals", "Performance, accessibility, migration, and deployment considered as part of the build."],
];

const steps = [
  ["01", "Show us your site", "We review what you have, what still works, and what you want to improve."],
  ["02", "Agree on the direction", "We confirm what stays, what changes, and the scope before we build."],
  ["03", "Review the new site", "See the modernized experience before anything changes on your current website."],
  ["04", "Go live", "Once you approve it, we handle the launch and get the new experience online."],
];

export function HomepageSections() {
  return <div className="homepage-complete">
    <section className="home-modernization" aria-labelledby="modernization-title">
      <div className="wrap modernization-shell">
        <div className="modernization-intro">
          <p className="home-kicker">WEBSITE MODERNIZATION / 01</p>
          <h2 id="modernization-title">A better website starts with what already works.</h2>
          <p>We keep what customers already recognize about your business, then modernize how they experience it — especially on mobile.</p>
        </div>
        <div className="modernization-principles">
          {principles.map(([number, title, copy]) => <article key={number}>
            <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
          </article>)}
        </div>
        <Link className="modernization-cta focus-ring" href="/website-modernization">Explore Website Modernization <span aria-hidden="true">→</span></Link>
      </div>
    </section>

    <section className="home-proof home-proof-rebuild" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="proof-rebuild-heading"><p className="home-kicker">THE TRANSFORMATION</p><h2 id="proof-title">Same business. <em>Better digital experience.</em></h2><p>We kept the recognizable Savages character and core content, then rebuilt the experience around clearer hierarchy, stronger imagery, and mobile-first design.</p></div>
        <div className="proof-rebuild-stage">
          <article className="proof-rebuild-legacy"><div className="proof-rebuild-label"><span>BEFORE</span><small>Legacy desktop</small></div><div className="proof-legacy-viewport"><SavagesStudy kind="legacy" embedded/></div></article>
          <div className="proof-rebuild-arrow" aria-label="Legacy website modernized into a new digital experience">→</div>
          <article className="proof-rebuild-modern"><div className="proof-rebuild-label"><span>MODERNIZED</span><small>Modern desktop</small></div><div className="proof-modern-viewport"><SavagesStudy kind="modern" embedded/></div><div className="proof-modern-phone"><span>MOBILE FIRST</span><div><SavagesStudy kind="mobile" embedded/></div></div></article>
        </div>
      </div>
    </section>

    <section className="home-includes" aria-labelledby="includes-title">
      <div className="wrap home-includes-grid">
        <div><p className="home-kicker">WHAT YOU GET</p><h2 id="includes-title">The essentials of a modern website.<br />Done right.</h2></div>
        <ol className="includes-list">{inclusions.map(([title, description], index) => <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </div>
    </section>

    <section className="home-process" aria-labelledby="process-title">
      <div className="wrap"><div className="home-section-lead compact"><p className="home-kicker">HOW IT WORKS</p><h2 id="process-title">A clear path to a better website.</h2></div>
        <div className="process-steps">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="home-pricing" aria-labelledby="pricing-title">
      <div className="wrap price-preview"><div className="price-preview-intro"><p className="home-kicker">STRAIGHTFORWARD PRICING</p><h2 id="pricing-title">Simple pricing.<br /><em>No surprises.</em></h2><p>Straightforward modernizations start here. If your website needs more, we define the scope and price before work begins.</p></div>
        <div className="price-preview-offers">
          <article><p>01 / WEBSITE MODERNIZATION</p><h3>Starting at $500</h3><span>Focused modernization of an established small-business website.</span></article>
          <article><p>02 / HOSTING &amp; MAINTENANCE</p><h3>$50 <small>/ month</small></h3><span>Managed hosting and ongoing site care after launch.</span></article>
        </div>
        <div className="price-preview-footer"><p>Need something more—or starting from scratch? We’ll scope it with you before we build it.</p><Link className="price-preview-cta focus-ring" href="/pricing">See Pricing <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>

    <section className="home-local" aria-labelledby="local-title">
      <div className="local-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="wrap mountain-west-grid"><div><p className="home-kicker">BUILT IN THE MOUNTAIN WEST</p><h2 id="local-title">Modern websites.<br />Personal service.</h2></div><div className="mountain-west-copy"><p>Mountain Standard Digital works with small businesses across the Southwest and Rocky Mountain region. We combine modern web technology with straightforward communication and a hands-on approach.</p><p className="mountain-west-statement">Straightforward. Responsive. Human.</p><Link className="mountain-west-cta focus-ring" href="/about">About MSD <span aria-hidden="true">→</span></Link></div></div>
    </section>

    <section className="home-final-cta" aria-labelledby="final-title">
      <div className="wrap final-cta-grid"><div><p className="home-kicker">THE NEXT MOVE</p><h2 id="final-title">Ready for a website that better fits your business?</h2></div><div className="final-cta-copy"><p>Show us what you have—or tell us what you need. We’ll help you figure out the right next step.</p><Link className="home-cta-primary focus-ring" href="/contact">Start a Conversation <span aria-hidden="true">→</span></Link></div></div>
    </section>
  </div>;
}
