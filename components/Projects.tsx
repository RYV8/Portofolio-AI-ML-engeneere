'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Mathematical Function Analysis & Visualization Engine",
    description: "Backend system that parses mathematical equations, computes symbolic and numerical properties (extrema, domain, discontinuities), and generates clean plotting data.",
    highlights: [
      "Symbolic computation with SymPy",
      "Numerical stability handling (NaN, inf, complex filtering)",
      "Clean data pipeline",
      "API architecture"
    ],
    tech: ["Python", "SymPy", "Django", "NumPy"],
    link: "https://github.com/RYV8/GraphGenarate",
    image: "/project1.png" // User will need to place their image here
  },
  
  {
    title: "Memory-Optimized Customer Segmentation System",
    description: "Data preprocessing pipeline with chunk processing for large datasets, followed by unsupervised clustering.",
    highlights: [
      "Chunk-based preprocessing",
      "Feature engineering",
      "KMeans clustering",
      "Memory optimization under RAM constraints"
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    link: "#"
  },
  {
    title: "End-to-End Computer Vision Deep Learning Pipeline",
    description: "Implemented a full deep learning workflow for computer vision tasks.",
    highlights: [
      "Dataset preparation",
      "Data augmentation",
      "Model training and validation",
      "Overfitting control",
      "Performance metrics evaluation"
    ],
    tech: ["Python", "PyTorch", "OpenCV", "CNNs"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-12 text-foreground flex items-center gap-3">
           Featured Projects
        </h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative grid md:grid-cols-12 gap-8 items-center"
            >
              <div className={`md:col-span-7 lg:col-span-6 space-y-6 z-10 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                <div className="space-y-2">
                  <p className="text-accent font-mono text-sm">Featured Project</p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <div className="p-6 rounded-xl bg-muted border border-border text-muted-foreground shadow-lg relative z-20">
                  <p className="mb-4">{project.description}</p>
                  <ul className="space-y-2 text-sm">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-accent mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground relative z-20">
                  {project.tech.map((tech, idx) => (
                    <li key={idx} className="px-3 py-1 rounded-full bg-background border border-border">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center gap-4 text-muted-foreground relative z-20">
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub Link">
                      <Github size={20} />
                    </a>
                  )}
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="External Link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className={`hidden md:flex md:col-span-5 lg:col-span-6 h-full items-center justify-center rounded-xl bg-muted/30 border border-border/50 group-hover:border-accent/50 transition-colors overflow-hidden relative min-h-[300px] ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                {project.image ? (
                  <div className="absolute inset-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-accent/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-300 z-10" />
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <FolderGit2 size={64} className="text-muted-foreground/30 group-hover:text-accent/50 transition-colors relative z-20" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
