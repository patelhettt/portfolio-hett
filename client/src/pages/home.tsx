import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ExperienceSection from "@/components/experience-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import MediumSection from "@/components/medium-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import MatrixBackground from "@/components/matrix-background";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <MediumSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
