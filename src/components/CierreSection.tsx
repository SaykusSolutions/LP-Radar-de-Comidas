import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const CierreSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#FAF6F0] text-[#174C38] py-10 sm:py-20 border-b border-[#EBE3D7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#174C38] mb-6 leading-tight break-words [text-wrap:balance]">
          TIENES DOS CAMINOS HOY
        </h2>

        {/* 3 lines contrasting the 2 choices */}
        <div className="space-y-4 text-base sm:text-xl font-medium text-[#2C4A3E] leading-relaxed mb-8 max-w-2xl mx-auto">
          <p className="text-[#A84224] font-semibold">
            Seguir igual significa otra noche con hambre frente a la nevera abierta.
          </p>
          <p>
            O puedes tener en tu teléfono la herramienta que decide tu cena en tres minutos.
          </p>
          <p className="font-bold text-[#174C38]">
            La tranquilidad de llegar a casa y cenar sin estrés está al alcance de un toque.
          </p>
        </div>

        {/* CTA 3 */}
        <div className="w-full max-w-md mx-auto">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-[#D9532F] hover:bg-[#C44522] text-white font-black text-base sm:text-lg px-8 py-4.5 rounded-full shadow-xl shadow-[#D9532F]/25 hover:shadow-2xl active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Acceder al Radar y resolver mis cenas</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-xs text-[#527263] font-semibold mt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Pago único de $5 USD · Garantía incondicional de 7 días</span>
          </p>
        </div>
      </div>
    </section>
  );
};
