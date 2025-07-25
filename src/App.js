import React, { useState, useEffect, createContext } from 'react';
import Compiler from './components/Compiler/Compiler';
import Footer from './components/Footer';
import './App.css';

// Create a theme context
export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);
  
  // Apply theme to document body
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className="App">
        <Compiler />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
