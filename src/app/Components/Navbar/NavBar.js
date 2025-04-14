import styles from "./NavBar.module.css";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";

function NavBar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <div className={styles.nav_row}>
                    <a href="./index.html" className={styles.logo}><strong>Mine</strong> portfolio</a>

                    <BtnDarkMode />
                    
                    <ul className={styles.nav_list}>
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
