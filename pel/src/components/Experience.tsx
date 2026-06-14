import { useRef, useState } from "react";
import { motion, type Variants, useScroll, useTransform } from "framer-motion";
import {
  BadgeCheck,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Code2,
  MapPin,
  Rocket,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Experience = {
  role: string;
  company: string;
  companyMark: string;
  period: string;
  location?: string;
  description: string;
  achievements: string[];
  icon: typeof Briefcase;
  current?: boolean;
  priority?: boolean;
};

const EXPERIENCES: Experience[] = [
  {
    role: "Frontend Developer",
    company: "ABC Tech Studio",
    companyMark: "ABC",
    period: "2023 - Present",
    location: "cambodia",
    description:
      "Building polished, responsive interfaces for client and internal products with a focus on performance, accessibility, and motion design.",
    achievements: [
      "Led UI development for production dashboards and marketing experiences.",
      "Improved page performance and component reusability across the design system.",
      "Collaborated closely with design and backend teams to ship features faster.",
    ],
    icon: Code2,
    current: true,
    priority: true,
  },
  {
    role: "Full Stack Developer",
    company: "Nexus Digital",
    companyMark: "NX",
    period: "2021 - 2023",
    location: "Remote",
    description:
      "Delivered full-stack features across web applications, handling frontend implementation, API integration, and deployment workflows.",
    achievements: [
      "Built reusable React components and service integrations for multiple products.",
      "Worked with Node.js and REST APIs to connect frontends with backend services.",
      "Helped introduce CI/CD workflows that reduced manual release effort.",
    ],
    icon: Rocket,
    priority: true,
  },
  {
    role: "Junior Web Developer",
    company: "Bright Future Institute",
    companyMark: "BF",
    period: "2019 - 2021",
    location: "Phnom Penh, Cambodia",
    description:
      "Supported the development of responsive websites and internal tools while strengthening core frontend and collaboration skills.",
    achievements: [
      "Assisted with UI implementation, bug fixing, and responsive layout adjustments.",
      "Maintained content-driven pages and improved cross-browser consistency.",
      "Learned modern development workflows through hands-on project delivery.",
    ],
    icon: Building2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative min-h-screen overflow-hidden py-20 md:py-28"
    >
      <motion.div style={{ y: contentY }} className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Experience
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Building modern products with clear engineering impact.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Reverse-chronological professional timeline with role ownership,
            execution quality, and measurable contribution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-cyan-400/60 via-indigo-400/40 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {EXPERIENCES.map((experience, index) => {
              const Icon = experience.icon;
              const isExpanded = expandedIndex === index;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={`${experience.company}-${experience.role}`}
                  variants={itemVariants}
                  className="relative md:grid md:grid-cols-2"
                >
                  <div className="absolute left-3 top-4 z-20 md:left-1/2 md:-translate-x-1/2">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-950 shadow-[0_0_24px_rgba(56,189,248,0.35)] ${
                        experience.current
                          ? "bg-cyan-400 shadow-[0_0_34px_rgba(56,189,248,0.65)]"
                          : "bg-indigo-300/90"
                      }`}
                    >
                      <Icon className="h-4 w-4 text-slate-950" />
                    </div>
                  </div>

                  <div
                    className={`pl-16 md:pl-0 ${
                      isEven ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:pr-12"
                    }`}
                  >
                    <motion.article
                      whileHover={{ y: -7, scale: 1.012 }}
                      transition={{ type: "spring", stiffness: 260, damping: 22 }}
                      className={`group relative overflow-hidden rounded-[1.5rem] border bg-slate-950/60 p-6 backdrop-blur-2xl shadow-[0_18px_70px_rgba(2,6,23,0.5)] transition-all duration-300 hover:shadow-[0_28px_95px_rgba(56,189,248,0.2)] md:p-7 ${
                        experience.current
                          ? "border-cyan-400/35 ring-1 ring-cyan-400/20"
                          : "border-white/10 hover:border-cyan-300/35 hover:ring-1 hover:ring-cyan-400/15"
                      }`}
                    >
                      {experience.priority && (
                        <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] border border-transparent bg-[linear-gradient(120deg,rgba(56,189,248,0.24),rgba(99,102,241,0.16),rgba(168,85,247,0.18))] [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:xor] opacity-55" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="relative z-10">
                        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex items-start gap-4">
                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-[0_0_24px_rgba(56,189,248,0.14)] ${
                                experience.current
                                  ? "bg-cyan-500/15 text-cyan-200"
                                  : "bg-white/5 text-indigo-200"
                              }`}
                            >
                              <Icon className="h-6 w-6" />
                            </div>

                            <div>
                              <div className="flex flex-wrap items-center gap-3">
                                <h3 className="text-xl font-bold text-white md:text-2xl">
                                  {experience.role}
                                </h3>
                                {experience.current && (
                                  <Badge className="border-cyan-400/35 bg-cyan-500/10 text-cyan-200">
                                    Present
                                  </Badge>
                                )}
                              </div>

                              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
                                <span className="inline-flex items-center gap-1.5">
                                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-1 text-[10px] font-bold uppercase tracking-wide text-cyan-200">
                                    {experience.companyMark}
                                  </span>
                                  <Building2 className="h-4 w-4 text-cyan-300" />
                                  {experience.company}
                                </span>
                                {experience.location && (
                                  <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4 text-cyan-300" />
                                    {experience.location}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-300">
                            <div className="flex items-center gap-1.5">
                              <CalendarDays className="h-4 w-4 text-cyan-300" />
                              {experience.period}
                            </div>
                          </div>
                        </div>

                        <p className="mb-5 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
                          {experience.description}
                        </p>

                        <div className="space-y-3">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <div
                              key={`${experience.company}-ach-${achievementIndex}`}
                              className="flex items-start gap-3 text-sm text-slate-300"
                            >
                              <BadgeCheck className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                              <span className="leading-relaxed">{achievement}</span>
                            </div>
                          ))}
                        </div>

                        <motion.div
                          initial={false}
                          animate={
                            isExpanded
                              ? { height: "auto", opacity: 1 }
                              : { height: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 border-t border-white/10 pt-4 text-sm text-slate-400">
                            <div className="mb-2 flex items-center gap-2 text-white">
                              <Briefcase className="h-4 w-4 text-cyan-300" />
                              Additional focus
                            </div>
                            Cross-functional planning, mentoring, and quality assurance throughout release cycles.
                          </div>
                        </motion.div>

                        <button
                          type="button"
                          onClick={() => setExpandedIndex(isExpanded ? null : index)}
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

export default Experience;
