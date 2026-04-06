export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
             <span className="text-2xl font-black text-white tracking-tighter">FATHIMA<span className="text-accent-cyan">.</span></span>
             <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Architecting the future of AI</p>
          </div>
          
          <div className="flex items-center gap-8">
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                {item}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-bold">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED
            </p>
            <p className="text-accent-blue text-[10px] font-mono">ESTD MMXXII</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
