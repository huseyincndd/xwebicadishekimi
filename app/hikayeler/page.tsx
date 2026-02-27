'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Star, Quote, PlayCircle } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Derin Soylu',
    role: 'Estetik Diş Hekimliği Hastası',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2788&auto=format&fit=crop',
    quote: 'Gülümsemeyi unutmuşum. Estetik kaygılarımı anlayan ve buna saygı duyan bir ekip. Sonuç, hayal ettiğimden çok daha doğal. Şimdi fotoğraflarda saklanmıyorum.',
    rating: 5,
    treatment: 'Zirkonyum Kaplama & Gülüş Tasarımı',
    videoLink: '#'
  },
  {
    id: 2,
    name: 'Mert Demir',
    role: 'Google Yöneticisi, Yurtdışı Hastası',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2787&auto=format&fit=crop',
    quote: 'Yurtdışından sadece tedavi için geldim. Planlama, transfer, tedavi süreci... Her şey kusursuzdu. Almanya\'daki hekimim bile yapılan işin kalitesine şaşırdı.',
    rating: 5,
    treatment: 'İmplant & All-on-4',
    videoLink: '#'
  },
  {
    id: 3,
    name: 'Selin Kaya',
    role: 'Öğretmen',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop',
    quote: 'Diş hekimi korkumu yendiğim yer. O kadar sakin, o kadar profesyoneller ki kendinizi klinik değil bir spa merkezinde sanıyorsunuz. Teşekkürler.',
    rating: 5,
    treatment: 'Kanal Tedavisi & Estetik Dolgu',
  },
  {
    id: 4,
    name: 'Cem Yıldız',
    role: 'Mimar',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop',
    quote: 'Detaylara verdikleri önem bir mimar olarak beni çok etkiledi. Tedavi planımı bana 3D olarak sunmaları ve sürecin tıpkı planlandığı gibi işlemesi harikaydı.',
    rating: 5,
    treatment: 'Şeffaf Plak Tedavisi',
  },
  {
    id: 5,
    name: 'Ayşe Yılmaz',
    role: 'Emekli',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2861&auto=format&fit=crop',
    quote: 'Yıllardır ertelediğim implant tedavimi ağrısız ve sızısız bir şekilde tamamladılar. Yeni dişlerimle ilk elmamı yediğim anı asla unutmayacağım.',
    rating: 5,
    treatment: 'Çoklu İmplant Kayıpları',
    videoLink: '#'
  }
];

export default function Hikayeler() {
  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-cream font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="h-px w-8 lg:w-16 bg-brand-gold/50"></div>
              <span className="text-brand-gold text-xs lg:text-sm font-bold uppercase tracking-[0.3em]">
                Bizi Hastalarımızdan Dinleyin
              </span>
              <div className="h-px w-8 lg:w-16 bg-brand-gold/50"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-[1.1]">
              Değişen Hayatlar,<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-cream italic">Yenilenen Gülüşler</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Her gülüşün arkasında bir hikaye yatar. İşte bizimle birlikte korkularını yenen, 
              özgüvenini yeniden kazanan ve hayata yepyeni bir gülümsemeyle bakan hastalarımızın gerçek deneyimleri.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid Layout */}
      <section className="py-20 bg-[#111111] relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                className={`group relative bg-brand-charcoal border border-white/5 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/0 via-transparent to-brand-gold/0 group-hover:from-brand-gold/[0.03] transition-colors duration-500"></div>
                
                <div className="p-8 lg:p-10 relative z-10 flex flex-col h-full">
                  {/* Rating & Quote Icon */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                      ))}
                    </div>
                    <Quote className="w-10 h-10 text-brand-gold/10 rotate-180" />
                  </div>

                  {/* Quote content */}
                  <blockquote className={`flex-1 mb-8 font-serif text-gray-200 leading-relaxed ${index === 0 ? 'text-2xl lg:text-3xl lg:leading-normal' : 'text-xl'}`}>
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Patient Info Footer */}
                  <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/20 group-hover:border-brand-gold/50 transition-colors">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-white tracking-wide">{testimonial.name}</div>
                        <div className="text-xs text-brand-gold/80 flex items-center gap-2 mt-1">
                          <span>{testimonial.role}</span>
                          <span className="w-1 h-1 rounded-full bg-white/20"></span>
                          <span className="text-gray-400">{testimonial.treatment}</span>
                        </div>
                      </div>
                    </div>

                    {/* Optional Video Button indicator */}
                    {testimonial.videoLink && (
                      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 hover:bg-brand-gold text-brand-gold hover:text-brand-charcoal transition-all duration-300 group/btn">
                        <PlayCircle className="w-6 h-6 ml-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gold/5 pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
           <span className="text-[15vw] font-serif font-bold whitespace-nowrap">YENI BIR BASLANGIC</span>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Sizin Hikayeniz Nasıl Başlasın?</h2>
            <p className="text-xl text-gray-400 font-light mb-10 max-w-2xl mx-auto">
              Sağlıklı ve özgüven dolu bir gülüş sadece bir randevu uzaklığında. Gelin, sizin için en iyi tedavi planını birlikte oluşturalım.
            </p>
            <button className="px-10 py-5 bg-transparent border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-charcoal text-sm font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-sm">
              İlk Muayene Randevusu Alın
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
