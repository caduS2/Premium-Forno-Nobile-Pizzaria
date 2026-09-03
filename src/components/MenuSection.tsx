import React, { useState, useMemo } from 'react';
import { Utensils, Search, Sparkles } from 'lucide-react';
import { MENU_PRODUCTS, CATEGORIES_CONFIG } from '../data/business';
import { ProductCategory } from '../types';
import { ProductCard } from './ProductCard';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('destaques');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let list = MENU_PRODUCTS;

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q))
      );
    } else {
      list = list.filter((item) => item.category === selectedCategory);
    }

    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cardapio" className="py-24 bg-[#0E0E11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>Cardápio Contemporâneo</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC]">
            Nossas Criações Gastronômicas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-body leading-relaxed">
            Selecione uma categoria ou busque pelo seu sabor favorito. Monte sua comanda diretamente
            para o WhatsApp.
          </p>
        </div>

        {/* Filter Controls: Category Tabs & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#C9973A]/15">
          {/* Categories Horizontal Scroll on Mobile */}
          <div
            className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Categorias do Cardápio"
          >
            {CATEGORIES_CONFIG.map((cat) => {
              const isActive = selectedCategory === cat.id && !searchQuery;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  id={`tab-${cat.id}`}
                  onClick={() => {
                    setSelectedCategory(cat.id as ProductCategory);
                    setSearchQuery('');
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.14em] whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#DFB25E] via-[#C9973A] to-[#9B7023] text-[#0B0B0C] shadow-[0_2px_12px_rgba(201,151,58,0.3)] font-bold'
                      : 'bg-[#131316] text-[#94A3B8] hover:text-[#F8FAFC] border border-white/5 hover:border-[#C9973A]/40'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#C9973A] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              id="menu-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar sabor ou ingrediente..."
              aria-label="Buscar sabor ou ingrediente no cardápio"
              className="w-full pl-10 pr-4 py-2 bg-[#131316] border border-white/10 focus:border-[#C9973A] rounded-full text-xs text-[#F8FAFC] placeholder:text-[#94A3B8]/60 focus:outline-none focus:ring-1 focus:ring-[#C9973A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#94A3B8] hover:text-white"
                aria-label="Limpar busca"
              >
                Limpar
              </button>
            )}
          </div>
        </div>

        {/* Results Counter if searching */}
        {searchQuery && (
          <div className="mb-6 text-xs text-[#C9973A] flex items-center gap-1.5 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              Exibindo resultados para "{searchQuery}" ({filteredProducts.length} itens encontrados)
            </span>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#131316]/50 rounded-2xl border border-dashed border-white/10">
            <p className="text-[#94A3B8] text-sm">Nenhum produto encontrado com os termos pesquisados.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 rounded-lg text-xs uppercase tracking-wider text-[#DFB25E] border border-[#C9973A]/40"
            >
              Ver cardápio completo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
