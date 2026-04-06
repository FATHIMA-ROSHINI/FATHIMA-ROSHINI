'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative flex items-center justify-between transition-all duration-500 px-8 py-4 rounded-full ${
          scrolled ? 'bg-slate-900/80 backdrop-blur-xl border border-white/10 shadow-2xl' : 'bg-transparent border border-transparent'
        }`}>
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-black text-white tracking-tighter"
            >
              FATHIMA<span className="text-accent-cyan">.</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative text-slate-400 hover:text-white text-xs font-bold transition-colors uppercase tracking-[0.2em]"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link 
                href="#contact"
                className="px-6 py-2.5 bg-white text-slate-950 text-xs font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                Hire Me <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-full text-white"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full px-6 pt-4 md:hidden"
          >
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-xl">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-black text-white block hover:text-accent-cyan transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-slate-800">
                <Link 
                  href="#contact"
                  className="w-full py-4 bg-white text-slate-950 text-center font-black uppercase tracking-widest rounded-2xl block"
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
