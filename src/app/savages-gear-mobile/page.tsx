import { SavagesGearContent } from "@/components/savages-gear";

export default function SavagesGearMobileShowcase() {
  return <main className="savages-gear-mobile-showcase">
    <div className="savages-gear-phone" aria-label="Savages Fly Gear mobile showcase">
      <div className="savages-gear-phone-screen">
        <SavagesGearContent phonePreview />
      </div>
    </div>
  </main>;
}
