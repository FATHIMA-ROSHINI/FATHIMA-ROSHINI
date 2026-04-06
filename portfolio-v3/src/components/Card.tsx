'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Card({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)]",
        className
      )}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
