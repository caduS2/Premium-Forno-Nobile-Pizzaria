import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const FinalCTA: React.FC = () => {
  const { setIsCartOpen, cart } = useCart();

  const handleAction = () => {
    if (cart.length > 0) {
      setIsCartOpen(true);
    } else {
      const el = document.querySelector('#cardapio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0C] relative overflow-hidden">
      {/* Background Graphic Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1800&q=80"
          alt="Pizzas nobres artesanais"
          loading="lazy"
          className="w-full h-full object-cover opacity-20 filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/80 to-[#0B0B0C]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-12 h-12 rounded-full border border-[#C9973A]/40 bg-[#131316] flex items-center justify-center text-[#DFB25E] mx-auto mb-6 shadow-[0_0_20px_rgba(201,151,58,0.25)]">
          <Flame className="w-6 h-6 text-[#EA580C]" />
        </div>

        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-[#F8FAFC] leading-tight">
          Seu próximo pedido começa aqui.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto font-body leading-relaxed">
          Escolha seus sabores e envie o pedido diretamente para a Forno Nobile.
        </p>

        <div className="mt-10 flex justify-center">
          <button
            id="btn-final-cta-order"
            onClick={handleAction}
            className="px-9 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-white hover:to-[#DFB25E] transition-all shadow-[0_8px_30px_rgba(201,151,58,0.35)] hover:shadow-[0_10px_35px_rgba(201,151,58,0.5)] flex items-center gap-3 cursor-pointer active:scale-95"
          >
            <span>Montar meu pedido</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
