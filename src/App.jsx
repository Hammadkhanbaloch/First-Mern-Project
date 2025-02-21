import React from  "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import About from "./Pages/About";
import Header from "./Components/Header";
import Profile from "./Components/Profile";
import CreateListing from "./Pages/listing";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/LogIn" element={<LogIn/>}/>
        <Route path ="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/create_listing" element={<CreateListing/>}/>
      </Routes>
    </BrowserRouter>
  )
}