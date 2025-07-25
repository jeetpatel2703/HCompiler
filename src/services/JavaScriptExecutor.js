// Safely execute JavaScript code and capture console outputs
const executeJavaScript = (code) => {
  // Store original console methods
  const originalConsole = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info
  };

  let outputBuffer = [];
  let errorMessage = null;

  // Capture console outputs
  console.log = (...args) => {
    outputBuffer.push(args.map(arg => 
      typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
    ).join(' '));
  };

  console.error = console.warn = console.info = console.log;

  try {
    // Create a safe execution function
    // eslint-disable-next-line no-new-func
    const executeFunction = new Function(`
      "use strict";
      ${code}
    `);
    
    // Run the code
    executeFunction();
  } catch (error) {
    errorMessage = `${error.name}: ${error.message}`;
  } finally {
    // Restore original console methods
    console.log = originalConsole.log;
    console.error = originalConsole.error;
    console.warn = originalConsole.warn;
    console.info = originalConsole.info;
  }

  return {
    output: outputBuffer.join('\n'),
    error: errorMessage
  };
};

export default executeJavaScript; 