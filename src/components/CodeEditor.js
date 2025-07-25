import React, { useRef, useContext } from 'react';
import Editor from '@monaco-editor/react';
import { ThemeContext } from '../App';

const CodeEditor = ({ code, setCode, language }) => {
  const { darkMode } = useContext(ThemeContext);
  const editorRef = useRef(null);
  
  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const getLanguageId = () => {
    // Map our language IDs to Monaco's language IDs
    const languageMap = {
      javascript: 'javascript',
      python: 'python',
      java: 'java'
    };
    return languageMap[language] || 'javascript';
  };

  return (
    <div className="code-editor">
      <Editor
        height="60vh"
        defaultLanguage={getLanguageId()}
        language={getLanguageId()}
        value={code}
        onChange={setCode}
        onMount={handleEditorDidMount}
        theme={darkMode ? "vs-dark" : "light"}
        options={{
          minimap: { enabled: true },
          fontSize: 14,
          fontFamily: "'Fira Code', monospace",
          fontLigatures: true,
          automaticLayout: true,
          wordWrap: 'on',
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          suggestOnTriggerCharacters: true,
          snippetSuggestions: 'on',
          tabSize: 2,
          padding: { top: 16, bottom: 16 },
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
            useShadows: true
          },
          cursorBlinking: 'smooth',
          cursorSmoothCaretAnimation: true,
          smoothScrolling: true,
          mouseWheelZoom: true,
          bracketPairColorization: { enabled: true }
        }}
      />
    </div>
  );
};

export default CodeEditor; 