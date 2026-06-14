import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "web" | "mobile" | "ai";

type Project = {
  id: number;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  description: string;
  image: string;
  tech: string[];
  stats: string;
  live: string;
  code: string;
  accent: "cyan" | "violet" | "blue";
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Operations Dashboard",
    category: "ai",
    description:
      "A futuristic analytics dashboard for monitoring AI workflows, model status, and live performance signals in one place.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=900&fit=crop",
    tech: ["React", "TypeScript", "Tailwind"],
    stats: "40% faster decision making",
    live: "#",
    code: "#",
    accent: "violet",
  },
  {
    id: 2,
    title: "SaaS Landing Experience",
    category: "web",
    description:
      "A premium marketing site with layered gradients, strong hierarchy, and conversion-focused call-to-action sections.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=900&fit=crop",
    tech: ["Next.js", "Framer Motion", "SEO"],
    stats: "3.2x engagement lift",
    live: "#",
    code: "#",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Developer Portfolio Suite",
    category: "web",
    description:
      "A clean portfolio system with reusable sections, motion polish, and a strong visual identity for modern developers.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=900&fit=crop",
    tech: ["React", "Vite", "Motion"],
    stats: "Built for job-ready presentation",
    live: "#",
    code: "#",
    accent: "blue",
  },
  {
    id: 4,
    title: "Mobile Task Companion",
    category: "mobile",
    description:
      "A mobile-first productivity app concept for task tracking, quick notes, and lightweight daily planning.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=900&fit=crop",
    tech: ["React Native", "Firebase", "Push"],
    stats: "Designed for daily focus",
    live: "#",
    code: "#",
    accent: "cyan",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Panel",
    category: "web",
    description:
      "A clean admin interface for deployments, logs, environment controls, and cloud service visibility.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=900&fit=crop",
    tech: ["Dashboard UI", "APIs", "Cloud"],
    stats: "Unified operations view",
    live: "#",
    code: "#",
    accent: "violet",
  },
  {
    id: 6,
    title: "Smart Assistant Prototype",
    category: "ai",
    description:
      "An AI assistant concept with command history, response cards, and a focused workflow for fast interaction.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=900&fit=crop",
    tech: ["LLM UI", "Chat", "Analytics"],
    stats: "Streamlined user assistance",
    live: "#",
    code: "#",
    accent: "blue",
  },
];

const FILTERS: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "ai", label: "AI" },
];

const ACCENT_THEMES = {
  cyan: {
    glow: "from-cyan-400/25 via-cyan-400/10 to-transparent",
    chip: "border-cyan-400/25 bg-cyan-500/10 text-cyan-200",
    ring: "ring-cyan-400/25",
    border: "border-cyan-300/25",
  },
  violet: {
    glow: "from-violet-400/25 via-violet-400/10 to-transparent",
    chip: "border-violet-400/25 bg-violet-500/10 text-violet-200",
    ring: "ring-violet-400/25",
    border: "border-violet-300/25",
  },
  blue: {
    glow: "from-blue-400/25 via-blue-400/10 to-transparent",
    chip: "border-blue-400/25 bg-blue-500/10 text-blue-200",
    ring: "ring-blue-400/25",
    border: "border-blue-300/25",
  },
} as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: "easeOut" },
  },
};

const Projects = () => {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS[1]);
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);

  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter]
  );

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-24 md:py-32"
    >

      <motion.div
        style={{ y: contentY }}
        className="container relative z-10 mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Projects
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Modern project showcases with a premium cinematic finish.
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            A responsive portfolio section that blends glassmorphism cards,
            animated space lighting, and clean professional presentation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3 md:mt-14"
        >
          {FILTERS.map((item) => {
            const isActive = filter === item.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                whileHover={{ y: -1, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setFilter(item.id)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-cyan-400/30 bg-cyan-500/10 text-cyan-100 shadow-[0_0_30px_rgba(56,189,248,0.16)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]"
        >
          <motion.article
            key={selectedProject.id}
            variants={cardVariants}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_24px_100px_rgba(2,6,23,0.45)] backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]" />
            <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-transparent bg-[linear-gradient(120deg,rgba(56,189,248,0.18),rgba(99,102,241,0.12),rgba(168,85,247,0.14))] opacity-60 [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [mask-composite:xor]" />
            <div className="relative overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="h-72 w-full object-cover transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-xl">
                <Sparkles className="h-3.5 w-3.5" />
                Spotlight
              </div>
              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-xl">
                {selectedProject.stats}
              </div>
            </div>

            <div className="relative z-10 p-6 md:p-8">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-slate-500">
                {selectedProject.category}
              </p>
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {selectedProject.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                {selectedProject.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.tech.map((tech) => (
                  <Badge
                    key={tech}
                    className="border-white/10 bg-white/5 text-slate-200"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                  asChild
                >
                  <a href={selectedProject.live} target="_blank" rel="noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
                  asChild
                >
                  <a href={selectedProject.code} target="_blank" rel="noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </motion.article>

          <motion.div
            variants={cardVariants}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-8"
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/70">
                  Featured Grid
                </p>
                <h4 className="mt-2 text-2xl font-semibold text-white">
                  Selected projects
                </h4>
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-200 shadow-[0_0_24px_rgba(56,189,248,0.12)]">
                <Layers className="h-5 w-5" />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              {filteredProjects.map((project) => {
                const theme = ACCENT_THEMES[project.accent];
                const isActive = selectedProject.id === project.id;

                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    whileHover={{ y: -4, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className={`group relative overflow-hidden rounded-[1.5rem] border text-left transition-all duration-300 ${
                      isActive
                        ? `border-white/25 bg-white/10 ring-1 ${theme.ring} shadow-[0_20px_60px_rgba(56,189,248,0.18)]`
                        : "border-white/10 bg-slate-950/50 hover:border-white/20 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${theme.glow} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    />
                    <div className="relative flex gap-4 p-4 md:p-5">
                      <div className="relative h-24 w-24 flex-none overflow-hidden rounded-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <h5 className="text-base font-semibold text-white">
                            {project.title}
                          </h5>
                          <span
                            className={`rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.24em] ${theme.chip}`}
                          >
                            {project.category}
                          </span>
                        </div>
                        <p className="line-clamp-2 text-sm leading-relaxed text-slate-400">
                          {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
