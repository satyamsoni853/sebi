"use client";

import { Target, Clock, Users, Award } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

const features = [
  {
    icon: Target,
    title: "Proven Accuracy",
    description:
      "Our research is backed by rigorous backtesting and real-time market validation.",
  },
  {
    icon: Clock,
    title: "Timely Updates",
    description:
      "Get real-time alerts via Telegram, SMS, and our mobile app to never miss a move.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a vibrant community of traders to discuss ideas and grow together.",
  },
  {
    icon: Award,
    title: "SEBI Compliant",
    description:
      "Peace of mind knowing you are following advice from a registered professional.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background border-t border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            In a market full of noise, we provide clarity. Here is why thousands
            of traders trust our analysis.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn
              key={index}
              delay={index * 0.1}
              className="text-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <div className="w-16 h-16 mx-auto bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <feature.icon className="w-8 h-8 text-primary dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
