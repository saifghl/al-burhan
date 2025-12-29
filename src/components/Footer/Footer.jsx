import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../assets/logo-text.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src={logo} alt="Al Burhan" className="footer-logo" />
                    <p className="footer-description">
                        We are committed to providing quality Islamic education, guiding students with strong values, discipline, and a deep understanding of Deen.
                    </p>
                </div>

                <div className="footer-section links-section">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/administration">Administration</Link></li>
                        <li><Link to="/academics">Academics</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/donation">Donation</Link></li>
                        <li><Link to="/students">Students</Link></li>
                    </ul>
                </div>

                <div className="footer-section legal-section">
                    <h3 className="footer-heading">Legal</h3>
                    <ul className="footer-links">
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                        <li><Link to="/cookies-policy">Cookies Policy</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>123, Logistics way, Sort Transport City, TC- 92001</span>
                        </li>
                        <li>
                            <FaPhoneAlt className="contact-icon" />
                            <span>+1 00000 123-4567</span>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <span>travel@transportation.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Proudly Powered by Prenaya . All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
