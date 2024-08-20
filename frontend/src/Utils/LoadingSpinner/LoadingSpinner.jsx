import React from 'react';
import '../LoadingSpinner/LoadingSpinner.css'; // Stil dosyanızı ekleyin

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
}

export default LoadingSpinner;
