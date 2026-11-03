import React from 'react';
import { Star, CheckCircle2, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  role: string;
  avatarBg: string;
  initials: string;
  highlight: string;
  quote: string;
  timeAgo: string;
}

export const TestimoniosSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Daniela Morales",
      location: "Santiago, Chile",
      role: "31 años · Trabaja y organiza sus comidas",
      avatarBg: "bg-[#EA580C]",
      initials: "DM",
      highlight: "Me ahorra media hora de estrés cada noche",
      quote: "Llego del trabajo cansada y todavía tenía que pensar qué cocinar. Odiaba buscar recetas en internet porque me pedían ingredientes que no tenía. Con Radar marco lo que veo en la nevera y en 3 minutos sé exactamente qué cenar. Es un alivio total.",
      timeAgo: "Hace 3 días",
    },
    {
      name: "Ricardo Caceres",
      location: "Ciudad de México",
      role: "Ingeniero de software",
      avatarBg: "bg-[#0B3B2C]",
      initials: "RC",
      highlight: "Dejé de tirar comida podrida",
      quote: "Siempre compraba verduras con buenas intenciones y terminaban podridas al fondo de la gaveta. Ahora marco lo que me va quedando y el algoritmo me da la receta exacta. Los 4,99 dólares se pagaron solos la primera noche.",
      timeAgo: "Hace 1 semana",
    },
    {
      name: "Mariana Soliz",
      location: "Madrid, España",
      role: "Diseñadora y madre de 2",
      avatarBg: "bg-[#15803D]",
      initials: "MS",
      highlight: "Ahorro más de 80€ al mes en delivery",
      quote: "Llegaba cansada del trabajo a las 7 de la tarde y terminaba pidiendo pizza por puro agotamiento mental. Con Radar de Comidas abro la app, marco los 3 ingredientes que veo y en 3 minutos sé qué cocinar sin complicarme.",
      timeAgo: "Hace 2 semanas",
    },
  ];

  return (
    <section id="testimonios" className="relative w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-neutral-900 py-10 sm:py-20 border-b border-[#E8DFC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header with High-Authority Rating Pill */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF3EA] border border-[#FED7AA] text-[#C2410C] text-xs font-black uppercase tracking-wider mb-3 shadow-xs">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span>Calificación 4.9/5 · Más de 2,400 usuarios activos</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-neutral-900 break-words [text-wrap:balance]">
            LO QUE DICEN QUIENES YA LO USAN CADA NOCHE
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-neutral-600 max-w-xl mx-auto">
            Personas reales que cambiaron la angustia de abrir la nevera por tres opciones concretas en tres minutos.
          </p>
        </div>

        {/* 3 Columns Grid of High-Engagement Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-full">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-3xl bg-white border border-neutral-200 hover:border-[#EA580C]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Stars and Verified Purchase Tag */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    Compra verificada
                  </span>
                </div>

                {/* Highlight Badge */}
                <div className="mb-3">
                  <span className="inline-block text-xs font-black text-[#C2410C] bg-[#FFF3EA] px-2.5 py-1 rounded-lg border border-[#FED7AA]">
                    "{item.highlight}"
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-sm sm:text-base font-normal text-neutral-700 leading-relaxed mb-6">
                  {item.quote}
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-xs`}>
                  {item.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-black text-neutral-900 leading-tight break-words">
                    {item.name}
                  </p>
                  <p className="text-[11px] font-semibold text-neutral-500 leading-tight break-words">
                    {item.role} · {item.location}
                  </p>
                </div>
                <span className="text-[10px] text-neutral-400 font-medium shrink-0">
                  {item.timeAgo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Social Proof Stat Bar */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-[#FFFDF9] via-[#FAF7F0] to-[#F2FAF4] border-2 border-emerald-200/70 flex flex-wrap items-center justify-around gap-4 text-center shadow-sm">
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#EA580C] tabular-nums">3 min</p>
            <p className="text-[11px] sm:text-xs font-bold text-neutral-700">Tiempo promedio para decidir</p>
          </div>
          <div className="h-8 w-px bg-emerald-200 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-emerald-800 tabular-nums">$95 USD</p>
            <p className="text-[11px] sm:text-xs font-bold text-neutral-700">Ahorro mensual estimado en comida</p>
          </div>
          <div className="h-8 w-px bg-emerald-200 hidden sm:block" />
          <div>
            <p className="text-2xl sm:text-3xl font-black text-[#0B3B2C] tabular-nums">100%</p>
            <p className="text-[11px] sm:text-xs font-bold text-neutral-700">Garantía de satisfacción 7 días</p>
          </div>
        </div>

      </div>
    </section>
  );
};
