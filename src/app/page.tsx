import Link from "next/link";

const featuredTools = [
  {
    name: "Chef's Knife",
    description: "The essential tool every kitchen needs. Sharp, balanced, and perfect for any cutting task.",
    image: "🔪",
  },
  {
    name: "Cast Iron Skillet",
    description: "Versatile cookware that goes from stovetop to oven. Perfect for searing, baking, and frying.",
    image: "🍳",
  },
  {
    name: "Stand Mixer",
    description: "Bake with ease. Perfect for doughs, batters, and whipping cream in minutes.",
    image: "🥣",
  },
  {
    name: "Instant Pot",
    description: "Pressure cook, slow cook, and more. Transform meals from hours to minutes.",
    image: "🫕",
  },
];

() {
  returnexport default function Home (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-100 to-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-playfair text-5xl text-orange-900 mb-6">
            Welcome to CookinKitchen
          </h1>
          <p className="font-lato text-xl text-stone-700 mb-8 max-w-2xl mx-auto">
            Your ultimate companion for culinary adventures. Discover recipes, 
            find the best kitchen tools, and elevate your cooking game.
          </p>
          <Link 
            href="/reviews" 
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-lato font-bold hover:bg-orange-700 transition shadow-md"
          >
            Explore Reviews
          </Link>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="font-playfair text-3xl text-stone-800 text-center mb-12">
          Featured Kitchen Tools
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTools.map((tool) => (
            <div 
              key={tool.name}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6"
            >
              <div className="text-5xl mb-4 text-center">{tool.image}</div>
              <h3 className="font-playfair text-xl text-stone-800 mb-2 text-center">
                {tool.name}
              </h3>
              <p className="font-lato text-stone-600 text-center text-sm">
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-playfair text-3xl text-orange-900 mb-4">
            Ready to Upgrade Your Kitchen?
          </h2>
          <p className="font-lato text-stone-700 mb-8">
            Check out our detailed reviews and find the perfect tools for your cooking style.
          </p>
          <Link 
            href="/reviews" 
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full font-lato font-bold hover:bg-orange-700 transition shadow-md"
          >
            Browse All Reviews
          </Link>
        </div>
      </section>
    </div>
  );
}
