import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import BasarisizOrnek from './examples/basarisizOrnek';
import BasariliOrnek from './examples/basariliOrnek';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BasariliOrnek />
  </React.StrictMode>
);

reportWebVitals();
