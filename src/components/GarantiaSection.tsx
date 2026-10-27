import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const GarantiaSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#FAF7F2] text-[#174C38] py-14 sm:py-20 border-b border-[#EBE3D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-12 rounded-3xl bg-white border border-[#E5DDD0] shadow-md flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left w-full max-w-full relative overflow-hidden">
          
          {/* Badge 7 DIAS with Gold/Emerald Seal */}
          <div className="shrink-0 flex flex-col items-center justify-center w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-[#174C38] text-white p-3 sm:p-4 shadow-lg border-2 border-emerald-400/40 relative">
            <span className="text-4xl sm:text-6xl font-black tabular-nums leading-none text-white">
              7
            </span>
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest mt-1 text-emerald-200">
              DÍAS
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-300/80 mt-0.5">
              100% RIESGO CERO
            </span>
          </div>

          {/* Psychological Risk Reversal Copy */}
          <div className="space-y-2 sm:space-y-3 min-w-0 flex-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#D9532F]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-xs font-black uppercase tracking-widest">
                Garantía Incondicional de Satisfacción
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-[#174C38] tracking-tight break-words [text-wrap:balance]">
              Pruébalo durante 7 días sin arriesgar un solo centavo
            </h3>

            <p className="text-sm sm:text-base font-medium text-[#385B4E] leading-relaxed break-words">
              Entra hoy, usa la mini-app con lo que tienes en tu nevera para tu almuerzo y cena. Si sientes que no te ahorra tiempo ni te quita el estrés de encima, solicitas la devolución de tus <strong>$6 USD</strong> en Hotmart con un solo clic. Sin preguntas, sin trabas y sin explicaciones incómodas.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-bold text-[#174C38]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Devolución directa en tu medio de pago
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Respaldado por Hotmart®
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
