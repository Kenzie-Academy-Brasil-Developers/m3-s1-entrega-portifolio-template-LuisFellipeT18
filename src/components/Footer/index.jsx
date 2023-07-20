import LogoWhats from "../../assets/whatsapp-icon.png";
import LogoLinkedin from "../../assets/linkedin-icon.png";
import LogoGitHub from "../../assets/github-icon.png";
import styles from "./style.module.css";
import { user } from "../../data/user.js";

export const Footer = () => {
  return (
    <section className="section-padding">
      <div className="container section-contact">
        <div className={styles.alignFooter}>
          <div className={styles.alignContactImg}>
            <h2 className="title md">Contato</h2>
            <div className={styles.alignImg}>
              <img src={LogoWhats} alt="whatsap" />
              <img src={LogoLinkedin} alt="linkedin" />
              <img src={LogoGitHub} alt="gitHub" />
            </div>
          </div>
          <div>
            <p className="paragraph">Todos os direitos reservados - {user}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
