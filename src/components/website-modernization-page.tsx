import Image from "next/image";
import Link from "next/link";
import { Shell } from "@/components/site-shell";

const modernizationThemes = [
  ["01", "Navigation", "Simpler paths to what customers need."],
  ["02", "Responsive layout", "Designed for phone first, then scaled intelligently."],
  ["03", "Content hierarchy", "Important information becomes obvious."],
  ["04", "Imagery", "Better crops, scale, placement, and visual storytelling."],
  ["05", "Calls to action", "Contact, booking, directions, and next steps are easier to find."],
  ["06", "Performance & structure", "Less unnecessary weight and a cleaner foundation for what comes next."],
];

function LegacyPreview() {
  return <div className="wm-legacy-preview" aria-label="Legacy Savages Fly Gear website preview">
    <div className="wm-legacy-nav"><b>SAVAGES FLY GEAR</b><span>Home　Flies　Gear　About</span></div>
    <div className="wm-legacy-image"><Image src="/assets/savages-trout.jpg" alt="Brown trout used in the legacy Savages Fly Gear website" fill sizes="(max-width: 800px) 90vw, 36vw" /><div><b>Savages Fly Gear</b><small>Streamer flies and gear for serious anglers.</small><i>View Our Flies</i></div></div>
    <div className="wm-legacy-columns"><span>Welcome to Savages</span><span>Featured Flies</span><span>Latest from the River</span></div>
  </div>;
}

function ModernPreview() {
  return <div className="wm-modern-preview" aria-label="Modernized Savages Fly Gear website preview">
    <div className="wm-modern-nav"><b>SAVAGES<small>FLY GEAR</small></b><span>FLIES　 GEAR　 STORIES　 ABOUT</span></div>
    <div className="wm-modern-body"><div className="wm-modern-image"><Image src="/assets/savages-trout.jpg" alt="Modern Savages Fly Gear website with brown trout" fill sizes="(max-width: 800px) 90vw, 50vw" /></div><div><p>STREAMER-FOCUSED FLY GEAR</p><h3>CHASE BIG FISH.<br />THROW BIG FLIES.</h3><span>Built for anglers who hunt the fish worth remembering.</span><i>SHOP GEAR ↗</i></div></div>
  </div>;
}

function MobilePreview() {
  return <div className="wm-mobile-preview" aria-label="Modern Savages Fly Gear mobile experience">
    <div className="wm-phone-speaker" /><p>STREAMER-FOCUSED FLY GEAR</p><b>SAVAGES<small>FLY GEAR</small></b><div className="wm-mobile-image"><Image src="/assets/savages-trout.jpg" alt="Savages Fly Gear mobile website preview" fill sizes="190px" /></div><h3>CHASE BIG FISH.<br />THROW BIG FLIES.</h3><i>SHOP GEAR</i>
  </div>;
}

export function WebsiteModernizationPage() {
  return <Shell><div className="wm-page">
    <section className="wm-hero" aria-labelledby="wm-hero-title"><div className="wrap wm-hero-grid"><div><p className="wm-kicker">WEBSITE MODERNIZATION</p><h1 id="wm-hero-title">Your business doesn&apos;t need a new identity.<br /><em>It needs a better digital experience.</em></h1><p>We modernize established business websites without throwing away the brand, content, and customer recognition that already work.</p><span>The result is a faster, clearer, mobile-first experience built around how customers browse today.</span><Link className="wm-hero-link focus-ring" href="/contact">Start a Conversation <b>↗</b></Link></div><div className="wm-hero-visual"><p>EXISTING CHARACTER <i>→</i> MODERN EXPERIENCE</p><div><LegacyPreview /><ModernPreview /></div></div></div></section>

    <section className="wm-problem" aria-labelledby="wm-problem-title"><div className="wrap wm-problem-grid"><div><p className="wm-kicker">RECOGNIZE THE GAP</p><h2 id="wm-problem-title">A good business can still have an outdated website.</h2></div><div className="wm-problem-copy"><p>Your business may be doing just fine. The digital experience can still leave customers with a different impression: crowded, hard to follow, and built for a different way of browsing.</p><div>{[["01","The important thing is there — just not where a customer expects it."],["02","A phone turns a workable desktop page into a cramped, uncertain experience."],["03","The next action takes too much searching, scrolling, or second-guessing."],["04","The business feels less current online than it does in person."]].map(([n,text])=><p key={n}><b>{n}</b>{text}</p>)}</div></div></div></section>

    <section className="wm-proof" aria-labelledby="wm-proof-title"><div className="wrap"><div className="wm-section-heading"><p className="wm-kicker">SAME BUSINESS / BETTER EXPERIENCE</p><h2 id="wm-proof-title">The business is still recognizable.<br />The experience is what has fallen behind.</h2></div><div className="wm-proof-flow"><article><p>BEFORE</p><LegacyPreview /><span>Dense information, desktop-first navigation, and a contact path that asks too much work from the customer.</span></article><div className="wm-flow-arrow" aria-hidden="true">→</div><article className="wm-proof-modern"><p>MODERNIZED</p><ModernPreview /><span>A stronger hierarchy, a focused message, and a clear next step—without losing the personality of the business.</span></article></div><div className="wm-proof-mobile"><div><p className="wm-kicker">MOBILE FIRST</p><h3>The same brand, composed for the device customers use in the moment.</h3><p>On a phone, the essential details should be obvious: what you offer, why it matters, and what to do next.</p></div><MobilePreview /></div></div></section>

    <section className="wm-modernize" aria-labelledby="wm-modernize-title"><div className="wrap"><div className="wm-modernize-head"><p className="wm-kicker">WHAT ACTUALLY CHANGES</p><h2 id="wm-modernize-title">A clearer way through the business you&apos;ve already built.</h2></div><div className="wm-theme-list">{modernizationThemes.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="wm-keep" aria-labelledby="wm-keep-title"><div className="wrap wm-keep-grid"><div><p className="wm-kicker">WHAT WE KEEP</p><h2 id="wm-keep-title">Modern doesn&apos;t mean starting over.</h2><p>Modernization works best when it protects the recognition and trust your business has already earned.</p></div><div className="wm-keep-lines"><p><b>Recognizable branding</b><span>so loyal customers still know they&apos;re in the right place.</span></p><p><b>Trusted messaging &amp; content</b><span>so the story stays true while becoming easier to understand.</span></p><p><b>Valuable photography</b><span>so the visual material you already own works harder.</span></p><p><b>Customer familiarity &amp; search equity</b><span>so the transition feels practical, not disruptive.</span></p></div></div></section>

    <section className="wm-mobile-focus" aria-labelledby="wm-mobile-title"><div className="wrap wm-mobile-focus-grid"><MobilePreview /><div><p className="wm-kicker">MOBILE IS THE MOMENT</p><h2 id="wm-mobile-title">Most decisions about your business start with a phone in hand.</h2><p>Customers use their phones to evaluate businesses, find contact information, call, get directions, request appointments, compare options, and decide whether a business feels current and credible.</p><p className="wm-mobile-note">Mobile-first isn&apos;t a smaller desktop site. It&apos;s a clearer experience for the moment a customer needs you.</p></div></div></section>

    <section className="wm-outcomes" aria-labelledby="wm-outcomes-title"><div className="wrap"><p className="wm-kicker">THE RESULT</p><h2 id="wm-outcomes-title">A website that feels like the business you run today.</h2><div>{["Clearer", "Faster", "Easier to use", "Better on mobile", "More credible", "Easier to maintain", "More intentional"].map((item,index)=><span key={item}>{String(index+1).padStart(2,"0")} / {item}</span>)}</div></div></section>

    <section className="wm-pricing-bridge" aria-labelledby="wm-pricing-title"><div className="wrap"><p className="wm-kicker">STRAIGHTFORWARD FROM THE START</p><h2 id="wm-pricing-title">Straightforward enough to understand before we start.</h2><div><p><b>Website Modernization</b><strong>Starting at $500</strong></p><p><b>Hosting &amp; Maintenance</b><strong>$50/month</strong></p><Link className="focus-ring" href="/pricing">See Pricing <span>→</span></Link></div></div></section>

    <section className="wm-final" aria-labelledby="wm-final-title"><div className="wrap"><p className="wm-kicker">READY WHEN YOU ARE</p><h2 id="wm-final-title">Your website doesn&apos;t have to stay outdated.</h2><p>Let&apos;s look at what still works, what&apos;s getting in the way, and what a better experience could become.</p><div><Link className="wm-final-primary focus-ring" href="/contact">Start a Conversation <span>↗</span></Link><Link className="wm-final-secondary focus-ring" href="/pricing">See Pricing</Link></div></div></section>
  </div></Shell>;
}
