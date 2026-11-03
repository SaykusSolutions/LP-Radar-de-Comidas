import React from 'react';
import { Lock, ShieldCheck, Zap } from 'lucide-react';

interface TrustMicrocopyProps {
  theme?: 'light' | 'dark' | 'warm';
  className?: string;
}

export const TrustMicrocopy: React.FC<TrustMicrocopyProps> = ({ theme = 'light', className = '' }) => {
  const isDark = theme === 'dark';
  const isWarm = theme === 'warm';

  const textColor = isDark 
    ? 'text-emerald-200' 
    : isWarm 
    ? 'text-neutral-700' 
    : 'text-neutral-600';

  const badgeBg = isDark 
    ? 'bg-emerald-950/70 text-emerald-300 border border-emerald-700/60' 
    : isWarm 
    ? 'bg-amber-50 text-neutral-800 border border-amber-200' 
    : 'bg-neutral-100 text-neutral-700 border border-neutral-200';

  return (
    <div className={`mt-3 pt-3 flex flex-col items-center gap-2 text-center w-full max-w-lg mx-auto ${className}`}>
      {/* Micro-copy de entrega inmediata solicitada por Hotmart */}
      <p className={`text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 ${textColor}`}>
        <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-400 shrink-0" />
        <span>Acceso inmediato a tu correo en segundos tras confirmar el pago</span>
      </p>

      {/* Sellos gráficos de garantía y pago 100% seguro */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-[11px] font-bold">
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${badgeBg}`}>
          <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Pago 100% seguro SSL</span>
        </span>
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${badgeBg}`}>
          <ShieldCheck className="w-3 h-3 text-emerald-600 shrink-0" />
          <span>Garantía de 7 días</span>
        </span>
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ${badgeBg}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span>Respaldado por Hotmart®</span>
        </span>
      </div>
    </div>
  );
};
