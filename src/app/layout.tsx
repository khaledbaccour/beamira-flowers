import type { Metadata } from "next";
import { Cormorant_Garamond, Quicksand } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beamira Flowers | Fleuriste Artisanale",
  description:
    "Spread love with flowers. Bouquets artisanaux, livraison dans toute la France. Click & Collect a Issy-les-Moulineaux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${quicksand.variable}`}>
      <body className="min-h-screen font-lato antialiased">{children}</body>
    </html>
  );
}
