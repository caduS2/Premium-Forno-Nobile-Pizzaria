import React from 'react';
import { Plus, Sparkles, Flame, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MENU_PRODUCTS } from '../data/business';

export const SignatureSection: React.FC = () => {
  const { openCustomize, formatCurrency } = useCart();
  const signatures = MENU_PRODUCTS.filter((p) => p.isSignature);

  return (
    <section id="assinaturas" className="py-24 bg-[#0B0B0C] relative">
      {/* Decorative hairline separators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#C9973A]/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Assinaturas da Casa</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC]">
              Criações Exclusivas
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-[#94A3B8] max-w-md font-body leading-relaxed">
            Receitas autorais que traduzem a nossa paixão pelo calor da lenha e pela pureza dos melhores
            ingredientes italianos.
          </p>
        </div>

        {/* 3 Elaborate Signature Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {signatures.map((pizza, index) => (
            <article
              key={pizza.id}
              id={`signature-card-${pizza.id}`}
              className="group relative bg-[#131316] rounded-2xl overflow-hidden border border-[#C9973A]/20 hover:border-[#C9973A]/60 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(201,151,58,0.15)]"
            >
              {/* Image Container with Zoom & Vignette */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#1A1A1E]">
                <img
                  src={pizza.image}
                  alt={`Pizza ${pizza.name} - Forno Nobile`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/30 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0B0B0C]/85 backdrop-blur-md border border-[#C9973A]/40 text-[11px] font-semibold uppercase tracking-wider text-[#DFB25E] flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-[#EA580C]" />
                    {index === 0 ? 'Assinatura Principal' : 'Edição Especial'}
                  </span>
                </div>

                {/* Floating Quick Action indicator on hover */}
                <button
                  onClick={() => openCustomize(pizza)}
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#0B0B0C]/80 border border-[#C9973A]/50 text-[#DFB25E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-[#C9973A] hover:text-[#0B0B0C]"
                  title="Personalizar e adicionar"
                  aria-label={`Personalizar e adicionar ${pizza.name}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Text & Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <h3 className="font-display text-2xl font-bold text-[#F8FAFC] group-hover:text-[#DFB25E] transition-colors">
                      {pizza.name}
                    </h3>
                    <span className="font-display text-xl font-bold text-[#DFB25E] whitespace-nowrap">
                      {formatCurrency(pizza.price)}
                    </span>
                  </div>

                  <p className="text-sm text-[#94A3B8] font-body leading-relaxed mb-6">
                    {pizza.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8] font-mono tracking-wider">
                    Opção Média & Grande
                  </span>

                  <button
                    id={`btn-add-signature-${pizza.id}`}
                    onClick={() => openCustomize(pizza)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase tracking-[0.14em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-[#F8FAFC] hover:to-[#DFB25E] transition-all shadow-[0_4px_12px_rgba(201,151,58,0.2)] active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Adicionar ao pedido</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
