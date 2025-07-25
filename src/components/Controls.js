import React from 'react';

const Controls = ({ onRun, isDynamicExecution, setDynamicExecution }) => {
  return (
    <div className="controls">
      <button 
        className="run-button" 
        onClick={onRun}
        disabled={isDynamicExecution}
      >
        <span className="run-icon">▶</span>
        Run Code
      </button>
      
      <div className="execution-mode">
        <label className="toggle-label">
          <input 
            type="checkbox" 
            className="toggle-checkbox"
            checked={isDynamicExecution} 
            onChange={(e) => setDynamicExecution(e.target.checked)}
          />
          <span className="toggle-switch"></span>
          Live execution
        </label>
      </div>
    </div>
  );
};

export default Controls; 