import React from 'react';
import { ArrowRight } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10&offDiscount=RADAR&bid=1793722168849";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-full bg-white/95 backdrop-blur-md border-b border-[#E8E4DA] shadow-xs transition-all">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand wordmark with official logo */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 sm:gap-2.5 group shrink min-w-0"
        >
          <img 
            src="/assets/aistudio/icon-512x512_8a71b860.png" 
            alt="Logo Radar de Comidas" 
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain shrink-0 group-hover:scale-105 transition-transform"
          />
          <span className="text-xs sm:text-base font-black tracking-wider text-[#0B3B2C] uppercase whitespace-nowrap group-hover:text-[#06241B] transition-colors">
            RADAR DE COMIDAS
          </span>
        </a>

        {/* Minimal Sales Letter Trust Note */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-neutral-500">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Asistente Interactivo de Cocina · Acceso Vitalicio</span>
        </div>

        {/* Mobile-Friendly CTA Action (never overflows, high visual contrast) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-gradient-to-r from-[#FF5722] to-[#EA580C] hover:from-[#F4511E] hover:to-[#D84315] text-white font-extrabold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-md shadow-orange-500/20 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Acceso Inmediato</span>
            <span className="sm:hidden">Acceso</span>
            <span className="font-black text-amber-100">· $4,99 USD</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
        </div>

      </div>
    </header>
  );
};
