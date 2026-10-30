import React, { useState, useMemo } from 'react';
import { ArrowRight, ChefHat, Clock, RefreshCw } from 'lucide-react';

const HOTMART_URL = "https://pay.hotmart.com/L108133669Q";

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
    <section id="como-funciona" className="relative w-full max-w-full overflow-hidden bg-white text-[#174C38] py-14 sm:py-24 border-b border-[#E3E9DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#557567] mb-2">
            La Solución Concreta
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#174C38] mb-4 sm:mb-6 break-words [text-wrap:balance]">
            Cómo funciona: Radar de Comidas
          </h2>
          <p className="text-sm sm:text-lg font-semibold text-[#174C38] leading-relaxed mb-3 sm:mb-4 break-words">
            En lugar de darte otro menú fijo, te ayuda a decidir con lo que tienes y lo que puedes hacer hoy.
          </p>
          <p className="text-sm sm:text-lg font-normal text-[#3E5E50] leading-relaxed break-words">
            Tú indicas tus ingredientes, tiempo y preferencias. El sistema organiza las opciones y recibes tres ideas sencillas, sin contar calorías ni seguir reglas rígidas.
          </p>
        </div>

        {/* CÓMO FUNCIONA EL MÉTODO */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-[#174C38] break-words">
              CÓMO FUNCIONA EL MÉTODO
            </h3>
            <p className="text-xs sm:text-base font-medium text-[#4D6C5E] mt-2 break-words">
              Tres pasos para pasar de “no sé qué preparar” a elegir una comida posible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            {/* Step 1 */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#F6F8F3] border border-[#E0E7DC] shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#174C38] text-white font-black text-xl sm:text-2xl flex items-center justify-center shadow-xs">
                  1
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#557567]">
                  Paso 01
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#174C38] uppercase tracking-tight mb-2 sm:mb-3 break-words">
                PASO 01: Lo que tienes
              </h4>
              <p className="text-xs sm:text-base font-normal text-[#2C4B3E] leading-relaxed break-words">
                Indica ingredientes disponibles, tiempo, preferencias y si quieres cocinar o elegir algo listo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#E8EFE6] border-2 border-[#174C38]/40 shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#174C38] text-white font-black text-xl sm:text-2xl flex items-center justify-center shadow-xs">
                  2
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-[#174C38]">
                  Paso 02
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#174C38] uppercase tracking-tight mb-2 sm:mb-3 break-words">
                PASO 02: Radar de Comidas
              </h4>
              <p className="text-xs sm:text-base font-normal text-[#2C4B3E] leading-relaxed break-words">
                La mini-app cruza tus respuestas y propone opciones acordes con lo que puedes hacer hoy.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative p-5 sm:p-8 rounded-2xl bg-[#F6F8F3] border border-[#E0E7DC] shadow-xs flex flex-col w-full max-w-full">
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#174C38] text-white font-black text-xl sm:text-2xl flex items-center justify-center shadow-xs">
                  3
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#557567]">
                  Paso 03
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-[#174C38] uppercase tracking-tight mb-2 sm:mb-3 break-words">
                PASO 03: Tu elección
              </h4>
              <p className="text-xs sm:text-base font-normal text-[#2C4B3E] leading-relaxed break-words">
                Elige una idea, consulta sus pasos breves y guarda una lista de compra opcional.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Simulator with mobile safety */}
        <div className="p-4 sm:p-10 rounded-3xl bg-[#F6F8F3] border border-[#E0E7DC] shadow-sm w-full max-w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-[#E0E7DC]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <img 
                  src="/assets/aistudio/icon-512x512_8a71b860.png" 
                  alt="Icono Radar de Comidas" 
                  className="w-4 h-4 object-contain shrink-0"
                />
                <span className="text-[#174C38] font-black text-[11px] sm:text-xs uppercase tracking-widest">
                  Simulación Dinámica en Tiempo Real
                </span>
              </div>
              <h4 className="text-lg sm:text-2xl font-black text-[#174C38] break-words">
                Haz la prueba con lo que tienes hoy en tu cocina
              </h4>
            </div>
            <span className="text-[11px] sm:text-xs font-bold text-[#557567]">
              Cambia ingredientes y las recetas cambian
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start w-full max-w-full">
            
            {/* Input Controls */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6 bg-white p-4 sm:p-6 rounded-2xl border border-[#E0E7DC] w-full max-w-full">
              
              {/* 1. Ingredients */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-black uppercase tracking-wider text-[#174C38]">
                    1. Elige ingredientes:
                  </label>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#D97757]">
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
                        className={`text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                          isSelected
                            ? 'bg-[#174C38] text-white font-black shadow-xs'
                            : 'bg-[#F2F5F0] text-[#345347] hover:bg-[#E5ECE3]'
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
                <label className="block text-xs font-black uppercase tracking-wider text-[#174C38] mb-2">
                  2. ¿Cuánto tiempo tienes?
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {['10 min', '15 min', '25 min'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeAvailable(time)}
                      className={`text-[11px] sm:text-xs font-bold py-2 rounded-xl transition-all cursor-pointer text-center ${
                        timeAvailable === time
                          ? 'bg-[#174C38] text-white font-black shadow-xs'
                          : 'bg-[#F2F5F0] text-[#345347] hover:bg-[#E5ECE3]'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Cooking Preference */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-[#174C38] mb-2">
                  3. Tu preferencia de hoy:
                </label>
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                  <button
                    onClick={() => setCookingPreference('cocinar')}
                    className={`text-[11px] sm:text-xs font-bold py-2 px-2 rounded-xl transition-all cursor-pointer text-center leading-tight ${
                      cookingPreference === 'cocinar'
                        ? 'bg-[#174C38] text-white font-black'
                        : 'bg-[#F2F5F0] text-[#345347] hover:bg-[#E5ECE3]'
                    }`}
                  >
                    Cocinar caliente
                  </button>
                  <button
                    onClick={() => setCookingPreference('listo')}
                    className={`text-[11px] sm:text-xs font-bold py-2 px-2 rounded-xl transition-all cursor-pointer text-center leading-tight ${
                      cookingPreference === 'listo'
                        ? 'bg-[#174C38] text-white font-black'
                        : 'bg-[#F2F5F0] text-[#345347] hover:bg-[#E5ECE3]'
                    }`}
                  >
                    Plato frío / express
                  </button>
                </div>
              </div>

              {/* Manual refresh scan button */}
              <button
                onClick={handleTriggerScan}
                className="w-full py-2.5 sm:py-3 bg-[#E8EFE6] hover:bg-[#DDE7DA] text-[#174C38] font-black text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <RefreshCw className={`w-3.5 h-3.5 shrink-0 ${isSimulating ? 'animate-spin' : ''}`} />
                <span>{isSimulating ? 'Calculando...' : 'Actualizar 3 Opciones'}</span>
              </button>

            </div>

            {/* Generated Results Preview Box */}
            <div className="lg:col-span-7 bg-white p-4 sm:p-6 rounded-2xl border border-[#E0E7DC] shadow-xs w-full max-w-full">
              <div className="flex flex-wrap items-center justify-between gap-1 pb-3 mb-3 sm:mb-4 border-b border-[#EAEFE8]">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#174C38]">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                  <span className="break-words">3 Comidas ({timeAvailable})</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-black text-[#D97757] uppercase tracking-wider">
                  Listas en 3 min
                </span>
              </div>

              <div className="space-y-3">
                {dynamicMeals.map((meal, index) => (
                  <div
                    key={index}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#F9FBF8] border border-[#E2EAE0] hover:border-[#174C38]/40 transition-all w-full max-w-full"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h5 className="text-xs sm:text-base font-bold text-[#174C38] leading-snug break-words">
                        {index + 1}. {meal.title}
                      </h5>
                      <span className="text-[9px] sm:text-[10px] font-black text-[#174C38] bg-[#E8EFE6] px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                        {meal.badge}
                      </span>
                    </div>

                    <p className="text-[11px] sm:text-xs text-[#3E5E50] mb-2 leading-relaxed break-words">
                      {meal.description}
                    </p>

                    {/* Step-by-step preview */}
                    <div className="bg-white p-2.5 rounded-xl border border-[#EAEFE8] text-[10px] sm:text-[11px] text-[#446556] space-y-1 mb-2">
                      <p className="font-bold text-[#174C38] text-[10px] uppercase tracking-wider">
                        Pasos en 3 minutos:
                      </p>
                      {meal.steps.map((st, sIdx) => (
                        <p key={sIdx} className="leading-tight break-words">
                          • {st}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-[#557567] font-semibold">
                      <span className="flex items-center gap-1 text-[#174C38]">
                        <Clock className="w-3 h-3 text-[#D97757] shrink-0" /> {meal.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <ChefHat className="w-3 h-3 text-[#174C38] shrink-0" /> 3 pasos breves
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Hotmart link banner with Psychological Ownership Effect */}
              <div className="mt-4 pt-3.5 border-t border-[#EAEFE8] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left bg-[#F4F8F2] p-3 sm:p-4 rounded-2xl border border-[#DFEADC]">
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm text-[#174C38] font-black block">
                    ¿Viste lo rápido que encontraste tu menú?
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#446556] font-medium block">
                    Ten este mismo asistente en tu teléfono con combinaciones infinitas por solo $5 USD.
                  </span>
                </div>
                <a
                  href={HOTMART_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9532F] hover:bg-[#C44522] text-white text-xs sm:text-sm font-black px-5 py-3 rounded-full shadow-md hover:shadow-lg active:scale-[0.98] whitespace-nowrap cursor-pointer transition-all shrink-0"
                >
                  <span>¡Lo quiero en mi celular por $5 USD!</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
