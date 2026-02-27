'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const Hero: React.FC = () => {
  // --- Parallax & Scroll Logic ---
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Fade out and move down on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // --- Mouse Interaction Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    // Calculate percentage (-0.5 to 0.5)
    const xPct = (clientX / width) - 0.5;
    const yPct = (clientY / height) - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  // Smooth movement with springs
  const xSpring = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const ySpring = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Different layers move at different speeds (Parallax)
  const bgX = useTransform(xSpring, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY = useTransform(ySpring, [-0.5, 0.5], ["-3%", "3%"]);
  
  const contentX = useTransform(xSpring, [-0.5, 0.5], ["-1%", "1%"]);
  const contentY = useTransform(ySpring, [-0.5, 0.5], ["-1%", "1%"]);
  
  const floatX = useTransform(xSpring, [-0.5, 0.5], ["4%", "-4%"]); // Inverted for depth
  const floatY = useTransform(ySpring, [-0.5, 0.5], ["4%", "-4%"]);

  return (
    <div 
      id="home" 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[900px] flex items-center justify-center overflow-hidden bg-brand-charcoal text-brand-cream"
    >
      
      {/* 1. Cinematic Background Layer */}
      <motion.div 
        style={{ y, x: bgX, translateY: bgY, scale: 1.15 }}
        className="absolute inset-0 z-0 select-none will-change-transform"
      >
        <div className="absolute inset-0 bg-brand-charcoal/20 z-10 mix-blend-multiply"></div>
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2070&auto=format&fit=crop"
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-60 grayscale-[40%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/80 via-transparent to-brand-charcoal z-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-30"></div>
      </motion.div>

      {/* 2. Main Content Centerpiece */}
      <motion.div 
        style={{ x: contentX, y: contentY, opacity }}
        className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-12 w-full flex flex-col items-center justify-center h-full pt-20"
      >
        
        {/* Decorative Top Line Animation */}
        <motion.div 
           initial={{ height: 0 }}
           animate={{ height: 120 }}
           transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
           className="w-px bg-gradient-to-b from-transparent via-brand-gold to-transparent absolute top-0 left-1/2 -translate-x-1/2 opacity-60"
        ></motion.div>

        {/* Floating Date/Badge */}
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1 }}
           className="absolute top-36 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-brand-gold/80 font-medium whitespace-nowrap"
        >
           Est. 2009 — İstanbul
        </motion.div>

        {/* Main Title - Massive Editorial Style */}
        <div className="text-center relative mt-10">
          <motion.h1 
             initial={{ y: 100, opacity: 0, rotateX: 20 }}
             animate={{ y: 0, opacity: 1, rotateX: 0 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="font-serif text-[18vw] leading-[0.8] text-brand-cream tracking-tight select-none drop-shadow-2xl"
             style={{ transformPerspective: 1000 }}
          >
             SANAT
          </motion.h1>
          
          <div className="flex items-center justify-center gap-6 md:gap-12 -mt-2 md:-mt-8 relative z-10">
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="h-px bg-white/30 w-12 md:w-40"
             />
             <motion.span 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="font-sans font-light text-xl md:text-4xl text-brand-gold uppercase tracking-[0.3em]"
             >
                & Bilim
             </motion.span>
             <motion.div 
               initial={{ scaleX: 0 }}
               animate={{ scaleX: 1 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="h-px bg-white/30 w-12 md:w-40"
             />
          </div>
        </div>

        {/* Description */}
        <motion.p 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1, delay: 1.2 }}
           className="mt-12 max-w-lg text-center text-brand-cream/70 font-light leading-relaxed text-sm md:text-lg mix-blend-plus-lighter"
        >
           Gülüşünüz, karakterinizin en saf yansımasıdır. <br className="hidden md:block"/>
           Nişantaşı'nın kalbinde, kişiye özel mükemmellik.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 1.4 }}
           className="mt-12 flex items-center gap-6"
        >
           <a href="/randevu" className="group relative overflow-hidden bg-brand-gold text-brand-charcoal px-10 py-4 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-500">
              <span className="relative z-10 flex items-center gap-2">
                 Randevu Al
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
           </a>
           <a href="/klinik" className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors text-xs uppercase tracking-widest">
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-brand-charcoal transition-all">
                 <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </span>
              Keşfet
           </a>
        </motion.div>

      </motion.div>

      {/* 3. Floating Interactive Elements (Reacting to mouse) */}
      
      {/* Left Element: Review Card */}
      <motion.div 
         initial={{ opacity: 0, x: -50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 1.8 }}
         className="absolute bottom-16 left-8 md:left-24 max-w-[280px] hidden md:block"
         style={{ x: floatX, y: floatY }} // Inverse parallax
      >
         <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 shadow-2xl hover:bg-white/10 transition-colors duration-500">
            <Quote className="w-6 h-6 text-brand-gold mb-4 opacity-70" />
            <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-4">
               "Hayatımda gördüğüm en zarif klinik deneyimi."
            </p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
               <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-gold to-brand-charcoal flex items-center justify-center text-white text-xs font-bold shadow-lg">A</div>
               <div>
                  <div className="text-xs text-white font-bold uppercase tracking-wider">Ayşe Y.</div>
                  <div className="text-[10px] text-gray-500 uppercase">Gülüş Tasarımı</div>
               </div>
            </div>
         </div>
      </motion.div>

      {/* Right Element: Stats */}
      <motion.div 
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 1.8 }}
         className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 hidden md:block"
         style={{ x: floatX, y: floatY }} // Inverse parallax
      >
         <div className="flex flex-col gap-8 items-end">
            <div className="text-right group cursor-default">
               <div className="text-6xl font-serif text-white group-hover:text-brand-gold transition-colors duration-500">4.9</div>
               <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 mt-1">Google Rating</div>
            </div>
            <div className="w-16 h-px bg-white/20"></div>
            <div className="text-right group cursor-default">
               <div className="text-6xl font-serif text-white group-hover:text-brand-gold transition-colors duration-500">15<span className="text-3xl align-top">+</span></div>
               <div className="text-[10px] uppercase tracking-widest text-brand-gold/70 mt-1">Yıllık Tecrübe</div>
            </div>
         </div>
      </motion.div>

    </div>
  );
};

export default Hero;
