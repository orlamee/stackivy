import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Savings from './pages/savings';
import ScrollTop from './scrollTop';
import Loans from './pages/loans';
import Invest from './pages/invest';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import FAQ from './pages/faq';
import SignUp from './pages/signup';
import EmailVerification from './pages/emailVerification';
import Setpassword from './pages/setPassword';
import Login from './pages/login';
import AboutUs from './pages/aboutUs';
// import ScrollTop from './scrollTop.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/savings" element={<Savings/>}></Route>
        <Route path="/loans" element={<Loans/>}></Route>
        <Route path="/invest" element={<Invest/>}></Route>
        <Route path="/terms" element={<Terms/>}></Route>
        <Route path="/privacy" element={<Privacy/>}></Route>
        <Route path="/faq" element={<FAQ/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/otp" element={<EmailVerification/>}></Route>
        <Route path="/set-password" element={<Setpassword/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about-us" element={<AboutUs/>}></Route>
      </Routes>
    </ScrollTop>

</BrowserRouter>
);


reportWebVitals();
