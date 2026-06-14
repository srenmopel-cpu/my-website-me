import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioBackdrop from "@/components/PortfolioBackdrop";

const Index = () => {
  return (
    <div className="relative isolate min-h-screen">
      <PortfolioBackdrop />
      <div className="relative z-10">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
