"use client";

import { Footer } from "@/components/footer";
import { BookOpen, Calendar, Clock, BarChart } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";

const courses = [
  {
    title: "Technical Analysis Masterclass",
    description:
      "A complete guide to reading charts, understanding price action, and using indicators effectively.",
    duration: "4 Weeks",
    sessions: "12 Live Sessions",
    level: "Beginner",
    price: "₹9,999",
    features: [
      "Candlestick Patterns",
      "Support & Resistance",
      "Moving Averages",
      "RSI & MACD",
      "Trendlines & Channels",
    ],
  },
  {
    title: "Advanced F&O Trading Strategies",
    description:
      "Learn professional options selling and hedging strategies used by institutional traders.",
    duration: "6 Weeks",
    sessions: "18 Live Sessions",
    level: "Advanced",
    price: "₹19,999",
    features: [
      "Option Greeks",
      "Delta Neutral Strategies",
      "Iron Condor & Butterfly",
      "Adjustments & Firefighting",
      "Expiry Day Trading",
    ],
  },
  {
    title: "Price Action & Psychology",
    description:
      "Master the mental game of trading and learn to trade naked charts without indicators.",
    duration: "3 Weeks",
    sessions: "8 Live Sessions",
    level: "Intermediate",
    price: "₹7,999",
    features: [
      "Supply & Demand Zones",
      "Breakout vs Fakeout",
      "Risk Management Rules",
      "Trading Journaling",
      "Emoional Control",
    ],
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingIcons />
      <div className="bg-primary text-secondary py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">Trading Courses</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Upgrade your skills with our structured educational programs.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col hover:shadow-xl transition-shadow h-full">
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 text-xs font-bold px-2 py-1 rounded">
                      {course.level}
                    </span>
                    <span className="text-xl font-bold text-foreground">
                      {course.price}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{course.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                    {course.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-2" /> {course.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" /> {course.sessions}
                    </div>
                  </div>

                  <hr className="border-gray-100 dark:border-gray-800 mb-6" />

                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-cta rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800">
                  <button className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-colors">
                    Enroll Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
