"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border/40 text-center text-sm text-muted-foreground font-mono uppercase tracking-widest">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-4">
        <p className="hover:text-accent transition-colors duration-300">
          Designed & Built by Romaric VOSSANOU
        </p>
        <p className="opacity-50 text-xs">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
