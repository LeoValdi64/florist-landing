import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Wedding Client",
    rating: 5,
    text: "PetalBloom created the most breathtaking wedding flowers I could have imagined. The bridal bouquet was absolute perfection, and the reception centerpieces had every guest in awe. They truly understood my vision.",
    detail: "June 2024 Wedding",
  },
  {
    name: "David & Claire R.",
    location: "Anniversary Order",
    rating: 5,
    text: "We have been ordering from PetalBloom for three years now. Every arrangement arrives fresh, beautifully designed, and always exceeds expectations. Their monthly subscription has transformed our home.",
    detail: "Loyal customers since 2022",
  },
  {
    name: "Jennifer L.",
    location: "Corporate Client",
    rating: 5,
    text: "Our office lobby has never looked better. PetalBloom delivers stunning weekly arrangements that impress our clients and brighten the entire workspace. Their reliability and creativity are unmatched.",
    detail: "Weekly corporate arrangements",
  },
  {
    name: "Michael T.",
    location: "Event Client",
    rating: 5,
    text: "The floral designs for our charity gala were spectacular. PetalBloom transformed the venue into something out of a magazine. Their team was professional, punctual, and incredibly talented.",
    detail: "Annual Charity Gala",
  },
  {
    name: "Amanda K.",
    location: "Sympathy Order",
    rating: 5,
    text: "During a difficult time, PetalBloom handled everything with such care and sensitivity. The memorial arrangement was dignified and beautiful. They went above and beyond to ensure everything was perfect.",
    detail: "Memorial tribute",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-petal-500 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3 mb-5">
            What Our Clients Say
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            From weddings to everyday deliveries, hear how PetalBloom has made
            a difference for our valued clients.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-cream-50 rounded-2xl p-7 border border-petal-100/50 hover:border-petal-200 transition-all ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-petal-200 mb-4" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-petal-100">
                <div className="w-10 h-10 bg-gradient-to-br from-petal-300 to-petal-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-charcoal-800 text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-charcoal-400 text-xs">
                    {testimonial.location} &middot; {testimonial.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-petal-50 rounded-2xl border border-petal-100">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-amber-500 fill-amber-500"
                />
              ))}
            </div>
            <div className="text-left">
              <p className="font-bold text-charcoal-900 text-sm">
                4.9 out of 5 stars
              </p>
              <p className="text-charcoal-400 text-xs">
                Based on 300+ reviews from happy clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
