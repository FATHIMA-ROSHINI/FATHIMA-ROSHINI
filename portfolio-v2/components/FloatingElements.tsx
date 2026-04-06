'use client';

import { motion } from 'framer-motion';
import { Brain, Code, Cpu, Database, Network, Terminal } from 'lucide-react';

const icons = [
  { Icon: Brain, color: 'text-accent-cyan', top: '15%', left: '10%', delay: 0 },
  { Icon: Cpu, color: 'text-accent-blue', top: '20%', left: '80%', delay: 1 },
  { Icon: Code, color: 'text-white', top: '70%', left: '15%', delay: 0.5 },
  { Icon: Terminal, color: 'text-accent-cyan', top: '65%', left: '85%', delay: 1.5 },
  { Icon: Database, color: 'text-accent-blue', top: '40%', left: '90%', delay: 2 },
  { Icon: Network, color: 'text-white', top: '10%', left: '60%', delay: 0.8 },
];

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
      {icons.map((item, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${item.color}`}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5 + Math.random() * 5, 
            repeat: Infinity, 
            delay: item.delay,
            ease: "easeInOut" 
          }}
          style={{ top: item.top, left: item.left }}
        >
          <item.Icon size={idx % 2 === 0 ? 32 : 48} strokeWidth={1} />
        </motion.div>
      ))}
    </div>
  );
}
