"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/plans", label: "Plans" },
    { href: "/methodology", label: "Methodology" },
    { href: "/charter", label: "Investor Charter" },
    { href: "/disclosures", label: "Disclosures" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 mx-auto max-w-7xl">
      <div className="backdrop-blur-xl bg-white/70 dark:bg-gray-950/70 border border-white/20 dark:border-gray-800/50 rounded-2xl shadow-lg shadow-black/5 supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 transition-all duration-300">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 font-black text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-blue-200"
            >
              SEBI
            </Link>
            <span className="hidden lg:inline-flex items-center text-[10px] font-mono font-medium text-primary/60 dark:text-gray-400 bg-primary/5 dark:bg-gray-800 px-2 py-1 rounded-full border border-primary/10 dark:border-gray-700">
              REG: INZ000000000
            </span>
          </div>

          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary dark:hover:text-white ${
                    isActive
                      ? "text-primary dark:text-white"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-primary/10 dark:bg-white/10 rounded-lg -z-10"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/login"
                className="text-sm font-bold text-gray-700 dark:text-gray-300 hover:text-primary transition-colors px-3 py-2"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="relative text-sm font-bold bg-primary text-white px-5 py-2.5 rounded-xl overflow-hidden group hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden absolute top-full left-0 right-0 mt-4 mx-4 p-4 rounded-2xl bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-gray-200 dark:border-gray-800 shadow-xl flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                  pathname === link.href
                    ? "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
            <div className="flex flex-col gap-2">
              <Link
                href="/login"
                className="px-4 py-3 rounded-xl text-sm font-bold text-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/signup"
                className="px-4 py-3 rounded-xl text-sm font-bold text-center bg-primary text-white shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
