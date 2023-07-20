import { TechList } from "./TechList";

export const TechSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="list">
          <h2 className="title md">Tecnologias</h2>
          <TechList />
        </div>
      </div>
    </section>
  );
};
