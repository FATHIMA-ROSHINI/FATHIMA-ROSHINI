'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import TechBackground from '@/components/TechBackground';
import TiltCard from '@/components/TiltCard';
import FloatingElements from '@/components/FloatingElements';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ROLES = ["AI Engineer", "Full Stack Developer", "Innovator", "Problem Solver"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20"
    >
      <TechBackground />
      <FloatingElements />

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            style={{ y: y1, opacity }}
            className="flex flex-col items-start text-left"
          >
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="group mb-8"
            >
              <div className="relative inline-flex items-center gap-3 px-5 py-2 rounded-full bg-slate-900/40 border border-slate-800 text-accent-cyan text-xs font-mono uppercase tracking-[0.2em] backdrop-blur-xl hover:border-accent-cyan/50 transition-colors duration-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
                </span>
                <span>Available for collaboration</span>
              </div>
            </motion.div>

            {/* Main Title with 3D shadow effect */}
            <div className="mb-8 relative group">
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-2 drop-shadow-2xl"
              >
                FATHIMA
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-cyan to-accent-blue bg-[length:200%_auto] animate-gradient leading-[0.9] tracking-tight drop-shadow-lg"
              >
                ROSHINI
              </motion.h1>
              {/* Subtle floating shadow under text */}
              <div className="absolute -inset-x-20 -inset-y-10 bg-accent-blue/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
            </div>

            {/* Role & Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-xl mb-12 space-y-6"
            >
              <div className="h-10">
                <p className="text-xl md:text-2xl font-light text-slate-300">
                  I am a <span className="font-mono text-accent-cyan font-semibold">{text}<span className="animate-pulse">_</span></span>
                </p>
              </div>
              
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Architecting intelligent ecosystems where <span className="text-white font-medium border-b border-accent-blue/30">Artificial Intelligence</span> meets 
                <span className="text-white font-medium border-b border-accent-cyan/30"> High-Performance Software</span>.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 w-full"
            >
              <Link 
                href="#projects"
                className="group relative px-8 py-4 bg-white text-slate-950 font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 text-center shadow-lg shadow-white/10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  EXPLORE WORK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link 
                href="#contact"
                className="group px-8 py-4 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-full hover:border-white hover:text-white transition-all duration-300 backdrop-blur-sm active:scale-95 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  GET IN TOUCH <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* 3D Visual Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative perspective-1000"
          >
            <TiltCard className="max-w-lg mx-auto">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl shadow-accent-cyan/20">
                <Image 
                  src="/images/profile.jpg"
                  alt="Profile Visual"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* 3D Floating Elements over the image */}
                <div 
                  className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none"
                  style={{ transform: "translateZ(50px)" }}
                >
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="p-6 bg-slate-950/40 backdrop-blur-xl rounded-2xl border border-white/10"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2">Innovation Driven</h3>
                    <p className="text-slate-300 text-sm">Focused on building autonomous systems and AI-powered solutions.</p>
                  </motion.div>
                </div>
              </div>
            </TiltCard>

            {/* Decorative background glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-cyan/20 rounded-full blur-[100px] -z-10 animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-blue/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cyan to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
