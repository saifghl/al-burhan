import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo-text.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (click) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [click]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo-link" onClick={closeMobileMenu}>
          <div className="navbar-logo">
            <img src={logo} alt="Al Burhan Logo" className="logo-image" />
          </div>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="navbar-item">
            <NavLink to="/" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Home</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>About us</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/administration" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Administration</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/academics" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Academics</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/admission" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Admission</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/donation" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Donation</NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-links active" : "navbar-links"} onClick={closeMobileMenu}>Contact</NavLink>
          </li>
          <li className="nav-item-mobile">
            <Link to="/login" className="nav-links-mobile" onClick={closeMobileMenu}>Login</Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="nav-button">
          <Link to="/login" className="btn-login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
