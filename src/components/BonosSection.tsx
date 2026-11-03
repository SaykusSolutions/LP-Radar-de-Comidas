import React from 'react';
import { Gift, Zap, Repeat, ShoppingCart, HeartHandshake, ArrowRight } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10&offDiscount=RADAR&bid=1793722168849";

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
      title: "Bono 1: Generador Exprés de 10 Minutos",
      subtitle: "Mata la objeción de tiempo y energía.",
      description: "Mini-app interactiva con combinaciones de armado ultra rápido para días de cansancio extremo.",
      originalPrice: "USD 12",
      image: "/assets/aistudio/bono-plato-express-producto_c7fdae47.webp",
      icon: <Zap className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 2,
      title: "Bono 2: Calculadora de Rescate de Sobras",
      subtitle: "Mata la objeción del dinero tirado.",
      description: "Herramienta que cruza sobras de comida cocida y genera un plato nuevo antes de que se desperdicien.",
      originalPrice: "USD 10",
      image: "/assets/aistudio/bono-sustituidor-producto_52e4bb4d.webp",
      icon: <Repeat className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 3,
      title: "Bono 3: Simulador de Sustitutos de Cocina",
      subtitle: "Mata la objeción de ingredientes faltantes.",
      description: "Buscador interactivo que te muestra al instante con qué reemplazar cualquier ingrediente faltante.",
      originalPrice: "USD 9",
      image: "/assets/aistudio/bono-lista-breve-producto_57279b5e.webp",
      icon: <ShoppingCart className="w-4 h-4 text-[#174C38]" />,
    },
    {
      id: 4,
      title: "Bono 4: Checklist Interactivo de Despensa Base",
      subtitle: "Mata la duda de no saber comprar.",
      description: "Generador automático de lista mínima para comprar lo justo según tu presupuesto semanal.",
      originalPrice: "USD 7",
      image: "/assets/aistudio/bono-reinicio-amable-producto_60ae48bf.webp",
      icon: <HeartHandshake className="w-4 h-4 text-[#174C38]" />,
    },
  ];

  return (
    <section id="bonos" className="relative w-full max-w-full overflow-x-clip bg-white text-neutral-900 py-12 sm:py-20 border-b border-[#E8DFC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-2">
            <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#EA580C]" />
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#EA580C]">
              Recursos de Regalo Exclusivos
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 mb-3 sm:mb-4 break-words [text-wrap:balance]">
            4 Bonos Incluidos Sin Costo Adicional
          </h2>
          <p className="text-xs sm:text-base font-medium text-neutral-600 break-words">
            Herramientas complementarias para blindar tu rutina contra cualquier imprevisto al llegar a casa.
          </p>
        </div>

        {/* 4 Bonos Grid with Compact, Elegant Mockup Images */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 w-full max-w-full">
          {bonos.map((bono) => (
            <div
              key={bono.id}
              className="p-4 sm:p-5 rounded-3xl bg-[#FFFDF9] border border-neutral-200 shadow-xs hover:border-[#EA580C]/40 hover:shadow-lg transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 w-full max-w-full group"
            >
              {/* Scaled & Compact Product Mockup Image */}
              <div className="relative w-28 sm:w-32 h-28 sm:h-32 shrink-0 rounded-2xl overflow-hidden bg-white border border-neutral-200 p-1.5 flex items-center justify-center shadow-xs">
                <img
                  src={bono.image}
                  alt={bono.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-1.5 right-1.5 bg-[#EA580C] text-white text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full shadow-xs">
                  $0 HOY
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-1 flex flex-col justify-between min-w-0 text-center sm:text-left w-full">
                <div>
                  {/* Title & Strikethrough Price */}
                  <div className="flex flex-wrap items-center justify-center sm:justify-between gap-1.5 mb-1">
                    <h3 className="text-sm sm:text-base font-black text-neutral-900 leading-snug break-words">
                      {bono.title}
                    </h3>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Totalmente Gratis
                    </span>
                  </div>

                  {/* Price comparison */}
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="text-[11px] font-bold text-neutral-400 line-through">
                      Normal: {bono.originalPrice}
                    </span>
                    <span className="text-[10px] font-black text-[#C2410C] bg-[#FFF3EA] px-1.5 py-0.2 rounded border border-[#FED7AA]">
                      HOY $0 REGALO
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="text-xs font-bold text-neutral-800 mb-1 break-words">
                    {bono.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs font-normal text-neutral-600 leading-relaxed break-words">
                    {bono.description}
                  </p>
                </div>

                {/* Bottom detail */}
                <div className="mt-3 pt-2.5 border-t border-neutral-200 flex items-center justify-between text-[10px] sm:text-[11px] text-neutral-500 font-medium">
                  <span>Acceso directo en tu teléfono</span>
                  <span className="text-neutral-900 font-black">100% Incluido</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Gift Value Stacking Summary Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF7ED] via-[#FEF3C7] to-neutral-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left w-full max-w-full shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#EA580C] text-white flex items-center justify-center shrink-0 shadow-xs">
              <Gift className="w-5 h-5 text-amber-100" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-wider text-neutral-900">
                Valor acumulado de los 4 bonos de regalo:
              </p>
              <p className="text-xs sm:text-sm font-semibold text-neutral-700 break-words">
                Suman <span className="line-through font-bold text-neutral-400">USD 38</span> en herramientas que te llevas <span className="font-black text-[#EA580C]">GRATIS</span> hoy con Radar de Comidas.
              </p>
            </div>
          </div>

          <span className="text-xs font-black text-[#C2410C] bg-white px-3.5 py-1.5 rounded-full border border-[#FED7AA] shrink-0 whitespace-nowrap shadow-xs">
            Regalo 100% Sin Costo
          </span>
        </div>

        {/* High Conversion Action after seeing the 4 bonuses */}
        <div className="mt-8 text-center max-w-lg mx-auto">
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] text-white font-black text-sm sm:text-base px-8 sm:px-10 py-4 rounded-full shadow-xl shadow-orange-500/25 hover:shadow-2xl active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Quiero la mini-app y los 4 bonos por $4,99 USD</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Sellos gráficos de garantía y micro-copy de entrega inmediata pegados al botón */}
          <TrustMicrocopy theme="light" />
        </div>

      </div>
    </section>
  );
};
