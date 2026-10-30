import React from 'react';
import { ArrowRight } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full max-w-full bg-[#F6F8F3]/95 backdrop-blur-md border-b border-[#E3E9DF] transition-all">
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
          <span className="text-xs sm:text-base font-black tracking-wider text-[#174C38] uppercase truncate group-hover:text-[#113829] transition-colors">
            RADAR DE COMIDAS
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-bold tracking-wide text-[#34594B]">
          <a href="#resolver" className="hover:text-[#174C38] transition-colors whitespace-nowrap">
            Lo que resuelves
          </a>
          <a href="#como-funciona" className="hover:text-[#174C38] transition-colors whitespace-nowrap">
            Cómo funciona
          </a>
          <a href="#bonos" className="hover:text-[#174C38] transition-colors whitespace-nowrap">
            Bonos
          </a>
          <a href="#testimonios" className="hover:text-[#174C38] transition-colors whitespace-nowrap">
            Opiniones
          </a>
          <a href="#faq" className="hover:text-[#174C38] transition-colors whitespace-nowrap">
            Preguntas
          </a>
        </nav>

        {/* Mobile-Friendly CTA Action (never overflows, high visual contrast) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 bg-[#D9532F] hover:bg-[#C44522] text-white font-extrabold text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <span className="hidden sm:inline">Acceso Inmediato</span>
            <span className="sm:hidden">Acceso</span>
            <span className="font-black text-amber-200">· $5 USD</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </a>
        </div>

      </div>
    </header>
  );
};
