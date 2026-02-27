'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Tedaviler', href: '/tedaviler' },
    { name: 'Klinik', href: '/klinik' },
    { name: 'Hikayeler', href: '/hikayeler' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-brand-cream/80 backdrop-blur-xl border-b border-brand-charcoal/5 py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex-shrink-0 z-50">
              <a href="/" className="group flex flex-col items-center justify-center">
                <span className={`font-serif text-3xl font-semibold tracking-tighter transition-colors duration-500 ${isScrolled || isOpen ? 'text-brand-charcoal' : 'text-white'}`}>
                  İNCI
                </span>
                <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-500 ${isScrolled || isOpen ? 'text-brand-gold' : 'text-white/70'}`}>
                  Dental Studio
                </span>
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12">
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm uppercase tracking-widest font-medium relative group ${
                      isScrolled ? 'text-brand-charcoal' : 'text-white'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? 'bg-brand-charcoal' : 'bg-white'}`}></span>
                  </a>
                ))}
              </div>
              
              <a
                href="/randevu"
                className={`px-8 py-3 text-xs uppercase tracking-widest font-bold border transition-all duration-500 ${
                  isScrolled
                    ? 'border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white'
                    : 'border-white text-white hover:bg-white hover:text-brand-charcoal'
                }`}
              >
                Randevu Al
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-50 flex items-center gap-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors ${isScrolled || isOpen ? 'text-brand-charcoal' : 'text-white'}`}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 bg-brand-cream z-40 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-brand-charcoal hover:text-brand-gold transition-colors italic"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.5 }}
                 href="/randevu"
                 onClick={() => setIsOpen(false)}
                 className="mt-8 px-10 py-4 border border-brand-charcoal text-brand-charcoal text-sm uppercase tracking-widest hover:bg-brand-charcoal hover:text-white transition-all"
              >
                Randevu Oluştur
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
