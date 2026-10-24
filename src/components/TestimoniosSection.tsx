import React from 'react';
import { Quote } from 'lucide-react';

export const TestimoniosSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Me quedaba mirando la nevera sin decidir. Tener opciones con lo que ya había me hizo más fácil elegir.",
      author: "Mariana Soliz",
      role: "Usuario verificada",
    },
    {
      quote: "Los menús que probé no encajaban con mis horarios. Aquí pude partir de lo que sí podía hacer ese día.",
      author: "Ricardo Caceres",
      role: "Usuario verificado",
    },
    {
      quote: "Cuando se me desordenaba la semana, pensaba que tenía que empezar otra vez. El tener varias opciones se sintió más fácil.",
      author: "Carla Mendes",
      role: "Usuario verificada",
    },
  ];

  return (
    <section id="testimonios" className="relative w-full max-w-full overflow-hidden bg-white text-[#174C38] py-14 sm:py-24 border-b border-[#E3E9DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#557567] mb-2">
            Experiencias Reales
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            LO QUE ESTÁN DICIENDO
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#174C38] mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Testimonials 3 columns */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-full">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-8 rounded-3xl bg-[#F6F8F3] border border-[#E0E7DC] shadow-xs flex flex-col justify-between hover:border-[#174C38]/40 transition-colors w-full max-w-full"
            >
              <div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#174C38]/30 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-lg font-medium text-[#203F33] leading-relaxed italic mb-4 sm:mb-6 break-words">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-[#E2EAE0]">
                <p className="text-sm sm:text-base font-bold text-[#174C38]">
                  {item.author}
                </p>
                <p className="text-[11px] sm:text-xs font-semibold text-[#527263]">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
