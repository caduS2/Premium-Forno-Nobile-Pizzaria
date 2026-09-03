import React from 'react';
import { Plus, SlidersHorizontal, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { openCustomize, addToCart, formatCurrency, cart } = useCart();

  // Check if item is already in cart
  const cartItemCount = cart
    .filter((item) => item.productId === product.id)
    .reduce((sum, item) => sum + item.quantity, 0);

  const handleAction = () => {
    if (product.isPizza) {
      openCustomize(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div
      id={`product-card-${product.id}`}
      className="group bg-[#131316] rounded-xl overflow-hidden border border-[#C9973A]/15 hover:border-[#C9973A]/50 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
    >
      {/* Image and Badges */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#1A1A1E]">
        <img
          src={product.image}
          alt={`${product.name} - Forno Nobile`}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-transparent to-black/20" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full bg-[#0B0B0C]/85 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider font-semibold text-[#DFB25E]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* In-cart indicator badge */}
        {cartItemCount > 0 && (
          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-[#C9973A] text-[#0B0B0C] text-[10px] font-bold flex items-center gap-1 shadow-lg">
            <Check className="w-3 h-3" />
            <span>{cartItemCount} no pedido</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-display text-lg font-bold text-[#F8FAFC] group-hover:text-[#DFB25E] transition-colors leading-snug">
              {product.name}
            </h3>
            <span className="font-display text-base font-bold text-[#DFB25E] whitespace-nowrap">
              {formatCurrency(product.price)}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#94A3B8] font-body line-clamp-2 leading-relaxed mb-4">
            {product.description}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-white/5 flex items-center justify-between">
          <span className="text-[11px] text-[#94A3B8] uppercase tracking-wider font-mono">
            {product.isPizza ? 'Personalizável' : 'Unidade'}
          </span>

          <button
            id={`btn-add-menu-${product.id}`}
            onClick={handleAction}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs uppercase tracking-[0.12em] font-semibold text-[#DFB25E] border border-[#C9973A]/40 bg-[#1A1A1E] hover:bg-[#C9973A] hover:text-[#0B0B0C] transition-all cursor-pointer active:scale-95"
          >
            {product.isPizza ? (
              <>
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Escolher</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Adicionar</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
