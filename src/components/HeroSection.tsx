import React from 'react';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full max-w-full overflow-x-clip bg-[#F6F8F3] text-[#174C38] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E3E9DF]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: AIDA Attention & Direct Hook */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full">
            
            {/* Attention Eyebrow Hook (Modelo AIDA) */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-black text-[#C24B28] tracking-wider uppercase mb-3 sm:mb-4 bg-[#FCF3ED] border border-[#F2D0C2] px-3 sm:px-3.5 py-1.5 rounded-full shadow-xs max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#D9532F] animate-ping shrink-0" />
              <img 
                src="/assets/aistudio/icon-512x512_8a71b860.png" 
                alt="Icono Radar de Comidas" 
                className="w-4 h-4 object-contain shrink-0"
              />
              <span className="hidden sm:inline">RADAR DE COMIDAS · ASISTENTE INTERACTIVO VITALICIO</span>
              <span className="sm:hidden">RADAR DE COMIDAS · MINI-APP</span>
            </div>

            {/* Main Title: Exact 8 words selling emotional relief */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-black leading-[1.14] sm:leading-[1.12] tracking-tight text-[#174C38] mb-4 sm:mb-5 break-words w-full [text-wrap:balance]">
              Deja de sufrir cada noche frente a la nevera
            </h1>

            {/* Sub-headline: Tech shortcut vehicle */}
            <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-[#3B5D50] mb-5 sm:mb-7 max-w-2xl break-words">
              Mini-app que organiza tus ingredientes olvidados en tres platos listos para preparar en 3 minutos.
            </p>

            {/* Price Anchoring Block with AIDA conversion trigger */}
            <div className="w-full max-w-full p-4 sm:p-6 bg-white border border-[#E0E7DC] rounded-3xl mb-5 sm:mb-6 shadow-lg shadow-emerald-950/5 relative">
              <div className="flex flex-wrap items-center justify-between gap-1.5 sm:gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-[#FCF3ED] text-[#D9532F] border border-[#F2D0C2] text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F]" />
                  <span>Acceso vitalicio · Pago único</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 sm:px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Descuento 82% aplicado
                </span>
              </div>

              {/* Price comparison: De $29 por $4,99 */}
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                <span className="text-sm sm:text-base font-bold text-neutral-400 line-through">
                  De $29 USD
                </span>
                <span className="text-3xl sm:text-5xl font-black text-[#174C38] tracking-tight tabular-nums">
                  por $4,99 USD
                </span>
                <span className="text-xs font-bold text-[#557567] bg-[#F2F7F0] px-2 py-0.5 rounded-md">
                  Sin mensualidades
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#355749] font-semibold mb-4 leading-relaxed">
                Pagas menos que un café para resolver tus comidas de todo el mes junto a tus 4 bonos de regalo.
              </p>

              {/* High-Contrast Conversion CTA Button WITHOUT BRACKETS */}
              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-sm sm:text-base px-7 sm:px-9 py-4 rounded-full shadow-lg shadow-[#D9532F]/25 hover:shadow-xl hover:shadow-[#D9532F]/35 active:scale-[0.98] transition-all cursor-pointer text-center group"
              >
                <span>Quiero mi Radar de Comidas por $4,99 USD</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Sellos de garantía y micro-copy de entrega inmediata pegados al botón */}
              <TrustMicrocopy theme="light" />
            </div>

            {/* Power Bullets from Bloque 2 */}
            <div className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#325244] w-full bg-[#FAFDF9] p-4 rounded-2xl border border-[#E5EFE2]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Por qué buscar recetas en redes sociales solo multiplica tu cansancio y te deja con hambre.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>El filtro de tres minutos que reemplaza horas de dudas y paseos inútiles por la cocina.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>El Algoritmo de Despensa Inversa que rescata comida fresca antes de que termine en la basura.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D97757] shrink-0 mt-0.5" />
                <span>Tres combinaciones reales en pantalla para cenar hoy sin inventar ingredientes ni perder tiempo.</span>
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Mockup Showcase with Interactive Trust Badges */}
          <div className="lg:col-span-5 relative w-full max-w-full flex justify-center">
            <div className="relative rounded-3xl bg-white text-[#174C38] p-3 sm:p-4 shadow-xl border border-[#E0E7DC] w-full max-w-[340px] sm:max-w-[390px]">
              
              {/* Floating micro-badge: Top-right */}
              <div className="absolute top-5 right-5 z-10 bg-[#174C38] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-emerald-400/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Listo en 3 min</span>
              </div>

              {/* Product Visual Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FAFDF9] border border-[#E4ECE1] flex items-center justify-center p-1">
                <img
                  src="/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp"
                  alt="Radar de Comidas - Tres ideas para tu próxima comida con lo que tienes"
                  className="w-full max-h-[300px] sm:max-h-[360px] object-contain rounded-xl"
                  loading="eager"
                />
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="mt-3 pt-3 border-t border-[#EAEFE8] grid grid-cols-2 gap-2 text-center">
                <div className="p-2 rounded-xl bg-[#F6F8F3] border border-[#E4ECE1]">
                  <span className="block text-[11px] font-black text-[#174C38]">3 Opciones Claras</span>
                  <span className="text-[10px] text-[#557567]">Con lo que ya tienes</span>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF5EE] border border-[#F2DECE]">
                  <span className="block text-[11px] font-black text-[#A84224]">$4,99 USD Único</span>
                  <span className="text-[10px] text-[#7A5B49]">Vitalicio sin cuotas</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
