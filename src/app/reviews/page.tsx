"use client";

import Link from "next/link";
import { useState } from "react";

const reviews = [
  {
    id: 19,
    slug: "best-kitchen-utensils-set",
    title: "Best Kitchen Utensil Sets for Every Cook",
    excerpt: "From sautéing to serving, we tested the top utensil sets to find the perfect tools for your kitchen.",
    category: "Kitchen Utensils",
    rating: 4.6,
    date: "Feb 16, 2026",
    image: "🥄",
    amazonLink: "https://www.amazon.com/Stainless-Steel-Cooking-Utensil-Set/dp/B0BY8X3G8K?tag=cookinkitchen-20",
  },
  {
    id: 1,
    slug: "best-chef-knives-home-cooks",
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
    image: "🔪",
    amazonLink: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUA?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Instant-Pot-Duo-Electric-Pressure/dp/B00FLBUERN?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/T-fal-E93808-Professional-Nonstick-Dishwasher/dp/B000W5XHQW?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/OXO-Stainless-Compact-Grip-11-Pound/dp/B079D9F86W?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/OXO-GOOD-Grips-Cutting-17-Inch/dp/B00E6GUF5W?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Shun-DM0706-Classic-7-Inch-Santoku/dp/B0000Y7LYM?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Ninja-BL610-Professional-72-Watt-Blender/dp/B00NG5H436?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Technivorm-Moccamaster-10-Cup-Coffee-Brewer/dp/B07CM5H7BQ?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Ninja-Digital-4-Quart-Recipe-Creator/dp/B09GB5JTRY?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/ChefsChoice-15-Inch-Conventional-Sharpener/dp/B00004S7I8?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Stainless-Steel-Measuring-Cups/dp/B000W5IYG0?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/OXO-GOOD-Grips-Measuring-Cups/dp/B00GE6NF6G?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Stainless-Steel-Spatula-Set-Utensil/dp/B07XJ8C8F5?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/All-Clad-Stainless-Tri-Ply-Cookware/dp/B000X5OC1K?tag=cookinkitchen-20",
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
    amazonLink: "https://www.amazon.com/Bonavita-Electric-Gooseneck-Kettle/dp/B00DGBNOQK?tag=cookinkitchen-20",
  },
  {
    id: 20,
    slug: "best-air-fryer-2026",
    title: "Best Air Fryers 2026: Ultimate Buying Guide",
    excerpt: "From compact to XL, we tested the best air fryers for crispy results with less oil.",
    category: "Appliances",
    rating: 4.6,
    date: "Feb 16, 2026",
    image: "🍳",
    amazonLink: "https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?tag=cookinkitchen-20",
  },
  {
    id: 21,
    slug: "best-cooking-pots-pans-set",
    title: "Best Cookware Sets 2026: Complete Buying Guide",
    excerpt: "Everything you need to equip your kitchen. We tested top cookware sets for every budget.",
    category: "Cookware",
    rating: 4.7,
    date: "Feb 16, 2026",
    image: "🍲",
    amazonLink: "https://www.amazon.com/T-fal-Ultimate-14-Piece-Collection/dp/B07Q2T6J9W?tag=cookinkitchen-20",
  },
  {
    id: 22,
    slug: "best-electric-smart-thermomix",
    title: "Best Instant Pot & Multi-Cookers 2026",
    excerpt: "Pressure cook, slow cook, sauté and more. Find your perfect multi-cooker.",
    category: "Appliances",
    rating: 4.5,
    date: "Feb 16, 2026",
    image: "🫕",
    amazonLink: "https://www.amazon.com/Instant-Pot-Duo-Electric-Pressure/dp/B00FLBUERN?tag=cookinkitchen-20",
  },
  {
    id: 23,
    slug: "best-wooden-cutting-board",
    title: "Best Wooden Cutting Boards for Kitchen",
    excerpt: "End grain vs edge grain. Find the perfect wooden cutting board for your kitchen.",
    category: "Gadgets",
    rating: 4.6,
    date: "Feb 16, 2026",
    image: "🪵",
    amazonLink: "https://www.amazon.com/John-Boos-Cutting-18-Inch/dp/B000I1RVQQ?tag=cookinkitchen-20",
  },
  {
    id: 24,
    slug: "best-kitchen-tool-set",
    title: "Best Kitchen Tool Sets for Home Chefs",
    excerpt: "Spatulas, ladles, whisks and more. Complete tool sets for every kitchen.",
    category: "Kitchen Utensils",
    rating: 4.4,
    date: "Feb 16, 2026",
    image: "🥄",
    amazonLink: "https://www.amazon.com/Stainless-Steel-Cooking-Utensil-Set/dp/B0BY8X3G8K?tag=cookinkitchen-20",
  },
  {
    id: 25,
    slug: "best-baking-sheets-2026",
    title: "Best Baking Sheets 2026: Ultimate Buying Guide",
    excerpt: "From cookie sheets to jelly roll pans — we tested the best baking sheets for every budget.",
    category: "Cookware",
    rating: 4.9,
    date: "Feb 16, 2026",
    image: "🍪",
    amazonLink: "https://www.amazon.com/Nordic-Ware-Natural-Commercial-Bakers/dp/B00004OSWA?tag=cookinkitchen-20",
  },
  {
    id: 26,
    slug: "best-knives-under-50",
    title: "Best Chef's Knives Under $50",
    excerpt: "Quality doesn't have to be expensive. We tested the best knives for budget-conscious home cooks.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 16, 2026",
    image: "🔪",
    amazonLink: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
  },
  {
    id: 27,
    slug: "best-food-storage-containers",
    title: "Best Food Storage Containers",
    excerpt: "Keep food fresh with the best containers. Glass, plastic, and stainless steel tested.",
    category: "Gadgets",
    rating: 4.7,
    date: "Feb 16, 2026",
    image: "📦",
    amazonLink: "https://www.amazon.com/OXO-Grips-POP-Container-Set/dp/B00W5IWIZ2?tag=cookinkitchen-20",
  },
];

const categories = ["All", "Knives", "Cookware", "Appliances", "Gadgets", "Kitchen Utensils", "Baking Sheets"];

export default function ReviewsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
const categoryGradients: Record<string, string> = {
  "Knives": "from-slate-100 to-gray-200",
  "Cookware": "from-teal-50 to-cyan-100",
  "Appliances": "from-blue-50 to-indigo-100",
  "Gadgets": "from-violet-50 to-purple-100",
  "Kitchen Utensils": "from-orange-50 to-amber-100",
};

const categoryIcons: Record<string, string> = {
  "Knives": "🔪",
  "Cookware": "🍳",
  "Appliances": "🫕",
  "Gadgets": "⚙️",
  "Kitchen Utensils": "🥄",
};
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const filteredReviews = activeCategory === "All" 
    ? reviews 
    : reviews.filter(r => r.category === activeCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (res.ok) {
        setSubscribed(true);
        setEmail("");
      } else {
        const data = await res.json();
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to subscribe');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Kitchen Tool Reviews
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
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
                  : "bg-white text-stone-600 hover:bg-emerald-100 border border-emerald-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <Link
              key={review.id}
              href={`/reviews/${review.slug}`}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-emerald-300 transform hover:-translate-y-2 cursor-pointer"
              style={{animationDelay: `${idx * 0.05}s`}}
            >
              <div className={`bg-gradient-to-br ${categoryGradients[review.category] || "from-emerald-50 to-teal-50"} p-8 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{review.image}</div>
                <div className="text-sm font-medium text-stone-500">{categoryIcons[review.category] || "⭐"}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">
                    {review.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-amber-400">★</span>
                    <span className="text-sm font-bold text-stone-700">{review.rating}</span>
                  </div>
                </div>
                <h2 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                  {review.title}
                </h2>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                  {review.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">{review.date}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-bold group-hover:translate-x-1 transition-transform duration-300">
                    Read Review →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <p className="text-center text-stone-500 py-8">
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
                  disabled={loading}
                  className="px-4 py-3 rounded-lg text-stone-900 w-full max-w-xs disabled:opacity-50"
                />
                <button type="submit" disabled={loading} className="bg-stone-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-stone-800 transition disabled:opacity-50">
                  {loading ? '...' : 'Subscribe'}
                </button>
              </form>
              {error && <p className="text-red-200 mt-2">{error}</p>}
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
