import React from 'react';
import { Clock, Wheat, Flame, MessageSquare, ShieldCheck } from 'lucide-react';
import { DIFFERENTIALS } from '../data/business';

export const FeaturesSection: React.FC = () => {
  const icons = [
    <Clock key="clock" className="w-6 h-6 text-[#DFB25E]" />,
    <Wheat key="wheat" className="w-6 h-6 text-[#DFB25E]" />,
    <Flame key="flame" className="w-6 h-6 text-[#EA580C]" />,
    <MessageSquare key="msg" className="w-6 h-6 text-[#DFB25E]" />,
  ];

  return (
    <section id="experiencia" className="py-20 bg-[#0B0B0C] border-y border-[#C9973A]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={diff.id}
              className="p-6 rounded-2xl bg-[#131316] border border-white/5 hover:border-[#C9973A]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1A1A1E] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#C9973A]/50 transition-all">
                  {icons[index] || <ShieldCheck className="w-6 h-6 text-[#DFB25E]" />}
                </div>

                <h3 className="font-display text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#DFB25E] transition-colors">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] font-body leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#C9973A] uppercase">
                  Padrão Nobile
                </span>
                <span className="text-xs text-white/20 font-mono">0{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
