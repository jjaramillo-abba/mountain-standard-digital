import Image from "next/image";

type SavagesHeaderProps = {
  active?: "flies" | "gear";
  mobile?: boolean;
  phone?: boolean;
  responsive?: boolean;
};

export function SavagesHeader({ active = "flies", mobile = false, phone = false, responsive = false }: SavagesHeaderProps) {
  const className = `modern-showcase-head savages-shared-header${mobile ? " is-mobile" : ""}${phone ? " is-phone" : ""}${responsive ? " is-responsive" : ""}`;

  return <header className={className}>
    <div><b>SAVAGES</b><small>FLY GEAR</small></div>
    {!mobile && <nav aria-label="Savages primary navigation"><button className={active === "flies" ? "is-active" : undefined} type="button" aria-current={active === "flies" ? "page" : undefined}><em>01</em> FLIES</button><button className={active === "gear" ? "is-active" : undefined} type="button" aria-current={active === "gear" ? "page" : undefined}><em>02</em> GEAR</button><button type="button"><em>03</em> STORIES</button><button type="button"><em>04</em> ABOUT</button></nav>}
    <Image className="savages-study-logo" src="/assets/savages-logo.png" alt="Savages Fly Gear" width={mobile ? 42 : 50} height={mobile ? 42 : 50} priority />
    {(mobile || responsive) && <strong>MENU</strong>}
  </header>;
}
