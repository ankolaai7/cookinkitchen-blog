import Link from "next/link";

const blogPosts = [
  {
    slug: "how-to-choose-knife",
    title: "How to Choose the Right Chef's Knife",
    excerpt: "A comprehensive guide to finding your perfect knife. Size, material, and handle — we break it all down.",
    category: "Guide",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    image: "🔪",
  },
  {
    slug: "kitchen-essentials-2026",
    title: "Kitchen Essentials: What Every Home Needs",
    excerpt: "The 10 tools that will transform your cooking. From knives to pans, here's what belongs in every kitchen.",
    category: "Guide",
    date: "Feb 9, 2026",
    readTime: "7 min read",
    image: "🍳",
  },
  {
    slug: "cast-iron-care",
    title: "Cast Iron Care: The Ultimate Guide",
    excerpt: "Everything you need to know about seasoning, cleaning, and maintaining your cast iron cookware.",
    category: "Tutorial",
    date: "Feb 6, 2026",
    readTime: "6 min read",
    image: "🥘",
  },
  {
    slug: "knife-skills-101",
    title: "Knife Skills 101: Basic Cuts Every Cook Should Know",
    excerpt: "Master the julienne, chiffonade, and more. Proper knife skills make you faster and safer in the kitchen.",
    category: "Tutorial",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    image: "🥕",
  },
  {
    slug: "non-toxic-cookware",
    title: "Non-Toxic Cookware: What's Really Safe?",
    excerpt: "We dive into the research on non-stick coatings, ceramic, and other cookware materials.",
    category: "Guide",
    date: "Jan 30, 2026",
    readTime: "6 min read",
    image: "🍳",
  },
  {
    slug: "stand-mixer-recipes",
    title: "25+ Stand Mixer Recipes for Beginners",
    excerpt: "Get the most out of your stand mixer with these beginner-friendly recipes. From bread to cookies.",
    category: "Recipes",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    image: "🥣",
  },
  {
    slug: "instant-pot-basics",
    title: "Instant Pot Basics: Your First Week of Meals",
    excerpt: "7 easy Instant Pot recipes to get you started. Weeknight dinners made simple.",
    category: "Recipes",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    image: "🫕",
  },
  {
    slug: "knife-vs-santoku",
    title: "Chef's Knife vs Santoku: Which Should You Choose?",
    excerpt: "The age-old debate. We compare both knives to help you decide which is right for your cooking style.",
    category: "Guide",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "🔪",
  },
  {
    slug: "air-fryer-tips",
    title: "Air Fryer Tips for Perfect Results Every Time",
    excerpt: "Get the crispiest food with less oil. Our top tips for air fryer success.",
    category: "Tutorial",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "🍟",
  },
  {
    slug: "best-kitchen-gadgets-2026",
    title: "Best Kitchen Gadgets Under $50",
    excerpt: "Upgrade your kitchen without breaking the bank. Our top picks for affordable tools.",
    category: "Guide",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    image: "⚡",
  },
  {
    slug: "seasoning-guide",
    title: "How to Season a Knife Like a Pro",
    excerpt: "Keep your knives razor-sharp with proper honing and sharpening. A step-by-step guide.",
    category: "Tutorial",
    date: "Jan 1, 2026",
    readTime: "5 min read",
    image: "⚡",
  },
  {
    slug: "blender-vs-food-processor",
    title: "Blender vs Food Processor: Which Do You Need?",
    excerpt: "Both are useful, but which is right for your cooking? We break down the differences.",
    category: "Guide",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    image: "🫗",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            Kitchen Blog
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Guides, tutorials, and recipes to make you a better home cook.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, idx) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-amber-300 transform hover:-translate-y-2 cursor-pointer"
              style={{animationDelay: `${idx * 0.05}s`}}
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{post.image}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold">
                    {post.category}
                  </span>
                  <span className="text-xs text-stone-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-lg text-stone-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-stone-400">{post.date}</span>
                  <span className="inline-flex items-center gap-1 text-emerald-600 text-sm font-bold group-hover:translate-x-1 transition-transform duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Get Kitchen Tips Weekly!
          </h3>
          <p className="text-amber-100 mb-6 max-w-lg mx-auto">
            Join 10,000+ home cooks getting our best tips and recipes every week.
          </p>
          <div className="flex gap-2 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 rounded-lg text-stone-900 w-full max-w-xs"
            />
            <button className="bg-stone-900 text-white px-6 py-3 rounded-lg font-bold hover:bg-stone-800 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
