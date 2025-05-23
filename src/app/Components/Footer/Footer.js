import styles from "./Footer.module.css";

import CopyText from "../../Utils/copyTextToClipboard";
import { useState } from "react";

import { SiGmail , SiGithub , SiLinkedin } from "react-icons/si";

// Footer component: displays social links and a copy-to-clipboard email toast
const Footer = () => {
	// State to control displaying the "copied" toast
	const [isCopied, setIsCopied] = useState(false);

	// Handler for copying email to clipboard
	const handleCopy = () => {
		setIsCopied(true); // Show toast
		CopyText("vasilewskyidmytro@gmail.com") // Copy email
		setTimeout(() => setIsCopied(false), 2000); // Hide toast after 2s
	};

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapper}>
					{/* Social icons list */}
                    <ul className={styles.social}>
						<li className={styles.social__item}>
							<a onClick={() => handleCopy()} href="mailto:vasilewskyidmytro@gmail.com" aria-label="Send email">
								<SiGmail className={styles.social__icon} alt="Link" />
							</a>
						</li>
						<li className={styles.social__item}>
							<a href="https://github.com/Jobdik" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
								<SiGithub className={styles.social__icon} alt="Link" />
							</a>
						</li>
						<li className={styles.social__item}>
							<a href="https://www.linkedin.com/in/dmytro-vasilewskyi-a38481347/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
								<SiLinkedin className={styles.social__icon} alt="Link" />
							</a>
						</li>
					</ul>
					<div className={styles.copyright}>
						<p>© 2025 Dmytro Vasilewskyi</p>
					</div>
                </div>
            </div>

			{/* Toast notification for copy action */}
			{isCopied && 
			<div className={styles.toast}>
          		Email was copied!
        	</div>
			}

        </footer>
    );
};  

export default Footer;