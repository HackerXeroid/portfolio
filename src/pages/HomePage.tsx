import HeroSection from "../components/HeroSection/HeroSection";
import PatternImg from "../assets/person_front_dots.svg";
import RectangleImg from "../assets/rectangle.svg";

import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

import SkillsSection from "../components/SkillsSection/SkillsSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import { SkillCategoryProps } from "../components/SkillCategory/SkillCategory";
import { Project } from "../components/ProjectsSection/ProjectsSection";

interface HomePageProps {
  skills: SkillCategoryProps[];
  projects: Project[];
}

function HomePage({ skills, projects }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* Projects Section */}
      <div>
        <img
          src={RectangleImg}
          className="absolute w-38 h-38 mt-64 -right-19"
        />
        <ProjectsSection projects={projects} />
      </div>
      {/* Skills Section */}
      <SkillsSection skills={skills} />
      {/* About Section */}
      <div>
        <img src={RectangleImg} className="absolute w-38 h-38 mt-32 -left-19" />
        <img src={PatternImg} className="absolute w-24 h-24 -right-5 mt-76" />
        <AboutSection showDownloadResumeBtn={false} />
      </div>
      {/* Contact Section */}
      <div>
        <img src={PatternImg} className="absolute w-28 h-28 mt-24 -left-12" />
        <ContactSection />
      </div>
      {/* Footer */}
      <Footer jobs={["React Specialist", "UI/UX Enthusiast"]} />
    </>
  );
}

export default HomePage;
