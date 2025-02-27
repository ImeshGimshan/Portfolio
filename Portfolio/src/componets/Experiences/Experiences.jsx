import React from 'react';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../util';
import styles from './Experiences.module.css';

export const Experiences = () => {
    return (
        <section id="exp" className={styles.container}>
            <h2 className={styles.title}>Languages I Know</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {
                        skills.map((skill, id) => {
                            const { imageSrc, title } = skill;
                            return (
                                <div key={id} className={styles.skill}>
                                    <div className={styles.image}>
                                        <img src={getImageUrl(imageSrc)} alt={title} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
};