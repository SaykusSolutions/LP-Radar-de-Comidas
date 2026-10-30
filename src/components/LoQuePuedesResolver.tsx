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

        {/* Loss Aversion & Cognitive Comparison: Cost of Inaction vs Solution */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 w-full max-w-full">
          {/* Inaction Cost */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFF7F5] border border-[#FCD9D1] text-[#7A271A]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9532F]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#D9532F]">
                Lo que pierdes sin una solución:
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>$20 a $40 USD al mes en comida que se pudre en el fondo de la nevera.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>Hasta 45 minutos diarios de angustia mental y parálisis por decisión.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>Gastos imprevistos en pedidos a domicilio por pura falta de ideas rápidas.</span>
              </li>
            </ul>
          </div>

          {/* Solution Gains */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#F0F7F2] border border-[#CDE5D5] text-[#174C38]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-800">
                Lo que ganas hoy con Radar:
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <span>Aprovechas el 100% de lo que compraste, ahorrando dinero desde el día 1.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <span>3 comidas viables y deliciosas listas en tu pantalla en 3 minutos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <span>Paz mental inmediata: cocinas rico, variado y sin presiones ni culpas.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* High Conversion Pricing Block with Warm Elegant Botanical Contrast */}
        <div className="bg-[#174C38] text-white p-5 sm:p-10 rounded-3xl shadow-xl text-center w-full max-w-full relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <p className="text-sm sm:text-lg font-medium text-emerald-200/80 line-through mb-1">
            Valor normal: De 29 USD
          </p>
          
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[11px] font-black uppercase tracking-widest text-emerald-200 mb-2">
            OFERTA DE LANZAMIENTO · ACCESO VITALICIO
          </div>

          <div className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-2 tabular-nums">
            5 USD
          </div>

          <p className="text-xs sm:text-sm text-emerald-100/90 font-medium mb-6 max-w-md mx-auto">
            Un único pago para siempre. Se paga solo la primera vez que salves ingredientes en tu cocina.
          </p>

          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-sm sm:text-lg px-8 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#D9532F]/30 active:scale-[0.98] transition-all cursor-pointer mb-3 group"
          >
            <span>Obtener acceso inmediato por $5 USD</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
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
            <span aria-hidden="true" className="hidden sm:inline text-emerald-400">·</span>
            <span>Garantía de 7 días</span>
          </div>
        </div>

      </div>
    </section>
  );
};
