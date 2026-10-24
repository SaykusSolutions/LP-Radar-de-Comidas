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
      question: "¿Cómo accedo?",
      answer: "Inmediatamente después de completar tu pago seguro de 11 USD a través de Hotmart®, recibirás un correo electrónico automático con tu enlace de acceso directo a la mini-app. Podrás abrirla en cualquier navegador de tu celular, tablet o computador sin descargas pesadas.",
    },
    {
      question: "¿Es un curso en video?",
      answer: "No. Radar de Comidas es una mini-app interactiva diseñada para la acción rápida. No tienes que ver horas de videos teóricos ni aprender conceptos complicados. Solo entras, marcas lo que tienes en tu cocina y en 3 minutos tienes tu comida resuelta.",
    },
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Desde tu próxima comida. Tan pronto abras la mini-app la primera vez que tengas hambre y no sepas qué hacer, verás tres opciones concretas en 3 minutos, eliminando de inmediato la parálisis de decisión.",
    },
    {
      question: "¿Funciona en el celular?",
      answer: "Sí, está optimizada al 100% para celulares (iPhone y Android). Puedes usarla directamente en tu navegador o guardarla como icono en tu pantalla de inicio con un toque, funcionando con la rapidez de una aplicación nativa sin ocupar espacio en tu memoria.",
    },
    {
      question: "¿Qué pasa si me falta un ingrediente?",
      answer: "Precisamente para eso creamos el Bono 2: Sustituidor de Ingredientes. Si una opción te pide algo que no tienes en la despensa, el sistema te muestra alternativas culinarias sencillas con lo que sí hay en tu cocina para que nunca te quedes a mitad de camino.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative w-full max-w-full overflow-hidden bg-white text-[#174C38] py-14 sm:py-24 border-b border-[#E3E9DF]">
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
