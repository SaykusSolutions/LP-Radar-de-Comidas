import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface PurchaseNotification {
  name: string;
  location: string;
  timeAgo: string;
}

const NOTIFICATIONS: PurchaseNotification[] = [
  { name: 'Elena R.', location: 'Madrid', timeAgo: 'hace 3 minutos' },
  { name: 'Sofía M.', location: 'Buenos Aires', timeAgo: 'hace 5 minutos' },
  { name: 'Valeria C.', location: 'Santiago', timeAgo: 'hace 8 minutos' },
  { name: 'Patricia L.', location: 'Ciudad de México', timeAgo: 'hace 11 minutos' },
  { name: 'Marcela G.', location: 'Bogotá', timeAgo: 'hace 14 minutos' },
  { name: 'Lucía V.', location: 'Lima', timeAgo: 'hace 18 minutos' },
];

export const SocialProofTicker: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [dismissed, setDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial notification after 6 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    // Rotate every 12 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % NOTIFICATIONS.length);
        setIsVisible(true);
      }, 1000);
    }, 14000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  // Hide after 5 seconds of being shown
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 6000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (dismissed || !isVisible) return null;

  const item = NOTIFICATIONS[currentIdx];

  return (
    <aside 
      aria-label="Notificación de compra reciente"
      className="fixed bottom-4 left-4 z-40 max-w-[320px] bg-white/95 backdrop-blur-md text-[#174C38] border border-[#E0E7DC] p-3 rounded-2xl shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#E8EFE6] text-[#174C38] flex items-center justify-center shrink-0">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        </div>
        <div className="flex-1 min-w-0 pr-1">
          <p className="text-xs font-black text-[#174C38] leading-tight truncate">
            {item.name} de {item.location}
          </p>
          <p className="text-[11px] text-[#466759] leading-tight mt-0.5">
            Aseguró su acceso por $5 USD <span className="text-[#D97757] font-semibold">({item.timeAgo})</span>
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-neutral-400 hover:text-neutral-600 p-1 rounded-full transition-colors cursor-pointer shrink-0"
          aria-label="Cerrar notificación"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
};
