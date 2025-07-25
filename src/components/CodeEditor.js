import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ code, setCode, language }) => {
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
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          automaticLayout: true,
          wordWrap: 'on',
          scrollBeyondLastLine: false,
          lineNumbers: 'on',
          suggestOnTriggerCharacters: true,
          snippetSuggestions: 'on',
          tabSize: 2,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8
          }
        }}
      />
    </div>
  );
};

export default CodeEditor; 