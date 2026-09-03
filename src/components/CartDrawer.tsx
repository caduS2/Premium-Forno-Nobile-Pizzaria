import React, { useState } from 'react';
import {
  X,
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Send,
  MapPin,
  Store,
  AlertCircle,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS } from '../data/business';
import { FulfillmentType } from '../types';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    subtotal,
    totalItems,
    formatCurrency,
  } = useCart();

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');

  // Checkout form state
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>('delivery');
  const [address, setAddress] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [formErrors, setFormErrors] = useState<{ name?: string; address?: string }>({});

  if (!isCartOpen) return null;

  const handleClose = () => {
    setIsCartOpen(false);
    setStep('cart');
    setFormErrors({});
  };

  const handleProceedToCheckout = () => {
    if (cart.length === 0) return;
    setStep('checkout');
  };

  const handleSendWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { name?: string; address?: string } = {};
    if (!customerName.trim()) {
      errors.name = 'Por favor, informe seu nome.';
    }
    if (fulfillmentType === 'delivery' && !address.trim()) {
      errors.address = 'Por favor, informe seu endereço completo de entrega.';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Build cleanly spaced WhatsApp message with professional hierarchy
    const sections: string[] = [];

    // Header
    sections.push('🍕 *NOVO PEDIDO — FORNO NOBILE*');

    // Customer info
    const customerLines = [`👤 *Cliente:* ${customerName.trim()}`];
    if (customerPhone.trim()) {
      customerLines.push(`📱 *WhatsApp:* ${customerPhone.trim()}`);
    }
    sections.push(customerLines.join('\n'));

    // Fulfillment info
    const fulfillmentLines = [
      `🚚 *Atendimento:* ${fulfillmentType === 'delivery' ? 'Delivery' : 'Retirada no Balcão'}`,
    ];
    if (fulfillmentType === 'delivery' && address.trim()) {
      fulfillmentLines.push(`📍 *Endereço:* ${address.trim()}`);
    }
    sections.push(fulfillmentLines.join('\n'));

    // Items list
    const itemsFormatted = cart
      .map((item) => {
        const titleLine = `${item.quantity}x ${item.name}${item.size ? ` — ${item.size}` : ''}`;
        const priceLine = `💰 ${formatCurrency(item.unitPrice * item.quantity)}`;
        const noteLine = item.notes && item.notes.trim() ? `\n📝 Observação: ${item.notes.trim()}` : '';
        return `${titleLine}\n${priceLine}${noteLine}`;
      })
      .join('\n\n');

    sections.push(`🛒 *PEDIDO*\n\n${itemsFormatted}`);

    // Total
    sections.push(`💵 *Total estimado: ${formatCurrency(subtotal)}*`);

    // General order notes if present
    if (orderNotes.trim()) {
      sections.push(`📌 *Observações gerais:*\n${orderNotes.trim()}`);
    }

    // Friendly closing text
    sections.push('Olá! Gostaria de confirmar a disponibilidade e o tempo estimado do pedido.');

    const messageText = sections.join('\n\n');
    const encodedUrl = `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp
    window.open(encodedUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="cart-drawer-overlay"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-300"
      onClick={handleClose}
    >
      <div
        id="cart-drawer-panel"
        className="relative w-full max-w-md h-full bg-[#131316] border-l border-[#C9973A]/25 shadow-2xl flex flex-col justify-between text-[#F8FAFC] animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={step === 'cart' ? 'Carrinho de Pedidos' : 'Finalizar Pedido'}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#C9973A]/20 bg-[#0B0B0C] flex items-center justify-between">
          <div className="flex items-center gap-3">
            {step === 'checkout' && (
              <button
                type="button"
                onClick={() => setStep('cart')}
                className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/5 mr-1"
                aria-label="Voltar para a sacola"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
            )}
            <div className="w-8 h-8 rounded-lg bg-[#C9973A]/10 border border-[#C9973A]/30 flex items-center justify-center text-[#DFB25E]">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display text-lg font-bold text-[#F8FAFC]">
                {step === 'cart' ? 'Sua Sacola Nobile' : 'Finalizar Pedido'}
              </h2>
              <p className="text-[11px] text-[#94A3B8] font-mono">
                {step === 'cart'
                  ? `${totalItems} ${totalItems === 1 ? 'item selecionado' : 'itens selecionados'}`
                  : 'Preencha seus dados para envio pelo WhatsApp'}
              </p>
            </div>
          </div>

          <button
            id="close-cart-drawer"
            onClick={handleClose}
            className="p-2 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5 transition-all"
            aria-label="Fechar sacola"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {step === 'cart' ? (
            /* CART VIEW */
            cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 rounded-full bg-[#1A1A1E] border border-white/10 flex items-center justify-center text-[#94A3B8] mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <h3 className="font-display text-lg font-semibold text-[#F8FAFC] mb-2">
                  Sua sacola está vazia
                </h3>
                <p className="text-xs text-[#94A3B8] max-w-xs mb-6">
                  Explore nossas pizzas artesanais de fermentação natural e adicione seus sabores favoritos.
                </p>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold text-[#0B0B0C] bg-[#DFB25E] hover:bg-white transition-all"
                >
                  Ver Cardápio
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs text-[#94A3B8]">
                  <span>Itens no pedido</span>
                  <button
                    onClick={clearCart}
                    className="text-[11px] text-red-400/80 hover:text-red-400 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Limpar tudo</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    id={`cart-item-${item.id}`}
                    className="p-3.5 rounded-xl bg-[#1A1A1E] border border-white/5 hover:border-[#C9973A]/30 transition-all flex gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />

                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-semibold text-[#F8FAFC] truncate">
                            {item.name}
                          </h4>
                          {item.size && (
                            <span className="text-[10px] uppercase font-mono tracking-wider text-[#DFB25E]">
                              Tamanho: {item.size}
                            </span>
                          )}
                          {item.notes && (
                            <p className="text-[11px] text-[#94A3B8] italic truncate">
                              Obs: {item.notes}
                            </p>
                          )}
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#94A3B8] hover:text-red-400 p-1 transition-colors"
                          aria-label={`Remover ${item.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5">
                        <span className="text-xs font-mono font-bold text-[#DFB25E]">
                          {formatCurrency(item.unitPrice * item.quantity)}
                        </span>

                        {/* Quantity Controller */}
                        <div className="flex items-center gap-2 bg-[#131316] border border-white/10 rounded-md px-1 py-0.5">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-[#94A3B8] hover:text-white"
                            aria-label="Diminuir quantidade"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-mono font-semibold text-white min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-[#94A3B8] hover:text-white"
                            aria-label="Aumentar quantidade"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            /* CHECKOUT VIEW */
            <form id="checkout-form" onSubmit={handleSendWhatsAppOrder} className="space-y-4">
              {/* Customer Name */}
              <div>
                <label
                  htmlFor="checkout-name"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-1.5"
                >
                  Seu Nome *
                </label>
                <input
                  type="text"
                  id="checkout-name"
                  required
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    if (formErrors.name) setFormErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Como gostaria de ser chamado(a)?"
                  className={`w-full px-3.5 py-2.5 bg-[#1A1A1E] border rounded-lg text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-none focus:ring-1 focus:ring-[#C9973A] ${
                    formErrors.name ? 'border-red-500' : 'border-white/10 focus:border-[#C9973A]'
                  }`}
                />
                {formErrors.name && (
                  <span className="text-[11px] text-red-400 mt-1 block">{formErrors.name}</span>
                )}
              </div>

              {/* Customer WhatsApp */}
              <div>
                <label
                  htmlFor="checkout-phone"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-1.5"
                >
                  Seu WhatsApp (opcional)
                </label>
                <input
                  type="tel"
                  id="checkout-phone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full px-3.5 py-2.5 bg-[#1A1A1E] border border-white/10 focus:border-[#C9973A] rounded-lg text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-none focus:ring-1 focus:ring-[#C9973A]"
                />
              </div>

              {/* Fulfillment Type Toggle: Delivery vs Retirada */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-1.5">
                  Modalidade do Pedido *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType('delivery')}
                    className={`p-3 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      fulfillmentType === 'delivery'
                        ? 'border-[#C9973A] bg-[#C9973A]/10 text-[#F8FAFC] ring-1 ring-[#C9973A]'
                        : 'border-white/10 bg-[#1A1A1E] text-[#94A3B8] hover:border-white/20'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#C9973A]" />
                    <div>
                      <span className="block text-xs font-bold">Delivery</span>
                      <span className="text-[10px] text-[#94A3B8]">Receber em casa</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType('retirada')}
                    className={`p-3 rounded-lg border text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                      fulfillmentType === 'retirada'
                        ? 'border-[#C9973A] bg-[#C9973A]/10 text-[#F8FAFC] ring-1 ring-[#C9973A]'
                        : 'border-white/10 bg-[#1A1A1E] text-[#94A3B8] hover:border-white/20'
                    }`}
                  >
                    <Store className="w-4 h-4 text-[#C9973A]" />
                    <div>
                      <span className="block text-xs font-bold">Retirada</span>
                      <span className="text-[10px] text-[#94A3B8]">Buscar no balcão</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Address (Only shown if Delivery is selected) */}
              {fulfillmentType === 'delivery' && (
                <div className="animate-in fade-in duration-200">
                  <label
                    htmlFor="checkout-address"
                    className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-1.5"
                  >
                    Endereço Completo de Entrega *
                  </label>
                  <textarea
                    id="checkout-address"
                    rows={2}
                    required
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                      if (formErrors.address)
                        setFormErrors((prev) => ({ ...prev, address: undefined }));
                    }}
                    placeholder="Rua, número, complemento e bairro..."
                    className={`w-full px-3.5 py-2.5 bg-[#1A1A1E] border rounded-lg text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-none focus:ring-1 focus:ring-[#C9973A] ${
                      formErrors.address ? 'border-red-500' : 'border-white/10 focus:border-[#C9973A]'
                    }`}
                  />
                  {formErrors.address && (
                    <span className="text-[11px] text-red-400 mt-1 block">
                      {formErrors.address}
                    </span>
                  )}
                </div>
              )}

              {/* General Order Notes */}
              <div>
                <label
                  htmlFor="checkout-notes"
                  className="block text-xs uppercase tracking-wider font-semibold text-[#DFB25E] mb-1.5"
                >
                  Observações Gerais (opcional)
                </label>
                <input
                  type="text"
                  id="checkout-notes"
                  value={orderNotes}
                  onChange={(e) => setOrderNotes(e.target.value)}
                  placeholder="Ex: interfone 22, embalar individualmente..."
                  className="w-full px-3.5 py-2.5 bg-[#1A1A1E] border border-white/10 focus:border-[#C9973A] rounded-lg text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/50 focus:outline-none focus:ring-1 focus:ring-[#C9973A]"
                />
              </div>

              {/* Order Summary box */}
              <div className="p-3.5 rounded-xl bg-[#0B0B0C] border border-[#C9973A]/20 text-xs space-y-1.5">
                <div className="font-semibold text-[#DFB25E] uppercase tracking-wider text-[11px] pb-1 border-b border-white/5">
                  Resumo do Pedido ({totalItems} itens)
                </div>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-[#94A3B8]">
                    <span className="truncate pr-2">
                      {item.quantity}x {item.name} {item.size ? `(${item.size})` : ''}
                    </span>
                    <span className="font-mono text-[#F8FAFC]">
                      {formatCurrency(item.unitPrice * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer / Subtotal & Action */}
        <div className="p-5 border-t border-[#C9973A]/20 bg-[#0B0B0C] space-y-3">
          {/* Subtotal & items info */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#94A3B8] block">
                Subtotal Estimado
              </span>
              <span className="text-[10px] text-[#94A3B8]/70">Sem taxas adicionais simuladas</span>
            </div>
            <span className="font-display text-2xl font-bold text-[#DFB25E]">
              {formatCurrency(subtotal)}
            </span>
          </div>

          {/* Action button */}
          {step === 'cart' ? (
            <button
              id="btn-proceed-checkout"
              type="button"
              disabled={cart.length === 0}
              onClick={handleProceedToCheckout}
              className="w-full py-3.5 rounded-lg text-xs uppercase tracking-[0.16em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-white hover:to-[#DFB25E] disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-[0_4px_16px_rgba(201,151,58,0.25)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Finalizar Pedido</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              id="btn-send-whatsapp"
              type="submit"
              form="checkout-form"
              className="w-full py-3.5 rounded-lg text-xs uppercase tracking-[0.16em] font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Enviar Pedido pelo WhatsApp</span>
            </button>
          )}

          {/* Discreet demonstrative note required by prompt */}
          <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-[#94A3B8]/70 pt-1">
            <AlertCircle className="w-3 h-3 text-[#C9973A]" />
            <span>Experiência demonstrativa — pedido finalizado pelo WhatsApp.</span>
          </div>
        </div>
      </div>
    </div>
  );
};
