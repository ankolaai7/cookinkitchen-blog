import Link from "next/link";
import Image from "next/image";

const featuredProducts = [
  {
    name: "Victorinox Chef's Knife",
    price: "$39.99",
    rating: 4.8,
    image: "https://images-na.ssl-images-amazon.com/images/I/61Q5t2a4YGL._AC_SL1000_.jpg",
    slug: "best-chef-knives-home-cooks",
    badge: "Best Seller",
    amazonLink: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
  },
  {
    name: "Lodge Dutch Oven",
    price: "$59.99",
    rating: 4.9,
    image: "https://images-na.ssl-images-amazon.com/images/I/71VyV6m4U6L._AC_SL1200_.jpg",
    slug: "best-dutch-oven",
    badge: "Best Value",
    amazonLink: "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20",
  },
  {
    name: "KitchenAid Stand Mixer",
    price: "$449.99",
    rating: 4.8,
    image: "https://images-na.ssl-images-amazon.com/images/I/81WcVFU5KZL._AC_SL1500_.jpg",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    amazonLink: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20",
  },
  {
    name: "Shun Santoku Knife",
    price: "$169.95",
    rating: 4.7,
    image: "https://images-na.ssl-images-amazon.com/images/I/81tB6hOS1eL._AC_SL1500_.jpg",
    slug: "best-santoku-knife",
    badge: "Japanese",
    amazonLink: "https://www.amazon.com/Shun-DM0706-Classic-7-Inch-Santoku/dp/B0000Y7LYM?tag=cookinkitchen-20",
  },
  {
    name: "Ninja Blender",
    price: "$99.99",
    rating: 4.6,
    image: "https://images-na.ssl-images-amazon.com/images/I/71X-qK8RBCL._AC_SL1500_.jpg",
    slug: "best-blender-2026",
    amazonLink: "https://www.amazon.com/Ninja-BL610-Professional-72-Watt-Blender/dp/B00NG5H436?tag=cookinkitchen-20",
  },
  {
    name: "Ninja Air Fryer XXL",
    price: "$149.99",
    rating: 4.6,
    image: "https://images-na.ssl-images-amazon.com/images/I/71W4u8q6ISS._AC_SL1500_.jpg",
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
    image: "https://images-na.ssl-images-amazon.com/images/I/61Q5t2a4YGL._AC_SL1000_.jpg",
  },
  {
    title: "Dutch Oven Comparison",
    excerpt: "Le Creuset vs Lodge vs AmazonBasics — which is worth your money?",
    slug: "best-dutch-oven",
    category: "Cookware",
    rating: 4.9,
    image: "https://images-na.ssl-images-amazon.com/images/I/71VyV6m4U6L._AC_SL1200_.jpg",
  },
  {
    title: "Stand Mixer Showdown",
    excerpt: "KitchenAid vs Cuisinart — we baked 50 batches to find the winner.",
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    category: "Appliances",
    rating: 4.7,
    image: "https://images-na.ssl-images-amazon.com/images/I/81WcVFU5KZL._AC_SL1500_.jpg",
  },
  {
    title: "Best Santoku Knife",
    excerpt: "Japanese precision knives tested. Find your perfect slicer.",
    slug: "best-santoku-knife",
    category: "Knives",
    rating: 4.7,
    image: "https://images-na.ssl-images-amazon.com/images/I/81tB6hOS1eL._AC_SL1500_.jpg",
  },
  {
    title: "Best Blender Showdown",
    excerpt: "Vitamix vs Ninja vs Oster — we made 100 smoothies to find the winner.",
    slug: "best-blender-2026",
    category: "Appliances",
    rating: 4.5,
    image: "https://images-na.ssl-images-amazon.com/images/I/71X-qK8RBCL._AC_SL1500_.jpg",
  },
  {
    title: "Best Air Fryer Review",
    excerpt: "Crispy food with less oil. We tested Ninja, Philips, and Cosori.",
    slug: "best-air-fryer",
    category: "Appliances",
    rating: 4.4,
    image: "https://images-na.ssl-images-amazon.com/images/I/71W4u8q6ISS._AC_SL1500_.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-8xl">cook</div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="text-center">
            <h1 className="font-bold text-4xl md:text-6xl mb-6 tracking-tight">
              CookinKitchen
            </h1>
            <p className="text-lg md:text-xl text-stone-300 mb-4 max-w-2xl mx-auto">
              Independent kitchen tool reviews. We test products so you don't have to.
            </p>
            <p className="text-emerald-400 mb-8 font-medium">
              Fresh reviews added weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#products" 
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-700 transition"
              >
                Shop Top Rated
              </Link>
              <Link 
                href="#reviews" 
                className="border-2 border-stone-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                Read Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products - Link to Review Pages */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-2">
            Top Rated Products
          </h2>
          <p className="text-center text-stone-500 mb-10">
            Hand-picked products with the best reviews — click to read our full analysis
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div 
                key={product.name} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-stone-200"
              >
                <div className="bg-white p-4 text-center h-48 flex items-center justify-center relative">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="p-6">
                  {product.badge && (
                    <span className="inline-block bg-stone-100 text-stone-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="font-semibold text-lg text-stone-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-emerald-600 font-bold">★ {product.rating}</span>
                    <span className="text-stone-300">|</span>
                    <span className="font-semibold text-stone-700">{product.price}</span>
                  </div>
                  <Link 
                    href={`/reviews/${product.slug}`}
                    className="block w-full bg-stone-800 text-white text-center py-3 rounded-lg font-medium hover:bg-stone-700 transition flex items-center justify-center gap-2"
                  >
                    Read Why We Recommend
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-800 mb-4">
            Independent Testing, Honest Recommendations
          </h2>
          <p className="text-stone-600 leading-relaxed">
            We've spent hundreds of hours testing kitchen tools so you can cook with confidence. 
            No sponsored reviews, no fluff — just honest findings from our test kitchen.
          </p>
        </div>
      </section>

      {/* AI Assistant Hint */}
      <section className="py-8 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <span className="text-stone-700 font-medium">Need help choosing?</span>
            <Link href="mailto:hello@cookinkitchen.online" className="text-emerald-600 font-semibold hover:underline">
              Ask AI →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-stone-800 text-center mb-2">
            Latest Reviews
          </h2>
          <p className="text-center text-stone-500 mb-10">
            In-depth testing by our kitchen experts
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Link
                key={review.slug}
                href={`/reviews/${review.slug}`}
                className="block bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-stone-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-stone-200 text-stone-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {review.category}
                  </span>
                  <span className="text-emerald-600 font-bold">★ {review.rating}</span>
                </div>
                <div className="relative h-32 mb-3 w-full">
                  <Image 
                    src={review.image} 
                    alt={review.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-stone-800 mb-2">{review.title}</h3>
                <p className="text-stone-500 text-sm">{review.excerpt}</p>
                <span className="inline-block mt-4 text-emerald-600 font-medium">
                  Read full review →
                </span>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/reviews" className="inline-block bg-stone-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-stone-700 transition">
              View All Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Category Links */}
      <section className="py-12 bg-stone-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Knives", count: 12 },
              { name: "Cookware", count: 8 },
              { name: "Appliances", count: 15 },
              { name: "Gadgets", count: 10 },
            ].map((cat) => (
              <Link
                key={cat.name}
                href="/reviews"
                className="bg-white hover:bg-stone-50 text-stone-700 px-5 py-2 rounded-full font-medium transition border border-stone-200 flex items-center gap-2"
              >
                <span>{cat.name}</span>
                <span className="bg-stone-200 px-2 py-0.5 rounded-full text-sm">{cat.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-6 bg-white border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm text-stone-500">
            <strong>Our Promise:</strong> We independently test all products. When you buy through our links, 
            we may earn a commission at no extra cost to you. This helps support our work.
          </p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-stone-900 mb-3">
            Get New Reviews First!
          </h2>
          <p className="text-stone-600 mb-6">
            Subscribe to get the latest kitchen gear reviews delivered to your inbox.
          </p>
          <form method="POST" action="/api/newsletter" className="flex gap-2 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              name="email"
              placeholder="Enter your email" 
              required
              className="px-4 py-3 rounded-lg text-stone-900 w-full max-w-xs"
            />
            <button type="submit" className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-stone-500 mt-3">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Have a product request?
          </h2>
          <p className="text-stone-400 mb-6">
            We're always testing new kitchen tools. Let us know what you'd like to see reviewed next.
          </p>
          <a 
            href="mailto:hello@cookinkitchen.online" 
            className="inline-block bg-emerald-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-emerald-700 transition"
          >
            Request a Review
          </a>
        </div>
      </section>
    </div>
  );
}
