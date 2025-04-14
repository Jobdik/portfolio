import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";

export default function Home() {
  return (
    <div className={styles.Main}>
      <NavBar/>
      <Header/>
      
    </div>
  );
}
