import React from 'react';
import { Check, ArrowRight, Lock } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q";

export const ResumenAccesoSection: React.FC = () => {
  const stackItems = [
    { 
      title: "Radar de Comidas", 
      price: "USD 29", 
      isGift: false,
      image: "/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp" 
    },
    { 
      title: "Bono 1: Plato Express", 
      price: "USD 7", 
      isGift: true,
      image: "/assets/aistudio/bono-plato-express-producto_c7fdae47.webp" 
    },
    { 
      title: "Bono 2: Sustituidor de Ingredientes", 
      price: "USD 5", 
      isGift: true,
      image: "/assets/aistudio/bono-sustituidor-producto_52e4bb4d.webp" 
    },
    { 
      title: "Bono 3: Lista Breve", 
      price: "USD 4", 
      isGift: true,
      image: "/assets/aistudio/bono-lista-breve-producto_57279b5e.webp" 
    },
    { 
      title: "Bono 4: Reinicio Amable", 
      price: "USD 5", 
      isGift: true,
      image: "/assets/aistudio/bono-reinicio-amable-producto_60ae48bf.webp" 
    },
  ];

  return (
    <section id="resumen" className="relative w-full max-w-full overflow-hidden bg-[#174C38] text-white py-14 sm:py-24 border-b border-[#0F3526]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-emerald-200 mb-2">
            Todo lo que recibes hoy
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white break-words [text-wrap:balance]">
            RESUMEN DE TU ACCESO
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-white mx-auto mt-3 sm:mt-4 rounded-full opacity-80" />
        </div>

        {/* Stack Container */}
        <div className="rounded-3xl bg-[#0E3526] border border-emerald-600/30 shadow-xl p-4 sm:p-10 w-full max-w-full overflow-hidden">
          
          {/* List of items with Product Mockup Thumbnails */}
          <div className="divide-y divide-emerald-800/60 mb-6 sm:mb-8">
            {stackItems.map((item, idx) => (
              <div key={idx} className="py-3.5 sm:py-4 first:pt-0 last:pb-4 flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  {/* Thumbnail */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white/10 shrink-0 border border-emerald-700/60">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-lg font-bold text-white block truncate sm:inline">
                      {item.title}
                    </span>
                    {item.isGift && (
                      <span className="sm:ml-2 text-[9px] sm:text-[10px] font-black uppercase text-emerald-300 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-700/60 inline-block">
                        Regalo
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0 whitespace-nowrap">
                  <span className={`text-xs sm:text-base font-semibold tabular-nums ${item.isGift ? 'line-through text-emerald-300/60' : 'text-emerald-100'}`}>
                    {item.price}
                  </span>
                  {item.isGift && (
                    <span className="text-[11px] sm:text-xs font-black text-emerald-300 ml-1.5 sm:ml-2">
                      $0
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Valor total */}
          <div className="pt-4 sm:pt-6 border-t-2 border-dashed border-emerald-700/60 flex items-center justify-between mb-6 sm:mb-8">
            <span className="text-sm sm:text-lg font-semibold text-emerald-200">
              Valor total:
            </span>
            <span className="text-lg sm:text-2xl font-bold text-emerald-300/70 line-through tabular-nums">
              USD 50
            </span>
          </div>

          {/* Pricing Highlight Card */}
          <div className="p-5 sm:p-8 rounded-2xl bg-white text-[#174C38] text-center mb-6 sm:mb-8 shadow-md">
            <p className="text-[11px] sm:text-sm font-black uppercase tracking-widest text-[#D97757] mb-1">
              Garantiza tu acceso por solo:
            </p>
            <div className="text-4xl sm:text-7xl font-black text-[#174C38] tracking-tight my-1 sm:my-2 tabular-nums">
              USD 11
            </div>
            <p className="text-[11px] sm:text-xs text-[#527263] font-bold">
              Te ahorras $39 USD hoy (78% de descuento)
            </p>
          </div>

          {/* Primary CTA Link to Hotmart */}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D97757] hover:bg-[#C96647] text-white font-black text-base sm:text-xl py-3.5 sm:py-5 px-6 rounded-full shadow-lg active:scale-[0.98] transition-all cursor-pointer text-center mb-3"
          >
            <span>Obtén acceso INMEDIATO</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

          {/* Contador de escasez dinámico */}
          <div className="flex justify-center mb-5">
            <ScarcityCounter />
          </div>

          {/* Reassurances */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-emerald-200/90 text-center">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> Hotmart® SSL 256-bit
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-emerald-700">·</span>
            <span>Entrega digital inmediata</span>
            <span aria-hidden="true" className="hidden sm:inline text-emerald-700">·</span>
            <span>Garantía 7 días</span>
          </div>

        </div>

      </div>
    </section>
  );
};
