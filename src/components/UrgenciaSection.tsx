import React, { useState, useEffect } from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q";

export const UrgenciaSection: React.FC = () => {
  // Dynamic countdown timer starting at 14 min 59 sec
  const [secondsLeft, setSecondsLeft] = useState<number>(14 * 60 + 59);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 14 * 60 + 59));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const formattedMin = String(minutes).padStart(2, '0');
  const formattedSec = String(seconds).padStart(2, '0');

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#FCF6EE] text-[#174C38] py-14 sm:py-24 border-b border-[#F0E5D5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Countdown Box */}
        <div className="inline-block p-4 sm:p-8 rounded-3xl bg-white border border-[#EADBCA] shadow-xs mb-8 sm:mb-10 w-full max-w-md overflow-hidden">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97757] shrink-0" />
            <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest text-[#D97757]">
              Oferta por tiempo limitado
            </span>
          </div>

          {/* Large Countdown Digits */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 my-2">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-6xl font-black text-[#174C38] tabular-nums tracking-wider bg-[#F8F3EC] px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-[#E6DCce]">
                {formattedMin}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7E695B] mt-1.5 sm:mt-2">
                MIN
              </span>
            </div>

            <span className="text-2xl sm:text-5xl font-black text-[#D97757] -mt-4 sm:-mt-6">:</span>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-6xl font-black text-[#174C38] tabular-nums tracking-wider bg-[#F8F3EC] px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border border-[#E6DCce]">
                {formattedSec}
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#7E695B] mt-1.5 sm:mt-2">
                SEG
              </span>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs font-semibold text-[#665448] mt-3 sm:mt-4">
            Precio promocional asegurado durante tu visita
          </p>
        </div>

        {/* Copy Headline */}
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#174C38] mb-5 sm:mb-6 leading-tight break-words [text-wrap:balance]">
          LA PRÓXIMA COMIDA NO ESPERA A QUE ENCUENTRES EL MENÚ PERFECTO
        </h2>

        {/* Copy Body Text */}
        <div className="space-y-3 sm:space-y-4 text-sm sm:text-xl font-medium text-[#38594B] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed break-words">
          <p>
            La hora de comer llega, incluso cuando sigues sin saber qué preparar.
          </p>
          <p>
            Cada decisión que se siente complicada suma cansancio a una rutina que ya intentas sostener.
          </p>
          <p className="font-bold text-[#174C38]">
            Resuelve la siguiente comida con lo que tienes, o vuelve a improvisar con hambre y prisa.
          </p>
        </div>

        {/* Direct Hotmart Conversion Link */}
        <div className="w-full">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#174C38] hover:bg-[#123C2C] text-white font-black text-sm sm:text-lg px-6 sm:px-12 py-3.5 sm:py-4 rounded-full shadow-md active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Garantizar acceso por 6 USD</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
};
