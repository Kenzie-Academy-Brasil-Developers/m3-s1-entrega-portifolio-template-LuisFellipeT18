import { ProjectCard } from "./ProjectCard";
import { projects } from "../../../data/projects";

export const ProjectList = () => {
  return (
    <ul className="projectsAlign">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
