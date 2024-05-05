import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
                <a href="nursyahputrahidayat22@gmail.com">nursyahputrahidayat22@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/instagram.png")} alt="Instagram icon" />
                <a href="https://www.instagram.com/hidayatnurs/?hl=en">https://www.instagram.com/hidayatnurs/?hl=en</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/github.png")} alt="Github icon" />
                <a href="https://github.com/Hidayatnurs/">https://github.com/Hidayatnurs/</a>
            </li>
        </ul>
    </footer>
    );
};
