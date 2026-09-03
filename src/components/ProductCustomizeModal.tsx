import React, { useState, useEffect } from 'react';
import { X, Plus, Minus, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PizzaSize } from '../types';

export const ProductCustomizeModal: React.FC = () => {
  const { customizingProduct, closeCustomize, addToCart, setIsCartOpen, formatCurrency } = useCart();
  const [selectedSize, setSelectedSize] = useState<PizzaSize>('Média');
  const [notes, setNotes] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Reset state on modal open
  useEffect(() => {
    if (customizingProduct) {
      setSelectedSize('Média');
      setNotes('');
      setQuantity(1);
    }
  }, [customizingProduct]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCustomize();
    };
    if (customizingProduct) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [customizingProduct, closeCustomize]);

  if (!customizingProduct) return null;

  const isLarge = selectedSize === 'Grande';
  const unitPrice = isLarge && customizingProduct.priceLarge ? customizingProduct.priceLarge : customizingProduct.price;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    addToCart(customizingProduct, selectedSize, notes, quantity);
    closeCustomize();
    setIsCartOpen(true);
  };

  return (
    <div
      id="customize-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeCustomize}
    >
      <div
        id="customize-modal-content"
        className="relative w-full max-w-lg bg-[#131316] border border-[#C9973A]/40 rounded-2xl overflow-hidden shadow-2xl shadow-black text-left animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="customize-product-title"
      >
        {/* Header Image banner */}
        <div className="relative aspect-[16/8] w-full bg-[#1A1A1E]">
          <img
            src={customizingProduct.image}
            alt={customizingProduct.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131316] via-[#131316]/40 to-black/30" />

          <button
            id="close-customize-modal"
            onClick={closeCustomize}
            aria-label="Fechar personalização"
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-[#F8FAFC] hover:text-[#DFB25E] border border-white/10 hover:border-[#C9973A] transition-all"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9973A]">
                Personalize sua pizza
              </span>
              <h3 id="customize-product-title" className="font-display text-2xl font-bold text-[#F8FAFC]">
                {customizingProduct.name}
              </h3>
            </div>
            <span className="font-display text-xl font-bold text-[#DFB25E]">
              {formatCurrency(unitPrice)}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Description */}
          <p className="text-sm text-[#94A3B8] leading-relaxed">
            {customizingProduct.description}
          </p>

          {/* Size Choice */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-3">
              Escolha o Tamanho:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                id="size-media"
                onClick={() => setSelectedSize('Média')}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  selectedSize === 'Média'
                    ? 'border-[#C9973A] bg-[#C9973A]/10 text-white ring-1 ring-[#C9973A]'
                    : 'border-white/10 bg-[#1A1A1E] text-[#94A3B8] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-display font-semibold text-sm">Média (6 fatias)</span>
                  {selectedSize === 'Média' && <Check className="w-4 h-4 text-[#C9973A]" />}
                </div>
                <span className="text-xs text-[#DFB25E] font-mono">
                  {formatCurrency(customizingProduct.price)}
                </span>
              </button>

              <button
                type="button"
                id="size-grande"
                onClick={() => setSelectedSize('Grande')}
                className={`p-3.5 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                  selectedSize === 'Grande'
                    ? 'border-[#C9973A] bg-[#C9973A]/10 text-white ring-1 ring-[#C9973A]'
                    : 'border-white/10 bg-[#1A1A1E] text-[#94A3B8] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="font-display font-semibold text-sm">Grande (8 fatias)</span>
                  {selectedSize === 'Grande' && <Check className="w-4 h-4 text-[#C9973A]" />}
                </div>
                <span className="text-xs text-[#DFB25E] font-mono">
                  {formatCurrency(customizingProduct.priceLarge || customizingProduct.price * 1.25)}
                </span>
              </button>
            </div>
          </div>

          {/* Observations */}
          <div>
            <label
              htmlFor="product-notes"
              className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-2"
            >
              Observações (opcional):
            </label>
            <input
              type="text"
              id="product-notes"
              maxLength={120}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: sem cebola, borda bem assada..."
              className="w-full px-3.5 py-2.5 bg-[#1A1A1E] border border-white/10 focus:border-[#C9973A] rounded-lg text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-none focus:ring-1 focus:ring-[#C9973A]"
            />
            <span className="block text-right text-[10px] text-[#94A3B8] mt-1">
              {notes.length}/120 caracteres
            </span>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#F8FAFC]">
              Quantidade:
            </span>
            <div className="flex items-center gap-3 bg-[#1A1A1E] border border-white/10 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-8 h-8 rounded flex items-center justify-center text-[#F8FAFC] hover:bg-white/10 active:scale-95"
                aria-label="Diminuir quantidade"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-sm font-bold w-6 text-center text-[#DFB25E]">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="w-8 h-8 rounded flex items-center justify-center text-[#F8FAFC] hover:bg-white/10 active:scale-95"
                aria-label="Aumentar quantidade"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-[#0B0B0C] border-t border-[#C9973A]/20 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={closeCustomize}
            className="text-xs uppercase tracking-wider text-[#94A3B8] hover:text-white px-3 py-2 cursor-pointer"
          >
            Cancelar
          </button>

          <button
            id="confirm-customize-add"
            type="button"
            onClick={handleConfirm}
            className="px-6 py-3 rounded-lg text-xs uppercase tracking-[0.16em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-white hover:to-[#DFB25E] transition-all shadow-[0_4px_16px_rgba(201,151,58,0.25)] flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Adicionar ao Pedido • {formatCurrency(totalPrice)}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
