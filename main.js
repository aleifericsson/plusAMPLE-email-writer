import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Popup from './components/Popup.jsx';
import Settings from './components/Settings.jsx';

ReactDOM.createRoot(document.getElementById('react-root')).render(
    <React.StrictMode>
      <Settings />
    </React.StrictMode>
  );