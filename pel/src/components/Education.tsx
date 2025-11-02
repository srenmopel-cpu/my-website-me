import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const education = [
    {
      degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ",
      institution: "សាកលវិទ្យាល័យជាតិកម្ពុជា",
      year: "2014 - 2018",
      gpa: "GPA: 3.8/4.0",
      courses: ["AI & Machine Learning", "Database Systems", "Web Development"],
    },
    {
      degree: "វិញ្ញាបនបត្រ Full Stack Development",
      institution: "Coursera",
      year: "2019",
      courses: ["React Advanced", "Node.js", "MongoDB"],
    },
    {
      degree: "វិញ្ញាបនបត្រ AWS Solutions Architect",
      institution: "Amazon Web Services",
      year: "2020",
      courses: ["Cloud Computing", "DevOps", "Security"],
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          ការសិក្សា
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ការអប់រំ និងវិញ្ញាបនបត្រ
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                {index === 0 ? (
                  <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                ) : (
                  <Award className="h-8 w-8 text-secondary flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-bold text-lg mb-1">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
              <p className="text-sm text-primary font-medium mb-2">{edu.year}</p>
              {edu.gpa && (
                <p className="text-sm text-muted-foreground mb-3">{edu.gpa}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <Badge key={course} variant="outline" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
