import { ProjectList } from "./ProjectList";

export const ProjectsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="alignList">
          <h2 className="title md">Projetos</h2>
          <ProjectList />
        </div>
      </div>
    </section>
  );
};
