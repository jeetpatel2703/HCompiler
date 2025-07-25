import React from 'react';

const Controls = ({ onRun, isDynamicExecution, setDynamicExecution }) => {
  return (
    <div className="controls">
      <button 
        className="run-button" 
        onClick={onRun}
        disabled={isDynamicExecution}
      >
        Run
      </button>
      
      <div className="execution-mode">
        <label>
          <input 
            type="checkbox" 
            checked={isDynamicExecution} 
            onChange={(e) => setDynamicExecution(e.target.checked)}
          />
          Run automatically on change
        </label>
      </div>
    </div>
  );
};

export default Controls; 