import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Romaric VOSSANOU | ML Engineer & AI Systems Builder",
  description:
    "Portfolio of Romaric Yemalin VOSSANOU — ML Engineer specializing in end-to-end machine learning pipelines, LLM-powered agents, and deep learning systems.",
  openGraph: {
    title: "Romaric VOSSANOU | ML Engineer",
    description: "ML Engineer specializing in end-to-end pipelines, LLM agents, and deep learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body
        className="bg-background text-foreground antialiased selection:bg-amber-400/30 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
