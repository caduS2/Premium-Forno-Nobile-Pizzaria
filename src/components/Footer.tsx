import React from 'react';
import { Flame, Phone, MapPin, ArrowUp, Instagram } from 'lucide-react';
import { BUSINESS } from '../data/business';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Assinaturas', href: '#assinaturas' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#contato' },
  ];

  return (
    <footer id="footer" className="bg-[#070708] border-t border-[#C9973A]/20 pt-16 pb-12 text-[#94A3B8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-[#C9973A]/40 bg-[#131316] flex items-center justify-center text-[#C9973A]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-[0.2em] text-[#F8FAFC] uppercase block">
                  {BUSINESS.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[#C9973A] uppercase font-sans font-medium block">
                  {BUSINESS.subtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              Tradição da pizza artesanal italiana com massa de fermentação lenta, ingredientes nobres
              e o calor inconfundível do forno a lenha.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#DFB25E] font-mono">
              Navegação
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#DFB25E] transition-colors py-1 block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#DFB25E] font-mono">
              Atendimento
            </h3>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9973A] flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.cityState}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9973A] flex-shrink-0" />
                <a
                  href={BUSINESS.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </p>
              {BUSINESS.instagramHandle && (
                <p className="flex items-center gap-2.5">
                  <Instagram className="w-4 h-4 text-[#C9973A] flex-shrink-0" />
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {BUSINESS.instagramHandle}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar & Mandatory Disclaimers */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs text-[#94A3B8]/70">
          <div>
            <p className="font-mono text-[11px]">
              © {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos reservados.
            </p>
            <p className="text-[10px] text-[#94A3B8]/60 mt-1 max-w-xl">
              {BUSINESS.commercialDisclaimer}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo da página"
            className="p-2.5 rounded-full border border-white/10 hover:border-[#C9973A] text-[#94A3B8] hover:text-[#DFB25E] bg-[#131316] transition-all cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
