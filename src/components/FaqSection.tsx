import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: "¿Puedo buscar recetas gratis en internet?",
      answer: "Sí, pero en internet pierdes 45 minutos buscando en blogs llenos de anuncios e ingredientes exóticos que no tienes. Con Radar de Comidas empiezas directamente con lo que ya guardas en tu nevera y en 3 minutos estás cocinando.",
    },
    {
      question: "¿Y si las opciones sugeridas no me gustan?",
      answer: "Pides otras tres ideas con un solo toque al instante. El sistema baraja combinaciones diferentes de inmediato hasta encontrar el plato exacto que te apetezca hoy.",
    },
    {
      question: "¿Será complicado usar la mini-app en mi celular?",
      answer: "Cero descargas y cero registros tediosos. Abres el enlace privado directamente en el navegador de tu teléfono, tocas 3 ingredientes que tengas a mano y en 10 segundos tienes tu plato listo.",
    },
    {
      question: "¿Realmente vale la pena pagar $4,99 USD?",
      answer: "Se paga solo la primera noche que evitas pedir delivery por puro cansancio mental o que salvas verduras que iban a pudrirse al fondo del refrigerador.",
    },
    {
      question: "¿Cómo recibo el acceso después del pago?",
      answer: "Recibes un correo electrónico automático de Hotmart en segundos con tu acceso vitalicio a la mini-app y a los cuatro bonos interactivos.",
    },
    {
      question: "¿Hay cobros mensuales o suscripciones ocultas?",
      answer: "Ninguno. Pagas $4,99 USD una sola vez y la herramienta es tuya para siempre con todas las actualizaciones futuras incluidas.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-full overflow-x-clip bg-white text-neutral-900 py-12 sm:py-20 border-b border-[#E8E4DA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FF5722] mb-2">
            Respuestas Claras
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 break-words [text-wrap:balance]">
            Preguntas Frecuentes
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-[#FF5722] to-amber-400 mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4 w-full max-w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 w-full max-w-full overflow-hidden ${
                  isOpen 
                    ? 'border-amber-200 bg-[#FAF9F5] shadow-sm' 
                    : 'border-neutral-200 bg-white hover:bg-[#FAF9F5]'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left cursor-pointer transition-colors"
                >
                  <span className="text-sm sm:text-lg font-bold text-neutral-900 leading-snug break-words">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen 
                        ? 'rotate-180 bg-gradient-to-r from-[#FF5722] to-[#EA580C] text-white shadow-sm' 
                        : 'bg-neutral-100 text-neutral-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-base font-normal leading-relaxed text-neutral-700 border-t border-neutral-100 break-words">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
