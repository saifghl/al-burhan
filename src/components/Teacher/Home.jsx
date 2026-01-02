import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Sidebar from './Sidebar'; // Import the shared Sidebar component
import { FaCheckCircle, FaPlus, FaFileAlt } from 'react-icons/fa'; // Import icons for quick actions
import './Home.css';
import profilePic from '../../assets/Picture16.png';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Helper for SVGs to keep code clean (only for local icons if needed, but we used react-icons for quick actions)
    const Icon = ({ path, className }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className || "menu-icon"}
            width="24" height="24"
        >
            <path d={path} />
        </svg>
    );

    // SVG Paths matching the design - kept for header/dashboard specific icons
    const icons = {
        menu: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
        bell: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z",
        settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0.43-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z", // Gear
        briefcase: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
        calendar: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z",
        info: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
        check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" // Simple check for notifications
    };

    return (
        <div className="dashboard-container">
            {/* Replaced hardcoded Sidebar with the shared Sidebar component */}
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <button className="mobile-toggle" onClick={toggleSidebar}>
                <Icon path={icons.menu} />
            </button>

            <main className="main-content">
                <header className="dashboard-header">
                    <div className="user-welcome">
                        <img src={profilePic} alt="Profile" className="user-avatar" />
                        <div className="welcome-text">
                            <h1>Assalamu Alaikum, Ustadha Amina</h1>
                            <div className="welcome-subtitle">
                                <span className="green-text">
                                    <Icon path={icons.briefcase} className="small-icon" /> Head of Tajweed Dept
                                </span>
                                <span className="separator">|</span>
                                <span className="date-text">
                                    <Icon path={icons.calendar} className="small-icon" /> 12 Rajab 1445 AH
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="header-actions">
                        <button className="icon-btn">
                            <Icon path={icons.bell} />
                            <span className="notification-badge"></span>
                        </button>
                        <Link to="/teacher-edit-profile" className="icon-btn">
                            <Icon path={icons.settings} />
                        </Link>
                        <img src={profilePic} alt="Profile" className="user-avatar" style={{ width: '32px', height: '32px' }} />
                    </div>
                </header>

                <section className="quick-actions">
                    <h2 className="section-title"><span className="bolt-icon">⚡</span> Quick Actions</h2>
                    <div className="quick-actions-grid">
                        <Link to="/namaz-attendance" className="action-card">
                            <div className="action-icon-circle bg-green-light">
                                <FaCheckCircle />
                            </div>
                            <span>Mark Attendance</span>
                        </Link>
                        <Link to="/create-assignment" className="action-card">
                            <div className="action-icon-circle bg-blue-light">
                                <FaPlus />
                            </div>
                            <span>Assign Task</span>
                        </Link>
                        <Link to="/draft-reports" className="action-card">
                            <div className="action-icon-circle bg-orange-light">
                                <FaFileAlt />
                            </div>
                            <span>Submit draft Reports</span>
                        </Link>
                    </div>
                </section>

                <div className="dashboard-grid">
                    <div className="left-column">
                        <div className="card schedule-card">
                            <div className="card-header">
                                <span className="card-title">Today's Schedule</span>
                                <span className="date-text">Wednesday, 24 Jan</span>
                            </div>

                            <div className="schedule-item active">
                                <div className="time-slot">
                                    <span>08:00</span>
                                    <span style={{ fontSize: '0.8rem' }}>AM</span>
                                </div>
                                <div className="class-info">
                                    <div className="class-name">Hifz Group A</div>
                                    <div className="class-details">
                                        <span>📍 Room 101</span>
                                        <span>👥 15 Students</span>
                                    </div>
                                </div>
                                <button className="enter-class-btn">Enter Class</button>
                            </div>

                            <div className="schedule-item">
                                <div className="time-slot">
                                    <span>10:00</span>
                                    <span style={{ fontSize: '0.8rem' }}>AM</span>
                                </div>
                                <div className="class-info">
                                    <div className="class-name">Arabic Level 2 (Grammar)</div>
                                    <div className="class-details">
                                        <span>📍 Room 104</span>
                                        <span>👥 22 Students</span>
                                    </div>
                                </div>
                                <div className="menu-dots">:</div>
                            </div>

                            <div className="schedule-item">
                                <div className="time-slot">
                                    <span>01:30</span>
                                    <span style={{ fontSize: '0.8rem' }}>PM</span>
                                </div>
                                <div className="class-info">
                                    <div className="class-name">Tajweed Advanced</div>
                                    <div className="class-details">
                                        <span>📍 Main Hall</span>
                                        <span>👥 30 Students</span>
                                    </div>
                                </div>
                                <div className="menu-dots">:</div>
                            </div>
                        </div>

                        <div className="assigned-subjects">
                            <h2 className="section-title">Assigned Subjects</h2>
                            <div className="subjects-grid">
                                <div className="subject-card">
                                    <div className="subject-icon bg-green-light">📖</div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>Quran Memorization</div>
                                        <div style={{ fontSize: '0.8rem', color: 'gray' }}>Grades 3-5</div>
                                    </div>
                                </div>
                                <div className="subject-card">
                                    <div className="subject-icon bg-orange-light">Aa</div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>Arabic Grammar</div>
                                        <div style={{ fontSize: '0.8rem', color: 'gray' }}>Level 2</div>
                                    </div>
                                </div>
                                <div className="subject-card">
                                    <div className="subject-icon bg-blue-light">🔊</div>
                                    <div>
                                        <div style={{ fontWeight: 600 }}>Tajweed Basics</div>
                                        <div style={{ fontSize: '0.8rem', color: 'gray' }}>Grade 1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right-column">
                        <div className="card">
                            <div className="card-header">
                                <span className="card-title">Attendance Today</span>
                            </div>
                            <div className="attendance-content">
                                <div className="circle-chart">
                                    <div className="circle-inner">92%</div>
                                </div>
                                <div className="attendance-legend">
                                    <div className="legend-item"><span className="dot green"></span> Present <b>48</b></div>
                                    <div className="legend-item"><span className="dot red"></span> Absent <b>4</b></div>
                                    <div className="legend-item"><span className="dot yellow"></span> Late <b>2</b></div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <span className="card-title">Pending Tasks</span>
                                <a href="#" className="view-all">View All</a>
                            </div>
                            <div className="task-list">
                                <div className="task-item">
                                    <div className="task-title">Review Hifz Exam Papers</div>
                                    <div className="task-due">Due Today</div>
                                </div>
                                <div className="task-item">
                                    <div className="task-title">Submit Monthly Progress</div>
                                    <div className="task-due" style={{ color: 'gray' }}>Due Tomorrow</div>
                                </div>
                                <div className="task-item">
                                    <div className="task-title">Prepare Tajweed Slides</div>
                                    <div className="task-due" style={{ color: 'gray' }}>Fri, 26 Jan</div>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <span className="card-title">Notifications</span>
                            </div>
                            <div className="notification-list">
                                <div className="notification-item">
                                    <div className="notif-icon-circle bg-blue-light">
                                        <Icon path={icons.info} />
                                    </div>
                                    <div className="notif-content">
                                        <p>Staff meeting rescheduled to 4 PM.</p>
                                        <div className="notif-time">2 hours ago</div>
                                    </div>
                                </div>
                                <div className="notification-item">
                                    <div className="notif-icon-circle green">
                                        <Icon path={icons.check} />
                                    </div>
                                    <div className="notif-content">
                                        <p>Exam schedule approved by Admin.</p>
                                        <div className="notif-time">Yesterday</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
