import React from 'react';

export const IdentificasSection: React.FC = () => {
  const points = [
    "Abres la nevera y sigues sin saber qué preparar.",
    "Compraste un menú, pero no te gustan algunas comidas o no consigues los ingredientes.",
    "Te cansas de empezar de nuevo cada vez que cambia tu rutina.",
    "Quieres comer mejor sin reglas rígidas ni culpa.",
  ];

  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#FAF6F0] text-[#174C38] py-14 sm:py-24 border-b border-[#ECE5D9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Headers */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D97757] mb-2">
            ¿Esto es para mí?
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            ¿Te identificas con esto?
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base font-medium text-[#4E6A5E] max-w-xl mx-auto break-words">
            El obstáculo casi nunca eres tú. Es intentar encajar tu día en moldes imposibles.
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

        {/* Empathy note */}
        <div className="text-center p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E8E1D3] max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-bold text-[#174C38] break-words">
            Si respondiste sí a cualquiera de estos puntos, el Radar de Comidas fue pensado exactamente para ti.
          </p>
        </div>

      </div>
    </section>
  );
};
