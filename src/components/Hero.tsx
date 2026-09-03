import React from 'react';
import { ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2000&q=85"
          alt="Pizza artesanal saindo do forno a lenha refratário"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.15]"
          fetchPriority="high"
        />
        {/* Radial vignette & warm gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/60 to-[#0B0B0C]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EA580C]/10 via-transparent to-black/80" />
        {/* Subtle decorative grain texture overlay via svg pattern */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9973A]/40 bg-[#131316]/80 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFB25E]" />
          <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#DFB25E]">
            Experiência Artesanal
          </span>
        </motion.div>

        {/* Single Main H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] font-bold text-[#F8FAFC] tracking-tight max-w-4xl"
        >
          Do fogo à mesa, uma experiência feita para ser{' '}
          <span className="italic font-normal text-gold-gradient">lembrada</span>.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#F8FAFC]/80 max-w-2xl font-body font-light leading-relaxed"
        >
          Massa de fermentação lenta, ingredientes selecionados e sabores criados para transformar
          cada pedido em uma experiência.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <button
            id="hero-cta-explore"
            onClick={() => scrollToSection('#cardapio')}
            className="w-full sm:w-auto px-8 py-4 rounded-md text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-white hover:to-[#DFB25E] transition-all shadow-[0_6px_25px_rgba(201,151,58,0.35)] hover:shadow-[0_8px_30px_rgba(201,151,58,0.5)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explorar Cardápio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-cta-order"
            onClick={() => scrollToSection('#assinaturas')}
            className="w-full sm:w-auto px-8 py-4 rounded-md text-xs sm:text-sm uppercase tracking-[0.18em] font-medium text-[#F8FAFC] border border-[#C9973A]/40 bg-[#131316]/60 backdrop-blur-sm hover:border-[#C9973A] hover:bg-[#1A1A1E] transition-all flex items-center justify-center cursor-pointer"
          >
            Fazer Pedido
          </button>
        </motion.div>

        {/* Delicate Feature Strip under Hero */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 sm:gap-12 w-full max-w-2xl text-center"
        >
          <div>
            <span className="block font-display text-xl sm:text-2xl font-bold text-[#DFB25E]">48 Horas</span>
            <span className="text-[11px] sm:text-xs text-[#94A3B8] uppercase tracking-wider">Massa Matura</span>
          </div>
          <div className="border-x border-white/10 px-2 sm:px-6">
            <span className="block font-display text-xl sm:text-2xl font-bold text-[#DFB25E]">480°C</span>
            <span className="text-[11px] sm:text-xs text-[#94A3B8] uppercase tracking-wider">Forno a Lenha</span>
          </div>
          <div>
            <span className="block font-display text-xl sm:text-2xl font-bold text-[#DFB25E]">100%</span>
            <span className="text-[11px] sm:text-xs text-[#94A3B8] uppercase tracking-wider">Artesanal</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={() => scrollToSection('#assinaturas')}
          aria-label="Rolar para a seção Assinaturas da Casa"
          className="flex flex-col items-center text-[#DFB25E] focus:outline-none"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase font-mono">Role para descobrir</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1 text-[#C9973A]" />
        </button>
      </div>
    </section>
  );
};
