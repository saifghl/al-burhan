import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-page">
            {/* Hero Section */}
            <div className="contact-hero">
                <h1 className="contact-hero-title">Get in Touch</h1>
                <p className="contact-hero-subtitle">
                    We are here to answer your questions about admissions, curriculum, and community events.
                    Reach out to us through any of the channels below.
                </p>
            </div>

            {/* Content Container */}
            <div className="contact-container-wrapper">
                <div className="contact-card">
                    {/* Left Side: Information */}
                    <div className="contact-info">
                        <h2 className="info-title">Contact Information</h2>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <div className="info-details">
                                <strong>Email:</strong>
                                <p>contact@AlBurhan.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaPhoneAlt className="info-icon" />
                            <div className="info-details">
                                <strong>Phone:</strong>
                                <p>+91 123456789 | +91 1234567890</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <div className="info-details">
                                <strong>Location:</strong>
                                <p>123 Islamic Center Rd, Green Valley, SV 90210</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <FaClock className="info-icon" />
                            <div className="info-details">
                                <strong>Office Hours:</strong>
                                <p>Mon - Fri: 09:00 AM - 05:00 PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-section">
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" placeholder="you@example.com" />
                            </div>

                            <div className="form-group">
                                <label>Phone</label>
                                <input type="tel" placeholder="+91 XXXXX XXXXX" />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Type your message here..."></textarea>
                            </div>

                            <button type="submit" className="btn-send">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
