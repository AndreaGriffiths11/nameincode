import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header, LetterCard, ExportPanel, Footer } from './components/SyntaxLayout';

export default function App() {
  const [name, setName] = useState('ANDREA');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on initial load or clicking the container
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleContainerClick = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-surface relative">
      <Header />

      <main className="flex-grow pt-32 pb-16 px-8 w-full max-w-7xl mx-auto flex flex-col items-center gap-20 relative z-10">

        {/* --- Hero Input Section --- */}
        <section className="w-full flex flex-col items-center gap-10 text-center pt-6">
          <motion.div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary tracking-tighter uppercase transition-all duration-500"
            >
              <span className="text-surface-container-highest">&lt;</span>
              Generate
              <span className="text-surface-container-highest">&gt;</span>
              {" "}Your Identity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.4em] font-medium max-w-2xl mx-auto px-4 leading-relaxed"
            >
              Every letter is built from real programming syntax. Type your name to compile your unique typographic poster.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={handleContainerClick}
            className="relative w-full max-w-xl group cursor-text"
          >
            <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none">
              <span className="font-mono text-3xl text-primary opacity-60 group-hover:opacity-100 transition-opacity">&gt;</span>
            </div>

            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 12).toUpperCase())}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-gradient-to-b from-surface-container-low to-surface-container-lowest border-b-2 border-primary border-t-0 border-l-0 border-r-0 text-primary font-mono text-4xl py-7 pl-16 pr-8 focus:ring-0 focus:border-secondary transition-all duration-300 bg-opacity-50 placeholder:text-surface-container-highest focus:outline-none uppercase tracking-[0.2em] rounded-none focus:shadow-lg focus:shadow-primary/20"
              placeholder="ANDREA"
              spellCheck={false}
            />

            {/* Terminal Cursor */}
            <AnimatePresence>
              {isFocused && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute bottom-8 right-8 w-5 h-8 bg-gradient-to-b from-primary to-secondary animate-cursor-blink shadow-lg shadow-primary/50"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* --- Compiled Poster Grid Section --- */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full flex flex-col gap-8 bg-gradient-to-br from-surface-container-lowest/40 to-surface-container/20 p-10 md:p-14 border border-surface-container-highest/40 rounded-xl relative shadow-2xl hover:border-surface-container-highest/60 transition-all duration-300"
        >
          {/* Decorative Corner Markers */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary/50 rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary/50 rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary/50 rounded-br-lg" />

          <motion.div className="flex items-center gap-3 self-start bg-gradient-to-r from-surface-container/60 to-surface-container-high/40 border border-primary/30 px-4 py-2 text-[9px] font-mono text-primary font-bold tracking-widest rounded-lg backdrop-blur-sm">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-primary to-secondary glow-pulse"
            />
            <span>Status: Compiled Successfully</span>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 w-full">
            {name.split('').map((char: string, idx: number) => (
              <LetterCard key={`${char}-${idx}`} char={char} index={idx} />
            ))}
          </div>

          {name.length === 0 && (
            <motion.div className="py-32 flex flex-col items-center gap-4 opacity-30">
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="font-mono text-[11px] uppercase tracking-[0.8em] text-on-surface-variant font-semibold"
              >
                Awaiting Signal...
              </motion.div>
            </motion.div>
          )}
        </motion.section>

        {/* --- Export Panel --- */}
        {name.length > 0 && <ExportPanel name={name} />}
      </main>

      <Footer />
    </div>
  );
}
