'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download, Github } from 'lucide-react';
import NetworkBackground from './NetworkBackground';

const ROLES = [
  'ML Engineer',
  'AI Systems Builder',
  'Deep Learning Practitioner',
  'LLM Pipeline Architect',
  'Data Scientist',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0A0A0A] hero-grid flex items-center"
    >
      {/* Ambient blobs */}
      <div className="amber-bloom orb absolute -top-32 -left-32 w-96 h-96 opacity-20" />
      <div className="amber-bloom orb-reverse absolute bottom-0 right-0 w-80 h-80 opacity-15" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* ── Left column — text ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="flex flex-col gap-7"
        >
          {/* SYSTEM.INIT() badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase">SYSTEM.INIT()</span>
          </motion.div>

          {/* Name */}
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight font-display">
              <span className="gradient-text">Romaric</span>
              <br />
              <span className="text-white">VOSSANOU</span>
            </h1>
          </div>

          {/* Role cycler */}
          <div className="h-10 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIdx}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: 'easeInOut' as const }}
                className="text-xl sm:text-2xl font-medium text-amber-400 tracking-wide"
              >
                {ROLES[roleIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Tagline */}
          <p className="text-slate-400 text-base leading-relaxed max-w-lg">
            I build end-to-end machine learning systems — from raw data pipelines to deployed
            intelligent agents. Focused on turning research into working products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-all duration-200 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-300 text-sm hover:border-amber-400/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Download size={15} />
              Download CV
            </a>
            <a
              href="https://github.com/RYV8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-slate-300 text-sm hover:border-amber-400/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github size={15} />
              GitHub
            </a>
          </div>

          {/* Scroll hint */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-2 text-slate-500 text-xs mt-6 self-start hover:text-amber-400 transition-colors group"
          >
            <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
            Scroll to explore
          </motion.a>
        </motion.div>

        {/* ── Right column — NetworkBackground ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' as const }}
          className="relative hidden lg:flex items-center justify-center h-[500px] rounded-2xl border border-white/5 bg-[#111111] overflow-hidden"
        >
          <NetworkBackground />

          {/* Floating label */}
          <div className="relative z-10 text-center pointer-events-none">
            <p className="font-mono text-amber-400/60 text-xs tracking-widest uppercase">
              NEURAL NETWORK
            </p>
            <p className="font-mono text-white/20 text-xs mt-1">
              {ROLES[roleIdx]}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
