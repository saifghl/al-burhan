import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentProgress.css';
import './ParentDashboard.css'; // Shared styles
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaDownload, FaStar, FaTrophy, FaChartLine, FaHome, FaCalendarAlt, FaMoneyBillWave, FaUser, FaSignOutAlt } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentProgress = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <div className="parent-progress-page">
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
                {/* Page Title Row */}
                <div className="pp-title-row">
                    <div>
                        <h1>My Child's Overview</h1>
                        <p>Track academic progress and extracurricular milestones for Spring 2024.</p>
                    </div>
                    <button className="download-btn"><FaDownload /> Download Report</button>
                </div>

                {/* Top Stats Cards */}
                <div className="pp-stats-grid">
                    <div className="pp-stat-card mint">
                        <div className="stat-icon-dot"></div>
                        <span className="stat-label">Overall Average</span>
                        <div className="stat-value">88%</div>
                        <div className="stat-trend success">+2% from last month</div>
                    </div>
                    <div className="pp-stat-card blue">
                        <div className="stat-icon-dot"></div>
                        <span className="stat-label">Attendance</span>
                        <div className="stat-value">95%</div>
                        <div className="stat-sub">19/20 Days Present</div>
                    </div>
                    <div className="pp-stat-card yellow">
                        <div className="stat-icon-dot"></div>
                        <span className="stat-label">Class Ranking</span>
                        <div className="stat-value">5th</div>
                        <div className="stat-sub">Top 10% of class</div>
                    </div>
                </div>

                <div className="pp-main-grid">
                    {/* Left Column: Subjects */}
                    <div className="pp-left-col">
                        <div className="section-header">
                            <h2>Subject Performance</h2>
                            <a href="#" className="view-link">View Past Months</a>
                        </div>

                        <div className="subject-cards-grid">
                            {/* Quranic Studies */}
                            <div className="subject-card">
                                <div className="sc-top">
                                    <div className="sc-title">
                                        <div className="dot mint"></div>
                                        <h3>Quranic Studies</h3>
                                    </div>
                                    <span className="grade-badge mint">A+</span>
                                </div>
                                <div className="sc-score">
                                    <strong>95</strong><span>/100</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-fill mint-fill" style={{ width: '95%' }}></div>
                                </div>
                                <p className="sc-feedback">Excellent recitation. Memorization of Surah Al-Mulk is perfect. Keep it up!</p>
                            </div>

                            {/* Arabic Language */}
                            <div className="subject-card">
                                <div className="sc-top">
                                    <div className="sc-title">
                                        <div className="dot mint"></div>
                                        <h3>Arabic Language</h3>
                                    </div>
                                    <span className="grade-badge mint">B+</span>
                                </div>
                                <div className="sc-score">
                                    <strong>78</strong><span>/100</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-fill yellow-fill" style={{ width: '78%' }}></div>
                                </div>
                                <p className="sc-feedback">Good effort. Needs more practice in grammar and sentence structure.</p>
                            </div>

                            {/* Quranic Studies (Duplicate/Placeholder) */}
                            <div className="subject-card">
                                <div className="sc-top">
                                    <div className="sc-title">
                                        <div className="dot mint"></div>
                                        <h3>Quranic Studies</h3>
                                    </div>
                                    <span className="grade-badge mint">A</span>
                                </div>
                                <div className="sc-score">
                                    <strong>88</strong><span>/100</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-fill mint-fill" style={{ width: '88%' }}></div>
                                </div>
                                <p className="sc-feedback">Strong understanding of algebraic concepts. Late work was exemplary.</p>
                            </div>

                            {/* Science */}
                            <div className="subject-card">
                                <div className="sc-top">
                                    <div className="sc-title">
                                        <div className="dot mint"></div>
                                        <h3>Science</h3>
                                    </div>
                                    <span className="grade-badge mint">A-</span>
                                </div>
                                <div className="sc-score">
                                    <strong>82</strong><span>/100</span>
                                </div>
                                <div className="progress-track">
                                    <div className="progress-fill mint-fill" style={{ width: '82%' }}></div>
                                </div>
                                <p className="sc-feedback">Creative project submission was improved. Lab work requires slight attention.</p>
                            </div>
                        </div>

                        <div className="section-header mt-4">
                            <h2>Certificates & Awards</h2>
                            <a href="#" className="view-link">View All</a>
                        </div>
                        <div className="awards-grid">
                            <div className="award-card">
                                <h3>Excellence in Biology</h3>
                                <p>Fall 2023</p>
                                <a href="#">Download PDF</a>
                            </div>
                            <div className="award-card">
                                <h3>Juz Amma Completion</h3>
                                <p>Winter 2023</p>
                                <a href="#">Download PDF</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="pp-right-col">
                        <div className="mini-stats-row">
                            <div className="mini-stat">
                                <span className="ms-label">Completed</span>
                                <div className="ms-val">
                                    <strong>12</strong>
                                    <span className="badge-green">+2 this week</span>
                                </div>
                            </div>
                            <div className="mini-stat">
                                <span className="ms-label">Trophies</span>
                                <div className="ms-val">
                                    <strong>5</strong>
                                    <span className="sub">Lifetime</span>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-section">
                            <h3>Active Competitions</h3>
                            <div className="competition-card">
                                <div className="comp-header">
                                    <h4>Annual Quran Recitation</h4>
                                    <span className="badge-green-solid">Registered</span>
                                </div>
                                <div className="comp-meta">
                                    <span>Round 1</span>
                                    <span>2 days left</span>
                                </div>
                                <div className="progress-track sm">
                                    <div className="progress-fill orange-fill" style={{ width: '30%' }}></div>
                                </div>
                            </div>
                            <div className="competition-card">
                                <div className="comp-header">
                                    <h4>District Spelling Bee</h4>
                                    <span className="badge-orange-solid">Finals</span>
                                </div>
                                <div className="comp-meta">
                                    <span>Final Round</span>
                                    <span>Tomorrow</span>
                                </div>
                            </div>
                            <button className="browse-btn">Browse All Competitions</button>
                        </div>

                        <div className="sidebar-section">
                            <h3>Upcoming & Recent</h3>
                            <div className="timeline-list">
                                <div className="timeline-item">
                                    <div className="dot mint"></div>
                                    <div className="tl-content">
                                        <h4>Quran Circle</h4>
                                        <p>Mosque Hall A • Brother Ahmed</p>
                                    </div>
                                    <span className="tl-time success">Today, 4:00 PM</span>
                                </div>
                                <div className="timeline-item">
                                    <div className="dot blue"></div>
                                    <div className="tl-content">
                                        <h4>Science Fair Prep</h4>
                                        <p>Lab 3 • Ms. Robinson</p>
                                    </div>
                                    <span className="tl-time">Tom, 2:00 PM</span>
                                </div>
                                <div className="timeline-item">
                                    <div className="dot purple"></div>
                                    <div className="tl-content">
                                        <h4>Math Olympiad</h4>
                                        <span className="passed-badge">Passed Qualifier</span>
                                    </div>
                                    <span className="tl-time">Completed</span>
                                </div>
                                <div className="view-history-link">
                                    <a href="#">View All History</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav - Duplicated from Dashboard for functionality */}
            <div className="pd-bottom-nav">
                <Link to="/login/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/login/parent-dashboard/progress" className="nav-item active">
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
                <Link to="/login/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentProgress;
