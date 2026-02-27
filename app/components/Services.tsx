'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Diamond, ScanFace, Activity, Smile, Gem } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Gülüş Tasarımı',
    description: 'Yüz hatlarınızla altın oran uyumunda, tamamen size özel dijital gülüş mimarisi.',
    iconName: 'Diamond',
  },
  {
    id: '2',
    title: 'İmplantoloji',
    description: 'Kaybedilen dişlerinizi, biyouyumlu titanyum teknolojisi ile kusursuzca geri kazanın.',
    iconName: 'Activity',
  },
  {
    id: '3',
    title: 'Estetik Lamina',
    description: 'Diş dokusuna zarar vermeden uygulanan, ince porselen yapraklarla mükemmel estetik.',
    iconName: 'Gem',
  },
  {
    id: '4',
    title: 'Ortodonti',
    description: 'Şeffaf plaklar ile telsiz, görünmez ve konforlu diş düzeltme tedavisi.',
    iconName: 'Smile',
  },
  {
    id: '5',
    title: 'Lazer Beyazlatma',
    description: 'Diş hassasiyeti oluşturmadan, tek seansta doğal ve parlak beyazlık.',
    iconName: 'Sparkles',
  },
  {
    id: '6',
    title: 'Çene Cerrahisi',
    description: 'Gömülü dişler ve kist operasyonları için ileri cerrahi çözümler.',
    iconName: 'ScanFace',
  },
];

const iconMap: any = {
  Diamond: Diamond,
  Activity: Activity,
  Gem: Gem,
  Smile: Smile,
  Sparkles: Sparkles,
  ScanFace: ScanFace,
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-brand-cream relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
           <div className="lg:col-span-4">
              <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Uzmanlıklar</span>
              <h2 className="font-serif text-5xl md:text-6xl text-brand-charcoal leading-none mb-6">
                Tedavi <br/> <span className="italic text-brand-muted">Sanatı.</span>
              </h2>
           </div>
           <div className="lg:col-span-8 flex items-end">
              <p className="text-lg text-gray-600 font-light max-w-2xl border-l border-brand-charcoal/20 pl-8">
                Teknolojinin zirvesini, el işçiliğinin zarafetiyle birleştiriyoruz. Her tedavi, fonksiyon ve estetiğin mükemmel dengesini hedefler.
              </p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            return (
              <motion.a
                href="/tedaviler"
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-white p-12 border border-brand-charcoal/5 hover:border-brand-gold/30 hover:shadow-2xl hover:shadow-brand-gold/5 transition-all duration-500 overflow-hidden block"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-gold group-hover:h-full transition-all duration-500 ease-out"></div>
                
                <div className="mb-8 relative">
                   <div className="w-12 h-12 bg-brand-cream rounded-full flex items-center justify-center text-brand-charcoal group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
                      <Icon strokeWidth={1.5} className="w-6 h-6" />
                   </div>
                </div>
                
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:translate-x-2 transition-transform duration-300">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
                  {service.description}
                </p>

                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center text-xs font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-gold transition-colors">
                   <span>Detaylı Bilgi</span>
                   <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
