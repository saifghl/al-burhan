import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ParentAttendance.css';
import './ParentDashboard.css'; // Shared styles
import pProfile from '../../assets/p-profile.png';
import logoText from '../../assets/logo-text.png';
import { FaBell, FaCog, FaCalendarCheck, FaClock, FaExclamationCircle, FaUserCheck, FaChevronLeft, FaChevronRight, FaHome, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaUser, FaSignOutAlt, FaDownload, FaCheckCircle, FaTimesCircle, FaNotesMedical, FaMoon, FaSun, FaCloudSun, FaCloudMoon } from 'react-icons/fa';
import LogoutModal from './LogoutModal';

const ParentAttendance = () => {
    const navigate = useNavigate();
    const [showLogout, setShowLogout] = useState(false);

    const handleLogout = () => {
        navigate('/login');
    };
    // Mock Calendar Data for October 2023
    // 1st Oct 2023 was Sunday
    const calendarDays = [
        { day: 1, status: 'present' }, { day: 2, status: 'present' }, { day: 3, status: 'present' }, { day: 4, status: 'present' }, { day: 5, status: 'present' },
        { day: 6, status: 'weekend' }, { day: 7, status: 'weekend' },
        { day: 8, status: 'present' }, { day: 9, status: 'present' }, { day: 10, status: 'present' }, { day: 11, status: 'present' }, { day: 12, status: 'absent' },
        { day: 13, status: 'weekend' }, { day: 14, status: 'weekend' },
        { day: 15, status: 'leave' }, { day: 16, status: 'present' }, { day: 17, status: 'present' }, { day: 18, status: 'present' }, { day: 19, status: 'present' },
        { day: 20, status: 'weekend' }, { day: 21, status: 'weekend' },
        { day: 22, status: 'absent' }, { day: 23, status: 'present' }, { day: 24, status: 'present' }, { day: 25, status: 'present' }, { day: 26, status: 'present' },
        { day: 27, status: 'weekend' }, { day: 28, status: 'weekend' },
        { day: 29, status: 'present' }, { day: 30, status: 'present' }, { day: 31, status: 'present' }
    ];

    return (
        <div className="parent-attendance-page">
            {/* Header - Reused */}
            <header className="pd-header">
                <div className="pd-logo">
                    <img src={logoText} alt="Al Burhan" className="logo-img" />
                </div>
                <div className="pd-header-actions">
                    <Link to="/parent-dashboard/notifications" className="icon-btn"><FaBell /></Link>
                    <Link to="/parent-dashboard/settings" className="icon-btn"><FaCog /></Link>
                    <button className="icon-btn" onClick={() => setShowLogout(true)}><FaSignOutAlt /></button>
                    <div className="header-profile">
                        <img src={pProfile} alt="Profile" />
                    </div>
                </div>
            </header>

            <div className="pa-container">
                {/* Page Title Row */}
                <div className="pa-title-row">
                    <div>
                        <h1>Attendance Record</h1>
                        <div className="student-badge-row">
                            <span className="class-badge">Class 5-B</span>
                            <span className="student-name">Student: Ahmed Ali</span>
                        </div>
                    </div>
                    <button className="download-btn"><FaDownload /> Download Report</button>
                </div>

                {/* Tab Switcher */}
                <div className="pa-tabs">
                    <button className="pa-tab active">
                        <FaCheckCircle /> Class Attendance
                    </button>
                    <button className="pa-tab inactive">
                        <FaMoon /> Namaz Attendance
                    </button>
                </div>

                {/* Attendance Summary Cards */}
                <div className="pa-stats-grid">
                    <div className="pa-stat-card">
                        <div className="psc-icon green">
                            <FaCheckCircle />
                        </div>
                        <div className="psc-content">
                            <h3>Present Days</h3>
                            <div className="psc-val">22</div>
                            <span className="psc-sub green-text">92% Attendance rate</span>
                        </div>
                    </div>
                    <div className="pa-stat-card">
                        <div className="psc-icon red">
                            <FaTimesCircle />
                        </div>
                        <div className="psc-content">
                            <h3>Absent Days</h3>
                            <div className="psc-val">2</div>
                            <span className="psc-sub gray-text">Last absent: Oct 12</span>
                        </div>
                    </div>
                    <div className="pa-stat-card">
                        <div className="psc-icon yellow">
                            <FaNotesMedical />
                        </div>
                        <div className="psc-content">
                            <h3>Leaves Taken</h3>
                            <div className="psc-val">1</div>
                            <span className="psc-sub gray-text">Medical Leave</span>
                        </div>
                    </div>
                </div>

                {/* Calendar View */}
                <div className="calendar-section">
                    <div className="calendar-header">
                        <h2>October 2023</h2>
                        <div className="calendar-nav">
                            <button><FaChevronLeft /></button>
                            <button><FaChevronRight /></button>
                        </div>
                    </div>

                    <div className="calendar-legend">
                        <span className="legend-item"><span className="dot green"></span> Present</span>
                        <span className="legend-item"><span className="dot red"></span> Absent</span>
                        <span className="legend-item"><span className="dot yellow"></span> Leave</span>
                        <span className="legend-item"><span className="dot gray"></span> Holiday/Weekend</span>
                    </div>

                    <div className="calendar-grid">
                        <div className="day-header">Sun</div>
                        <div className="day-header">Mon</div>
                        <div className="day-header">Tue</div>
                        <div className="day-header">Wed</div>
                        <div className="day-header">Thu</div>
                        <div className="day-header">Fri</div>
                        <div className="day-header">Sat</div>

                        {/* Empty slots for previous month if needed, none for Oct 2023 starting on Sun */}

                        {calendarDays.map((d, index) => (
                            <div key={index} className={`calendar - day ${d.status} `}>
                                {d.day}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Namaz Attendance Section */}
                <div className="namaz-section-header">
                    <h4>Namaz Attendance View</h4>
                </div>

                <div className="namaz-grid-layout">
                    {/* Daily Log */}
                    <div className="namaz-log-card">
                        <div className="card-header-row">
                            <h3>Daily Prayer Log</h3>
                            <span>Today, Oct 31</span>
                        </div>
                        <div className="prayer-list">
                            <div className="prayer-item">
                                <div className="pi-icon mint"><FaCloudSun /></div>
                                <div className="pi-info">
                                    <strong>Fajr</strong>
                                    <span>05:45 AM</span>
                                </div>
                                <span className="pi-badge success"><FaCheckCircle /> Performed</span>
                            </div>
                            <div className="prayer-item">
                                <div className="pi-icon orange"><FaSun /></div>
                                <div className="pi-info">
                                    <strong>Dhuhr</strong>
                                    <span>01:30 PM</span>
                                </div>
                                <span className="pi-badge success"><FaCheckCircle /> Performed</span>
                            </div>
                            <div className="prayer-item">
                                <div className="pi-icon orange"><FaSun /></div>
                                <div className="pi-info">
                                    <strong>Asr</strong>
                                    <span>04:45 PM</span>
                                </div>
                                <span className="pi-badge missed"><FaTimesCircle /> Missed</span>
                            </div>
                            <div className="prayer-item">
                                <div className="pi-icon blue"><FaCloudMoon /></div>
                                <div className="pi-info">
                                    <strong>Maghrib</strong>
                                    <span>06:15 PM</span>
                                </div>
                                <span className="pi-badge success"><FaCheckCircle /> Performed</span>
                            </div>
                            <div className="prayer-item">
                                <div className="pi-icon indigo"><FaMoon /></div>
                                <div className="pi-info">
                                    <strong>Isha</strong>
                                    <span>08:00 PM</span>
                                </div>
                                <span className="pi-badge upcoming">Upcoming</span>
                            </div>
                        </div>
                    </div>

                    {/* Consistency Chart */}
                    <div className="consistency-card">
                        <h3>Weekly Prayer Consistency</h3>
                        <p>Completion rate for the last 7 days</p>
                        <div className="chart-container">
                            <div className="circular-chart">
                                <div className="inner-circle">
                                    <strong>65%</strong>
                                </div>
                            </div>
                        </div>
                        <div className="chart-days-row">
                            <span>Mon</span> <span>Tue</span> <span>Wed</span> <span>Thu</span> <span>Fri</span> <span>Sat</span> <span className="active-day">Today</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className="pd-bottom-nav">
                <Link to="/parent-dashboard" className="nav-item">
                    <FaHome />
                    <span>Home</span>
                </Link>
                <Link to="/parent-dashboard/progress" className="nav-item">
                    <FaChartLine />
                    <span>Progress</span>
                </Link>
                <Link to="/parent-dashboard/attendance" className="nav-item active">
                    <FaCalendarAlt />
                    <span>Attend</span>
                </Link>
                <Link to="/parent-dashboard/fees" className="nav-item">
                    <FaMoneyBillWave />
                    <span>Fees</span>
                </Link>
                <Link to="/parent-dashboard/profile" className="nav-item">
                    <FaUser />
                    <span>Profile</span>
                </Link>
            </div>
            {showLogout && <LogoutModal onClose={() => setShowLogout(false)} onLogout={handleLogout} />}
        </div>
    );
};

export default ParentAttendance;
