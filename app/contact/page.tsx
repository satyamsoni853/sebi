"use client";

import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our support team for any queries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-foreground">
              Reach Out Directly
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-primary dark:text-blue-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Registered Office</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123, Financial District,
                    <br />
                    Mumbai, Maharashtra - 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-primary dark:text-blue-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    +91 98765 43210
                  </p>
                  <p className="text-xs text-gray-500">
                    (Mon-Fri, 9:00 AM - 6:00 PM)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-primary dark:text-blue-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@example.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    compliance@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Send a Message
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                    placeholder="+91 99999 99999"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="w-full py-3 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
