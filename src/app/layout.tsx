import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
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
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">🍳 CookinKitchen</Link>
            <div className="flex gap-6 text-sm font-medium">
              <Link href="/" className="text-gray-600 hover:text-emerald-600 transition">Home</Link>
              <Link href="/reviews" className="text-gray-600 hover:text-emerald-600 transition">Reviews</Link>
              <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition">Blog</Link>
              <Link href="/buying-guides" className="text-gray-600 hover:text-emerald-600 transition">Guides</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-8">
          <div className="max-w-6xl mx-auto px-6 text-center text-sm">
            <p>© 2026 CookinKitchen. As an Amazon Associate, we earn from qualifying purchases.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
