import React from 'react';
import { FaCalendarAlt, FaCheckCircle, FaUsers, FaChalkboardTeacher, FaRocket, FaEye, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import heroImg from '../../assets/about-us1.png';
import historyImg from '../../assets/about-us2.png';
import mapImg from '../../assets/about-us3.png';
import './About.css';

// Force refresh
const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <div className="about-hero-container">
                <div className="about-hero" style={{ backgroundImage: `url(${heroImg})` }}>
                    <div className="about-hero-overlay">
                        <div className="about-hero-content">
                            <h1 className="about-hero-title">About Our Legacy</h1>
                            <p className="about-hero-subtitle">
                                Serving the community with knowledge, wisdom, and spiritual growth since 1998.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Identity Section - Modified to Split Layout */}
            <div className="about-page-section identity-section">
                <div className="identity-content-split">
                    <div className="identity-text-side">
                        <h4 className="section-label">OUR IDENTITY</h4>
                        <h2 className="section-title">A History of Excellence</h2>
                        <p className="identity-text">
                            Al Burhan is committed to nurturing the next generation of Muslim scholars. We blend traditional Islamic sciences
                            with modern educational standards to develop well-rounded individuals who contribute positively to society.
                            Our curriculum is thoughtfully designed to instill strong spiritual values while equipping students with the
                            knowledge and skills needed to navigate the contemporary world with wisdom, integrity, and purpose.
                        </p>
                    </div>
                    <div className="identity-image-side">
                        <img src={historyImg} alt="Al Burhan History" className="identity-img" />
                        <div className="since-badge">Since 1998</div>
                    </div>
                </div>

                {/* Stats Grid - Kept below as it complements the history */}
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon-box"><FaCalendarAlt /></div>
                        <div className="stat-info">
                            <span className="stat-label">ESTABLISHED</span>
                            <h3 className="stat-value">1998</h3>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon-box"><FaCheckCircle /></div>
                        <div className="stat-info">
                            <span className="stat-label">REGISTRATION NO.</span>
                            <h3 className="stat-value">REG-12345</h3>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon-box"><FaUsers /></div>
                        <div className="stat-info">
                            <span className="stat-label">STUDENTS</span>
                            <h3 className="stat-value">1,200+</h3>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon-box"><FaChalkboardTeacher /></div>
                        <div className="stat-info">
                            <span className="stat-label">TEACHERS</span>
                            <h3 className="stat-value">85+</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="about-page-section mv-section">
                <div className="mv-grid">
                    <div className="mv-card">
                        <div className="mv-icon-box"><FaRocket /></div>
                        <h3 className="mv-title">Our Mission</h3>
                        <p className="mv-desc">
                            To nurture a generation of enlightened individuals who embody Islamic values, academic excellence,
                            and social responsibility. We strive to create an environment where traditional wisdom meets modern understanding.
                        </p>
                    </div>

                    <div className="mv-card">
                        <div className="mv-icon-box"><FaEye /></div>
                        <h3 className="mv-title">Our Vision</h3>
                        <p className="mv-desc">
                            To be a beacon of light in education, recognized globally for producing scholars and professionals
                            who serve humanity with compassion, integrity, and profound knowledge.
                        </p>
                    </div>
                </div>
            </div>

            {/* Get in Touch Section */}
            <div className="about-page-section contact-section">
                <div className="contact-grid">
                    <div className="contact-info-side">
                        <h2 className="section-title text-left">Get in Touch</h2>
                        <p className="contact-subtitle">
                            Visit us or contact us for admissions and general inquiries.
                        </p>

                        <div className="contact-card">
                            <div className="contact-icon-circle"><FaMapMarkerAlt /></div>
                            <div className="contact-details">
                                <h5>Our Campus</h5>
                                <p>123 Islamic Center Road, Green Valley District,<br />City Name, State, 54321</p>
                            </div>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon-circle"><FaPhoneAlt /></div>
                            <div className="contact-details">
                                <h5>Phone & Email</h5>
                                <p>+1 (555) 123-4567<br />info@alburhanmadarsa.edu</p>
                            </div>
                        </div>

                        <button className="whatsapp-btn">
                            <FaWhatsapp className="btn-icon" /> Chat on WhatsApp
                        </button>
                    </div>
                    <div className="contact-map-side">
                        <img src={mapImg} alt="Our Location" className="map-img" />
                    </div>
                </div>
            </div>

            {/* Noble Cause CTA */}
            <div className="noble-cause-section">
                <div className="noble-content overlay-green">
                    <h2 className="noble-title">Join Us in This Noble Cause</h2>
                    <p className="noble-text">
                        Your Sadaqah Jariyah helps shape the future of our Ummah. With your support, we can uphold our
                        educational standards and extend our reach to benefit more students.
                    </p>
                    <button className="donate-btn-large">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default About;
