import { Footer } from "@/components/footer";
import { BarChart, Search, Activity, PieChart } from "lucide-react";

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-primary text-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Research Methodology</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our systematic approach to analyzing the markets.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <BarChart className="w-6 h-6" /> Technical Analysis
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We primarily use Technical Analysis to identify trends and
              potential trade setups. This involves studying price action, chart
              patterns, volume data, and various technical indicators (like RSI,
              MACD, Bollinger Bands).
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Trend Analysis (Support & Resistance)</li>
              <li>Momentum Indicators</li>
              <li>Volume Profile Analysis</li>
              <li>Multi-timeframe confirmation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <Search className="w-6 h-6" /> Fundamental Context
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              While our trading calls are technically driven, we always align
              them with the broader fundamental context. We keep a close watch
              on:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Macroeconomic data (Interest rates, GDP, Inflation)</li>
              <li>Corporate Earnings results</li>
              <li>Global market cues</li>
              <li>Sectoral rotation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <Activity className="w-6 h-6" /> Risk Management
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This is the cornerstone of our methodology. No trade idea is
              generated without a clearly defined risk-reward ratio.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Strict Stop Loss levels for every call</li>
              <li>Position sizing recommendations</li>
              <li>Trailing stop losses to protect profits</li>
              <li>
                Avoiding high-risk events (like earnings) for intraday trades
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary dark:text-blue-400 flex items-center gap-2">
              <PieChart className="w-6 h-6" /> Data Analytics
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We utilize proprietary data models to track FII/DII activity, Open
              Interest (OI) build-up in derivatives, and option chain analysis
              to gauge market sentiment.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
