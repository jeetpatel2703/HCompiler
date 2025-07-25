import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './styles.css';

const OutputConsole = ({ output, error }) => {
  const [timestamp, setTimestamp] = useState('');
  
  useEffect(() => {
    if (output || error) {
      setTimestamp(moment()?.format('h:mm:ss a'));
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