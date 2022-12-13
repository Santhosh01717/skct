import React from 'react'
import './App.css';
import Login from './project/Login';
 import { BrowserRouter, Routes, Route } from 'react-router-dom'
 import Home from './project/Home'
 import About from './project/About'
 import ContactUs from './project/ContactUs'
 import ButtonAppBar from './project/NavBarDemo';
import SearchBar from './project/SearchBar';
import Result from './project/Result';
import Fahernheit from './project/Fahernheit';
import Kelvin from './project/Kelvin';
import Welcome from './project/Welcome';

 //import SearchBar from './project/SearchBar';
export default
 function App() {
  return (
    <div>
       { <BrowserRouter>
       <ButtonAppBar />
      
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={ <ContactUs /> } />
          <Route path="/search" element={<SearchBar />} />
          <Route path="/result" element={<Result/>} />
          <Route path="/fahernheit" element={<Fahernheit/>} />
          <Route path="/kelvin" element={<Kelvin />} />
        </Routes>
      </BrowserRouter> }
    </div>
  );
}
