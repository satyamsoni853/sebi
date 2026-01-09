"use client";

import { FadeIn } from "@/components/fade-in";

export function ProcessSection() {
  const steps = [
    { number: "01", title: "Learn", desc: "Build a strong foundation." },
    { number: "02", title: "Analyze", desc: "Understand market trends." },
    { number: "03", title: "Execute", desc: "Trade with discipline." },
    { number: "04", title: "Review", desc: "Journal and improve." },
  ];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Our Proven Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The roadmap to consistent trading success.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-background p-8 rounded-xl border border-gray-200 dark:border-gray-800 text-center shadow-lg h-full">
                  <span className="text-5xl font-black text-gray-100 dark:text-gray-800 mb-4 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-gray-500">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
