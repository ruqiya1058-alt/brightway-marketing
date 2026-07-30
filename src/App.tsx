import React, { useState } from 'react';
import { SeoSchemas } from './components/SeoSchemas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedIndustries } from './components/TrustedIndustries';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurProcess } from './components/OurProcess';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { InteractiveToolsSection } from './components/InteractiveToolsSection';
import { BlogSection } from './components/BlogSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { ServiceItem } from './types';

export default function App() {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  const handleOpenConsultationModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsConsultationModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#00C2FF] selection:text-slate-950 antialiased">
      {/* Inject SEO Schemas */}
      <SeoSchemas />

      {/* Navigation */}
      <Navbar
        onOpenConsultationModal={() => handleOpenConsultationModal()}
        onOpenWhatsAppModal={() => setIsWhatsAppOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Full Screen Luxury Hero */}
        <HeroSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
          onOpenWhatsAppModal={() => setIsWhatsAppOpen(true)}
        />

        {/* 2. Trusted By Industries */}
        <TrustedIndustries
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 3. About BrightWay Marketing */}
        <AboutSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 4. Why Choose BrightWay Marketing */}
        <WhyChooseUs
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 5. Our 7-Step Process */}
        <OurProcess
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 6. Complete Services Suite (35+ Services) */}
        <ServicesSection
          onSelectService={(service) => setSelectedServiceDetail(service)}
          onOpenConsultationModal={(serviceName) => handleOpenConsultationModal(serviceName)}
        />

        {/* 7. Case Studies & Portfolio */}
        <PortfolioSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 8. Interactive Tools: Website Audit & ROI Calculator */}
        <InteractiveToolsSection
          onOpenConsultationModal={(notes) => handleOpenConsultationModal(notes)}
        />

        {/* 9. Verified Client Testimonials */}
        <TestimonialsSection />

        {/* 10. Pricing & Investment Plans */}
        <PricingSection
          onOpenConsultationModal={(planName) => handleOpenConsultationModal(planName ? `Plan: ${planName}` : undefined)}
        />

        {/* 11. Marketing Blog & Insights */}
        <BlogSection />

        {/* 12. SEO FAQs */}
        <FAQSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 13. Final High-Impact CTA */}
        <FinalCTA
          onOpenConsultationModal={() => handleOpenConsultationModal()}
          onOpenWhatsAppModal={() => setIsWhatsAppOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenConsultationModal={(serviceName) => handleOpenConsultationModal(serviceName)}
      />

      {/* Interactive Modals & Widgets */}
      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialService={preselectedService}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenConsultationModal={(serviceName) => handleOpenConsultationModal(serviceName)}
      />

      <WhatsAppWidget
        isOpen={isWhatsAppOpen}
        onToggle={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
      />
    </div>
  );
}
