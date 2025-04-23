import styles from "./Footer.module.css";

import { SiGmail , SiGithub , SiLinkedin } from "react-icons/si";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
                    <ul className={styles.social}>
						<li className={styles.social__item}>
							<a href="#!">
								<SiGmail className={styles.social__icon} alt="Link" />
							</a>
						</li>
						<li className={styles.social__item}>
							<a href="#!">
								<SiGithub className={styles.social__icon} alt="Link" />
							</a>
						</li>
						<li className={styles.social__item}>
							<a href="#!">
								<SiLinkedin className={styles.social__icon} alt="Link" />
							</a>
						</li>
					</ul>
					<div className={styles.copyright}>
						<p>© 2025 Dmytro Vasilewskyi</p>
					</div>
                </div>
            </div>
        </footer>
    );
};  

export default Footer;