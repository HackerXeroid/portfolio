import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

interface ProjectsPageProps {
  projects: {
    id: number;
    name: string;
    image: string;
    technologies: string[];
    description: string;
    demo: string;
    github: string;
  }[];
}

function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <ProjectsSection
      projects={projects}
      viewAll={false}
      howMany={projects.length}
    />
  );
}
export default ProjectsPage;
