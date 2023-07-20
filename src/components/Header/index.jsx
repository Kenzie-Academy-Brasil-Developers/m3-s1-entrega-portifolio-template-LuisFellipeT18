import Logo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={styles.header} id="container">
        <img src={Logo} alt="Portfolio-vector" />
        <div className={styles.headerLinks}>
          <a className="link-header" href="#">
            Sobre
          </a>
          <a className="link-header" href="#">
            Stack
          </a>
          <a className="link-header" href="#">
            Projetos
          </a>
        </div>
        <button className="btn">Contato</button>
      </div>
    </header>
  );
};
