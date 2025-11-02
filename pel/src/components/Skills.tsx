import { useState, useEffect } from "react";
import { Code, Database, Cloud, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById("skills");
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const skills = [
    { category: "frontend", name: "React & TypeScript", level: 95, icon: Code },
    { category: "frontend", name: "HTML & CSS", level: 98, icon: Code },
    { category: "frontend", name: "Tailwind CSS", level: 90, icon: Code },
    { category: "backend", name: "Node.js", level: 85, icon: Database },
    { category: "backend", name: "Python", level: 80, icon: Database },
    { category: "backend", name: "SQL & NoSQL", level: 85, icon: Database },
    { category: "tools", name: "Git & GitHub", level: 90, icon: Cloud },
    { category: "tools", name: "Docker", level: 75, icon: Cloud },
    { category: "tools", name: "AWS", level: 70, icon: Cloud },
    { category: "soft", name: "Problem Solving", level: 95, icon: Lightbulb },
    { category: "soft", name: "Teamwork", level: 90, icon: Lightbulb },
    { category: "soft", name: "Communication", level: 88, icon: Lightbulb },
  ];

  const categories = [
    { id: "all", label: "ទាំងអស់" },
    { id: "frontend", label: "Front-End" },
    { id: "backend", label: "Back-End" },
    { id: "tools", label: "ឧបករណ៍" },
    { id: "soft", label: "Soft Skills" },
  ];

  const filteredSkills = selectedCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          ជំនាញ
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ជំនាញបច្ចេកទេស និងជំនាញទន់របស់ខ្ញុំ
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={selectedCategory === category.id ? "glow-effect" : ""}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-card card-hover ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <skill.icon className="h-6 w-6 text-primary" />
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <span className="text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                  style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
