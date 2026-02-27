'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('success');
    setTimeout(() => setFormStatus('idle'), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-brand-cream relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">İletişim</span>
              <h2 className="font-serif text-5xl md:text-7xl text-brand-charcoal mb-12">
                Tanışalım.
              </h2>
              
              <div className="space-y-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">Adres</p>
                  <p className="text-2xl font-serif text-brand-charcoal">Teşvikiye Mah. Vali Konağı Cad.<br/>No:12 Nişantaşı, İstanbul</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-brand-muted mb-2">Telefon & E-posta</p>
                  <p className="text-2xl font-serif text-brand-charcoal transition-colors hover:text-brand-gold cursor-pointer">+90 212 555 0000</p>
                  <p className="text-xl font-serif text-brand-charcoal mt-1">info@incidis.com</p>
                </div>
              </div>
            </div>

            <div className="mt-16 lg:mt-0">
               <div className="w-full h-px bg-brand-charcoal/10 mb-8"></div>
               <p className="text-sm text-gray-500">
                  Klinik önünde vale hizmetimiz mevcuttur.
               </p>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-20 shadow-soft">
            {formStatus === 'success' ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <span className="text-6xl mb-4">✨</span>
                  <h3 className="text-3xl font-serif text-brand-charcoal mb-4">Teşekkürler</h3>
                  <p className="text-gray-500 font-light">En kısa sürede sizinle iletişime geçeceğiz.</p>
               </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-2xl font-serif text-brand-charcoal mb-8">Online Randevu</h3>
              
              <div className="group relative">
                <input type="text" required className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-charcoal transition-colors text-brand-charcoal placeholder-transparent" id="name" placeholder="Ad Soyad" />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">Adınız Soyadınız</label>
              </div>

              <div className="group relative">
                <input type="tel" required className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-charcoal transition-colors text-brand-charcoal placeholder-transparent" id="phone" placeholder="Telefon" />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-gray-500 peer-focus:text-xs">Telefon Numaranız</label>
              </div>

              <div className="group relative">
                <select defaultValue="" className="peer w-full bg-transparent border-b border-gray-300 py-4 focus:outline-none focus:border-brand-charcoal transition-colors text-brand-charcoal appearance-none">
                  <option value="" disabled className="text-gray-400">Tedavi Seçiniz</option>
                  <option>Gülüş Tasarımı</option>
                  <option>İmplant</option>
                  <option>Genel Muayene</option>
                  <option>Diğer</option>
                </select>
                <div className="absolute right-0 top-4 pointer-events-none">↓</div>
              </div>

              <button type="submit" className="w-full bg-brand-charcoal text-white py-5 px-8 flex items-center justify-between group hover:bg-brand-black transition-colors mt-8">
                <span className="uppercase tracking-widest text-xs font-bold">Gönder</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
