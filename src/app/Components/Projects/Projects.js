import styles from "./Projects.module.css";

import { RiEmotionUnhappyLine } from "react-icons/ri";

// Projects component: displays a grid of project titles or a fallback when no projects exist
const Projects = () => {

    // Static list of projects; could be fetched from an API in the future
    const projects = [
        {
            title: "Project 1",
        },
        {
            title: "Project 2",
        },
        {
            title: "Project 3",
        },
        {
            title: "Project 4",
        },
    ];

    return (
        <main className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Projects</h2>
                {/* If there are projects, render them in a grid; otherwise show a fallback message */}
                    {projects.length > 0 ? (
                        <div className={styles.projects__grid}>
                            {projects.map((project, index) => {
                                return (
                                    <div className={styles.item_container} key={index}>
                                        <a>{project.title}</a>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className={styles.item_container_not}>
                            {/* Icon to indicate no projects */}
                            <RiEmotionUnhappyLine className={styles.icon}/>
                            <p>No projects</p>
                        </div>
                    )}         
            </div> 
        </main>
    );
};

export default Projects;