"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

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
      className={`${darkMode ? 'bg-white' : 'bg-black'} dark-mode-togglex p-0 flex items-center justify-center w-[50px] h-[50px] border-4 border-gray-700 rounded cursor-pointer focus:outline-none fixed top-[50%] right-[30px] z-[999] translate-y-[-50%]`}
      type="button"
      onClick={toggleTheme}
    >
      <span className="sr-only">Dark Mode</span>
      <FontAwesomeIcon icon={darkMode ?  faSun : faMoon} className="text-yellow-300 text-[20px]" />
    </button>
  );
};

export default ThemeToggle;