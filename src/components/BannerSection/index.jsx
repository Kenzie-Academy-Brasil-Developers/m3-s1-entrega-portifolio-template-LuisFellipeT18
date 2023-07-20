import Banner from "../../assets/banner-img.png";
import styles from "./style.module.css";
import {username} from "../../data/user.js"

export const BannerSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.infos}>
            <p className="paragraph login">{username}</p>
            <div className={styles.infos2}>
              <h1 className="title lg">Bem vindo ao meu portfólio</h1>
              <p className="paragraph">Uma frase interessante sobre mim</p>
              <a className="btn" href="#">
                Saiba mais
              </a>
            </div>
          </div>
          <img src={Banner} alt="banner" />
        </div>
      </div>
    </section>
  );
};
