import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body
        className="bg-background text-foreground antialiased selection:bg-accent selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
