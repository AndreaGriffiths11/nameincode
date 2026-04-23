import { motion } from 'motion/react';
import { Terminal, Share2, Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

// --- Header Component ---
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 h-14 flex items-center justify-between px-6 border-b border-surface-container-highest bg-surface/80 backdrop-blur-xl">
      <div className="text-xl font-black text-primary tracking-widest font-sans">
        NAME_IN_CODE
      </div>
      <nav className="hidden md:flex items-center gap-6 font-sans uppercase tracking-tighter text-xs font-medium">
        <a className="text-primary border-b-2 border-primary cursor-pointer px-1">POSTER</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">GALLERY</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer">DOCS</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 bg-primary text-on-primary font-mono text-[10px] px-4 py-2 rounded-none active:scale-95 transition-transform font-bold">
          DOWNLOAD_SVG
        </button>
        <div className="flex gap-3 text-primary">
          <Terminal size={18} className="cursor-pointer hover:text-white transition-colors" />
          <Share2 size={18} className="cursor-pointer hover:text-white transition-colors" />
        </div>
      </div>
    </header>
  );
}

// --- LetterCard Component ---
import { LETTER_MAPPINGS } from '../constants';

interface LetterCardProps {
  char: string;
  index: number;
  key?: string;
}

export function LetterCard({ char, index }: LetterCardProps) {
  const info = LETTER_MAPPINGS[char.toUpperCase()] || LETTER_MAPPINGS[' '];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group relative flex flex-col bg-surface-container-lowest border border-surface-container-highest rounded-none p-4 h-64 hover:border-primary transition-all cursor-crosshair overflow-hidden"
    >
      <div className="absolute top-2 right-2 text-[10px] font-mono text-on-surface-variant group-hover:text-primary transition-colors">
        {info.language}
      </div>
      
      <div className={`flex-grow flex items-center justify-center font-mono text-sm leading-tight whitespace-pre text-center ${info.colorClass} opacity-80 group-hover:opacity-100 transition-opacity`}>
        {info.code}
      </div>

      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-container-highest border border-primary text-primary px-3 py-1 rounded-none text-[10px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-pre z-20 pointer-events-none backdrop-blur-md">
        {info.info}
      </div>
    </motion.div>
  );
}

// --- ExportPanel Component ---
export function ExportPanel({ name }: { name: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://nameincode.dev/p/${name.toLowerCase()}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-4xl bg-surface-container-lowest border border-surface-container-highest rounded-none overflow-hidden mt-12">
      <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-surface-container-highest">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] font-mono text-on-surface-variant tracking-wider">~/export/options.sh</div>
        <div className="w-12" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-1 flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">EXECUTE:</div>
            <button className="w-full flex items-center justify-between bg-primary text-on-primary font-mono text-xs px-6 py-4 rounded-none hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all group active:scale-[0.98] font-bold">
              <span>DOWNLOAD_PNG</span>
              <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex flex-col gap-2">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">COPY:</div>
            <div className="flex items-center border border-surface-container-highest rounded-none overflow-hidden">
              <input 
                className="w-full bg-surface-container px-4 py-3 text-on-surface font-mono text-xs focus:outline-none border-none"
                readOnly
                type="text"
                value={url}
              />
              <button 
                onClick={handleCopy}
                className="bg-surface-container-high px-4 py-3 text-secondary hover:bg-surface-bright transition-colors border-l border-surface-container-highest"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-l border-surface-container-highest pl-8 w-full md:w-auto">
          <div className="text-[10px] font-mono text-on-surface-variant tracking-widest uppercase">SCAN TO VIEW</div>
          <div className="bg-white p-3 rounded-none">
            <img 
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBHCto_Te_er2RJ5oFrsc_9IIl1lB3PKSKrUkmpPvu7AI8cyU2vN1BqdrAiTdU2fSZ69exbKBJmwOta-T-_Ix9mBE4U5dh3Hl-WdNk3N9LAIeGmVEcoThd_IfB8Gvk6m5P0SL5-pQx6VJHEz0mQgO-3rEs3zWObfzbnu_gR-ku46YB71wXI6SV2L-vaLQtdOOfP-zDCrO3v63wphisd61OcWHsrl_lYBZzog7dSPlvbEj0E7ddzJMxbwCHzNivS86saAtoJYApg9ux" 
              alt="QR Code" 
              className="w-28 h-28 mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
export function Footer() {
  return (
    <footer className="w-full py-10 px-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-surface-container-highest bg-surface mt-20">
      <div className="text-on-surface-variant font-mono text-[10px] tracking-widest max-w-xs text-center md:text-left">
        Every letter is built from real programming syntax...
      </div>
      <div className="flex items-center gap-6 text-[10px] font-mono tracking-widest">
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase">SOURCE_CODE</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase">DEBUG_LOGS</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase">AUTHORS</a>
      </div>
      <div className="text-on-surface-variant font-mono text-[10px] tracking-widest uppercase">
        v1.0.4 // SYSTEM_READY // 2024
      </div>
    </footer>
  );
}
