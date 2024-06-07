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
  viewAll: boolean;
}

function ProjectsPage({ projects }: ProjectsPageProps) {
  return <ProjectsSection projects={projects} viewAll={false} howMany={3} />;
}
export default ProjectsPage;
