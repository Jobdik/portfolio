import styles from "./Skills.module.css";
import React from "react";
// Static array of skill names; ideally fetched or imported from a config
const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js',
  'SQL', 'PHP', 'REST APIs', 'CI/CD', 'Agile', 'Windows Server',
];

// Skills component: displays a list of frontend/backend and workflow skills
// React.memo prevents unnecessary re-renders since skills array is static
export default React.memo(function Skills() {
  return (
    <section className={styles.skills__section}>
      <h2 className={styles.skills__title}>Skills</h2>
      <ul className={styles.skills__list}>
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
});