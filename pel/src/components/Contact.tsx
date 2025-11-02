import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "សារត្រូវបានផ្ញើ!",
      description: "ខ្ញុំនឹងឆ្លើយតបទៅអ្នកឱ្យបានឆាប់តាមដែលអាចធ្វើទៅបាន។",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:example@email.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">
          ទំនាក់ទំនង
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          ចង់ធ្វើការជាមួយគ្នា? ទំនាក់ទំនងខ្ញុំ!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  ឈ្មោះ
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="ឈ្មោះរបស់អ្នក"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  អ៊ីមែល
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  សាររបស់អ្នក
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="សរសេរសាររបស់អ្នកនៅទីនេះ..."
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full glow-effect" size="lg">
                <Send className="h-4 w-4 mr-2" />
                ផ្ញើសារ
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">តោះភ្ជាប់ទំនាក់ទំនង</h3>
              <p className="text-muted-foreground mb-8">
                ខ្ញុំតែងតែរីករាយក្នុងការជួបមនុស្សថ្មីៗ និងពិភាក្សាអំពីគម្រោងថ្មីៗ។
                ទំនាក់ទំនងខ្ញុំតាមរយៈប្រព័ន្ធផ្សព្វផ្សាយសង្គមណាមួយខាងក្រោមនេះ។
              </p>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <social.icon className="h-6 w-6 text-primary" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
