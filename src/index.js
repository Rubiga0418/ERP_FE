import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import './assets/css/argon-dashboard.css';
import './assets/css/argon-dashboard.css.map';
import './assets/css/argon-dashboard.min.css';
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';

import FontAwesomeLoader from './FontAwesomeLoader'; 
import GoogleFontLoader from './GoogleFontLoader';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GoogleFontLoader />
    <FontAwesomeLoader />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
