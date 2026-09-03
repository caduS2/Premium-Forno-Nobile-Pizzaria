import React from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SignatureSection } from './components/SignatureSection';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { FeaturesSection } from './components/FeaturesSection';
import { LoyaltyDemo } from './components/LoyaltyDemo';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductCustomizeModal } from './components/ProductCustomizeModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0B0B0C] text-[#F8FAFC] flex flex-col selection:bg-[#C9973A] selection:text-[#0B0B0C]">
        {/* Sticky Header */}
        <Header />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 1. Hero Cinematográfico */}
          <Hero />

          {/* 2. Assinaturas da Casa */}
          <SignatureSection />

          {/* 3. Cardápio Premium Interativo */}
          <MenuSection />

          {/* 4. Diferenciais */}
          <FeaturesSection />

          {/* 5. Sobre / Processo Artesanal */}
          <AboutSection />

          {/* 6. Galeria Gastronômica */}
          <GallerySection />

          {/* 7. Fidelidade - Clube Nobile (Demonstrativo) */}
          <LoyaltyDemo />

          {/* 8. Localização */}
          <LocationSection />

          {/* 9. FAQ Acordeão */}
          <FAQSection />

          {/* 10. CTA Final */}
          <FinalCTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Drawers & Overlays */}
        <CartDrawer />
        <ProductCustomizeModal />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}
