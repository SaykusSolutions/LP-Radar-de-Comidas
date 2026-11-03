import React, { useState, useMemo } from 'react';
import { ArrowRight, ChefHat, Clock, RefreshCw } from 'lucide-react';
import { TrustMicrocopy } from './TrustMicrocopy';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q?checkoutMode=10";

interface MealRecipe {
  title: string;
  badge: string;
  time: string;
  description: string;
  steps: string[];
}

export const ComoFuncionaSection: React.FC = () => {
  // Interactive Simulator state
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(['Huevos', 'Aguacate', 'Tomate']);
  const [timeAvailable, setTimeAvailable] = useState<string>('15 min');
  const [cookingPreference, setCookingPreference] = useState<'cocinar' | 'listo'>('cocinar');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

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

  // Truly dynamic meal generation logic based on user input
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

    // When cooking
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
          title: "Revuelto campesino de campo en 6 minutos",
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

    if (has('Atún') || has('Pasta')) {
      return [
        {
          title: `Pasta rápida mediterránea con atún, tomate y orégano`,
          badge: "Salvavidas express",
          time: "12 min",
          description: "El clásico que nunca falla cuando no hay tiempo de hacer compras y quieres comer casero.",
          steps: [
            "Cocina la pasta al dente con abundante agua y sal.",
            "En la misma sartén, desmenuza el atún con el tomate y calienta 2 minutos.",
            "Integra la pasta escurrida, añade orégano seco y sirve caliente."
          ]
        },
        {
          title: `Ensalada tibia de pasta con ${secondIng} y aderezo suave`,
          badge: "Fresca y ligera",
          time: "10 min",
          description: "Muy agradable para los días de calor o cuando quieres una digestión liviana.",
          steps: [
            "Enfría ligeramente la pasta recién cocida bajo el grifo.",
            `Añade atún, ${secondIng} troceado y unas aceitunas si tienes.`,
            "Aliña con vinagre suave, aceite y sal."
          ]
        },
        {
          title: `Salteado de atún al ajillo con ${secondIng}`,
          badge: "Bajo en carbohidratos",
          time: "8 min",
          description: "Sabor intenso y reconfortante en menos de diez minutos de reloj.",
          steps: [
            "Lamina un diente de ajo y dora suavemente en aceite.",
            `Añade ${secondIng} y el atún escurrido sin romperlo demasiado.`,
            "Saltea a fuego vivo 3 minutos y sirve con perejil fresco."
          ]
        }
      ];
    }

    // Default dynamic fallback based on any custom picks
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
    }, 350);
  };

  return (
    <section id="como-funciona" className="relative w-full max-w-full overflow-x-clip bg-gradient-to-b from-[#FAF6EE] via-[#FFFDF9] to-[#F5EFE6] text-neutral-900 py-10 sm:py-20 border-b border-[#E8DFC8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-[#EA580C] mb-2">
            La Solución Concreta
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 mb-3 sm:mb-4 break-words [text-wrap:balance]">
            Cómo funciona: Radar de Comidas
          </h2>
          <div className="max-w-xl mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-neutral-700">
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              Sin menús rígidos
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
              Con lo que ya tienes
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-neutral-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              3 opciones en 3 minutos
            </span>
          </div>
        </div>

        {/* CÓMO FUNCIONA EL MÉTODO */}
        <div className="mb-10 sm:mb-16">
          <div className="text-center mb-6 sm:mb-10">
            <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 break-words">
              CÓMO FUNCIONA EL MÉTODO
            </h3>
            <p className="text-xs sm:text-base font-medium text-neutral-600 mt-1.5 sm:mt-2 break-words">
              Tres pasos simples para salir del bloqueo nocturno y cenar tranquilo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-3.5 sm:gap-6">
            {/* Step 1 */}
            <div className="relative p-4 sm:p-7 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0B3B2C] to-[#14532D] text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-sm">
                  1
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Input
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-neutral-900 uppercase tracking-tight mb-1.5 sm:mb-2 break-words">
                PASO 01: INPUT
              </h4>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed break-words">
                Seleccionas en pantalla los alimentos que tienes a mano y los minutos disponibles.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-4 sm:p-7 rounded-2xl bg-[#FFF9F4] border border-orange-200 shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#FF5722] to-[#EA580C] text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-sm">
                  2
                </span>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-[#C2410C] bg-[#FFF3EA] px-2 py-0.5 rounded-full border border-[#FED7AA]">
                  Tecnología
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-neutral-900 uppercase tracking-tight mb-1.5 sm:mb-2 break-words">
                PASO 02: TECNOLOGÍA
              </h4>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed break-words">
                El algoritmo cruza tus alimentos con combinaciones prácticas y descarta lo que te roba tiempo.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-4 sm:p-7 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-3 sm:mb-5">
                <span className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#15803D] to-[#16A34A] text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-sm">
                  3
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Output
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-black text-neutral-900 uppercase tracking-tight mb-1.5 sm:mb-2 break-words">
                PASO 03: OUTPUT
              </h4>
              <p className="text-xs sm:text-sm font-medium text-neutral-600 leading-relaxed break-words">
                Eliges una de las tres opciones claras y preparas tu comida sin vueltas.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Simulator with appetizing culinary styling */}
        <div className="p-4 sm:p-8 rounded-3xl bg-white border-2 border-[#EAE1D2] shadow-xl shadow-orange-950/5 w-full max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-3.5 sm:pb-5 mb-4 sm:mb-6 border-b border-[#EAE2D2]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img 
                  src="/assets/aistudio/icon-512x512_8a71b860.png" 
                  alt="Icono Radar de Comidas" 
                  className="w-4 h-4 object-contain shrink-0"
                />
                <span className="text-[#EA580C] font-black text-[11px] sm:text-xs uppercase tracking-widest">
                  Simulación Dinámica en Tiempo Real
                </span>
              </div>
              <h4 className="text-base sm:text-2xl font-black text-neutral-900 break-words">
                Haz la prueba con lo que tienes hoy en tu cocina
              </h4>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Cambia ingredientes y las recetas se actualizan
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 sm:gap-8 items-start w-full max-w-full">
            
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 bg-[#FAF9F5] p-4 sm:p-6 rounded-2xl border border-neutral-200 w-full max-w-full">
              
              {/* 1. Ingredients */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-neutral-900">
                    1. Elige ingredientes:
                  </label>
                  <span className="text-[11px] font-bold text-[#EA580C]">
                    {selectedIngredients.length} elegidos
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {availableIngredients.map((ing) => {
                    const isSelected = selectedIngredients.includes(ing);
                    return (
                      <button
                        key={ing}
                        onClick={() => toggleIngredient(ing)}
                        className={`text-xs font-bold px-3 py-2 rounded-xl transition-all cursor-pointer active:scale-95 select-none ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#FF5722] to-[#EA580C] text-white font-black shadow-xs'
                            : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '} {ing}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Time */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-900 mb-2">
                  2. ¿Cuánto tiempo tienes?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['10 min', '15 min', '25 min'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeAvailable(time)}
                      className={`text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer text-center active:scale-95 ${
                        timeAvailable === time
                          ? 'bg-gradient-to-r from-[#0B3B2C] to-[#164E3D] text-white font-black shadow-xs'
                          : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Cooking Preference */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-neutral-900 mb-2">
                  3. Tu preferencia de hoy:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCookingPreference('cocinar')}
                    className={`text-xs font-bold py-2.5 px-2 rounded-xl transition-all cursor-pointer text-center leading-tight active:scale-95 ${
                      cookingPreference === 'cocinar'
                        ? 'bg-gradient-to-r from-[#0B3B2C] to-[#164E3D] text-white font-black'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                    }`}
                  >
                    Cocinar caliente
                  </button>
                  <button
                    onClick={() => setCookingPreference('listo')}
                    className={`text-xs font-bold py-2.5 px-2 rounded-xl transition-all cursor-pointer text-center leading-tight active:scale-95 ${
                      cookingPreference === 'listo'
                        ? 'bg-gradient-to-r from-[#0B3B2C] to-[#164E3D] text-white font-black'
                        : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-300'
                    }`}
                  >
                    Plato frío / express
                  </button>
                </div>
              </div>

              {/* Manual refresh scan button */}
              <button
                onClick={handleTriggerScan}
                className="w-full py-3 bg-[#FFF3EA] hover:bg-[#FFE5D5] active:scale-98 text-[#C2410C] font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#FED7AA]"
              >
                <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'Calculando...' : 'Actualizar 3 Opciones'}</span>
              </button>

            </div>

            {/* Generated Results Preview Box */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs w-full max-w-full">
              <div className="flex flex-wrap items-center justify-between gap-1 pb-3 mb-3 sm:mb-4 border-b border-neutral-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span className="break-words">3 Comidas Generadas ({timeAvailable})</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-[#EA580C] uppercase tracking-wider">
                  Listas en 3 min
                </span>
              </div>

              <div className="space-y-3">
                {dynamicMeals.map((meal, index) => (
                  <div
                    key={index}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-neutral-200 hover:border-[#EA580C]/40 hover:shadow-md transition-all w-full max-w-full shadow-2xs"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1.5">
                      <h5 className="text-xs sm:text-base font-bold text-neutral-900 leading-snug break-words flex-1 min-w-[200px]">
                        {index + 1}. {meal.title}
                      </h5>
                      <span className="text-[9px] sm:text-[10px] font-black text-[#C2410C] bg-[#FFF3EA] px-2.5 py-0.5 rounded-full shrink-0 border border-[#FED7AA]">
                        {meal.badge}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-neutral-600 mb-2 leading-relaxed break-words font-medium">
                      {meal.description}
                    </p>

                    {/* Step-by-step preview */}
                    <div className="bg-[#FAF9F5] p-2.5 rounded-xl border border-neutral-200 text-[10px] sm:text-[11px] text-neutral-700 space-y-1 mb-2">
                      <p className="font-bold text-neutral-900 text-[10px] uppercase tracking-wider">
                        Pasos en 3 minutos:
                      </p>
                      {meal.steps.map((st, sIdx) => (
                        <p key={sIdx} className="leading-tight break-words font-medium">
                          • {st}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-neutral-500 font-semibold">
                      <span className="flex items-center gap-1 text-neutral-800">
                        <Clock className="w-3 h-3 text-[#EA580C] shrink-0" /> {meal.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChefHat className="w-3 h-3 text-emerald-600 shrink-0" /> 3 pasos breves
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Hotmart link banner */}
              <div className="mt-4 pt-3.5 border-t border-neutral-200 flex flex-col items-center text-center bg-gradient-to-br from-[#FFF7ED] via-[#FEF3C7] to-neutral-50 p-4 sm:p-5 rounded-2xl border border-amber-200">
                <div className="mb-3 max-w-lg">
                  <span className="text-sm sm:text-base text-neutral-900 font-black block">
                    ¿Viste lo rápido que encontraste tu comida?
                  </span>
                  <span className="text-xs text-neutral-600 font-medium block mt-1">
                    Acceso vitalicio a la mini-app y a los 4 bonos de regalo por un solo pago de <strong className="text-neutral-900 font-black">$4,99 USD</strong>.
                  </span>
                </div>
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF5722] via-[#F4511E] to-[#E64A19] hover:from-[#F4511E] hover:to-[#D84315] text-white text-xs sm:text-sm font-black px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl active:scale-[0.98] cursor-pointer transition-all text-center"
                >
                  <span>Quiero mi Radar de Comidas por $4,99 USD</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </a>

                {/* Sellos de garantía y micro-copy de entrega inmediata pegados al botón */}
                <TrustMicrocopy theme="light" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
