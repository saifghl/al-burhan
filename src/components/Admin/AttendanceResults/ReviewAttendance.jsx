import React, { useState } from 'react';
import { FaCheck, FaTimes, FaSearch, FaFilter, FaPen, FaThumbsDown, FaCheckCircle, FaUsers, FaChartPie, FaTimesCircle } from 'react-icons/fa';
import './ReviewAttendance.css';

const ReviewAttendance = () => {
    // Mock data based on image
    const [students] = useState([
        { id: 'MAD-102', name: 'Yusuf Khan', status: 'Present' },
        { id: 'MAD-105', name: 'Amina Ali', status: 'Absent' },
        { id: 'MAD-108', name: 'Bilal Ahmed', status: 'Present' },
        { id: 'MAD-112', name: 'Fatima Zara', status: 'Present' },
        { id: 'MAD-115', name: 'Omar Farooq', status: 'Absent' },
    ]);

    const getStatusClass = (status) => {
        return status === 'Present' ? 'status-present' : 'status-absent';
    };

    const getStatusIcon = (status) => {
        return status === 'Present' ? <FaCheckCircle size={12} /> : <FaTimesCircle size={12} />;
    };

    return (
        <div className="review-attendance-page">
            {/* Breadcrumb */}
            <div className="ra-breadcrumb">
                Home / Attendance / <span>Review</span>
            </div>

            {/* Header Section */}
            <div className="ra-header-section">
                <div className="ra-header-left">
                    <h1>Review Attendance</h1>
                    <div className="ra-meta">
                        <span className="class-badge">Class 5B</span>
                        <span className="meta-text">• Oct 24, 2023 • Submitted by: <span className="teacher-name">Ustad Ahmed</span></span>
                    </div>
                </div>
                <div className="ra-header-right">
                    <button className="ra-reject-btn"><FaThumbsDown /> Reject</button>
                    <button className="ra-approve-btn"><FaCheck /> Approve Attendance</button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="ra-stats-row">
                <div className="ra-stat-card">
                    <div className="stat-label"><FaUsers className="stat-icon" /> Total Students</div>
                    <div className="stat-value">45</div>
                </div>
                <div className="ra-stat-card">
                    <div className="stat-label col-green"><FaCheckCircle className="stat-icon" /> Present</div>
                    <div className="stat-value">42</div>
                </div>
                <div className="ra-stat-card">
                    <div className="stat-label col-red"><FaTimesCircle className="stat-icon" /> Absent</div>
                    <div className="stat-value">3</div>
                </div>
                <div className="ra-stat-card">
                    <div className="stat-label col-blue"><FaChartPie className="stat-icon" /> Rate</div>
                    <div className="stat-value">93%</div>
                </div>
            </div>

            {/* Filter & Search Bar */}
            <div className="ra-filter-bar">
                <div className="ra-search-wrapper">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search student by Name or ID..." />
                </div>
                <div className="ra-filter-tools">
                    <button className="filter-btn"><FaFilter /> Filter: All</button>
                    <button className="icon-action-btn"><FaPen /></button>
                </div>
            </div>

            {/* Student Table */}
            <div className="ra-table-container">
                <table className="ra-table">
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}><input type="checkbox" className="custom-checkbox" /></th>
                            <th style={{ textAlign: 'left' }}>Student Name</th>
                            <th>Madarsa ID</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id} className={index % 2 !== 0 ? 'row-alt' : ''}>
                                <td><input type="checkbox" className="custom-checkbox" /></td>
                                <td style={{ textAlign: 'left' }}>
                                    <div className="student-info">
                                        <div className="avatar-circle"></div>
                                        <span className="student-name">{student.name}</span>
                                    </div>
                                </td>
                                <td>{student.id}</td>
                                <td>
                                    <span className={`ra-status-badge ${getStatusClass(student.status)}`}>
                                        {getStatusIcon(student.status)} {student.status}
                                    </span>
                                </td>
                                <td>
                                    <button className="edit-action-btn"><FaPen size={12} /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="ra-pagination">
                    <span className="showing-text">Showing 1 to 5 of 45 results</span>
                    <div className="page-controls">
                        <button className="page-nav">Previous</button>
                        <button className="page-num active">1</button>
                        <button className="page-num">2</button>
                        <button className="page-nav">Next &gt;</button>
                    </div>
                </div>
            </div>

            {/* Admin Notes */}
            <div className="ra-notes-section">
                <label>Admin Notes (Optional)</label>
                <textarea placeholder="Add a note or reason for rejection..."></textarea>
            </div>
        </div>
    );
};

export default ReviewAttendance;
