import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./assets/pages/Home";
import { About } from "./assets/pages/About";
import { Contact } from "./assets/pages/Contact";
import { Services } from "./assets/pages/Services";
import { Register } from "./assets/pages/Register";
import { Login } from "./assets/pages/Login";
import { Logout } from "./assets/pages/Logout";
import {Error} from "./assets/pages/Error";
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element = {<Home/>}   />
        <Route path="/about" element = {<About/>}   />
        <Route path="/services" element = {<Services/>}   />
        <Route path="/contact" element = {<Contact/>}   />
        <Route path="/register" element = {<Register/>}   />
        <Route path="/login" element = {<Login/>}   />
        <Route path='/logout' element= {<Logout/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;