import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div style={{width: '100%', height: '100%', background: 'linear-gradient(90deg, rgba(38, 86, 190, 0.20) 0%, #122C58 100%)', borderRadius: 20, padding: 20}}>
            <p className={styles.abot}>
                Saya seorang mahasiswa Teknik Informatika di Universitas Semarang. Saya memiliki kemampuan dalam bidang Full Stack seperti html, css, biasa mengoding memakai laravel. Saya juga memahami bidang video editing dan membuat model 3D. Saat ini, saya mencari pengalaman diluar kampus seperti mengikuti magang.
            </p>
        </div>
        <div className={styles.content}>
        <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me setting with a leptop"
            className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Saya seorang pengembang front-end dengan pengalaman dalam membangun situs yang responsif dan optimal.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>Saya memiliki pengalaman dalam sistem back-end dan API yang dioptimalkan.</p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>Saya telah merancang beberapa halaman arahan dan telah menciptakan sistem desain juga di aplikasi Figma, Corel Drew, Photo Shop.</p>
                </div>
            </li>
        </ul>
        </div>
    </section>
    );
};
