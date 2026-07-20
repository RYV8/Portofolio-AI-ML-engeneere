'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['ML Engineer.', 'AI Systems Builder.', 'Data Scientist.', 'AI Agent Developer.'];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const role = useTypewriter(roles);

  return (
    <section className="min-h-[92vh] flex flex-col justify-center relative px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">

      {/* Dot grid background */}
      <div className="hero-grid absolute inset-0 -z-10 opacity-40 pointer-events-none" />

      {/* Radial fade over the grid */}
      <div className="absolute inset-0 -z-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, #0C0A09 80%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="space-y-6 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center gap-3 text-accent font-mono text-sm"
        >
          <span className="w-8 h-px bg-accent" />
          <span>Hi, I&apos;m</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight gradient-text leading-tight"
        >
          Romaric Yemalin<br />VOSSANOU.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-4xl font-medium text-muted-foreground tracking-tight min-h-[1.3em]"
        >
          {role}
          <span className="animate-pulse text-accent ml-0.5">|</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I design and deploy end-to-end machine learning systems — from data pipelines
          and predictive models to autonomous LLM-powered agents.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="pt-6 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background hover:bg-accent/90 font-semibold text-sm rounded-md transition-all duration-200 shadow-lg shadow-accent/20"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-muted/60 hover:border-accent/60 hover:bg-muted text-foreground font-medium text-sm rounded-md transition-all duration-200 backdrop-blur-sm"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border/50 hover:border-accent/50 text-muted-foreground hover:text-accent font-medium text-sm rounded-md transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-6 md:left-12"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors group"
          aria-label="Scroll down"
        >
          <span className="font-mono text-xs tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity">scroll</span>
          <ArrowDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
