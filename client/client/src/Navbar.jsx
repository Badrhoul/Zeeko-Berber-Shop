import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import { IoMdMenu } from "react-icons/io";
//import logo from \assets\barberLogo.jpeg

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="barberLogo.jpeg" />
      </div>
      <div className="nav-buttons">
        <Link to='/'>
        <button className="nav-button">Home</button>
        </Link>
        <button className="nav-button">About</button>
        
        <Link to='/schedule'>
          <button className="nav-button">Book Now</button>
        </Link>
        
        <div className="dropdown">
          
          <button className="dropbtn">✂️</button>
          <div className="dropdown-content">
            <Link to='/appointments'>Appointments</Link>
            <a href="#option2">Sign Up</a>
            <a href="#option3">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar