'use client';

export default function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border/50 text-center text-sm text-muted-foreground font-mono">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-2">
        <p>
          Designed & Built by Romaric VOSSANOU
        </p>
        <p className="opacity-50">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
