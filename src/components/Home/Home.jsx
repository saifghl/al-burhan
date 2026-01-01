import React from 'react';
import { Link } from 'react-router-dom';
import homeHero from '../../assets/home-hero.png';
import homeAboutImage from '../../assets/home-2.png';
import logoIcon from '../../assets/logo.png';
import { FaBullhorn, FaCalendarAlt, FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="hero-section" style={{ backgroundImage: `url(${homeHero})` }}>
                <div className="hero-overlay">
                    <h1 className="hero-title">Al Burhan Islamic Madarsa</h1>
                    <p className="hero-description">
                        We are committed to providing quality Islamic education, guiding students with strong values, discipline, and a deep understanding of Deen.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/admission" className="btn btn-admission">Admission Now</Link>
                        <Link to="/donation" className="btn btn-donate">Donate Now</Link>
                    </div>
                </div>
            </div>

            <div className="stats-section">
                <div className="stat-item">
                    <h2 className="stat-number">250+</h2>
                    <p className="stat-label">STUDENTS SUPPORTED</p>
                </div>
                <div className="vertical-divider"></div>
                <div className="stat-item">
                    <h2 className="stat-number">15</h2>
                    <p className="stat-label">Years Of Services</p>
                </div>
                <div className="vertical-divider"></div>
                <div className="stat-item">
                    <h2 className="stat-number">500+</h2>
                    <p className="stat-label">Total teacher</p>
                </div>
                <div className="vertical-divider"></div>
                <div className="stat-item">
                    <h2 className="stat-number">100%</h2>
                    <p className="stat-label">TRANSPARENT</p>
                </div>
            </div>

            <div className="about-section">
                <div className="about-content">
                    <h2 className="about-title">About Al Burhan</h2>
                    <p className="about-text">
                        Al Burhan is committed to nurturing the next generation of Muslim scholars. We blend traditional Islamic sciences with modern educational standards to develop well-rounded individuals who contribute positively to society.
                        <br />
                        Our curriculum is thoughtfully designed to instill strong spiritual values while equipping students with the knowledge and skills needed to navigate the contemporary world with wisdom, integrity, and purpose.
                    </p>
                    <Link to="/about" className="about-link">Read Our Full Story &rarr;</Link>
                </div>
                <div className="about-image-container">
                    <img src={homeAboutImage} alt="About Al Burhan" className="about-image" />
                </div>
            </div>

            {/* Our Programs Section */}
            <div className="programs-section">
                <h3 className="section-title">Our Programs</h3>
                <p className="section-subtitle">Comprehensive Islamic education tailored for different age groups and levels of understanding.</p>
                <div className="programs-grid">
                    <div className="program-card">
                        <img src={logoIcon} alt="Program Icon" className="program-icon" />
                        <h4 className="program-name">Hifz-ul-Qur’an</h4>
                        <p className="program-desc">Complete memorization of the Holy Qur'an with proper Tajweed rules and revision.</p>
                    </div>
                    <div className="program-card">
                        <img src={logoIcon} alt="Program Icon" className="program-icon" />
                        <h4 className="program-name">Nazirah</h4>
                        <p className="program-desc">Reading the Qur'an with correct pronunciation, ideal for beginners and children.</p>
                    </div>
                    <div className="program-card">
                        <img src={logoIcon} alt="Program Icon" className="program-icon" />
                        <h4 className="program-name">Islamic Studies</h4>
                        <p className="program-desc">Fiqh, Seerah, Hadith, and Aqeedah classes to build a strong foundation of faith.</p>
                    </div>
                </div>
            </div>

            {/* Latest Announcement Section */}
            <div className="announcement-section">
                <div className="announcement-header">
                    <FaBullhorn className="announcement-icon" />
                    <h3 className="section-title">Latest Announcement</h3>
                </div>
                <div className="announcement-container">
                    <div className="announcement-list">
                        <div className="announcement-item">
                            <span className="ann-date">Oct 24</span>
                            <div className="ann-content">
                                <strong>New Hifz Classes Commencing</strong>
                                <p>Enrollment for the upcoming batch of Hifz students begins next week. Limited seats are available.</p>
                            </div>
                        </div>
                        <div className="announcement-item">
                            <span className="ann-date">Oct 15</span>
                            <div className="ann-content">
                                <strong>Annual Sports Day Results</strong>
                                <p>View the winners and highlights from our Annual Sports Day held at the main campus.</p>
                            </div>
                        </div>
                        <div className="announcement-item">
                            <span className="ann-date">Sep 28</span>
                            <div className="ann-content">
                                <strong>Community Iftar Gathering</strong>
                                <p>We sincerely thank everyone who joined our community Iftar gathering. Event photos are now available.</p>
                            </div>
                        </div>
                    </div>

                    <div className="announcement-feature">
                        <h4>Ramadan Preparation Course</h4>
                        <p>Join our intensive 2-week course designed to help you spiritually prepare for the blessed month of Ramadan.</p>
                        <p className="course-date"><FaCalendarAlt /> Starts: Nov 15</p>
                        <button className="btn-register">Register Now</button>
                    </div>
                </div>
            </div>

            {/* Join Us / Donate Section */}
            <div className="join-us-section">
                <h2 className="join-title">Join Us in This Noble Cause <FaHandHoldingHeart className="join-icon" /></h2>
                <p className="join-text">Your Sadaqah Jariyah helps shape the future of our Ummah. With your support, we can uphold our educational standards and extend our reach to benefit more students.</p>
                <Link to="/donation" className="btn btn-donate-large">Donate Now</Link>
            </div>
        </div>
    );
};

export default Home;
