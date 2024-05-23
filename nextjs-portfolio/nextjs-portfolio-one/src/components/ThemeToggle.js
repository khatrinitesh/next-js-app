"use client"

import React,{ useEffect, useState } from 'react';
// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
      setDarkMode(true);
    } 
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button
      className={`${darkMode ? 'bg-white border-white' : 'bg-black border-gray-900'} p-0 flex items-center justify-center w-[40px] h-[40px] border-4  rounded cursor-pointer focus:outline-none fixed top-[50%] right-[10px] z-[9] translate-y-[-50%]`}
      type="button"
      onClick={toggleTheme}
    >
      <span className="sr-only">Dark Mode</span>
      <FontAwesomeIcon icon={darkMode ?  faSun : faMoon} className="text-yellow-300 text-[20px]" />
    </button>
  );
};

export default ThemeToggle;