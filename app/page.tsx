import { TrustStrip } from "../components/trust-strip";
import { TelegramPromo } from "@/components/telegram-promo";
import { AboutSection } from "../components/about-section";
import { CoursesPreview } from "../components/courses-preview";
import { VideoEducationSection } from "@/components/video-education-section";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessSection } from "../components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { FloatingIcons } from "@/components/floating-icons";
import { WorkshopsSection } from "@/components/workshops-section";
import { FadeIn } from "@/components/fade-in";
import { Video, Calendar, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingIcons />
      <HeroSection />
      <TrustStrip />
      <TelegramPromo />
      <AboutSection />
      <CoursesPreview />
      <VideoEducationSection />
      <ServicesSection />

      <WorkshopsSection />

      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
