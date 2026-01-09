import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary dark:text-white"
          >
            SEBI
          </Link>
          <span className="hidden md:inline-block text-xs font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-0.5 rounded">
            REG: INZ000000000
          </span>
        </div>

        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-primary text-foreground"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Services
          </Link>
          <Link
            href="/plans"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Plans
          </Link>
          <Link
            href="/methodology"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Research Methodology
          </Link>
          <Link
            href="/charter"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Investor Charter
          </Link>
          <Link
            href="/disclosures"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Disclosures
          </Link>
          <Link
            href="/faqs"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            FAQs
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-primary text-gray-600 dark:text-gray-400"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden sm:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="text-sm font-bold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
