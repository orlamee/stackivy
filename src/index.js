import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Savings from './pages/savings';
import ScrollTop from './scrollTop';
// import ScrollTop from './scrollTop.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/savings" element={<Savings/>}></Route>
      </Routes>
    </ScrollTop>

</BrowserRouter>
);


reportWebVitals();
