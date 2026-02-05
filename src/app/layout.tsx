import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PetalBloom Florist | Fresh Flowers & Elegant Arrangements",
  description:
    "PetalBloom Florist crafts stunning floral arrangements for weddings, events, sympathy, and everyday joy. Fresh, hand-arranged bouquets delivered with care. Order today.",
  keywords: [
    "florist",
    "flower shop",
    "wedding flowers",
    "bridal bouquets",
    "event floral arrangements",
    "sympathy flowers",
    "flower delivery",
    "fresh bouquets",
    "PetalBloom Florist",
    "daily flower arrangements",
  ],
  authors: [{ name: "PetalBloom Florist" }],
  openGraph: {
    title: "PetalBloom Florist | Fresh Flowers & Elegant Arrangements",
    description:
      "Handcrafted floral designs for every occasion. Wedding flowers, event arrangements, daily bouquets, and sympathy tributes by PetalBloom Florist.",
    url: "https://petalbloom-florist.com",
    siteName: "PetalBloom Florist",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PetalBloom Florist | Fresh Flowers & Elegant Arrangements",
    description:
      "Handcrafted floral designs for weddings, events, and everyday beauty. Order fresh bouquets today.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://petalbloom-florist.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#e91e63" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
