import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NTEMO Consulting | Communication, Marketing, Stratégie & Conseil",
  description: "Agence spécialisée en Communication, Marketing, Stratégie & Conseil.",
  icons: {
    icon: "https://ntemoconsulting.com/wp-content/uploads/2026/02/cropped-IMG-20251017-WA0007-180x180.jpg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${outfit.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-transparent text-white relative">
        <div className="animated-bg" />
        {children}
      </body>
    </html>
  );
}
