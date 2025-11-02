import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">អ្នកអភិវឌ្ឍន៍</h3>
            <p className="text-muted-foreground">
              បង្កើតដំណោះស្រាយឌីជីថលដ៏ច្នៃប្រឌិត
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">តំណរហ័ស</h4>
            <div className="space-y-2">
              {["ទំព័រដើម", "អំពីខ្ញុំ", "គម្រោង", "ទំនាក់ទំនង"].map((link) => (
                <a
                  key={link}
                  href={`#${link === "ទំព័រដើម" ? "home" : link === "អំពីខ្ញុំ" ? "about" : link === "គម្រោង" ? "projects" : "contact"}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">ជាវព័ត៌មាន</h4>
            <p className="text-sm text-muted-foreground mb-4">
              ទទួលបានព័ត៌មានថ្មីៗអំពីគម្រោង និងអត្ថបទ
            </p>
            <div className="flex gap-2">
              <Input placeholder="អ៊ីមែលរបស់អ្នក" />
              <Button size="sm">ជាវ</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 អ្នកអភិវឌ្ឍន៍. រក្សាសិទ្ធិគ្រប់យ៉ាង។
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToTop}
            className="mt-4 md:mt-0"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
