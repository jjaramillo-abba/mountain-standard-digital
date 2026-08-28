"use client";

import Image from "next/image";
import { useState } from "react";
import type { ContactCard } from "@/lib/contact-cards";
import styles from "./digital-business-card.module.css";

type QuickActionProps = {
  label: string;
  onClick: () => void;
  busy?: boolean;
};

function QuickAction({ label, onClick, busy }: QuickActionProps) {
  return <button className={`${styles.quickAction} focus-ring`} type="button" onClick={onClick} disabled={busy}>{busy ? "Opening…" : label}<span aria-hidden="true">↗</span></button>;
}

export function DigitalBusinessCard({ contact }: { contact: ContactCard }) {
  const [busyAction, setBusyAction] = useState<"call" | "text" | "email" | "vcard" | null>(null);
  const [status, setStatus] = useState("");

  async function privateDetails() {
    const response = await fetch(`/api/contact-card/${contact.slug}`, { cache: "no-store" });
    if (!response.ok) throw new Error("Unavailable");
    return response.json() as Promise<{ mobile: string | null; email: string | null }>;
  }

  async function openContactAction(action: "call" | "text" | "email") {
    setBusyAction(action);
    setStatus("");
    try {
      const details = await privateDetails();
      const value = action === "email" ? details.email : details.mobile;
      if (!value) {
        setStatus(`${action === "email" ? "Email" : action === "call" ? "Calling" : "Text messaging"} is not available yet.`);
        return;
      }
      window.location.assign(`${action === "call" ? "tel" : action === "text" ? "sms" : "mailto"}:${value}`);
    } catch {
      setStatus("This contact action is unavailable right now.");
    } finally {
      setBusyAction(null);
    }
  }

  async function saveContact() {
    setBusyAction("vcard");
    setStatus("");
    try {
      const response = await fetch(`/api/contact-card/${contact.slug}/vcard`, { cache: "no-store" });
      if (!response.ok) throw new Error("Unavailable");
      const objectUrl = URL.createObjectURL(await response.blob());
      const download = document.createElement("a");
      download.href = objectUrl;
      download.download = contact.vCardFilename;
      document.body.append(download);
      download.click();
      download.remove();
      URL.revokeObjectURL(objectUrl);
    } catch {
      setStatus("Contact download is unavailable right now.");
    } finally {
      setBusyAction(null);
    }
  }

  return <main className={styles.page}>
    <article className={styles.card} aria-labelledby="contact-name">
      <Image className={styles.mountain} src="/assets/msd-mountain-outline.png" alt="" width={1161} height={579} priority />
      <header className={styles.header}>
        <a className={`${styles.logo} focus-ring`} href={contact.website} aria-label="Mountain Standard Digital website">
          <Image src="/assets/msd-monogram.png" alt="" width={76} height={51} priority />
          <Image src="/assets/msd-logo.png" alt="Mountain Standard Digital" width={164} height={109} priority />
        </a>
        <span className={styles.headerRule} aria-hidden="true" />
      </header>

      <div className={styles.content}>
        {contact.title && <p className={styles.role}>{contact.title}</p>}
        <h1 id="contact-name">{contact.name}</h1>
        <p className={styles.organization}>{contact.organization}</p>
        <p className={styles.positioning}>Modern websites built for the way people browse now.</p>

        <button className={`${styles.saveContact} focus-ring`} type="button" onClick={saveContact} disabled={busyAction === "vcard"}>
          <span>{busyAction === "vcard" ? "Preparing contact…" : "Save Contact"}</span><span aria-hidden="true">↓</span>
        </button>

        <nav className={styles.actions} aria-label={`Contact ${contact.name}`}>
          <QuickAction label="Call" onClick={() => openContactAction("call")} busy={busyAction === "call"} />
          <QuickAction label="Text" onClick={() => openContactAction("text")} busy={busyAction === "text"} />
          <QuickAction label="Email" onClick={() => openContactAction("email")} busy={busyAction === "email"} />
          <a className={`${styles.quickAction} focus-ring`} href={contact.website}>Website<span aria-hidden="true">↗</span></a>
          {contact.linkedin && <a className={`${styles.quickAction} focus-ring`} href={contact.linkedin}>LinkedIn<span aria-hidden="true">↗</span></a>}
        </nav>
        <p className={styles.status} aria-live="polite">{status}</p>
      </div>

      <footer className={styles.footer}>
        <span>Built in the Mountain West.</span><span aria-hidden="true">MSD</span>
      </footer>
    </article>
  </main>;
}
