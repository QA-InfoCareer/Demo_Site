import React, { useState, useEffect } from 'react';
import './progressbar.css';
const ProgressApp = () => {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the progress
  const startProgress = () => {
    setIsRunning(true);
  };

  // Function to stop the progress
  const stopProgress = () => {
    setIsRunning(false);
  };

  // Function to reset the progress
  const resetProgress = () => {
    setIsRunning(false);
    setProgress(0);
  };

  // useEffect to handle progress update when running
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          if (newProgress >= 100) {
            setIsRunning(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);
  const getProgressBarColor = () => {
    if (progress >= 100) {
      return '#4caf50'; // Green color when progress reaches 100%
    }
    return '#2196f3'; // Blue color for the progress bar
  };
  return (
    <div>
      <p style={{ fontSize: '32px' }}>Progress Bar</p>
      <span style={{marginTop:'2%'}}>Progress Bar</span>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%`,backgroundColor: getProgressBarColor() }}>
          {progress}%
        </div>
      </div>
      <div>
        {isRunning ? (
          <button style={{marginTop:'4%'}} class="btn btn-primary" onClick={stopProgress}>Stop</button>
        ) : progress === 100 ? (
          <button style={{marginTop:'4%'}} class="btn btn-primary" onClick={resetProgress}>Reset</button>
          ) : (
            <button style={{marginTop:'4%'}} class="btn btn-primary" onClick={startProgress}>Start</button>
          )}
        </div>
      </div>
    );
  };
  
  export default ProgressApp;