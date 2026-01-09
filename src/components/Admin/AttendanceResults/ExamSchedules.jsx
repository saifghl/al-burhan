import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaPlus, FaCalendarAlt, FaHourglassHalf, FaPen, FaFileAlt, FaBell, FaQuestionCircle } from 'react-icons/fa';
import { TbFilter } from "react-icons/tb";
import './ExamSchedules.css';

const ExamSchedules = () => {
    const navigate = useNavigate();

    // Mock Data
    const [exams] = useState([
        { id: 1, name: 'Mid-Term Mathematics', type: 'Term', class: 'Grade 10-A', subject: 'Mathematics', date: 'Oct 24, 2023', status: 'Published' },
        { id: 2, name: 'Monthly Science Quiz', type: 'Monthly', class: 'Grade 8-B', subject: 'Science', date: 'Nov 02, 2023', status: 'Open' },
        { id: 3, name: 'English Literature Final', type: 'Term', class: 'Grade 12-A', subject: 'English', date: 'Dec 10, 2023', status: 'Draft' },
        { id: 4, name: 'History Chapter 5', type: 'Monthly', class: 'Grade 9-C', subject: 'History', date: 'Nov 15, 2023', status: 'Draft' },
        { id: 5, name: 'Physics Lab Exam', type: 'Practical', class: 'Grade 11-A', subject: 'Physics', date: 'Oct 30, 2023', status: 'Published' },
    ]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Published':
                return <span className="es-badge published">Published</span>;
            case 'Open':
                return <span className="es-badge open">Open</span>;
            case 'Draft':
                return <span className="es-badge draft">Draft</span>;
            default:
                return null;
        }
    };

    return (
        <div className="exam-schedules-page">
            {/* Top Header Nav (Tabs) */}
            <div className="es-header-nav">
                <div className="es-tab-container">
                    <span className="es-page-title inactive" onClick={() => navigate('/admin/attendance-results')}>Attendance</span>
                    <span className="es-page-title active">Result</span>
                </div>

                <div className="es-header-right">
                    <div className="es-search-bar">
                        <FaSearch className="es-search-icon" />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button className="icon-btn"><FaBell /><span className="dot"></span></button>
                    <button className="icon-btn"><FaQuestionCircle /></button>
                </div>
            </div>

            <div className="es-content-wrapper">
                {/* Page Title & Action */}
                <div className="es-title-section">
                    <div>
                        <h1>Exam Schedules</h1>
                        <p>Manage and schedule monthly and term examinations for all classes.</p>
                    </div>
                    <button className="es-create-btn" onClick={() => navigate('/admin/create-exam')}><FaPlus /> Create Exam</button>
                </div>

                {/* Stats Cards */}
                <div className="es-stats-row">
                    <div className="es-stat-card">
                        <div className="es-stat-icon-wrapper blue">
                            <FaCalendarAlt />
                        </div>
                        <div>
                            <div className="es-stat-label">Total Exams</div>
                            <div className="es-stat-value">24</div>
                        </div>
                    </div>
                    <div className="es-stat-card">
                        <div className="es-stat-icon-wrapper orange">
                            <FaHourglassHalf />
                        </div>
                        <div>
                            <div className="es-stat-label">Upcoming</div>
                            <div className="es-stat-value">5</div>
                        </div>
                    </div>
                    <div className="es-stat-card">
                        <div className="es-stat-icon-wrapper gray">
                            <FaPen />
                        </div>
                        <div>
                            <div className="es-stat-label">Drafts</div>
                            <div className="es-stat-value">3</div>
                        </div>
                    </div>
                </div>

                {/* Filter Bar */}
                <div className="es-filter-bar">
                    <div className="es-search-input-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search Exam name..." />
                    </div>
                    <div className="es-filters-right">
                        <div className="es-dropdown">Filter by Class</div>
                        <div className="es-dropdown">Subject</div>
                        <div className="es-dropdown">Status</div>
                    </div>
                </div>

                {/* Table */}
                <div className="es-table-container">
                    <table className="es-table">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'left' }}>Exam Name</th>
                                <th>Type</th>
                                <th>Class</th>
                                <th>Subject</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {exams.map((exam) => (
                                <tr key={exam.id}>
                                    <td style={{ textAlign: 'left', fontWeight: '600' }}>{exam.name}</td>
                                    <td>{exam.type}</td>
                                    <td>{exam.class}</td>
                                    <td>{exam.subject}</td>
                                    <td>{exam.date}</td>
                                    <td>{getStatusBadge(exam.status)}</td>
                                    <td>
                                        <div className="es-actions">
                                            <button className="action-icon"><FaPen /></button>
                                            <button className="action-icon"><TbFilter /></button> {/* Using filter icon as proxy for the second icon which looks like a slider/settings */}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="es-table-footer">
                        <span className="showing-text">Showing 1 to 5 of 24 entries</span>
                        <div className="pagination-controls">
                            <button className="page-nav">Prev</button>
                            <button className="page-num active">1</button>
                            <button className="page-num">2</button>
                            <button className="page-num">3</button>
                            <button className="page-nav">Next</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Actions */}
                <div className="es-bottom-actions">
                    <button className="es-btn-white" onClick={() => navigate('/admin/approved-records')}>View Approved Result</button>
                    <button className="es-btn-green" onClick={() => navigate('/admin/pending-approvals')}>View Pending Results</button>
                </div>
            </div>
        </div>
    );
};

export default ExamSchedules;
