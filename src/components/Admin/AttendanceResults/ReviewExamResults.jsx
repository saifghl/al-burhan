import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaBell, FaQuestionCircle, FaCheckCircle, FaUserFriends, FaTrophy, FaChartBar, FaFilter } from 'react-icons/fa';
import './ReviewExamResults.css';

const ReviewExamResults = () => {
    const navigate = useNavigate();
    // Mock Data based on the image
    const [students] = useState([
        { id: 'ST-2023-089', name: 'Ahmed Al-Farsi', class: 'Class 5-A', marks: 88, grade: 'A Grade', status: 'Reviewed' },
        { id: 'ST-2023-092', name: 'Fatima Noor', class: 'Class 5-A', marks: 95, grade: 'A+ Grade', status: 'Pending' },
        { id: 'ST-2023-104', name: 'Bilal Khan', class: 'Class 5-A', marks: 23, grade: 'Fail', status: 'Flagged' },
        { id: 'ST-2023-112', name: 'Yusuf Rahman', class: 'Class 5-A', marks: 67, grade: 'B Grade', status: 'Pending' },
        { id: 'ST-2023-118', name: 'Mariam Saeed', class: 'Class 5-A', marks: 75, grade: 'C Grade', status: 'Reviewed' },
    ]);

    const getGradeClass = (grade) => {
        if (grade.includes('A')) return 'A';
        if (grade.includes('B')) return 'B';
        if (grade.includes('C')) return 'C';
        if (grade.includes('Fail')) return 'F';
        return '';
    };

    const handlePublish = () => {
        // In a real app, this would make an API call to update status
        navigate('/admin/published-results');
    };

    return (
        <div className="review-exam-container">
            {/* Custom Top Navigation for this layout */}
            <nav className="custom-top-nav">
                <div className="brand-section">
                    <span style={{ fontSize: '24px', color: '#64A926' }}>CouldIcon</span> {/* Placeholder for Logo Icon */}
                    <span className="brand-logo-text">Al Burhan</span>
                    <div className="search-bar-nav">
                        <FaSearch />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>
                <div className="nav-links-right">
                    <a href="#" className="nav-link">Dashboard</a>
                    <a href="#" className="nav-link">Exams</a>
                    <a href="#" className="nav-link">Students</a>
                    <a href="#" className="nav-link">Reports</a>
                    <a href="#" className="nav-link">Settings</a>
                    <div className="nav-icons">
                        <div className="icon-wrapper"><FaBell /></div>
                        <div className="icon-wrapper"><FaQuestionCircle /></div>
                        <div className="user-avatar" />
                    </div>
                </div>
            </nav>

            <main className="review-content">
                {/* Header */}
                <div className="review-header">
                    <div className="header-info">
                        <div className="review-breadcrumbs">Dashboard / Exams / Final Term 2023</div>
                        <div className="review-title">
                            <h1>Review Exam Results</h1>
                        </div>
                        <p className="review-subtitle">Final Term - Islamic Studies 2023 • Date Conducted: Oct 12, 2023</p>
                    </div>
                    <div className="review-actions">
                        <button className="btn-reject-all">Reject All</button>
                        <button className="btn-approve-all" onClick={handlePublish}>
                            <FaCheckCircle /> Approve & Publish All
                        </button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="review-stats-grid">
                    <div className="review-stat-card">
                        <div className="r-stat-info">
                            <span className="label">Total Candidates</span>
                            <div className="value">45 <span className="growth-badge">↗ 2%</span></div>
                        </div>
                        <div className="r-stat-icon"><FaUserFriends /></div>
                    </div>
                    <div className="review-stat-card">
                        <div className="r-stat-info">
                            <span className="label">Class Average</span>
                            <div className="value">82% <span className="growth-badge">↗ 5%</span></div>
                        </div>
                        <div className="r-stat-icon"><FaChartBar /></div>
                    </div>
                    <div className="review-stat-card">
                        <div className="r-stat-info">
                            <span className="label">Pass Percentage</span>
                            <div className="value">96% <span className="growth-badge">↗ 1%</span></div>
                        </div>
                        <div className="r-stat-icon"><FaCheckCircle /></div>
                    </div>
                    <div className="review-stat-card">
                        <div className="r-stat-info">
                            <span className="label">Highest Score</span>
                            <div className="value">98%</div>
                        </div>
                        <div className="r-stat-icon"><FaTrophy /></div>
                    </div>
                </div>

                {/* Filters */}
                <div className="review-filters">
                    <div className="search-input-wrapper">
                        <FaSearch />
                        <input type="text" placeholder="Search by Student Name or Madarsa ID..." />
                    </div>
                    <div className="filter-controls">
                        <div className="filter-dropdown">Filter by Grade ▾</div>
                        <div className="filter-dropdown">Status: All <FaFilter style={{ marginLeft: '4px', fontSize: '12px' }} /></div>
                    </div>
                </div>

                {/* Table */}
                <div className="review-table-container">
                    <table className="review-table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                                <th>Madarsa ID</th>
                                <th>Student Name</th>
                                <th>Marks / 100</th>
                                <th>Grade</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td><input type="checkbox" /></td>
                                    <td>{student.id}</td>
                                    <td>
                                        <div className="student-info">
                                            <div className="student-avatar" />
                                            <div className="student-details">
                                                <span className="s-name">{student.name}</span>
                                                <span className="s-class">{student.class}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className={`marks-box ${student.grade === 'Fail' ? 'fail' : ''}`}>
                                            {student.marks}
                                        </div>
                                    </td>
                                    <td>
                                        <span className={`grade-text ${getGradeClass(student.grade)}`}>{student.grade}</span>
                                    </td>
                                    <td>
                                        <span className={`status-pill ${student.status.toLowerCase()}`}>
                                            • {student.status}
                                        </span>
                                    </td>
                                    <td style={{ color: '#888', fontSize: '18px', cursor: 'pointer' }}>...</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="review-pagination">
                        <span>Showing 1 to 5 of 45 results</span>
                        <div className="p-controls">
                            <span>Previous {'<'}</span>
                            <div className="p-num active">1</div>
                            <div className="p-num">2</div>
                            <div className="p-num">3</div>
                            <span>...</span>
                            <div className="p-num">9</div>
                            <span>{'>'} Next</span>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default ReviewExamResults;
