"use client";

import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { FloatingIcons } from "@/components/floating-icons";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingIcons />

      {/* Enhanced Hero Section */}
      <div className="relative bg-primary py-24 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90" />
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 text-center relative z-20">
          <FadeIn>
            <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
              About Us
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
              Committed to ethical research, data-driven insights, and
              empowering traders with the institutional edge.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-12">
            <section>
              <FadeIn>
                <h2 className="text-3xl font-bold mb-6 text-primary dark:text-blue-400 flex items-center gap-3">
                  <span className="w-2 h-8 bg-cta rounded-full" />
                  Who We Are
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mb-6">
                  We are a{" "}
                  <strong className="text-foreground">
                    SEBI Registered Research Analyst firm
                  </strong>{" "}
                  (Registration No. INZ000000000) based in the financial hub of
                  Mumbai.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  With over a decade of experience, we specialize in separating
                  signal from noise. Our team comprises eager market
                  enthusiasts, certified technical analysts, and risk management
                  experts who believe in the power of{" "}
                  <span className="text-primary dark:text-blue-400 font-semibold">
                    discipline
                  </span>{" "}
                  and{" "}
                  <span className="text-primary dark:text-blue-400 font-semibold">
                    process
                  </span>{" "}
                  over random speculation.
                </p>
              </FadeIn>
            </section>

            <div className="grid sm:grid-cols-2 gap-8">
              <section>
                <FadeIn delay={0.1}>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To democratize access to institutional-grade research. We
                    aim to provide clear, compliant, and objective analysis that
                    helps retail traders make informed decisions.
                  </p>
                </FadeIn>
              </section>
              <section>
                <FadeIn delay={0.2}>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    To be the most trusted Research Analyst firm in India, known
                    for integrity, accuracy, and an unwavering commitment to
                    risk management.
                  </p>
                </FadeIn>
              </section>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 w-full">
            <FadeIn direction="left" className="sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                <Image
                  src="/images/about-team.png"
                  alt="Our Research Team"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <p className="text-white font-medium italic border-l-4 border-cta pl-4">
                    "Real research. Real results."
                  </p>
                </div>
              </div>

              {/* Decorative Elements around image */}
              <div className="absolute -z-10 top-10 -right-10 w-24 h-24 bg-cta/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </FadeIn>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
