"use client";

import { motion } from "motion/react";
import { Download, Github, Mail, Linkedin, BrainCircuit, Bot, Layers } from "lucide-react";

const highlights = [
  {
    icon: <BrainCircuit size={22} />,
    title: "ML & Data Science",
    desc: "End-to-end pipelines: feature engineering, model training, explainability with SHAP, and business scoring.",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Agents & LLMs",
    desc: "Building autonomous agents with ReAct loops, local LLMs (Ollama), and tool-calling architectures.",
  },
  {
    icon: <Layers size={22} />,
    title: "Deep Learning",
    desc: "Custom CNNs with PyTorch, data augmentation pipelines, and automated tuning with Optuna.",
  },
];

export default function About() {
  return (
    <section id="about" className="w-full border-t border-border/50 py-24 px-6 md:px-12 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="font-mono text-accent text-sm mb-3">01. Who I am</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-foreground">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Text */}
          <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m <span className="text-foreground font-medium">Romaric Yemalin VOSSANOU</span>, 
              a Mathematics and Computer Science graduate specializing in Machine Learning and AI systems. 
              I build end-to-end ML pipelines — from raw data and feature engineering to model training, 
              explainability, and deployment.
            </p>
            <p>
              Beyond classical ML, I&apos;m deeply interested in <span className="text-foreground font-medium">AI agents</span> — 
              systems where LLMs don&apos;t just generate text but autonomously plan and execute real-world actions. 
              My Desktop Agent project is a hands-on exploration of that frontier.
            </p>
            <p>
              I&apos;m currently looking for a <span className="text-foreground font-medium">Data Science or ML Engineering internship</span> where 
              I can contribute to impactful projects and deepen my production ML expertise.
            </p>

            {/* CTA links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-background font-mono text-sm rounded-md transition-all duration-200"
              >
                <Download size={16} />
                Download CV
              </a>
              <a
                href="https://github.com/RYV8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-muted-foreground hover:border-accent hover:text-accent font-mono text-sm rounded-md transition-all duration-200"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:vossanouromaric@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-muted-foreground hover:border-accent hover:text-accent font-mono text-sm rounded-md transition-all duration-200"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>

          {/* Highlight cards */}
          <div className="md:col-span-2 grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="p-5 border border-border bg-muted/20 hover:border-accent/40 hover:bg-muted/40 transition-all duration-300 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-background border border-border text-accent rounded-md shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
