import { HeroSection } from "../components/hero-section";
import { TrustStrip } from "../components/trust-strip";
import { TelegramPromo } from "@/components/telegram-promo";
import { AboutSection } from "../components/about-section";
import { CoursesPreview } from "../components/courses-preview";
import { ServicesSection } from "../components/services-section";
import { WhyChooseUs } from "../components/why-choose-us";
import { ProcessSection } from "../components/process-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { FAQSection } from "../components/faq-section";
import { CTASection } from "../components/cta-section";
import { Footer } from "../components/footer";
import { FloatingIcons } from "@/components/floating-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingIcons />
      <HeroSection />
      <TrustStrip />
      <TelegramPromo />
      <AboutSection />
      <CoursesPreview />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
