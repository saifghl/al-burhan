import React, { useState } from 'react';
import { FaFileCsv, FaKeyboard, FaSearch, FaFilter, FaDownload, FaSave, FaTimes } from 'react-icons/fa';
import { BsFileText } from "react-icons/bs";
import './EnterMarks.css';

const EnterMarks = () => {
    const [activeTab, setActiveTab] = useState('manual');

    // Mock Data
    const [students, setStudents] = useState([
        { id: 1, name: 'Ahmed Hassan', sid: 'MID-2023-001', marks: '85', status: 'Pass', remarks: 'Excellent' },
        { id: 2, name: 'Fatima Rahman', sid: 'MID-2023-002', marks: '92', status: 'Pass', remarks: 'Optional' },
        { id: 3, name: 'Mohammed Ali', sid: 'MID-2023-003', marks: '00', status: 'Pending', remarks: 'Optional' },
        { id: 4, name: 'Zainab Sheikh', sid: 'MID-2023-004', marks: '28', status: 'Fail', remarks: 'Need Improvement' },
        { id: 5, name: 'Yusuf Khan', sid: 'MID-2023-005', marks: '00', status: 'Pending', remarks: 'Optional' },
    ]);

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Pass': return <span className="em-status pass">Pass</span>;
            case 'Fail': return <span className="em-status fail">Fail</span>;
            default: return <span className="em-status pending">Pending</span>;
        }
    };

    return (
        <div className="enter-marks-page">
            <div className="em-breadcrumb">
                Dashboard / Exams / Final Term / <span>Enter Marks</span>
            </div>

            <div className="em-header">
                <h1>Enter / Import Marks</h1>
                <p>Manage results for Class 10 - Mathematics</p>
            </div>

            {/* Exam Details Card */}
            <div className="em-details-card">
                <div className="em-details-content">
                    <div className="em-card-title"><BsFileText /> Exam Details</div>
                    <div className="em-details-grid">
                        <div>
                            <label>Subject</label>
                            <div className="val">Mathematics</div>
                        </div>
                        <div>
                            <label>Class</label>
                            <div className="val">10 (Section A)</div>
                        </div>
                        <div>
                            <label>Max Marks</label>
                            <div className="val">100</div>
                        </div>
                        <div>
                            <label>Date</label>
                            <div className="val">12 Oct 2023</div>
                        </div>
                    </div>
                </div>
                <div className="em-card-graphic"></div>
            </div>

            {/* Tabs */}
            <div className="em-tabs">
                <div onClick={() => setActiveTab('manual')} className={`em-tab ${activeTab === 'manual' ? 'active' : ''}`}>
                    <FaKeyboard /> Manual Entry
                </div>
                <div onClick={() => setActiveTab('import')} className={`em-tab ${activeTab === 'import' ? 'active' : ''}`}>
                    <FaFileCsv /> Import CSV
                </div>
            </div>

            {/* Controls */}
            <div className="em-controls-bar">
                <div className="em-search-wrapper">
                    <FaSearch className="search-icon" />
                    <input type="text" placeholder="Search Student by name or ID..." />
                </div>
                <div className="em-actions-right">
                    <button className="em-btn-white"><FaFilter /> Filter</button>
                    <button className="em-btn-white"><FaDownload /> Template</button>
                </div>
            </div>

            {/* Table */}
            <div className="em-table-container">
                <table className="em-table">
                    <thead>
                        <tr>
                            <th style={{ width: '50px' }}>#</th>
                            <th style={{ textAlign: 'left' }}>Student Name</th>
                            <th>Madarsa ID</th>
                            <th>Marks Obtained</th>
                            <th>Status</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={student.id}>
                                <td style={{ color: '#888' }}>{index + 1}</td>
                                <td>
                                    <div className="em-student-info">
                                        <div className="avatar-initials">{student.name.split(' ').map(n => n[0]).join('')}</div>
                                        <span className="student-name">{student.name}</span>
                                    </div>
                                </td>
                                <td className="sid-cell">{student.sid}</td>
                                <td>
                                    <input type="text" className="em-marks-input" defaultValue={student.marks} />
                                </td>
                                <td>{getStatusBadge(student.status)}</td>
                                <td>
                                    <input type="text" className="em-remarks-input" defaultValue={student.remarks} placeholder="Add remark" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="em-pagination">
                    <span className="showing-text">Showing 1 to 5 of 24 students</span>
                    <div className="em-page-controls">
                        <span className="prev">Previous</span>
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <span className="next">Next</span>
                    </div>
                </div>
            </div>

            {/* Sticky Footer */}
            <div className="em-sticky-footer">
                <div className="em-footer-stats">
                    <span className="dot-blue">Total: <strong>24</strong></span>
                    <span className="dot-green">Entered: <strong>5</strong></span>
                    <span className="dot-gray">Pending: <strong>19</strong></span>
                </div>
                <div className="em-footer-actions">
                    <button className="em-btn-ghost">Cancel</button>
                    <button className="em-btn-save"><FaSave /> Save Marks</button>
                </div>
            </div>
        </div>
    );
};

export default EnterMarks;
