import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar.jsx';
import Nav from './components/Navbar.jsx';
import Crew from './components/Crew.jsx';
import Destination from './components/Destination.jsx';
import Home from './components/Home.jsx';
import Technology from './components/Technology.jsx';



function App() {
  

  return (
    <>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Route>
        </Routes>
    </>
  )
}

export default App
