import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const UrgenciaSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-gradient-to-b from-[#FFF7F2] via-[#FFFBF8] to-[#FAF6EE] text-neutral-900 py-10 sm:py-20 border-b border-[#F4DEC8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFE8D6] text-[#C2410C] text-xs font-black uppercase tracking-widest mb-6 border border-[#FED7AA]">
          <Flame className="w-4 h-4 text-[#EA580C] shrink-0" />
          <span>El costo real de esperar</span>
        </div>

        {/* Copy Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-6 sm:mb-8 leading-tight break-words [text-wrap:balance]">
          EL COSTO DE OTRA NOCHE SIN DECIDIR
        </h2>

        {/* Bloque 8: Urgencia real en presente (hasta 60 palabras) */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200 shadow-xl shadow-orange-950/5 mb-8 sm:mb-10 text-left sm:text-center relative">
          <p className="text-base sm:text-xl font-medium text-neutral-700 leading-relaxed break-words mb-4">
            Cada noche que pospones esta solución, repites el mismo desgaste. Pierdes cuarenta minutos dudando frente al refrigerador. Gastas dinero en envíos de comida grasosa y tiras alimentos frescos que compraste con esfuerzo.
          </p>
          <p className="text-base sm:text-lg font-black text-[#C2410C] leading-relaxed break-words">
            El desorden en tu cocina te cuesta dinero y tranquilidad cada día que lo dejas pasar.
          </p>
        </div>

        {/* Direct Hotmart Conversion Link */}
        <div className="w-full max-w-md mx-auto">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] text-white font-black text-base sm:text-lg px-8 py-4.5 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-2xl active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Eliminar el estrés de cocinar por $4,99 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Sellos de garantía y micro-copy de entrega inmediata pegados al botón */}
          <TrustMicrocopy theme="warm" />
        </div>

      </div>
    </section>
  );
};
