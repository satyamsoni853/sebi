"use client";

import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-block mb-4 px-3 py-1 border border-primary dark:border-blue-400 text-primary dark:text-blue-400 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/5 dark:bg-blue-900/10">
              SEBI Registered Research Analyst
            </div>
          </FadeIn>

          <div className="overflow-hidden mb-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-foreground leading-tight flex flex-wrap justify-center gap-x-3 gap-y-1">
              {["Master", "the", "Markets", "with"].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.15, // Stagger effect
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ y: 40, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6, // Delays until after "with" appears
                  ease: "easeOut",
                }}
                className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-200 inline-block"
              >
                Confidence
              </motion.span>
            </h1>
          </div>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Objective, data-driven, and risk-managed research for{" "}
              <span className="font-bold text-foreground">Stock Market</span>,
              F&O, and Equity traders. We filter the noise so you can focus on
              execution.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-secondary font-bold transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/20"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-3 rounded-lg border-2 border-primary dark:border-gray-600 text-primary dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-bold"
              >
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <img
          src="c:/Users/ss969/.gemini/antigravity/brain/74a30a21-eba0-421c-8853-6464af8a2e49/abstract_financial_hero_1767984834425.png"
          alt="Financial Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      {/* Decorative Gradient Blob (Subtler) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-0 animate-pulse" />
    </section>
  );
}
