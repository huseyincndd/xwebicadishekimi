'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Sparkles, Diamond, ScanFace, Activity, Smile, Gem, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
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

export default function TedavilerPage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navbar />
      
      {/* Header Section */}
      <PageHero
        subtitle="Uzmanlık Alanlarımız"
        title={
          <>
            Tedavi Sanatı
          </>
        }
        description="Her gülüş bir parmak izi kadar benzersizdir. En son teknoloji ve sanatsal dokunuşlarla, size en uygun tedaviyi tasarlıyoruz."
      />

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.iconName] || Sparkles;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group relative bg-white p-10 border border-brand-charcoal/5 shadow-sm hover:shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 rounded-sm"
                >
                  <div className="w-14 h-14 bg-brand-cream rounded-full flex items-center justify-center text-brand-charcoal group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300 mb-8">
                    <Icon strokeWidth={1.2} className="w-7 h-7" />
                  </div>
                  
                  <h3 className="text-3xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 font-light leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span>
                      Uzman Hekim Kontrolü
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span>
                      Dijital Planlama
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mr-3"></span>
                      Ağrısız Uygulama
                    </li>
                  </ul>

                  <a href="/randevu" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-charcoal group-hover:text-brand-gold transition-colors">
                    Randevu Al 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-brand-charcoal/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-6">
              Mükemmel gülüşünüzü keşfetmeye hazır mısınız?
            </h2>
            <a href="/randevu" className="inline-block bg-brand-charcoal text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-brand-gold transition-colors duration-300">
              Hemen Randevu Alın
            </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
