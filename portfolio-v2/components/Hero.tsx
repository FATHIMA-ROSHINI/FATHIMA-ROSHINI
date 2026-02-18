'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] top-1/4 -left-20 animate-pulse" />
        <div className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] bottom-1/4 -right-20 animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-cyan-400 font-medium tracking-wide mb-4">HELLO, I'M</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            FATHIMA ROSHINI SIYAD
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI Engineer building intelligent systems that bridge software, 
            <span className="text-blue-400"> AI</span>, and real-world problem-solving.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#projects"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-transform hover:-translate-y-1 shadow-lg shadow-blue-500/25"
            >
              View My Work
            </Link>
            <Link 
              href="#contact"
              className="px-8 py-3 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 font-medium transition-all hover:-translate-y-1"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
