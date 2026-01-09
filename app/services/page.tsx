"use client";

import { ServiceCard } from "@/components/service-card";
import { DisclaimerStrip } from "@/components/disclaimer-strip";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import Image from "next/image";

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
      <PageHeader
        title="Our Research Services"
        description="Professionally managed research services designed to meet diverse trading goals. Choose the plan that fits your risk profile."
      />

      {/* Introduction with Image */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/2 space-y-6">
            <FadeIn>
              <h2 className="text-3xl font-bold text-foreground">
                Strategies for Every Trader
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Whether you are an aggressive intraday trader or a conservative
                long-term investor, we have a research product tailored for you.
                Our strategies are back-tested and deployed with strict risk
                management protocols.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 rounded-lg font-medium text-sm">
                  SEBI Regulated
                </div>
                <div className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg font-medium text-sm">
                  Verified Performance
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="lg:w-1/2">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-x-1 hover:skew-x-0 transition-transform duration-500 border-4 border-white dark:border-gray-800 h-[250px] md:h-[400px] w-full">
                <Image
                  src="/images/services-hero.png"
                  alt="Trading Services Growth"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </FadeIn>
          </div>
        </div>

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
