import type { Metadata } from "next";
import Link from "next/link";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";

const lato = Lato({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "CookinKitchen - Expert Kitchen Tool Reviews & Buying Guides",
    template: "%s | CookinKitchen",
  },
  description: "Honest, expert reviews of kitchen tools. Find the best chef's knives, cookware, and appliances. Real testing, real recommendations.",
  keywords: ["kitchen tool reviews", "best chef knife", "cookware reviews", "appliance reviews", "kitchen equipment", "buying guide"],
  authors: [{ name: "CookinKitchen" }],
  creator: "CookinKitchen",
  publisher: "CookinKitchen",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://cookinkitchen.online"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cookinkitchen.online",
    siteName: "CookinKitchen",
    title: "CookinKitchen - Expert Kitchen Tool Reviews & Buying Guides",
    description: "Honest, expert reviews of kitchen tools. Find the best chef's knives, cookware, and appliances.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CookinKitchen - Kitchen Tool Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CookinKitchen - Expert Kitchen Tool Reviews",
    description: "Honest, expert reviews of kitchen tools. Find the best chef's knives, cookware, and appliances.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CookinKitchen",
              url: "https://cookinkitchen.online",
              description: "Expert reviews of kitchen tools and cookware",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cookinkitchen.online/reviews?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased pattern-bg">
        <header className="bg-white/90 backdrop-blur-lg border-b border-gray-100 sticky top-0 z-50 shadow-sm">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-serif text-2xl font-bold text-gray-900 hover:text-teal-600 transition-colors">
              <span className="text-3xl">🍳</span> <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">CookinKitchen</span>
            </Link>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="animated-link text-gray-600 hover:text-teal-600 transition">Home</Link>
              <Link href="/reviews" className="animated-link text-gray-600 hover:text-teal-600 transition">Reviews</Link>
              <Link href="/blog" className="animated-link text-gray-600 hover:text-teal-600 transition">Blog</Link>
              <Link href="/buying-guides" className="animated-link text-gray-600 hover:text-teal-600 transition">Guides</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-stone-900 text-stone-400 py-12 mt-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="font-serif text-lg text-stone-300 mb-2">© 2026 CookinKitchen</p>
            <p className="text-sm">As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
