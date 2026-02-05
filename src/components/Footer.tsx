import { Flower2, Heart, Instagram, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Wedding Flowers", href: "#services" },
    { label: "Event Arrangements", href: "#services" },
    { label: "Daily Bouquets", href: "#services" },
    { label: "Sympathy Flowers", href: "#services" },
    { label: "Subscriptions", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Portfolio", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  connect: [
    { label: "Contact Us", href: "#contact" },
    { label: "Gift Cards", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Delivery Info", href: "#" },
    { label: "Care Guide", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-5">
              <Flower2 className="w-6 h-6 text-petal-400" />
              <span className="font-[family-name:var(--font-heading)] text-xl font-bold text-white">
                Petal<span className="font-normal text-petal-400">Bloom</span>
              </span>
            </a>
            <p className="text-charcoal-400 text-sm leading-relaxed max-w-xs mb-6">
              Crafting beautiful floral arrangements for life&apos;s most
              meaningful moments since 2010. Fresh blooms, delivered with love.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center hover:bg-petal-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-charcoal-800 rounded-full flex items-center justify-center hover:bg-petal-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-400 hover:text-petal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-400 hover:text-petal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-charcoal-400 hover:text-petal-300 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-xs">
            2024 PetalBloom Florist. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-charcoal-500 text-xs">
            Made with <Heart className="w-3 h-3 text-petal-400" /> in Charleston, SC
          </p>
        </div>
      </div>
    </footer>
  );
}
