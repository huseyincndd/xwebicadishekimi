'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
  subtitle: string;
  title: React.ReactNode;
  description: string;
}

const PageHero: React.FC<PageHeroProps> = ({ subtitle, title, description }) => {
  return (
    <section className="min-h-[600px] flex flex-col justify-center pt-32 pb-20 bg-brand-charcoal text-brand-cream relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center"
        >
          <span className="text-brand-gold text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
            {subtitle}
          </span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-none">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
