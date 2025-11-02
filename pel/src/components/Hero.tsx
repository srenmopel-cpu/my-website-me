import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ពេញលេញដែលមានបទពិសោធន៍ក្នុង AI, Web Development, និង Cloud Computing";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[var(--hero-gradient)]">
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-primary/20 font-mono text-xs animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              {["</>", "{}", "[]", "()"][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          សូមស្វាគមន៍មកកាន់
          <br />
          <span className="text-gradient">ផតថលរបស់ខ្ញុំ</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 md:h-20">
          {displayText}
          <span className="inline-block w-1 h-6 bg-primary ml-1 animate-pulse" />
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white glow-effect"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            មើលគម្រោង
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            ទំនាក់ទំនងខ្ញុំ
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-primary" />
      </button>
    </section>
  );
};

export default Hero;
