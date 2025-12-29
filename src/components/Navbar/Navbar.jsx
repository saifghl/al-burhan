import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-text.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link">
          <div className="navbar-logo">
            <img src={logo} alt="Al Burhan Logo" className="logo-image" />
          </div>
        </Link>

        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/administration" className="nav-links">Administration</Link>
          </li>
          <li className="nav-item">
            <Link to="/academics" className="nav-links">Academics</Link>
          </li>
          <li className="nav-item">
            <Link to="/admission" className="nav-links">Admission</Link>
          </li>
          <li className="nav-item">
            <Link to="/donation" className="nav-links">Donation</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">Contact</Link>
          </li>
        </ul>

        <div className="nav-button">
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
