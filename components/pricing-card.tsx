import Link from "next/link";
import { Check } from "lucide-react";

interface PricingCardProps {
  planName: string;
  duration: string;
  price: string;
  servicesIncluded: string[];
  deliveryMode: string;
  riskDisclaimer?: string;
}

export function PricingCard({
  planName,
  duration,
  price,
  servicesIncluded,
  deliveryMode,
  riskDisclaimer = "Investment in securities market are subject to market risks.",
}: PricingCardProps) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground">{planName}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">{duration}</p>
        </div>

        <div className="mb-6">
          <span className="text-3xl font-bold text-primary dark:text-white">
            ₹{price}
          </span>
          <span className="text-gray-500 text-sm"> / {duration}</span>
        </div>

        <div className="space-y-4 flex-grow mb-6">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Included Services:
          </div>
          <ul className="space-y-2">
            {servicesIncluded.map((service, index) => (
              <li
                key={index}
                className="flex items-start text-sm text-gray-600 dark:text-gray-400"
              >
                <Check className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                {service}
              </li>
            ))}
          </ul>
          <div className="pt-2 text-sm">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Delivery:{" "}
            </span>
            <span className="text-gray-600 dark:text-gray-400">
              {deliveryMode}
            </span>
          </div>
        </div>

        <div className="p-3 bg-red-50 dark:bg-red-900/10 rounded-lg text-xs text-red-600 dark:text-red-400 mb-6">
          <p>{riskDisclaimer}</p>
        </div>

        <Link
          href={`/payment?plan=${encodeURIComponent(
            planName
          )}&price=${encodeURIComponent(price)}`}
          className="flex items-center justify-center w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm font-medium"
        >
          Select Plan
        </Link>
      </div>
    </div>
  );
}
