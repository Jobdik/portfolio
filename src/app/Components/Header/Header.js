import styles from "./Header.module.css";

import BackGround from "../HeaderBg/HeaderBg";

const Header = () => {
    return (
        <header className={styles.header}>
            <BackGround className={styles.header__bg}/>

            <div className={styles.header__wrapper}>
				<h1 className={styles.header__title}>
					<strong>
						Hi, my name is <em>Dmytro</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className={styles.header__text}>
					<p>with passion for learning and creating.</p>
				</div>
				<a href="#!" className={styles.btn}>
					Download CV
				</a>

			</div>

            
        </header>
    );
};


export default Header;