import React from 'react';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { ScarcityCounter } from './ScarcityCounter';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative w-full max-w-full overflow-hidden bg-[#F6F8F3] text-[#174C38] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#E3E9DF]">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Copy & Direct Conversion Action */}
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full max-w-full">
            
            {/* App Eyebrow with official logo */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-black text-[#174C38] tracking-wider uppercase mb-3 sm:mb-4 bg-white/90 border border-[#E3E9DF] px-3.5 py-1.5 rounded-full shadow-xs max-w-full">
              <img 
                src="/assets/aistudio/icon-512x512_8a71b860.png" 
                alt="Icono Radar de Comidas" 
                className="w-4 h-4 object-contain shrink-0"
              />
              <span className="truncate">RADAR DE COMIDAS · TU ASISTENTE DE HOY</span>
            </div>

            {/* Main Title - Montserrat ExtraBold/Black */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3rem] font-black leading-[1.16] sm:leading-[1.14] tracking-tight text-[#174C38] mb-4 sm:mb-5 break-words w-full [text-wrap:balance]">
              Decide qué comer sin volver a empezar de cero
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg md:text-xl font-medium leading-relaxed text-[#3B5D50] mb-6 sm:mb-7 max-w-2xl break-words">
              Mini-app que convierte tus ingredientes, tiempo y gustos en tres comidas posibles en 3 minutos.
            </p>

            {/* Price Card & Primary Action */}
            <div className="w-full max-w-full p-4 sm:p-5 bg-white border border-[#E0E7DC] rounded-3xl mb-5 sm:mb-6 shadow-md relative overflow-hidden">
              {/* Clean launch badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FCF3ED] text-[#D9532F] border border-[#F2D0C2] text-[11px] font-black uppercase tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D9532F] animate-ping" />
                <span>Oferta de lanzamiento · Acceso de por vida</span>
              </div>

              {/* Clear, straightforward pricing without confusing number clutter */}
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-1.5">
                <span className="text-3xl sm:text-4xl font-black text-[#174C38] tracking-tight tabular-nums">
                  $5 USD
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#557567]">
                  (Pago único · Sin mensualidades)
                </span>
              </div>

              <p className="text-xs text-[#527263] font-medium mb-3">
                Un solo pago para tener la mini-app completa y los 4 bonos de regalo para siempre.
              </p>

              {/* High-Contrast Conversion CTA Button */}
              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-[#D9532F]/20 hover:shadow-xl hover:shadow-[#D9532F]/30 active:scale-[0.98] transition-all cursor-pointer text-center group"
              >
                <span>¡SÍ, QUIERO ACCESO INMEDIATO POR $5 USD!</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contador de escasez dinámico justo debajo del botón principal */}
              <ScarcityCounter />

              <div className="mt-3 pt-3 border-t border-[#F0F4EE] flex flex-wrap items-center justify-between gap-2 text-[11px] font-semibold text-[#557567]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                  Pago único · Acceso vitalicio · Sin suscripciones
                </span>
                <span className="text-emerald-700 font-bold">
                  🛡️ Garantía incondicional 7 días
                </span>
              </div>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-semibold text-[#446658]">
              <div className="flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Tus gustos sí cuentan</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Decide paso a paso</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Clock className="w-3.5 h-3.5 text-[#D97757] shrink-0" />
                <span>En 3 minutos sin reglas rígidas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Compact & Well-Proportioned Product Image */}
          <div className="lg:col-span-5 relative w-full max-w-full flex justify-center">
            <div className="relative rounded-3xl overflow-hidden bg-white text-[#174C38] p-3 sm:p-4 shadow-md border border-[#E0E7DC] w-full max-w-[320px] sm:max-w-[370px]">
              
              {/* Product Visual Mockup - Scaled moderately so it doesn't overwhelm */}
              <div className="relative rounded-2xl overflow-hidden bg-[#FAFDF9] border border-[#E4ECE1] flex items-center justify-center p-1">
                <img
                  src="/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp"
                  alt="Radar de Comidas - Tres ideas para tu próxima comida con lo que tienes"
                  className="w-full max-h-[280px] sm:max-h-[340px] object-contain rounded-xl"
                  loading="eager"
                />
              </div>

              {/* Bottom Quick-Action Bar */}
              <div className="mt-3 pt-2.5 border-t border-[#EAEFE8] flex items-center justify-between gap-2 text-xs font-bold text-[#446658]">
                <span className="flex items-center gap-1.5 text-[#174C38] text-[11px] sm:text-xs truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97757] shrink-0" />
                  Ideas listas en 3 minutos
                </span>
                <span className="text-[10px] text-[#557567] bg-[#E8EFE6] px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">
                  Sin dietas
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
