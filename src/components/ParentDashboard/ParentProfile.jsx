import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentProfile.css';
import './ParentDashboard.css'; // Shared styles for header/nav
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaDownload, FaCheckCircle, FaStar, FaClipboardCheck, FaCommentDots, FaEnvelope, FaHome, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaUser, FaBookOpen, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentProfile = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <div className="parent-profile-page">
            {/* Header - Reused */}
            <header className="pd-header">
                <div className="pd-logo">
                    <img src={logoText} alt="Al Burhan" className="logo-img" />
                </div>
                <div className="pd-header-actions">
                    <Link to="/login/parent-dashboard/notifications" className="icon-btn"><FaBell /></Link>
                    <Link to="/login/parent-dashboard/settings" className="icon-btn"><FaCog /></Link>
                    <button className="icon-btn" onClick={() => setShowLogout(true)}><FaSignOutAlt /></button>
                    <div className="header-profile">
                        <img src={pProfile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="pp-container">
                {/* Profile Hero Card */}
                <div className="profile-hero-card">
                    <div className="profile-main-info">
                        <div className="profile-avatar-large">
                            {/* Placeholder for avatar if pProfile is small, but using pProfile for now */}
                            <img src={pProfile} alt="Ahmed Ali" />
                            <div className="online-indicator"></div>
                        </div>
                        <div>
                            <h1>Ahmed Ali</h1>
                            <p className="profile-grade">Grade 5 - Class A</p>
                            <span className="status-badge-capsule">Excellent Standing</span>
                        </div>
                    </div>

                    <div className="profile-hero-stats">
                        <div className="hero-stat">
                            <span className="label">Attendance</span>
                            <div className="value green">95%</div>
                        </div>
                        <div className="hero-stat">
                            <span className="label">Overall Grade</span>
                            <div className="value">A-</div>
                        </div>
                    </div>
                </div>

                <div className="profile-content-header">
                    <h2>Academic & Religious Progress</h2>
                    <button className="text-icon-btn"><FaDownload /> Download Report</button>
                </div>

                {/* Progress Stats Area */}
                <div className="progress-section">
                    {/* Quran Studies Main Card */}
                    <div className="quran-progress-card">
                        <div className="qp-header">
                            <div className="qp-icon-box">
                                <FaBookOpen />
                            </div>
                            <div>
                                <h3>Qur'an Studies</h3>
                                <p>Nazirah & Hifz</p>
                            </div>
                            <div className="qp-progress-text">
                                <span className="green-text">75%</span>
                                <span className="gray-text">Nazirah Completed</span>
                            </div>
                        </div>
                        <div className="qp-progress-bar-bg">
                            <div className="qp-progress-fill" style={{ width: '75%' }}></div>
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="prog-stats-row">
                        <div className="prog-stat-card">
                            <div className="ps-icon green"><FaBookOpen /></div>
                            <div className="ps-content">
                                <span className="label">Hifz Progress</span>
                                <h4>Juz 3 Completed</h4>
                            </div>
                        </div>
                        <div className="prog-stat-card">
                            <div className="ps-icon yellow"><FaStar /></div>
                            <div className="ps-content">
                                <span className="label">Tajweed Level</span>
                                <h4>Intermediate</h4>
                            </div>
                        </div>
                        <div className="prog-stat-card">
                            <div className="ps-icon blue"><FaClipboardCheck /></div>
                            <div className="ps-content">
                                <span className="label">Recent Test</span>
                                <h4>92/100 (A)</h4>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Split Layout */}
                <div className="profile-split-layout">
                    {/* Left Column */}
                    <div className="profile-left-col">
                        <div className="section-label">
                            <FaCommentDots /> Teacher Remarks
                        </div>
                        <div className="remarks-box">
                            <p>
                                Ahmed has shown remarkable improvement in his Makhraj this month. He is reciting Surah Al-Mulk with great confidence. I encourage him to practice the rules of Nun Sakinah at home.
                            </p>
                        </div>

                        <div className="section-label mt-4">
                            <FaChartLine /> Syllabus Overview
                        </div>
                        <div className="syllabus-timeline">
                            <div className="timeline-node completed">
                                <div className="node-icon"><FaCheckCircle /></div>
                                <div className="node-content">
                                    <h4>Surah Al-Mulk (Recitation & Hifz)</h4>
                                    <span>Completed on Oct 15th</span>
                                </div>
                            </div>
                            <div className="timeline-node current">
                                <div className="node-icon circle-dot"></div>
                                <div className="node-content">
                                    <h4>Surah Al-Qalam (Current)</h4>
                                    <span>Ayah 1-15 • Due: Oct 25th</span>
                                </div>
                            </div>
                            <div className="timeline-node upcoming">
                                <div className="node-icon empty-circle"></div>
                                <div className="node-content">
                                    <h4>Surah Al-Haqqah</h4>
                                    <span>Upcoming</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="profile-right-col">
                        <div className="homework-widget">
                            <div className="widget-header">
                                <h3>Homework History</h3>
                                <a href="#">View All</a>
                            </div>
                            <div className="hw-history-list">
                                <div className="hw-hist-item">
                                    <div className="checkbox-icon checked"><FaCheckCircle /></div>
                                    <div>
                                        <h4>Recite Page 4</h4>
                                        <span className="hw-date">Checked Oct 18</span>
                                    </div>
                                </div>
                                <div className="hw-hist-item">
                                    <div className="checkbox-icon empty"></div>
                                    <div>
                                        <h4>Memorize Ayah 10-15</h4>
                                        <span className="hw-status pending">Pending • Due Tomorrow</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="message-teacher-btn">
                            <FaEnvelope /> Message Teacher
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/login/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/login/parent-dashboard/progress" className="nav-item">
                    <FaChartLine />
                    <span>Progress</span>
                </Link>
                <Link to="/login/parent-dashboard/attendance" className="nav-item">
                    <FaCalendarAlt />
                    <span>Attend</span>
                </Link>
                <Link to="/login/parent-dashboard/fees" className="nav-item">
                    <FaMoneyBillWave />
                    <span>Fees</span>
                </Link>
                <Link to="/login/parent-dashboard/profile" className="nav-item active">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentProfile;
