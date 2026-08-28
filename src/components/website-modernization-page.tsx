import Link from "next/link";
import { Shell } from "@/components/site-shell";

const candidateCriteria = [
  "Your business and brand are still relevant.",
  "Most of your site content is still useful.",
  "The site still serves the right purpose, but the design and usability have fallen behind.",
];
const largerScopeCriteria = [
  "Your business, brand, or content needs to be rebuilt from the ground up.",
  "You need ecommerce, applications, portals, or other custom functionality.",
  "The project goes beyond a focused website modernization.",
];
const modernizationAreas = [
  ["Mobile experience", "Make the site work naturally on the screens customers actually use."],
  ["Navigation & hierarchy", "Make important information easier to find and understand."],
  ["Calls to action", "Make the next step clear without making customers search for it."],
  ["Visual presentation", "Improve typography, spacing, imagery, and overall credibility."],
  ["Structure, performance & discoverability", "Clean up page structure, accessibility, performance, and the technical foundations that help search engines and AI-powered discovery tools understand your site."],
];
const retainedAssets = [
  "Your brand and business personality",
  "Useful content, messaging, and photography",
  "Your domain and customer familiarity",
];

export function WebsiteModernizationPage() {
  return <Shell><div className="wm-page">
    <section className="wm-decision-hero" aria-labelledby="wm-hero-title"><div className="wrap"><p className="wm-eyebrow">WEBSITE MODERNIZATION</p><h1 id="wm-hero-title">Does your website need to be replaced,<br /><em>or does it just need to catch up?</em></h1><p>Most established businesses don&apos;t need to start over. We identify what still works, what gets in the customer&apos;s way, and where modernization will make the biggest difference.</p><div className="wm-hero-actions"><Link className="wm-button focus-ring" href="/contact">Start a Conversation <span>↗</span></Link><Link className="wm-text-link focus-ring" href="/pricing">See Pricing</Link></div></div></section>
    <section className="wm-fit" aria-labelledby="wm-decision-title"><div className="wrap"><p className="wm-eyebrow">THE DECISION</p><h2 id="wm-decision-title">You probably don&apos;t need to start over if...</h2><div className="wm-fit-grid"><article><h3>A strong modernization candidate</h3>{candidateCriteria.map((criterion, index) => <div key={criterion}><b>{String(index + 1).padStart(2, "0")}</b><p>{criterion}</p></div>)}</article><article><h3>When we should scope something larger</h3>{largerScopeCriteria.map((criterion, index) => <div key={criterion}><b>{String(index + 1).padStart(2, "0")}</b><p>{criterion}</p></div>)}<small>Those projects deserve separate scoping beyond the standard modernization offer.</small></article></div></div></section>
    <section className="wm-modernize" aria-labelledby="wm-modernize-title"><div className="wrap"><div><p className="wm-eyebrow">WHAT WE MODERNIZE</p><h2 id="wm-modernize-title">We start with the experience you already have.</h2><p>We look at how customers use your current site, then focus the modernization where it will make the biggest difference.</p></div><ol>{modernizationAreas.map(([title, copy], index) => <li key={title}><b>{String(index + 1).padStart(2, "0")}</b><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol></div></section>
    <section className="wm-preserve" aria-labelledby="wm-keep-title"><div className="wrap"><div><p className="wm-eyebrow">WHAT WE KEEP</p><h2 id="wm-keep-title">The goal isn&apos;t to erase what already works.</h2></div><div>{retainedAssets.map((asset, index) => <p key={asset}><b>{String(index + 1).padStart(2, "0")}</b>{asset}</p>)}<span>Then we build a clearer, faster experience around what’s worth keeping.</span></div></div></section>
    <section className="wm-starting" aria-labelledby="wm-scope-title"><div className="wrap wm-starting-grid"><div><p className="wm-eyebrow">STARTING SCOPE</p><h2 id="wm-scope-title">Website modernization starts at $500.</h2></div><div><p>Straightforward projects typically cover 1–3 primary pages or equivalent simple scope. Larger or more complex projects are scoped separately.</p><Link className="wm-text-link focus-ring" href="/pricing">See Pricing <span aria-hidden="true">→</span></Link></div></div></section>
    <section className="wm-final" aria-labelledby="wm-final-title"><div className="wrap"><p className="wm-eyebrow">NEXT STEP</p><h2 id="wm-final-title">Not sure what your website really needs?</h2><p>Show us what you have. We’ll help you figure out the right next step.</p><Link className="wm-button focus-ring" href="/contact">Start a Conversation <span>↗</span></Link></div></section>
  </div></Shell>;
}
