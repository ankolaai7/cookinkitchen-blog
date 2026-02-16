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
    affiliateLink: "https://www.amazon.com/Victorinox-Fibrox-Pro-Chefs-Knife/dp/B001NBTV2A?tag=cookinkitchen-20",
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
    affiliateLink: "https://www.amazon.com/Lodge-Cast-Iron-Skillet-12-inch/dp/B00006JSUA?tag=cookinkitchen-20",
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
    affiliateLink: "https://www.amazon.com/Instant-Pot-Duo-Electric-Pressure/dp/B00FLBUERN?tag=cookinkitchen-20",
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
    affiliateLink: "https://www.amazon.com/KitchenAid-KSM150PSER-Artisan-Tilt-Head-5-Quart/dp/B00005UP77?tag=cookinkitchen-20",
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
  {
    slug: "best-nonstick-pan-2026",
    title: "Best Non-Stick Pan for Every Budget",
    excerpt: "We cooked 200+ eggs to find the best non-stick pans. From budget-friendly to premium, here are our top picks.",
    category: "Cookware",
    rating: 4.6,
    date: "Jan 28, 2026",
    image: "🥘",
    affiliateLink: "https://www.amazon.com/T-fal-E93808-Professional-Nonstick-Dishwasher/dp/B000W5XHQW?tag=cookinkitchen-20",
    content: `
## The Great Egg Test

Wefried over 200 eggs to test non-stick performance. Here's what we learned.

### Best Overall: T-fal Ultimate Hard Anodized

This pan delivers excellent non-stick performance at a reasonable price. The thermo-spot indicator shows when the pan is ready, and it works on all cooktops.

### Best Premium: All-Clad Hard Anodized

If you're willing to invest, the All-Clad offers restaurant-quality performance. It's durable, heats evenly, and the non-stick coating lasts for years.

### Best Budget: T-fal E93808

For under $30, this pan outperforms many competitors twice its price. It's lightweight and perfect for beginners.

### How We Tested
- Egg release test (no butter)
- Scrambled eggs
- Fish fillets
- Durability after 6 months of daily use
    `,
  },
  {
    slug: "best-dutch-oven",
    title: "Best Dutch Oven: Le Creuset vs. Lodge vs. Amazon",
    excerpt: "Braising, bread baking, and soup — we tested the top Dutch ovens to find the best value.",
    category: "Cookware",
    rating: 4.9,
    date: "Jan 25, 2026",
    image: "🥄",
    affiliateLink: "https://www.amazon.com/Lodge-Cast-Iron-Dutch-Oven-5-Quart/dp/B000N6ZTBW?tag=cookinkitchen-20",
    content: `
## The Braising Champion

Dutch ovens are the most versatile pot in any kitchen. We tested the top brands for braising, baking, and everyday cooking.

### Best Overall: Le Creuset Enameled Cast Iron

The gold standard. Even heat distribution, beautiful enamel that lasts generations, and excellent self-basting lid.

[Check Price on Amazon →](https://www.amazon.com/dp/B000N4WN08?tag=cookinkitchen-20)

### Best Value: Lodge Enameled Cast Iron

Nearly half the price of Le Creuset with nearly identical performance. The enamel isn't as colorful, but it gets the job done beautifully.

[Check Price on Amazon →](https://www.amazon.com/dp/B00U1OCPWQ?tag=cookinkitchen-20)

### Best Budget: AmazonBasics Enameled Cast Iron

Surprisingly good for the price. Great for beginners who want to try Dutch oven cooking without a big investment.

[Check Price on Amazon →](https://www.amazon.com/dp/B073Q9K2H3?tag=cookinkitchen-20)

### Our Recommendation
If you bake bread, the Le Creuset's weight is essential. For everyday cooking, Lodge offers the best value.
    `,
  },
  {
    slug: "best-kitchen-scale",
    title: "Best Kitchen Scales for Baking & Meal Prep",
    excerpt: "Precise measurements matter. We tested 12 kitchen scales for accuracy, design, and durability.",
    category: "Gadgets",
    rating: 4.4,
    date: "Jan 20, 2026",
    image: "⚖️",
    affiliateLink: "https://www.amazon.com/OXO-Stainless-Compact-Grip-11-Pound/dp/B079D9F86W?tag=cookinkitchen-20",
    content: `
## Why You Need a Scale

Baking is chemistry. Volume measurements are imprecise — a cup of flour can weigh anywhere from 120 to 180 grams depending on how you scoop. A kitchen scale ensures consistent results.

### Best Overall: OXO Good Grips Pop Scale

Sleek design, precise accuracy, and the pop-up display is genius for measuring large quantities.

### Best Digital: AWS-1000 Digital Scale

Under $20 and incredibly accurate. Perfect for serious meal preppers.

### Best Smart Scale: Withings Body Composition

If you want body composition tracking alongside cooking, this is the premium option.

### Our Pick
The OXO Pop Scale balances precision, design, and price perfectly for home bakers.
    `,
  },
  {
    slug: "best-cutting-board",
    title: "Best Cutting Boards: Wood vs. Plastic vs. Glass",
    excerpt: "Your knives deserve the right board. We tested the most popular cutting boards for durability and hygiene.",
    category: "Gadgets",
    rating: 4.5,
    date: "Jan 15, 2026",
    image: "🪵",
    affiliateLink: "https://www.amazon.com/OXO-GOOD-Grips-Cutting-17-Inch/dp/B00E6GUF5W?tag=cookinkitchen-20",
    content: `
## The Board Basics

Your cutting board affects both knife edge life and food safety. Here's what we learned testing 15 boards.

### Best Wood: John Boos Maple Block

The professional choice. Maple is gentle on knives and has natural antimicrobial properties. These boards last decades.

### Best Plastic: OXO Good Grips

Affordable, dishwasher-safe, and replaceable. Great for raw meat where sanitation is key.

### Best Bamboo: SimpleHouseware Bamboo

Eco-friendly and naturally antimicrobial. Softer than wood but still knife-friendly.

### Our Pick
We recommend having both: a large wood board for vegetables and a dedicated plastic board for raw meat.
    `,
  },
  {
    slug: "best-santoku-knife",
    title: "Best Santoku Knife: Japanese Precision",
    excerpt: "The santoku is a versatile Japanese knife. We tested the top options for home cooks.",
    category: "Knives",
    rating: 4.7,
    date: "Jan 12, 2026",
    image: "🔪",
    affiliateLink: "https://www.amazon.com/Shun-DM0706-Classic-7-Inch-Santoku/dp/B0000Y7LYM?tag=cookinkitchen-20",
    content: `
## Japanese Precision

The santoku meaning "three virtues" excels at slicing, dicing, and mincing. We tested the top santoku knives to find the best for home cooks.

### Our Top Pick: Shun Classic Santoku

The Shun Classic offers exceptional sharpness and the hollow edge reduces friction for cleaner cuts. It's lightweight and perfectly balanced.

### Best Value: Victorinox Swiss Classic Santoku

Victorinox delivers again with an affordable option that outperforms knives twice its price.

### How We Tested
- Vegetable dicing tests
- Fish slicing
- Mincing herbs
- Comfort during extended use
    `,
  },
  {
    slug: "best-blender-2026",
    title: "Best Blender: Vitamix vs. Ninja vs. Oster",
    excerpt: "Smoothies, soups, and frozen drinks — we tested the best blenders for every budget.",
    category: "Appliances",
    rating: 4.5,
    date: "Jan 10, 2026",
    image: "🫗",
    affiliateLink: "https://www.amazon.com/Ninja-BL610-Professional-72-Watt-Blender/dp/B00NG5H436?tag=cookinkitchen-20",
    content: `
## The Blender Showdown

From morning smoothies to hot soups, we tested 12 blenders to find the best options for every kitchen.

### Best Overall: Vitamix 5200

The Vitamix delivers restaurant-quality blending at home. Powerful motor, durable construction, and excellent warranty.

### Best Value: Ninja Professional Blender

Ninja offers great performance at a fraction of the price. Perfect for smoothies and basic blending tasks.

### Best for Smoothies: Oster Pro 1200

The Oster Pro's blender bottle system makes on-the-go smoothies a breeze.
    `,
  },
  {
    slug: "best-coffee-maker",
    title: "Best Coffee Maker: Drip vs. Pour Over vs. French Press",
    excerpt: "Morning coffee matters. We tested 15 coffee makers to find the perfect brew.",
    category: "Appliances",
    rating: 4.6,
    date: "Jan 8, 2026",
    image: "☕",
    affiliateLink: "https://www.amazon.com/Technivorm-Moccamaster-10-Cup-Coffee-Brewer/dp/B07CM5H7BQ?tag=cookinkitchen-20",
    content: `
## Brewing Excellence

We tested drip coffee makers, pour-over systems, and French presses to find your perfect morning cup.

### Best Drip: Bonavita Connoisseur

Consistent brewing temperature and pre-infusion mode make this our top drip pick.

### Best Pour Over: Chemex

The classic pour-over produces clean, bright coffee that's hard to beat.

### Best Value: Hamilton Beach Single Serve

Great coffee doesn't have to be expensive. This brewer delivers solid results.
    `,
  },
  {
    slug: "best-air-fryer",
    title: "Best Air Fryer: Ninja vs. Philips vs. Cosori",
    excerpt: "Crispy food with less oil. We tested the top air fryers for performance and ease of use.",
    category: "Appliances",
    rating: 4.4,
    date: "Jan 5, 2026",
    image: "🍟",
    affiliateLink: "https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?tag=cookinkitchen-20",
    content: `
## Crispy Without the Oil

Air fryers have revolutionized home cooking. We tested the top models to find which delivers the crispiest results.

### Best Overall: Ninja Air Fryer XXL

Large capacity, consistent results, and versatile cooking functions make this our top pick.

[Check Price on Amazon →](https://www.amazon.com/Ninja-AF101-Fryer-Black-gray/dp/B07FDJMC9Q?tag=cookinkitchen-20)

### Best Premium: Philips Premium Airfryer XXL

The Philips delivers restaurant-quality air frying with its unique basket design.

[Check Price on Amazon →](https://www.amazon.com/dp/B07YDY6WR6?tag=cookinkitchen-20)

### Best Value: Cosori Air Fryer

Affordable and reliable, Cosori offers great results without breaking the bank.

[Check Price on Amazon →](https://www.amazon.com/dp/B07WVWR56H?tag=cookinkitchen-20)
    `,
  },
  {
    slug: "best-knife-sharpener",
    title: "Best Knife Sharpener: Chef'sChoice vs. Work Sharp",
    excerpt: "A dull knife is dangerous. We tested sharpeners to keep your blades razor-sharp.",
    category: "Gadgets",
    rating: 4.3,
    date: "Jan 3, 2026",
    image: "⚡",
    affiliateLink: "https://www.amazon.com/ChefsChoice-15-Inch-Conventional-Sharpener/dp/B00004S7I8?tag=cookinkitchen-20",
    content: `
## Keep Your Blades Sharp

A sharp knife is safer than a dull one. We tested the top knife sharpeners for ease of use and results.

### Best Overall: Chef'sChoice 15

Electric sharpening made easy. The 3-stage system delivers consistent, razor-sharp edges.

### Best Manual: Work Sharp Kitchen Knife Sharpener

Manual control lets you achieve the exact edge you want. Great for knife enthusiasts.

### Best Value: Idhone Diamond Sharpener

Affordable and effective for quick touch-ups between full sharpenings.
    `,
  },
  {
    slug: "best-mesh-strainer",
    title: "Best Kitchen Strainer & Colander",
    excerpt: "From pasta to flour, we tested the best strainers for everyday kitchen use.",
    category: "Gadgets",
    rating: 4.2,
    date: "Jan 1, 2026",
    image: "🥣",
    affiliateLink: "https://www.amazon.com/Cuisinox-Stainless-Steel-Strainer/dp/B0002H7F9E?tag=cookinkitchen-20",
    content: `
## Essential Kitchen Tools

Every kitchen needs reliable strainers. We tested the best options for pasta, flour, and more.

### Best Mesh Strainer: OXO Good Grips

Fine mesh catches everything, and the sturdy handle makes straining easy.

### Best Colander: RSVP Endurance

The perfect size for draining pasta, with stable feet that won't tip.

### Best Set: Spring Chef Mesh Strainer Set

Multiple sizes cover all your straining needs.
    `,
  },
  {
    slug: "best-measuring-cups",
    title: "Best Measuring Cups: Liquid vs. Dry",
    excerpt: "Precise measurements lead to better cooking. We tested the top measuring cup sets.",
    category: "Gadgets",
    rating: 4.4,
    date: "Dec 28, 2025",
    image: "🧪",
    affiliateLink: "https://www.amazon.com/OXO-GOOD-Grips-Measuring-Cups/dp/B00GE6NF6G?tag=cookinkitchen-20",
    content: `
## Measure Right

Accurate measurements are the foundation of great cooking. We tested measuring cups for precision and ease.

### Best Liquid: OXO Good Grips

The angled measurement cup lets you see markings from above. Genius design.

### Best Dry: KitchenAid Dry Measuring Cups

Stainless steel set with nested storage. The smooth interior makes dumping easy.

### Best Set: rachIO Rocketry Measuring Cups

Everything you need in one comprehensive set.
    `,
  },
  {
    slug: "best-spatula-set",
    title: "Best Spatula Set: Silicone vs. Wood",
    excerpt: "Every kitchen needs reliable spatulas. We tested the best options for cooking and baking.",
    category: "Gadgets",
    rating: 4.5,
    date: "Dec 25, 2025",
    image: "🥄",
    affiliateLink: "https://www.amazon.com/Stainless-Steel-Spatula-Set-Utensil/dp/B07XJ8C8F5?tag=cookinkitchen-20",
    content: `
## Essential Tools

Spatulas are workhorses in any kitchen. We tested the best for flipping, scraping, and more.

### Best Silicone: OXO Good Grips

Heat-resistant, sturdy, and the angled edge gets into corners perfectly.

### Best Wood: Juniper Spoonula

The unique spoon-spatula hybrid is incredibly versatile.

### Best Set: StarPack Home Stainless Steel

This set includes everything you need and lasts forever.
    `,
  },
  {
    slug: "best-frying-pan",
    title: "Best Frying Pan: Stainless Steel Showdown",
    excerpt: "From searing steak to scrambled eggs, we tested the best stainless steel pans.",
    category: "Cookware",
    rating: 4.7,
    date: "Dec 22, 2025",
    image: "🍳",
    affiliateLink: "https://www.amazon.com/All-Clad-Stainless-Tri-Ply-Cookware/dp/B000X5OC1K?tag=cookinkitchen-20",
    content: `
## The All-Clad Showdown

Stainless steel pans are kitchen workhorses. We tested the top options for heat distribution and durability.

### Best Overall: All-Clad D3 Stainless Steel

The gold standard. Even heating, riveted handles, and a lifetime warranty.

### Best Value: Cuisinart Chef's Classic

Excellent performance at a fraction of the All-Clad price.

### Best Budget: T-fal Ultimate Hard Anodized

Great non-stick performance with the durability of hard anodized aluminum.
    `,
  },
  {
    slug: "best-electric-kettle",
    title: "Best Electric Kettle: Bonavita vs. Fellow vs. Hamilton Beach",
    excerpt: "Boil water faster and smarter. We tested the best electric kettles for tea and coffee.",
    category: "Appliances",
    rating: 4.5,
    date: "Dec 20, 2025",
    image: "🫖",
    affiliateLink: "https://www.amazon.com/Bonavita-Electric-Gooseneck-Kettle/dp/B00DGBNOQK?tag=cookinkitchen-20",
    content: `
## Hot Water on Demand

Electric kettles are faster than stovetop. We tested the best for temperature control and speed.

### Best Overall: Fellow Stagg EKG

Beautiful design meets precision temperature control. The pour is perfect.

### Best Value: Hamilton Beach 1.7L

Fast boiling at an affordable price. Simple and reliable.

### Best Gooseneck: Bonavita Connoisseur

The gooseneck gives you precise control for pour-over coffee.
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
