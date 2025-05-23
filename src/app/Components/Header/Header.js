import styles from "./Header.module.css";

import BackGround from "../HeaderBg/HeaderBg";

// Header component: displays the main introduction, title, and CV download button
const Header = () => {
    return (
        <header className={styles.header}>
			{/* Background animation / visual effect */}
            <BackGround className={styles.header__bg}/>

			{/* Content wrapper to center and constrain header text */}
            <div className={styles.header__wrapper}>
				<h1 className={styles.header__title}>
					<strong>
						Hi, my name is <em>Dmytro</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className={styles.header__text}>
					<p>specializing in React & Node.js.</p>
				</div>
				{/* Downloadable CV link; uses HTML download attribute */}
				<a  href="/cv/Dmytro_Vasilewskyi_CV.pdf" download="Dmytro_Vasilewskyi_CV.pdf" className={styles.btn}>
					Download CV
				</a>

			</div>

            
        </header>
    );
};


export default Header;