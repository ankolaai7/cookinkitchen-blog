"use client";

import Link from "next/link";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    slug: "best-chef-knives-home-cooks",
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
    image: "🔪",
    amazonLink: "https://amzn.to/4rPdEWZ",
  },
  {
    id: 2,
    slug: "cast-iron-vs-carbon-steel",
    title: "Cast Iron vs. Carbon Steel: Which is Right?",
    excerpt: "A deep dive into two kitchen essentials. We compare heat retention, maintenance, and cooking results.",
    category: "Cookware",
    rating: 4.5,
    date: "Feb 8, 2026",
    image: "🍳",
    amazonLink: "#",
  },
  {
    id: 3,
    slug: "instant-pot-vs-ninja-foodi",
    title: "Instant Pot Duo vs. Ninja Foodi",
    excerpt: "Two popular multicookers face off. Which one deserves a spot on your countertop?",
    category: "Appliances",
    rating: 4.3,
    date: "Feb 5, 2026",
    image: "🫕",
    amazonLink: "#",
  },
  {
    id: 4,
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    title: "Stand Mixer Showdown: KitchenAid vs. Cuisinart",
    excerpt: "From dough to buttercream, we put these iconic mixers to the test.",
    category: "Appliances",
    rating: 4.7,
    date: "Feb 2, 2026",
    image: "🥣",
    amazonLink: "#",
  },
  {
    id: 5,
    slug: "best-nonstick-pan-2026",
    title: "Best Non-Stick Pan for Every Budget",
    excerpt: "We cooked 200+ eggs to find the best non-stick pans. From budget-friendly to premium.",
    category: "Cookware",
    rating: 4.6,
    date: "Jan 28, 2026",
    image: "🥘",
    amazonLink: "#",
  },
  {
    id: 6,
    slug: "best-dutch-oven",
    title: "Best Dutch Oven: Le Creuset vs. Lodge vs. Amazon",
    excerpt: "Braising, bread baking, and soup — we tested the top Dutch ovens to find the best value.",
    category: "Cookware",
    rating: 4.9,
    date: "Jan 25, 2026",
    image: "🥄",
    amazonLink: "https://amzn.to/3MG2mFH",
  },
  {
    id: 7,
    slug: "best-kitchen-scale",
    title: "Best Kitchen Scales for Baking & Meal Prep",
    excerpt: "Precise measurements matter. We tested 12 kitchen scales for accuracy, design, and durability.",
    category: "Gadgets",
    rating: 4.4,
    date: "Jan 20, 2026",
    image: "⚖️",
    amazonLink: "#",
  },
  {
    id: 8,
    slug: "best-cutting-board",
    title: "Best Cutting Boards: Wood vs. Plastic vs. Glass",
    excerpt: "Your knives deserve the right board. We tested the most popular cutting boards.",
    category: "Gadgets",
    rating: 4.5,
    date: "Jan 15, 2026",
    image: "🪵",
    amazonLink: "#",
  },
  {
    id: 9,
    slug: "best-santoku-knife",
    title: "Best Santoku Knife: Japanese Precision",
    excerpt: "The santoku is a versatile Japanese knife. We tested the top options for home cooks.",
    category: "Knives",
    rating: 4.7,
    date: "Jan 12, 2026",
    image: "🔪",
    amazonLink: "#",
  },
  {
    id: 10,
    slug: "best-blender-2026",
    title: "Best Blender: Vitamix vs. Ninja vs. Oster",
    excerpt: "Smoothies, soups, and frozen drinks — we tested the best blenders for every budget.",
    category: "Appliances",
    rating: 4.5,
    date: "Jan 10, 2026",
    image: "🫗",
    amazonLink: "#",
  },
  {
    id: 11,
    slug: "best-coffee-maker",
    title: "Best Coffee Maker: Drip vs. Pour Over vs. French Press",
    excerpt: "Morning coffee matters. We tested 15 coffee makers to find the perfect brew.",
    category: "Appliances",
    rating: 4.6,
    date: "Jan 8, 2026",
    image: "☕",
    amazonLink: "#",
  },
  {
    id: 12,
    slug: "best-air-fryer",
    title: "Best Air Fryer: Ninja vs. Philips vs. Cosori",
    excerpt: "Crispy food with less oil. We tested the top air fryers for performance and ease of use.",
    category: "Appliances",
    rating: 4.4,
    date: "Jan 5, 2026",
    image: "🍟",
    amazonLink: "#",
  },
  {
    id: 13,
    slug: "best-knife-sharpener",
    title: "Best Knife Sharpener: Chef'sChoice vs. Work Sharp",
    excerpt: "A dull knife is dangerous. We tested sharpeners to keep your blades razor-sharp.",
    category: "Gadgets",
    rating: 4.3,
    date: "Jan 3, 2026",
    image: "⚡",
    amazonLink: "#",
  },
  {
    id: 14,
    slug: "best-mesh-strainer",
    title: "Best Kitchen Strainer & Colander",
    excerpt: "From pasta to flour, we tested the best strainers for everyday kitchen use.",
    category: "Gadgets",
    rating: 4.2,
    date: "Jan 1, 2026",
    image: "🥣",
    amazonLink: "#",
  },
  {
    id: 15,
    slug: "best-measuring-cups",
    title: "Best Measuring Cups: Liquid vs. Dry",
    excerpt: "Precise measurements lead to better cooking. We tested the top measuring cup sets.",
    category: "Gadgets",
    rating: 4.4,
    date: "Dec 28, 2025",
    image: "🧪",
    amazonLink: "#",
  },
  {
    id: 16,
    slug: "best-spatula-set",
    title: "Best Spatula Set: Silicone vs. Wood",
    excerpt: "Every kitchen needs reliable spatulas. We tested the best options for cooking and baking.",
    category: "Gadgets",
    rating: 4.5,
    date: "Dec 25, 2025",
    image: "🥄",
    amazonLink: "#",
  },
  {
    id: 17,
    slug: "best-frying-pan",
    title: "Best Frying Pan: Stainless Steel Showdown",
    excerpt: "From searing steak to scrambled eggs, we tested the best stainless steel pans.",
    category: "Cookware",
    rating: 4.7,
    date: "Dec 22, 2025",
    image: "🍳",
    amazonLink: "#",
  },
  {
    id: 18,
    slug: "best-electric-kettle",
    title: "Best Electric Kettle: Bonavita vs. Fellow vs. Hamilton Beach",
    excerpt: "Boil water faster and smarter. We tested the best electric kettles for tea and coffee.",
    category: "Appliances",
    rating: 4.5,
    date: "Dec 20, 2025",
    image: "🫖",
    amazonLink: "#",
  },
];

const categories = ["All", "Knives", "Cookware", "Appliances", "Gadgets"];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredReviews = activeCategory === "All" 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kitchen Tool Reviews
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert-tested reviews to help you buy smarter. We may earn a commission from Amazon links.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <article 
              key={review.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-br from-emerald-50 to-gray-100 p-8 text-center">
                <div className="text-6xl">{review.image}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium">
                    {review.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    <span className="text-sm font-medium text-gray-700">{review.rating}</span>
                  </div>
                </div>
                <h2 className="font-semibold text-lg text-gray-900 mb-2">
                  {review.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {review.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">{review.date}</span>
                  <a 
                    href={review.amazonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-emerald-600 text-sm font-medium hover:underline"
                  >
                    Check Price on Amazon →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No reviews in this category yet.
          </p>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-center text-white">
          {subscribed ? (
            <div className="py-4">
              <h3 className="text-2xl font-bold mb-2">🎉 You're in!</h3>
              <p>Thanks for subscribing. Check your inbox for updates.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold mb-4">
                Get New Reviews First!
              </h3>
              <p className="text-emerald-100 mb-6 max-w-lg mx-auto">
                Subscribe to get the latest kitchen gear reviews and deals delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2 justify-center max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="px-4 py-3 rounded-lg text-gray-900 w-full max-w-xs"
                />
                <button type="submit" className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-emerald-200 mt-3">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
