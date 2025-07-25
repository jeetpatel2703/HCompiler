import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import './styles.css';

const Navbar = ({ selectedLanguage, onLanguageChange }) => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  
  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    // Will be implemented in future
    { id: 'python', name: 'Python', disabled: true },
    { id: 'java', name: 'Java', disabled: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/assets/image.png" alt="HCompiler Logo" className="logo-img" />
        Compiler
      </div>
      <div className="navbar-controls">
        <div className="theme-toggle">
          <button 
            className="theme-button" 
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        <div className="language-selector">
          <label htmlFor="language-select">Language:</label>
          <select 
            id="language-select"
            value={selectedLanguage} 
            onChange={(e) => onLanguageChange(e.target.value)}
          >
            {languages.map(lang => (
              <option 
                key={lang.id} 
                value={lang.id}
                disabled={lang.disabled}
              >
                {lang.name} {lang.disabled ? '(Coming Soon)' : ''}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 