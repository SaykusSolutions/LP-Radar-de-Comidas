import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

export const CierreSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-neutral-900 py-12 sm:py-20 border-b border-[#E8E4DA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider mb-4">
          La decisión de hoy
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-6 leading-tight break-words [text-wrap:balance]">
          TIENES DOS CAMINOS HOY
        </h2>

        {/* 3 lines contrasting the 2 choices */}
        <div className="space-y-4 text-base sm:text-xl font-medium text-neutral-700 leading-relaxed mb-8 max-w-2xl mx-auto">
          <p className="text-[#FF5722] font-bold">
            Seguir igual significa otra noche llegando cansada a casa con hambre frente a la nevera abierta.
          </p>
          <p>
            O puedes tener en tu teléfono la herramienta que decide tu comida en tres minutos con lo que ya tienes.
          </p>
          <p className="font-black text-neutral-900">
            La tranquilidad de abrir la puerta y cenar sin estrés está a un toque de distancia.
          </p>
        </div>

        {/* CTA 3 */}
        <div className="w-full max-w-md mx-auto">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#EA580C] hover:from-[#F4511E] hover:to-[#C2410C] active:scale-[0.98] text-white font-black text-base sm:text-lg px-8 py-5 rounded-full shadow-2xl shadow-[#FF5722]/35 transition-all cursor-pointer group"
          >
            <span>Acceder al Radar + 4 Bonos por $4,99 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Sellos de garantía y micro-copy de entrega inmediata pegados al botón */}
          <TrustMicrocopy theme="warm" />
        </div>
      </div>
    </section>
  );
};
