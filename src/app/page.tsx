import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";

import { AboutSection } from "@/components/sections/AboutSection";
import { LiveEventsSection } from "@/components/sections/LiveEventsSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { CTABanner } from "@/components/sections/CTABanner";
import { HowToVote } from "@/components/sections/HowToVote";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <LiveEventsSection />
      <ValueProposition />
      <CTABanner />
      <HowToVote />
      <PortfolioSection />
      <ContactSection />
      
      <Footer />
      <Toaster />
    </main>
  );
}
