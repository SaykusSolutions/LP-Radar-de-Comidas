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
      question: "¿Tengo que saber cocinar para usar la mini-app?",
      answer: "No necesitas experiencia previa. El sistema genera combinaciones caseras muy simples pensadas para resolver con lo que tengas a mano.",
    },
    {
      question: "¿Necesito comprar ingredientes exóticos o caros?",
      answer: "No gastas en nada raro. La herramienta trabaja de forma inversa y parte exclusivamente de los alimentos básicos que ya guardas en tu casa.",
    },
    {
      question: "¿Tengo que pagar mensualidades o renovaciones?",
      answer: "No pagas nunca más. Es un pago único de 5 dólares que te da acceso de por vida a la herramienta y a los cuatro bonos.",
    },
    {
      question: "¿Cómo recibo el acceso después del pago?",
      answer: "Recibes un correo electrónico automático de inmediato con tu enlace privado. Puedes abrir la mini-app en cualquier celular o computador sin instalar programas pesados.",
    },
    {
      question: "¿Qué pasa si me falta un ingrediente de la lista sugerida?",
      answer: "Usas el Simulador de Sustitutos incluido en tus bonos. Te muestra opciones cotidianas para reemplazarlo al instante sin frenar tu preparación.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-full overflow-x-clip bg-white text-[#174C38] py-10 sm:py-20 border-b border-[#E3E9DF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#557567] mb-2">
            Respuestas Claras
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] break-words [text-wrap:balance]">
            Preguntas Frecuentes
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#174C38] mx-auto mt-3 sm:mt-4 rounded-full" />
        </div>

        {/* Accordions */}
        <div className="space-y-3 sm:space-y-4 w-full max-w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#E0E7DC] bg-[#F6F8F3] overflow-hidden transition-colors w-full max-w-full"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left cursor-pointer hover:bg-[#EEF3EC] transition-colors"
                >
                  <span className="text-sm sm:text-lg font-bold text-[#174C38] leading-snug break-words">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 bg-[#E0ECE0] text-[#174C38] transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#174C38] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-base font-normal leading-relaxed text-[#355547] border-t border-[#E3EAE0] break-words">
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
