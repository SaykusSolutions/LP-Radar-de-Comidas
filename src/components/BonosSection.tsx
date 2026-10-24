import React from 'react';
import { Gift, Zap, Repeat, ShoppingCart, HeartHandshake } from 'lucide-react';

interface BonoItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  originalPrice: string;
  image: string;
  icon: React.ReactNode;
}

export const BonosSection: React.FC = () => {
  const bonos: BonoItem[] = [
    {
      id: 1,
      title: "Bono 1: Plato Express",
      subtitle: "Cuando tienes poco tiempo y ninguna idea a mano.",
      description: "Indica cuánto tiempo tienes y recibe opciones acordes a ese límite.",
      originalPrice: "USD 7",
      image: "/assets/aistudio/bono-plato-express-producto_c7fdae47.webp",
      icon: <Zap className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 2,
      title: "Bono 2: Sustituidor de Ingredientes",
      subtitle: "Te falta algo y el menú deja de encajar.",
      description: "Selecciona el ingrediente que no tienes y revisa alternativas culinarias para adaptar la receta.",
      originalPrice: "USD 5",
      image: "/assets/aistudio/bono-sustituidor-producto_52e4bb4d.webp",
      icon: <Repeat className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 3,
      title: "Bono 3: Lista Breve",
      subtitle: "Entrar a comprar sin saber qué falta complica la semana.",
      description: "Marca las opciones que elegiste y genera una lista de compra breve con sus ingredientes.",
      originalPrice: "USD 4",
      image: "/assets/aistudio/bono-lista-breve-producto_57279b5e.webp",
      icon: <ShoppingCart className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 4,
      title: "Bono 4: Reinicio Amable",
      subtitle: "Un día distinto no borra tus decisiones anteriores.",
      description: "Responde un breve flujo interactivo y elige una acción cotidiana para retomar tu rutina, sin compensaciones ni castigos.",
      originalPrice: "USD 5",
      image: "/assets/aistudio/bono-reinicio-amable-producto_60ae48bf.webp",
      icon: <HeartHandshake className="w-4 h-4 text-[#174C38]" />,
    },
  ];

  return (
    <section id="bonos" className="relative w-full max-w-full overflow-hidden bg-[#F6F8F3] text-[#174C38] py-12 sm:py-20 border-b border-[#E3E9DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97757]" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#D97757]">
              Recursos de Regalo Exclusivos
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] mb-3 sm:mb-4 break-words [text-wrap:balance]">
            4 Bonos Incluidos Sin Costo Adicional
          </h2>
          <p className="text-xs sm:text-base font-medium text-[#466759] break-words">
            Herramientas complementarias para blindar tu rutina contra cualquier imprevisto.
          </p>
        </div>

        {/* 4 Bonos Grid with Compact, Elegant Mockup Images */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full max-w-full">
          {bonos.map((bono) => (
            <div
              key={bono.id}
              className="p-4 sm:p-5 rounded-3xl bg-white border border-[#E0E7DC] shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 w-full max-w-full group"
            >
              {/* Scaled & Compact Product Mockup Image */}
              <div className="relative w-28 sm:w-32 h-28 sm:h-32 shrink-0 rounded-2xl overflow-hidden bg-[#FBFDFB] border border-[#E5EDE3] p-1.5 flex items-center justify-center shadow-xs">
                <img
                  src={bono.image}
                  alt={bono.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-1.5 right-1.5 bg-[#174C38] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow-xs">
                  $0
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col justify-between min-w-0 text-center sm:text-left w-full">
                <div>
                  {/* Title & Strikethrough Price */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-sm sm:text-base font-black text-[#174C38] leading-snug break-words">
                      {bono.title}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#174C38] bg-[#E8EFE6] px-2 py-0.5 rounded-full whitespace-nowrap">
                      Totalmente Gratis
                    </span>
                  </div>

                  {/* Price comparison */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="text-[11px] font-bold text-neutral-400 line-through">
                      Normal: {bono.originalPrice}
                    </span>
                    <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200/80">
                      HOY $0 REGALO
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs font-bold text-[#1E3F31] mb-1 break-words">
                    {bono.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs font-normal text-[#466759] leading-relaxed break-words">
                    {bono.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-3 pt-2.5 border-t border-[#EAEFE8] flex items-center justify-between text-[10px] sm:text-[11px] text-[#527263] font-medium">
                  <span>Acceso en tu teléfono</span>
                  <span className="text-[#174C38] font-black">100% Incluido</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Gift Value Stacking Summary Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#E8EFE6] border border-[#D5E1D2] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left w-full max-w-full">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#174C38] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Gift className="w-4 h-4 text-emerald-200" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#174C38]">
                Valor acumulado de los 4 bonos de regalo:
              </p>
              <p className="text-xs sm:text-sm font-semibold text-[#3B5B4E] break-words">
                Suman <span className="line-through font-bold text-neutral-500">USD 21</span> en contenido que te llevas <span className="font-black text-[#174C38]">GRATIS</span> hoy con Radar de Comidas.
              </p>
            </div>
          </div>

          <span className="text-xs font-black text-[#174C38] bg-white px-3.5 py-1.5 rounded-full border border-[#D0DED0] shrink-0 whitespace-nowrap shadow-xs">
            Regalo 100% Sin Costo
          </span>
        </div>

      </div>
    </section>
  );
};
