import { ArrowDown, MapPin, Star, Flower } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-petal-50 via-cream-50 to-leaf-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-petal-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-leaf-100/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-petal-100/20 rounded-full blur-3xl" />
        {/* Subtle pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-petal-900" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-petal-200 mb-6 sm:mb-8">
          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-petal-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium text-charcoal-700">Handcrafted with Love</span>
          <span className="text-petal-300">|</span>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 fill-amber-500 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-charcoal-700">4.9</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-charcoal-900 leading-[1.1] tracking-tight mb-5 sm:mb-6">
          Beautiful Blooms
          <span className="block text-petal-500 italic">for Every Occasion</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-charcoal-600 leading-relaxed mb-8 sm:mb-10">
          From stunning wedding centerpieces to heartfelt sympathy tributes,
          PetalBloom Florist creates hand-arranged floral designs that bring
          beauty and emotion to life&apos;s most meaningful moments.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-petal-500 text-white font-semibold rounded-full hover:bg-petal-600 transition-all shadow-lg shadow-petal-500/20 hover:shadow-xl hover:shadow-petal-500/30 hover:-translate-y-0.5 text-center"
          >
            Order a Bouquet
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-white/80 text-charcoal-700 font-semibold rounded-full hover:bg-white transition-all border border-petal-200 hover:border-petal-300 hover:-translate-y-0.5 text-center"
          >
            Explore Our Services
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-md sm:max-w-lg mx-auto">
          <div>
            <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-800">15+</div>
            <div className="text-xs sm:text-sm text-charcoal-500 mt-1">Years of Artistry</div>
          </div>
          <div>
            <div className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal-800">5k+</div>
            <div className="text-xs sm:text-sm text-charcoal-500 mt-1">Bouquets Delivered</div>
          </div>
          <div>
            <div className="flex justify-center">
              <Flower className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-petal-500" />
            </div>
            <div className="text-xs sm:text-sm text-charcoal-500 mt-1">Farm Fresh Daily</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" aria-label="Scroll to services">
            <ArrowDown className="w-5 h-5 text-petal-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
