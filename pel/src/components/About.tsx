import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import {
  ChevronDown,
  Code2,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { slowScrollTo } from "@/lib/scroll";
import SocialLink from "./SocialLink";
import profileImg from "../asset/mopel.png";

const TYPE_PHRASES = [
  "I build modern web experiences",
  "Creating futuristic UI/UX",
  "Shipping polished full-stack products",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  useEffect(() => {
    const phrase = TYPE_PHRASES[phraseIndex];
    let charIndex = 0;
    let deleting = false;

    const timer = window.setInterval(() => {
      if (!deleting) {
        setDisplayText(phrase.slice(0, charIndex));
        charIndex += 1;

        if (charIndex > phrase.length) {
          deleting = true;
          window.clearInterval(timer);
          window.setTimeout(() => {
            setPhraseIndex((prev) => (prev + 1) % TYPE_PHRASES.length);
          }, 1200);
        }
      }
    }, 48);

    return () => window.clearInterval(timer);
  }, [phraseIndex]);

  const cvUrl = `${import.meta.env.BASE_URL}mopel.pdf`;
  const socialIcons = [
  { Icon: Github, href: "https://github.com/srenmopel-cpu", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    {
      Icon: Facebook,
      href: "https://www.facebook.com/share/1FmnbuSVuS/?mibextid=wwXIfr",
      label: "Facebook",
    },
    { Icon: Send, href: "https://t.me/SREN_MOPEL", label: "Telegram" },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen overflow-hidden pt-32 pb-20 md:pt-36"
    >
      <motion.div style={{ y: contentY }} className="relative z-10 mx-auto max-w-7xl px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr]"
        >
          <motion.div variants={itemVariants} className="relative order-1 lg:order-1">
            <div className="relative mx-auto flex max-w-[30rem] items-center justify-center">
              <div className="absolute -inset-10 rounded-full bg-cyan-400/18 blur-[120px]" />
              <div className="absolute -inset-8 rounded-full bg-violet-500/12 blur-[110px]" />
              <div className="absolute inset-0 rounded-[2.8rem] bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_38%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.12),transparent_40%)] blur-2xl" />
              <div className="relative w-full rounded-[2.8rem] border border-white/12 bg-white/6 p-4 shadow-[0_35px_140px_rgba(2,6,23,0.52)] backdrop-blur-2xl md:p-5">
                <div className="absolute inset-0 rounded-[2.8rem] border border-transparent bg-[linear-gradient(120deg,rgba(56,189,248,0.3),rgba(99,102,241,0.18),rgba(168,85,247,0.22))] opacity-70 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:xor]" />
                <div className="absolute inset-[1px] rounded-[2.7rem] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)] opacity-90" />

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-slate-950/75 p-3 shadow-[0_0_60px_rgba(56,189,248,0.14)]"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.14),transparent_42%)]" />
                  <div className="relative overflow-hidden rounded-[1.9rem] ring-1 ring-white/10">
                    <img
                      src={profileImg}
                      alt="Sren Mopel portrait"
                      className="h-[28rem] w-full object-cover object-center md:h-[32rem]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-4 top-8 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-slate-200 shadow-[0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl md:block"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-300" />
                    Available for freelance work
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-8 hidden rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 text-xs text-slate-200 shadow-[0_16px_40px_rgba(2,6,23,0.4)] backdrop-blur-xl md:block"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-violet-300" />
                    UI focus, clean execution
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={containerVariants} className="order-2 lg:order-2">
            <motion.p
              variants={itemVariants}
              className="mb-4 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200/80"
            >
              Frontend Developer / Fullstack Developer
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-200 bg-clip-text text-transparent">
                Sren Mopel
              </span>
              <span className="mt-2 block text-2xl font-medium text-slate-300 md:text-3xl lg:text-4xl">
                Crafting calm, futuristic interfaces
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mt-8 max-w-2xl">
              <p className="min-h-8 text-lg text-cyan-300 md:text-xl">
                {displayText}
                <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300 align-middle" />
              </p>
              <p className="mt-5 text-sm leading-relaxed text-slate-400 md:text-base lg:text-lg">
                I design and build responsive digital experiences with a
                premium SaaS feel, combining strong visual hierarchy, modern
                motion, and clean engineering practices.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 px-8 text-white shadow-[0_24px_70px_rgba(56,189,248,0.18)] transition hover:scale-[1.02] hover:shadow-[0_28px_80px_rgba(56,189,248,0.24)]"
                onClick={() => slowScrollTo("contact", { offset: 108, duration: 1400 })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/10 bg-white/5 px-8 text-slate-100 hover:bg-white/10"
              >
                <a href={cvUrl} download="Sren_Mopel_CV.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-3"
            >
              {[
                "Responsive Design",
                "UI/UX Systems",
                "Framer Motion",
                "Cloud-ready Mindset",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap gap-4"
            >
              {socialIcons.map(({ Icon, href, label }) => (
                <SocialLink
                  key={label}
                  href={href}
                  label={label}
                  className="group relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 text-slate-300"
                >
                  <Icon className="h-5 w-5 transition group-hover:text-cyan-300" />
                </SocialLink>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <button
        onClick={() => slowScrollTo("skills", { offset: 108, duration: 1400 })}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/60 p-3 text-cyan-300 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-slate-950/80"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
};

export default About;
