'use client';

import { motion } from 'motion/react';
import { Mail, Linkedin, Github, FileDown } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 max-w-3xl mx-auto border-t border-border/50 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <p className="text-accent font-mono text-sm"> What&apos;s Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get In Touch
          </h2>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          I&apos;m currently looking for new opportunities to build mathematically grounded and scalable AI systems. 
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="mailto:vossanouromaric@gmail.com" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-transparent bg-foreground text-background hover:bg-foreground/90 font-medium rounded-md transition-colors w-full sm:w-auto"
          >
            <Mail size={20} />
            Say Hello
          </a>
          
          <a 
            href="/cv.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border bg-muted hover:bg-border text-foreground font-medium rounded-md transition-colors w-full sm:w-auto"
          >
            <FileDown size={20} />
            Download CV
          </a>
        </div>
        
        <div className="pt-12 flex items-center justify-center gap-6 text-muted-foreground">
          <a href="https://github.com/RYV8" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-2" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/romaric-vossanou" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors p-2" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
