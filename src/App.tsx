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
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#F6F8F3] text-[#174C38] flex flex-col font-['Montserrat',sans-serif] selection:bg-emerald-100 selection:text-[#174C38]">
      {/* Única barra de navegación superior (fija, compacta y responsiva en celulares) */}
      <Navbar />

      {/* Secciones dinámicas, armónicas y 100% responsivas para celular y escritorio */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 1. Hero Block [Fondo Suave Porcelana Saludable #F6F8F3] */}
        <HeroSection />

        {/* 2. Lo que puedes resolver [Fondo Blanco Puro Luminoso #FFFFFF] */}
        <LoQuePuedesResolver />

        {/* 3. ¿Esto es para mí? / ¿Te identificas con esto? [Fondo Cálido Crema Almendra #FAF6F0] */}
        <IdentificasSection />

        {/* 4. EL BLOQUEO DE ABRIR LA NEVERA Y NO SABER QUÉ HACER [Fondo Contraste Salvia Suave #EAF1E9] */}
        <BloqueoSection />

        {/* 5. Cómo funciona: Radar de Comidas & Método [Fondo Blanco #FFFFFF con simulador dinámico] */}
        <ComoFuncionaSection />

        {/* 6. Oferta por tiempo limitado & Urgencia [Fondo Cálido Miel / Terracota #FCF6EE] */}
        <UrgenciaSection />

        {/* 7. Bonos Exclusivos con Valor Tachado y Regalo [Fondo Suave Salvia #F6F8F3] */}
        <BonosSection />

        {/* 8. LO QUE ESTÁN DICIENDO (Testimonios Reales) [Fondo Blanco Puro #FFFFFF] */}
        <TestimoniosSection />

        {/* 9. RESUMEN DE TU ACCESO (Stack de Oferta $50 USD tachado -> $11 USD) [Fondo Verde Botánico #174C38] */}
        <ResumenAccesoSection />

        {/* 10. Garantia incondicional de 7 dias [Fondo Cálido Marfil #FAF7F2] */}
        <GarantiaSection />

        {/* 11. Preguntas Frecuentes [Fondo Blanco #FFFFFF] */}
        <FaqSection />
      </main>

      {/* 12. Footer [Fondo Verde Suave y Calmo #0D2B20] */}
      <Footer />
    </div>
  );
}
