"use client";

import { motion } from "motion/react";
import { Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio contact from ${form.name}`,
          message: form.message,
          from_name: "Portfolio Contact Form",
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full bg-muted/30 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-200";

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto border-t border-border/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight mb-3 text-foreground">
          Get In Touch
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          I&apos;m currently open to new opportunities. Whether you have a project, a question, or just want to connect — my inbox is open.
        </p>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Form */}
          <div className="md:col-span-3">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 py-16 px-8 border border-accent/30 rounded-xl bg-accent/5 text-center"
              >
                <CheckCircle size={48} className="text-accent" />
                <h3 className="text-xl font-semibold text-foreground">Message sent!</h3>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-xs font-mono text-accent hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Romaric Vossanou"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity / Collaboration / Question"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, opportunity, or question..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm p-3 bg-red-400/10 border border-red-400/20 rounded-lg"
                  >
                    <AlertCircle size={16} className="shrink-0" />
                    {errorMsg}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-accent text-background hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-accent/20"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar info */}
          <div className="md:col-span-2 space-y-8 pt-1">
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Direct email</h3>
              <a
                href="mailto:vossanouromaric@gmail.com"
                className="block text-sm text-muted-foreground hover:text-accent transition-colors font-mono break-all"
              >
                vossanouromaric@gmail.com
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-foreground">Find me on</h3>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/RYV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Github size={18} className="group-hover:scale-110 transition-transform" />
                  <span>github.com/RYV8</span>
                </a>
                <a
                  href="https://linkedin.com/in/romaric-vossanou"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group"
                >
                  <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
                  <span>linkedin.com/in/romaric-vossanou</span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-accent/20 bg-accent/5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-accent font-medium">Currently available</span> for Data Science &amp; ML Engineering internships. Response time: within 24h.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
