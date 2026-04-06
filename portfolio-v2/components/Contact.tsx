'use client';

import { Mail, Github, Linkedin, Send, MapPin, Phone, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.get('name')}`);
    const body = encodeURIComponent(`Message: ${formData.get('message')}\n\nFrom: ${formData.get('email')}`);
    window.location.href = `mailto:roshini@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 space-y-12"
          >
            <div className="space-y-6">
              <span className="text-accent-blue font-mono text-sm uppercase tracking-[0.3em] block">Connect</span>
              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
                Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-cyan">Conversation</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Whether you have a specific project in mind or just want to explore the possibilities of AI, I'm here to help.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'roshini@example.com', href: 'mailto:roshini@example.com' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', href: '#' },
                { icon: MessageSquare, label: 'Social', value: '@roshini_ai', href: 'https://twitter.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-6 group">
                  <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 text-accent-cyan group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/5 transition-all">
                    <item.icon size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">{item.label}</p>
                    <Link href={item.href} className="text-white font-medium hover:text-accent-blue transition-colors">{item.value}</Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
               {[Github, Linkedin].map((Icon, idx) => (
                 <Link 
                   key={idx} 
                   href="#" 
                   className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white hover:border-accent-blue transition-all"
                 >
                   <Icon size={20} />
                 </Link>
               ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3"
          >
            <div className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-accent-blue text-white placeholder-slate-700 transition-all outline-none"
                      placeholder="Jane Cooper"
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-accent-blue text-white placeholder-slate-700 transition-all outline-none"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-b border-slate-800 focus:border-accent-blue text-white placeholder-slate-700 transition-all outline-none resize-none"
                    placeholder="How can I help you today?"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-12 py-5 bg-white text-slate-950 font-black text-xs uppercase tracking-[0.2em] rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all shadow-xl shadow-white/10"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Submit Inquiry <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
