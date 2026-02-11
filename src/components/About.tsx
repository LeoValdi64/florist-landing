import { Flower2, Award, Truck, Leaf, Clock, Users } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Award-Winning Design",
    description: "Recognized by the American Institute of Floral Designers for excellence in creative arrangements.",
  },
  {
    icon: Leaf,
    title: "Sustainably Sourced",
    description: "We partner with local growers and eco-conscious farms to bring you the freshest, responsibly sourced blooms.",
  },
  {
    icon: Truck,
    title: "Same-Day Delivery",
    description: "Order by noon for guaranteed same-day delivery. We hand-deliver every arrangement with care.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "Over a decade and a half of crafting unforgettable floral experiences for thousands of clients.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of certified floral designers brings passion, artistry, and attention to detail to every creation.",
  },
  {
    icon: Flower2,
    title: "Custom Consultations",
    description: "Free design consultations for weddings and large events. We work with you to bring your floral vision to life.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Story */}
          <div>
            <span className="text-petal-500 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3 mb-6">
              Rooted in Passion, Blooming with Purpose
            </h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Founded in 2010, PetalBloom Florist began as a small studio with
                a simple mission: to bring the beauty of nature into everyday
                life through thoughtful floral design.
              </p>
              <p>
                What started as a passion project by our founder, Elena Hargrove,
                has blossomed into a full-service floral studio trusted by
                hundreds of families, businesses, and couples. We believe every
                arrangement should tell a story and evoke genuine emotion.
              </p>
              <p>
                Today, our team of talented designers sources the finest seasonal
                blooms from local farms and trusted growers, ensuring every petal
                that leaves our studio is at its freshest and most vibrant.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-8 pt-8 border-t border-petal-100">
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-petal-500">500+</div>
                <div className="text-xs text-charcoal-500 mt-1">Weddings Styled</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-leaf-600">100%</div>
                <div className="text-xs text-charcoal-500 mt-1">Fresh Guarantee</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal-800">5k+</div>
                <div className="text-xs text-charcoal-500 mt-1">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right: Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-petal-100/50 hover:border-petal-200 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-petal-50 rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5 text-petal-500" />
                </div>
                <h4 className="font-semibold text-charcoal-800 text-sm mb-1.5">
                  {item.title}
                </h4>
                <p className="text-charcoal-500 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
