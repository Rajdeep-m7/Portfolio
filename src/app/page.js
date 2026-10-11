import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Philosophy />
      <Contact />
    </>
  );
}
