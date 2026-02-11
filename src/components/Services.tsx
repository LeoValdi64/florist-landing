import { Heart, PartyPopper, Flower2, CloudRain } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Flowers",
    description:
      "From bridal bouquets to ceremony arches and reception centerpieces, we design bespoke wedding florals that bring your dream day to life with elegance and style.",
    features: ["Bridal Bouquets", "Ceremony Decor", "Reception Centerpieces", "Boutonnieres & Corsages"],
    color: "bg-petal-100 text-petal-600",
  },
  {
    icon: PartyPopper,
    title: "Event Arrangements",
    description:
      "Make any event unforgettable with custom floral designs. Galas, corporate events, birthdays, and anniversaries — we create arrangements that set the perfect tone.",
    features: ["Corporate Events", "Birthday Parties", "Anniversary Celebrations", "Gala Centerpieces"],
    color: "bg-leaf-50 text-leaf-600",
  },
  {
    icon: Flower2,
    title: "Daily Bouquets",
    description:
      "Brighten any day with our hand-picked seasonal bouquets. Perfect for gifts, home decor, or simply treating yourself to fresh, vibrant blooms.",
    features: ["Seasonal Selections", "Same-Day Delivery", "Subscription Plans", "Custom Arrangements"],
    color: "bg-cream-200 text-charcoal-600",
  },
  {
    icon: CloudRain,
    title: "Sympathy Flowers",
    description:
      "Express heartfelt condolences with graceful sympathy arrangements. We create thoughtful tributes that honor loved ones with dignity and compassion.",
    features: ["Funeral Sprays", "Standing Wreaths", "Casket Arrangements", "Memorial Tributes"],
    color: "bg-petal-50 text-petal-400",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-petal-500 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3 mb-5">
            Floral Artistry for Every Moment
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Whether it is a grand celebration or a quiet gesture, our expert
            florists craft arrangements that speak from the heart.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-cream-50 rounded-2xl p-5 sm:p-8 border border-petal-100/50 hover:border-petal-200 hover:shadow-lg hover:shadow-petal-100/50 transition-all"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-charcoal-800 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-charcoal-500 text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs font-medium px-3 py-1.5 bg-white border border-petal-100 rounded-full text-charcoal-600"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
