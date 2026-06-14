import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  MapPin,
  School2,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type EducationItem = {
  school: string;
  program: string;
  period: string;
  location?: string;
  description: string;
  highlights: string[];
  badge?: string;
  icon: LucideIcon;
  featured?: boolean;
};

const EDUCATION: EducationItem[] = [
  {
    school: "National University",
    program: "B.S. in Computer Science",
    period: "2020 - 2024",
    location: "Phnom Penh, Cambodia",
    description:
      "Focused on software engineering fundamentals, data structures, web development, and collaborative project delivery.",
    highlights: [
      "Built a strong foundation in algorithms, databases, and application architecture.",
      "Completed projects centered on responsive web apps and team-based development.",
      "Strengthened presentation, documentation, and problem-solving skills.",
    ],
    badge: "Latest",
    icon: GraduationCap,
    featured: true,
  },
  {
    school: "Coursera / Meta",
    program: "Professional Certificate in Front-End Development",
    period: "2022 - 2023",
    location: "Online",
    description:
      "Expanded practical UI engineering skills through modern front-end workflows, component architecture, and production-ready project work.",
    highlights: [
      "Practiced React, accessibility, responsive design, and interface polish.",
      "Applied modern tooling and deployment workflows in portfolio projects.",
      "Reinforced clean code habits and version control best practices.",
    ],
    icon: BookOpen,
  },
  {
    school: "Central High School",
    program: "Science and Mathematics Track",
    period: "2018 - 2020",
    location: "Phnom Penh, Cambodia",
    description:
      "Developed early analytical thinking and discipline through a science-focused curriculum before moving into software development.",
    highlights: [
      "Built a foundation in math, logic, and structured problem solving.",
      "Developed curiosity around technology and digital systems.",
      "Prepared for deeper study in computing and engineering.",
    ],
    icon: School2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Education = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative min-h-screen overflow-hidden py-24 md:py-32"
    >
      <motion.div
        style={{ y: contentY }}
        className="container relative z-10 mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.38em] text-cyan-300/80">
            Education
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Academic growth, certifications, and focused technical learning.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A modern timeline that presents formal study and ongoing learning in
            a clean, premium format aligned with the rest of the portfolio.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/70 via-indigo-400/45 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {EDUCATION.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={`${item.school}-${item.program}`}
                  variants={itemVariants}
                  className="relative md:grid md:grid-cols-2"
                >
                  <div className="absolute left-3 top-4 z-20 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-slate-950 shadow-[0_0_26px_rgba(56,189,248,0.35)] ${
                        item.featured
                          ? "bg-cyan-400 shadow-[0_0_38px_rgba(56,189,248,0.62)]"
                          : "bg-indigo-300/90"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-slate-950" />
                    </motion.div>
                  </div>

                  <div
                    className={`pl-16 md:pl-0 ${
                      isEven
                        ? "md:col-start-2 md:pl-12"
                        : "md:col-start-1 md:pr-12"
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={`group relative overflow-hidden rounded-[1.75rem] border bg-slate-950/65 p-6 backdrop-blur-2xl shadow-[0_24px_100px_rgba(2,6,23,0.52)] transition-all duration-300 md:p-7 ${
                        item.featured
                          ? "border-cyan-400/35 ring-1 ring-cyan-400/20 shadow-[0_24px_110px_rgba(56,189,248,0.2)]"
                          : "border-white/10 hover:border-cyan-300/35 hover:ring-1 hover:ring-cyan-400/15"
                      }`}
                    >
                      {item.featured && (
                        <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] border border-transparent bg-[linear-gradient(120deg,rgba(56,189,248,0.24),rgba(99,102,241,0.16),rgba(168,85,247,0.18))] opacity-50 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:xor]" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_36%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

                      <div className="relative z-10">
                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.14)] transition-transform duration-300 group-hover:scale-105">
                              <span className="text-sm font-bold tracking-[0.2em]">
                                {item.featured ? "01" : "ED"}
                              </span>
                            </div>

                            <div>
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-semibold text-white md:text-2xl">
                                  {item.program}
                                </h3>
                                {item.badge && (
                                  <Badge className="border-cyan-400/35 bg-cyan-500/10 text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.18)]">
                                    {item.badge}
                                  </Badge>
                                )}
                              </div>

                              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
                                <span className="inline-flex items-center gap-1.5">
                                  <GraduationCap className="h-4 w-4 text-cyan-300" />
                                  {item.school}
                                </span>
                                {item.location && (
                                  <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4 text-cyan-300" />
                                    {item.location}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <CalendarDays className="h-4 w-4 text-cyan-300" />
                              {item.period}
                            </div>
                          </div>
                        </div>

                        <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <div
                              key={`${item.school}-highlight-${highlightIndex}`}
                              className="flex items-start gap-3 text-sm text-slate-300"
                            >
                              <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                              <span className="leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>

                        <motion.div
                          initial={false}
                          animate={
                            isExpanded
                              ? { height: "auto", opacity: 1, marginTop: 20 }
                              : { height: 0, opacity: 0, marginTop: 0 }
                          }
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
                            <div className="mb-3 flex items-center gap-2 font-semibold text-white">
                              <Sparkles className="h-4 w-4 text-cyan-300" />
                              Expanded focus
                            </div>
                            <p className="leading-relaxed text-slate-300">
                              This stage emphasized practical learning,
                              technical confidence, and the transition from
                              theory to applied development work.
                            </p>
                          </div>
                        </motion.div>

                        <button
                          type="button"
                          onClick={() =>
                            setExpandedIndex(isExpanded ? null : index)
                          }
                          aria-expanded={isExpanded}
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                        >
                          {isExpanded ? "Show less" : "Show more"}
                          {isExpanded ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
