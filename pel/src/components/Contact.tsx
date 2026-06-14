import { useState, type FormEvent } from "react";
import { motion, type Variants } from "framer-motion";
import { Facebook, Github, Mail, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SocialLink from "./SocialLink";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email.";
    else if (!validateEmail(formData.email))
      nextErrors.email = "Please enter a valid email address.";
    if (!formData.message.trim()) nextErrors.message = "Please add a message.";

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Message ready",
      description:
        "Your inquiry is prepared. Connect this form to your backend or email service next.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/srenmopel-cpu", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1FmnbuSVuS/?mibextid=wwXIfr",
      label: "Facebook",
    },
    { icon: Send, href: "https://t.me/SREN_MOPEL", label: "Telegram" },
    { icon: Mail, href: "srenmopel@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            Let&apos;s build something refined and future-ready.
          </h2>
          <p className="text-base leading-relaxed text-slate-400 md:text-lg">
            Reach out for freelance work, product collaboration, or any web
            project that deserves a premium user experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Send a message</h3>
              <p className="mt-2 text-slate-400">
                Fill out the form below and I&apos;ll reply with next steps as
                soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Name
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your name"
                    className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-0"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-300">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="you@example.com"
                    className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-0"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-300">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="min-h-[180px] rounded-[1.5rem] border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-0"
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-300">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 text-white shadow-[0_24px_80px_rgba(56,189,248,0.18)] transition hover:scale-[1.01]"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_24px_100px_rgba(2,6,23,0.45)] backdrop-blur-2xl md:p-8"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-white">Let&apos;s connect</h3>
              <p className="mt-2 text-slate-400">
                You can also find me on these channels for quick updates and
                collaboration.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Cambodia", detail: "Available for remote work" },
                { icon: Mail, label: "Email", detail: "srenmopel@gmail.com" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                  >
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.label}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500">
                Social
              </p>
              <div className="grid gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <SocialLink
                    key={label}
                    href={href}
                    label={label}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white"
                  >
                    <Icon className="h-5 w-5 text-cyan-300 transition group-hover:text-cyan-200" />
                    <span className="font-medium">{label}</span>
                  </SocialLink>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
