"use client";

import { Shell } from "@/components/site-shell";
import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function Page() {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/netlify-form.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data as unknown as Record<string, string>).toString() });
      if (!response.ok) throw new Error("Unable to submit form");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <Shell><section className={styles.contact}><div className={`wrap ${styles.layout}`}><div className={styles.intro}><p className="eyebrow">START A CONVERSATION</p><h1 className={`display ${styles.title}`}>Tell us what you have—and what you need next.</h1><p className={styles.supporting}>Whether you&apos;re modernizing an existing website or starting from scratch, give us a little context. We&apos;ll take it from there.</p><p className={styles.trust}>U.S.-based. Headquartered in the Rocky Mountain region.</p></div><form name="msd-contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={submit} className={styles.form}><input type="hidden" name="form-name" value="msd-contact"/><p className={styles.honeypot} aria-hidden="true"><label>Leave blank<input name="bot-field" tabIndex={-1}/></label></p>{status === "success" ? <div className={styles.success} role="status"><h2 className="display">Thank you.</h2><p>Your message has been received. We&apos;ll be in touch soon.</p></div> : <><div className={styles.fieldGrid}><label className={styles.field}>Name<input required name="name" autoComplete="name" className="focus-ring"/></label><label className={styles.field}>Business<input required name="business" autoComplete="organization" className="focus-ring"/></label><label className={styles.field}>Email<input required name="email" type="email" autoComplete="email" className="focus-ring"/></label><label className={styles.field}>Phone<span className={styles.optional}>Optional</span><input name="phone" type="tel" autoComplete="tel" className="focus-ring"/></label></div><fieldset className={styles.need}><legend>What do you need?</legend><div className={styles.radios}><label><input required name="project_need" type="radio" value="Modernize an existing website"/> <span>Modernize an existing website</span></label><label><input name="project_need" type="radio" value="Build a new website"/> <span>Build a new website</span></label><label><input name="project_need" type="radio" value="Not sure yet"/> <span>Not sure yet</span></label></div></fieldset><div className={styles.fieldGrid}><label className={styles.field}>Current website<span className={styles.optional}>Optional</span><input name="current_website" type="url" autoComplete="url" className="focus-ring"/></label><label className={styles.field}>When are you hoping to get started?<span className={styles.optional}>Optional</span><select name="timeline" className="focus-ring" defaultValue=""><option value="">Select a timeline</option><option>As soon as possible</option><option>Within 1–3 months</option><option>Just exploring</option></select></label></div><label className={`${styles.field} ${styles.details}`}>Tell us a little about what you need<textarea name="project_details" rows={5} className="focus-ring"/></label>{status === "error" && <p role="alert" className={styles.error}>We couldn&apos;t send your message. Please try again.</p>}<button disabled={status === "submitting"} className={`focus-ring ${styles.submit}`}>{status === "submitting" ? "Sending…" : "Start the Conversation"}</button></>}</form></div></section></Shell>;
}
