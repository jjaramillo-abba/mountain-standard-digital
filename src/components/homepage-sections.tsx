import Image from "next/image";
import Link from "next/link";

const principles = [
  ["01", "Modern on every screen", "Designed for the way customers actually browse today."],
  ["02", "Built around your business", "We keep what makes your company recognizable while improving what doesn't work."],
  ["03", "Simple and affordable", "Professional website modernization without a traditional agency-sized project."],
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
    <section className="home-problem" aria-labelledby="problem-title">
      <div className="wrap">
        <div className="home-section-lead">
          <p className="home-kicker">A WEBSITE SHOULD KEEP UP</p>
          <h2 id="problem-title">Your business has moved forward.<br />Your website should too.</h2>
          <p>A dated website can make a great local business look dated too — especially on a phone. Mountain Standard Digital refreshes existing small-business websites with modern design, better mobile experiences, and clearer customer journeys without turning the project into a months-long rebuild.</p>
        </div>
        <div className="home-principles">
          {principles.map(([number, title, copy]) => <article key={number}>
            <span>{number}</span><h3>{title}</h3><p>{copy}</p>
          </article>)}
        </div>
      </div>
    </section>

    <section className="home-proof" aria-labelledby="proof-title">
      <div className="wrap">
        <div className="home-proof-heading">
          <div><p className="home-kicker">THE TRANSFORMATION, STUDIED</p><h2 id="proof-title">See the difference a refresh can make.</h2></div>
          <p>We don&apos;t believe you need to start over just because your website needs to catch up.</p>
        </div>
        <div className="proof-desktop" aria-label="Savages Fly Gear before and after desktop comparison">
          <div className="proof-legacy">
            <div className="proof-label"><span>BEFORE</span><small>Existing / legacy site</small></div>
            <div className="legacy-proof-frame">
              <div className="legacy-proof-nav"><b>SAVAGES FLY GEAR</b><span>Home　Flies　Gear　About</span></div>
              <div className="legacy-proof-hero"><Image src="/assets/savages-trout.jpg" alt="Legacy Savages Fly Gear home page" fill sizes="(max-width: 800px) 90vw, 34vw" /><div><b>Savages Fly Gear</b><span>Streamer flies and gear for serious anglers.</span><i>View Our Flies</i></div></div>
              <div className="legacy-proof-columns"><span>Welcome to Savages</span><span>Featured Flies</span><span>Latest from the River</span></div>
            </div>
          </div>
          <div className="proof-arrow">→</div>
          <div className="proof-modern">
            <div className="proof-label"><span>AFTER</span><small>Modern MSD redesign</small></div>
            <div className="modern-proof-frame">
              <div className="modern-proof-nav"><b>SAVAGES<small>FLY GEAR</small></b><span>FLIES　 GEAR　 STORIES　 ABOUT</span></div>
              <div className="modern-proof-content"><div className="modern-proof-image"><Image src="/assets/savages-trout.jpg" alt="Modern Savages Fly Gear home page" fill sizes="(max-width: 800px) 90vw, 48vw" /></div><div><p>STREAMER-FOCUSED FLY GEAR</p><h3>CHASE BIG FISH.<br />THROW BIG FLIES.</h3><span>Built for anglers who hunt the fish worth remembering.</span><i>SHOP GEAR <Arrow /></i></div></div>
            </div>
          </div>
        </div>
        <div className="proof-mobile-row">
          <div className="proof-phone proof-phone-old"><p>BEFORE / MOBILE</p><b>SAVAGES<br />FLY GEAR</b><Image src="/assets/savages-trout.jpg" alt="Legacy Savages mobile view" fill sizes="150px" /><span>Old layout.<br />Small actions.</span></div>
          <p>Same business.<br /><em>Same character.</em><br />Better experience.</p>
          <div className="proof-phone proof-phone-new"><p>AFTER / MOBILE</p><b>SAVAGES<small>FLY GEAR</small></b><Image src="/assets/savages-trout.jpg" alt="Modern Savages mobile view" fill sizes="150px" /><span>CHASE BIG FISH.<br />THROW BIG FLIES.</span><i>SHOP GEAR</i></div>
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
