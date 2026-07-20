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
    <section className="min-h-[90vh] flex flex-col justify-center relative px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
          <span>Hi, I&apos;m</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Romaric Yemalin<br />VOSSANOU.
        </h1>

        <h2 className="text-3xl md:text-5xl font-medium text-muted-foreground tracking-tight min-h-[1.2em]">
          {role}
          <span className="animate-pulse text-accent">|</span>
        </h2>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
          I design and deploy end-to-end machine learning systems — from data pipelines 
          and predictive models to autonomous LLM-powered agents.
        </p>

        <div className="pt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-accent text-background hover:bg-accent/90 font-medium rounded-md transition-colors"
          >
            View Projects
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-muted hover:bg-border text-foreground font-medium rounded-md transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-border hover:border-accent text-muted-foreground hover:text-accent font-medium rounded-md transition-colors"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 animate-bounce"
      >
        <a
          href="#about"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
