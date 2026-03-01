'use client';

import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-2 text-accent font-mono text-sm mb-4">
          <span>Hi. I am</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
          Romaric Yemalin VOSSANOU.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-medium text-muted-foreground tracking-tight">
          AI & Machine Learning Engineer.
        </h2>
        
        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
          Building mathematically grounded and scalable AI systems.
        </p>
        
        <div className="pt-8 flex gap-4">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center px-6 py-3 border border-border bg-muted hover:bg-border text-foreground font-medium rounded-md transition-colors"
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md transition-colors"
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
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Scroll down">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
}
