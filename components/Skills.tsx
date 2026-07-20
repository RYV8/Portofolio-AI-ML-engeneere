'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    icon: '🧠',
    title: 'Machine Learning',
    skills: ['XGBoost', 'LightGBM', 'scikit-learn', 'CatBoost', 'SHAP', 'Optuna'],
  },
  {
    icon: '⚡',
    title: 'Deep Learning',
    skills: ['PyTorch', 'torchvision', 'Custom CNNs', 'Transfer Learning', 'Hugging Face'],
  },
  {
    icon: '🤖',
    title: 'LLM & Agents',
    skills: ['Ollama', 'LangChain', 'RAG Pipelines', 'Prompt Engineering', 'Tool Calling'],
  },
  {
    icon: '🔧',
    title: 'Data Engineering',
    skills: ['Pandas', 'NumPy', 'Polars', 'SQLite', 'Feature Engineering', 'ETL Pipelines'],
  },
  {
    icon: '🚀',
    title: 'MLOps & Deployment',
    skills: ['FastAPI', 'Docker', 'Git / GitHub', 'CI/CD', 'Jupyter', 'Weights & Biases'],
  },
  {
    icon: '📊',
    title: 'Visualization & BI',
    skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Streamlit', 'Power BI Basics'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemAnim = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-amber-400 text-xs tracking-widest uppercase mb-3"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold font-display mb-16"
        >
          Technical Stack
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.title}
              variants={itemAnim}
              className="group relative rounded-xl border border-white/5 bg-[#111111] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              {/* Sweep border bottom on hover */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-amber-400 group-hover:w-full transition-all duration-500 rounded-full" />
              {/* Gradient overlay on hover */}
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(245,158,11,0.04) 0%, transparent 60%)',
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-white font-semibold font-display">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/5 border border-white/5 group-hover:border-amber-400/15 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
