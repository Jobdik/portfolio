'use client'
import React, { useState, useEffect } from 'react';

import styles from "./NavBar.module.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

// NavBar component: sticky navigation with scroll effect, dark-mode toggle, and mobile menu
function NavBar () {
    // State to track if page has been scrolled past threshold
    const [scrolled, setScrolled] = useState(false);
    // State to control mobile menu open/close
    const [menuOpen, setMenuOpen] = useState(false);

    // Add scroll listener on mount to update 'scrolled' state
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            // If scrolled down more than 50px, mark navbar as scrolled
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

    // Toggle mobile menu open/close
    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };
    

    return (
        // Combine classes based on scroll and menu states
        <nav className={styles.nav + " " + (scrolled ? styles.scrolled : "") + " " + (menuOpen ? styles.active : '')}>
            <div className={styles.container}>
                <div className={styles.nav_row}>
                    {/* Logo / Home link */}
                    <a href="./" className={styles.logo}><strong>Dmytro</strong> Vasilewskyi</a>

                    {/* Dark mode toggle button */}
                    <BtnDarkMode />

                    {/* Hamburger menu icon for mobile */}
                    <div
                    className={styles.hamburger}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                    {/* Navigation links; visible when menuOpen is true on mobile */}
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
