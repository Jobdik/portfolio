import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";

export default function Home() {
  return (
    <div className={styles.Main}>
      <NavBar/>
      <Header/>
      <Projects/>
      
    </div>
  );
}
