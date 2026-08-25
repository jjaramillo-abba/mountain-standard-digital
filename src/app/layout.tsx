import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { metadataBase:new URL("https://mountain-standard-digital.netlify.app"), title:{default:"Mountain Standard Digital | Websites that keep up",template:"%s | Mountain Standard Digital"}, description:"Modern, mobile-first websites for businesses ready to look as capable online as they are in person.", openGraph:{type:"website",locale:"en_US",siteName:"Mountain Standard Digital"},robots:{index:true,follow:true} };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
