'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, CheckCircle, ChevronRight, Stethoscope, Mail } from 'lucide-react';
import Image from 'next/image';

export default function RandevuAl() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const treatments = [
    { id: 'implant', name: 'İmplant Tedavisi', desc: 'Eksik dişlerin kalıcı çözümü' },
    { id: 'estetik', name: 'Gülüş Tasarımı', desc: 'Zirkonyum, lamina ve estetik çözümler' },
    { id: 'ortodonti', name: 'Ortodonti (Tel/Plak)', desc: 'Şeffaf plak veya tel tedavileri' },
    { id: 'genel', name: 'Genel Muayene', desc: 'Kontrol, temizlik, dolgu veya çekim' },
  ];

  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-charcoal font-sans flex flex-col">
      <Navbar />

      <main className="flex-1 pt-28 lg:pt-32">
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-8rem)]">
          
          {/* Left Side - Information & Visuals */}
          <div className="lg:w-2/5 relative bg-brand-charcoal text-white overflow-hidden p-10 lg:p-16 flex flex-col justify-center min-h-[500px] lg:min-h-full">
            <div className="absolute inset-0 z-0">
               <Image 
                 src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
                 alt="Klinik Görseli"
                 fill
                 className="object-cover opacity-20 filter grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent"></div>
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
            </div>

            <div className="relative z-10 flex-col flex h-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.3em]">
                    İlk Adımı Atın
                  </span>
                  <div className="h-px w-12 bg-brand-gold/30"></div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-serif mb-6 leading-[1.2]">
                  Mükemmel <br/> Gülüşünüze Randevu Alın.
                </h1>
                <p className="text-gray-400 font-light text-lg mb-12 max-w-sm">
                  Uzman hekimlerimizle görüşmek ve size özel tedavi planınızı oluşturmak için formu doldurabilirsiniz.
                </p>
              </motion.div>

              <div className="mt-auto space-y-6 hidden lg:block">
                 <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                       <MapPin className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Lokasyon</div>
                       <div className="font-medium text-sm">Nişantaşı, İstanbul</div>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                       <Phone className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                       <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Acil İletişim</div>
                       <div className="font-medium text-sm">+90 555 123 4567</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 bg-brand-cream border-l border-brand-charcoal/5 px-6 py-12 lg:px-24 lg:py-20 flex flex-col justify-center">
            
            <div className="max-w-xl w-full mx-auto lg:mx-0">
               {/* Progress Steps */}
               <div className="flex justify-between items-center mb-16 relative">
                 <div className="absolute top-1/2 left-0 w-full h-px bg-brand-charcoal/10 -z-10 -translate-y-1/2"></div>
                 <div 
                   className="absolute top-1/2 left-0 h-px bg-brand-gold -z-10 -translate-y-1/2 transition-all duration-500"
                   style={{ width: `${((step - 1) / 2) * 100}%` }}
                 ></div>
                 
                 {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-serif transition-colors duration-500 shadow-sm ${
                        step >= s ? 'bg-brand-gold text-brand-charcoal' : 'bg-white border text-gray-400'
                      }`}>
                         {step > s ? <CheckCircle className="w-4 h-4" /> : s}
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= s ? 'text-brand-charcoal' : 'text-gray-400'}`}>
                         {s === 1 ? 'Tedavi' : s === 2 ? 'Zaman' : 'Bilgiler'}
                      </span>
                    </div>
                 ))}
               </div>

               {/* Form Steps */}
               <form onSubmit={handleSubmit} className="relative min-h-[400px]">
                 
                 {/* Step 1: Treatment Selection */}
                 {step === 1 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                     <h2 className="text-2xl font-serif mb-8 text-brand-charcoal">Hangi tedavi için randevu almak istiyorsunuz?</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {treatments.map((t) => (
                         <button
                           key={t.id}
                           type="button"
                           onClick={() => setFormData({...formData, treatment: t.id})}
                           className={`p-6 text-left border rounded-lg transition-all duration-300 ${
                             formData.treatment === t.id 
                              ? 'border-brand-gold bg-brand-gold/5 shadow-sm' 
                              : 'border-brand-charcoal/10 hover:border-brand-charcoal/30 bg-white'
                           }`}
                         >
                           <Stethoscope className={`w-6 h-6 mb-4 ${formData.treatment === t.id ? 'text-brand-gold' : 'text-gray-400'}`} />
                           <div className={`font-serif text-lg mb-1 ${formData.treatment === t.id ? 'text-brand-charcoal' : 'text-gray-700'}`}>{t.name}</div>
                           <div className="text-xs text-gray-500 leading-relaxed">{t.desc}</div>
                         </button>
                       ))}
                     </div>
                     <div className="mt-10 flex justify-end">
                       <button
                         type="button"
                         onClick={handleNext}
                         disabled={!formData.treatment}
                         className="flex items-center gap-2 px-8 py-4 bg-brand-charcoal text-white text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-charcoal/90 transition-colors"
                       >
                         Devam Et <ChevronRight className="w-4 h-4" />
                       </button>
                     </div>
                   </motion.div>
                 )}

                 {/* Step 2: Date & Time */}
                 {step === 2 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                     <h2 className="text-2xl font-serif mb-8 text-brand-charcoal">Size uygun bir tarih ve saat seçin</h2>
                     
                     <div className="mb-8 p-6 bg-white border border-brand-charcoal/10 rounded-lg">
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold flex items-center gap-2">
                         <Calendar className="w-4 h-4" /> Tarih Seçimi
                       </label>
                       <input 
                         type="date" 
                         className="w-full text-lg font-serif border-b border-gray-200 py-2 focus:outline-none focus:border-brand-gold hover:border-brand-gold/50 cursor-pointer bg-transparent transition-colors"
                         value={formData.date}
                         onChange={(e) => setFormData({...formData, date: e.target.value})}
                         min={new Date().toISOString().split('T')[0]}
                       />
                     </div>

                     <div className="mb-8">
                       <label className="block text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold flex items-center gap-2">
                         <Clock className="w-4 h-4" /> Saat Seçimi
                       </label>
                       <div className="grid grid-cols-4 gap-3">
                         {timeSlots.map((time) => (
                           <button
                             key={time}
                             type="button"
                             onClick={() => setFormData({...formData, time})}
                             className={`py-3 text-sm font-medium border rounded-md transition-all ${
                               formData.time === time
                                 ? 'border-brand-gold bg-brand-gold text-white shadow-md'
                                 : 'border-brand-charcoal/10 bg-white hover:border-brand-gold/50 text-gray-600'
                             }`}
                           >
                             {time}
                           </button>
                         ))}
                       </div>
                     </div>

                     <div className="mt-10 flex justify-between">
                        <button
                         type="button"
                         onClick={handlePrev}
                         className="px-8 py-4 text-gray-500 text-sm uppercase tracking-widest hover:text-brand-charcoal transition-colors font-bold"
                       >
                         Geri Dön
                       </button>
                       <button
                         type="button"
                         onClick={handleNext}
                         disabled={!formData.date || !formData.time}
                         className="flex items-center gap-2 px-8 py-4 bg-brand-charcoal text-white text-sm uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed hover:bg-brand-charcoal/90 transition-colors"
                       >
                         Devam Et <ChevronRight className="w-4 h-4" />
                       </button>
                     </div>
                   </motion.div>
                 )}

                 {/* Step 3: Personal Details */}
                 {step === 3 && (
                   <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                     <h2 className="text-2xl font-serif mb-2 text-brand-charcoal">İletişim Bilgileriniz</h2>
                     <p className="text-sm text-gray-500 mb-8 font-light">Randevunuzu onaylamak için size ulaşacağız.</p>
                     
                     <div className="space-y-6">
                        <div className="relative">
                          <User className="absolute left-0 bottom-3 w-5 h-5 text-gray-400" />
                          <input 
                            type="text" 
                            placeholder="Adınız Soyadınız"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full pl-8 py-3 bg-transparent border-b border-brand-charcoal/20 focus:outline-none focus:border-brand-gold transition-colors font-medium placeholder:font-light"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="relative">
                            <Phone className="absolute left-0 bottom-3 w-5 h-5 text-gray-400" />
                            <input 
                              type="tel" 
                              placeholder="Telefon Numaranız"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full pl-8 py-3 bg-transparent border-b border-brand-charcoal/20 focus:outline-none focus:border-brand-gold transition-colors font-medium placeholder:font-light"
                            />
                          </div>
                          <div className="relative">
                            <Mail className="absolute left-0 bottom-3 w-5 h-5 text-gray-400" />
                            <input 
                              type="email" 
                              placeholder="E-posta Adresiniz"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full pl-8 py-3 bg-transparent border-b border-brand-charcoal/20 focus:outline-none focus:border-brand-gold transition-colors font-medium placeholder:font-light"
                            />
                          </div>
                        </div>
                        <div className="relative">
                          <textarea 
                            placeholder="Eklemek istediğiniz notlar (Opsiyonel)"
                            rows={3}
                            value={formData.notes}
                            onChange={(e) => setFormData({...formData, notes: e.target.value})}
                            className="w-full py-3 bg-transparent border-b border-brand-charcoal/20 focus:outline-none focus:border-brand-gold transition-colors resize-none placeholder:font-light"
                          />
                        </div>
                     </div>

                     <div className="mt-10 flex justify-between items-center">
                        <button
                         type="button"
                         onClick={handlePrev}
                         className="px-4 py-4 text-gray-500 text-sm uppercase tracking-widest hover:text-brand-charcoal transition-colors font-bold"
                       >
                         Geri Dön
                       </button>
                       <button
                         type="submit"
                         disabled={!formData.name || !formData.phone}
                         className="flex items-center gap-2 px-10 py-4 bg-brand-gold text-white text-sm uppercase tracking-widest font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c49b30] hover:shadow-lg transition-all"
                       >
                         Randevuyu Onayla
                       </button>
                     </div>
                   </motion.div>
                 )}

                 {/* Step 4: Success Message */}
                 {step === 4 && (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.9 }} 
                     animate={{ opacity: 1, scale: 1 }} 
                     className="h-full flex flex-col items-center justify-center text-center py-10"
                   >
                     <div className="w-24 h-24 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-12 h-12 text-brand-gold" />
                     </div>
                     <h2 className="text-3xl font-serif mb-4 text-brand-charcoal">Randevu Talebiniz Alındı</h2>
                     <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed font-light">
                       {formData.name}, randevu talebiniz başarıyla bize ulaştı. Seçtiğiniz {formData.date} tarihi için uygunluk durumunu kontrol edip size en kısa sürede <strong>{formData.phone}</strong> üzerinden geri dönüş yapacağız.
                     </p>
                     <a href="/" className="px-8 py-4 border border-brand-charcoal text-brand-charcoal text-sm font-bold uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all">
                       Ana Sayfaya Dön
                     </a>
                   </motion.div>
                 )}

               </form>
            </div>

          </div>
        </div>
      </main>

      {/* Adding a custom icon for MapPin since lucide MapPin is not currently imported above */}
      <Footer />
    </div>
  );
}
// Temporary quick custom icon inline
const MapPin = ({ className }: {className?: string}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 15 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
);
