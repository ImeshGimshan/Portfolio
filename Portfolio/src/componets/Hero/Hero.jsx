import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../util';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h3>
                    <span className={styles.title}>Hey There</span><span className={styles.bye}>👋</span>
                </h3>
                <br></br>
                <h1 className={styles.name}>
                    I'm <span className={styles.highlights}>Imesh Gimshan</span>
                </h1>
                <br></br>
                <p className={styles.description}>
                    I'm a Software Engineering undergraduate passionate about 
                    <span className={styles.highlights}> Full Stack Development</span> and <span className={styles.highlights}>Machine Learning</span>.
                    I enjoy building dynamic and user-friendly web applications while exploring AI-driven solutions.
                </p>
                <a href='mailto:iamcyklon@gmail.com'className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl('Hero img.jpg')} alt='hero image' className={styles.heroImg} />
            <div className={styles.topGlare} />
            <div className={styles.bottomGlare} />
        </section>
    )
}