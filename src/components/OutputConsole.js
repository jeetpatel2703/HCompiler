import React, { useState, useEffect } from 'react';

const OutputConsole = ({ output, error }) => {
  const [timestamp, setTimestamp] = useState('');
  
  useEffect(() => {
    if (output || error) {
      const now = new Date();
      const time = now.toLocaleTimeString();
      setTimestamp(time);
    }
  }, [output, error]);

  return (
    <div className="output-console">
      <div className="output-header">
        <h3>Console Output</h3>
        {(output || error) && <span className="timestamp">{timestamp}</span>}
      </div>
      <div className="output-content">
        {error ? (
          <>
            <div className="console-line console-error">
              <span className="prefix">Error: </span>
              <pre className="error">{error}</pre>
            </div>
          </>
        ) : (
          <>
            {output ? (
              <pre>{output}</pre>
            ) : (
              <p className="empty-output">Run your code to see output here</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OutputConsole; 