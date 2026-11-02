import React from 'react';

export const IdentificasSection: React.FC = () => {
  const points = [
    "Abres el refrigerador con hambre y te quedas mirando fijo sin saber qué preparar.",
    "Terminas gastando de más en comida rápida por puro agotamiento mental.",
    "Tiras verduras podridas cada fin de semana con culpa por desperdiciar dinero.",
    "Intentaste seguir menús estrictos de internet pero te exigían compras caras y tiempo que no tienes.",
  ];

  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#FAF6F0] text-[#174C38] py-10 sm:py-20 border-b border-[#ECE5D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Headers */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D97757] mb-2">
            Evaluación Rápida
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            ¿ESTO ES PARA MÍ?
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base font-medium text-[#4E6A5E] max-w-xl mx-auto break-words">
            Revisa si reconoces alguno de estos cuatro síntomas en tu rutina cotidiana.
          </p>
        </div>

        {/* 4 Pain Points with → arrow */}
        <div className="grid sm:grid-cols-2 gap-3.5 sm:gap-6 mb-8 sm:mb-10 w-full max-w-full">
          {points.map((text, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-[#E8E1D3] shadow-xs hover:shadow-md transition-shadow w-full max-w-full"
            >
              <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F3EDE2] text-[#D97757] font-black text-base sm:text-lg shrink-0 mt-0.5">
                →
              </div>
              <p className="text-sm sm:text-lg font-medium leading-relaxed text-[#28473B] break-words">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Empathy note closing */}
        <div className="text-center p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E8E1D3] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-black text-[#174C38] break-words">
            Si respondiste que sí a 3 o más, sigue leyendo.
          </p>
        </div>

      </div>
    </section>
  );
};
