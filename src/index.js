import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Header'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>,

  </div>
);

console.log(process.env.REACT_APP_NODE_ENV)
console.log(process.env.REACT_APP_BACKEND_URL)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
