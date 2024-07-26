import { Project } from "../ProjectsSection/ProjectsSection";
import Github from "../../assets/github.svg";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <figure className="w-full rounded overflow-hidden shadow-lg m-4 border border-gray">
      {/* Project Image */}
      <img src={project.image} alt={project.name} className="w-full" />

      <figcaption className="text-gray">
        {/* Technologies */}
        <p className="p-2 flex text-base border border-transparent border-t-gray border-b-gray">
          {project.technologies.join(" ")}
        </p>

        <div className="p-4 flex flex-col items-start justify-center">
          {/* Project name */}
          <h3 className="font-medium text-2xl mb-4 text-white">
            {project.name}
          </h3>

          {/* Project description */}
          <p className="text-gray-700 text-base mb-4">{project.description}</p>

          {/* Button container */}
          <div className="flex gap-4">
            <a
              href={project.demo === "#" ? "#" : project.demo}
              onClick={(e) => {
                if (project.demo === "#") {
                  e.preventDefault();
                }
              }}
              target="_blank"
              className={`${
                project.demo === "#" && "disabled opacity-60 cursor-not-allowed"
              } py-2 px-4 border border-gray`}
            >
              Live &lt;~&gt;
            </a>
            <a
              href={project.github}
              target="_blank"
              className="cursor-pointer py-2 px-4 border border-gray flex gap-3"
            >
              Github <img src={Github} alt="Github" />
            </a>
          </div>
        </div>
      </figcaption>
    </figure>
  );
}
export default ProjectCard;
