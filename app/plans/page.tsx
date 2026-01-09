"use client";

import { PricingCard } from "@/components/pricing-card";
import { DisclaimerStrip } from "@/components/disclaimer-strip";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";

const plans = [
  {
    planName: "Basic - Index Options",
    duration: "Monthly",
    price: "4,999",
    servicesIncluded: [
      "Nifty & Bank Nifty Options",
      "Intraday Levels",
      "Market Overview",
    ],
    deliveryMode: "Telegram / SMS",
    riskDisclaimer: "High risk. Options buying involves premium erosion risk.",
  },
  {
    planName: "Pro - Stock Futures",
    duration: "Monthly",
    price: "7,999",
    servicesIncluded: [
      "Stock Futures Calls",
      "Technical Analysis",
      "Trailing Stop Loss Updates",
    ],
    deliveryMode: "Telegram / SMS",
    riskDisclaimer:
      "High leverage. Capital protection is priority but not guaranteed.",
  },
  {
    planName: "Equity Swing",
    duration: "Quarterly",
    price: "11,999",
    servicesIncluded: [
      "Swing Trading Calls",
      "Short Term Delivery",
      "Portfolio Health Check",
    ],
    deliveryMode: "App / Email",
    riskDisclaimer: "Subject to short term market volatility.",
  },
  {
    planName: "Comprehensive",
    duration: "Yearly",
    price: "24,999",
    servicesIncluded: [
      "All Segments Access",
      "Webinar Access",
      "Dedicated Support",
    ],
    deliveryMode: "All Channels",
    riskDisclaimer: "Standard market risks apply. No guaranteed returns.",
  },
];

export default function PlansPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingIcons />
      <div className="bg-primary text-secondary py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Subscription Plans</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Transparent pricing for professional research. Choose a plan that
              suits your trading needs.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <PricingCard {...plan} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 text-center relative z-10">
        <FadeIn delay={0.2}>
          <p className="text-sm text-gray-500">
            <strong>Refund Policy:</strong> Fees once paid are non-refundable.
            Please read the terms and conditions carefully.
          </p>
        </FadeIn>
      </div>

      <DisclaimerStrip />
    </main>
  );
}
