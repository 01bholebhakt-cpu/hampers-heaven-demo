import type { Metadata } from "next"; import "./globals.css"; import Shell from "./shell";
export const metadata: Metadata = {title:"Hampers Heaven — Thoughtfully Gifted",description:"Curated luxury hampers for the moments that matter."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Shell>{children}</Shell></body></html>}