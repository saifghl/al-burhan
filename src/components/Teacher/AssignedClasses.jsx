import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AssignedClasses.css';
import { FaMosque, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const AssignedClasses = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // SVG Icons
    const Icons = {
        Logo: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="logo-icon">
                <path d="M21 21V11.5a.5.5 0 0 0-.5-.5h-2.164C17.653 6.643 15.11 4 12 4s-5.653 2.643-6.336 7H3.5a.5.5 0 0 0-.5.5V21h6v-4h6v4h6zM12 6c2.093 0 3.868 1.637 4.316 4H7.684C8.132 7.637 9.907 6 12 6z" />
            </svg>
        ),
        Home: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
        ),
        Students: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        ),
        Classes: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
        ),
        Exams: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM7 7h10V5H7v2zm0 4h10v-2H7v2zm0 4h7v-2H7v2z" />
            </svg>
        ),
        Reports: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M13 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V9l-7-7zM6 20V4h6v5h5v11H6z" />
            </svg>
        ),
        Curriculum: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
        ),
        Settings: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" className="menu-icon">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.57 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.08-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
        ),
        Bell: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
            </svg>
        ),
        Menu: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
        ),
        Add: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
        ),
        Subject: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
            </svg>
        ),
        Calendar: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7v-5z" />
            </svg>
        ),
        Users: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </svg>
        ),
        Check: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
        ),
        Eye: () => (
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
        )
    };

    const classesData = [
        {
            id: 1,
            title: "Hifz Class - Year 1",
            batch: "Section A • Batch 2024",
            subject: "Quran Memorization",
            schedule: "Mon - Fri • 08:00 AM - 11:00 AM",
            students: "24 Enrolled",
            status: "Active"
        },
        {
            id: 2,
            title: "Alim Course - Year 2",
            batch: "Section B • Batch 2023",
            subject: "Fiqh & Usul al-Fiqh",
            schedule: "Tue, Thu • 02:00 PM - 04:00 PM",
            students: "18 Enrolled",
            status: "Active"
        },
        {
            id: 3,
            title: "Tajweed Basics",
            batch: "Group C • Term 1",
            subject: "Arabic & Tajweed",
            schedule: "Completed",
            students: "15 Completed",
            status: "Completed"
        },
        {
            id: 4,
            title: "Nazra Quran - Primary",
            batch: "Class 3 • Batch 2024",
            subject: "Nazra & Dua",
            schedule: "Mon - Thu • 11:30 AM - 01:00 PM",
            students: "30 Enrolled",
            status: "Active"
        }
    ];

    return (
        <div className="assigned-classes-container">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <header className="content-header">
                    <div className="title-section">
                        <h1>My Assigned Classes</h1>
                        <p style={{ fontFamily: 'var(--font-subtitle)' }}>Manage your teaching schedule, attendance, and student progress.</p>
                    </div>

                    <div className="header-right">
                        <div className="notification-icons">
                            <div className="icon-wrapper">
                                <Icons.Bell />
                                <span className="dot-indicator"></span>
                            </div>
                            <Icons.Settings />
                        </div>
                        <img src={profilePic} alt="Profile" className="profile-img" />
                        <button className="request-class-btn">
                            <Icons.Add /> Request Class
                        </button>
                    </div>
                </header>

                <div className="search-container">
                    <div className="search-placeholder"></div>
                </div>

                <div className="classes-grid">
                    {classesData.map((cls) => (
                        <div key={cls.id} className="class-card">
                            <div className="card-header">
                                <h3>{cls.title}</h3>
                                <span className={`status-badge ${cls.status.toLowerCase()}`}>
                                    {cls.status}
                                </span>
                            </div>
                            <p className="batch-info">{cls.batch}</p>

                            <div className="detail-row">
                                <div className="detail-icon">
                                    <Icons.Subject />
                                </div>
                                <div className="detail-content">
                                    <label>Subject</label>
                                    <span>{cls.subject}</span>
                                </div>
                            </div>

                            <div className="detail-row">
                                <div className="detail-icon">
                                    <Icons.Calendar />
                                </div>
                                <div className="detail-content">
                                    <label>Schedule</label>
                                    <span>{cls.schedule}</span>
                                </div>
                            </div>

                            <div className="detail-row">
                                <div className="detail-icon">
                                    <Icons.Users />
                                </div>
                                <div className="detail-content">
                                    <label>Students</label>
                                    <span>{cls.students}</span>
                                </div>
                            </div>

                            {cls.status === "Active" ? (
                                <>
                                    <button className="take-attendance-btn">
                                        <Icons.Check /> Take Attendance
                                    </button>
                                    <div className="card-footer-btns">
                                        <button className="footer-btn">
                                            <Icons.Eye /> Details
                                        </button>
                                        <button className="footer-btn">
                                            <Icons.Students /> Students
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <button className="footer-btn full" style={{ marginTop: 'auto' }}>
                                    <Icons.Reports /> View Final Results
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default AssignedClasses;
