import React, { useState } from 'react';
import { Crown, Gift, Sparkles, Copy, Check, Info } from 'lucide-react';

export const LoyaltyDemo: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = 'NOBILE10';

  const handleCopyCoupon = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="py-20 bg-[#0E0E11] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#18181C] via-[#131316] to-[#0B0B0C] border border-[#C9973A]/30 p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Decorative ambient flare */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#C9973A]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#C9973A]/15">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9973A]/10 border border-[#C9973A]/30 text-[#DFB25E] text-[11px] font-mono uppercase tracking-widest mb-3">
                <Crown className="w-3.5 h-3.5" />
                <span>Experiência Demonstrativa</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FAFC]">
                Clube Nobile
              </h2>
              <p className="mt-2 text-sm text-[#94A3B8] max-w-xl font-body">
                Acumule benefícios a cada pedido e acompanhe vantagens exclusivas para clientes habituais.
              </p>
            </div>

            {/* Demonstrative coupon card */}
            <div className="flex-shrink-0 bg-[#0B0B0C] p-4 rounded-xl border border-[#C9973A]/30 flex flex-col items-center text-center">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#94A3B8] mb-1">
                Cupom Demonstrativo
              </span>
              <div className="flex items-center gap-2 bg-[#1A1A1E] px-3.5 py-1.5 rounded-lg border border-dashed border-[#C9973A]/50 mb-2">
                <span className="font-mono font-bold text-sm tracking-widest text-[#DFB25E]">
                  {couponCode}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCoupon}
                  className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors p-1"
                  title="Copiar cupom"
                  aria-label="Copiar código do cupom promocional"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              <span className="text-[10px] text-[#94A3B8]">
                {copied ? 'Código copiado com sucesso!' : 'Clique para copiar o código'}
              </span>
            </div>
          </div>

          {/* Demonstrative Loyalty Progression */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs uppercase font-mono tracking-wider text-[#F8FAFC] font-semibold flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#DFB25E]" />
                Nível Atual: Membro Ouro Nobile
              </span>
              <span className="text-xs font-mono text-[#DFB25E]">
                3 de 5 pedidos para o próximo mimo artesanal
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2.5 bg-[#0B0B0C] rounded-full overflow-hidden border border-white/10 p-0.5">
              <div className="h-full bg-gradient-to-r from-[#C9973A] via-[#DFB25E] to-[#EA580C] rounded-full w-3/5" />
            </div>

            {/* Benefits cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#0B0B0C]/70 border border-white/5 flex items-start gap-3">
                <Gift className="w-4 h-4 text-[#DFB25E] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-1">
                    Sobremesa Cortesia
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Tiramisù tradicional artesanal ao atingir 5 pedidos no ciclo.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0B0C]/70 border border-white/5 flex items-start gap-3">
                <Crown className="w-4 h-4 text-[#DFB25E] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-1">
                    Acesso a Sabores Secretos
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Cardápios sazonais exclusivos criados com ingredientes de safras especiais.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0B0C]/70 border border-white/5 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#DFB25E] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-xs font-bold text-[#F8FAFC] uppercase tracking-wider mb-1">
                    Atendimento Concierge
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Prioridade no forno para despachos rápidos em noites movimentadas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mandatory Explicit Disclaimer */}
          <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-center gap-2 text-center text-xs text-[#94A3B8]/70">
            <Info className="w-4 h-4 text-[#C9973A] flex-shrink-0" />
            <span>Recurso demonstrativo do projeto Premium.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
