import styles from "./style.module.css"

export const TechCard = ({technologie}) => {
  return (
    <li className={styles.cardTech}>
      <img src={technologie.img} alt="ImgTecnologia" />
      <h3 className="title tecnologie">{technologie.name}</h3>
    </li>
  );
};
