"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  Flower2,
} from "lucide-react";

const serviceOptions = [
  "Wedding Flowers",
  "Event Arrangements",
  "Daily Bouquet Order",
  "Sympathy Flowers",
  "Subscription Plan",
  "Custom Consultation",
  "Not sure yet -- help me choose!",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-petal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-petal-500 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal-900 mt-3 mb-5">
            Let Us Create Something Beautiful
          </h2>
          <p className="text-charcoal-500 text-lg leading-relaxed">
            Tell us about your occasion and we will craft the perfect floral
            arrangement. Free consultations for weddings and large events.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-petal-100 p-12 text-center">
                <div className="w-16 h-16 bg-petal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-petal-500" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-charcoal-900 mb-3">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-charcoal-500 max-w-md mx-auto">
                  We have received your inquiry and will be in touch within 24
                  hours to discuss your floral needs. We look forward to
                  creating something special for you.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-petal-100 p-8"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="firstName"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <User className="w-4 h-4 text-petal-400" />
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all"
                      placeholder="Your first name"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="lastName"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <User className="w-4 h-4 text-petal-400" />
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all"
                      placeholder="Your last name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <Mail className="w-4 h-4 text-petal-400" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <Phone className="w-4 h-4 text-petal-400" />
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Service Interest */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="serviceInterest"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <Flower2 className="w-4 h-4 text-petal-400" />
                      Service Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      required
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="flex items-center gap-2 text-sm font-medium text-charcoal-800 mb-2"
                    >
                      <MessageSquare className="w-4 h-4 text-petal-400" />
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-cream-50 border border-petal-100 rounded-xl text-charcoal-900 placeholder:text-charcoal-300 focus:outline-none focus:ring-2 focus:ring-petal-400 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your event date, color preferences, budget, or any special requests..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-petal-500 text-white font-semibold rounded-full hover:bg-petal-600 transition-all shadow-lg shadow-petal-500/20 hover:shadow-xl hover:shadow-petal-500/30"
                >
                  <Send className="w-4 h-4" />
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Location */}
            <div className="bg-white rounded-2xl border border-petal-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-petal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-petal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-1">Visit Our Studio</h4>
                  <p className="text-charcoal-500 text-sm leading-relaxed">
                    247 Bloom Street
                    <br />
                    Charleston, SC 29401
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl border border-petal-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-petal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-petal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-1">Call Us</h4>
                  <p className="text-charcoal-500 text-sm">(843) 555-BLOOM (2566)</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl border border-petal-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-petal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-petal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-1">Email Us</h4>
                  <p className="text-charcoal-500 text-sm">hello@petalbloom-florist.com</p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-petal-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-petal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-petal-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-800 mb-1">Shop Hours</h4>
                  <div className="text-charcoal-500 text-sm space-y-1">
                    <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: 10:00 AM - 3:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
