import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (
        <>
            <section className={styles.AboutMe}>
                <h2 className={styles.title}>About Me</h2>
                        <div className={styles.bio}>
                            <div className={styles.card}>
                                <h3 className={styles.card__title}>Education</h3>
                                <ul className={styles.card__text}>
                                    <li>I am currently pursuing an Associate of Science degree in Computer Science at Odesa Technical Vocational College (expected graduation: August 2025).</li>
                                    <li>My goal is to combine formal education with practical experience and continue growing as a developer.</li>
                                </ul>
                            </div>

                            <div className={styles.card}>
                                <h3 className={styles.card__title}>Expirience in 7km</h3>
                                <ul className={styles.card__text}>
                                    <li>At 7km, I had the opportunity to work as a junior full stack developer, where I helped develop internal tools such as an interactive facility map and an access automation system.</li>
                                    <li>I worked mainly with React.js, Node.js, and SQL, learning how to build real applications that improved internal processes.</li>
                                    <li>I also gained basic experience in working with servers, databases, and API integrations.</li>
                                </ul>
                            </div>

                            <div className={styles.card}>
                                <h3 className={styles.card__title}>My main strengths</h3>
                                <ul className={styles.card__text}>
                                    <li>As a beginner developer, I focus on writing clean and efficient code, ensuring basic security, and thinking about how projects can grow over time.</li>
                                    <li>I enjoy solving problems, optimizing workflows, and learning new technologies that help make systems more reliable and scalable.</li>
                                    <li>Collaboration, curiosity, and continuous improvement are what I value the most right now.</li>
                                </ul>
                            </div>
                            
                            <div className={styles.card}>
                                <h3 className={styles.card__title}>Current Education and Growth</h3>
                                <ul className={styles.card__text}>
                                    <li>I’m actively learning and improving every day.</li>
                                    <li>I stay curious about new technologies, web development best practices, and software design.</li>
                                    <li>My main goal is to become a strong, well-rounded developer who can contribute to real-world projects and work confidently in a team.</li>
                                </ul>
                            </div>
                        </div>
            </section>

            <section className={styles.skills__section}>
                <h2 className={styles.skills__title}>Skills</h2>
                    <ul className={styles.skills__list}>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>React.js</li>
                        <li>Node.js</li>
                        <li>SQL</li>
                        <li>PHP</li>
                        <li>REST APIs</li>
                        <li>CI/CD</li>
                        <li>Agile</li>
                        <li>Windows Server</li>
                    </ul>
            </section>
        </>
    );
};
  
  export default AboutMe;
