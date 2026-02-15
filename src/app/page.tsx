import Link from "next/link";

const recentReviews = [
  {
    title: "Best Chef's Knives",
    category: "Knives",
    slug: "best-chef-knives-home-cooks",
    image: "🔪",
  },
  {
    title: "Dutch Oven Comparison",
    category: "Cookware",
    slug: "best-dutch-oven",
    image: "🥄",
  },
  {
    title: "Stand Mixer Showdown",
    category: "Appliances",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    image: "🥣",
  },
  {
    title: "Non-Stick Pan Guide",
    category: "Cookware",
    slug: "best-nonstick-pan-2026",
    image: "🥘",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-4">🍳</div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            CookinKitchen
          </h1>
          <p className="font-sans text-lg text-orange-100 mb-8 max-w-lg mx-auto">
            Honest reviews of kitchen tools that actually work. No fluff, just real testing.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/reviews" 
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition shadow-lg"
            >
              Browse Reviews
            </Link>
            <Link 
              href="/buying-guides" 
              className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition"
            >
              Buying Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-b bg-white">
        <div className="max-w-4xl mx-auto px-6 flex justify-center gap-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">8+</div>
            <div className="text-sm text-gray-500">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Products Tested</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-500">Categories</div>
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-12 max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-sans text-2xl font-bold text-gray-900">
            Latest Reviews
          </h2>
          <Link href="/reviews" className="text-orange-600 font-medium hover:underline">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {recentReviews.map((review) => (
            <Link
              key={review.slug}
              href={`/reviews/${review.slug}`}
              className="block bg-white rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-5"
            >
              <div className="text-4xl mb-3">{review.image}</div>
              <h3 className="font-sans font-semibold text-gray-900 mb-1">
                {review.title}
              </h3>
              <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                {review.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-sans text-xl font-bold text-gray-900 mb-6 text-center">
            Browse by Category
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {["Knives", "Cookware", "Appliances", "Gadgets"].map((cat, i) => (
              <Link 
                key={cat}
                href="/reviews" 
                className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-700 transition"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="font-sans text-2xl font-bold mb-4">
            Need help choosing?
          </h2>
          <p className="text-gray-400 mb-6">
            Check our buying guides for curated recommendations.
          </p>
          <Link 
            href="/buying-guides" 
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            See Buying Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
