import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS } from '../data/business';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#C9973A]/20 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#0B0B0C]/90 via-[#0B0B0C]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#inicio"
              className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973A] rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-full border border-[#C9973A]/40 bg-[#1A1A1E] flex items-center justify-center text-[#C9973A] group-hover:border-[#C9973A] group-hover:shadow-[0_0_15px_rgba(201,151,58,0.3)] transition-all">
                <Flame className="w-5 h-5 text-[#C9973A] animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-[#F8FAFC] uppercase group-hover:text-[#DFB25E] transition-colors">
                  FORNO NOBILE
                </span>
                <span className="text-[10px] sm:text-xs tracking-[0.3em] text-[#C9973A] uppercase font-sans font-medium">
                  {BUSINESS.subtitle}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação Principal">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium tracking-wide text-[#F8FAFC]/80 hover:text-[#DFB25E] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9973A] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Actions: Cart + CTA */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Cart button */}
              <button
                id="header-cart-button"
                onClick={() => setIsCartOpen(true)}
                aria-label={`Ver carrinho de pedidos com ${totalItems} itens`}
                className="relative p-2.5 rounded-full border border-[#C9973A]/30 bg-[#131316] text-[#F8FAFC] hover:border-[#C9973A] hover:text-[#DFB25E] hover:bg-[#1A1A1E] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973A]"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span
                    id="cart-badge-count"
                    className="absolute -top-1.5 -right-1.5 min-w-[20px] h-5 px-1 rounded-full bg-[#EA580C] text-white text-[11px] font-bold flex items-center justify-center shadow-lg border border-[#0B0B0C] animate-in zoom-in"
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Main Desktop CTA */}
              <a
                href="#cardapio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#cardapio');
                }}
                className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] hover:from-[#F8FAFC] hover:to-[#DFB25E] rounded-md transition-all shadow-[0_4px_16px_rgba(201,151,58,0.25)] hover:shadow-[0_6px_22px_rgba(201,151,58,0.4)] active:scale-95"
              >
                Fazer Pedido
              </a>

              {/* Mobile menu toggle */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 rounded-lg border border-[#C9973A]/30 bg-[#131316] text-[#F8FAFC] hover:border-[#C9973A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9973A]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-30 bg-black/80 backdrop-blur-md lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 animate-in fade-in duration-300"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="flex flex-col space-y-4 max-w-sm mx-auto w-full text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] tracking-[0.25em] text-[#C9973A] uppercase mb-2">
              Menu de Navegação
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-lg font-serif tracking-wider text-[#F8FAFC] hover:text-[#DFB25E] py-2 border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-[#C9973A]/40 bg-[#1A1A1E] text-[#DFB25E] font-medium text-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ver Sacola ({totalItems} itens)</span>
              </button>
              <a
                href="#cardapio"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#cardapio');
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-[0.18em] font-bold text-[#0B0B0C] bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] rounded-lg shadow-lg"
              >
                Fazer Pedido
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-[#94A3B8]/60 mt-auto">
            {BUSINESS.name} • {BUSINESS.cityState}
          </div>
        </div>
      )}
    </>
  );
};
