"use client";

import { motion } from "motion/react";
import { Github } from "lucide-react";

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent"
  >
    {/* Hexagon */}
    <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" strokeWidth="4" />

    {/* Top horizontal line */}
    <line x1="20" y1="28" x2="80" y2="28" />

    {/* V shape */}
    <polyline points="20,28 36,65 51,31" />

    {/* R loop and leg */}
    <path d="M 51 31 C 61 31, 71 31, 71 40 C 71 48, 55 48, 45 45 L 65 65" />

    {/* Bottom horizontal and up-right line (Y shape) */}
    <polyline points="25,75 60,75 77,41" />
  </svg>
);

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/40">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-24 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center gap-2 font-mono font-bold text-accent"
        >
          <Logo />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            staggerChildren: 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="hidden md:flex items-center gap-10 font-mono text-sm uppercase tracking-widest"
        >
          {["About", "Skills", "Projects", "Contact"].map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-muted-foreground hover:text-accent relative group py-2"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="https://github.com/RYV8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border text-foreground hover:border-accent hover:text-accent rounded-none transition-all duration-300"
            >
              Resume
            </a>
          </motion.li>
        </motion.ul>
      </nav>
    </header>
  );
}
