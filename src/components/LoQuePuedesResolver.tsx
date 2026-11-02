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
    <section id="resolver" className="relative w-full max-w-full overflow-x-clip bg-white text-[#174C38] py-10 sm:py-20 border-b border-[#E3E9DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#557567] mb-2 sm:mb-3">
            Beneficios Directos
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            Lo que resuelves en tres minutos
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#174C38] mx-auto mt-3 sm:mt-4 rounded-full" />
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

        {/* Cognitive Comparison: Cost of Inaction vs Solution */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 w-full max-w-full">
          {/* Inaction Cost */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#FFF7F5] border border-[#FCD9D1] text-[#7A271A]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D9532F]" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#D9532F]">
                El costo de seguir igual:
              </span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>Dinero perdido en comida que termina en la basura cada semana.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>Cuarenta minutos de tensión cada noche mirando la nevera vacía.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#D9532F] font-bold text-base leading-none">✕</span>
                <span>Gastos constantes en envíos de comida rápida por puro cansancio.</span>
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
                <span>Aprovechas todo lo que compraste sin tirar un solo vegetal.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <span>Tres opciones prácticas en pantalla en menos de tres minutos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold text-base leading-none">✓</span>
                <span>Cenas con calma y te vas a dormir sin pesadez ni culpa.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Action Callout */}
        <div className="bg-[#174C38] text-white p-6 sm:p-10 rounded-3xl shadow-xl text-center w-full max-w-full relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-black uppercase tracking-widest text-emerald-300 mb-2">
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
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-sm sm:text-base px-8 sm:px-10 py-4 rounded-full shadow-lg shadow-[#D9532F]/30 hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer group"
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
