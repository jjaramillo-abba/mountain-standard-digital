"use client";

import { useEffect, useState } from "react";

type Theme = "holiday" | "game-day" | "halloween";

const themes: Record<Theme, { label: string; number: string; announcement: string; title: React.ReactNode; supporting: string }> = {
  holiday: {
    label: "HOLIDAY",
    number: "02",
    announcement: "HAPPY HOLIDAYS",
    title: <>Holiday cheer.<br />Beautiful all season.</>,
    supporting: "Wishing you and yours a happy holiday season.",
  },
  "game-day": {
    label: "GAME DAY",
    number: "03",
    announcement: "GAME DAY IN THE MOUNTAIN WEST",
    title: <>Go Broncos!</>,
    supporting: "Proudly serving our community on game day and every day.",
  },
  halloween: {
    label: "HALLOWEEN",
    number: "04",
    announcement: "HAPPY HALLOWEEN",
    title: <>Scary good landscaping.</>,
    supporting: "Great outdoor spaces shouldn't be frightening.",
  },
};

const themeOrder: Theme[] = ["holiday", "game-day", "halloween"];

function PineRidgeNav() {
  return <div className="theme-browser-nav"><b><span aria-hidden="true">♟</span> PINE RIDGE <small>LANDSCAPING</small></b><span>SERVICES　 ABOUT　 PROJECTS　 CONTACT</span></div>;
}

function ThemeDecorations({ theme }: { theme: Theme }) {
  if (theme === "holiday") return <div className="theme-decorations theme-decorations-holiday" aria-hidden="true">
    <i className="theme-snowflake theme-snowflake-far theme-snowflake-one" /><i className="theme-snowflake theme-snowflake-near theme-snowflake-two" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-three" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-four" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-five" /><i className="theme-snowflake theme-snowflake-near theme-snowflake-six" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-seven" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-eight" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-nine" /><i className="theme-snowflake theme-snowflake-near theme-snowflake-ten" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-eleven" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-twelve" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-thirteen" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-fourteen" /><i className="theme-snowflake theme-snowflake-near theme-snowflake-fifteen" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-sixteen" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-seventeen" /><i className="theme-snowflake theme-snowflake-mid theme-snowflake-eighteen" /><i className="theme-snowflake theme-snowflake-near theme-snowflake-nineteen" /><i className="theme-snowflake theme-snowflake-far theme-snowflake-twenty" />
    <i className="theme-tree-twinkle theme-tree-twinkle-one" /><i className="theme-tree-twinkle theme-tree-twinkle-two" /><i className="theme-tree-twinkle theme-tree-twinkle-three" />
  </div>;
  if (theme === "game-day") return <div className="theme-decorations theme-decorations-game-day" aria-hidden="true"><i className="theme-yard-lines" /><i className="theme-football theme-football-one" /><i className="theme-football theme-football-two" /></div>;
  return <div className="theme-decorations theme-decorations-halloween" aria-hidden="true"><i className="theme-web theme-web-left" /><i className="theme-web theme-web-right" /><i className="theme-bat theme-bat-one" /><i className="theme-bat theme-bat-two" /><i className="theme-leaf theme-leaf-one" /><i className="theme-leaf theme-leaf-two" /></div>;
}

export function ThemeShowcase() {
  const [activeTheme, setActiveTheme] = useState<Theme>("holiday");
  const [hasInteracted, setHasInteracted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reducedMotion || hasInteracted) return;
    const timer = window.setInterval(() => {
      setActiveTheme((current) => themeOrder[(themeOrder.indexOf(current) + 1) % themeOrder.length]);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [hasInteracted, reducedMotion]);

  const selectTheme = (theme: Theme) => {
    setHasInteracted(true);
    setActiveTheme(theme);
  };
  const active = themes[activeTheme];

  return <section className="pricing-seasonal-example" aria-labelledby="seasonal-example-title">
    <p className="pricing-seasonal-eyebrow" id="seasonal-example-title">SEE WHAT A SEASONAL THEME CAN DO</p>
    <div className="pricing-seasonal-comparison">
      <article className="theme-preview theme-preview-standard"><p className="theme-preview-label">STANDARD SITE / 01</p><div className="theme-browser"><PineRidgeNav /><div className="theme-scene"><div><h3>Quality landscaping.<br />Built to last.</h3><p>Serving homeowners and businesses with professional landscaping solutions.</p><button type="button" tabIndex={-1}>REQUEST A QUOTE</button></div></div></div></article>
      <div className="theme-arrow" aria-hidden="true" />
      <article className="theme-preview theme-preview-seasonal" data-theme={activeTheme}>
        <div className="theme-selector" aria-label="Select a temporary site theme">
          {themeOrder.map((theme) => <button key={theme} type="button" className={activeTheme === theme ? "is-active" : ""} aria-pressed={activeTheme === theme} onClick={() => selectTheme(theme)}>{themes[theme].label}</button>)}
        </div>
        <p className="theme-preview-label">{active.label} / {active.number}</p>
        <div className="theme-browser theme-browser-themed" key={activeTheme}>
          <PineRidgeNav />
          <div className="theme-announcement">{active.announcement}</div>
          <div className="theme-scene"><ThemeDecorations theme={activeTheme} /><div><h3>{active.title}</h3><p>{active.supporting}</p><button type="button" tabIndex={-1}>REQUEST A QUOTE</button></div></div>
        </div>
      </article>
    </div>
    <div className="pricing-seasonal-caption"><h3>Same website. A different moment.</h3><p>Seasonal and event themes can temporarily transform the look and feel of your site for holidays, promotions, local events, anniversaries, or approved game-day campaigns without rebuilding the underlying website.</p></div>
  </section>;
}

// TEST THEME: Denver Broncos reference requires licensing/brand approval before production use.
