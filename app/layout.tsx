import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obiefuna Chinaecherem | Shopify CRO & eCommerce Graphic Design",
  description: "Shopify conversion rate optimisation and eCommerce graphic design by Obiefuna Chinaecherem."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
