import React from 'react';

const OutputConsole = ({ output, error }) => {
  return (
    <div className="output-console">
      <div className="output-header">
        <h3>Output</h3>
      </div>
      <div className="output-content">
        {error ? (
          <pre className="error">{error}</pre>
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