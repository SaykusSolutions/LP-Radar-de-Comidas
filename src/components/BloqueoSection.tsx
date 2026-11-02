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

            {/* Scannable Breakdown: Anti-Fatigue Bullet Points */}
            <div className="space-y-4 text-xs sm:text-base font-medium text-[#2B4B3D]">
              
              {/* Highlight Diagnosis Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#D5E1D3] shadow-xs text-[#174C38]">
                <p className="font-bold text-[#174C38] text-sm sm:text-lg break-words leading-snug">
                  Tu bloqueo tiene nombre: <span className="underline decoration-[#D97757] decoration-2 font-black">Fatiga de Decisión Nocturna</span>.
                </p>
                <p className="text-xs sm:text-sm text-[#446556] mt-1.5 font-normal">
                  Tu mente tomó cientos de decisiones durante el día y colapsa cuando debe inventar una cena con lo que encuentra en la nevera.
                </p>
              </div>

              {/* Three Crisp Pain Reality Bullets */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-[#DEE7DC]">
                  <span className="text-[#D9532F] font-black text-sm shrink-0">✕</span>
                  <span className="text-xs sm:text-sm text-[#274538]">
                    <strong>El recetario tradicional falla:</strong> te exige compras caras de último minuto y tiempo que no tienes.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/70 border border-[#DEE7DC]">
                  <span className="text-[#D9532F] font-black text-sm shrink-0">✕</span>
                  <span className="text-xs sm:text-sm text-[#274538]">
                    <strong>No es falta de fuerza de voluntad:</strong> es un método obsoleto que te obliga a pensar cuando menos energía te queda.
                  </span>
                </div>
              </div>

              {/* Bloque 6: La Solución en Viñetas Cortas */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#DFE9DE] border border-[#CCDCCD] space-y-2.5">
                <span className="font-black text-[#174C38] block text-xs sm:text-sm uppercase tracking-wider">
                  El Antídoto: ALGORITMO DE DESPENSA INVERSA
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-[#174C38]">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">✓</span>
                    <span><strong>Tú marcas:</strong> tres ingredientes que ya tienes en casa.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">✓</span>
                    <span><strong>El sistema descarta:</strong> lo complicado y calcula tres opciones directas en segundos.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">✓</span>
                    <span><strong>Recibes:</strong> comida rica para preparar hoy con tu tiempo real, sin recetas de chef imposibles.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
