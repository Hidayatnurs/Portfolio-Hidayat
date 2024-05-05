import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
return (
    <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, Saya Hidayat Nur Syahputra</h1>
        <p className={styles.description}>My Hoby Musik, Game, Basket</p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
        Contack Me
        </a>
    </div>
    <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
    />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};
