import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-manrope",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "İnci Diş Kliniği | Estetik ve Mükemmellik",
  description: "Nişantaşı'nın kalbinde, kişiye özel mükemmellik. Gülüşünüz, karakterinizin en saf yansımasıdır.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${cormorantGaramond.variable} antialiased font-sans bg-brand-cream text-brand-charcoal selection:bg-brand-charcoal selection:text-brand-goldLight`}
      >
        {children}
      </body>
    </html>
  );
}
