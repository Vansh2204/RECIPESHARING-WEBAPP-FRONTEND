import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Left_Sidebar } from './Components/Left_Sidebar';
import { Right_Sidebar } from './Components/Right_Sidebar';
import { Content } from './Components/Content';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Right_Sidebar/>
  <Left_Sidebar/>
  <Content/>
  
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
