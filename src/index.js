import React from 'react';
import './index.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Left_Sidebar } from './Components/Left_Sidebar';
import { Right_Sidebar } from './Components/Right_Sidebar';
import { Content } from './Components/Content';
import { Description } from './Components/Description';
import { Homepage } from './Components/Homepage';
import { Profile } from './Components/Profile';
import { Header } from './Components/Header';
import { Categories } from './Components/Categories';
import { Postbutton } from './Components/Postbutton';
import { Navbar } from './Components/Navbar';
import { Offcanvas } from './Components/Offcanvas';
import { Settings } from './Components/Settings';
import { RecipeModal } from './Components/RecipeModal';
import { PostModal } from './Components/PostModal';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { Communities } from './Components/Communities';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
   <Auth0Provider
      domain="dev-bd8wav35g7x84rej.us.auth0.com"
      clientId="UFNnS5WvcIVdqXYpqTPlBgsb0eiyvpBH"
      authorizationParams={{
        redirect_uri: window.location.origin 
      }}

    >
    {/* <Right_Sidebar/>
  <Left_Sidebar/>
  <Content/> */}
    
      <BrowserRouter>
        {/* <Left_Sidebar> */}
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Homepage />}></Route>
            </Route>

          <Route path='/' element={<Left_Sidebar />}>
          
            <Route path='/recipes' element={<Content />}></Route>
          </Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/categories' element={<Categories />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/communities/:name' element={<Communities/>}/>
          <Route path='/recipe/:id' element={<Description />}></Route>

        </Routes>
        {/* </Left_Sidebar> */}
      </BrowserRouter>
      </Auth0Provider>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
