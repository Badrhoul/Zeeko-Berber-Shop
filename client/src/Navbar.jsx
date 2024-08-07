import React from 'react';
import './Css Files/Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

  const userId = null
console.log(userId)

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
          {userId ? (
            <div className="dropdown-content">
              <Link to='/appointments'>Appointments</Link>
              <Link to="/signUp">help</Link>
              <Link to="/login">Log-Out</Link>
            </div>
          ) : (
            <div className="dropdown-content">
              <Link to='/appointments'>Appointments</Link>
              <Link to="/signUp">Sign-Up</Link>
              <Link to="/login">Login</Link>
            </div>
          )
          }
        </div>
      </div>
    </div>
  );
}

export default Navbar