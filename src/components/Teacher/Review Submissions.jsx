import React, { useState } from 'react';
import './Review Submission.css';
import { FaBell, FaCog, FaChevronRight, FaFileAlt, FaExternalLinkAlt, FaUser, FaBars } from 'react-icons/fa';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png'; // Assuming this is the user's profile pic or generic avatar

const ReviewSubmissions = () => {
    const [selectedStudentId, setSelectedStudentId] = useState(1);
    const [feedback, setFeedback] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const students = [
        { id: 1, name: 'Alice Johnson', status: 'Submitted on Time', statusColor: 'green', checked: true },
        { id: 2, name: 'Bob Smith', status: 'Submitted 2h late', statusColor: 'orange', checked: false },
        { id: 3, name: 'Charlie Davis', status: 'No submission', statusColor: 'grey', checked: false },
        { id: 4, name: 'Diana Evans', status: 'Graded', statusColor: 'green', checked: true },
        { id: 5, name: 'Evan Wright', status: 'Submitted yesterday', statusColor: 'grey', checked: false },
    ];

    const handleStudentClick = (id) => {
        setSelectedStudentId(id);
        setFeedback(''); // Reset feedback for demo
    };

    return (
        <div className="review-submissions-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <header className="top-header">
                    <div className="container" style={{ justifyContent: 'flex-end' }}>
                        <div className="header-actions">
                            <FaBell className="header-icon" />
                            <FaCog className="header-icon" />
                            <div className="profile-section">
                                <img src={profilePic} alt="Profile" className="profile-pic" />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="review-body container">
                    <div className="review-header">
                        <h1 className="page-title">Review Submissions</h1>
                        <p className="subtitle">15/20 submissions graded</p>
                    </div>

                    <div className="review-content">
                        {/* Sidebar - Student List */}
                        <div className="students-sidebar">
                            <div className="sidebar-header">
                                <h3>Students</h3>
                                <span className="total-count">20 Total</span>
                            </div>
                            <ul className="student-list">
                                {students.map((student) => (
                                    <li
                                        key={student.id}
                                        className={`student-item ${selectedStudentId === student.id ? 'active' : ''}`}
                                        onClick={() => handleStudentClick(student.id)}
                                    >
                                        <div className="student-info">
                                            <div className="avatar-circle">
                                                <FaUser className="placeholder-user-icon" />
                                            </div>
                                            <div className="student-details">
                                                <span className="student-name">{student.name}</span>
                                                <span className={`submission-status ${student.statusColor}`}>{student.status}</span>
                                            </div>
                                        </div>
                                        {student.checked && <span className="check-icon">✓</span>}
                                        {student.statusColor === 'orange' && <span className="dot-icon orange">●</span>}
                                        {student.statusColor === 'grey' && student.status === 'No submission' && <span className="dash-icon">-</span>}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Main Content - Preview & Feedback */}
                        <div className="submission-detail">
                            <div className="document-header">
                                <div className="file-info">
                                    <span className="file-icon">📄</span>
                                    <div>
                                        <span className="file-name">cell_diagram_final.pdf</span>
                                        <span className="file-meta">1.2 MB • Submitted Oct 24, 2:30 PM</span>
                                    </div>
                                </div>
                                <button className="open-external-btn">↗</button>
                            </div>

                            <div className="document-preview-area">
                                <div className="preview-placeholder">
                                    <span className="placeholder-icon">🖼️</span>
                                    <p>Document Preview</p>
                                </div>
                            </div>

                            <div className="feedback-section">
                                <div className="feedback-input">
                                    <label>Teacher Feedback</label>
                                    <textarea
                                        placeholder="Great work on the mitochondria diagram, alice! Just make sure to label the crista next time."
                                        value={feedback}
                                        onChange={(e) => setFeedback(e.target.value)}
                                    />
                                </div>
                                <div className="grading-actions">
                                    <label>Grade Status</label>
                                    <div className="action-buttons">
                                        <div className="grade-status-display">
                                            <div className="status-badge completed">
                                                <div className="check">✔</div>
                                                <span>Completed</span>
                                            </div>
                                        </div>
                                        <div className="button-group">
                                            <button className="save-btn">Save</button>
                                            <button className="next-btn">→</button>
                                        </div>
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

export default ReviewSubmissions;
