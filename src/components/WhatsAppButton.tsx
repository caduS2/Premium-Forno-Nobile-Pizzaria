import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const WhatsAppButton: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  const defaultGreeting = encodeURIComponent(
    'Olá! Vim pelo site da Forno Nobile e gostaria de tirar uma dúvida sobre o cardápio.'
  );
  const whatsappLink = `${BUSINESS.whatsappUrl}?text=${defaultGreeting}`;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3">
      {/* Tooltip on hover or screen reader */}
      {hovered && (
        <div
          id="whatsapp-tooltip"
          className="hidden sm:block px-3 py-1.5 rounded-lg bg-[#131316] text-[#F8FAFC] text-xs border border-[#C9973A]/40 shadow-xl shadow-black/60 animate-in fade-in zoom-in-95 duration-150"
        >
          <span className="font-semibold text-[#DFB25E]">Atendimento Nobile</span>
          <span className="text-[11px] text-[#94A3B8] block">Fale com nosso concierge</span>
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Falar com a Forno Nobile pelo WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-[#1ea952] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.35)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 border-2 border-white/20"
      >
        <MessageCircle className="w-7 h-7" />
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full border border-[#25D366]/40 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};
