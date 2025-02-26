import React, {useState} from 'react';
import {getImageUrl} from '../../util';

import styles from './Navbar.module.css';

export const Navbar = () => {
    const [navlinksOpen, setNavlinksOpen] = useState(false);
    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href='/'>
                Portfolio
            </a>
            <div className={styles.links}>
                <img 
                    className={styles.linkBtn}
                    src={navlinksOpen ? getImageUrl("menu.png") : getImageUrl("menu.png")}
                    onClick={()=>setNavlinksOpen(!navlinksOpen)}
                />
                <ul className={`${styles.navlinks} ${navlinksOpen && styles.navlinksOpen}`}
                    onClick={()=>setNavlinksOpen(false)}
                >
                    <li>
                        <a href='#about' className={styles.link}>About</a>
                    </li>
                    <li>
                        <a href='#projects'className={styles.link}>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'className={styles.link}>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}