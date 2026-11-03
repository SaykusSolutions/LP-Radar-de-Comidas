import React from 'react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const LoQuePuedesResolver: React.FC = () => {
  const items = [
    "Empieza con lo que tienes, el tiempo disponible y lo que sí te gusta comer.",
    "En 3 minutos ves tres opciones sencillas, no otro menú cerrado que cuesta seguir.",
    "El punto ciego: una receta perfecta en papel no sirve si no cabe en tu día.",
    "Elige una comida posible hoy, sin contar calorías ni reiniciar toda tu rutina.",
    "Guarda una opción y conviértela en una lista de compra breve.",
  ];

  return (
    <section id="resolver" className="relative w-full max-w-full overflow-x-clip bg-white text-neutral-900 py-10 sm:py-20 border-b border-[#E8E2D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#EA580C] mb-2 sm:mb-3">
            Beneficios Directos Para Tu Rutina
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 break-words [text-wrap:balance]">
            Lo que resuelves en tres minutos
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#EA580C] mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* 4 Checkmarks List */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          {[
            "Partes de lo que ya tienes guardado, sin tener que salir al supermercado de noche.",
            "Recibes tres combinaciones claras en segundos en vez de perderte en recetarios imposibles.",
            "Rescatas verduras y proteínas antes de que se pudran en el fondo del cajón.",
            "Cenas comida casera sin pasar horas cocinando ni sintiendo culpa por pedir comida rápida."
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-[#FAF9F5] border border-neutral-200 hover:border-[#EA580C]/40 hover:bg-white transition-all w-full max-w-full shadow-2xs"
            >
              <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#0B3B2C] to-[#14532D] text-white shrink-0 mt-0.5 shadow-sm">
                <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5 stroke-[2.5]" />
              </div>
              <p className="text-sm sm:text-lg font-semibold leading-relaxed text-neutral-800 break-words">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Cognitive Comparison: Cost of Inaction vs Solution */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 w-full max-w-full">
          {/* Inaction Cost */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFF7F4] border-2 border-orange-200 text-neutral-800 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#C2410C]">
                El costo de seguir igual:
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium leading-relaxed text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-[#EA580C] font-black text-base leading-none">✕</span>
                <span>Dinero perdido en comida fresca que termina en la basura cada semana.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA580C] font-black text-base leading-none">✕</span>
                <span>Cuarenta minutos de tensión cada noche mirando la nevera vacía.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EA580C] font-black text-base leading-none">✕</span>
                <span>Gastos constantes en envíos de comida rápida por puro cansancio mental.</span>
              </li>
            </ul>
          </div>

          {/* Solution Gains */}
          <div className="p-5 sm:p-6 rounded-3xl bg-neutral-50 border-2 border-neutral-200 text-neutral-800 shadow-xs">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-emerald-800">
                Lo que ganas hoy con Radar:
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-semibold leading-relaxed text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                <span>Aprovechas todo lo que compraste sin tirar un solo vegetal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                <span>Tres opciones prácticas en pantalla en menos de tres minutos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-black text-base leading-none">✓</span>
                <span>Cenas con calma y te vas a dormir sin pesadez ni culpa.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Callout with High-Contrast Deep Emerald & Warm Flame Gradient */}
        <div className="bg-gradient-to-br from-[#06291E] via-[#0B3B2C] to-[#041D15] text-white p-6 sm:p-10 rounded-3xl shadow-2xl text-center w-full max-w-full relative border border-emerald-500/20">
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-950 border border-emerald-400/30 text-[11px] font-black uppercase tracking-widest text-emerald-300 mb-2">
            OFERTA VITALICIA
          </div>
          <p className="text-xs sm:text-sm font-bold text-emerald-200/90 mb-1">
            De <span className="line-through text-emerald-300/60">$29 USD</span> por solo <span className="text-white font-black text-base sm:text-lg">$4,99 USD</span> · Pago único
          </p>
          <h3 className="text-lg sm:text-2xl font-black text-white mb-5 max-w-lg mx-auto">
            Pagas menos que un café para resolver tus comidas de todo el mes.
          </h3>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] text-white font-black text-sm sm:text-base px-8 sm:px-10 py-4 rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/40 active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Quiero mi Radar de Comidas por $4,99 USD</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Sellos gráficos de garantía y micro-copy de entrega inmediata pegados al botón */}
          <TrustMicrocopy theme="dark" />
        </div>

      </div>
    </section>
  );
};
