'use client';

import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-charcoal text-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          
          <div className="mb-12 md:mb-0">
             <div className="font-serif text-4xl font-bold mb-2">İNCI</div>
             <div className="text-[10px] uppercase tracking-[0.4em] text-brand-gold mb-8">Dental Studio</div>
             <p className="text-gray-400 max-w-xs font-light leading-relaxed">
               Mükemmellik bir eylem değil, bir alışkanlıktır. Diş hekimliğinde sanatın zirvesi.
             </p>
          </div>

          <div className="flex gap-16 md:gap-32 flex-wrap">
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Menu</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-light">
                   <li><a href="/" className="hover:text-white transition-colors">Ana Sayfa</a></li>
                   <li><a href="/tedaviler" className="hover:text-white transition-colors">Tedaviler</a></li>
                   <li><a href="/klinik" className="hover:text-white transition-colors">Klinik</a></li>
                   <li><a href="/hikayeler" className="hover:text-white transition-colors">Hikayeler</a></li>
                   <li><a href="/randevu" className="hover:text-white transition-colors">İletişim</a></li>
                </ul>
             </div>
             <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-6">Sosyal</h4>
                <ul className="space-y-4 text-sm text-gray-400 font-light">
                   <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Instagram className="w-4 h-4"/> Instagram</a></li>
                   <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4"/> LinkedIn</a></li>
                   <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Facebook className="w-4 h-4"/> Facebook</a></li>
                </ul>
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} İnci Diş Kliniği.</p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-white transition-colors">KVKK</a>
             <a href="#" className="hover:text-white transition-colors">Gizlilik</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
