import LogoGit from "../../../../assets/git-icon.png";
import styles from "./style.module.css";

export const ProjectCard = ({ project }) => {
  return (
    <li className={styles.projectCard}>
      <div className={styles.projectImg}>
        <h3 className="title sm">{project.name}</h3>
        <img src={LogoGit} alt="LogoGit" />
      </div>
      <div className={styles.infoLink}>
        <p className="paragraph">{project.description}</p>

        <a className="link-projects" href="#">
          Saiba mais
        </a>
      </div>
    </li>
  );
};
