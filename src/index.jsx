import React from 'react';
import ReactDOM from 'react-dom/client';
import ChocomintMain from './elements/ChocomintMain';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
    <ChocomintMain />
  </React.StrictMode>
);
reportWebVitals();
