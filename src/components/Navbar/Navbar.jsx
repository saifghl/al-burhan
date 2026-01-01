import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>About us</Link>
          </li>
          <li className="nav-item">
            <Link to="/administration" className="nav-links" onClick={closeMobileMenu}>Administration</Link>
          </li>
          <li className="nav-item">
            <Link to="/academics" className="nav-links" onClick={closeMobileMenu}>Academics</Link>
          </li>
          <li className="nav-item">
            <Link to="/admission" className="nav-links" onClick={closeMobileMenu}>Admission</Link>
          </li>
          <li className="nav-item">
            <Link to="/donation" className="nav-links" onClick={closeMobileMenu}>Donation</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>Contact</Link>
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
