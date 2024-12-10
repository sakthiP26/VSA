import React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import "./Navbar.css"; // Import the custom CSS file for Navbar
import logo from './logo.jpg'; // Ensure the logo path is correct

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li> {/* Use Link for the Home Page */}
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/trainings">Our Trainings</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
