import React from 'react';
import { getImageUrl } from '../../util';
import styles from './ProjectCard.module.css';


export const ProjectCard = ({ project :{title,image,description,skills,Repository}}) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(image)} alt={title} className={styles.image}/>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return (
                            <li key={id} className={styles.skill}>{skill}</li>
                        );
                    }
                        
                    )
                }
            </ul>
            <div className={styles.links}>
                <a href={Repository} className={styles.link}>Github</a>
            </div>
        </div>
    )
}