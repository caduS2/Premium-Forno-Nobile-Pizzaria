import React from 'react';
import { Timer, Flame, Sparkles } from 'lucide-react';
import { PROCESS_METRICS } from '../data/business';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#EA580C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#C9973A]/30 shadow-2xl bg-[#131316]">
              <img
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1200&q=85"
                alt="Forno refratário a lenha aquecido a 480 graus"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />
            </div>

            {/* Overlapping secondary photo for asymmetric editorial layout */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 z-20 w-3/5 rounded-xl overflow-hidden border border-[#C9973A]/40 shadow-2xl bg-[#1A1A1E]">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=85"
                alt="Abertura manual da massa com hidratação alta"
                loading="lazy"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Copy & Process Metrics */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>O Manifesto da Massa</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC] leading-tight">
                Tempo, fogo e precisão.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#94A3B8] font-body leading-relaxed">
              <p>
                Acreditamos que a verdadeira pizza artesanal nasce do respeito ao tempo. Nossa massa passa por
                um longo processo de maturação a frio, desenvolvendo alvéolos generosos, leveza ímpar e aromas
                que remetem aos moinhos tradicionais da Itália.
              </p>
              <p>
                Cada disco é aberto manualmente, recebendo molho de tomates San Marzano colhidos no ponto exato
                de doçura, mozzarella fior di latte e ingredientes botânicos frescos. Ao entrar na câmara
                refratária sob o calor vivo da lenha, a transformação é quase instantânea: bordas coradas,
                centro macio e equilíbrio absoluto de texturas.
              </p>
            </div>

            {/* 3 Process Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              {PROCESS_METRICS.map((metric, idx) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-[#131316] border border-[#C9973A]/20 hover:border-[#C9973A]/50 transition-all"
                >
                  <div className="flex items-center gap-1.5 text-[#DFB25E] mb-1">
                    {idx === 0 ? (
                      <Timer className="w-4 h-4" />
                    ) : idx === 1 ? (
                      <Flame className="w-4 h-4 text-[#EA580C]" />
                    ) : (
                      <Sparkles className="w-4 h-4" />
                    )}
                    <span className="font-display text-2xl sm:text-3xl font-bold text-[#DFB25E]">
                      {metric.value}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC] mb-1">
                    {metric.label}
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] leading-normal line-clamp-2">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
