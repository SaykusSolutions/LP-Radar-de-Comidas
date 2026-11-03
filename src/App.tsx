import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LoQuePuedesResolver } from './components/LoQuePuedesResolver';
import { IdentificasSection } from './components/IdentificasSection';
import { BloqueoSection } from './components/BloqueoSection';
import { ComoFuncionaSection } from './components/ComoFuncionaSection';
import { UrgenciaSection } from './components/UrgenciaSection';
import { BonosSection } from './components/BonosSection';
import { TestimoniosSection } from './components/TestimoniosSection';
import { ResumenAccesoSection } from './components/ResumenAccesoSection';
import { GarantiaSection } from './components/GarantiaSection';
import { FaqSection } from './components/FaqSection';
import { CierreSection } from './components/CierreSection';
import { Footer } from './components/Footer';
import { SocialProofTicker } from './components/SocialProofTicker';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-[#0F2E22] flex flex-col font-['Montserrat',sans-serif] selection:bg-orange-100 selection:text-[#C2410C] pb-14 md:pb-0">
      {/* Notificación sutil de prueba social */}
      <SocialProofTicker />

      {/* Barra flotante de compra rápida fija para celulares */}
      <MobileStickyBar />

      {/* Única barra de navegación superior */}
      <Navbar />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Block */}
        <HeroSection />

        {/* 2. Lo que puedes resolver */}
        <LoQuePuedesResolver />

        {/* 3. ¿Esto es para mí? */}
        <IdentificasSection />

        {/* 4. El Problema & La Solución */}
        <BloqueoSection />

        {/* 5. Cómo funciona: Radar de Comidas & Método */}
        <ComoFuncionaSection />

        {/* 6. Urgencia Real */}
        <UrgenciaSection />

        {/* 7. Bonos Exclusivos */}
        <BonosSection />

        {/* 8. Lo que están diciendo */}
        <TestimoniosSection />

        {/* 9. Resumen de tu acceso */}
        <ResumenAccesoSection />

        {/* 10. Garantía incondicional */}
        <GarantiaSection />

        {/* 11. Preguntas Frecuentes */}
        <FaqSection />

        {/* 12. Cierre & CTA 3 */}
        <CierreSection />
      </main>

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
