// Import the necessary modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'; // Make sure the path to App.js is correct
import reportWebVitals from './reportWebVitals';

// Create a root element for ReactDOM
const root = document.getElementById('root');

// Check if the root element exists before rendering the app
if (root) {
  // Use ReactDOM.render for legacy projects or when createRoot is not available
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
} else {
  // Use createRoot for concurrent mode in React 18 or later
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Report web vitals
reportWebVitals();
