"use client";

import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingIcons />
      <div className="bg-primary text-secondary py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Committed to ethical research and empowering traders.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl space-y-12 relative z-10">
        <section>
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400">
              Who We Are
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We are a SEBI Registered Research Analyst firm (Registration No.
              INZ000000000) based in Mumbai. With over a decade of experience in
              the Indian financial markets, we specialize in providing
              data-driven, actionable research for potential trading
              opportunities in Stocks and Indices.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our team comprises eager market enthusiasts, certified technical
              analysts, and risk management experts who believe in the power of
              discipline and process over random speculation.
            </p>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.1}>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400">
              Our Mission
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To democratize access to high-quality, institutional-grade
              research for retail traders. We aim to reduce the noise in the
              market and provide clear, compliant, and objective analysis that
              helps our clients make informed decisions.
            </p>
          </FadeIn>
        </section>

        <section>
          <FadeIn delay={0.2}>
            <h2 className="text-2xl font-bold mb-4 text-primary dark:text-blue-400">
              Our Vision
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be the most trusted Research Analyst firm in India, known for
              our integrity, accuracy, and unwavering commitment to client
              education and risk management.
            </p>
          </FadeIn>
        </section>
      </div>
      <Footer />
    </main>
  );
}
