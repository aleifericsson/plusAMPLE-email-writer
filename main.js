import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Popup from './components/Popup.jsx';
import Settings from './components/Settings.jsx';
import Cookies from 'js-cookie';
import { sendMessage } from './scripts/ext-qol.js';

const init_scanning = Cookies.get("init_scanning")
console.log(Cookies.get())

sendMessage({message:"toggle_scanning", scanning: init_scanning })

ReactDOM.createRoot(document.getElementById('settings-react-root')).render(
    <React.StrictMode>
      <Settings init_scanning={init_scanning === "true"}/>
    </React.StrictMode>
  );