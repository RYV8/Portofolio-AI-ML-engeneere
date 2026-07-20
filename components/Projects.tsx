'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "Telecom Upsell Propensity Model",
    tagline: "Identify customers ready to upgrade — before they churn",
    description:
      "End-to-end ML pipeline that ranks telecom customers by their probability to accept a plan upgrade, reducing churn risk while increasing ARPU. Covers the full lifecycle from feature engineering to business scoring and model explainability.",
    highlights: [
      "XGBoost & LightGBM with Optuna hyperparameter tuning",
      "SMOTE for class imbalance handling",
      "SHAP waterfall plots for business explainability",
      "Customer segmentation and propensity scoring output",
    ],
    tech: ["Python", "XGBoost", "LightGBM", "Optuna", "SHAP", "scikit-learn", "Pandas"],
    github: "https://github.com/RYV8/Telecom-Upsell-Propensity-Model",
    live: null,
  },
  {
    title: "Movie Recommendation System",
    tagline: "Personalized recommendations via dual-clustering ML + FastAPI",
    description:
      "Collaborative filtering system using dual K-Means clustering on both users and movies. Matches a user's preference cluster to movies favored by similar users. Served through a FastAPI REST API with a frontend interface.",
    highlights: [
      "Dual K-Means clustering on users and movies",
      "REST API built with FastAPI for real-time recommendations",
      "Trained on MovieLens data: ratings, genome scores, and tags",
      "Clean domain architecture: services, repositories, schemas",
    ],
    tech: ["Python", "scikit-learn", "FastAPI", "Pandas", "KMeans", "REST API"],
    github: "https://github.com/RYV8/Recommendation_syteme",
    live: null,
  },
  {
    title: "Desktop Agent — LLM File System Assistant",
    tagline: "Control your file system with natural language",
    description:
      "Local AI agent powered by Ollama (Qwen2.5-Coder) that autonomously manages your Linux desktop through a ReAct loop. Given a plain-text task, it plans and executes file operations across 13 built-in tools — no shell commands needed from the user.",
    highlights: [
      "ReAct loop: Thought → Action (JSON) → Observation",
      "13 tools: create, move, copy, rename, search, read files, launch apps",
      "Fully local — powered by Ollama, no data leaves the machine",
      "Secure path validation on every tool call",
    ],
    tech: ["Python", "Ollama", "Qwen2.5-Coder", "ReAct", "LLM Agents"],
    github: "https://github.com/RYV8/Desktop-Agent",
    live: null,
  },
  {
    title: "Brain Tumor Detection",
    tagline: "MRI classification with automated hyperparameter tuning",
    description:
      "Custom PyTorch CNN trained on 12K brain MRI images to classify tumor types. Uses Optuna to automatically search the best training configuration — batch size, learning rate, and DataLoader settings — without manual trial-and-error.",
    highlights: [
      "Custom CNN: 3→10→50→100→150 channels, MaxPool, FC head",
      "Optuna study over batch_size, lr, num_workers, pin_memory",
      "Stratified 70/15/15 train/val/test split",
      "Training augmentation: flip, rotation, normalization",
    ],
    tech: ["Python", "PyTorch", "Optuna", "torchvision", "kagglehub", "Google Colab"],
    github: "https://github.com/RYV8/Brain-Deasese-Detector",
    live: "https://colab.research.google.com/github/RYV8/Brain-Deasese-Detector/blob/main/brain_tumor_detection.ipynb",
    liveLabel: "Open in Colab",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-accent text-sm mb-3">03. What I've built</p>
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-foreground">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative grid md:grid-cols-12 gap-8 items-start"
            >
              {/* Content */}
              <div className={`md:col-span-7 space-y-5 z-10 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="space-y-1">
                  <p className="text-accent font-mono text-xs uppercase tracking-widest">Featured Project</p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm font-mono">{project.tagline}</p>
                </div>

                <div className="p-5 rounded-xl bg-muted border border-border text-muted-foreground shadow-md group-hover:border-accent/20 transition-colors duration-300">
                  <p className="text-sm leading-relaxed mb-4">{project.description}</p>
                  <ul className="space-y-1.5 text-sm">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-0.5 shrink-0">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                  {project.tech.map((t, i) => (
                    <li key={i} className="px-3 py-1 rounded-full bg-background border border-border">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors flex items-center gap-1.5 text-sm"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                    <span className="font-mono">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors flex items-center gap-1.5 text-sm"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={18} />
                      <span className="font-mono">{(project as { liveLabel?: string }).liveLabel ?? 'Demo'}</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Visual panel */}
              <div
                className={`hidden md:flex md:col-span-5 h-full min-h-[260px] items-center justify-center rounded-xl bg-muted/20 border border-border/40 group-hover:border-accent/40 group-hover:bg-muted/40 transition-all duration-300 overflow-hidden card-glow ${index % 2 !== 0 ? 'md:order-1' : ''}`}
              >
                <div className="flex flex-col items-center gap-4 p-8 opacity-40 group-hover:opacity-70 transition-opacity">
                  <FolderGit2 size={48} className="text-accent" />
                  <span className="font-mono text-xs text-muted-foreground text-center">{project.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/RYV8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-accent transition-colors border border-border hover:border-accent px-6 py-3 rounded-md"
          >
            <Github size={16} />
            View all projects on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
