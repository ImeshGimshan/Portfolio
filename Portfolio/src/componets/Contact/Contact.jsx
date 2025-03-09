import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>Contact</h1>
          <h2 className={styles.subtitle}>Feel free to reach out!</h2>
        </div>

        <div className={styles.contactLinks}>
          <div className={styles.outlook}>
            <img
              src={getImageUrl("outlook.png")}
              alt="outlook img"
              className={styles.icon}
            />
            <a href="mailto:imeshgimhan@outlook.com" className={styles.link}>
              imeshgimhan@outlook.com
            </a>
          </div>
          <div className={styles.linkedin}>
            <img
              src={getImageUrl("linkedin.png")}
              alt="linkedin img"
              className={styles.icon}
            />
            <a
              href="https://www.linkedin.com/in/imeshgimshan"
              className={styles.link}
            >
              Imesh Gimshan
            </a>
          </div>
          <div className={styles.github}>
            <img
              src={getImageUrl("github.png")}
              alt="github img"
              className={styles.icon}
            />
            <a href="https://github.com/ImeshGimshan" className={styles.link}>
              Imesh Gimshan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
