import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";

interface ServiceCardProps {
  segment: string;
  instrument: string;
  tradingStyle: string;
  deliveryMode: string;
  riskDisclaimer?: string;
}

export function ServiceCard({
  segment,
  instrument,
  tradingStyle,
  deliveryMode,
  riskDisclaimer = "Standard market risks apply.",
}: ServiceCardProps) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded mb-2">
            {segment}
          </span>
          <h3 className="text-xl font-bold text-foreground">{instrument}</h3>
        </div>

        <div className="flex-grow space-y-4 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-gray-500 dark:text-gray-400">Style</span>
            <span className="font-medium">{tradingStyle}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-gray-500 dark:text-gray-400">Delivery</span>
            <span className="font-medium">{deliveryMode}</span>
          </div>

          <div className="flex gap-2 p-3 bg-red-50 dark:bg-red-900/10 rounded-lg text-xs text-red-600 dark:text-red-400 items-start">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p>{riskDisclaimer}</p>
          </div>
        </div>

        <div className="pt-6 mt-4 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/contact"
            className="flex items-center justify-center w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm font-medium"
          >
            Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
