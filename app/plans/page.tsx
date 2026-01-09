"use client";

import { PricingCard } from "@/components/pricing-card";
import { DisclaimerStrip } from "@/components/disclaimer-strip";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";
import { PageHeader } from "@/components/page-header";

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
      <PageHeader
        title="Subscription Plans"
        description="Transparent pricing for professional research. Choose a plan that suits your trading needs."
      />

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
