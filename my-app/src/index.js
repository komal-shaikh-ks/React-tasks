import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Load from './handling loading states';
// import App from './App';
import Main from './fetching data with hook';
import Start from './display data from api';
import reportWebVitals from './reportWebVitals';
import {Routers,About,Contact} from './react routers';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Main/>
    <Start/>
    <Load/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routers/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
     
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
