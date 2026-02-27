'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function KlinikPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* 1. Cinematic Hero Section */}
      {/* Hero Section */}
      <PageHero 
        subtitle="Hakkımızda"
        title={
          <>
            Estetiğin <br/> <span className="italic text-brand-goldLight">Bilimle Buluşması.</span>
          </>
        }
        description="Nişantaşı'nın kalbinde, modern teknoloji ve butik hizmet anlayışıyla size özel bir diş hekimliği deneyimi."
      />

      {/* 2. Philosophy & Vision */}
      <section className="py-32 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              
              <div className="order-2 lg:order-1">
                 <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Vizyonumuz</span>
                 <h2 className="font-serif text-5xl md:text-6xl text-brand-charcoal leading-[1.1] mb-8">
                   Sakinlik, Güven ve <br/>
                   <span className="italic text-brand-muted">Mükemmeliyet.</span>
                 </h2>
                 
                 <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed">
                   <p>
                     İnci Dental Studio olarak, geleneksel diş hekimliği korkularını yıkan bir atmosfer yarattık. Kliniğimiz, steril bir sağlık kuruluşu olmanın ötesinde, kendinizi iyi hissedeceğiniz bir yaşam alanı olarak tasarlandı.
                   </p>
                   <p>
                     Minimalist tasarımımız, yumuşak aydınlatmalarımız ve aromaterapik kokularımızla, içeri girdiğiniz andan itibaren stresinizin azaldığını hissedeceksiniz.
                   </p>
                   <p>
                     Hekimlerimiz, sadece dişlerinizi tedavi etmez; yüz hatlarınıza, karakterinize ve beklentilerinize uygun, size özel gülüşü tasarlar.
                   </p>
                 </div>
              </div>

               <div className="relative order-1 lg:order-2 h-[600px]">
                  <div className="absolute top-0 right-0 w-4/5 h-4/5 overflow-hidden rounded-sm shadow-2xl">
                     <img 
                        src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2070&auto=format&fit=crop" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        alt="Vision"
                     />
                  </div>
                  <div className="absolute bottom-0 left-0 w-3/5 h-3/5 overflow-hidden rounded-sm border-8 border-white shadow-2xl z-10">
                      <img 
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                        alt="Detail"
                     />
                  </div>
               </div>
            </div>
          </div>
      </section>

      {/* 3. Standards & Values (Grid) */}
      <section className="py-24 bg-brand-cream/50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-12">
                <div className="bg-white p-10 shadow-soft hover:shadow-xl transition-shadow duration-300 border-t-2 border-brand-gold">
                   <ShieldCheck className="w-10 h-10 text-brand-charcoal mb-6 stroke-1" />
                   <h3 className="text-2xl font-serif text-brand-charcoal mb-4">Üstün Hijyen</h3>
                   <p className="text-gray-500 font-light leading-relaxed">
                      Hastalarımızın sağlığı önceliğimizdir. Uluslararası standartlarda sterilizasyon protokolleri ve tek kullanımlık malzemelerle tam güvence sağlıyoruz.
                   </p>
                </div>
                <div className="bg-white p-10 shadow-soft hover:shadow-xl transition-shadow duration-300 border-t-2 border-brand-gold">
                   <Sparkles className="w-10 h-10 text-brand-charcoal mb-6 stroke-1" />
                   <h3 className="text-2xl font-serif text-brand-charcoal mb-4">İleri Teknoloji</h3>
                   <p className="text-gray-500 font-light leading-relaxed">
                      3D tomografi, dijital ölçü alma sistemleri ve lazer teknolojisi ile tanı ve tedavi süreçlerini hatasız, hızlı ve konforlu hale getiriyoruz.
                   </p>
                </div>
                <div className="bg-white p-10 shadow-soft hover:shadow-xl transition-shadow duration-300 border-t-2 border-brand-gold">
                   <Heart className="w-10 h-10 text-brand-charcoal mb-6 stroke-1" />
                   <h3 className="text-2xl font-serif text-brand-charcoal mb-4">Şeffaf İletişim</h3>
                   <p className="text-gray-500 font-light leading-relaxed">
                      Tüm tedavi planını, maliyetleri ve süreci en baştan net bir şekilde konuşuyoruz. Sürprizlere yer yok, güvene dayalı bir ilişki var.
                   </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. The Team / Doctor Highlight */}
      <section className="py-32 bg-white">
         <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row gap-16 items-center">
               <div className="w-full md:w-1/3">
                  <div className="relative">
                     <div className="aspect-[3/4] bg-gray-200 overflow-hidden rounded-sm">
                        <img 
                           src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                           alt="Chief Dentist" 
                           className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                     </div>
                     <div className="absolute -bottom-6 -right-6 bg-brand-charcoal text-white p-6 shadow-xl max-w-[200px]">
                        <p className="font-serif text-xl italic">"Gülüş tasarımı bir mühendislik değil, sanattır."</p>
                     </div>
                  </div>
               </div>
               <div className="w-full md:w-2/3">
                  <h2 className="font-serif text-4xl mb-2 text-brand-charcoal">Dt. Zeynep İnci</h2>
                  <p className="text-brand-gold text-xs uppercase tracking-widest font-bold mb-8">Kurucu & Estetik Diş Hekimi</p>
                  
                  <div className="space-y-6 text-gray-600 font-light leading-relaxed mb-10">
                     <p>
                        2009 yılında İstanbul Üniversitesi Diş Hekimliği Fakültesi'nden mezun olan Dt. Zeynep İnci, estetik diş hekimliği üzerine Londra ve New York'ta ileri eğitimler almıştır.
                     </p>
                     <p>
                        Özellikle porselen laminalar, gülüş tasarımı ve implant üstü protezler konusunda uzmanlaşan İnci, "doğal ve fonksyionel estetik" yaklaşımını benimsemiştir. 
                     </p>
                     <p>
                        Türk Diş Hekimleri Birliği ve Estetik Diş Hekimliği Akademisi Derneği (EDAD) üyesidir.
                     </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-8">
                     <div>
                        <div className="text-3xl font-serif text-brand-charcoal">15+</div>
                        <div className="text-[10px] uppercase text-gray-400 mt-1">Yıllık Tecrübe</div>
                     </div>
                     <div>
                        <div className="text-3xl font-serif text-brand-charcoal">5k+</div>
                        <div className="text-[10px] uppercase text-gray-400 mt-1">Mutlu Hasta</div>
                     </div>
                     <div>
                        <div className="text-3xl font-serif text-brand-charcoal">20+</div>
                        <div className="text-[10px] uppercase text-gray-400 mt-1">Sertifika</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. CTA Styles */}
      <section className="py-24 bg-brand-charcoal text-white text-center">
         <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Siz de Ailemize Katılın</h2>
            <p className="text-gray-400 font-light mb-10">
               İlk muayeneniz için randevunuzu oluşturun, size özel tedavi planınızı birlikte hazırlayalım.
            </p>
            <a href="/randevu" className="inline-flex items-center gap-3 bg-brand-gold text-brand-charcoal px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
               Randevu Al <ArrowRight className="w-4 h-4" />
            </a>
         </div>
      </section>

      <Footer />
    </div>
  );
}
