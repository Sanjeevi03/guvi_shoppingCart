import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SubApp from './SubApp';
ReactDOM.render(
  <React.StrictMode>
    <SubApp />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
