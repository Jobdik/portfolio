'use client'
import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";

import { useState, useEffect } from "react";



export default function Home() {

  useEffect(() => {
    if (document.readyState === 'complete') {
      document.body.classList.add('loaded');
    } else {
      const onLoad = () => document.body.classList.add('loaded');
      window.addEventListener('load', onLoad);
      return () => window.removeEventListener('load', onLoad);
    }
  }, []);

  return (
    
    <div className={styles.Main}>
      <NavBar/>
      <Header/>
      <AboutMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}
