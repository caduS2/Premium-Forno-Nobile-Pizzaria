import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, MessageCircle, Clock } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = `${BUSINESS.address}, ${BUSINESS.cityState}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenRoute = () => {
    window.open(BUSINESS.mapsUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="localizacao" className="py-24 bg-[#0B0B0C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Information Column */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>Onde Estamos</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC]">
                Nossa Casa
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-body leading-relaxed">
                Localizada no coração da cidade, nossa pizzaria conta com atmosfera intimista, luz acolhedora
                e o aroma inconfundível do forno a lenha refratário.
              </p>
            </div>

            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#131316] border border-[#C9973A]/25 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#C9973A]/10 border border-[#C9973A]/30 flex items-center justify-center text-[#DFB25E] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#94A3B8] font-mono">
                    Endereço
                  </span>
                  <p className="font-display text-lg font-bold text-[#F8FAFC] mt-0.5">
                    {BUSINESS.address}
                  </p>
                  <p className="text-sm text-[#94A3B8]">{BUSINESS.cityState}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  id="btn-location-route"
                  onClick={handleOpenRoute}
                  className="px-4 py-3 rounded-lg text-xs uppercase tracking-[0.14em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-white hover:to-[#DFB25E] transition-all flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(201,151,58,0.2)] cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar rota</span>
                </button>

                <button
                  id="btn-location-copy"
                  onClick={handleCopy}
                  className="px-4 py-3 rounded-lg text-xs uppercase tracking-[0.14em] font-semibold text-[#F8FAFC] border border-[#C9973A]/40 bg-[#1A1A1E] hover:bg-[#C9973A]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-400" />
                      <span>Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#DFB25E]" />
                      <span>Copiar endereço</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Operating Hours Box - EXACT wording required by prompt */}
            <div className="p-5 rounded-xl bg-[#131316]/60 border border-white/5 flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-[#1A1A1E] flex items-center justify-center text-[#DFB25E] flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] block">
                  Horário de Atendimento
                </span>
                <p className="text-sm font-medium text-[#F8FAFC]">
                  Consulte o horário de atendimento pelo WhatsApp.
                </p>
              </div>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:text-white transition-colors p-2"
                title="Consultar pelo WhatsApp"
                aria-label="Consultar horário de atendimento pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Visual Map Mockup / Ambience Display */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#C9973A]/30 bg-[#131316] shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85"
                alt="Ambiente refinado da Forno Nobile Pizzaria"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />

              {/* Pin indicator on the graphic */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0B0C]/90 backdrop-blur-md border border-[#C9973A]/40 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#EA580C] animate-ping" />
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#F8FAFC]">
                      {BUSINESS.name}
                    </h3>
                    <span className="text-xs text-[#94A3B8]">{BUSINESS.address}</span>
                  </div>
                </div>
                <button
                  onClick={handleOpenRoute}
                  className="text-xs text-[#DFB25E] hover:underline font-mono uppercase tracking-wider"
                >
                  Ver no Maps →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
