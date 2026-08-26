import Link from "next/link";
import { SavagesStudy } from "@/components/savages-study";

const principles = [
  ["01", "Mobile-first", "Built for how customers actually browse today."],
  ["02", "Built around your business", "Keep what makes your company recognizable. Improve the experience around it."],
  ["03", "Clear scope", "Know what we’re changing, what we’re keeping, and what it will cost before we build."],
];

const inclusions = [
  "Modern visual refresh",
  "Mobile-first responsive design",
  "Navigation and usability improvements",
  "Existing content migration and cleanup",
  "Updated calls to action",
  "Contact and appointment integrations where appropriate",
  "Performance optimization and basic search setup",
  "Launch and deployment",
];

const steps = [
  ["01", "Show us your site", "We'll review what you have and talk through what you want to improve."],
  ["02", "We refresh it", "We redesign the experience around modern desktop and mobile standards."],
  ["03", "You review it", "See the new site before anything changes on your current website."],
  ["04", "We launch it", "Once you approve it, we'll take care of getting the new experience online."],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

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
        <div className="proof-rebuild-heading"><p className="home-kicker">THE TRANSFORMATION</p><h2 id="proof-title">Same business. <em>Better digital experience.</em></h2><p>We kept the recognizable Savages character and core content, then rebuilt the experience around clearer hierarchy, stronger imagery, and mobile-first behavior.</p></div>
        <div className="proof-rebuild-stage">
          <article className="proof-rebuild-legacy"><div className="proof-rebuild-label"><span>BEFORE</span><small>Legacy desktop</small></div><div className="proof-legacy-viewport"><SavagesStudy kind="legacy" embedded/></div></article>
          <div className="proof-rebuild-arrow" aria-label="Legacy website modernized into a new digital experience">→</div>
          <article className="proof-rebuild-modern"><div className="proof-rebuild-label"><span>MODERNIZED</span><small>Modern desktop</small></div><div className="proof-modern-viewport"><SavagesStudy kind="modern" embedded/></div><div className="proof-modern-phone"><span>MOBILE FIRST</span><div><SavagesStudy kind="mobile" embedded/></div></div></article>
        </div>
      </div>
    </section>

    <section className="home-includes" aria-labelledby="includes-title">
      <div className="wrap home-includes-grid">
        <div><p className="home-kicker">WHAT YOU GET</p><h2 id="includes-title">A professional website refresh without the agency overhead.</h2></div>
        <div className="includes-list">{inclusions.map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</p>)}</div>
        <blockquote>We work with your existing business, content, photos, and brand. The goal isn&apos;t to turn you into somebody else. It&apos;s to make the business you&apos;ve already built look as good online as it does in person.</blockquote>
      </div>
    </section>

    <section className="home-process" aria-labelledby="process-title">
      <div className="wrap"><div className="home-section-lead compact"><p className="home-kicker">HOW IT WORKS</p><h2 id="process-title">From outdated to updated.<br />Without the hassle.</h2></div>
        <div className="process-steps">{steps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </div>
    </section>

    <section className="home-pricing" aria-labelledby="pricing-title">
      <div className="wrap"><div className="pricing-intro"><p className="home-kicker">STRAIGHTFORWARD PRICING</p><h2 id="pricing-title">A clear path to a better website.</h2><p>One focused refresh, followed by care when you need it.</p></div>
        <div className="pricing-offers">
          <article className="pricing-primary"><p>WEBSITE REFRESH</p><h3>Starting at <strong>$500</strong></h3><span>Modernize your existing small-business website with a professional, mobile-friendly experience.</span><ul><li>Design refresh</li><li>Mobile optimization</li><li>Content migration</li><li>Contact functionality</li><li>Launch support</li></ul><Link href="/contact">Start My Refresh <Arrow /></Link></article>
          <article className="pricing-care"><p>HOSTING &amp; CARE</p><h3><strong>$50</strong><small>/month</small></h3><span>Keep the new experience fast, current, and looked after.</span><ul><li>Secure managed hosting</li><li>Website maintenance</li><li>Routine updates</li><li>Performance monitoring</li><li>Support</li></ul></article>
        </div>
        <p className="pricing-note">Pricing applies to standard informational small-business websites. We&apos;ll confirm scope and pricing before work begins.</p>
      </div>
    </section>

    <section className="home-local" aria-labelledby="local-title">
      <div className="local-lines" aria-hidden="true"><i /><i /><i /></div>
      <div className="wrap local-grid"><div><p className="home-kicker">LOCAL, WITH RANGE</p><h2 id="local-title">Built for local businesses. By people who understand local business.</h2></div><div><p>Mountain Standard Digital works with small businesses across the Southwest and Rocky Mountain region. We&apos;re building MSD around something increasingly difficult to find online: straightforward pricing, responsive service, and someone you can actually talk to.</p><strong>Local perspective. <em>Modern technology.</em> Personal service.</strong></div></div>
    </section>

    <section className="home-final-cta" aria-labelledby="final-title">
      <div className="wrap"><p className="home-kicker">THE NEXT MOVE</p><h2 id="final-title">Your website doesn&apos;t need to stay stuck in the past.</h2><p>See what a modern version of your business could look like.</p><div><Link className="home-cta-primary" href="/contact">Refresh My Website <Arrow /></Link><Link className="home-cta-secondary" href="/contact">Talk With Us</Link></div></div>
    </section>
  </div>;
}
