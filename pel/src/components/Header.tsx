import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slowScrollTo } from "@/lib/scroll";
import logoImg from "../asset/mopel.png";

const menuItems = [
  { label: "About", sectionId: "home" },
  { label: "Skills", sectionId: "skills" },
  { label: "Experience", sectionId: "experience" },
  { label: "Education", sectionId: "education" },
  { label: "Projects", sectionId: "projects" },
  { label: "Contact", sectionId: "contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const currentSection = menuItems.reduce((currentId, item) => {
        const section = document.getElementById(item.sectionId);
        if (!section) return currentId;
        const top = section.getBoundingClientRect().top;
        if (top <= 140) {
          return item.sectionId;
        }
        return currentId;
      }, "home");

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    slowScrollTo(sectionId, { offset: 108, duration: 1400 });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3"
          : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`relative flex items-center justify-between gap-4 rounded-[1.5rem] border px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
            isScrolled
              ? "border-white/10 bg-slate-950/85 shadow-[0_20px_60px_rgba(2,6,23,0.45)]"
              : "border-white/5 bg-slate-950/40 shadow-[0_16px_50px_rgba(2,6,23,0.28)]"
          }`}
        >
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick("home");
            }}
            className="group flex items-center gap-3"
          >
            <span className="relative inline-flex h-11 w-11 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-[0_0_30px_rgba(56,189,248,0.18)]">
              <img
                src={logoImg}
                alt="Sren Mopel logo"
                className="h-full w-full object-cover"
              />
            </span>
            <div className="min-w-0">
              <p className="text-[0.62rem] uppercase tracking-[0.38em] text-slate-400">
                Portfolio
              </p>
              <h1 className="text-base font-semibold text-white md:text-lg">
                Sren Mopel
              </h1>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {menuItems.map((item) => {
              const isActive = item.sectionId === activeSection;

              return (
                <a
                  key={item.sectionId}
                  href={`#${item.sectionId}`}
                  onClick={(event) => {
                    event.preventDefault();
                    handleNavClick(item.sectionId);
                  }}
                  aria-current={isActive ? "page" : undefined}
                  className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-400 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}

          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-full border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scaleY: 0.96 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.96 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="absolute inset-x-0 top-full mt-3 origin-top rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-3 shadow-[0_35px_90px_rgba(2,6,23,0.45)] backdrop-blur-2xl lg:hidden"
              >
                <div className="grid gap-2">
                  {menuItems.map((item) => {
                    const isActive = item.sectionId === activeSection;

                    return (
                      <a
                        key={item.sectionId}
                        href={`#${item.sectionId}`}
                        onClick={(event) => {
                          event.preventDefault();
                          handleNavClick(item.sectionId);
                        }}
                        aria-current={isActive ? "page" : undefined}
                        className={`group relative rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-100"
                            : "text-slate-200 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <span
                          className={`absolute inset-x-4 bottom-2 h-0.5 origin-left rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-indigo-400 transition-transform duration-300 ${
                            isActive
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                          }`}
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
