import { motion, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Code,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Sparkles,
  Tablet,
  Globe,
} from "lucide-react";

type SkillCard = {
  name: string;
  icon: LucideIcon;
  accent: string;
  glow: string;
};

const SKILL_CARDS: SkillCard[] = [
  {
    name: "React",
    icon: Layers,
    accent: "border-cyan-400/25 bg-cyan-500/12 text-cyan-100",
    glow: "from-cyan-400/30 via-cyan-400/10 to-transparent",
  },
  {
    name: "TypeScript",
    icon: Code,
    accent: "border-blue-400/25 bg-blue-500/12 text-blue-100",
    glow: "from-blue-400/30 via-blue-400/10 to-transparent",
  },
  {
    name: "Tailwind CSS",
    icon: Tablet,
    accent: "border-sky-400/25 bg-sky-500/12 text-sky-100",
    glow: "from-sky-400/30 via-sky-400/10 to-transparent",
  },
  {
    name: "Framer Motion",
    icon: Sparkles,
    accent: "border-violet-400/25 bg-violet-500/12 text-violet-100",
    glow: "from-violet-400/30 via-violet-400/10 to-transparent",
  },
  {
    name: "REST APIs",
    icon: Globe,
    accent: "border-emerald-400/25 bg-emerald-500/12 text-emerald-100",
    glow: "from-emerald-400/30 via-emerald-400/10 to-transparent",
  },
  {
    name: "Node.js",
    icon: Cpu,
    accent: "border-lime-400/25 bg-lime-500/12 text-lime-100",
    glow: "from-lime-400/30 via-lime-400/10 to-transparent",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    accent: "border-slate-400/25 bg-slate-500/12 text-slate-100",
    glow: "from-slate-300/25 via-slate-400/10 to-transparent",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    accent: "border-orange-400/25 bg-orange-500/12 text-orange-100",
    glow: "from-orange-400/30 via-orange-400/10 to-transparent",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const marqueeVariants: Variants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 42,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const MARQUEE_SKILLS = [...SKILL_CARDS, ...SKILL_CARDS];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(56,189,248,0.08),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.08),transparent_28%),radial-gradient(circle_at_20%_82%,rgba(59,130,246,0.06),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.55))]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container relative z-10 mx-auto px-4"
      >
        <motion.div
          variants={cardVariants}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.22)] md:px-6 md:py-3 md:text-sm">
            Skills
          </div>

          <h2 className="mt-7 text-3xl font-black tracking-tight text-white md:mt-8 md:text-5xl lg:text-6xl">
            Technical Skills
          </h2>
        </motion.div>

        <div className="mt-12 overflow-hidden md:mt-14">
          <div className="flex justify-center">
            <motion.div
              variants={marqueeVariants}
              animate="animate"
              className="flex w-max gap-3 px-2 py-2 md:gap-4"
            >
              {MARQUEE_SKILLS.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={`${skill.name}-${index}`}
                    variants={cardVariants}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative flex-none"
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${skill.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div
                      className={`relative flex min-w-[11.5rem] items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-left shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-2xl transition-all duration-300 sm:min-w-[12.5rem] md:min-w-[13.5rem] ${skill.accent} group-hover:border-white/20`}
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/75 shadow-[0_0_28px_rgba(56,189,248,0.14)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-white md:text-[1rem]">
                          {skill.name}
                        </p>
                        <p className="mt-1 text-[0.62rem] uppercase tracking-[0.26em] text-slate-400 md:text-[0.7rem] md:tracking-[0.32em]">
                          Core skill
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
