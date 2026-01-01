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
    MdSave,
    MdEventAvailable,
    MdCheckCircle,
    MdGroup,
    MdComputer,
    MdAdd,
    MdDelete,
    MdAssignment,
    MdReportProblem,
    MdLightbulb,
    MdArrowForward,
    MdNotifications
} from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './WeeklyReportSubmission.css';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const WeeklyReportSubmission = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [rows, setRows] = useState([
        { id: 1, grade: 'Grade 9A', subject: 'Physics', topic: "Newton's third law and application" },
        { id: 2, grade: 'Grade 10B', subject: 'Chemistry', topic: '' }
    ]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const addRow = () => {
        const newId = rows.length > 0 ? Math.max(...rows.map(r => r.id)) + 1 : 1;
        setRows([...rows, { id: newId, grade: '', subject: '', topic: '' }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <div className="submission-page-wrapper">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="main-content">
                <header className="top-header">
                    <div className="container" style={{ justifyContent: 'flex-end', padding: '0 2rem' }}>
                        <div className="header-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <MdNotifications size={22} color="#718096" />
                            <MdSettings size={22} color="#718096" />
                            <div className="profile-section">
                                <img src={profilePic} alt="Profile" style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </header>

                <div className="submission-content-wrapper">
                    <div className="submission-main-card">
                        <header className="form-header">
                            <div className="header-meta">
                                <h1>Weekly Report Submission</h1>
                                <p className="teacher-info">Teacher: <span>Sarah Jenkins</span> Department: <span>Science</span></p>
                            </div>
                            <button className="save-draft-btn">
                                <MdSave /> Save Draft
                            </button>
                        </header>

                        <section className="summary-grid">
                            <div className="stat-box">
                                <div className="stat-label">Classes Scheduled <MdEventAvailable className="stat-icon" /></div>
                                <div className="stat-value">25</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-label">Classes Conducted <MdCheckCircle className="stat-icon" /></div>
                                <div className="stat-value">24</div>
                                <div className="completion-hint">96% Completion Rate</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-label">Students Present <MdGroup className="stat-icon" /></div>
                                <div className="stat-value">--</div>
                            </div>
                            <div className="stat-box">
                                <div className="stat-label">Avg. Performance <MdComputer className="stat-icon" /></div>
                                <div className="stat-value">--</div>
                            </div>
                        </section>

                        <div className="form-section-card">
                            <div className="section-title">
                                <div className="title-group">
                                    <div className="icon-wrap"><MdSchool /></div>
                                    <span>Academic Delivery</span>
                                </div>
                                <button className="add-btn" onClick={addRow}><MdAdd /> Add Class</button>
                            </div>

                            <div className="delivery-labels delivery-grid" style={{ marginBottom: '8px' }}>
                                <span className="grid-label">Grade/Class</span>
                                <span className="grid-label">Subject</span>
                                <span className="grid-label">Topic/Chapter Covered</span>
                                <span></span>
                            </div>

                            {rows.map((row) => (
                                <div key={row.id} className="delivery-grid" style={{ marginBottom: '12px' }}>
                                    <input type="text" className="input-field" defaultValue={row.grade} placeholder="Grade..." />
                                    <select className="input-field" defaultValue={row.subject}>
                                        <option value="Physics">Physics</option>
                                        <option value="Chemistry">Chemistry</option>
                                        <option value="Biology">Biology</option>
                                    </select>
                                    <input type="text" className="input-field" defaultValue={row.topic} placeholder="Enter topic..." />
                                    <button className="delete-btn" onClick={() => deleteRow(row.id)}><MdDelete size={20} /></button>
                                </div>
                            ))}
                        </div>

                        <div className="form-section-card">
                            <div className="section-title">
                                <div className="title-group">
                                    <div className="icon-wrap"><MdAssignment /></div>
                                    <span>Performance Overview</span>
                                </div>
                            </div>

                            <div className="progress-summary-box">
                                <h4>General Student Progress Summary</h4>
                                <p className="summary-hint">Provide a qualitative summary of how students absorbed the material this week.</p>
                                <textarea className="textarea-field" placeholder="Enter summary here..."></textarea>
                            </div>

                            <div className="progress-summary-box" style={{ marginTop: '24px' }}>
                                <h4>Notable Student Achievements</h4>
                                <input type="text" className="input-field" placeholder="E.g. Ali completed Juz 5 with Tajweed" />
                            </div>
                        </div>

                        <div className="side-by-side">
                            <div className="form-section-card">
                                <div className="section-title" style={{ marginBottom: '12px' }}>
                                    <div className="title-group">
                                        <div className="icon-wrap" style={{ background: '#FFF5F5', color: '#E53E3E' }}><MdReportProblem /></div>
                                        <span>Obstacles & Challenges</span>
                                    </div>
                                </div>
                                <div className="tag-chips">
                                    <span className="chip">Discipline</span>
                                    <span className="chip active">Resources</span>
                                    <span className="chip">Attendance</span>
                                    <span className="chip">Technical</span>
                                </div>
                                <textarea className="textarea-field" style={{ minHeight: '130px' }}></textarea>
                            </div>

                            <div className="form-section-card">
                                <div className="section-title" style={{ marginBottom: '12px' }}>
                                    <div className="title-group">
                                        <div className="icon-wrap" style={{ background: '#EBF8FF', color: '#3182CE' }}><MdLightbulb /></div>
                                        <span>Moving Forward</span>
                                    </div>
                                </div>
                                <p className="summary-hint">Do you have any suggestions for the administration or need support for next week?</p>
                                <textarea className="textarea-field" style={{ minHeight: '130px' }}></textarea>
                            </div>
                        </div>

                        <footer className="form-footer">
                            <div className="certification">
                                I certify that this report is accurate and complete.
                            </div>
                            <div className="footer-btns">
                                <button className="cancel-btn">Cancel</button>
                                <button className="submit-btn">
                                    Submit Report <MdArrowForward />
                                </button>
                            </div>
                        </footer>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WeeklyReportSubmission;
