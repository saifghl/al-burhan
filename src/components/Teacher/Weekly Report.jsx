import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    MdHome,
    MdPeople,
    MdSchool,
    MdDescription,
    MdInsertChart,
    MdBook,
    MdSettings,
    MdSearch,
    MdAdd,
    MdVisibility,
    MdEdit,
    MdNotifications,
    MdMenu
} from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './Weekly Report.css';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const WeeklyReportHistory = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const reports = [
        {
            week: 'Oct 23 - Oct 27',
            submitted: 'Oct 27, 2:30 PM',
            subject: 'Biology 101',
            status: 'Action Required',
            feedback: 'Please update the section on lab safety protocols to inclu...',
            id: 1
        },
        {
            week: 'Oct 16 - Oct 20',
            submitted: 'Oct 21, 10:00 AM',
            subject: 'Chemistry Lab',
            status: 'Pending Review',
            feedback: 'No feedback yet',
            id: 2
        },
        {
            week: 'Oct 16 - Oct 20',
            submitted: 'Oct 21, 09:45 AM',
            subject: 'Physics Mechanics',
            status: 'Pending Review',
            feedback: 'No feedback yet',
            id: 3
        },
        {
            week: 'Oct 09 - Oct 13',
            submitted: 'Oct 14, 4:15 PM',
            subject: 'General Science',
            status: 'Reviewed',
            feedback: 'Great job on the student engagement metrics. Keep i...',
            id: 4
        },
        {
            week: 'Oct 02 - Oct 06',
            submitted: 'Oct 07, 11:20 AM',
            subject: 'Biology 101',
            status: 'Reviewed',
            feedback: 'Approved.',
            id: 5
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Reviewed': return 'reviewed';
            case 'Pending Review': return 'pending';
            case 'Action Required': return 'action';
            default: return '';
        }
    };

    return (
        <div className="weekly-report-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <header className="content-header">
                    <div className="header-text">
                        <h1>Weekly Report History</h1>
                        <p className="subtitle">Track your submissions, review status, and feedback.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <MdNotifications size={24} color="#666" />
                            <MdSettings size={24} color="#666" />
                            <img src={profilePic} alt="Profile" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                        </div>
                        <button className="create-btn">
                            <MdAdd /> Create New Report
                        </button>
                    </div>
                </header>

                <section className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-header total">
                            <MdDescription /> Total Submitted
                        </div>
                        <span className="stat-value">24</span>
                        <span className="stat-desc">Since Jan 1, 2023</span>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header pending">
                            <MdInsertChart /> Pending Review
                        </div>
                        <span className="stat-value">2</span>
                        <span className="stat-desc">Awaiting admin action</span>
                    </div>
                    <div className="stat-card">
                        <div className="stat-header action">
                            <MdNotifications /> Action Required
                        </div>
                        <span className="stat-value">1</span>
                        <span className="stat-desc">Changes requested</span>
                    </div>
                </section>

                <div className="filters-section">
                    <div className="search-box">
                        <MdSearch className="search-icon" size={20} />
                        <input
                            type="text"
                            placeholder="Search reports by subject, week..."
                            className="search-input"
                        />
                    </div>
                    <div className="status-filters">
                        <button className="filter-btn active-all">All Status</button>
                        <button className="filter-btn"><span className="dot reviewed"></span> Reviewed</button>
                        <button className="filter-btn"><span className="dot pending"></span> Pending</button>
                        <button className="filter-btn"><span className="dot action"></span> Action Required</button>
                    </div>
                </div>

                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Week Range</th>
                                <th>Submitted</th>
                                <th>Subject/Class</th>
                                <th>Status</th>
                                <th>Feedback Preview</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map((report) => (
                                <tr key={report.id}>
                                    <td className="week-cell">{report.week}</td>
                                    <td>{report.submitted}</td>
                                    <td>{report.subject}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusClass(report.status)}`}>
                                            <span className="dot" style={{ backgroundColor: 'currentColor' }}></span>
                                            {report.status}
                                        </span>
                                    </td>
                                    <td className="feedback-preview">{report.feedback}</td>
                                    <td className="actions-cell">
                                        {report.status === 'Action Required' ? <MdEdit className="action-icon" /> : <MdVisibility className="action-icon" />}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination">
                        <span>Showing 1-5 of 24</span>
                        <div className="nav-btns">
                            <button className="nav-btn" disabled>Previous</button>
                            <button className="nav-btn">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WeeklyReportHistory;
