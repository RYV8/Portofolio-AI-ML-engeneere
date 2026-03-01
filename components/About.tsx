'use client';

import { motion } from 'motion/react';
import { BookOpen, BrainCircuit, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-8 text-foreground flex items-center gap-3">
         About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am a Mathematics and Computer Science graduate specializing in Data Science and Machine Learning. 
              My work focuses on designing end-to-end AI systems from mathematical modeling and data preprocessing 
              to deep learning training and scalable backend deployment.
            </p>
            <p>
              I am particularly interested in Computer Vision and robotics-oriented AI systems, where mathematical 
              rigor meets real-world application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-muted/50 flex flex-col items-start gap-4">
              <div className="p-3 rounded-lg bg-background border border-border text-accent">
                <BrainCircuit size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Machine Learning</h3>
              <p className="text-sm text-muted-foreground">Deep Learning, CNNs, and predictive modeling.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-muted/50 flex flex-col items-start gap-4">
              <div className="p-3 rounded-lg bg-background border border-border text-accent">
                <BookOpen size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Math Modeling</h3>
              <p className="text-sm text-muted-foreground">Symbolic computation and numerical stability.</p>
            </div>
            
            <div className="p-6 rounded-xl border border-border bg-muted/50 flex flex-col items-start gap-4 sm:col-span-2">
              <div className="p-3 rounded-lg bg-background border border-border text-accent">
                <Code2 size={24} />
              </div>
              <h3 className="font-semibold text-foreground">Backend AI Systems</h3>
              <p className="text-sm text-muted-foreground">Scalable APIs, caching strategies, and concurrency reasoning.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
