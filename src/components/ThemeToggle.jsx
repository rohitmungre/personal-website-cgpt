import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext.jsx';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className={`theme-toggle ${theme}`}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
