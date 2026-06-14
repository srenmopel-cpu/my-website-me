import { ArrowUp, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { slowScrollTo } from "@/lib/scroll";

const socialLinks = [
  { icon: Github, href: "https://github.com/srenmopel-cpu", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Send, href: "https://t.me", label: "Telegram" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950/90">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />
      <div className="container relative z-10 mx-auto px-4 py-10">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-2xl md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">
                Sren Mopel
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Futuristic portfolio experience built with care.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
                Clean engineering, premium visuals, and thoughtful motion for a
                portfolio that feels ready for real-world opportunities.
              </p>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                Quick Links
              </p>
              <div className="grid gap-2 text-sm text-slate-300">
                {[
                  ["Home", "#home"],
                  ["About", "#home"],
                  ["Projects", "#projects"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    onClick={(event) => {
                      event.preventDefault();
                      slowScrollTo(href.slice(1), { offset: 108, duration: 1400 });
                    }}
                    className="transition hover:text-white"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                Social
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -2, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-cyan-300/30 hover:bg-white/10 hover:text-white"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => slowScrollTo(0, { duration: 1200 })}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-300/40 hover:bg-cyan-500/15"
              >
                <ArrowUp className="h-4 w-4" />
                Back to top
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>Copyright © 2026 Sren Mopel. All rights reserved.</p>
            <p>Designed for a futuristic, job-ready portfolio presentation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
