'use client';

import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Derin Soylu',
    comment: 'Estetik kaygılarımı anlayan ve buna saygı duyan bir ekip. Sonuç, hayal ettiğimden çok daha doğal.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mert Demir',
    comment: 'Yurtdışından sadece tedavi için geldim. Planlama, transfer, tedavi süreci... Her şey kusursuzdu.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Selin Kaya',
    comment: 'Diş hekimi korkumu yendiğim yer. O kadar sakin, o kadar profesyoneller ki kendinizi spa merkezinde sanıyorsunuz.',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-charcoal text-brand-cream relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-5">
         <span className="text-[20vw] font-serif leading-none whitespace-nowrap">STORIES</span>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
           <div>
             <h2 className="font-serif text-5xl mb-4">Hasta Hikayeleri</h2>
             <p className="text-gray-400 font-light">Güven, inşa ettiğimiz en önemli şeydir.</p>
           </div>
           <div className="flex gap-2">
              <span className="w-3 h-3 bg-brand-gold rounded-full"></span>
              <span className="w-3 h-3 bg-white/20 rounded-full"></span>
              <span className="w-3 h-3 bg-white/20 rounded-full"></span>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-sm p-10 border border-white/5 hover:border-brand-gold/50 transition-colors duration-500 group">
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-xl font-serif leading-relaxed mb-8 text-gray-200">"{t.comment}"</p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                 <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-serif text-lg">
                    {t.name.charAt(0)}
                 </div>
                 <div>
                    <div className="font-medium text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Onaylı Hasta</div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
