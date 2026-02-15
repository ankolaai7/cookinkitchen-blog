import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CookinKitchen - Your Kitchen Companion",
  description: "Discover recipes, cooking tools, and kitchen essentials. Expert reviews and recommendations for home cooks.",
  keywords: ["cooking", "kitchen", "recipes", "kitchen tools", "cookware", "reviews"],
  openGraph: {
    title: "CookinKitchen - Your Kitchen Companion",
    description: "Discover recipes, cooking tools, and kitchen essentials.",
    type: "website",
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
        className={`${playfair.variable} ${lato.variable} antialiased bg-amber-50`}
      >
        <header className="bg-gradient-to-r from-orange-700 to-amber-600 text-white shadow-lg">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="font-playfair text-2xl font-bold">CookinKitchen</a>
            <div className="flex gap-6 font-lato">
              <a href="/" className="hover:text-amber-200 transition">Home</a>
              <a href="/reviews" className="hover:text-amber-200 transition">Reviews</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-stone-800 text-stone-300 py-8 mt-16">
          <div className="max-w-6xl mx-auto px-4 text-center font-lato">
            <p>&copy; 2026 CookinKitchen. Made with ❤️ for home cooks.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
