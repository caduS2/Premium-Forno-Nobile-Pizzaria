import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/business';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="contato" className="py-24 bg-[#0E0E11] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC]">
            Dúvidas & Informações
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-body">
            Tudo o que você precisa saber sobre como funciona a experiência digital da Forno Nobile.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl bg-[#131316] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#C9973A]/40"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973A]"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#F8FAFC] hover:text-[#DFB25E] transition-colors">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#DFB25E] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C9973A]/20 border-[#C9973A]' : 'bg-[#1A1A1E]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 pb-6 text-sm text-[#94A3B8] font-body leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200"
                  >
                    {item.answer}
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
