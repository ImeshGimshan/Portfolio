import React from "react";
import { getImageUrl } from "../../util";
import styles from "./About.module.css";
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about img.jpg")}
                    alt="A picture of me"
                    className={styles.myimg}
                />
                <ul className={styles.about}>
                    {/* frontend dev about */}
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon}
                            src={getImageUrl("tool.png")}
                            alt="ui icon"
                        />
                        <div className={styles.aboutText}>
                            <h3>
                                Frontend Developer
                            </h3>
                            <p>
                                I have experience in building optimized websites.
                            </p>
                        </div>
                    </li>

                    {/* backend development about */}
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon}
                            src={getImageUrl("backend.png")}
                            alt="backend icon"
                        />
                        <div className={styles.aboutText}>
                            <h3>
                                Backend Developer
                            </h3>
                            <p>
                                I have experience in developing backend systems and APIs.
                            </p>
                        </div>
                    </li>

                    {/* machine lerning about */}
                    <li className={styles.aboutItem}>
                        <img className={styles.aboutIcon}
                            src={getImageUrl("computing.png")}
                            alt="ai icon"
                        />
                        <div className={styles.aboutText}>
                            <h3>
                                Machine Learning
                            </h3>
                            <p>
                                I'm passionate about AI and machine learning.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}