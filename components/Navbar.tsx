"use client";

import { motion, AnimatePresence } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Logo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent"
  >
    <polygon points="50,2 95,25 95,75 50,98 5,75 5,25" strokeWidth="4" />
    <line x1="20" y1="28" x2="80" y2="28" />
    <polyline points="20,28 36,65 51,31" />
    <path d="M 51 31 C 61 31, 71 31, 71 40 C 71 48, 55 48, 45 45 L 65 65" />
    <polyline points="25,75 60,75 77,41" />
  </svg>
);

const navLinks = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-md shadow-black/20"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-5xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
            aria-label="Home"
          >
            <Logo />
          </motion.a>

          {/* Desktop nav */}
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest"
          >
            {navLinks.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-accent relative group py-2 transition-colors duration-200"
                >
                  {item}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
                </a>
              </motion.li>
            ))}

            <motion.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <a
                href="https://github.com/RYV8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
            </motion.li>

            <motion.li
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-accent/60 text-accent hover:bg-accent hover:text-background font-medium text-xs rounded-md transition-all duration-200"
              >
                Resume
              </a>
            </motion.li>
          </motion.ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-muted-foreground hover:text-accent transition-colors p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-2xl text-muted-foreground hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-background font-mono text-sm rounded-md transition-all duration-200"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
