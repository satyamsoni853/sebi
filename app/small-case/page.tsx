"use client";

import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/fade-in";
import { Zap, Leaf, Monitor, ShoppingBag, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function SmallCasePage() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeader
        title="Small Case Collections"
        description="Theme-based investment baskets managed by experts. Invest in ideas, not just stocks."
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Green Energy Revolution",
              desc: "Companies leading the renewable energy transition in India.",
              cagr: "24.5%",
              risk: "High",
              icon: Leaf,
              color: "text-green-500",
              bg: "bg-green-500/10",
            },
            {
              title: "Digital India Tractor",
              desc: "IT Services and platform companies benefiting from digitization.",
              cagr: "18.2%",
              risk: "Medium",
              icon: Monitor,
              color: "text-blue-500",
              bg: "bg-blue-500/10",
            },
            {
              title: "Rising Rural Demand",
              desc: "FMCG and Auto stocks focusing on the rural consumption story.",
              cagr: "15.8%",
              risk: "Low",
              icon: ShoppingBag,
              color: "text-orange-500",
              bg: "bg-orange-500/10",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-8 hover:border-primary/50 transition-colors h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color}`}
                  >
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                    {item.risk} Risk
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-1">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800 mt-auto">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase">
                      3Y CAGR
                    </p>
                    <p className={`text-xl font-bold ${item.color}`}>
                      {item.cagr}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 mx-auto mb-6 text-yellow-300 fill-current" />
            <h2 className="text-3xl font-bold mb-6">
              Why Invest via Small Case?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Simple, transparent, and low-cost. You hold the shares in your own
              Demat account. Rebalance with a single click.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              View All Small Cases
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
