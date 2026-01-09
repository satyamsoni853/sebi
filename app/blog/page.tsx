"use client";

import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        title="Market Insights"
        description="Deep dives into market trends, technical analysis case studies, and trading psychology."
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Nifty 50: Is the Bull Run Over?",
              desc: "Analyzing the latest correction using Elliott Wave theory and FII data.",
              tag: "Market Outlook",
              date: "Oct 24, 2024",
            },
            {
              title: "Psychology of Stop Losses",
              desc: "Why you struggle to cut losses and how to fix it mentally.",
              tag: "Education",
              date: "Oct 20, 2024",
            },
            {
              title: "Sector Rotation: Banking to IT",
              desc: "Capital flows are shifting. Here are the top stocks to watch in the IT sector.",
              tag: "Stock Analysis",
              date: "Oct 15, 2024",
            },
          ].map((post, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <article className="flex flex-col bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-lg transition-shadow h-full cursor-pointer">
                <div className="h-48 bg-gray-200 dark:bg-gray-800 w-full" />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-xs font-bold uppercase tracking-wider">
                    <span className="text-primary">{post.tag}</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 mb-6 flex-1 text-sm leading-relaxed">
                    {post.desc}
                  </p>
                  <button className="text-sm font-bold text-foreground hover:underline self-start">
                    Read Article →
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
