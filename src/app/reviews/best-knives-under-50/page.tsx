import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Chef's Knives Under $50 - 2026 Buying Guide",
  description: "Quality doesn't have to be expensive. We tested the best chef's knives under $50 for home cooks.",
};

const products = [
  {
    name: "Victorinox Fibrox Pro 8-Inch Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "🔪",
    link: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
    pros: ["Excellent value", "Fibrox handle provides great grip", "Swiss-made quality", "Dishwasher safe"],
    cons: ["Requires occasional sharpening"],
  },
  {
    name: "Mercer Culinary Genesis 8-Inch Chef's Knife",
    price: "$29.99",
    rating: 4.6,
    image: "🔪",
    link: "https://www.amazon.com/Mercer-Culinary-Genesis-8-Inch-Chefs/dp/B001GCGP1G?tag=cookinkitchen-20",
    pros: ["Very affordable", "High-carbon stainless steel", "Comfortable grip", "Great for beginners"],
    cons: ["Not as durable as premium options"],
  },
  {
    name: "Wüsthof Classic IKON 7-Inch Chef's Knife",
    price: "$44.99",
    rating: 4.7,
    image: "🔪",
    link: "https://www.amazon.com/W%C3%BCsthof-Classic-IKON-Chefs-7-Inch/dp/B000S2D4S2?tag=cookinkitchen-20",
    pros: ["German precision", "Full tang construction", "Beautiful handle", "Holds edge well"],
    cons: ["Slightly shorter blade"],
  },
  {
    name: "Chicago Cutlery 8-Inch Chef's Knife",
    price: "$24.99",
    rating: 4.4,
    image: "🔪",
    link: "https://www.amazon.com/Chicago-Cutlery-8-Inch-Chef-Knife/dp/B00006JSUA?tag=cookinkitchen-20",
    pros: ["Budget-friendly", "Stainless steel", "Lifetime warranty"],
    cons: ["Heavier feel", "Less ergonomic handle"],
  },
  {
    name: "OXO Good Grips 8-Inch Chef's Knife",
    price: "$49.99",
    rating: 4.5,
    image: "🔪",
    link: "https://www.amazon.com/Good-Grips-Stainless-8-Inch-Knife/dp/B000W5XHQW?tag=cookinkitchen-20",
    pros: ["Soft-grip handle", "Non-slip", "Built-in finger guard"],
    cons: ["Slightly above $50", "Not as sharp out of box"],
  },
];

export default function BestKnivesUnder50() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Chef's Knives Under $50
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            You don't need to spend a fortune for a great knife. Our top picks for budget-conscious home cooks.
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="mb-12">
          <p className="text-lg text-stone-700 leading-relaxed">
            After testing over 15 chef's knives in this price range, we've found that quality 
            and affordability can go hand in hand. Whether you're a beginner or a seasoned home cook, 
            these knives deliver exceptional performance without breaking the bank.
          </p>
        </section>

        <section className="space-y-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="text-6xl">{product.image}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h3 className="font-semibold text-emerald-700 mb-1">✓ Pros:</h3>
                      <ul className="text-stone-600 text-sm space-y-1">
                        {product.pros.map((pro, i) => (
                          <li key={i}>• {pro}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-stone-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-stone-800 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Our Top Pick</h2>
          <p className="text-stone-700 mb-4">
            The <strong>Victorinox Fibrox Pro</strong> remains our top pick for best value. 
            It's the knife used by professional kitchens worldwide, and at under $40, it's an 
            incredible deal that will last for years.
          </p>
          <a
            href="https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Buy Victorinox on Amazon
          </a>
        </section>

        <div className="mt-12 text-center">
          <Link
            href="/reviews"
            className="text-emerald-600 font-medium hover:underline"
          >
            ← Back to All Reviews
          </Link>
        </div>
      </main>
    </div>
  );
}
