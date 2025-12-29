import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCalendarAlt, FaQuoteLeft, FaPhoneAlt, FaClock, FaCheckCircle, FaFileAlt, FaUsers } from 'react-icons/fa';
import profileImg from '../../assets/adm-profile.png';
import './Administration.css';

const Administration = () => {
    return (
        <div className="administration-page">
            <div className="admin-header-section">
                <h1 className="admin-main-title">Leadership & Administration</h1>
                <p className="admin-subtitle">Meet the dedicated leadership guiding our institution toward academic excellence and spiritual growth.</p>
            </div>

            <div className="admin-content-container">
                {/* Left Sidebar - Profile */}
                <div className="admin-sidebar">
                    <div className="profile-card">
                        <div className="profile-img-wrapper">
                            <img src={profileImg} alt="Maulana Muhammad Yusuf" className="profile-img" />
                        </div>
                        <h2 className="profile-name">Maulana Muhammad Yusuf</h2>
                        <p className="profile-role">Mohtamim (Principal)</p>

                        <div className="profile-divider"></div>

                        <div className="profile-details">
                            <div className="detail-item">
                                <div className="detail-icon-circle"><FaGraduationCap /></div>
                                <div className="detail-text">
                                    <span className="detail-label">Qualification</span>
                                    <span className="detail-value">Alim / Mufti / PhD in Islamic Studies</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon-circle"><FaBriefcase /></div>
                                <div className="detail-text">
                                    <span className="detail-label">Experience</span>
                                    <span className="detail-value">25+ Years in Educational Leadership</span>
                                </div>
                            </div>

                            <div className="detail-item">
                                <div className="detail-icon-circle"><FaCalendarAlt /></div>
                                <div className="detail-text">
                                    <span className="detail-label">Tenure Period</span>
                                    <span className="detail-value">Serving since 2010</span>
                                </div>
                            </div>
                        </div>

                        <button className="btn-schedule">
                            <FaCalendarAlt className="btn-icon" /> Schedule Appointment
                        </button>
                    </div>

                    <div className="office-hours-card">
                        <h3>Admin Office Hours</h3>
                        <div className="contact-row">
                            <FaPhoneAlt className="contact-icon" /> <span>+123-456-7890</span>
                        </div>
                        <div className="contact-row">
                            <FaClock className="contact-icon" /> <span>Monday – Saturday: 9:00 AM – 5:00 PM</span>
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className="admin-main-content">
                    <div className="message-section">
                        <div className="quote-icon-large"><FaQuoteLeft /></div>
                        <h2 className="message-heading">Message from Management</h2>
                        <div className="green-decoration-bg"></div> {/* For the top right abstract shape */}

                        <p className="bismillah">In the name of Allah, the Most Gracious, the Most Merciful.</p>

                        <div className="message-body">
                            <p>
                                Welcome to our Madrasa Portal. It is with great humility and responsibility that we serve this institution, dedicated to nurturing the next generation of scholars and ethical leaders. Our mission goes beyond academic instruction; we strive to cultivate an environment where spiritual growth and intellectual curiosity flourish hand in hand.
                            </p>
                            <p>
                                We believe education should shape character, inspire purpose, and prepare students to contribute positively to society. Transparency and open communication are the cornerstones of trust between the administration, parents, and students. This portal reflects our commitment to modernizing administrative processes while holding firmly to our traditional values.
                            </p>
                            <p>
                                We continueously working to enhance our facilities, curriculum, and student support systems to ensure every learner reaches their full potential.
                                We invite you to engage with us, ask questions, and become an active part of our community. Together, we can build a future that honors our heritage and embraces the opportunities of tomorrow.
                            </p>
                        </div>

                        <div className="message-footer">
                            <div className="signature-block">
                                <span className="signature-dash">—</span>
                                <span className="signature-name">Maulana M. Yusuf</span>
                            </div>
                            <div className="signature-role">Mohtamim (Principal)</div>
                            <div className="official-badge">
                                <FaCheckCircle /> Official Message
                            </div>
                        </div>
                    </div>

                    <div className="admin-info-cards">
                        <div className="info-card policy-card">
                            <div className="info-icon-wrapper policy-icon"><FaFileAlt /></div>
                            <div className="info-content">
                                <h3>Institutional Policies</h3>
                                <p>View our code of conduct, academic regulations, and institutional guidelines designed to ensure discipline, fairness, and excellence in education.</p>
                            </div>
                        </div>

                        <div className="info-card board-card">
                            <div className="info-icon-wrapper board-icon"><FaUsers /></div>
                            <div className="info-content">
                                <h3>Board of Directors</h3>
                                <p>Meet our advisory board members who provide strategic guidance and support our mission of quality education and spiritual development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Administration;
