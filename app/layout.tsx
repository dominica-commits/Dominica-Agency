import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obiefuna Chinaecherem | Shopify Conversion Rate Optimisation Expert & Graphic Designer",
  description: "Obiefuna Chinaecherem is a Shopify Conversion Rate Optimisation Expert and Graphic Designer, focused on improving Shopify store conversions and creating purposeful eCommerce visuals."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
