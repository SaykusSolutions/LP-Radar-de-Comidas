import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const GarantiaSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F0] to-[#F5EFE6] py-12 sm:py-20 border-b border-[#E8E1D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-br from-white via-[#FFFDF9] to-[#FFF9F0] border-2 border-[#EFE5D3] shadow-2xl shadow-amber-950/5 flex flex-col md:flex-row items-center gap-6 sm:gap-10 text-center md:text-left w-full max-w-full relative overflow-hidden">
          
          {/* Subtle golden ambient glow */}
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-amber-200/40 to-orange-200/30 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Prestige Golden & Emerald Guarantee Seal */}
          <div className="shrink-0 relative group">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#0B3B2C] via-[#0E4937] to-[#06241B] text-white p-4 shadow-2xl flex flex-col items-center justify-center relative border-4 border-amber-400 ring-4 ring-amber-300/40">
              
              {/* Outer decorative dashed ring */}
              <div className="absolute inset-1.5 rounded-full border border-dashed border-amber-300/60 pointer-events-none" />
              
              {/* Top micro badge */}
              <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-amber-300 flex items-center gap-1 mb-0.5">
                ★ 100% ★
              </span>

              {/* Huge 7 */}
              <span className="text-4xl sm:text-6xl font-black tabular-nums leading-none text-white drop-shadow-sm">
                7
              </span>

              {/* DÍAS label */}
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-300 leading-tight mt-0.5">
                DÍAS
              </span>

              {/* Bottom Guarantee label */}
              <span className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-emerald-200/90 mt-0.5">
                GARANTÍA TOTAL
              </span>
            </div>

            {/* Ribbon tag under seal */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-amber-950 font-black text-[9px] sm:text-[10px] uppercase px-3 py-0.5 rounded-full shadow-md whitespace-nowrap border border-amber-200">
              Cero Riesgo
            </div>
          </div>

          {/* Psychological Risk Reversal Copy */}
          <div className="space-y-3 min-w-0 flex-1 relative z-10 pt-2 md:pt-0">
            <div className="inline-flex items-center justify-center md:justify-start gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[#C2410C]">
              <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
              <span className="text-[11px] font-black uppercase tracking-wider">
                Garantía Incondicional de Satisfacción
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-neutral-900 tracking-tight break-words [text-wrap:balance]">
              Pruébalo durante 7 días <span className="text-[#0B3B2C] underline decoration-amber-400 decoration-3">sin arriesgar un solo centavo</span>
            </h3>

            <p className="text-sm sm:text-base font-medium text-neutral-700 leading-relaxed break-words">
              Usa Radar de Comidas durante siete días completos. Si la herramienta no te quita el agobio de decidir qué cocinar desde tu primera noche, solicitas el reembolso en Hotmart con un solo clic y recuperas el cien por ciento de tu dinero. Todo el riesgo queda de mi lado.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs font-bold">
              <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-900 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Devolución directa en tu medio de pago
              </span>
              <span className="flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                Respaldado por Hotmart®
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
