import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash'; // Import lodash
import Navbar from '../Navbar';
import CodeEditor from '../CodeEditor';
import OutputConsole from '../OutputConsole';
import Controls from '../Controls';
import { executeJavaScript } from '../../services';
import './styles.css';
import { defaultJsCode } from './constants';

const Compiler = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(defaultJsCode);
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);
  const [isDynamicExecution, setDynamicExecution] = useState(false);
  
  // Set default code based on language selection
  useEffect(() => {
    // Currently only JavaScript is implemented
    if (selectedLanguage === 'javascript') {
      setCode(defaultJsCode);
    }
    
    // Reset output and error when language changes
    setOutput('');
    setError(null);
  }, [selectedLanguage]);

  const handleRunCode = useCallback(() => {
    setOutput('');
    setError(null);
    
    if (selectedLanguage === 'javascript') {
      const result = executeJavaScript(code);
      setOutput(result.output);
      setError(result.error);
    } else {
      setError(`${selectedLanguage} execution is not yet implemented.`);
    }
  }, [code, selectedLanguage]);

  // Using lodash debounce for dynamic execution
  const debouncedRunCode = useCallback(
    _.debounce(() => {
      if (code) {
        handleRunCode();
      }
    }, 1000),
    [code, handleRunCode]
  );

  // Dynamic execution when enabled
  useEffect(() => {
    if (isDynamicExecution) {
      debouncedRunCode();
      
      return () => debouncedRunCode.cancel();
    }
  }, [code, isDynamicExecution, debouncedRunCode]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="compiler-container">
      <Navbar 
        selectedLanguage={selectedLanguage} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <div className="main-content">
        <div className="editor-section">
          <div className="editor-container">
            <Controls 
              onRun={handleRunCode}
              isDynamicExecution={isDynamicExecution}
              setDynamicExecution={setDynamicExecution}
            />
            
            <CodeEditor
              code={code}
              setCode={setCode}
              language={selectedLanguage}
            />
          </div>
          
          <div className="output-container">
            <OutputConsole output={output} error={error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler; 