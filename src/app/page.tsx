import Link from "next/link";

const featuredProducts = [
  {
    name: "Victorinox Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "🔪",
    slug: "best-chef-knives-home-cooks",
    badge: "Best Seller",
    amazonLink: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
  },
  {
    name: "Lodge Dutch Oven",
    price: "$59.99",
    rating: 4.9,
    image: "🥄",
    slug: "best-dutch-oven",
    badge: "Best Value",
    amazonLink: "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20",
  },
  {
    name: "KitchenAid Stand Mixer",
    price: "$449.99",
    rating: 4.8,
    image: "🥣",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    amazonLink: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20",
  },
  {
    name: "Shun Santoku Knife",
    price: "$169.95",
    rating: 4.7,
    image: "🔪",
    slug: "best-santoku-knife",
    badge: "Japanese",
    amazonLink: "https://www.amazon.com/Shun-DM0706-Classic-7-Inch-Santoku/dp/B0000Y7LYM?tag=cookinkitchen-20",
  },
  {
    name: "Ninja Blender",
    price: "$99.99",
    rating: 4.6,
    image: "🫗",
    slug: "best-blender-2026",
    amazonLink: "https://www.amazon.com/Ninja-BL610-Professional-72-Watt-Blender/dp/B00NG5H436?tag=cookinkitchen-20",
  },
  {
    name: "Ninja Air Fryer XXL",
    price: "$149.99",
    rating: 4.6,
    image: "🍟",
    slug: "best-air-fryer",
    amazonLink: "https://www.amazon.com/Ninja-Digital-4-Quart-Recipe-Creator/dp/B09GB5JTRY?tag=cookinkitchen-20",
  },
];

const reviews = [
  {
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives. Here are our top picks for every budget.",
    slug: "best-chef-knives-home-cooks",
    category: "Knives",
    rating: 4.8,
    image: "🔪",
  },
  {
    title: "Dutch Oven Comparison",
    excerpt: "Le Creuset vs Lodge vs AmazonBasics — which is worth your money?",
    slug: "best-dutch-oven",
    category: "Cookware",
    rating: 4.9,
    image: "🥄",
  },
  {
    title: "Stand Mixer Showdown",
    excerpt: "KitchenAid vs Cuisinart — we baked 50 batches to find the winner.",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    category: "Appliances",
    rating: 4.7,
    image: "🥣",
  },
  {
    title: "Best Santoku Knife",
    excerpt: "Japanese precision knives tested. Find your perfect slicer.",
    slug: "best-santoku-knife",
    category: "Knives",
    rating: 4.7,
    image: "🔪",
  },
  {
    title: "Best Blender Showdown",
    excerpt: "Vitamix vs Ninja vs Oster — we made 100 smoothies to find the winner.",
    slug: "best-blender-2026",
    category: "Appliances",
    rating: 4.5,
    image: "🫗",
  },
  {
    title: "Best Air Fryer Review",
    excerpt: "Crispy food with less oil. We tested Ninja, Philips, and Cosori.",
    slug: "best-air-fryer",
    category: "Appliances",
    rating: 4.4,
    image: "🍟",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Hero with kitchen vibe */}
      <section className="relative bg-gradient-to-r from-stone-800 via-stone-700 to-stone-800 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl animate-pulse">🍳</div>
          <div className="absolute top-20 right-20 text-6xl animate-pulse" style={{animationDelay: '0.5s'}}>🥘</div>
          <div className="absolute bottom-10 left-1/4 text-7xl animate-pulse" style={{animationDelay: '1s'}}>🍲</div>
          <div className="absolute bottom-20 right-1/3 text-5xl animate-pulse" style={{animationDelay: '1.5s'}}>🥄</div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            <div className="text-7xl mb-6 animate-bounce">🍳</div>
            <h1 className="font-bold text-4xl md:text-6xl mb-4 tracking-tight">
              Welcome to Your Kitchen
            </h1>
            <p className="text-lg md:text-xl text-stone-200 mb-4 max-w-2xl mx-auto">
              We test kitchen tools so you don't have to. Real reviews, real results.
            </p>
            <p className="text-emerald-300 mb-8 font-medium">
              🔥 Fresh reviews added weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products" 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg font-bold hover:from-emerald-600 hover:to-teal-600 transition shadow-lg transform hover:scale-105"
              >
                🛒 Shop Top Rated
              </Link>
              <Link 
                href="#reviews" 
                className="border-2 border-stone-400 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                📖 Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating kitchen icons */}
      <div className="relative -mt-8 flex justify-center gap-8 text-4xl mb-8">
        <span className="bg-white p-3 rounded-full shadow-lg animate-pulse">🔪</span>
        <span className="bg-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.3s'}}>🍳</span>
        <span className="bg-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.6s'}}>🥣</span>
        <span className="bg-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '0.9s'}}>🫕</span>
      </div>

      {/* Featured Products - Amazon Priority */}
      <section id="products" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl">🛒</span>
            <h2 className="text-3xl font-bold text-stone-800">
              Top Rated on Amazon
            </h2>
          </div>
          <p className="text-center text-stone-500 mb-8">
            Hand-picked products with the best reviews — click to shop on Amazon
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div 
                key={product.name} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-emerald-100 hover:border-emerald-300 transform hover:-translate-y-2"
                style={{animationDelay: `${idx * 0.1}s`}}
              >
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 text-center relative">
                  <span className="absolute top-2 right-2 text-2xl animate-pulse">🔥</span>
                  <div className="text-7xl">{product.image}</div>
                </div>
                <div className="p-6">
                  {product.badge && (
                    <span className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="font-bold text-lg text-stone-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-emerald-500 font-bold">★ {product.rating}</span>
                    <span className="text-stone-300">|</span>
                    <span className="font-bold text-emerald-600 text-xl">{product.price}</span>
                  </div>
                  <a 
                    href={product.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition flex items-center justify-center gap-2"
                  >
                    🛒 Buy on Amazon
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/buying-guides" className="text-emerald-600 font-bold text-lg hover:underline">
              View all products on Amazon →
            </Link>
          </div>
        </div>
      </section>

      {/* Kitchen vibes section */}
      <section className="py-16 bg-gradient-to-br from-stone-100 to-emerald-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">👨‍🍳</div>
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            "The right tools make all the difference"
          </h2>
          <p className="text-stone-600">
            We've spent hundreds of hours testing kitchen tools so you can cook with confidence. 
            No sponsored reviews, no fluff — just honest findings from our test kitchen.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-3xl">📖</span>
            <h2 className="text-3xl font-bold text-stone-800">
              Latest Reviews
            </h2>
          </div>
          <p className="text-center text-stone-500 mb-8">
            In-depth testing by our kitchen experts
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Link
                key={review.slug}
                href={`/reviews/${review.slug}`}
                className="block bg-gradient-to-br from-emerald-50 to-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-stone-100 text-stone-600 text-xs font-bold px-3 py-1 rounded-full">
                    {review.category}
                  </span>
                  <span className="text-emerald-500 font-bold">★ {review.rating}</span>
                </div>
                <div className="text-4xl mb-3">{review.image}</div>
                <h3 className="font-bold text-stone-800 mb-2">{review.title}</h3>
                <p className="text-stone-500 text-sm">{review.excerpt}</p>
                <span className="inline-block mt-4 text-emerald-600 font-bold">
                  Read full review →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/reviews" className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition">
              View All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Category bubbles */}
      <section className="py-12 bg-gradient-to-r from-emerald-500 to-teal-500">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Knives", emoji: "🔪", count: 12 },
              { name: "Cookware", emoji: "🍳", count: 8 },
              { name: "Appliances", emoji: "🫕", count: 15 },
              { name: "Gadgets", emoji: "⚡", count: 10 },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/reviews"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white px-6 py-3 rounded-full font-bold transition transform hover:scale-110 flex items-center gap-2"
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className="bg-white/30 px-2 py-0.5 rounded-full text-sm">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Amazon Disclosure */}
      <section className="py-6 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-stone-500">
            🔍 <strong>Our Promise:</strong> We independently test all products. When you buy through our links, 
            we may earn a commission at no extra cost to you. This helps support our work.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-3xl font-bold mb-4">
            Have a product request?
          </h2>
          <p className="text-stone-300 mb-6">
            We're always testing new kitchen tools. Let us know what you'd like to see reviewed next.
          </p>
          <a 
            href="mailto:hello@cookinkitchen.online" 
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold hover:from-emerald-600 hover:to-teal-600 transition"
          >
            📧 Request a Review
          </a>
        </div>
      </section>
    </div>
  );
}
