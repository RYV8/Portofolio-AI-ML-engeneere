'use client';

import { motion } from 'motion/react';
import { BrainCircuit, Database, Bot, Globe } from 'lucide-react';

const skills = [
  {
    category: "Machine Learning",
    icon: <BrainCircuit size={20} className="text-accent" />,
    items: [
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "Optuna",
      "SMOTE / imbalanced-learn",
      "Feature Engineering",
      "Model Evaluation & Metrics",
    ],
  },
  {
    category: "Deep Learning",
    icon: <Database size={20} className="text-accent" />,
    items: [
      "PyTorch",
      "torchvision",
      "CNN Architectures",
      "Transfer Learning",
      "Data Augmentation",
      "Training & Validation Loops",
      "Hyperparameter Tuning",
      "Google Colab / GPU",
    ],
  },
  {
    category: "AI Agents & LLMs",
    icon: <Bot size={20} className="text-accent" />,
    items: [
      "Ollama",
      "Qwen / LLM local inference",
      "ReAct Loop (Thought → Action → Observation)",
      "Tool Calling & JSON agents",
      "Google ADK",
      "Prompt Engineering",
    ],
  },
  {
    category: "Data & Backend",
    icon: <Globe size={20} className="text-accent" />,
    items: [
      "Python",
      "Pandas / NumPy",
      "FastAPI",
      "Django",
      "REST API Design",
      "SQL",
      "Next.js / TypeScript",
      "Git & GitHub",
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
        <p className="font-mono text-accent text-sm mb-3">02. What I work with</p>
        <h2 className="text-3xl font-bold tracking-tight mb-16 text-foreground">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-background rounded-md border border-border">
                  {group.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground tracking-tight">
                  {group.category}
                </h3>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
