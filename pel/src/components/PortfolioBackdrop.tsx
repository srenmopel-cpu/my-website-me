import { motion } from "framer-motion";

const STARS = Array.from({ length: 140 }, (_, index) => ({
  left: `${(index * 29 + 11) % 100}%`,
  top: `${(index * 37 + 17) % 100}%`,
  size: `${1 + (index % 3)}px`,
  delay: `${(index % 12) * 0.2}s`,
  duration: `${4.4 + (index % 6) * 0.45}s`,
  opacity: 0.18 + (index % 5) * 0.08,
}));

const SHOOTING_STARS = Array.from({ length: 8 }, (_, index) => ({
  top: `${8 + index * 10}%`,
  left: `${-36 + index * 14}%`,
  delay: `${index * 1.15}s`,
  duration: `${3.1 + (index % 3) * 0.5}s`,
}));

const PortfolioBackdrop = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="space-bg absolute inset-0" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(168,85,247,0.1),transparent_20%),radial-gradient(circle_at_16%_82%,rgba(99,102,241,0.08),transparent_22%)]" />

      <motion.div className="absolute inset-0" aria-hidden="true">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="space-star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.delay,
              animationDuration: star.duration,
              opacity: star.opacity,
              boxShadow: "0 0 12px rgba(56, 189, 248, 0.22)",
            }}
          />
        ))}

        {SHOOTING_STARS.map((shootingStar, index) => (
          <span
            key={index}
            className="shooting-star"
            style={{
              top: shootingStar.top,
              left: shootingStar.left,
              animationDelay: shootingStar.delay,
              animationDuration: shootingStar.duration,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioBackdrop;
