import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "កម្មវិធី AI សម្រាប់ការទស្សន៍ទាយ",
      category: "ai",
      description: "ប្រព័ន្ធ AI ដែលអាចទស្សន៍ទាយទិន្នន័យជាមួយភាពត្រឹមត្រូវខ្ពស់",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Python", "TensorFlow", "React"],
      metrics: "កើនឡើង 30% នៃប្រសិទ្ធភាព",
      demo: "#",
      github: "#",
    },
    {
      id: 2,
      title: "គេហទំព័រពាណិជ្ជកម្មអេឡិចត្រូនិច",
      category: "web",
      description: "ផ្លេតហ្វតពេញលេញសម្រាប់អាជីវកម្មអនឡាញ",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=600&h=400&fit=crop",
      tech: ["React", "Node.js", "MongoDB"],
      metrics: "គាំទ្រ 1000+ អ្នកប្រើប្រាស់",
      demo: "#",
      github: "#",
    },
    {
      id: 3,
      title: "ប្រព័ន្ធគ្រប់គ្រងគម្រោង",
      category: "web",
      description: "ឧបករណ៍គ្រប់គ្រងគម្រោងសម្រាប់ក្រុមការងារ",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      tech: ["TypeScript", "React", "PostgreSQL"],
      metrics: "កាត់បន្ថយពេលវេលា 40%",
      demo: "#",
      github: "#",
    },
    {
      id: 4,
      title: "កម្មវិធីទូរស័ព្ទចល័ត",
      category: "mobile",
      description: "កម្មវិធីទូរស័ព្ទសម្រាប់ការគ្រប់គ្រងកិច្ចការប្រចាំថ្ងៃ",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tech: ["React Native", "Firebase"],
      metrics: "10,000+ ទាញយកទំព័រ",
      demo: "#",
      github: "#",
    },
  ];

  const categories = [
    { id: "all", label: "ទាំងអស់" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "ai", label: "AI" },
  ];

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          គម្រោង
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          គម្រោងពិសេសៗដែលខ្ញុំបានធ្វើការ
        </p>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-card rounded-xl overflow-hidden card-hover animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <img
                src={selectedProject?.image}
                alt={selectedProject?.title}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="text-muted-foreground">{selectedProject?.description}</p>
              <div>
                <h4 className="font-semibold mb-2">បច្ចេកវិទ្យាដែលបានប្រើ:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tech.map((tech: string) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">លទ្ធផល:</h4>
                <p className="text-primary font-medium">{selectedProject?.metrics}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
