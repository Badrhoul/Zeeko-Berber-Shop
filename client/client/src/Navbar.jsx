import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
//import logo from \assets\barberLogo.jpeg

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo" />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Home</button>
        <button className="nav-button">About</button>
        <Link to='schedule'>
          <button className="nav-button">Book Now</button>
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#option1">Option 1</a>
            <a href="#option2">Option 2</a>
            <a href="#option3">Option 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar