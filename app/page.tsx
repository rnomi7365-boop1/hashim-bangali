import React from 'react';
import TopContactBar from '@/components/TopContactBar';
import ServicesMarquee from '@/components/ServicesMarquee';
import MainHeader from '@/components/MainHeader';
import HeroSlider from '@/components/HeroSlider';
import IntroSection from '@/components/IntroSection';
import ServicesSection from '@/components/ServicesSection';
import SeoContentSection from '@/components/SeoContentSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import WhyUsAndFaq from '@/components/WhyUsAndFaq';
import DisclaimerSection from '@/components/DisclaimerSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingContactButtons from '@/components/FloatingContactButtons';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#08080a] text-zinc-100 overflow-x-hidden">
      {/* 1. Top Contact Bar */}
      <TopContactBar />

      {/* 2. Moving Services Marquee */}
      <ServicesMarquee />

      {/* 3. Main Navigation Header */}
      <MainHeader />

      <main className="flex-grow">
        {/* 4. Full-Width Hero Slider */}
        <HeroSlider />

        {/* 5. Introduction Section with Two Side-by-Side Images (1001.webp & 1006.webp) */}
        <IntroSection />

        {/* 6. Our Best Services (9 Cards with Red Lucide Icons & WhatsApp links) */}
        <ServicesSection />

        {/* 7. Two-Image Content Section & SEO Article (1003.webp & 1004.webp) */}
        <SeoContentSection />

        {/* 8. What Visitors Appreciate (Responsive Testimonials Slider with 6 Cards) */}
        <TestimonialsSlider />

        {/* 9. Compact Two-Column Section: Why Choose Us & FAQs */}
        <WhyUsAndFaq />

        {/* 10. Disclaimer Section */}
        <DisclaimerSection />

        {/* 11. Contact Section */}
        <ContactSection />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Fixed Floating WhatsApp & Call Buttons */}
      <FloatingContactButtons />
    </div>
  );
}
