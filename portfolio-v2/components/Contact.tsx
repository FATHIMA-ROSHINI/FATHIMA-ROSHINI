'use client';

import { Mail, Github, Linkedin, Send } from 'lucide-react';
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
    <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Open for collaborations on AI research, freelance projects, or just a tech chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 backdrop-blur-sm shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  placeholder="Let's build something amazing..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center group"
              >
                Send Message
                <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">Email Me</h3>
                <p className="text-slate-400 mb-2">Usually respond within 24 hours.</p>
                <a href="mailto:roshini@example.com" className="text-cyan-400 hover:underline">roshini@example.com</a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <Github size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">GitHub</h3>
                <p className="text-slate-400 mb-2">Check out my open source contributions.</p>
                <Link href="https://github.com/FATHIMA-ROSHINI" target="_blank" className="text-cyan-400 hover:underline">github.com/FATHIMA-ROSHINI</Link>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-700/10 rounded-lg text-blue-600">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">LinkedIn</h3>
                <p className="text-slate-400 mb-2">Let's connect professionally.</p>
                <Link href="https://linkedin.com/in/fathima-roshini" target="_blank" className="text-cyan-400 hover:underline">linkedin.com/in/fathima-roshini</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
