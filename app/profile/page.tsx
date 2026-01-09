"use client";

import { User, CreditCard, Settings, LogOut, Bell, Shield } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="text-3xl font-bold text-foreground mb-8">
              My Dashboard
            </h1>
          </FadeIn>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <FadeIn delay={0.1} className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden sticky top-24">
                <div className="p-6 border-b border-gray-100 dark:border-gray-800 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center text-primary font-bold text-2xl">
                    JD
                  </div>
                  <h2 className="font-bold text-foreground">John Doe</h2>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
                <nav className="p-4 space-y-1">
                  <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium bg-primary/5 text-primary rounded-lg">
                    <User className="w-4 h-4" /> Profile Overview
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <CreditCard className="w-4 h-4" /> Subscription & Billing
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Bell className="w-4 h-4" /> Notifications
                  </button>
                  <button className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Settings className="w-4 h-4" /> Account Settings
                  </button>
                </nav>
                <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                  <Link
                    href="/"
                    className="flex items-center gap-3 w-full px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Main Content Area */}
            <div className="lg:col-span-3 space-y-6">
              {/* Active Subscription Card */}
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <p className="text-blue-100 text-sm font-medium mb-1">
                        Current Plan
                      </p>
                      <h3 className="text-3xl font-bold mb-4">
                        Pro Stock Futures
                      </h3>
                      <p className="text-blue-100 text-sm opacity-80">
                        Valid until: Dec 31, 2024
                      </p>
                    </div>
                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/30">
                      Active
                    </span>
                  </div>
                  <div className="relative z-10 mt-8 flex gap-4">
                    <button className="bg-white text-primary px-6 py-2 rounded-lg font-bold text-sm hover:bg-blue-50 transition-colors">
                      Upgrade Plan
                    </button>
                    <button className="bg-transparent border border-white/30 text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-white/10 transition-colors">
                      View Invoice
                    </button>
                  </div>
                  {/* Background decoration */}
                  <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>
              </FadeIn>

              {/* Recent Activity / Stats Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <FadeIn delay={0.3}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-lg">
                        <Shield className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-foreground">
                        Risk Profile
                      </h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Risk Assessment</span>
                        <span className="font-medium text-foreground">
                          Moderate
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className="bg-green-500 w-3/5 h-2 rounded-full" />
                      </div>
                      <p className="text-xs text-gray-400">
                        Based on your last assessment. Update your profile to
                        get personalized suggestions.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                    <h3 className="font-bold text-foreground mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link
                          href="/courses"
                          className="flex items-center justify-between text-sm p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <span className="text-gray-600 dark:text-gray-300">
                            My Courses
                          </span>
                          <span className="text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/disclosures"
                          className="flex items-center justify-between text-sm p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 transition-colors group"
                        >
                          <span className="text-gray-600 dark:text-gray-300">
                            Regulatory Disclosures
                          </span>
                          <span className="text-primary text-xs font-bold group-hover:translate-x-1 transition-transform">
                            →
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
