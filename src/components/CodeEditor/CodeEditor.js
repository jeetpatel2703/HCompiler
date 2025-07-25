import React, { useRef, useContext } from 'react';
import Editor from '@monaco-editor/react';
import { ThemeContext } from '../../App';
import { languageMap } from './constants';
import './styles.css';

const CodeEditor = ({ code, setCode, language }) => {
  const { darkMode } = useContext(ThemeContext);
  const editorRef = useRef(null);

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const getLanguageId = () => {
    return languageMap[language] || 'javascript';
  };

  return (
    <div className="code-editor">
      <Editor
        height="97%"
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