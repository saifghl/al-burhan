import React, { useState } from 'react';
import './Home.css';
import profilePic from '../../assets/Picture16.png';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Helper for SVGs to keep code clean
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

    // SVG Paths matching the design
    const icons = {
        dashboard: "M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z", // Grid/Home
        students: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z", // People
        classes: "M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z", // Graduation Cap
        exams: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z", // File/Syllabus
        reports: "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zm0 2l5 5h-5V5zm6 16H5V5h6v5h5v11z", // Document
        curriculum: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z", // Book
        settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0.43-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z", // Gear

        mosque: "M21 21V11.5a.5.5 0 0 0-.5-.5h-2.164C17.653 6.643 15.11 4 12 4s-5.653 2.643-6.336 7H3.5a.5.5 0 0 0-.5.5V21h6v-4h6v4h6zM12 6c2.093 0 3.868 1.637 4.316 4H7.684C8.132 7.637 9.907 6 12 6z",
        bell: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z",

        // Header Specific
        briefcase: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z",
        calendar: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z",

        // Quick Actions
        checkCircle: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z", // Filled Check
        assignTask: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 12h-4v4h-2v-4H8v-2h4v-4h2v4h4v2z",
        submitReport: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z", // Using generic file for now, can refine if needed

        menu: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
        info: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z",
        check: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" // Simple check for notifications
    };

    return (
        <div className="dashboard-container">
            <button className="mobile-toggle" onClick={toggleSidebar}>
                <Icon path={icons.menu} />
            </button>

            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-logo">
                    <Icon path={icons.mosque} className="menu-icon logo-icon" />
                    <span className="logo-text">Al Burhan</span>
                </div>

                <nav className="sidebar-menu">
                    <a href="#" className="menu-item active">
                        <Icon path={icons.dashboard} /> Home
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.students} /> Students
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.classes} /> Classes
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.exams} /> Exams
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.reports} /> Reports
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.curriculum} /> Curriculum
                    </a>
                    <a href="#" className="menu-item">
                        <Icon path={icons.settings} /> Settings
                    </a>
                </nav>
            </aside>

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
                        <button className="icon-btn">
                            <Icon path={icons.settings} />
                        </button>
                        <img src={profilePic} alt="Profile" className="user-avatar" style={{ width: '32px', height: '32px' }} />
                    </div>
                </header>

                <section className="quick-actions">
                    <h2 className="section-title"><span className="bolt-icon">⚡</span> Quick Actions</h2>
                    <div className="quick-actions-grid">
                        <div className="action-card">
                            <div className="action-icon-circle bg-green-light">
                                <Icon path={icons.checkCircle} />
                            </div>
                            <span>Mark Attendance</span>
                        </div>
                        <div className="action-card">
                            <div className="action-icon-circle bg-blue-light">
                                <Icon path={icons.assignTask} />
                            </div>
                            <span>Assign Task</span>
                        </div>
                        <div className="action-card">
                            <div className="action-icon-circle bg-orange-light">
                                <Icon path={icons.submitReport} />
                            </div>
                            <span>Submit draft Reports</span>
                        </div>
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
