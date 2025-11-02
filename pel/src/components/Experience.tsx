import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "ក្រុមហ៊ុនបច្ចេកវិទ្យា ABC",
      role: "Senior Developer",
      period: "2021 - បច្ចុប្បន្ន",
      achievements: [
        "បង្កើតប្រព័ន្ធដែលគាំទ្រ 1000+ អ្នកប្រើប្រាស់ក្នុងពេលដំណាលគ្នា",
        "កាត់បន្ថយពេលវេលាផ្ទុកទំព័រ 50% តាមរយៈការបង្កើនប្រសិទ្ធភាព",
        "ដឹកនាំក្រុមអ្នកអភិវឌ្ឍន៍ 5 នាក់",
      ],
    },
    {
      company: "ក្រុមហ៊ុននាំមុខ XYZ",
      role: "Full Stack Developer",
      period: "2019 - 2021",
      achievements: [
        "អភិវឌ្ឍន៍កម្មវិធី Web ច្រើនសម្រាប់អតិថិជនអន្តរជាតិ",
        "ធ្វើការជាមួយ React, Node.js, និង AWS",
        "បង្កើតប្រព័ន្ធ CI/CD ដែលកាត់បន្ថយពេលវេលាដាក់ឱ្យដំណើរការ 70%",
      ],
    },
    {
      company: "ស្ថាប័នបណ្តុះបណ្តាល DEF",
      role: "Junior Developer",
      period: "2018 - 2019",
      achievements: [
        "រៀនបច្ចេកវិទ្យាថ្មីៗ និងអនុវត្តក្នុងគម្រោងពិត",
        "ចូលរួមក្នុងការអភិវឌ្ឍន៍គេហទំព័រអេឡិចត្រូនិច",
        "ទទួលបានពានរង្វាន់ 'អ្នកអភិវឌ្ឍន៍ល្អឥតខ្ចោះ'",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          បទពិសោធន៍
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ដំណើរការងារវិជ្ជាជីវៈរបស់ខ្ញុំ
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-20 pb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                <Briefcase className="absolute left-4 top-0 h-8 w-8 text-primary" />

                <div className="bg-card p-6 rounded-xl card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-sm text-primary">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
