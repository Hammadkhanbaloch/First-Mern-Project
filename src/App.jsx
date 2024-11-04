import React from  "react";
import {BrowserRouter,Route,Routes} from 'React-router-dom';
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import About from "./Pages/About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path ="/About" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}