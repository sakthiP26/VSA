import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected import
import Navbar from "./components/Navbar";
import Home from './components/Home ';
import About from "./components/About";
import Trainings from "./components/Trainings";
// import Coursedetail from './components/Coursedetail';
import Contact from "./components/Contact";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/trainings" element={<Trainings />} />
        {/* <Route path="/course/:id" element={<Coursedetail />} /> */}
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </Router>
  );
}

export default App;
