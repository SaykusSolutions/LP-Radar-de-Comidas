import React, { useState } from 'react';
import fridgeFrictionImg from '../assets/images/fridge_friction_kitchen_1792819343931.jpg';

export const BloqueoSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(fridgeFrictionImg);

  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#EAF1E9] text-[#174C38] py-10 sm:py-20 border-b border-[#D8E3D6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Visual Editorial Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full max-w-full">
            <div className="relative rounded-3xl overflow-hidden border border-[#D5E1D3] shadow-sm bg-white w-full">
              <img
                src={imgSrc}
                alt="Mujer en la cocina abriendo la nevera para preparar comida"
                onError={() => {
                  // Fallback for static hosting / GitHub pages / public assets directory
                  if (imgSrc !== '/assets/images/fridge_friction_kitchen_1792819343931.jpg') {
                    setImgSrc('/assets/images/fridge_friction_kitchen_1792819343931.jpg');
                  }
                }}
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
              LA PARÁLISIS DE LA NEVERA
            </h2>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg font-normal leading-relaxed text-[#2B4B3D]">
              <p className="break-words">
                Llegas a casa con el cuerpo molido y la cabeza agotada. Abres la nevera con hambre y sientes frustración: no hay nada listo y pensar una receta se siente como un castigo.
              </p>

              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E1D3] shadow-xs text-[#174C38]">
                <p className="font-semibold text-[#174C38] break-words">
                  Este bloqueo tiene nombre: <span className="text-[#174C38] font-black underline decoration-[#D97757] decoration-2">Fatiga de Decisión Nocturna</span>. Tu cerebro tomó cientos de decisiones durante el día y colapsa cuando debe inventar una cena con lo que encuentra.
                </p>
              </div>

              <p className="break-words">
                Los menús de internet fallan porque exigen ingredientes que no tienes. No es falta de fuerza de voluntad: el método tradicional te obliga a pensar cuando menos energía tienes.
              </p>

              {/* Bloque 6: La Solución */}
              <div className="p-5 rounded-2xl bg-[#DFE9DE] border border-[#CCDCCD] text-xs sm:text-base text-[#174C38] font-medium space-y-2">
                <span className="font-black text-[#174C38] block text-sm sm:text-base uppercase tracking-wide">
                  Cómo Funciona: ALGORITMO DE DESPENSA INVERSA
                </span>
                <p className="leading-relaxed">
                  Tú marcas en la pantalla tres ingredientes que ya tienes en casa. El sistema descarta recetas complicadas y calcula tres combinaciones directas en segundos. Recibes platos reales para cocinar hoy con tus propios tiempos. Sin compras de último momento. Sin recetas de chef imposibles.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
