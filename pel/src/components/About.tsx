import { useEffect, useState } from "react";
import { Code, Award, Users } from "lucide-react";
import profileImg from "../asset/mopel.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code, label: "គម្រោង", value: 10, suffix: "+" },
    { icon: Award, label: "ឆ្នាំបទពិសោធន៍", value: 5, suffix: "" },
    { icon: Users, label: "អតិថិជនសប្បាយចិត្ត", value: 50, suffix: "+" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, 30);
      });
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          អំពីខ្ញុំ
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="relative w-64 h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-primary/50 transition-transform hover:scale-105"
              />
            </div>
          </div>

          <div className={`${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-4">សួស្តី! ខ្ញុំឈ្មោះ [Sren mopel]</h3>
            <p className="text-muted-foreground mb-4">
              ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ដែលមានចំណាប់អារម្មណ៍ខ្លាំងចំពោះបច្ចេកវិទ្យាថ្មីៗ និងការបង្កើតដំណោះស្រាយ
              ឌីជីថលដែលមានប្រសិទ្ធភាព។ ជាមួយនឹងបទពិសោធន៍ជាង ៥ ឆ្នាំក្នុងវិស័យអភិវឌ្ឍន៍ Web និង AI
              ខ្ញុំបានធ្វើការលើគម្រោងច្រើនប្រភេទ ពីគេហទំព័រធម្មតារហូតដល់ប្រព័ន្ធស្មុគ្រស្មាញ។
            </p>
            <p className="text-muted-foreground mb-4">
              ខ្ញុំជឿជាក់ថាកូដដែលល្អមិនត្រឹមតែដំណើរការបានប៉ុណ្ណោះទេ ប៉ុន្តែវាត្រូវតែងាយស្រួលក្នុងការអាន
              ងាយស្រួលថែទាំ និងមានប្រសិទ្ធភាពខ្ពស់ផងដែរ។ ខ្ញុំរីករាយក្នុងការរៀនសូត្របច្ចេកវិទ្យាថ្មីៗ
              និងចែករំលែកចំណេះដឹងជាមួយសហគមន៍។
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 rounded-xl bg-card card-hover ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-bold text-gradient mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
