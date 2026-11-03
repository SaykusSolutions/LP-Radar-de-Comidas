import React from 'react';

export const IdentificasSection: React.FC = () => {
  const points = [
    "Llegas cansada a casa tras un día largo y todavía tienes que inventar qué vas a cocinar.",
    "Abres la nevera con hambre, ves varios ingredientes sueltos y te bloqueas sin saber qué armar.",
    "Buscas recetas en redes sociales, pero te exigen ingredientes que no tienes o técnicas complicadas.",
    "Terminas gastando de más en delivery o repitiendo siempre lo mismo por puro agotamiento mental.",
  ];

  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-neutral-900 py-10 sm:py-20 border-b border-[#E8E1D2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Headers */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-black uppercase tracking-widest text-[#EA580C] mb-2">
            Diagnóstico de Rutina
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 break-words [text-wrap:balance]">
            ¿ESTO ES PARA MÍ?
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base font-medium text-neutral-600 max-w-xl mx-auto break-words">
            Revisa si reconoces alguno de estos cuatro síntomas al llegar a casa.
          </p>
        </div>

        {/* 4 Pain Points with → arrow */}
        <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-6 mb-8 sm:mb-10 w-full max-w-full">
          {points.map((text, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-xs hover:border-[#EA580C]/40 hover:shadow-md transition-all w-full max-w-full"
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#FFF3EA] text-[#EA580C] font-black text-base sm:text-lg shrink-0 mt-0.5 border border-[#FED7AA]">
                →
              </div>
              <p className="text-sm sm:text-lg font-semibold leading-relaxed text-neutral-800 break-words">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy note closing */}
        <div className="text-center p-4 sm:p-5 rounded-2xl bg-[#FFF7F4] border-2 border-orange-200 max-w-2xl mx-auto shadow-xs">
          <p className="text-xs sm:text-sm font-black text-neutral-900 break-words">
            Si respondiste que sí a 2 o más, no necesitas ser chef: necesitas que una parte de tu día sea más sencilla.
          </p>
        </div>

      </div>
    </section>
  );
};
