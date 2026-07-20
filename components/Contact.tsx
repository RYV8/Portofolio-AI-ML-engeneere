'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? 'YOUR_KEY_HERE',
          ...form,
        }),
      });
      if (res.ok) {
        setState('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="font-mono text-amber-400 text-xs tracking-widest uppercase mb-3"
        >
          04. Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-bold font-display mb-16"
        >
          Get In Touch
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* ── Sidebar ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 flex flex-col gap-8"
          >
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 self-start">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-emerald-400 text-sm font-medium">Currently available</span>
            </div>

            <p className="text-slate-400 text-base leading-relaxed">
              I'm actively looking for data science internships and ML engineering roles. If
              you have a project or position that could be a fit, I'd love to hear from you.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:vossanouromaric@gmail.com"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 transition-colors">
                  <Mail size={15} />
                </div>
                <span className="text-sm">vossanouromaric@gmail.com</span>
              </a>
              <a
                href="https://github.com/RYV8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 transition-colors">
                  <Github size={15} />
                </div>
                <span className="text-sm">github.com/RYV8</span>
              </a>
              <a
                href="https://linkedin.com/in/romaric-vossanou"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-amber-400 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-amber-400/30 transition-colors">
                  <Linkedin size={15} />
                </div>
                <span className="text-sm">linkedin.com/in/romaric-vossanou</span>
              </a>
            </div>
          </motion.div>

          {/* ── Form ── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-3 bg-[#111111] rounded-2xl border border-white/5 p-8 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className="bg-[#1A1A1A] border border-white/5 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-amber-400/50 focus:ring-1 focus:ring-amber-400/20 transition-all resize-none"
              />
            </div>

            {/* Success / Error feedback */}
            {state === 'success' && (
              <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-4 py-3">
                <CheckCircle size={15} />
                Message sent! I'll get back to you soon.
              </div>
            )}
            {state === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/5 border border-red-500/20 rounded-lg px-4 py-3">
                <AlertCircle size={15} />
                Something went wrong. Please try emailing me directly.
              </div>
            )}

            <button
              type="submit"
              disabled={state === 'loading'}
              className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 text-black font-semibold text-sm hover:bg-amber-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
            >
              {state === 'loading' ? (
                <>
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
