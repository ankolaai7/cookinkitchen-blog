import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CookinKitchen - Kitchen Tool Reviews",
  description: "Honest reviews of kitchen tools that actually work.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased bg-gray-50 text-gray-900`}
      >
        <header className="bg-white border-b border-gray-200">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="font-bold text-xl">🍳 CookinKitchen</a>
            <div className="flex gap-6 text-sm font-medium">
              <a href="/" className="text-gray-600 hover:text-orange-600 transition">Home</a>
              <a href="/reviews" className="text-gray-600 hover:text-orange-600 transition">Reviews</a>
              <a href="/buying-guides" className="text-gray-600 hover:text-orange-600 transition">Guides</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
          <div className="max-w-5xl mx-auto px-6 text-center text-sm">
            <p>© 2026 CookinKitchen. Built for home cooks.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
