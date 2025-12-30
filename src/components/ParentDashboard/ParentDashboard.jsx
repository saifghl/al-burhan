import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentDashboard.css';
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaChartLine, FaCalendarAlt, FaStar, FaDownload, FaHome, FaMoneyBillWave, FaUser, FaSignOutAlt, FaMosque, FaCheck, FaBullhorn, FaChalkboardTeacher, FaBook } from 'react-icons/fa';
import { MdOutlineCleaningServices } from "react-icons/md";
import LogoutModal from './LogoutModal';

const ParentDashboard = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        // Perform clear auth logic here if needed
        navigate('/login');
    };
    return (
        <div className="parent-dashboard">
            {/* Top Header */}
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



            <div className="pd-container">
                {/* Student Profile Card */}
                <div className="pd-card student-profile-card">
                    <div className="student-info-left">
                        <div className="student-avatar-large">
                            <img src={pProfile} alt="Ahmed Ali" />
                        </div>
                        <div className="student-details">
                            <h2>Ahmed Ali <span className="status-badge">Active</span></h2>
                            <p className="student-meta"><span className="icon">🎓</span> Class 5B <span className="dot">•</span> <span className="icon">🆔</span> Roll #23</p>
                        </div>
                    </div>
                    <div className="student-info-right">
                        <div className="date-display">
                            <h3>12 Oct 2023</h3>
                            <p>27 Rabi' al-Awwal 1445</p>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div className="pd-grid">
                    {/* Attendance */}
                    <div className="pd-card attendance-card">
                        <div className="card-header">
                            <h3><FaCalendarAlt className="card-icon" /> Attendance</h3>
                            <span className="status-text success">Present Today</span>
                        </div>
                        <div className="attendance-content">
                            <div className="attendance-chart">
                                <div className="circular-progress">
                                    <span className="progress-value">92%</span>
                                </div>
                            </div>
                            <div className="attendance-stats">
                                <div className="stat-row">
                                    <span>Monthly Target</span>
                                    <strong>95%</strong>
                                </div>
                                <div className="stat-row">
                                    <span>Absences</span>
                                    <strong>2 Days</strong>
                                </div>
                            </div>
                        </div>
                        <a href="#calendar" className="card-link">View Calendar</a>
                    </div>

                    {/* Namaz Tracker */}
                    <div className="pd-card namaz-card">
                        <div className="card-header">
                            <h3><FaMosque className="card-icon" /> Namaz Tracker</h3>
                            <span className="status-text success">3/5 Prayers Completed</span>
                        </div>
                        <div className="namaz-status-row">
                            <div className="namaz-item completed">
                                <div className="check-circle"><FaCheck /></div>
                                <span>Fajr</span>
                            </div>
                            <div className="namaz-item completed">
                                <div className="check-circle"><FaCheck /></div>
                                <span>Zuhr</span>
                            </div>
                            <div className="namaz-item completed">
                                <div className="check-circle"><FaCheck /></div>
                                <span>Asr</span>
                            </div>
                            <div className="namaz-item pending">
                                <div className="check-circle"></div>
                                <span>Maghrib</span>
                            </div>
                            <div className="namaz-item future">
                                <div className="check-circle"></div>
                                <span>Isha</span>
                            </div>
                        </div>
                        <div className="consistency-wrapper">
                            <span className="small-label">Weekly Consistency</span>
                            <div className="consistency-bars">
                                <div className="bar filled"></div>
                                <div className="bar filled"></div>
                                <div className="bar filled"></div>
                                <div className="bar filled"></div>
                                <div className="bar filled"></div>
                                <div className="bar empty"></div>
                                <div className="bar empty"></div>
                            </div>
                        </div>
                    </div>

                    {/* Homework */}
                    <div className="pd-card homework-card">
                        <div className="card-header">
                            <h3><FaBook className="card-icon" /> Homework</h3>
                        </div>
                        <div className="homework-summary">
                            <div className="hw-box pending-box">
                                <strong>2</strong>
                                <span>Pending</span>
                            </div>
                            <div className="hw-box submitted-box">
                                <strong>5</strong>
                                <span>Submitted</span>
                            </div>
                        </div>
                        <div className="homework-list">
                            <div className="hw-item">
                                <div className="hw-info">
                                    <span className="dot orange"></span>
                                    <div>
                                        <h4>Quranic Studies</h4>
                                        <span className="due-date">Due Tomorrow</span>
                                    </div>
                                </div>
                                <span className="arrow-icon">&rsaquo;</span>
                            </div>
                            <div className="hw-item">
                                <div className="hw-info">
                                    <span className="dot orange"></span>
                                    <div>
                                        <h4>History Essay</h4>
                                        <span className="due-date">Due 14 Oct</span>
                                    </div>
                                </div>
                                <span className="arrow-icon">&rsaquo;</span>
                            </div>
                        </div>
                    </div>

                    {/* Academics */}
                    <div className="pd-card academics-card">
                        <div className="card-header">
                            <h3><FaChartLine className="card-icon" /> Academics</h3>
                            <span className="status-badge gray">Overall: 88%</span>
                        </div>
                        <div className="subjects-list">
                            <div className="subject-item">
                                <div className="subject-header">
                                    <span>Quranic Studies</span>
                                    <span className="grade success">A+</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill success" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                            <div className="subject-item">
                                <div className="subject-header">
                                    <span>English Language</span>
                                    <span className="grade primary">A</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill primary" style={{ width: '85%' }}></div>
                                </div>
                            </div>
                            <div className="subject-item">
                                <div className="subject-header">
                                    <span>Mathematics</span>
                                    <span className="grade warning">B</span>
                                </div>
                                <div className="progress-bar-bg">
                                    <div className="progress-bar-fill warning" style={{ width: '70%' }}></div>
                                </div>
                            </div>
                        </div>
                        <button className="full-report-btn">Full Report Card</button>
                    </div>

                    {/* Notices */}
                    <div className="pd-card notices-card">
                        <div className="card-header">
                            <h3><FaBullhorn className="card-icon" /> Notices</h3>
                        </div>
                        <div className="notices-list">
                            <div className="notice-item">
                                <div className="notice-tag exam">Exam</div>
                                <div className="notice-content">
                                    <div className="notice-top">
                                        <h4>Mid-term Schedule Released</h4>
                                        <span className="time">Yesterday</span>
                                    </div>
                                    <p>The mid-term examinations for classes 5-10 will commence from...</p>
                                </div>
                            </div>
                            <div className="notice-item">
                                <div className="notice-tag holiday">Holiday</div>
                                <div className="notice-content">
                                    <div className="notice-top">
                                        <h4>Upcoming Public Holiday</h4>
                                        <span className="time">2 days ago</span>
                                    </div>
                                    <p>School will remain closed on Friday for...</p>
                                </div>
                            </div>
                        </div>
                        <a href="#notices" className="card-link center">View All Notices</a>
                    </div>
                </div>
            </div>

            {/* Floating Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/login/parent-dashboard" className="nav-item active">
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
                <Link to="/login/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div >
    );
};

export default ParentDashboard;
