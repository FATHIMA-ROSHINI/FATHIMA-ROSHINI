'use client';

import { motion } from 'framer-motion';
import { Code, Cpu, Database, Globe, Layers, Server, Smartphone, Terminal, Wifi } from 'lucide-react';
import { useEffect, useState } from 'react';

const icons = [Code, Cpu, Database, Globe, Layers, Server, Smartphone, Terminal, Wifi];

function RandomIcon({ delay }: { delay: number }) {
  const [Icon, setIcon] = useState<any>(null);
  const [position, setPosition] = useState({ top: '0%', left: '0%' });

  useEffect(() => {
    const RandomIconComponent = icons[Math.floor(Math.random() * icons.length)];
    setIcon(() => RandomIconComponent);
    setPosition({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });
  }, []);

  if (!Icon) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0], 
        scale: [0.5, 1, 0.5],
        y: [0, -20, 0] 
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut"
      }}
      className="absolute text-accent-cyan/20"
      style={{ top: position.top, left: position.left }}
    >
      <Icon size={24} />
    </motion.div>
  );
}

export default function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Floating Tech Icons */}
      {Array.from({ length: 15 }).map((_, i) => (
        <RandomIcon key={i} delay={i * 0.5} />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[128px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[128px]"
      />

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-10" />
    </div>
  );
}
