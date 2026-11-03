import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const MobileStickyBar: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show on mobile once scrolled past 320px
      if (window.scrollY > 320) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t border-[#E8E4DA] shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-black text-neutral-900 leading-none tabular-nums">
              $4,99 USD
            </span>
            <span className="text-xs text-neutral-400 line-through">
              $29
            </span>
            <span className="text-[10px] font-black text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
              Vitalicio
            </span>
          </div>
          <p className="text-[10px] text-neutral-600 font-semibold truncate flex items-center gap-1 mt-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
            <span>Entrega inmediata · 7 días garantía</span>
          </p>
        </div>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#EA580C] hover:from-[#F4511E] hover:to-[#C2410C] text-white font-black text-xs px-4 sm:px-5 py-3 rounded-full shadow-lg shadow-[#FF5722]/30 active:scale-95 transition-all shrink-0 cursor-pointer"
        >
          <span>Comprar por $4,99</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </a>
      </div>
    </div>
  );
};
