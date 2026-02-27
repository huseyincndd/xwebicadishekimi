'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mt-12"
                >
                   <img 
                      src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop" 
                      className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                      alt="Clinic Detail"
                   />
                </motion.div>
                <motion.div
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                   <img 
                      src="https://impeccabuild.com.au/wp-content/uploads/2020/07/Medical-Clinic-Interior-Design-Ideas-Medical-Fitouts-ImpeccaBuild-4-scaled.jpg" 
                      className="w-full h-[400px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                      alt="Clinic Interior"
                   />
                </motion.div>
             </div>
             {/* Circular badge */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center text-white text-center p-4 shadow-xl z-10">
                <div className="text-xs uppercase tracking-widest font-bold">
                   15 Yıl<br/>Deneyim
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Felsefemiz</span>
            <h2 className="font-serif text-5xl md:text-6xl text-brand-charcoal leading-[1.1] mb-8">
              Sadece dişleri değil,<br/>
              <span className="italic text-brand-muted">yaşamları iyileştiriyoruz.</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
              <p>
                İnci Dental Studio'da, diş hekimliğini bir sağlık hizmetinin ötesinde, bir sanat formu olarak görüyoruz. Minimalist yaklaşımımız, dingin klinik atmosferimiz ve şeffaf iletişimimiz, korkuyu güvene dönüştürür.
              </p>
              <p>
                Her detay, sizin konforunuz için tasarlandı. Bekleme salonumuzdaki kokudan, tedavi koltuğundaki ergonomiye kadar her şey, "iyi hissetmeniz" üzerine kurgulandı.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-12 border-t border-brand-charcoal/10 pt-8">
               <div>
                  <div className="text-4xl font-serif text-brand-charcoal mb-2">3D</div>
                  <div className="text-xs uppercase tracking-widest text-brand-muted">Dijital Görüntüleme</div>
               </div>
               <div>
                  <div className="text-4xl font-serif text-brand-charcoal mb-2">FDA</div>
                  <div className="text-xs uppercase tracking-widest text-brand-muted">Onaylı Materyaller</div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
