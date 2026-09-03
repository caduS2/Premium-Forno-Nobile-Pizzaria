import React from 'react';
import { Camera, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/business';

export const GallerySection: React.FC = () => {
  return (
    <section id="galeria" className="py-24 bg-[#0E0E11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C9973A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Galeria Gastronômica</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#F8FAFC]">
            O Olhar Artesanal
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#94A3B8] font-body">
            Cada detalhe conta a história do nosso processo: da farinha fina ao calor fulgurante do forno.
          </p>
        </div>

        {/* Controlled Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden bg-[#131316] border border-[#C9973A]/15 hover:border-[#C9973A]/60 transition-all duration-500 aspect-[4/3] md:aspect-auto ${
                item.id === 'gal-1' ? 'md:col-span-2 md:row-span-2 min-h-[380px]' : 'min-h-[220px]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C]/90 via-[#0B0B0C]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Caption Tag */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#DFB25E] block mb-1">
                  {item.category}
                </span>
                <h3 className="font-display text-lg sm:text-xl font-bold text-[#F8FAFC]">
                  {item.title}
                </h3>
              </div>

              {/* Subtle gold corner accent on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-[#DFB25E]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
