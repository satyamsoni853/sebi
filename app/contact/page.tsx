"use client";

import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/fade-in";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our support team for any queries. We are here to assist you."
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Details */}
          <div className="space-y-8">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Reach Out Directly
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-blue-400 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">
                      Registered Office
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      123, Financial District,
                      <br />
                      Mumbai, Maharashtra - 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-blue-400 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                      +91 98765 43210
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      (Mon-Fri, 9:00 AM - 6:00 PM)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800">
                  <div className="bg-primary/10 dark:bg-primary/20 p-3 rounded-lg text-primary dark:text-blue-400 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      support@example.com
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      compliance@example.com
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.2}>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-foreground">
                Send a Message
              </h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-bold text-gray-700 dark:text-gray-300"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <button className="w-full py-4 bg-primary text-secondary font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </main>
  );
}
