"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Lock, User, UserPlus } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { useAuth } from "@/contexts/auth-context";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { register } = useAuth(); // Destructure register
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    try {
      await register({ name, email, password });
      router.push("/");
    } catch (error: any) {
      alert(error.message || "Registration failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left Column - Branding (Hidden on mobile) */}
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] mix-blend-overlay" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[100px] mix-blend-overlay" />
        </div>
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors gap-2 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <div className="relative z-10 text-white space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            Start Your
            <br />
            Journey.
          </h1>
          <p className="text-xl text-white/70">
            Join a community of disciplined traders. Get access to verified
            research and educational content.
          </p>
        </div>
        <div className="relative z-10 text-xs text-white/40">
          © 2024 SEBI Research Analyst. All rights reserved.
        </div>
      </div>

      {/* Right Column - Form */}
      <div className="flex items-center justify-center p-8 lg:p-12 relative">
        <div className="w-full max-w-md space-y-8">
          <FadeIn>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-foreground">
                Create Account
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Already a member?{" "}
                <Link
                  href="/login"
                  className="text-primary dark:text-blue-400 font-semibold hover:underline"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
                <p className="text-xs text-gray-400">
                  Must be at least 8 characters long.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 dark:border-gray-700 text-primary focus:ring-primary"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-transform active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/25"
              >
                <UserPlus className="w-5 h-5" /> Create Account
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
