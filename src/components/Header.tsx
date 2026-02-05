"use client";

import { useState } from "react";
import { Menu, X, Flower2 } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-petal-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <Flower2 className="w-7 h-7 text-petal-500 transition-transform group-hover:rotate-12" />
            <span className="font-[family-name:var(--font-heading)] text-xl lg:text-2xl font-bold text-charcoal-800 tracking-tight">
              Petal<span className="text-petal-500">Bloom</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-600 hover:text-petal-600 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-petal-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-petal-500 text-white text-sm font-semibold rounded-full hover:bg-petal-600 transition-colors shadow-sm"
            >
              Order Flowers
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal-700 hover:text-petal-600"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-petal-100">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-charcoal-700 hover:text-petal-600 hover:bg-petal-50 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-3 px-5 py-3 bg-petal-500 text-white text-center font-semibold rounded-full hover:bg-petal-600 transition-colors"
              >
                Order Flowers
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
