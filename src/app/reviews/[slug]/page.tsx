import Link from "next/link";
import { notFound } from "next/navigation";

const reviews = [
  {
    slug: "best-chef-knives-home-cooks",
    title: "Best Chef's Knives for Home Cooks",
    excerpt: "We tested 15 chef's knives to find the perfect balance of sharpness, comfort, and durability.",
    category: "Knives",
    rating: 4.8,
    date: "Feb 10, 2026",
    image: "🔪",
    affiliateLink: "https://amzn.to/EXAMPLE-knife",
    content: `
## The Search for the Perfect Blade

After testing 15 different chef's knives over the course of three months, we've found the perfect options for every budget and cooking style.

### Our Top Pick: Miyabi Birchwood

The Miyabi Birchwood delivers exceptional sharpness and beautiful craftsmanship. Its Japanese steel holds an edge remarkably well, and the birchwood handle provides a comfortable grip for extended cooking sessions.

### Best Value: Victorinox Swiss Classic

For those on a budget, the Victorinox Swiss Classic offers incredible value. It's sharp out of the box, easy to sharpen, and durable enough to last years.

### How We Tested
- Paper slicing tests
- Tomato precision cutting
- Rock chop performance
- Comfort during extended use
- Edge retention over time
    `,
  },
  {
    slug: "cast-iron-vs-carbon-steel",
    title: "Cast Iron vs. Carbon Steel: Which is Right?",
    excerpt: "A deep dive into two kitchen essentials. We compare heat retention, maintenance, and cooking results.",
    category: "Cookware",
    rating: 4.5,
    date: "Feb 8, 2026",
    image: "🍳",
    affiliateLink: "https://amzn.to/EXAMPLE-castiron",
    content: `
## The Showdown

Both cast iron and carbon steel are beloved by professional chefs and home cooks alike. But which one is right for your kitchen?

### Cast Iron Pros
- Excellent heat retention
- Naturally non-stick when seasoned
- Incredibly durable
- Affordable

### Carbon Steel Pros
- Lighter weight
- Faster heating
- Easier to handle
- More responsive temperature changes

### Our Verdict
For most home cooks, carbon steel offers the best balance of performance and usability. But cast iron remains the champion for slow-cooked dishes and baking.
    `,
  },
  {
    slug: "instant-pot-vs-ninja-foodi",
    title: "Instant Pot Duo vs. Ninja Foodi",
    excerpt: "Two popular multicookers face off. Which one deserves a spot on your countertop?",
    category: "Appliances",
    rating: 4.3,
    date: "Feb 5, 2026",
    image: "🫕",
    affiliateLink: "https://amzn.to/EXAMPLE-instantpot",
    content: `
## Multicooker Madness

Instant Pot and Ninja Foodi are the two biggest names in electric pressure cooking. Let's break down which one earns a place in your kitchen.

### Instant Pot Duo
- More recipe community support
- Proven reliability
- Stainless steel inner pot
- 7-in-1 functionality

### Ninja Foodi
- Better crisping lid for fried foods
- TenderCrisp technology
- Larger capacity options
- Grill function included

### The Winner
For traditional pressure cooking, the Instant Pot wins. For versatility and air-frying, the Ninja Foodi takes the crown.
    `,
  },
  {
    slug: "kitchenaid-vs-cuisinart-stand-mixer",
    title: "Stand Mixer Showdown: KitchenAid vs. Cuisinart",
    excerpt: "From dough to buttercream, we put these iconic mixers to the test.",
    category: "Appliances",
    rating: 4.7,
    date: "Feb 2, 2026",
    image: "🥣",
    affiliateLink: "https://amzn.to/EXAMPLE-mixer",
    content: `
## Mixing It Up

A stand mixer is the heart of any serious baking kitchen. We tested the top models from KitchenAid and Cuisinart.

### KitchenAid Artisan
- Iconic design
- Excellent motor power
- Wide range of attachments
- Multiple color options

### Cuisinart Stand Mixer
- More affordable
- Lighter weight
- Good performance
- Simpler controls

### Our Pick
The KitchenAid Artisan remains the gold standard, but the Cuisinart offers excellent value for casual bakers.
    `,
  },
];

export function generateStaticParams() {
  return reviews.map((review) => ({
    slug: review.slug,
  }));
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = reviews.find((r) => r.slug === slug);
  
  if (!review) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link 
          href="/reviews" 
          className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8 font-lato"
        >
          ← Back to Reviews
        </Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-lato">
              {review.category}
            </span>
            <span className="font-lato text-amber-600 font-bold">⭐ {review.rating}</span>
            <span className="font-lato text-stone-500 text-sm">{review.date}</span>
          </div>
          
          <div className="text-6xl mb-6">{review.image}</div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">
            {review.title}
          </h1>
          
          <p className="font-lato text-xl text-stone-600 mb-8">
            {review.excerpt}
          </p>
          
          <div className="prose prose-stone max-w-none font-lato">
            {review.content.split('\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="font-playfair text-2xl text-stone-800 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="font-playfair text-xl text-stone-700 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={i} className="ml-4 mb-2">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.trim()) {
                return <p key={i} className="mb-4 text-stone-600">{paragraph}</p>;
              }
              return null;
            })}
          </div>
          
          {/* Affiliate CTA */}
          <div className="mt-12 bg-orange-50 rounded-xl p-6 border border-orange-200">
            <h3 className="font-playfair text-xl text-stone-800 mb-3">
              🔪 Buy on Amazon
            </h3>
            <p className="font-lato text-stone-600 mb-4">
              We may earn a commission when you buy through our links — at no extra cost to you.
            </p>
            <a 
              href={review.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-lato font-bold hover:bg-orange-700 transition"
            >
              Shop Now on Amazon →
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
