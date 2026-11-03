import React from 'react';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full max-w-full overflow-x-clip bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE6] text-neutral-900 pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E8E1D5]">
      {/* Decorative ambient culinary glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Daniela Persona Direct Hook */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full">
            
            {/* Attention Eyebrow Hook */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-[#EA580C] tracking-wider uppercase mb-3 sm:mb-4 bg-[#FFF3EA] border border-[#FED7AA] px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] animate-ping shrink-0" />
              <img 
                src="/assets/aistudio/icon-512x512_8a71b860.png" 
                alt="Icono Radar de Comidas" 
                className="w-4 h-4 object-contain shrink-0"
              />
              <span className="hidden sm:inline">PARA QUIENES LLEGAN CANSADOS Y NO SABEN QUÉ COCINAR</span>
              <span className="sm:hidden">RADAR DE COMIDAS · ASISTENTE VITALICIO</span>
            </div>

            {/* Main Title: Crisp Dark Neutral for maximum punch */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black leading-[1.14] sm:leading-[1.12] tracking-tight text-neutral-900 mb-4 sm:mb-5 break-words w-full [text-wrap:balance]">
              Deja de preguntarte todos los días qué cocinar
            </h1>

            {/* Sub-headline: Neutral charcoal for comfortable reading */}
            <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-neutral-700 mb-5 sm:mb-7 max-w-2xl break-words">
              Dile a Radar de Comidas qué ingredientes tienes y cuánto tiempo dispones. Descubre tres ideas prácticas para tu próxima comida en 3 minutos.
            </p>

            {/* Price Anchoring Block with Vibrant Warm Appetite Accents */}
            <div className="w-full max-w-full p-4 sm:p-6 bg-white border-2 border-[#EFE7D8] rounded-3xl mb-5 sm:mb-6 shadow-xl shadow-orange-950/5 relative">
              <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#FFF3EA] text-[#C2410C] border border-[#FED7AA] text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                  <span>Acceso vitalicio · Pago único</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Ahorro 82% aplicado hoy
                </span>
              </div>

              {/* Price comparison: De $29 por $4,99 */}
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                <span className="text-sm sm:text-base font-bold text-neutral-400 line-through">
                  De $29 USD
                </span>
                <span className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight tabular-nums">
                  por $4,99 USD
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                  Sin mensualidades
                </span>
              </div>

              <p className="text-xs sm:text-sm text-neutral-600 font-semibold mb-4 leading-relaxed">
                Pagas menos que un café para resolver tus comidas de todo el mes junto a tus 4 bonos de regalo.
              </p>

              {/* High-Contrast Conversion CTA Button with Warm Orange Gradient */}
              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] text-white font-black text-sm sm:text-base px-8 sm:px-10 py-4 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 active:scale-[0.98] transition-all cursor-pointer text-center group"
              >
                <span>Quiero mi Radar de Comidas por $4,99 USD</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Sellos de garantía y micro-copy de entrega inmediata pegados al botón */}
              <TrustMicrocopy theme="light" />
            </div>

            {/* Power Bullets addressing Daniela's deep pains */}
            <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-neutral-700 w-full bg-white/95 p-4 sm:p-5 rounded-2xl border border-[#E8E1D3] shadow-xs">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Por qué buscar recetas en redes cuando llegas cansada solo te roba 40 minutos y te deja con más hambre.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>El filtro de tres minutos que reemplaza horas de dudas y paseos inútiles frente a la nevera abierta.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>El Algoritmo de Despensa Inversa que rescata verduras y proteínas antes de que se pudran en la gaveta.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" />
                <span>Tres opciones reales en pantalla para cenar hoy sin inventar ingredientes ni perder energía mental.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Mockup Showcase with Interactive Trust Badges */}
          <div className="lg:col-span-5 relative w-full max-w-full flex justify-center">
            <div className="relative rounded-3xl bg-white text-neutral-900 p-3 sm:p-4 shadow-2xl shadow-orange-950/10 border-2 border-[#EAE3D5] w-full max-w-[340px] sm:max-w-[390px]">
              
              {/* Floating micro-badge: Top-right */}
              <div className="absolute top-5 right-5 z-10 bg-[#0B3B2C] text-white text-[10px] font-black uppercase px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-emerald-400/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-100 font-extrabold tracking-wider">Listo en 3 min</span>
              </div>

              {/* Product Visual Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FBFDFB] to-[#F5F8F4] border border-[#E2EBE0] flex items-center justify-center p-1.5">
                <img
                  src="/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp"
                  alt="Radar de Comidas - Tres ideas para tu próxima comida con lo que tienes"
                  className="w-full max-h-[300px] sm:max-h-[360px] object-contain rounded-xl"
                  loading="eager"
                />
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-3 pt-3 border-t border-[#EDE6D8] grid grid-cols-2 gap-2 text-center">
                <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                  <span className="block text-[11px] font-black text-neutral-900">3 Opciones Claras</span>
                  <span className="text-[10px] text-neutral-600 font-medium">Con lo que ya tienes</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FFF6EE] border border-[#FED7AA]">
                  <span className="block text-[11px] font-black text-[#C2410C]">$4,99 USD Único</span>
                  <span className="text-[10px] text-[#8C4427] font-medium">Vitalicio sin cuotas</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
