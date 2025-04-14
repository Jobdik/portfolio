'use client'

import {useEffect} from "react";
import {LocalStorage} from "../../Utils/LocalStorage";
import detectDarkMode from '../../Utils/detectDarkMode';
import { IoIosSunny, IoIosMoon } from "react-icons/io";
import './BtnDarkStyles.css';

/**
 * Button component to toggle dark mode.
 * Uses local storage to persist the user's preference.
 */
const BtnDarkMode = () => {
    // State to manage dark mode, initialized from local storage or system preference
    const [DarkMode, setDarkMode] = LocalStorage('darkMode', detectDarkMode());

    // Effect to apply dark mode class to body based on DarkMode state
    useEffect(() => {
        if (DarkMode === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [DarkMode]);

    // Effect to listen for system dark mode changes and update state accordingly
    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light';
                setDarkMode(newColorScheme);
            });
    }, [setDarkMode]);

    // Function to toggle dark mode between 'light' and 'dark'
    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        });
    };

    // CSS classes for button and icons based on dark mode state
    const btnNormal = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn--active';
    const iconNormal = 'dark-mode-btn__icon';
    const iconActive = 'dark-mode-btn__icon dark-mode-btn__icon--active';

    // Render button with icons for light and dark mode
    return (
        <button className={DarkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
            <IoIosSunny alt="Light mode" className={DarkMode === 'dark' ? iconNormal : iconActive} />
            <IoIosMoon alt="Dark mode" className={DarkMode === 'dark' ? iconActive : iconNormal} />
        </button>
    );
};

export default BtnDarkMode;
