import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { Left_Sidebar } from './Components/Left_Sidebar';
import { Right_Sidebar } from './Components/Right_Sidebar';
import { Content } from './Components/Content';
import { Description } from './Components/Description';
import { Homepage } from './Components/Homepage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Right_Sidebar/>
  <Left_Sidebar/>
  <Content/> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/recipes' element={<Content />}></Route>
        <Route path='/recipe/:id' element={<Description/>}></Route>


      </Routes>

    </BrowserRouter>

  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
