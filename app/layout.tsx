import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Romaric VOSSANOU | AI & Machine Learning Engineer',
  description: 'Portfolio of Romaric VOSSANOU, an AI & Machine Learning Engineer specializing in Computer Vision, Mathematical Modeling, and Backend AI Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased selection:bg-accent selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
