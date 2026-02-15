import Link from "next/link";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    slug: "how-to-choose-knife",
    title: "How to Choose the Right Chef's Knife",
    excerpt: "A comprehensive guide to finding your perfect knife. Size, material, and handle — we break it all down.",
    category: "Guide",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    image: "🔪",
    amazonLink: "#",
    content: `
## Why Your Knife Matters

Your chef's knife is the most important tool in your kitchen. It's used for 80% of all prep work, and a good knife makes cooking safer, faster, and more enjoyable.

## Choosing the Right Size

The most common sizes are 8-inch and 10-inch. Here's how to pick:

- **8-inch**: Ideal for most home cooks. Versatile and easy to control
- **10-inch**: Better for larger hands or if you often cut big vegetables
- **6-inch**: Great for precision work and smaller hands

## Blade Materials

### Stainless Steel
- Low maintenance
- Resists rust and stains
- Easier to sharpen
- Best for: Most home cooks

### High-Carbon Steel  
- Exceptionally sharp
- Requires more care (dry after washing)
- Develops a patina over time
- Best for: Serious home cooks and professionals

### Ceramic
- Very sharp initially
- Fragile - can chip or break
- Doesn't need frequent sharpening
- Best for: Light use

## Handle Types

### Western (Bolstered)
- Full tang for balance
- Comfortable grip
- Classic look

### Japanese (Wa)
- Lighter feel
- Thin blade
- Traditional aesthetic

## Our Top Picks

### Best Overall: Victorinox Swiss Classic 8-inch
The perfect balance of performance and value. Sharp, comfortable, and affordable.

### Best Premium: Wüsthof Classic 8-inch
German engineering at its finest. Lifetime warranty and exceptional build quality.

### Best Value: Mercer Culinary Genesis 8-inch
Professional quality at a fraction of the price.

## Final Thoughts

The best knife is one that feels comfortable in your hand. We recommend trying a few before buying. A good chef's knife should feel like an extension of your arm.
    `,
  },
  {
    slug: "kitchen-essentials-2026",
    title: "Kitchen Essentials: What Every Home Needs",
    excerpt: "The 10 tools that will transform your cooking. From knives to pans, here's what belongs in every kitchen.",
    category: "Guide",
    date: "Feb 9, 2026",
    readTime: "7 min read",
    image: "🍳",
    amazonLink: "#",
    content: `
## The Foundation of a Great Kitchen

Every well-equipped kitchen starts with these essential tools. We've tested hundreds to find the best.

## 1. Chef's Knife (8-inch)

The workhorse of your kitchen. Used for 80% of all cutting tasks.

**Our Pick:** Victorinox Swiss Classic

## 2. Cutting Board

A good cutting board protects your knives and provides a safe surface.

**Our Pick:** John Boos Maple Block

## 3. Cast Iron Skillet

The most versatile pan in any kitchen. Goes from stovetop to oven.

**Our Pick:** Lodge Cast Iron Skillet

## 4. Dutch Oven

For braising, bread baking, and one-pot meals.

**Our Pick:** Le Creuset Enameled Dutch Oven

## 5. Stainless Steel Pan

For searing, deglazing, and everyday cooking.

**Our Pick:** All-Clad D3

## 6. Instant Pot

The ultimate time-saver for busy home cooks.

**Our Pick:** Instant Pot Duo

## 7. Stand Mixer

For baking enthusiasts who want consistent results.

**Our Pick:** KitchenAid Artisan

## 8. Kitchen Scale

Baking is chemistry. Precise measurements matter.

**Our Pick:** OXO Good Grips Pop Scale

## 9. Instant-Read Thermometer

Take the guesswork out of cooking meat.

**Our Pick:** ThermoWorks ThermoPop

## 10. Microplane

For zesting, grating, and adding fresh flavors.

**Our Pick:** Microplane Premium Grater

## Building Your Collection

Start with #1-5, then add the rest as your budget allows. Quality tools last a lifetime.
    `,
  },
  {
    slug: "cast-iron-care",
    title: "Cast Iron Care: The Ultimate Guide",
    excerpt: "Everything you need to know about seasoning, cleaning, and maintaining your cast iron cookware.",
    category: "Tutorial",
    date: "Feb 6, 2026",
    readTime: "6 min read",
    image: "🥘",
    amazonLink: "#",
    content: `
## The Magic of Cast Iron

Cast iron has been cooking food for centuries. With proper care, your cast iron will last for generations.

## Seasoning Your Pan

Seasoning creates a natural, non-stick coating. Here's how to do it:

1. Clean the pan with soap and water
2. Dry thoroughly with a towel
3. Apply a thin layer of vegetable oil
4. Place upside down in a 450°F oven for 1 hour
5. Let cool in the oven

Repeat this process 3-4 times for a perfect seasoning.

## Cleaning Your Cast Iron

**DO:**
- Use hot water
- Use a stiff brush or chain mail scrubber
- Dry immediately
- Re-oil after every wash

**DON'T:**
- Use soap (it's okay occasionally, but avoid it)
- Soak in water
- Put in the dishwasher
- Leave it wet

## Troubleshooting

### Rust
Remove with steel wool, then re-season.

### Sticky Surface
Too much oil. Wipe clean and re-season.

### Food Sticking
Time to re-season your pan.

## Our Favorite Cast Iron Pans

**Best Overall:** Lodge Cast Iron Skillet
**Best Enameled:** Le Creuset
**Best Budget:** AmazonBasics Enameled Cast Iron
    `,
  },
  {
    slug: "knife-skills-101",
    title: "Knife Skills 101: Basic Cuts Every Cook Should Know",
    excerpt: "Master the julienne, chiffonade, and more. Proper knife skills make you faster and safer in the kitchen.",
    category: "Tutorial",
    date: "Feb 3, 2026",
    readTime: "8 min read",
    image: "🥕",
    amazonLink: "#",
    content: `
## Why Knife Skills Matter

Good knife skills make you faster, safer, and more confident in the kitchen. Plus, uniformly cut food cooks more evenly.

## The Claw

Before you start cutting, learn the claw:
- Curl your fingertips under
- Guide the knife with your knuckles
- Keep the blade against your fingers

## Basic Cuts

### The Slice
Rock the knife from tip to heel. For thin slices, use a sawing motion.

### The Dice

**Small Dice:** ¼-inch cubes
**Medium Dice:** ½-inch cubes  
**Large Dice:** ¾-inch cubes

### Julienne
Matchstick-thin strips, 1/8 x 1/8 x 2-3 inches

### Brunoise
Very fine dice, 1/8-inch cubes (julienne first, then turn and dice)

### Chiffonade
Fine ribbons of leafy greens or herbs. Stack leaves, roll tightly, then slice thinly.

### Rondelle
Rounds from cylindrical vegetables like carrots or zucchini.

## Safety Tips

1. Keep your knife sharp — dull knives slip
2. Always cut away from your body
3. Never catch a falling knife
4. Use a damp towel to anchor your cutting board

## Practice Makes Perfect

Start with onions (lots of practice needed!) and work your way up to more delicate vegetables.
    `,
  },
  {
    slug: "non-toxic-cookware",
    title: "Non-Toxic Cookware: What's Really Safe?",
    excerpt: "We dive into the research on non-stick coatings, ceramic, and other cookware materials.",
    category: "Guide",
    date: "Jan 30, 2026",
    readTime: "6 min read",
    image: "🍳",
    amazonLink: "#",
    content: `
## Understanding Cookware Safety

With so many options, it's hard to know what's truly safe. Let's separate fact from fiction.

## Non-Stick (Teflon)

**The Concern:** PFOA and PTFE
- Older non-stick pans used PFOA (now mostly banned)
- PTFE is generally considered safe at normal cooking temps
- Can release toxic fumes at very high heat

**Our Take:** Safe for everyday use, but replace if scratched. Don't overheat.

## Ceramic

**The Claim:** Natural, non-toxic
- Made with silica (sand)
- No PTFE or PFOA
- Can be less durable than other options

**Our Take:** Good option, but watch for durability issues.

## Cast Iron

**The Claim:** Natural seasoning
- Seasoning is just polymerized oil
- Safe and non-toxic
- Requires maintenance

**Our Take:** One of the safest options available.

## Stainless Steel

**The Claim:** Inert and safe
- Doesn't react with food
- Very durable
- Can leach nickel for those with allergies

**Our Take:** Excellent all-around choice.

## Our Recommendations

**Best Non-Toxic Overall:** Cast Iron
**Best for Non-Stick:** Ceramic (Xtrema)
**Best Everyday:** Stainless Steel
    `,
  },
  {
    slug: "stand-mixer-recipes",
    title: "25+ Stand Mixer Recipes for Beginners",
    excerpt: "Get the most out of your stand mixer with these beginner-friendly recipes. From bread to cookies.",
    category: "Recipes",
    date: "Jan 25, 2026",
    readTime: "10 min read",
    image: "🥣",
    amazonLink: "#",
    content: `
## Your Stand Mixer Is a Game-Changer

A stand mixer isn't just for cookies. Here are 25+ ways to use it.

## Breads

### Classic Bread Dough
- 3 cups bread flour
- 1 packet active dry yeast
- 1¼ cups warm milk
- 2 tablespoons sugar
- 1 teaspoon salt
- 2 tablespoons olive oil

Knead with dough hook for 5-7 minutes until smooth and elastic.

### Pizza Dough
Same as above, but use 2 cups flour and let rise for 30 minutes.

### Cinnamon Rolls
Use bread dough, roll out, fill with butter, cinnamon sugar, roll, cut, rise, bake.

## Cookies

### Chocolate Chip Cookies
- 2¼ cups flour
- 1 cup butter (softened)
- ¾ cup sugar
- ¾ cup brown sugar
- 2 eggs
- 1 tsp vanilla
- 1 tsp baking soda

Cream butter and sugars, add eggs and vanilla, mix in flour and baking soda. Fold in chocolate chips.

## Pasta

### Basic Pasta Dough
- 2 cups flour
- 3 eggs
- 1 tablespoon olive oil
- Pinch of salt

Mix with paddle, knead, rest, roll thin, cut into shapes.

## And More...

- Mashed potatoes
- Whipped cream
- Butter
- Mayonnaise
- Meatballs
- Pancakes
- Waffles
- Biscuits
- Scones
- Donuts
- Frosting
- Breadcrumbs
- Nut butters
    `,
  },
  {
    slug: "instant-pot-basics",
    title: "Instant Pot Basics: Your First Week of Meals",
    excerpt: "7 easy Instant Pot recipes to get you started. Weeknight dinners made simple.",
    category: "Recipes",
    date: "Jan 20, 2026",
    readTime: "8 min read",
    image: "🫕",
    amazonLink: "#",
    content: `
## Why the Instant Pot?

It's a pressure cooker, slow cooker, rice cooker, and more in one. Here's your week of meals.

## Monday: Instant Pot Rice
- 1 cup rice
- 1 cup water
- 1 tsp salt
- High pressure 10 min, natural release

## Tuesday: Hard Boiled Eggs
- 6 eggs
- 1 cup water
- High pressure 5 min, quick release
- Ice bath for 5 min

## Wednesday: Chicken & Rice
- 1 lb chicken breast
- 1 cup rice
- 2 cups chicken broth
- High pressure 15 min, natural release

## Thursday: Beef Stew
- 1 lb beef chuck, cubed
- 4 potatoes, cubed
- 3 carrots, sliced
- 2 cups beef broth
- High pressure 35 min, natural release

## Friday: Black Beans
- 1 lb dried black beans
- 4 cups water
- High pressure 30 min, natural release

## Saturday: Lentil Soup
- 1 cup lentils
- 4 cups vegetable broth
- 1 onion, diced
- 2 carrots, diced
- High pressure 15 min, natural release

## Sunday: Pulled Pork
- 3 lb pork shoulder
- 1 cup BBQ sauce
- ½ cup apple cider vinegar
- High pressure 60 min, natural release

## Pro Tips

- Always use the natural release for meat
- Quick release for vegetables
- Don't fill more than ⅔ full
- Use the sauté function for browning
    `,
  },
  {
    slug: "knife-vs-santoku",
    title: "Chef's Knife vs Santoku: Which Should You Choose?",
    excerpt: "The age-old debate. We compare both knives to help you decide which is right for your cooking style.",
    category: "Guide",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    image: "🔪",
    amazonLink: "#",
    content: `
## The Great Debate

Both are excellent everyday knives. Here's how to choose.

## Chef's Knife

**Pros:**
- Versatile - rocks for mincing
- Familiar to most cooks
- Great for tough vegetables
- Many sizes available

**Cons:**
- Requires more technique
- Curved blade takes getting used to

**Best For:**
- Rock chopping
- Hard vegetables
- Traditional cooking styles

## Santoku

**Pros:**
- Lightweight
- Flat blade for push cuts
- Hollow edge reduces sticking
- Great for precision work

**Cons:**
- Smaller blade (typically 5-7 inches)
- Less versatile
- Takes getting used to

**Best For:**
- Push cutting
- Fish and vegetables
- Japanese cooking

## Our Recommendation

**Get Both:** They're complementary, not competing.
- Use chef's knife for big jobs
- Use santoku for precision work

**If You Can Only Get One:**
- Choose chef's knife for versatility
- Choose santoku if you prefer precision
    `,
  },
  {
    slug: "air-fryer-tips",
    title: "Air Fryer Tips for Perfect Results Every Time",
    excerpt: "Get the crispiest food with less oil. Our top tips for air fryer success.",
    category: "Tutorial",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    image: "🍟",
    amazonLink: "#",
    content: `
## Air Frying 101

Less oil, crispy results. Here's how to master your air fryer.

## The Basics

1. **Preheat** - Always preheat for 3-5 minutes
2. **Don't Crowd** - Leave space for air circulation
3. **Shake** - Halfway through, shake the basket
4. **Spray** - Light oil spray helps crispiness

## Temperature Guide

- **Frozen foods:** 400°F
- **Fresh vegetables:** 375-400°F
- **Chicken:** 375°F
- **Fish:** 400°F
- **Baked goods:** 325-350°F

## Common Mistakes

### Using Too Much Oil
A light spray is all you need. Too much oil makes food soggy.

### Not Preheating
Cold start = longer cooking and less crispy results.

### Overcrowding
Air can't circulate. Food steams instead of crisps.

### Opening Too Often
Temperature drops. Let it cook without checking.

## Our Favorite Recipes

### Crispy Wings
- Pat wings very dry
- Light spray of oil
- 400°F for 25-30 min
- Flip halfway

### Roasted Vegetables
- Cut uniform sizes
- Light oil spray
- 400°F for 12-15 min
- Shake halfway

### Frozen Fries
- No need to thaw
- Light spray
- 400°F for 15-20 min

## Best Air Fryers

**Best Overall:** Ninja Air Fryer XXL
**Best Value:** Cosori Air Fryer
**Best Premium:** Philips Airfryer XXL
    `,
  },
  {
    slug: "best-kitchen-gadgets-2026",
    title: "Best Kitchen Gadgets Under $50",
    excerpt: "Upgrade your kitchen without breaking the bank. Our top picks for affordable tools.",
    category: "Guide",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    image: "⚡",
    amazonLink: "#",
    content: `
## Affordable Upgrades

You don't need expensive tools to cook like a pro. Here are our favorites under $50.

## Must-Haves Under $20

### OXO Good Grips Can Opener - $12
The easiest can opener you'll ever use.

### Microplane Grater - $15
Zest citrus, grate cheese, garlic, chocolate.

### Kitchen Shears - $10
Cut herbs, pizza, chicken, and more.

### Instant-Read Thermometer - $15
ThermoWorks ThermoPop takes the guesswork out of meat.

## Under $35

### OXO Pop Container Set - $30
Keep ingredients fresh. Airtight seal.

### Lodge Cast Iron Skillet - $30
The most versatile pan you'll own.

### OXO Good Grips Salad Spinner - $25
Dry greens in seconds.

## Under $50

### Instant Pot Duo 7-in-1 - $45
Pressure cook, slow cook, rice, yogurt, and more.

### KitchenAid Can Opener - $40
Electric, hands-free, opens any can.

### Vitamix Container - $45
Replacement container if you need extras.

## Our Top 5 Overall

1. Instant Pot Duo
2. Lodge Cast Iron Skillet
3. OXO Pop Containers
4. Microplane Grater
5. Instant-Read Thermometer
    `,
  },
  {
    slug: "seasoning-guide",
    title: "How to Season a Knife Like a Pro",
    excerpt: "Keep your knives razor-sharp with proper honing and sharpening. A step-by-step guide.",
    category: "Tutorial",
    date: "Jan 1, 2026",
    readTime: "5 min read",
    image: "⚡",
    amazonLink: "#",
    content: `
## Honing vs. Sharpening

Know the difference to keep your knives performing their best.

## Honing (Before Each Use)

Honing realigns the edge. Do this before every cooking session.

### How to Hone
1. Hold honing steel vertically
2. Place heel of knife at top of steel
3. Draw blade down and toward you in a sweeping motion
4. Alternate sides (5-6 strokes each)
5. Maintain consistent angle (about 20 degrees)

## Sharpening (When Needed)

Sharpening removes metal to create a new edge. Do this every few months or when honing isn't enough.

### How to Use a Sharpener

**Electric:**
1. Turn on
2. Draw blade through slots (follow instructions)
3. One pass per side usually enough

**Manual:**
1. Place in coarse slot
2. Draw through 3-4 times
3. Repeat in fine slot
4. Use the honing steel after

## When to Replace

Signs your knife needs replacing:
- Won't hold an edge after sharpening
- Blade is visibly damaged
- Handle is loose
- You've been using it for 10+ years

## Pro Tips

- Always hone after each use
- Use a light touch
- Clean the steel periodically
- Never hone a serrated knife
    `,
  },
  {
    slug: "blender-vs-food-processor",
    title: "Blender vs Food Processor: Which Do You Need?",
    excerpt: "Both are useful, but which is right for your cooking? We break down the differences.",
    category: "Guide",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    image: "🫗",
    amazonLink: "#",
    content: `
## Know the Difference

These appliances seem similar but serve different purposes.

## Blender

**Best For:**
- Smoothies
- Soups (hot)
- Frozen drinks
- Nut butters
- Purees
- Baby food

**How It Works:**
- Tall, narrow container
- Blades at the bottom
- Creates vortex for smooth blends
- Great for liquid-heavy recipes

## Food Processor

**Best For:**
- Chopping vegetables
- Making dough
- Shredding cheese
- Slicing
- Nut processing
- Hummus

**How It Works:**
- Wide, short bowl
- Blades in center
- Processes dry and wet ingredients
- Better for chunky results

## Which Do You Need?

### Get a Blender If:
- Smoothies are your thing
- You make a lot of soups
- You want one appliance

### Get a Food Processor If:
- You do a lot of meal prep
- You bake often
- You chop vegetables daily

### Get Both If:
- You have the space and budget
- You do both types of cooking regularly

## Our Picks

**Best Blender:** Vitamix 5200
**Best Value Blender:** Ninja Professional
**Best Food Processor:** Cuisinart 14-Cup
    `,
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-stone-600 hover:text-amber-600 mb-8 font-medium"
        >
          ← Back to Blog
        </Link>
        
        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-12 text-center">
            <div className="text-7xl mb-4">{post.image}</div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {post.category}
              </span>
              <span className="text-stone-500">{post.readTime}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-800">
              {post.title}
            </h1>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="prose prose-stone max-w-none">
              {post.content.split('\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-bold text-stone-800 mt-8 mb-4">{paragraph.replace('## ', '')}</h2>;
                }
                if (paragraph.startsWith('### ')) {
                  return <h3 key={i} className="text-xl font-bold text-stone-700 mt-6 mb-3">{paragraph.replace('### ', '')}</h3>;
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={i} className="font-bold text-stone-800 mt-4 mb-2">{paragraph.replace(/\*\*/g, '')}</p>;
                }
                if (paragraph.startsWith('- ')) {
                  return <li key={i} className="ml-4 mb-2 text-stone-600">{paragraph.replace('- ', '')}</li>;
                }
                if (paragraph.match(/^\d+\./)) {
                  return <p key={i} className="font-bold text-stone-700 mt-4 mb-2">{paragraph}</p>;
                }
                if (paragraph.trim()) {
                  return <p key={i} className="mb-4 text-stone-600 leading-relaxed">{paragraph}</p>;
                }
                return null;
              })}
            </div>
            
            {/* CTA */}
            <div className="mt-10 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-white text-center">
              <h3 className="font-bold text-lg mb-2">Love this guide?</h3>
              <p className="mb-4">Check out our recommended products on Amazon.</p>
              <a 
                href={post.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-600 px-6 py-2 rounded-lg font-bold hover:bg-amber-50 transition"
              >
                🛒 Shop on Amazon
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
