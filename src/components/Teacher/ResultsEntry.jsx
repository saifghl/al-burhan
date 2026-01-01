import React, { useState } from 'react';
import {
    MdCloudDone,
    MdFileDownload,
    MdAutoFixHigh,
    MdUpload,
    MdArrowDropDown,
    MdEdit,
    MdNotifications,
    MdSettings
} from 'react-icons/md';
import { FaBars } from 'react-icons/fa';
import './ResultsEntry.css';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png';

const ResultsEntry = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [students] = useState([
        { id: 1, roll: '101', name: 'Abdullah Khan', initials: 'AK', marks: '85', total: '100', grade: 'A', remarks: 'Add Remark...' },
        { id: 2, roll: '102', name: 'Bilal Ahmed', initials: 'BA', marks: '92', total: '100', grade: 'A+', remarks: 'Excellent progress in Hifz' },
        { id: 3, roll: '103', name: 'Fatima Ali', initials: 'FA', marks: '-', total: '100', grade: '', remarks: 'Add Remark...', isActive: true },
        { id: 4, roll: '104', name: 'Hamza Yusuf', initials: 'HY', marks: '-', total: '100', grade: '', remarks: 'Add Remark...' },
        { id: 5, roll: '105', name: 'Omar Malik', initials: 'OM', marks: '108', total: '100', grade: '!', remarks: 'Add Remark...', isError: true },
        { id: 6, roll: '106', name: 'Zainab Bibi', initials: 'ZB', marks: '', total: '100', grade: '', remarks: 'Add Remark...' },
    ]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="results-entry-wrapper">
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

                <div className="results-container">
                    <div className="results-intro">
                        <div className="intro-left">
                            <h1>Results Entry</h1>
                            <p className="subtitle">Select filter criteria below to begin entering marks for the current term.</p>
                        </div>
                        <div className="save-indicator">
                            <MdCloudDone className="check-icon" /> All changes saved
                        </div>
                    </div>

                    <div className="filters-box">
                        <div className="filter-group">
                            <label>Academic Year</label>
                            <div className="select-wrap">
                                <select defaultValue="2023-2024">
                                    <option>2023-2024</option>
                                </select>
                                <MdArrowDropDown className="arrow" />
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Exam Term</label>
                            <div className="select-wrap">
                                <select>
                                    <option>Mid-Term Examination</option>
                                </select>
                                <MdArrowDropDown className="arrow" />
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Class</label>
                            <div className="select-wrap">
                                <select>
                                    <option>Grade 9 - A</option>
                                </select>
                                <MdArrowDropDown className="arrow" />
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Subject</label>
                            <div className="select-wrap">
                                <select>
                                    <option>Islamic Studies</option>
                                </select>
                                <MdArrowDropDown className="arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="progress-section">
                        <div className="progress-info-row">
                            <span className="p-title">Entry Progress</span>
                            <span className="p-count">24/30 Students Graded</span>
                        </div>
                        <div className="p-bar-track">
                            <div className="p-bar-fill" style={{ width: '80%' }}></div>
                        </div>
                        <div className="p-actions">
                            <button className="txt-btn"><MdFileDownload size={18} /> Import CSV</button>
                            <button className="txt-btn"><MdAutoFixHigh size={18} /> Autofill</button>
                        </div>
                    </div>

                    <div className="table-card">
                        <table className="results-table">
                            <thead>
                                <tr>
                                    <th>Roll #</th>
                                    <th>Student Name</th>
                                    <th>Marks Obt.</th>
                                    <th>Total</th>
                                    <th>Grade</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td className="roll-col">{student.roll}</td>
                                        <td className="name-col">
                                            <div className={`avatar-mini ${student.initials === 'FA' ? 'blue' : student.initials === 'OM' ? 'orange' : 'gray'}`}>
                                                {student.initials}
                                            </div>
                                            <span className="st-name">{student.name}</span>
                                        </td>
                                        <td>
                                            <div className={`marks-pill ${student.isError ? 'err' : student.isActive ? 'active' : ''}`}>
                                                {student.marks}
                                                {student.isActive && <MdEdit className="pencil" />}
                                            </div>
                                        </td>
                                        <td className="total-col">{student.total}</td>
                                        <td>
                                            <div className={`grade-circle ${student.grade === 'A+' ? 'a-plus' :
                                                student.grade === 'A' ? 'a' :
                                                    student.grade === '!' ? 'fail' : 'empty'
                                                }`}>
                                                {student.grade || '-'}
                                            </div>
                                        </td>
                                        <td className="remarks-col">
                                            <input type="text" className="remark-line" defaultValue={student.remarks} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <footer className="results-footer">
                        <div className="footer-left">Showing 1-6 of 30 students</div>
                        <div className="footer-right">
                            <button className="cancel-link">Cancel</button>
                            <button className="draft-button">Save Draft</button>
                            <button className="publish-button"><MdUpload size={20} /> Publish Results</button>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default ResultsEntry;
