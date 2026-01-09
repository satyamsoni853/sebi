"use client";

import { ServiceCard } from "@/components/service-card";
import { DisclaimerStrip } from "@/components/disclaimer-strip";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";
import { Footer } from "@/components/footer";

const services = [
  {
    segment: "Index",
    instrument: "Index Options",
    tradingStyle: "Intraday",
    deliveryMode: "Telegram / SMS",
    riskDisclaimer: "High risk. Options buying involves premium erosion risk.",
  },
  {
    segment: "Index",
    instrument: "Index Futures",
    tradingStyle: "Intraday / Swing",
    deliveryMode: "Telegram / SMS",
    riskDisclaimer: "High risk. Futures carry unlimited liability.",
  },
  {
    segment: "Equity",
    instrument: "Stock Options",
    tradingStyle: "Intraday",
    deliveryMode: "Telegram / SMS",
    riskDisclaimer: "Market risk involved. Illiquidity risk.",
  },
  {
    segment: "Equity",
    instrument: "Stock Futures",
    tradingStyle: "Swing",
    deliveryMode: "Telegram / SMS",
    riskDisclaimer: "High leverage product. Stop loss mandatory.",
  },
  {
    segment: "Equity",
    instrument: "Cash Intraday",
    tradingStyle: "Day Trading",
    deliveryMode: "App Notification",
    riskDisclaimer: "Volatility risk. Square off by end of day.",
  },
  {
    segment: "Equity",
    instrument: "Short Term Delivery",
    tradingStyle: "Positional (1-2 weeks)",
    deliveryMode: "Email / App",
    riskDisclaimer: "Subject to market trends and news events.",
  },
  {
    segment: "Equity",
    instrument: "Multibagger Gems",
    tradingStyle: "Long Term Investment",
    deliveryMode: "Research Report",
    riskDisclaimer: "Past performance does not guarantee future results.",
  },
  {
    segment: "Commodity",
    instrument: "Crude & Gold",
    tradingStyle: "Swing",
    deliveryMode: "SMS / App",
    riskDisclaimer: "Global market risk factors apply.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingIcons />
      <div className="bg-primary text-secondary py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Our Research Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Professionally managed research services designed to meet diverse
              trading goals. Choose the plan that fits your risk profile.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <ServiceCard {...service} />
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16 text-center relative z-10">
        <FadeIn>
          <p className="text-sm text-gray-500 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
            <strong>Note:</strong> We do not provide profit sharing services or
            guaranteed return plans. Please be aware of unauthorized entities
            claiming to be associated with us.
          </p>
        </FadeIn>
      </div>

      <DisclaimerStrip />
    </main>
  );
}
