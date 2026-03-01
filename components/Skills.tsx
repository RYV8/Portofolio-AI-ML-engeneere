'use client';

import { motion } from 'motion/react';
import { Database, LayoutTemplate, Cpu, Code } from 'lucide-react';

const skills = [
  {
    category: "Programming",
    icon: <Code size={20} className="text-accent" />,
    items: ["Python", "Django", "SQL"]
  },
  {
    category: "Data & Machine Learning",
    icon: <Database size={20} className="text-accent" />,
    items: [
      "Pandas", "NumPy", "Scikit-learn", 
      "Feature Engineering", "Model Evaluation", 
      "Memory-optimized Data Processing"
    ]
  },
  {
    category: "Deep Learning",
    icon: <Cpu size={20} className="text-accent" />,
    items: [
      "CNN architectures", "Training pipelines", 
      "Regularization techniques", "Overfitting control", 
      "Data augmentation", "Performance tuning"
    ]
  },
  {
    category: "Systems & Backend",
    icon: <LayoutTemplate size={20} className="text-accent" />,
    items: [
      "REST API design", "Caching strategies", 
      "Concurrency reasoning", "Performance optimization"
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-foreground flex items-center gap-3">
           Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-background rounded-md border border-border">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{skillGroup.category}</h3>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
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
