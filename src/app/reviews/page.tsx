import Link from "next/link";

const reviews = [
  {
    id: 1,
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
    image: "🔪",
  },
  {
    id: 2,
    title: "Cast Iron vs. Carbon Steel: Which is Right?",
    excerpt: "A deep dive into two kitchen essentials. We compare heat retention, maintenance, and cooking results.",
    category: "Cookware",
    rating: 4.5,
    date: "Feb 8, 2026",
    image: "🍳",
  },
  {
    id: 3,
    title: "Instant Pot Duo vs. Ninja Foodi",
    excerpt: "Two popular multicookers face off. Which one deserves a spot on your countertop?",
    category: "Appliances",
    rating: 4.3,
    date: "Feb 5, 2026",
    image: "🫕",
  },
  {
    id: 4,
    title: "Stand Mixer Showdown: KitchenAid vs. Cuisinart",
    excerpt: "From dough to buttercream, we put these iconic mixers to the test.",
    category: "Appliances",
    rating: 4.7,
    date: "Feb 2, 2026",
    image: "🥣",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-stone-800 mb-4">
            Kitchen Tool Reviews
          </h1>
          <p className="font-lato text-stone-600 max-w-2xl mx-auto">
            Honest, in-depth reviews to help you make the best choices for your kitchen. 
            We test every product ourselves so you can cook with confidence.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <article 
              key={review.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-lato">
                    {review.category}
                  </span>
                  <span className="font-lato text-amber-600 font-bold">
                    ⭐ {review.rating}
                  </span>
                </div>
                <div className="text-4xl mb-4">{review.image}</div>
                <h2 className="font-playfair text-xl text-stone-800 mb-2">
                  {review.title}
                </h2>
                <p className="font-lato text-stone-600 mb-4">
                  {review.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-lato text-sm text-stone-500">
                    {review.date}
                  </span>
                  <button className="text-orange-600 font-lato font-bold hover:text-orange-700 transition">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">
            Want New Reviews First?
          </h3>
          <p className="font-lato text-stone-600 mb-6">
            Subscribe to get the latest kitchen gear reviews delivered to your inbox.
          </p>
          <div className="flex gap-2 justify-center">
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="px-4 py-2 rounded-lg border border-stone-300 font-lato w-64"
            />
            <button className="bg-orange-600 text-white px-6 py-2 rounded-lg font-lato font-bold hover:bg-orange-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
