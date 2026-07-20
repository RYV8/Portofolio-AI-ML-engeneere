'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

/* ─── Thematic SVG covers ─── */
function FlowLines({ accent = '#F59E0B' }) {
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#111111" />
          <stop offset="100%" stopColor="#1A1A1A" />
        </linearGradient>
        <linearGradient id="fl-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={accent} stopOpacity="0"   />
          <stop offset="50%"  stopColor={accent} stopOpacity="0.9" />
          <stop offset="100%" stopColor={accent} stopOpacity="0"   />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#fl-bg)" />
      {[30,60,90,120,150,180].map((y, i) => (
        <path
          key={y}
          d={`M-20,${y} Q${100 + i*10},${y-20} 200,${y} Q${300 - i*8},${y+20} 420,${y}`}
          fill="none"
          stroke="url(#fl-line)"
          strokeWidth="1"
          opacity={0.5 + i * 0.07}
        />
      ))}
      <circle cx="200" cy="110" r="28" fill={accent} fillOpacity="0.08" />
      <circle cx="200" cy="110" r="12" fill={accent} fillOpacity="0.18" />
      <circle cx="200" cy="110" r="4"  fill={accent} fillOpacity="0.9"  />
    </svg>
  );
}

function ClusterDots({ accent = '#F59E0B' }) {
  const dots = [
    [80,60],[130,80],[60,110],[100,140],[155,120],[200,70],[250,90],[300,60],[280,130],[340,100],
    [180,160],[230,150],[310,160],[350,50],[90,180],[240,40],
  ];
  const edges = [[0,1],[0,2],[1,3],[1,4],[2,3],[4,5],[5,6],[6,7],[6,8],[7,9],[8,9],[4,10],[10,11],[11,12],[9,12]];
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#111111" />
      {edges.map(([a,b],i) => (
        <line key={i}
          x1={dots[a][0]} y1={dots[a][1]} x2={dots[b][0]} y2={dots[b][1]}
          stroke={accent} strokeOpacity="0.18" strokeWidth="1"
        />
      ))}
      {dots.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3}
          fill={accent} fillOpacity={i % 3 === 0 ? 0.85 : 0.45}
        />
      ))}
    </svg>
  );
}

function NeuralGrid({ accent = '#F59E0B' }) {
  const cols = 5, rows = 3;
  const w = 400 / (cols + 1), h = 220 / (rows + 1);
  const nodes = Array.from({ length: cols * rows }, (_, i) => ({
    x: ((i % cols) + 1) * w,
    y: (Math.floor(i / cols) + 1) * h,
  }));
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#0F0F0F" />
      {/* Layer connections */}
      {nodes.slice(0, cols).map((n1) =>
        nodes.slice(cols, cols * 2).map((n2, j) => (
          <line key={`l1-${n1.x}-${j}`}
            x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
            stroke={accent} strokeOpacity="0.08" strokeWidth="0.8"
          />
        ))
      )}
      {nodes.slice(cols, cols * 2).map((n1) =>
        nodes.slice(cols * 2).map((n2, j) => (
          <line key={`l2-${n1.x}-${j}`}
            x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y}
            stroke={accent} strokeOpacity="0.08" strokeWidth="0.8"
          />
        ))
      )}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="6"
          fill={accent}
          fillOpacity={i % 5 === 0 ? 0.9 : 0.35}
          stroke={accent}
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function BarChart({ accent = '#F59E0B' }) {
  const bars = [0.4, 0.65, 0.85, 0.55, 0.92, 0.70, 0.48, 0.78];
  return (
    <svg viewBox="0 0 400 220" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="220" fill="#111111" />
      {bars.map((h, i) => {
        const bh = h * 150;
        const x = 30 + i * 44;
        return (
          <g key={i}>
            <rect x={x} y={200 - bh} width="28" height={bh} rx="3"
              fill={accent} fillOpacity={0.12 + i * 0.04}
            />
            <rect x={x} y={200 - bh} width="28" height="3" rx="1.5"
              fill={accent} fillOpacity="0.9"
            />
          </g>
        );
      })}
      <line x1="20" y1="200" x2="390" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
    </svg>
  );
}

/* ─── Projects data ─── */
const PROJECTS = [
  {
    title: 'Telecom Upsell Propensity Model',
    description:
      'End-to-end binary classification pipeline predicting which telecom customers are most likely to upgrade. Includes EDA, feature engineering, XGBoost + SHAP explainability, and a FastAPI serving layer.',
    tags: ['XGBoost', 'SHAP', 'FastAPI', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/RYV8/Telecom-Upsell-Propensity-Model',
    cover: FlowLines,
    highlight: 'ROC-AUC 0.87',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'Collaborative filtering engine using K-Means clustering on user behavior data. Exposed via REST API so any front-end can request personalized movie lists in real time.',
    tags: ['K-Means', 'Collaborative Filtering', 'FastAPI', 'NumPy'],
    github: 'https://github.com/RYV8/Movie-Recommendation-System',
    cover: ClusterDots,
    highlight: 'Clustering + REST API',
  },
  {
    title: 'Brain Tumor MRI Detector',
    description:
      'Custom CNN trained on 3,000+ MRI scans to classify brain tumor vs. healthy tissue. Uses PyTorch, Optuna hyperparameter search, and achieves 96%+ validation accuracy.',
    tags: ['PyTorch', 'CNN', 'Optuna', 'torchvision', 'Medical Imaging'],
    github: 'https://github.com/RYV8/Brain-Disease-Detector',
    cover: NeuralGrid,
    highlight: '96%+ Accuracy',
  },
  {
    title: 'Desktop AI Agent',
    description:
      'Local LLM-powered desktop automation agent that can execute shell commands, manage files, and interact with apps — all via natural language instructions using Ollama.',
    tags: ['Ollama', 'LangChain', 'Python', 'Tool Calling', 'Automation'],
    github: 'https://github.com/RYV8/Desktop-Agent',
    cover: BarChart,
    highlight: 'Local LLM Automation',
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 depth-elevated">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-amber-400 text-xs tracking-widest uppercase mb-3"
        >
          03. Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold font-display mb-16"
        >
          Systems I've Built
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 gap-8"
        >
          {PROJECTS.map((project) => {
            const Cover = project.cover;
            return (
              <motion.article
                key={project.title}
                variants={card}
                className="group relative bg-[#111111] rounded-2xl border border-white/5 overflow-hidden hover:border-amber-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
              >
                {/* SVG visual cover */}
                <div className="relative h-48 overflow-hidden">
                  <Cover />
                  {/* Highlight badge */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-mono text-xs text-amber-400 bg-black/60 border border-amber-400/30 backdrop-blur-sm">
                    {project.highlight}
                  </span>
                </div>

                {/* Description card — slight overlap */}
                <div className="relative z-10 -mt-4 mx-4 rounded-xl bg-[#1A1A1A] border border-white/5 p-5 group-hover:border-amber-400/12 transition-colors duration-300">
                  <h3 className="text-white font-semibold font-display text-lg mb-2 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-mono rounded bg-white/5 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
                    >
                      <ExternalLink size={13} />
                      View project
                    </a>
                  </div>
                </div>

                {/* Bottom padding */}
                <div className="h-5" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
