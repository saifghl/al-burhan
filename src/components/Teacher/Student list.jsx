import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Student list.css';
import { FaBell, FaCog, FaSearch, FaPlus, FaEye, FaEdit, FaUserFriends, FaCheckCircle, FaTimesCircle, FaClock, FaMosque, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const StudentList = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const icons = {
        dashboard: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
        students: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
        classes: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
        exams: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
        reports: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2v-6h2v6z",
        curriculum: "M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z",
        settings: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
    };

    const Icon = ({ path, className = "menu-icon" }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d={path} />
        </svg>
    );

    const studentsData = [
        { id: 'ST-2023-045', name: 'Ahmed Ali', grade: 'Grade 5', group: 'Hifz Group A', parent: '+971 50 123 4567', status: 'Present', statusColor: 'green' },
        { id: 'ST-2023-089', name: 'Yusuf Khan', grade: 'Grade 4', group: 'Arabic Level 2', parent: '+971 55 987 6543', status: 'Absent', statusColor: 'red', initials: 'YK' },
        { id: 'ST-2022-112', name: 'Omar Farooq', grade: 'Grade 6', group: 'Hifz Group B', parent: '+971 52 444 3333', status: 'Late', statusColor: 'orange' },
        { id: 'ST-2023-156', name: 'Ibrahim Musa', grade: 'Grade 3', group: 'Tajweed Basics', parent: '+971 50 777 8888', status: 'Present', statusColor: 'green' },
        { id: 'ST-2023-221', name: 'Fatima Ahmed', grade: 'Grade 5', group: 'Hifz Group A', parent: '+971 50 999 0000', status: 'Present', statusColor: 'green', initials: 'FA' },
    ];

    return (
        <div className="student-list-dashboard">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <main className="main-content">
                <header className="top-header">
                    <div className="container">
                        <div className="header-actions">
                            <div className="icon-wrapper">
                                <FaBell className="header-icon" />
                                <span className="notification-dot"></span>
                            </div>
                            <FaCog className="header-icon" />
                            <div className="profile-section">
                                <img src={profilePic} alt="Profile" className="profile-pic" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="content-body container">
                    <div className="page-header">
                        <div>
                            <h1 className="page-title">See Your Student List</h1>
                            <p className="page-subtitle">Configure and assign tasks to your class groups.</p>
                        </div>
                    </div>

                    <div className="action-bar-row">
                        <div className="search-bar">
                            <FaSearch className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <div className="filter-actions">
                            <select className="class-select">
                                <option>Sclass A</option>
                            </select>
                            <button className="btn btn-primary add-student-btn">
                                <FaPlus /> Add New Student
                            </button>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon-bg green-pale">
                                <FaUserFriends className="stat-icon green" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Total Students</span>
                                <span className="stat-value">452</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-bg blue-pale">
                                <FaCheckCircle className="stat-icon blue" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Present Today</span>
                                <span className="stat-value">418</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-bg red-pale">
                                <FaTimesCircle className="stat-icon red" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Absent</span>
                                <span className="stat-value">24</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon-bg yellow-pale">
                                <FaClock className="stat-icon yellow" />
                            </div>
                            <div className="stat-info">
                                <span className="stat-label">Late Arrivals</span>
                                <span className="stat-value">10</span>
                            </div>
                        </div>
                    </div>

                    <div className="table-container card">
                        <table className="students-table">
                            <thead>
                                <tr>
                                    <th>Student Name</th>
                                    <th>ID Number</th>
                                    <th>Class / Group</th>
                                    <th>Parent Contact</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentsData.map((student) => (
                                    <tr key={student.id}>
                                        <td>
                                            <div className="student-profile">
                                                {student.initials ? (
                                                    <div className="avatar-initials">{student.initials}</div>
                                                ) : (
                                                    <div className="avatar-placeholder"></div>
                                                )}
                                                <div className="name-details">
                                                    <span className="name-text">{student.name}</span>
                                                    <span className="grade-text">{student.grade}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td><span className="id-text">{student.id}</span></td>
                                        <td><span className={`group-tag ${student.group.toLowerCase().replace(/ /g, '-')}`}>{student.group}</span></td>
                                        <td><span className="contact-text">{student.parent}</span></td>
                                        <td>
                                            <span className={`status-pill ${student.statusColor}`}>
                                                <span className="dot">●</span> {student.status}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="action-icons">
                                                <FaEye className="action-icon-btn" />
                                                <FaEdit className="action-icon-btn" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="table-footer">
                            <span className="results-count">Showing 1 to 5 of 452 results</span>
                            <div className="pagination">
                                <button className="pager-btn">&lt; Previous</button>
                                <button className="page-num active">1</button>
                                <button className="page-num">2</button>
                                <button className="page-num">3</button>
                                <span className="pager-dots">...</span>
                                <button className="page-num">45</button>
                                <button className="pager-btn">Next &gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentList;
