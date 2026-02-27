'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  {
    id: '01',
    title: 'İlk Muayene ve Değerlendirme',
    description: 'Ağız ve diş sağlığınız uzman hekimlerimiz tarafından detaylı olarak incelenir, ihtiyaçlarınız ve beklentileriniz belirlenir.',
    image: 'https://villaqrmenu.b-cdn.net/xwebica/ChatGPT.webp',
  },
  {
    id: '02',
    title: 'Kişiye Özel Tedavi Planı',
    description: 'Size en uygun tedavi seçenekleri teknolojik imkanlarla hazırlanır ve tüm süreç şeffaf bir şekilde tarafınıza sunulur.',
    image: 'https://villaqrmenu.b-cdn.net/xwebica/ChatGPT%20(1).webp',
  },
  {
    id: '03',
    title: 'Uygulama ve Takip',
    description: 'Uzman kadromuzla tedavi, hijyenik bir ortamda modern ve ağrısız yöntemlerle uygulanır, her aşamada bilgilendirilirsiniz.',
    image: 'https://villaqrmenu.b-cdn.net/xwebica/ChatGPT%20(2).webp',
  },
  {
    id: '04',
    title: 'Sonuç ve Bakım',
    description: 'Tedaviniz tamamlandıktan sonra, sağlıklı gülüşünüzü uzun yıllar korumanız için gerekli bakım ve kontrol randevuları planlanır.',
    image: 'https://villaqrmenu.b-cdn.net/xwebica/ChatGPT%20(3).webp',
  },
];

const TreatmentProcess = () => {
  return (
    <section className="py-24 lg:py-32 bg-brand-charcoal relative overflow-hidden">
      {/* Background Noise Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-brand-gold/60"></div>
            <span className="text-brand-gold text-sm font-bold uppercase tracking-widest block">
              Nasıl İlerliyoruz?
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-brand-gold/60"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-cream mb-6 leading-tight"
          >
            Mükemmel Gülüşe <br className="hidden md:block" /> Giden Yolculuğunuz
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            Size en iyi hizmeti sunmak için konforlu, şeffaf ve profesyonel bir süreç yönetiyoruz.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent -translate-x-1/2 z-0"></div>

          <div className="space-y-20 lg:space-y-32">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Timeline Dot (Desktop Only) */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-brand-charcoal border border-brand-gold/30 rounded-full items-center justify-center z-20 shadow-[0_0_40px_rgba(212,175,55,0.1)] group hover:border-brand-gold transition-colors duration-500"
                  >
                    <div className="absolute inset-2 border border-brand-gold/20 rounded-full group-hover:animate-ping opacity-20"></div>
                    <span className="text-brand-gold font-serif text-2xl z-10">{step.id}</span>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full lg:w-1/2 text-center lg:text-left z-10"
                  >
                    <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right text-right' : 'lg:items-start lg:text-left text-left'} w-full`}>
                      <span className="lg:hidden text-brand-gold font-serif text-5xl mb-6 opacity-40 leading-none">{step.id}</span>
                      <h3 className="text-3xl md:text-4xl font-serif text-brand-cream mb-6 tracking-wide group-hover:text-brand-gold transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Image Presentation */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full lg:w-1/2 z-10"
                  >
                    <div className="relative w-full max-w-[400px] aspect-square mx-auto lg:mx-0">
                      
                      {/* Decorative Rings */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/20 to-transparent rounded-[2rem] blur-2xl opacity-40 transition-opacity duration-700 hover:opacity-80"></div>
                      <div className="absolute inset-2 border border-brand-gold/10 rounded-[2rem] transform rotate-3 transition-transform duration-700 hover:rotate-6"></div>
                      <div className="absolute inset-2 border border-white/5 rounded-[2rem] transform -rotate-3 transition-transform duration-700 hover:-rotate-6"></div>
                      
                      {/* Image Container */}
                      <div className="relative w-full h-full p-8 md:p-12 bg-white/5 backdrop-blur-xl rounded-[2rem] border border-white/10 shadow-2xl transition-all duration-700 hover:scale-[1.03] group overflow-hidden">
                        {/* Shimmer Effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-0"></div>
                        
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-contain p-6 md:p-8 drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcess;
