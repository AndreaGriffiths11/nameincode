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

      <main className="flex-grow pt-24 pb-16 px-8 w-full max-w-7xl mx-auto flex flex-col items-center gap-16 relative z-10">
        
        {/* --- Hero Input Section --- */}
        <section className="w-full flex flex-col items-center gap-8 text-center pt-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter uppercase transition-all duration-500">
              <span className="text-surface-container-highest">&lt;</span>
              Generate
              <span className="text-surface-container-highest">&gt;</span>
              {" "}Your Identity
            </h1>
            <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-[0.5em] font-medium max-w-2xl px-4">
              Every letter is built from real programming syntax. Type your name to compile your unique typographic poster.
            </p>
          </div>

          <div 
            onClick={handleContainerClick}
            className="relative w-full max-w-xl group cursor-text"
          >
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <span className="font-mono text-2xl text-primary opacity-50">&gt;</span>
            </div>
            
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.slice(0, 12).toUpperCase())}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-surface-container-lowest border-b-2 border-primary border-t-0 border-l-0 border-r-0 text-primary font-mono text-3xl py-6 pl-14 pr-8 focus:ring-0 focus:border-secondary transition-colors bg-opacity-50 placeholder:text-surface-container-highest focus:outline-none uppercase tracking-[0.2em] rounded-none"
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
                  className="absolute bottom-8 right-8 w-4 h-8 bg-primary animate-cursor-blink" 
                />
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* --- Compiled Poster Grid Section --- */}
        <section className="w-full flex flex-col gap-8 bg-surface-container-lowest/30 p-8 md:p-12 border border-surface-container-highest relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Decorative Corner Markers */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

          <div className="flex items-center gap-3 self-start bg-surface-container border border-surface-container-highest px-3 py-1 text-[10px] font-mono text-primary font-bold tracking-widest">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>STATUS: COMPILED SUCCESSFULLY</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full">
            {name.split('').map((char: string, idx: number) => (
              <LetterCard key={`${char}-${idx}`} char={char} index={idx} />
            ))}
          </div>

          {name.length === 0 && (
            <div className="py-24 flex flex-col items-center gap-2 opacity-20">
              <div className="font-mono text-[10px] uppercase tracking-[0.8em] text-on-surface-variant animate-pulse">Awaiting Signal...</div>
            </div>
          )}
        </section>

        {/* --- Export Panel --- */}
        {name.length > 0 && <ExportPanel name={name} />}
      </main>

      <Footer />
    </div>
  );
}
