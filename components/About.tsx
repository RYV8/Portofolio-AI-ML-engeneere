'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Mail, Github } from 'lucide-react';

const STATS = [
  { value: '5+',  label: 'Projects on GitHub' },
  { value: '3',   label: 'ML Pipelines Built'  },
  { value: '4',   label: 'Tech Stacks Mastered' },
  { value: '1',   label: 'Year of Deep Focus'   },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function About() {
  return (
    <section id="about" className="py-28 depth-elevated">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-amber-400 text-xs tracking-widest uppercase mb-3"
        >
          About me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold font-display mb-16"
        >
          Who I Am
        </motion.h2>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Avatar + links ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            {/* Avatar — real photo */}
            <div className="relative group">
              {/* Amber ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-amber-400/60 via-amber-400/10 to-transparent group-hover:from-amber-400/80 transition-all duration-500" />
              <div className="relative w-56 h-56 rounded-full overflow-hidden border-2 border-amber-400/30 group-hover:border-amber-400/60 transition-colors duration-500 group-hover:shadow-[0_0_40px_rgba(245,158,11,0.35)]">
                <Image
                  src="/avatar.jpg"
                  alt="Romaric VOSSANOU"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>

            {/* Contact links */}
            <div className="flex flex-col gap-3">
              <a
                href="mailto:vossanouromaric@gmail.com"
                className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-amber-400 transition-colors"
              >
                <Mail size={14} />
                vossanouromaric@gmail.com
              </a>
              <a
                href="https://github.com/RYV8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 text-sm hover:text-amber-400 transition-colors"
              >
                <Github size={14} />
                github.com/RYV8
              </a>
              <p className="inline-flex items-center gap-2 text-slate-400 text-sm">
                <MapPin size={14} />
                West Africa · Open to relocation
              </p>
            </div>

            {/* Download CV */}
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-amber-400/30 text-amber-400 text-sm font-medium hover:bg-amber-400/10 transition-all duration-200"
            >
              Download CV
            </a>
          </motion.div>

          {/* ── Bio + stats ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <motion.p variants={item} className="text-slate-300 text-base leading-relaxed">
              I'm <span className="text-white font-semibold">Romaric Yemalin VOSSANOU</span>, an
              ML Engineer and AI systems builder. I design and implement full machine learning
              pipelines — from data ingestion and feature engineering to model training, evaluation,
              and production deployment. My focus is on making intelligent systems that actually
              work at scale.
            </motion.p>

            <motion.p variants={item} className="text-slate-400 text-base leading-relaxed">
              I work across the stack: classical ML with XGBoost &amp; scikit-learn, deep learning
              with PyTorch, LLM-powered agents with Ollama &amp; LangChain, and API services with
              FastAPI. I'm equally comfortable iterating in a Jupyter notebook and shipping
              production code on a containerized backend.
            </motion.p>

            {/* 4 StatCards */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4"
            >
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="depth-surface rounded-xl p-4 border border-white/5 text-center hover:border-amber-400/20 transition-colors duration-300 card-hover"
                >
                  <p className="text-3xl font-bold font-display text-amber-400">{s.value}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
