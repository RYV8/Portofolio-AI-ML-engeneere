'use client';

import { motion } from 'motion/react';
import { BrainCircuit, Database, Bot, Globe } from 'lucide-react';

const skills = [
  {
    category: "Machine Learning",
    icon: <BrainCircuit size={18} className="text-accent" />,
    items: [
      "scikit-learn", "XGBoost", "LightGBM", "SHAP",
      "Optuna", "imbalanced-learn", "Feature Engineering", "Model Evaluation",
    ],
  },
  {
    category: "Deep Learning",
    icon: <Database size={18} className="text-accent" />,
    items: [
      "PyTorch", "torchvision", "CNN Architectures", "Transfer Learning",
      "Data Augmentation", "Training Loops", "Hyperparameter Tuning", "Google Colab",
    ],
  },
  {
    category: "AI Agents & LLMs",
    icon: <Bot size={18} className="text-accent" />,
    items: [
      "Ollama", "Qwen / Local LLMs", "ReAct Loop", "Tool Calling",
      "Google ADK", "Prompt Engineering",
    ],
  },
  {
    category: "Data & Backend",
    icon: <Globe size={18} className="text-accent" />,
    items: [
      "Python", "Pandas / NumPy", "FastAPI", "Django",
      "REST API", "SQL", "Next.js", "Git & GitHub",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-accent text-sm mb-2">02. What I work with</p>
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-foreground">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-muted/20 hover:border-accent/30 hover:bg-muted/40 transition-all duration-300 card-glow"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-background rounded-lg border border-border">
                  {group.icon}
                </div>
                <h3 className="text-sm font-semibold text-foreground tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Tag/chip style */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-mono text-muted-foreground bg-background border border-border rounded-full hover:border-accent/50 hover:text-accent transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
