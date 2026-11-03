import React from 'react';
import { Navbar } from './components/Navbar';
import { CartaDeVentas } from './components/CartaDeVentas';
import { Footer } from './components/Footer';
import { SocialProofTicker } from './components/SocialProofTicker';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-neutral-900 flex flex-col font-['Montserrat',sans-serif] selection:bg-orange-100 selection:text-[#C2410C] pb-14 md:pb-0">
      {/* Notificación sutil de prueba social */}
      <SocialProofTicker />

      {/* Barra flotante de compra rápida fija para celulares */}
      <MobileStickyBar />

      {/* Barra superior limpia */}
      <Navbar />

      {/* Modo Carta de Ventas BeMaster: narrativa continua, sin sobrecarga de información */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        <CartaDeVentas />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
