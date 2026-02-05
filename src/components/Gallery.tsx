import { Eye, Palette, Sparkles, Leaf, Heart, Crown } from "lucide-react";

const galleryItems = [
  {
    icon: Crown,
    title: "Bridal Elegance",
    description: "Cascading white roses and peonies with eucalyptus accents for a timeless bridal bouquet.",
    tags: ["Wedding", "Premium"],
    gradient: "from-petal-200 to-petal-100",
    accent: "text-petal-600",
  },
  {
    icon: Sparkles,
    title: "Garden Party",
    description: "Vibrant mixed blooms with dahlias, ranunculus, and wildflowers for outdoor celebrations.",
    tags: ["Events", "Seasonal"],
    gradient: "from-leaf-100 to-cream-200",
    accent: "text-leaf-600",
  },
  {
    icon: Palette,
    title: "Modern Minimalist",
    description: "Sleek calla lilies and orchids in contemporary vessels for a sophisticated statement.",
    tags: ["Corporate", "Modern"],
    gradient: "from-charcoal-50 to-cream-100",
    accent: "text-charcoal-600",
  },
  {
    icon: Heart,
    title: "Romantic Blush",
    description: "Soft pink peonies, garden roses, and lisianthus in a lush, romantic arrangement.",
    tags: ["Anniversary", "Gift"],
    gradient: "from-petal-100 to-cream-100",
    accent: "text-petal-500",
  },
  {
    icon: Leaf,
    title: "Botanical Greens",
    description: "Lush ferns, monstera, and textured greenery with subtle white bloom accents.",
    tags: ["Decor", "Natural"],
    gradient: "from-leaf-50 to-leaf-100",
    accent: "text-leaf-700",
  },
  {
    icon: Eye,
    title: "Sunset Warmth",
    description: "Rich amber roses, burgundy dahlias, and burnt orange chrysanthemums for autumn vibes.",
    tags: ["Seasonal", "Bold"],
    gradient: "from-cream-300 to-petal-100",
    accent: "text-petal-700",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-petal-500 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3 mb-5">
            A Glimpse of Our Work
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Every arrangement tells a story. Explore some of our favorite
            designs crafted for weddings, events, and special moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl overflow-hidden border border-petal-100/50 hover:border-petal-200 hover:shadow-lg hover:shadow-petal-100/30 transition-all bg-white"
            >
              {/* Image Placeholder with Gradient */}
              <div
                className={`h-56 bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}
              >
                <item.icon className={`w-16 h-16 ${item.accent} opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all`} />
                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 bg-white/80 backdrop-blur-sm rounded-full text-charcoal-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-charcoal-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
