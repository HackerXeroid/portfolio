import ProjectCard from "../ProjectCard/ProjectCard";
import SectionHeading from "../SectionHeading/SectionHeading";

export interface Project {
  id?: number;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-24">
      <SectionHeading headingText="projects" widthClass="w-1/2" viewAll />
      <div className="flex items-start">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;
