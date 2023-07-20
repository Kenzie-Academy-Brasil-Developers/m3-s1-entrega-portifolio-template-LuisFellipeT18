import { technologies } from "../../../data/technologies";
import { TechCard } from "./TechCard";



export const TechList = () => {
  return (
    <ul className="tecnolies">
      {technologies.map((technologie) => (
        <TechCard key={technologie.id} technologie={technologie} />
      ))}
    </ul>
  );
};
