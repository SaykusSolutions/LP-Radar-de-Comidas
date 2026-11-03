import React, { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  Check, 
  CheckCircle2, 
  Clock, 
  ChefHat, 
  Flame, 
  Gift, 
  Lock, 
  RefreshCw, 
  ShieldCheck, 
  Star, 
  Zap,
  ChevronDown
} from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';
import { ScarcityCounter } from './ScarcityCounter';
import fridgeFrictionImg from '../assets/images/fridge_friction_kitchen_1792819343931.jpg';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10&offDiscount=RADAR&bid=1793722168849";

interface MealRecipe {
  title: string;
  badge: string;
  time: string;
  description: string;
  steps: string[];
}

interface FaqItem {
  question: string;
  answer: string;
}

export const CartaDeVentas: React.FC = () => {
  // Simulator interactive state
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['Huevos', 'Aguacate', 'Tomate']);
  const [timeAvailable, setTimeAvailable] = useState<string>('15 min');
  const [cookingPreference, setCookingPreference] = useState<'cocinar' | 'listo'>('cocinar');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [imgSrc, setImgSrc] = useState<string>(fridgeFrictionImg);

  const availableIngredients = [
    'Huevos', 'Aguacate', 'Tomate', 'Pollo', 'Arroz', 'Atún', 'Pasta', 'Espinacas', 'Queso', 'Pan', 'Avena', 'Yogur'
  ];

  const toggleIngredient = (ing: string) => {
    if (selectedIngredients.includes(ing)) {
      if (selectedIngredients.length > 1) {
        setSelectedIngredients(selectedIngredients.filter(i => i !== ing));
      }
    } else {
      if (selectedIngredients.length < 5) {
        setSelectedIngredients([...selectedIngredients, ing]);
      } else {
        setSelectedIngredients([...selectedIngredients.slice(1), ing]);
      }
    }
  };

  const dynamicMeals = useMemo<MealRecipe[]>(() => {
    const list = selectedIngredients;
    const has = (item: string) => list.includes(item);
    const mainIng = list[0] || 'Ingrediente principal';
    const secondIng = list[1] || 'vegetales';
    const thirdIng = list[2] || 'aderezo';

    if (cookingPreference === 'listo') {
      return [
        {
          title: `Bowl fresco de ${mainIng} con ${secondIng} y ${thirdIng}`,
          badge: "Sin cocinar",
          time: "5 min",
          description: "Montaje rápido en frío sin ensuciar sartenes, ideal para cuando tienes cero ganas de cocinar.",
          steps: [
            `Corta en cubos o láminas ${mainIng} y ${secondIng}.`,
            `Mezcla en un cuenco amplio y sazona con aceite de oliva virgen y sal.`,
            `Añade ${thirdIng} para darle el toque crujiente o cremoso final.`
          ]
        },
        {
          title: `Tosta rápida de ${mainIng} con láminas de ${secondIng}`,
          badge: "Muy ligero",
          time: "7 min",
          description: "Aprovecha lo que ya tienes listo para armar un plato reconfortante y saciante en minutos.",
          steps: [
            "Coloca una base de pan o galletas integrales.",
            `Unta o coloca ${mainIng} como base generosa.`,
            `Corona con ${secondIng} y semillas o pimienta al gusto.`
          ]
        },
        {
          title: `Ensalada templada express con base de ${secondIng}`,
          badge: "Fácil digestión",
          time: "6 min",
          description: "Combinación fresca y balanceada con ingredientes cotidianos que no te dejan pesada.",
          steps: [
            `Lava y trocea ${secondIng} directamente en el plato.`,
            `Incorpora ${mainIng} y añade el toque de ${thirdIng}.`,
            "Aliña con limón y aceite de oliva y disfruta de inmediato."
          ]
        }
      ];
    }

    if (has('Huevos') && (has('Aguacate') || has('Tomate') || has('Pan'))) {
      return [
        {
          title: "Tosta rústica de aguacate cremoso con huevo al punto",
          badge: "Favorito del día",
          time: timeAvailable,
          description: "Calidez reconfortante: pan tostado con aguacate aplastado, limón y huevo cocinado a la plancha.",
          steps: [
            "Tuesta el pan mientras calientas una sartén antiadherente con una gota de aceite.",
            "Aplasta el aguacate con sal y limón, y haz el huevo con la yema suave.",
            "Monta todo caliente y decora con rodajas finas de tomate."
          ]
        },
        {
          title: "Omelette esponjoso con tomate fresco y toque verde",
          badge: "Proteico y saciante",
          time: "10 min",
          description: "Dos huevos batidos con mimo y rellenos de dados de tomate y hierbas que tienes a mano.",
          steps: [
            "Bate los huevos con sal marina y pimienta.",
            "Vierte en sartén caliente y cocina 3 minutos sin quemar.",
            "Rellena con el tomate y dobla con suavidad antes de servir."
          ]
        },
        {
          title: "Revuelto campesino en 6 minutos",
          badge: "Cero complicaciones",
          time: "6 min",
          description: "Salteado rápido de tus ingredientes en una sola sartén sin ensuciar la cocina.",
          steps: [
            "Dora los vegetales troceados 2 minutos en la sartén.",
            "Rompe los huevos directamente encima y revuelve a fuego medio.",
            "Retira cuando siga jugoso y acompaña con lo que tengas en la despensa."
          ]
        }
      ];
    }

    if (has('Pollo') || has('Arroz') || has('Pasta')) {
      const carb = has('Arroz') ? 'arroz' : has('Pasta') ? 'pasta' : 'base nutritiva';
      const protein = has('Pollo') ? 'pollo' : has('Atún') ? 'atún' : 'proteína';
      return [
        {
          title: `Salteado aromático de ${protein} con ${secondIng} sobre ${carb}`,
          badge: "Almuerzo completo",
          time: timeAvailable,
          description: "Plato caliente, equilibrado y muy sabroso para almorzar rico sin pasar horas cocinando.",
          steps: [
            `Saltea ${protein} en tiras con un toque de aceite de oliva hasta que tome color dorado.`,
            `Añade ${secondIng} troceado para que se cocine al dente en 4 minutos.`,
            `Mezcla con ${carb} caliente y rectifica de sal y hierbas secas.`
          ]
        },
        {
          title: `Bowl nutritivo de ${carb} tibio con dados de ${protein}`,
          badge: "Nutrición real",
          time: "12 min",
          description: "Aprovecha las sobras o prepara todo en una olla rápida para resolver tu día.",
          steps: [
            `Calienta la base de ${carb} en un cuenco hondo.`,
            `Distribuye ${protein} y ${secondIng} de forma colorida y apetitosa.`,
            "Corona con un chorrito de aceite de oliva y semillas si tienes a mano."
          ]
        },
        {
          title: `Sartén express mediterránea con toque de ${thirdIng}`,
          badge: "Fácil limpieza",
          time: "15 min",
          description: "Todo cocinado en un mismo recipiente para disfrutar de una comida casera sin estrés.",
          steps: [
            `Dora ${protein} a fuego alegre.`,
            `Incorpora ${carb} ya cocido y saltea todo junto para absorber aromas.`,
            `Apaga el fuego, agrega ${thirdIng} y sirve recién hecho.`
          ]
        }
      ];
    }

    return [
      {
        title: `Salteado express de ${mainIng} con ${secondIng}`,
        badge: "Listo en tu tiempo",
        time: timeAvailable,
        description: `Una combinación rápida y sabrosa pensada para aprovechar exactamente tus ${list.length} ingredientes.`,
        steps: [
          `Pica ${mainIng} y ${secondIng} en bocados homogéneos.`,
          "Calienta la sartén con un toque de aceite de oliva virgen.",
          "Saltea 5 minutos, añade tu condimento favorito y sirve caliente."
        ]
      },
      {
        title: `Tosta o plato combinado caliente de ${mainIng} y ${secondIng}`,
        badge: "Reconfortante",
        time: "10 min",
        description: "Sin necesidad de recetas elaboradas: comida casera que te cuida y te ahorra tiempo.",
        steps: [
          `Cocina ${mainIng} a la plancha hasta que esté dorado y tierno.`,
          `Acompaña con ${secondIng} fresco o salteado al punto.`,
          "Añade sal marina en escamas y sirve de inmediato."
        ]
      },
      {
        title: `Cazuela o revuelto rápido de ${mainIng} con ${thirdIng}`,
        badge: "Cero desperdicio",
        time: "12 min",
        description: "Aprovecha lo que hay en el refrigerador sin tener que salir corriendo al supermercado.",
        steps: [
          "Pon todo junto en la sartén a fuego medio.",
          "Remueve con cuchara de madera integrando los jugos naturales.",
          "Sirve caliente con una infusión o agua con limón."
        ]
      }
    ];
  }, [selectedIngredients, timeAvailable, cookingPreference]);

  const handleTriggerScan = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
    }, 300);
  };

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

  return (
    <article className="w-full max-w-full overflow-x-clip bg-[#FAF9F5] text-neutral-900">
      
      {/* 1. BeMaster Top Alert Bar */}
      <div className="w-full bg-[#0B3B2C] text-white py-2 px-3 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider border-b border-emerald-900/60 shadow-xs">
        <span className="text-amber-300 mr-1.5">⚡ ATENCIÓN:</span> 
        Para quienes llegan cansados a casa y no saben qué cocinar hoy
      </div>

      {/* Main Single-Column Letter Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-16">
        
        {/* 2. Pre-headline Hook */}
        <div className="text-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF3EA] text-[#EA580C] border border-[#FED7AA] text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-2xs">
            MÉTODO DEL ALGORITMO DE DESPENSA INVERSA
          </span>
        </div>

        {/* 3. The Grand Sales Letter Headline (BeMaster direct hook) */}
        <header className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight leading-[1.15] sm:leading-[1.12] mb-4 [text-wrap:balance]">
            Deja de preguntarte todos los días <span className="bg-amber-100 text-[#0B3B2C] px-2 py-0.5 rounded-lg underline decoration-[#EA580C] decoration-3">qué cocinar</span> al llegar del trabajo
          </h1>
          <p className="text-base sm:text-xl font-medium text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            Dile a Radar de Comidas qué ingredientes tienes y de cuánto tiempo dispones. Descubre tres ideas prácticas para tu próxima comida en 3 minutos.
          </p>
        </header>

        {/* 4. Hero Visual Mockup */}
        <div className="relative mb-8 text-center">
          <div className="relative inline-block max-w-sm sm:max-w-md w-full rounded-3xl bg-white p-3 sm:p-4 shadow-2xl border-2 border-[#EFE7D8]">
            <div className="absolute top-5 right-5 z-10 bg-[#0B3B2C] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg border border-emerald-400/50 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Resuelve en 3 min</span>
            </div>
            <img
              src="/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp"
              alt="Radar de Comidas - Demostración en pantalla del asistente"
              className="w-full max-h-[300px] sm:max-h-[380px] object-contain rounded-2xl mx-auto"
              loading="eager"
            />
            <div className="mt-3 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] sm:text-xs text-neutral-600 font-bold px-2">
              <span className="text-[#0B3B2C]">✓ Con lo que ya tienes</span>
              <span className="text-[#EA580C]">✓ Cero descargas pesadas</span>
              <span className="text-emerald-800">✓ En tu celular</span>
            </div>
          </div>
        </div>

        {/* 5. Fast-Action Box for Impulse Buyers (BeMaster CTA 1) */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white border-2 border-amber-300 shadow-xl text-center mb-10 relative overflow-hidden">
          <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#FF5722] to-[#EA580C] text-white text-[10px] sm:text-xs font-black uppercase tracking-wider mb-2">
            OFERTA VITALICIA DE LANZAMIENTO
          </div>
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
            Acceso completo para siempre
          </p>
          <div className="flex items-baseline justify-center gap-2.5 my-2">
            <span className="text-sm sm:text-base text-neutral-400 line-through font-bold">
              De $29 USD
            </span>
            <span className="text-4xl sm:text-6xl font-black text-neutral-900 tabular-nums tracking-tight">
              $4,99 USD
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Ahorro 82%
            </span>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium max-w-md mx-auto mb-4">
            Un solo pago para siempre. Sin mensualidades ni suscripciones ocultas. Incluye los 4 bonos interactivos.
          </p>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#EA580C] hover:from-[#F4511E] hover:to-[#C2410C] text-white font-black text-base sm:text-lg px-8 sm:px-12 py-4 rounded-full shadow-xl shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer group"
          >
            <span>Quiero mi acceso vitalicio por $4,99 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
          <TrustMicrocopy theme="light" />
        </div>

        {/* 6. The Heart of the Sales Letter (Direct Editorial Conversation) */}
        <section className="space-y-5 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal mb-12">
          
          <div className="border-l-4 border-[#0B3B2C] pl-4 py-1 italic font-semibold text-neutral-900 bg-white/70 rounded-r-xl">
            “Son las 7:30 de la noche. Llegas a casa con el cuerpo agotado tras horas de trabajo y responsabilidades. Abres la nevera con hambre... y lo único que ves son ingredientes sueltos que no sabes cómo juntar.”
          </div>

          <p>
            Te quedas de pie frente a la puerta abierta sintiendo esa conocida <strong>opresión en el pecho</strong>. 
          </p>

          <p>
            Tu mente ya tomó cientos de decisiones difíciles hoy. No te queda energía mental para inventar una cena desde cero.
          </p>

          <p>
            Entonces haces lo que casi todos hacemos: abres el teléfono para buscar recetas. Pero en redes sociales o blogs de cocina te encuentras con vídeos de 10 minutos que te exigen queso gruyère, especias que nunca has comprado o una hora de preparación que sencillamente no tienes.
          </p>

          {/* Persona Daniela Direct Identification Card */}
          <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF5722] to-[#EA580C] text-white font-black text-base flex items-center justify-center shrink-0 shadow-xs">
              D
            </div>
            <div>
              <p className="text-sm sm:text-base font-black text-neutral-900 italic">
                “Llego cansada y todavía tengo que pensar qué voy a cocinar.”
              </p>
              <p className="text-xs text-neutral-500 font-medium mt-1">
                Daniela, 31 años · Trabaja, organiza sus comidas y odia perder media hora decidiendo la cena.
              </p>
            </div>
          </div>

          <p>
            ¿El resultado de esa parálisis? 
          </p>

          <ul className="space-y-2.5 my-4 pl-2">
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-black shrink-0">✕</span>
              <span><strong>Gastas dinero en delivery</strong> por puro agotamiento, aunque sabes que no es sano ni económico.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-black shrink-0">✕</span>
              <span><strong>Tiras verduras podridas</strong> al final de la semana porque compraste con buenas intenciones pero no supiste usarlas.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-[#EA580C] font-black shrink-0">✕</span>
              <span><strong>Cenas lo mismo de siempre</strong> con frustración y pesadez antes de dormir.</span>
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-black text-neutral-900 pt-4">
            No necesitas ser chef. Necesitas que una parte de tu día sea sencilla.
          </h3>

          <p>
            El problema no es tu fuerza de voluntad. El problema es que los recetarios tradicionales funcionan al revés: <strong>te dicen qué debes ir a comprar</strong> en vez de decirte <strong>qué puedes preparar con lo que ya tienes</strong>.
          </p>

          <p>
            Por eso creamos <strong>Radar de Comidas</strong>: un atajo inteligente que funciona con el <em>Algoritmo de Despensa Inversa</em>.
          </p>
        </section>

        {/* 7. The 3-Step Mechanism Breakdown */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <span className="text-xs font-black uppercase tracking-wider text-[#EA580C]">
              Así de simple es tu nueva rutina
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-neutral-900 mt-1">
              Cómo funciona el Radar en 3 pasos breves
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-3.5">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs text-center sm:text-left">
              <div className="w-8 h-8 rounded-lg bg-[#0B3B2C] text-white font-black text-sm flex items-center justify-center mb-2 mx-auto sm:mx-0 shadow-xs">
                1
              </div>
              <h4 className="font-black text-sm text-neutral-900 uppercase">Paso 1: Input</h4>
              <p className="text-xs text-neutral-600 mt-1">
                Marcas en pantalla los 2 o 3 ingredientes que ves en tu nevera y los minutos que tienes.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F4] border border-orange-200 shadow-xs text-center sm:text-left">
              <div className="w-8 h-8 rounded-lg bg-[#EA580C] text-white font-black text-sm flex items-center justify-center mb-2 mx-auto sm:mx-0 shadow-xs">
                2
              </div>
              <h4 className="font-black text-sm text-neutral-900 uppercase">Paso 2: Cruce</h4>
              <p className="text-xs text-neutral-600 mt-1">
                El sistema descarta combinaciones imposibles y filtra únicamente platos cotidianos y rápidos.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs text-center sm:text-left">
              <div className="w-8 h-8 rounded-lg bg-[#15803D] text-white font-black text-sm flex items-center justify-center mb-2 mx-auto sm:mx-0 shadow-xs">
                3
              </div>
              <h4 className="font-black text-sm text-neutral-900 uppercase">Paso 3: Elección</h4>
              <p className="text-xs text-neutral-600 mt-1">
                Ves tres opciones listas para preparar. Eliges la que más te apetezca y cenas en paz.
              </p>
            </div>
          </div>
        </section>

        {/* 8. Live Demonstration (The Interactive Simulator in the letter) */}
        <section className="mb-14 p-5 sm:p-8 rounded-3xl bg-white border-2 border-neutral-200 shadow-lg">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-[#EA580C] mb-1">
              <Zap className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Demostración Interactiva en Vivo</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-neutral-900">
              Pruébalo ahora mismo con lo que tienes a mano
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Toca los alimentos que tengas hoy y observa cómo el algoritmo sugiere comidas de inmediato:
            </p>
          </div>

          {/* Interactive Controls */}
          <div className="space-y-4 bg-[#FAF9F5] p-4 sm:p-5 rounded-2xl border border-neutral-200 mb-6">
            <div>
              <label className="text-xs font-black uppercase text-neutral-900 block mb-2">
                1. Selecciona lo que tienes en casa:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {availableIngredients.map((ing) => {
                  const isSelected = selectedIngredients.includes(ing);
                  return (
                    <button
                      key={ing}
                      onClick={() => toggleIngredient(ing)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer active:scale-95 ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#FF5722] to-[#EA580C] text-white font-black shadow-xs'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '} {ing}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-xs font-black uppercase text-neutral-900 block mb-1">
                  2. ¿Tiempo disponible?
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['10 min', '15 min', '25 min'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeAvailable(time)}
                      className={`text-[11px] font-bold py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                        timeAvailable === time
                          ? 'bg-[#0B3B2C] text-white font-black'
                          : 'bg-white text-neutral-700 border border-neutral-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-black uppercase text-neutral-900 block mb-1">
                  3. Preferencia:
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    onClick={() => setCookingPreference('cocinar')}
                    className={`text-[11px] font-bold py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      cookingPreference === 'cocinar'
                        ? 'bg-[#0B3B2C] text-white font-black'
                        : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    Caliente
                  </button>
                  <button
                    onClick={() => setCookingPreference('listo')}
                    className={`text-[11px] font-bold py-1.5 rounded-lg transition-all cursor-pointer text-center ${
                      cookingPreference === 'listo'
                        ? 'bg-[#0B3B2C] text-white font-black'
                        : 'bg-white text-neutral-700 border border-neutral-200'
                    }`}
                  >
                    Express
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-3">
            {dynamicMeals.map((meal, index) => (
              <div
                key={index}
                className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 shadow-2xs hover:border-[#EA580C]/40 transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h5 className="text-xs sm:text-sm font-bold text-neutral-900">
                    {index + 1}. {meal.title}
                  </h5>
                  <span className="text-[10px] font-black text-[#EA580C] bg-[#FFF3EA] px-2 py-0.5 rounded-full border border-[#FED7AA]">
                    {meal.time}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-600 mb-2">
                  {meal.description}
                </p>
                <div className="bg-[#FAF9F5] p-2 rounded-xl text-[10px] sm:text-[11px] text-neutral-700 space-y-0.5 border border-neutral-100">
                  {meal.steps.map((st, sIdx) => (
                    <p key={sIdx}>• {st}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Value Stack (El Apilamiento de Valor BeMaster) */}
        <section id="oferta" className="mb-14 rounded-3xl bg-gradient-to-b from-[#06291E] via-[#0B3B2C] to-[#041D15] text-white p-6 sm:p-10 shadow-2xl border border-emerald-500/20">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 border border-emerald-400/40 text-[10px] sm:text-xs font-black uppercase tracking-wider text-emerald-300 mb-2">
              APILAMIENTO DE VALOR COMPLETO
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Todo lo que te llevas hoy con Radar de Comidas
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80 mt-1 max-w-lg mx-auto">
              Herramientas interactivas automatizadas para blindar tu rutina culinaria.
            </p>
          </div>

          {/* List of stacked tools */}
          <div className="divide-y divide-emerald-800/60 mb-6">
            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src="/assets/aistudio/radar-de-comidas-explicativo_a86171f3.webp" 
                  alt="Radar de Comidas" 
                  className="w-12 h-12 rounded-xl object-cover bg-white/10 p-1 border border-emerald-400/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white">
                    Radar de Comidas (Mini-app interactiva vitalicia)
                  </p>
                  <p className="text-xs text-emerald-300/80">Genera 3 opciones con lo que tienes en segundos.</p>
                </div>
              </div>
              <span className="text-sm sm:text-base font-bold text-emerald-100 tabular-nums shrink-0">
                USD 29
              </span>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src="/assets/aistudio/bono-plato-express-producto_c7fdae47.webp" 
                  alt="Bono 1: Plato Exprés" 
                  className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-emerald-400/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 flex-wrap">
                    <span>Bono 1: Plato Exprés</span>
                    <span className="text-[9px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.2 rounded">GRATIS</span>
                  </p>
                  <p className="text-xs text-emerald-300/80">Ideas y preparaciones ultra rápidas de 10 a 15 min para cuando llegas sin energía.</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs line-through text-emerald-400/50 block">USD 12</span>
                <span className="text-xs font-black text-amber-300">HOY $0</span>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src="/assets/aistudio/bono-lista-breve-producto_57279b5e.webp" 
                  alt="Bono 2: Lista Breve" 
                  className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-emerald-400/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 flex-wrap">
                    <span>Bono 2: Lista Breve</span>
                    <span className="text-[9px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.2 rounded">GRATIS</span>
                  </p>
                  <p className="text-xs text-emerald-300/80">La lista mínima de compras para tener lo básico sin gastar de más ni tirar comida.</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs line-through text-emerald-400/50 block">USD 10</span>
                <span className="text-xs font-black text-amber-300">HOY $0</span>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src="/assets/aistudio/bono-sustituidor-producto_52e4bb4d.webp" 
                  alt="Bono 3: Sustituidor de Ingredientes" 
                  className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-emerald-400/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 flex-wrap">
                    <span>Bono 3: Sustituidor de Ingredientes</span>
                    <span className="text-[9px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.2 rounded">GRATIS</span>
                  </p>
                  <p className="text-xs text-emerald-300/80">Reemplaza al instante cualquier ingrediente faltante con lo que ya tienes a mano.</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs line-through text-emerald-400/50 block">USD 9</span>
                <span className="text-xs font-black text-amber-300">HOY $0</span>
              </div>
            </div>

            <div className="py-3.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <img 
                  src="/assets/aistudio/bono-reinicio-amable-producto_60ae48bf.webp" 
                  alt="Bono 4: Reinicio Amable" 
                  className="w-12 h-12 rounded-xl object-contain bg-white/10 p-1 border border-emerald-400/30 shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5 flex-wrap">
                    <span>Bono 4: Reinicio Amable</span>
                    <span className="text-[9px] bg-amber-400 text-amber-950 font-black px-1.5 py-0.2 rounded">GRATIS</span>
                  </p>
                  <p className="text-xs text-emerald-300/80">Retoma el orden culinario sin dietas estrictas ni culpa tras días caóticos.</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-xs line-through text-emerald-400/50 block">USD 7</span>
                <span className="text-xs font-black text-amber-300">HOY $0</span>
              </div>
            </div>
          </div>

          {/* Stacking Total vs Offer */}
          <div className="pt-4 border-t-2 border-dashed border-emerald-600/40 flex items-center justify-between mb-6">
            <span className="text-sm sm:text-base text-emerald-200 font-semibold">Valor acumulado total:</span>
            <span className="text-lg sm:text-xl font-bold line-through text-emerald-300/60 tabular-nums">USD 67</span>
          </div>

          {/* Price Box */}
          <div className="p-6 rounded-2xl bg-white text-neutral-900 text-center mb-6 shadow-xl border-2 border-amber-300">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
              Precio promocional por tiempo limitado
            </span>
            <div className="text-4xl sm:text-6xl font-black text-neutral-900 my-1 tabular-nums">
              $4,99 USD
            </div>
            <p className="text-xs sm:text-sm font-black text-[#FF5722]">
              Un solo pago vitalicio · Sin mensualidades ni renovaciones
            </p>
          </div>

          {/* CTA 2 */}
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#EA580C] hover:from-[#F4511E] hover:to-[#C2410C] text-white font-black text-base sm:text-xl py-4.5 px-6 rounded-full shadow-2xl shadow-orange-500/40 active:scale-[0.98] transition-all cursor-pointer text-center group mb-2"
          >
            <span>Quiero el Radar y los 4 Bonos por $4,99 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>

          <TrustMicrocopy theme="dark" />
          <div className="flex justify-center mt-3">
            <ScarcityCounter />
          </div>
        </section>

        {/* 10. Testimonials (Real Social Proof) */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-neutral-900">
              Lo que están viviendo quienes ya lo usan
            </h3>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-sm text-neutral-900">Daniela Morales · 31 años (Santiago)</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Compra verificada
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                “Llegaba del trabajo con la cabeza embotada y todavía tenía que pensar qué cocinar. Con Radar marco lo que veo en la nevera y en 3 minutos sé qué preparar sin tener que salir a comprar nada. Me ahorró media hora de estrés cada noche.”
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="font-bold text-sm text-neutral-900">Ricardo Cáceres (Ciudad de México)</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Compra verificada
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic">
                “Siempre compraba verduras que terminaban podridas al fondo de la gaveta. Ahora marco lo que me va quedando y el algoritmo me da la receta exacta. Los 4,99 dólares se pagaron solos la primera semana.”
              </p>
            </div>
          </div>
        </section>

        {/* 11. Guarantee Section (Prestigious 7-Day Seal) */}
        <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#EFE5D3] shadow-xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 text-center md:text-left relative overflow-hidden">
          <div className="shrink-0 relative">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#0B3B2C] to-[#06241B] text-white p-3 shadow-xl flex flex-col items-center justify-center border-4 border-amber-400 ring-4 ring-amber-300/40">
              <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-amber-300">★ 100% ★</span>
              <span className="text-3xl sm:text-5xl font-black tabular-nums leading-none text-white my-0.5">7</span>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-amber-300 leading-tight">DÍAS</span>
              <span className="text-[7px] font-bold uppercase tracking-wider text-emerald-200">GARANTÍA TOTAL</span>
            </div>
          </div>

          <div className="space-y-2 min-w-0 flex-1">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#EA580C]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-black uppercase tracking-wider">Garantía Incondicional de 7 Días</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-black text-neutral-900">
              Pruébalo durante 7 días sin arriesgar un solo centavo
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Si en 7 días la herramienta no te quita el agobio de cocinar desde la primera noche, pides el reembolso en Hotmart con un solo clic y te devolvemos el 100% de tu dinero. Todo el riesgo queda de mi lado.
            </p>
          </div>
        </section>

        {/* 12. Direct FAQ Accordion */}
        <section className="mb-14">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-3xl font-black text-neutral-900">
              Preguntas Frecuentes
            </h3>
            <p className="text-xs text-neutral-500 mt-1">Respuestas directas y honestas</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left cursor-pointer hover:bg-neutral-50"
                  >
                    <span className="text-xs sm:text-base font-bold text-neutral-900">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-500 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#EA580C]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-neutral-700 leading-relaxed border-t border-neutral-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 13. Two Paths Closing & Postdata (BeMaster signature ending) */}
        <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#FFF9F4] to-[#FAF7F0] border border-amber-200 shadow-md text-center mb-10">
          <h3 className="text-xl sm:text-3xl font-black text-neutral-900 mb-4">
            Hoy tienes dos caminos claros:
          </h3>
          <p className="text-xs sm:text-base text-neutral-700 leading-relaxed max-w-xl mx-auto mb-6">
            Seguir igual significa otra noche llegando cansada a casa con hambre frente a la nevera abierta. O puedes tener en tu teléfono la herramienta que decide tu comida en tres minutos con lo que ya tienes.
          </p>
          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#EA580C] hover:from-[#F4511E] hover:to-[#C2410C] text-white font-black text-base sm:text-lg px-8 sm:px-12 py-4 rounded-full shadow-xl shadow-orange-500/25 active:scale-[0.98] transition-all cursor-pointer group mb-3"
          >
            <span>Acceder al Radar + 4 Bonos por $4,99 USD</span>
            <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
          </a>
          <TrustMicrocopy theme="warm" />
        </section>

        {/* 14. Classical Sales Letter P.D. (Postdata) */}
        <footer className="space-y-3 text-xs sm:text-sm text-neutral-600 border-t border-neutral-200 pt-8">
          <p>
            <strong>P.D. 1:</strong> Si decides actuar hoy, no solo recibes Radar de Comidas para toda la vida, sino también los 4 bonos interactivos (Plato Exprés, Lista Breve, Sustituidor de Ingredientes y Reinicio Amable) por un pago único de <strong>$4,99 USD</strong>.
          </p>
          <p>
            <strong>P.D. 2:</strong> Recuerda que estás protegida con nuestra garantía incondicional de 7 días respaldada por Hotmart. Si no te resuelve las cenas, pides tu dinero de vuelta con un solo clic. Cero riesgo para ti.
          </p>
        </footer>

      </div>
    </article>
  );
};
