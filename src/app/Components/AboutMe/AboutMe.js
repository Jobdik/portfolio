import styles from "./AboutMe.module.css";
import React, { useMemo } from "react";

// Card component: renders an individual section with a title and bullet list
// React.memo optimizes re-renders by memoizing when props haven't changed
const Card = React.memo(function Card({ title, items }) {
    return (
      <div className={styles.card}>
        <h3 className={styles.card__title}>{title}</h3>
        <ul className={styles.card__text}>
          {items.map(text => <li key={text}>{text}</li>)}
        </ul>
      </div>
    );
});

// Main AboutMe component: wraps section data and renders Card components
export default function AboutMe() {  
  // useMemo ensures the sections array is created only once on mount
  const sections = useMemo(() => 
    [
      {
      title: 'Education',
      items: [
        'I am currently pursuing an Associate of Science degree in Computer Science at Odesa Technical Vocational College (expected graduation: August 2025).',
        'My goal is to combine formal education with practical experience and continue growing as a developer.',
      ],
    },
    {
      title: 'Experience in 7km',
      items: [
        'At 7km, I worked as a junior full stack developer, building internal tools like an interactive facility map and an access automation system.',
        'Tech stack: React.js, Node.js, SQL — real-world apps that streamlined processes.',
        'Gained basic exposure to servers, databases and API integrations.',
      ],
    },
    {
      title: 'My main strengths',
      items: [
        'Focus on clean, efficient code, basic security and future-proof architecture.',
        'Love solving problems, optimizing workflows and learning new tech for reliability and scalability.',
        'Value collaboration, curiosity and continuous improvement.',
      ],
    },
    {
      title: 'Current Education and Growth',
      items: [
        'Actively learning and improving every day.',
        'Staying curious about new technologies, web-dev best practices and software design.',
        'Aiming to become a well-rounded developer who contributes confidently in teams.',
      ],
    },
    ], []);

  return (
    <section className={styles.AboutMe}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.bio}>
        {sections.map(sec => (
          <Card key={sec.title} title={sec.title} items={sec.items} />
        ))}
      </div>
    </section>
  );

};
