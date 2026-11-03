import React from 'react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10&offDiscount=RADAR&bid=1793722168849";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-full overflow-x-clip bg-[#06291E] text-emerald-100/70 py-10 sm:py-12 border-t border-[#041D15]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1.5">
            <img 
              src="/assets/aistudio/icon-512x512_8a71b860.png" 
              alt="Logo Radar de Comidas" 
              className="w-7 h-7 object-contain shrink-0"
            />
            <p className="text-sm sm:text-base font-black tracking-wider text-white uppercase">
              RADAR DE COMIDAS
            </p>
          </div>
          <p className="text-[11px] sm:text-xs font-normal text-emerald-200/60">
            © Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-medium text-emerald-200/80">
          <a href="#hero" className="hover:text-white transition-colors">
            Inicio
          </a>
          <span aria-hidden="true" className="text-emerald-800">·</span>
          <a href="#como-funciona" className="hover:text-white transition-colors">
            Método
          </a>
          <span aria-hidden="true" className="text-emerald-800">·</span>
          <a 
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors font-bold text-amber-300 underline decoration-[#FF5722] decoration-2"
          >
            Oferta $4,99 USD
          </a>
          <span aria-hidden="true" className="text-emerald-800">·</span>
          <a href="#faq" className="hover:text-white transition-colors">
            Preguntas
          </a>
        </div>
      </div>
    </footer>
  );
};
