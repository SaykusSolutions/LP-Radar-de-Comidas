import React from 'react';

export const BloqueoSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-full overflow-hidden bg-[#EAF1E9] text-[#174C38] py-14 sm:py-24 border-b border-[#D8E3D6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Visual Editorial Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full max-w-full">
            <div className="relative rounded-3xl overflow-hidden border border-[#D5E1D3] shadow-sm bg-white w-full">
              <img
                src="/src/assets/images/fridge_friction_kitchen_1792819343931.jpg"
                alt="Mujer en la cocina abriendo la nevera para preparar comida"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <div className="p-3.5 sm:p-4 bg-white border-t border-[#E3EDE1]">
                <p className="text-[11px] sm:text-xs font-semibold text-[#446658] break-words">
                  La fricción no es falta de voluntad: es parálisis por decisión cuando el hambre y el tiempo apremian.
                </p>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center w-full max-w-full">
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#D97757] shrink-0" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#D97757]">
                El problema real
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-[#174C38] mb-5 sm:mb-8 leading-tight break-words [text-wrap:balance]">
              EL BLOQUEO DE ABRIR LA NEVERA Y NO SABER QUÉ HACER
            </h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg font-normal leading-relaxed text-[#2B4B3D]">
              <p className="break-words">
                Llega la hora de comer. Tienes hambre, poco tiempo y varias cosas en la cocina, pero ninguna parece convertirse en una comida fácil.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E1D3] shadow-xs text-[#174C38]">
                <p className="font-semibold text-[#174C38] break-words">
                  Ese atasco es la <span className="text-[#174C38] font-black underline decoration-[#D97757] decoration-2">Fricción de la Próxima Comida</span>: demasiadas decisiones justo cuando necesitas una opción concreta.
                </p>
              </div>

              <p className="break-words">
                Los menús cerrados no siempre consideran tus gustos, presupuesto o día real. No es falta de voluntad; muchas veces, el plan simplemente no encaja.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
