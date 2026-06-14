import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

type SocialLinkProps = {
  href: string;
  label: string;
  children: ReactNode;
  className: string;
};

const SocialLink = ({ href, label, children, className }: SocialLinkProps) => {
  const [popped, setPopped] = useState(false);
  const popTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (popTimeoutRef.current !== null) {
        window.clearTimeout(popTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    setPopped(true);

    if (popTimeoutRef.current !== null) {
      window.clearTimeout(popTimeoutRef.current);
    }

    popTimeoutRef.current = window.setTimeout(() => {
      setPopped(false);
      popTimeoutRef.current = null;
    }, 320);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={handleClick}
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.92, rotate: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
      className={className}
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-cyan-400/15 via-white/5 to-violet-500/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] border border-cyan-300/30"
        animate={
          popped
            ? { scale: [0.85, 1.12, 1], opacity: [0.2, 0.95, 0] }
            : { scale: 0.85, opacity: 0 }
        }
        transition={{ duration: 0.32, ease: "easeOut" }}
      />
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-white/10"
        animate={
          popped
            ? { scale: [0.7, 1.2], opacity: [0.45, 0] }
            : { scale: 0.7, opacity: 0 }
        }
        transition={{ duration: 0.32, ease: "easeOut" }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.a>
  );
};

export default SocialLink;
