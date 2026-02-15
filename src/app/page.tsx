import Link from "next/link";

const featuredProducts = [
  {
    name: "Victorinox Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "🔪",
    slug: "best-chef-knives-home-cooks",
    badge: "Best Seller",
    amazonLink: "https://amzn.to/4rPdEWZ",
  },
  {
    name: "Le Creuset Dutch Oven",
    price: "$369.95",
    rating: 4.9,
    image: "🥄",
    slug: "best-dutch-oven",
    badge: "Premium Pick",
    amazonLink: "https://amzn.to/3MG2mFH",
  },
  {
    name: "KitchenAid Stand Mixer",
    price: "$449.99",
    rating: 4.8,
    image: "🥣",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    amazonLink: "#",
  },
  {
    name: "Shun Santoku Knife",
    price: "$169.95",
    rating: 4.7,
    image: "🔪",
    slug: "best-santoku-knife",
    badge: "Japanese",
    amazonLink: "#",
  },
  {
    name: "Vitamix 5200 Blender",
    price: "$549.95",
    rating: 4.8,
    image: "🫗",
    slug: "best-blender-2026",
    amazonLink: "#",
  },
  {
    name: "Ninja Air Fryer XXL",
    price: "$149.99",
    rating: 4.6,
    image: "🍟",
    slug: "best-air-fryer",
    amazonLink: "#",
  },
];

const reviews = [
  {
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives. Here are our top picks for every budget.",
    slug: "best-chef-knives-home-cooks",
    category: "Knives",
    rating: 4.8,
  },
  {
    title: "Dutch Oven Comparison",
    excerpt: "Le Creuset vs Lodge vs AmazonBasics — which is worth your money?",
    slug: "best-dutch-oven",
    category: "Cookware",
    rating: 4.9,
  },
  {
    title: "Stand Mixer Showdown",
    excerpt: "KitchenAid vs Cuisinart — we baked 50 batches to find the winner.",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    category: "Appliances",
    rating: 4.7,
  },
  {
    title: "Best Santoku Knife",
    excerpt: "Japanese precision knives tested. Find your perfect slicer.",
    slug: "best-santoku-knife",
    category: "Knives",
    rating: 4.7,
  },
  {
    title: "Best Blender Showdown",
    excerpt: "Vitamix vs Ninja vs Oster — we made 100 smoothies to find the winner.",
    slug: "best-blender-2026",
    category: "Appliances",
    rating: 4.5,
  },
  {
    title: "Best Air Fryer Review",
    excerpt: "Crispy food with less oil. We tested Ninja, Philips, and Cosori.",
    slug: "best-air-fryer",
    category: "Appliances",
    rating: 4.4,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🍳</div>
            <h1 className="font-bold text-4xl md:text-5xl mb-4 tracking-tight">
              CookinKitchen
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We test kitchen tools so you don't have to. Real reviews, real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products" 
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition shadow-lg"
              >
                🛒 Shop on Amazon
              </Link>
              <Link 
                href="#reviews" 
                className="border-2 border-gray-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Read Reviews
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Amazon Associate — We earn from qualifying purchases
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products - Amazon Priority */}
      <section id="products" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold text-gray-900">
              🛒 Top Rated on Amazon
            </h2>
            <span className="text-emerald-600 text-sm font-medium">Verified Picks</span>
          </div>
          <p className="text-gray-500 mb-8">
            Hand-picked products with the best reviews — click to shop on Amazon
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.name} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-emerald-50 to-gray-100 p-8 text-center">
                  <div className="text-6xl">{product.image}</div>
                </div>
                <div className="p-5">
                  {product.badge && (
                    <span className="inline-block bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-400">★ {product.rating}</span>
                    <span className="text-gray-400">•</span>
                    <span className="font-bold text-emerald-600 text-lg">{product.price}</span>
                  </div>
                  <a 
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-emerald-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-emerald-600 transition flex items-center justify-center gap-2"
                  >
                    🛒 Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/buying-guides" className="text-emerald-600 font-medium hover:underline">
              View all products on Amazon →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Latest Reviews
          </h2>
          <p className="text-gray-500 mb-8">
            In-depth testing by our kitchen experts
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Link
                key={review.slug}
                href={`/reviews/${review.slug}`}
                className="block bg-white rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                    {review.category}
                  </span>
                  <span className="text-emerald-600 text-sm font-medium">★ {review.rating}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{review.title}</h3>
                <p className="text-gray-500 text-sm line-clamp-2">{review.excerpt}</p>
                <span className="inline-block mt-4 text-emerald-600 text-sm font-medium">
                  Read full review →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition">
              View All {reviews.length}+ Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Amazon Disclosure */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">
            🔍 <strong>Our Promise:</strong> We independently test all products. When you buy through our links, 
            we may earn a commission at no extra cost to you. This helps support our work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Need product recommendations?
          </h2>
          <p className="text-gray-400 mb-6">
            We're always testing new kitchen tools. Let us know what you'd like to see next.
          </p>
          <a 
            href="mailto:hello@cookinkitchen.online" 
            className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition"
          >
            Request a Review
          </a>
        </div>
      </section>
    </div>
  );
}
