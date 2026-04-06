'use client';

import { PROFILE } from '@/lib/config';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TiltCard from '@/components/TiltCard';
import { Brain, Code2, Rocket, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '5+', icon: Rocket },
  { label: 'Projects Completed', value: '40+', icon: Code2 },
  { label: 'AI Models Built', value: '15+', icon: Brain },
  { label: 'Innovations', value: '10+', icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-slate-950 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-blue/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left Side: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2"
          >
            <TiltCard>
              <div className="relative aspect-square md:aspect-[4/5] w-full max-w-md mx-auto rounded-[2rem] overflow-hidden bg-slate-900 group shadow-2xl">
                <Image 
                  src="/images/feature.jpg"
                  alt="Professional feature"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                
                {/* Floating badge */}
                <div 
                  className="absolute bottom-8 left-8 right-8 p-6 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <p className="text-white font-bold text-lg mb-1">Innovation at Core</p>
                  <p className="text-accent-cyan text-xs uppercase tracking-widest font-mono">Senior AI Engineer</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 space-y-12"
          >
            <div className="space-y-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-accent-blue font-mono text-sm uppercase tracking-[0.3em] block"
              >
                Our Journey
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Digital Reality</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                {PROFILE.bio}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="group p-4 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-accent-cyan/50 transition-colors"
                >
                  <div className="flex items-center gap-3 text-accent-cyan mb-2">
                    <stat.icon size={20} />
                    <span className="text-2xl font-black text-white">{stat.value}</span>
                  </div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 flex flex-wrap gap-4">
               {PROFILE.skills.map((skill, idx) => (
                 <span 
                   key={skill}
                   className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-full text-xs font-mono text-slate-400 hover:text-white hover:border-accent-blue transition-all cursor-default"
                 >
                   {skill}
                 </span>
               ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
