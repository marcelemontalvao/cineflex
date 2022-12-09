import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './assets/global.js';
import App from './components/App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);