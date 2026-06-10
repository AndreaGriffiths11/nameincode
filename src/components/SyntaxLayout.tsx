import { motion } from 'motion/react';
import { Terminal, Share2, Download, Copy, Check } from 'lucide-react';
import { useState } from 'react';

// --- Header Component ---
export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 h-16 flex items-center justify-between px-8 border-b border-surface-container-highest bg-surface/70 backdrop-blur-2xl">
      <div className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary tracking-widest font-sans">
        NAME_IN_CODE
      </div>
      <nav className="hidden md:flex items-center gap-8 font-sans uppercase tracking-tighter text-xs font-semibold">
        <a className="text-primary border-b-2 border-primary cursor-pointer px-2 py-1 transition-colors hover:text-secondary">POSTER</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-2 py-1">GALLERY</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer px-2 py-1">DOCS</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-green-400 text-on-primary font-mono text-[10px] px-4 py-2 rounded-sm active:scale-95 transition-all font-bold hover:shadow-lg hover:shadow-primary/30">
          DOWNLOAD_SVG
        </button>
        <div className="flex gap-4 text-primary">
          <Terminal size={18} className="cursor-pointer hover:text-secondary hover:scale-110 transition-all" />
          <Share2 size={18} className="cursor-pointer hover:text-secondary hover:scale-110 transition-all" />
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
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, y: -4 }}
      className="group relative flex flex-col bg-gradient-to-br from-surface-container to-surface-container-lowest border border-surface-container-highest hover:border-primary/60 rounded-lg p-5 h-64 transition-all duration-300 cursor-crosshair overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 card-hover"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />

      <div className="absolute top-3 right-3 text-[9px] font-mono text-on-surface-variant group-hover:text-secondary transition-colors duration-300 uppercase font-semibold tracking-wider">
        {info.language}
      </div>

      <div className={`flex-grow flex items-center justify-center font-mono text-sm leading-tight whitespace-pre text-center ${info.colorClass} opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10`}>
        {info.code}
      </div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileHover={{ opacity: 1, y: -12 }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface-container-highest/95 border border-primary/40 text-primary px-4 py-2 rounded-lg text-[9px] font-mono whitespace-pre z-20 pointer-events-none backdrop-blur-lg shadow-xl"
      >
        {info.info}
      </motion.div>
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
    <section className="w-full max-w-4xl bg-gradient-to-br from-surface-container to-surface-container-lowest border border-surface-container-highest/50 rounded-xl overflow-hidden mt-12 shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-surface-container-high to-surface-container border-b border-surface-container-highest/50">
        <div className="flex items-center gap-2.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-lg shadow-red-500/30" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-lg shadow-yellow-500/30" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-lg shadow-green-500/30" />
        </div>
        <div className="text-[9px] font-mono text-on-surface-variant tracking-widest uppercase font-semibold">~/export/options.sh</div>
        <div className="w-12" />
      </div>

      <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-7 w-full">
          <motion.div className="flex flex-col gap-3">
            <div className="text-[9px] font-mono text-secondary uppercase tracking-widest font-semibold">Execute:</div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-between bg-gradient-to-r from-primary to-green-400 text-on-primary font-mono text-xs px-6 py-4 rounded-lg hover:shadow-2xl hover:shadow-primary/40 transition-all group font-bold"
            >
              <span>DOWNLOAD_PNG</span>
              <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </motion.button>
          </motion.div>

          <motion.div className="flex flex-col gap-3">
            <div className="text-[9px] font-mono text-secondary uppercase tracking-widest font-semibold">Copy:</div>
            <div className="flex items-center border border-surface-container-highest/50 rounded-lg overflow-hidden bg-surface-container-lowest/50 hover:border-primary/30 transition-colors">
              <input
                className="w-full bg-transparent px-4 py-3 text-on-surface font-mono text-xs focus:outline-none border-none"
                readOnly
                type="text"
                value={url}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopy}
                className="bg-surface-container-high/50 px-4 py-3 text-secondary hover:bg-surface-container-high hover:text-primary transition-all border-l border-surface-container-highest/50"
              >
                {copied ? <Check size={16} className="text-primary" /> : <Copy size={16} />}
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div className="flex flex-col items-center gap-4 border-l border-surface-container-highest/50 pl-8 w-full md:w-auto">
          <div className="text-[9px] font-mono text-on-surface-variant tracking-widest uppercase font-semibold">Scan to View</div>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            className="bg-white p-4 rounded-lg shadow-xl"
          >
            <img
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBHCto_Te_er2RJ5oFrsc_9IIl1lB3PKSKrUkmpPvu7AI8cyU2vN1BqdrAiTdU2fSZ69exbKBJmwOta-T-_Ix9mBE4U5dh3Hl-WdNk3N9LAIeGmVEcoThd_IfB8Gvk6m5P0SL5-pQx6VJHEz0mQgO-3rEs3zWObfzbnu_gR-ku46YB71wXI6SV2L-vaLQtdOOfP-zDCrO3v63wphisd61OcWHsrl_lYBZzog7dSPlvbEj0E7ddzJMxbwCHzNivS86saAtoJYApg9ux"
              alt="QR Code"
              className="w-32 h-32 mix-blend-multiply"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Footer Component ---
export function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-surface-container-highest/50 bg-gradient-to-r from-surface/50 to-surface-container/30 backdrop-blur-sm mt-20">
      <div className="text-on-surface-variant font-mono text-[9px] tracking-widest max-w-xs text-center md:text-left uppercase font-semibold">
        Every letter is built from real programming syntax...
      </div>
      <div className="flex items-center gap-8 text-[9px] font-mono tracking-widest">
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase font-semibold hover:scale-105 transform">Source Code</a>
        <span className="text-surface-container-highest">/</span>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase font-semibold hover:scale-105 transform">Debug Logs</a>
        <span className="text-surface-container-highest">/</span>
        <a className="text-on-surface-variant hover:text-primary transition-colors cursor-pointer uppercase font-semibold hover:scale-105 transform">Authors</a>
      </div>
      <div className="text-on-surface-variant font-mono text-[9px] tracking-widest uppercase font-semibold">
        v1.0.4 • System Ready
      </div>
    </footer>
  );
}
