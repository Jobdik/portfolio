'use client'
import styles from "./Particles.module.css";

import React, { useEffect, useState } from "react";
import {LocalStorage} from "../../Utils/LocalStorage";
import detectDarkMode from '../../Utils/detectDarkMode';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const HearderBg = () => {
  const [options, setOptions] = useState({});

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const updateOptions = () => {
    const bodyStyles     = getComputedStyle(document.body);
    const HeaderBGColor  = bodyStyles.getPropertyValue("--header-bg-color").trim();
    const particleColor  = bodyStyles.getPropertyValue("--particle-color").trim();
    const linkColor      = bodyStyles.getPropertyValue("--link-color").trim();

    setOptions({
      fullScreen: { enable: false },
      background: {
        color: { value: HeaderBGColor },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: true,
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: linkColor,
          distance: 50,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: { enable: true },
        move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 80,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { random: true, value: 2 },
      },
      detectRetina: true,
    });
  };

  useEffect(() => {
    
    updateOptions();

    const handleChange = () => {
      updateOptions();

    };
  
    window.addEventListener("darkModeChanged", handleChange);
  
    return () => {
      window.removeEventListener("darkModeChanged", handleChange);
    };
  }, []);
  

  
  return (
    <div className={styles.wrapper}>
      {options && (
        <Particles
          className={styles.particles}
          init={particlesInit}
          style={{ width: "100%", height: "100%" }}
          options={options}
        />
      )}
    </div>
  );
};

export default HearderBg;