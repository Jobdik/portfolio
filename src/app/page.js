'use client'
import React, { useState, useEffect, Suspense} from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import Header from "./Components/Header/Header";
import Projects from "./Components/Projects/Projects";
const AboutMe = React.lazy(() => import('./Components/AboutMe/AboutMe'));
const Skills  = React.lazy(() => import('./Components/Skills/Skills'));
import Footer from "./Components/Footer/Footer";


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
      <Suspense fallback={null}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Projects/>
      <Footer/>
    </div>
  );
}
