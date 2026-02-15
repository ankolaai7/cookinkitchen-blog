import Link from "next/link";

const categories = [
  {
    name: "Chef's Knives",
    description: "The most important tool in any kitchen",
    products: [
      {
        name: "Miyabi Birchwood Chef's Knife",
        price: "$$$",
        rating: 4.9,
        affiliateLink: "#",
        badge: "Premium Pick",
      },
      {
        name: "Victorinox Swiss Classic 8-inch",
        price: "$",
        rating: 4.7,
        affiliateLink: "#",
        badge: "Best Value",
      },
      {
        name: "Wüsthof Classic 8-inch",
        price: "$$",
        rating: 4.8,
        affiliateLink: "#",
      },
    ],
  },
  {
    name: "Cookware Sets",
    description: "Everything you need to start cooking",
    products: [
      {
        name: "Le Creuset Enameled Dutch Oven",
        price: "$$$",
        rating: 4.9,
        affiliateLink: "#",
        badge: "Best Overall",
      },
      {
        name: "Lodge Enameled Dutch Oven",
        price: "$",
        rating: 4.7,
        affiliateLink: "#",
        badge: "Best Budget",
      },
      {
        name: "T-fal Ultimate Hard Anodized Set",
        price: "$$",
        rating: 4.6,
        affiliateLink: "#",
      },
    ],
  },
  {
    name: "Small Appliances",
    description: "Power tools for your kitchen",
    products: [
      {
        name: "KitchenAid Artisan Stand Mixer",
        price: "$$$",
        rating: 4.8,
        affiliateLink: "#",
        badge: "Best Mixer",
      },
      {
        name: "Instant Pot Duo 7-in-1",
        price: "$",
        rating: 4.7,
        affiliateLink: "#",
        badge: "Best Value",
      },
      {
        name: "Ninja Foodi 9-in-1",
        price: "$$",
        rating: 4.5,
        affiliateLink: "#",
      },
    ],
  },
  {
    name: "Essential Gadgets",
    description: "Must-have tools for every kitchen",
    products: [
      {
        name: "OXO Good Grips Pop Scale",
        price: "$",
        rating: 4.8,
        affiliateLink: "#",
        badge: "Best Scale",
      },
      {
        name: "John Boos Maple Cutting Board",
        price: "$$",
        rating: 4.9,
        affiliateLink: "#",
      },
      {
        name: "OXO Good Grips Cutting Board Set",
        price: "$",
        rating: 4.6,
        affiliateLink: "#",
      },
    ],
  },
];

export default function BuyingGuidesPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl text-stone-800 mb-4">
            Kitchen Buying Guides
          </h1>
          <p className="font-lato text-stone-600 max-w-2xl mx-auto">
            Our expert-tested recommendations for the best kitchen tools. 
            Click through to see full reviews and find the perfect product for your needs.
          </p>
        </div>

        {/* Categories */}
        {categories.map((category) => (
          <section key={category.name} className="mb-16">
            <div className="mb-6">
              <h2 className="font-playfair text-2xl text-stone-800 mb-2">
                {category.name}
              </h2>
              <p className="font-lato text-stone-600">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {category.products.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
                >
                  {product.badge && (
                    <span className="inline-block bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-lato mb-3">
                      {product.badge}
                    </span>
                  )}
                  <h3 className="font-playfair text-lg text-stone-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-lato text-stone-500">{product.price}</span>
                    <span className="font-lato text-amber-600 font-bold">⭐ {product.rating}</span>
                  </div>
                  <a
                    href={product.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-orange-600 text-white py-2 rounded-lg font-lato font-bold hover:bg-orange-700 transition"
                  >
                    Check Price →
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-orange-50 rounded-2xl p-8 text-center">
          <h3 className="font-playfair text-2xl text-stone-800 mb-4">
            Want Personalized Recommendations?
          </h3>
          <p className="font-lato text-stone-600 mb-6">
            Subscribe to get notified when we publish new buying guides and product reviews.
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
