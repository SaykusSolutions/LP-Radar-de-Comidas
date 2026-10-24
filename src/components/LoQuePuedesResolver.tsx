import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q";

export const LoQuePuedesResolver: React.FC = () => {
  const items = [
    "Empieza con lo que tienes, el tiempo disponible y lo que sí te gusta comer.",
    "En 3 minutos ves tres opciones sencillas, no otro menú cerrado que cuesta seguir.",
    "El punto ciego: una receta perfecta en papel no sirve si no cabe en tu día.",
    "Elige una comida posible hoy, sin contar calorías ni reiniciar toda tu rutina.",
    "Guarda una opción y conviértela en una lista de compra breve.",
  ];

  return (
    <section id="resolver" className="relative w-full max-w-full overflow-hidden bg-white text-[#174C38] py-14 sm:py-24 border-b border-[#E3E9DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#557567] mb-2 sm:mb-3">
            Beneficios Directos
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            Lo que puedes resolver
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#174C38] mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* 5 Checkmarks List */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#F6F8F3] border border-[#E3E9DF] hover:border-[#174C38]/40 transition-all w-full max-w-full"
            >
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#174C38] text-white shrink-0 mt-0.5 shadow-xs">
                <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-[#2C4A3E] break-words">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* High Conversion Pricing Block with Warm Elegant Botanical Contrast */}
        <div className="bg-[#174C38] text-white p-5 sm:p-10 rounded-3xl shadow-lg text-center w-full max-w-full">
          <p className="text-sm sm:text-lg font-medium text-emerald-200/80 line-through mb-1">
            De 29 USD
          </p>
          
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#F6F8F3] mb-1 sm:mb-2">
            POR APENAS
          </p>

          <div className="text-3xl sm:text-6xl font-black tracking-tight text-white mb-5 sm:mb-6 tabular-nums">
            6 USD
          </div>

          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F6F8F3] text-[#174C38] font-black text-sm sm:text-lg px-6 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-md active:scale-[0.98] transition-all cursor-pointer mb-2"
          >
            <span>Obtener acceso inmediato</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#174C38] shrink-0" />
          </a>

          {/* Contador de escasez dinámico */}
          <div className="flex justify-center mb-4">
            <ScarcityCounter />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-emerald-100/80">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-300 shrink-0" />
              Pago 100% seguro a través de Hotmart®
            </span>
            <span aria-hidden="true" className="hidden sm:inline text-emerald-400">·</span>
            <span>Acceso permanente</span>
          </div>
        </div>

      </div>
    </section>
  );
};
