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
  viewAll?: boolean;
  howMany?: number;
}

function ProjectsSection({
  projects,
  viewAll = true,
  howMany = 3,
}: ProjectsSectionProps) {
  return (
    <section className="mb-24">
      <SectionHeading
        headingText="projects"
        widthClass="w-1/2"
        viewAll={viewAll}
      />
      <div className="grid grid-cols-3 gap-8 items-center">
        {projects.slice(0, howMany).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;
