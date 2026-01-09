"use client";

import { motion } from "framer-motion";

export function TradingGraph() {
  // Generate random data for the "candles" or "steps"
  const steps = Array.from({ length: 8 }, (_, i) => ({
    height: 40 + i * 25 + Math.random() * 20, // General upward trend
    delay: i * 0.2,
  }));

  return (
    <div className="relative w-full h-[400px] bg-white/5 dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/5 p-6 flex items-end justify-between overflow-hidden shadow-2xl">
      {/* Grid Lines */}
      <div className="absolute inset-0 z-0">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gray-200/10 dark:bg-gray-700/20 top-1/4"
            style={{ top: `${i * 20}%` }}
          />
        ))}
      </div>

      {/* Rising Steps / Candles */}
      <div className="flex items-end justify-between w-full h-full gap-2 relative z-10 px-4 pb-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: `${step.height}px`, opacity: 1 }}
            transition={{
              duration: 1,
              delay: step.delay,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="w-full relative group"
          >
            {/* The Bar */}
            <div className="w-full h-full bg-linear-to-t from-green-500/80 to-green-300 rounded-t-lg shadow-[0_0_15px_rgba(34,197,94,0.3)] group-hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition-all duration-300" />

            {/* Top Indicator Line (Wick) - Optional stylized look */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: step.delay + 0.5, duration: 0.5 }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-green-300/50"
            />
          </motion.div>
        ))}
      </div>

      {/* Floating 'Success' Badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="absolute top-10 right-10 bg-white dark:bg-gray-800 p-3 rounded-xl shadow-xl border border-green-100 dark:border-green-900/30 flex items-center gap-3 z-20"
      >
        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
          </svg>
        </div>
        <div>
          <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">
            Profit Growth
          </div>
          <div className="text-lg font-black text-foreground">+127%</div>
        </div>
      </motion.div>
    </div>
  );
}
