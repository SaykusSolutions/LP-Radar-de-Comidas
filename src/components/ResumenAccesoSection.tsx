import React from 'react';
import { ArrowRight, Lock, Sparkles, ShieldCheck } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q";

export const ResumenAccesoSection: React.FC = () => {
  const stackItems = [
    { 
      title: "Radar de Comidas (Mini-app interactiva vitalicia)", 
      price: "USD 29", 
      isGift: false,
      image: "/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp" 
    },
    { 
      title: "Bono 1: Plato Express (Guía digital práctica)", 
      price: "USD 7", 
      isGift: true,
      image: "/assets/aistudio/bono-plato-express-producto_c7fdae47.webp" 
    },
    { 
      title: "Bono 2: Sustituidor de Ingredientes (Guía digital)", 
      price: "USD 5", 
      isGift: true,
      image: "/assets/aistudio/bono-sustituidor-producto_52e4bb4d.webp" 
    },
    { 
      title: "Bono 3: Lista Breve (Generador de compras)", 
      price: "USD 4", 
      isGift: true,
      image: "/assets/aistudio/bono-lista-breve-producto_57279b5e.webp" 
    },
    { 
      title: "Bono 4: Reinicio Amable (Protocolo sin culpa)", 
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-700/60 text-xs font-bold uppercase tracking-widest text-emerald-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Paquete completo de acceso vitalicio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white break-words [text-wrap:balance]">
            RESUMEN DE TU ACCESO
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-white mx-auto mt-3 sm:mt-4 rounded-full opacity-80" />
        </div>

        {/* Stack Container */}
        <div className="rounded-3xl bg-[#0E3526] border border-emerald-600/30 shadow-2xl p-4 sm:p-10 w-full max-w-full overflow-hidden">
          
          {/* List of items with Product Mockup Thumbnails */}
          <div className="divide-y divide-emerald-800/60 mb-6 sm:mb-8">
            {stackItems.map((item, idx) => (
              <div key={idx} className="py-3.5 sm:py-4 first:pt-0 last:pb-4 flex items-center justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                  {/* Thumbnail */}
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-white/10 shrink-0 border border-emerald-700/60 p-0.5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs sm:text-base font-bold text-white block truncate sm:inline">
                      {item.title}
                    </span>
                    {item.isGift && (
                      <span className="sm:ml-2 text-[9px] sm:text-[10px] font-black uppercase text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded-full border border-emerald-700/60 inline-block">
                        🎁 Regalo Gratis
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
                      HOY $0
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Valor total vs Descuento */}
          <div className="pt-4 sm:pt-6 border-t-2 border-dashed border-emerald-700/60 flex items-center justify-between mb-6 sm:mb-8">
            <span className="text-sm sm:text-lg font-semibold text-emerald-200">
              Valor real acumulado:
            </span>
            <span className="text-lg sm:text-2xl font-bold text-emerald-300/70 line-through tabular-nums">
              USD 50
            </span>
          </div>

          {/* Pricing Highlight Card with Neuromarketing Visual Framing */}
          <div className="p-5 sm:p-8 rounded-2xl bg-white text-[#174C38] text-center mb-6 sm:mb-8 shadow-xl border-2 border-emerald-400/30 relative overflow-hidden">
            <div className="inline-block px-3 py-1 rounded-full bg-[#FCF3ED] text-[#D9532F] border border-[#F2D0C2] text-[11px] font-black uppercase tracking-widest mb-1.5">
              OFERTA EXCLUSIVA DE LANZAMIENTO
            </div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#527263]">
              Acceso vitalicio a la mini-app + los 4 bonos de regalo
            </p>
            <div className="text-4xl sm:text-6xl font-black text-[#174C38] tracking-tight my-2 tabular-nums">
              $5 USD
            </div>
            <p className="text-xs sm:text-sm text-[#D9532F] font-bold mb-1">
              Precio especial de lanzamiento · 1 solo pago de por vida
            </p>
            <p className="text-[11px] sm:text-xs text-[#557567] font-medium">
              Sin suscripciones mensuales · Acceso vitalicio inmediato con todos los bonos
            </p>
          </div>

          {/* Primary CTA Link to Hotmart */}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-base sm:text-xl py-4 sm:py-5 px-6 rounded-full shadow-xl shadow-[#D9532F]/30 hover:shadow-2xl active:scale-[0.98] transition-all cursor-pointer text-center mb-3 group"
          >
            <span>¡SÍ, QUIERO MI ACCESO VITALICIO POR $5 USD!</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Contador de escasez dinámico */}
          <div className="flex justify-center mb-5">
            <ScarcityCounter />
          </div>

          {/* Reassurances & Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-emerald-200/90 text-center">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> Hotmart® SSL 256-bit
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-emerald-700">·</span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300 shrink-0" /> Garantía incondicional de 7 días
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-emerald-700">·</span>
            <span>Entrega digital inmediata</span>
          </div>

        </div>

      </div>
    </section>
  );
};
