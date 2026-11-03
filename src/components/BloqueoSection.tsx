import React, { useState } from 'react';
import fridgeFrictionImg from '../assets/images/fridge_friction_kitchen_1792819343931.jpg';

export const BloqueoSection: React.FC = () => {
  const [imgSrc, setImgSrc] = useState<string>(fridgeFrictionImg);

  return (
    <section className="relative w-full max-w-full overflow-x-clip bg-[#FAF6EE] text-neutral-900 py-10 sm:py-20 border-b border-[#E8DFCF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Visual Editorial Image */}
          <div className="lg:col-span-5 order-2 lg:order-1 w-full max-w-full">
            <div className="relative rounded-3xl overflow-hidden border border-neutral-200 shadow-lg bg-white w-full">
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
              
              {/* Daniela's archetype quote callout */}
              <div className="p-4 bg-gradient-to-r from-[#FFF7ED] to-[#FEF3C7] border-t border-amber-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EA580C] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                    D
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-black text-neutral-900 italic leading-snug">
                      “Llego cansada y todavía tengo que pensar qué voy a cocinar.”
                    </p>
                    <p className="text-[10px] text-amber-800 font-bold uppercase tracking-wider mt-0.5">
                      Daniela, 31 años · Trabaja y organiza sus comidas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center w-full max-w-full">
            
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-2 h-2 rounded-full bg-[#EA580C] shrink-0" />
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#EA580C]">
                El problema real
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-neutral-900 mb-5 sm:mb-8 leading-tight break-words [text-wrap:balance]">
              LA PARÁLISIS DE LA NEVERA
            </h2>

            {/* Scannable Breakdown: Anti-Fatigue Bullet Points */}
            <div className="space-y-4 text-xs sm:text-base font-medium text-neutral-700">
              
              {/* Highlight Diagnosis Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border-2 border-orange-200 shadow-xs text-neutral-900">
                <p className="font-bold text-neutral-900 text-sm sm:text-lg break-words leading-snug">
                  Tu bloqueo tiene nombre: <span className="underline decoration-[#EA580C] decoration-2 font-black">Fatiga de Decisión</span>.
                </p>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 font-normal">
                  Tu mente tomó cientos de decisiones durante el día y colapsa cuando debe inventar una cena con lo que encuentra en la nevera.
                </p>
              </div>

              {/* Three Crisp Pain Reality Bullets */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <span className="text-[#EA580C] font-black text-sm shrink-0">✕</span>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>El recetario tradicional falla:</strong> te exige compras caras de último minuto y preparaciones complejas cuando menos energía te queda.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <span className="text-[#EA580C] font-black text-sm shrink-0">✕</span>
                  <span className="text-xs sm:text-sm text-neutral-700">
                    <strong>No es falta de fuerza de voluntad:</strong> no quieres convertirte en chef, solo quieres que una parte de tu rutina sea más sencilla.
                  </span>
                </div>
              </div>

              {/* Bloque 6: La Solución en Viñetas Cortas */}
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border-2 border-neutral-200 space-y-2.5 shadow-xs">
                <span className="font-black text-emerald-800 block text-xs sm:text-sm uppercase tracking-wider">
                  El Antídoto: ALGORITMO DE DESPENSA INVERSA
                </span>
                <div className="space-y-2 text-xs sm:text-sm text-neutral-800">
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span><strong>Tú marcas:</strong> tres ingredientes que ya tienes en casa y tu tiempo.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span><strong>El sistema descarta:</strong> lo complicado y calcula tres opciones directas en segundos.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-600 font-black shrink-0">✓</span>
                    <span><strong>Recibes:</strong> comida rica para preparar hoy con tu tiempo real, sin recetas imposibles.</span>
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
