import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Kitchen Utensil Sets - 2026 Buying Guide",
  description: "From silicone to wood, we tested the best kitchen utensil sets for every cooking style. Find your perfect set.",
};

const products = [
  {
    name: "Fullstar Kitchen Utensil Set",
    price: "$29.99",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Fullstar-Kitchen-Utensil-Set/dp/B07XJ8CX8N?tag=cookinkitchen-20",
    pros: ["20 pieces included", "Rotating holder", "Heat resistant", "Great value"],
    cons: ["Some plastic parts"],
  },
  {
    name: "Home Hero Kitchen Utensil 18-Piece",
    price: "$24.99",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/Home-Hero-Kitchen-Utensil-18-Piece/dp/B07XK1NHMW?tag=cookinkitchen-20",
    pros: ["Complete set", "Wooden handles", "Utensil holder", "Budget-friendly"],
    cons: ["Not dishwasher safe"],
  },
  {
    name: "StarPack Home Kitchen Utensil Set",
    price: "$34.99",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/StarPack-Home-Kitchen-Utensil-Set/dp/B00KQP4LMG?tag=cookinkitchen-20",
    pros: ["Stainless steel", "Modern design", "Durable", "5-year warranty"],
    cons: ["No rotating holder"],
  },
  {
    name: "KitchenAid 5-Piece Nylon Utensil Set",
    price: "$24.99",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
    link: "https://www.amazon.com/KitchenAid-5-Piece-Nylon-Utensil/dp/B00005UP2Q?tag=cookinkitchen-20",
    pros: ["Heat resistant to 400°F", "Trusted brand", "Dishwasher safe", "Comfortable grip"],
    cons: ["Only 5 pieces"],
  },
];

export default function BestKitchenUtensilSet() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/reviews" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 font-lato font-medium transition">← Back to Reviews</Link>
        
        <article>
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-lato font-medium">Utensils</span>
            <span className="font-lato text-emerald-500 font-bold">★ 4.7</span>
            <span className="font-lato text-stone-400 text-sm">Feb 17, 2026</span>
          </div>
          
          <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop" 
              alt="Best Kitchen Utensil Sets" 
              className="w-full h-64 object-cover"
            />
          </div>
          
          <h1 className="font-playfair text-4xl text-stone-800 mb-6">Best Kitchen Utensil Sets: Complete Guide</h1>
          <p className="font-lato text-xl text-stone-600 mb-8">We tested utensil sets from budget to premium to find the best tools for every kitchen.</p>
          
          <div className="prose prose-stone max-w-none font-lato">
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">What to Look For</h2>
            <p className="mb-4 text-stone-600">Consider material (silicone, wood, stainless steel), heat resistance, and whether pieces are dishwasher safe. A good set should include: spatula, ladle, slotted spoon, whisk, and tongs.</p>
            
            <h2 className="font-playfair text-2xl text-stone-800 mt-8 mb-4">Our Top Pick: Fullstar Kitchen Utensil Set</h2>
            <p className="mb-4 text-stone-600">Fullstar offers the best value with 20 pieces including a rotating holder, all at an affordable price point.</p>
          </div>
        </article>

        <section className="space-y-8 mt-12">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 h-48 relative flex-shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-stone-900">{product.name}</h2>
                    <span className="text-2xl font-bold text-emerald-600">{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-amber-500">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </span>
                    <span className="text-stone-600">{product.rating}/5</span>
                  </div>
                  <ul className="mb-4 space-y-1">
                    {product.pros.map((pro, i) => (
                      <li key={i} className="text-stone-600 text-sm font-lato">✓ {pro}</li>
                    ))}
                  </ul>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-emerald-600 text-white px-6 py-2 rounded-lg font-lato font-medium hover:bg-emerald-700 transition"
                  >
                    Check Price on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
