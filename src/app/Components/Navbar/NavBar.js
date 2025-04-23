'use client'
import React, { useState, useEffect } from 'react';

import styles from "./NavBar.module.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function NavBar () {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };
    

    return (
        <nav className={styles.nav + " " + (scrolled ? styles.scrolled : "") + " " + (menuOpen ? styles.active : '')}>
            <div className={styles.container}>
                <div className={styles.nav_row}>
                    <a href="./index.html" className={styles.logo}><strong>Dmytro</strong> Vasilewskyi</a>

                    <BtnDarkMode />
                    
                    <div
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    <ul className={`${styles.nav_list} ${menuOpen ? styles.show : ''}`}>
                    <li className={styles.nav_list__item}>
                        <a href="#projects" className={styles.nav_list__link}>Projects</a>
                    </li>
                    <li className={styles.nav_list__item}>
                        <a href="#skills" className={styles.nav_list__link}>Skills</a>
                    </li>
                    <li className={styles.nav_list__item}>
                        <a href="#contacts" className={styles.nav_list__link}>Contacts</a>
                    </li>
                    </ul>

                </div>
            </div>
        </nav>
      );
}
 
export default NavBar;
