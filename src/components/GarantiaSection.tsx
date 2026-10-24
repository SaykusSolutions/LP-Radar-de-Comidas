import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const GarantiaSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#FAF7F2] text-[#174C38] py-14 sm:py-20 border-b border-[#EBE3D7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-6 sm:p-12 rounded-3xl bg-white border border-[#E5DDD0] shadow-xs flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left w-full max-w-full">
          
          {/* Badge 7 DIAS */}
          <div className="shrink-0 flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-[#174C38] text-white p-3 sm:p-4 shadow-sm">
            <span className="text-3xl sm:text-5xl font-black tabular-nums leading-none">
              7
            </span>
            <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest mt-1 text-emerald-200">
              DIAS
            </span>
          </div>

          {/* Copy */}
          <div className="space-y-2 sm:space-y-3 min-w-0">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#D97757]">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest">
                Tranquilidad Total
              </span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-[#174C38] tracking-tight break-words">
              Garantia incondicional de 7 dias
            </h3>

            <p className="text-sm sm:text-lg font-medium text-[#385B4E] leading-relaxed break-words">
              Si pruebas Radar de Comidas y sientes que no es para ti dentro de los primeros 7 días, puedes solicitar la devolución. Sin preguntas incómodas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
