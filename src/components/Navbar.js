import React from 'react';

const Navbar = ({ selectedLanguage, onLanguageChange }) => {
  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    // Will be implemented in future
    { id: 'python', name: 'Python', disabled: true },
    { id: 'java', name: 'Java', disabled: true },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-brand">CodeCompiler</div>
      <div className="language-selector">
        <select 
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
    </nav>
  );
};

export default Navbar; 