import React, { useState } from 'react';
import './Namaz Attendance.css';
import { FaUser, FaBell, FaCog, FaSearch, FaCheck, FaCalendarAlt, FaDownload, FaSave, FaChartLine, FaBars } from 'react-icons/fa';
import { MdDashboard, MdPeople, MdClass, MdAssignment, MdSettings, MdLogout } from 'react-icons/md';
import Sidebar from './Sidebar';
import profilePic from '../../assets/Picture16.png'; // Consistent with dashboard

const NamazAttendance = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Mock data for students
    const [students, setStudents] = useState([
        { id: 101, name: 'Bilal Ahmed', rollNo: '101', attendance: { fajr: true, zuhr: true, asr: true, maghrib: false, isha: false } },
        { id: 102, name: 'Omar Farooq', rollNo: '102', attendance: { fajr: true, zuhr: true, asr: true, maghrib: true, isha: true } },
        { id: 103, name: 'Yusuf Ali', rollNo: '103', attendance: { fajr: false, zuhr: true, asr: true, maghrib: false, isha: false } },
        { id: 104, name: 'Zayd Khan', rollNo: '104', attendance: { fajr: true, zuhr: true, asr: true, maghrib: true, isha: true } },
        { id: 105, name: 'Hamza Malik', rollNo: '105', attendance: { fajr: false, zuhr: true, asr: true, maghrib: true, isha: false } },
    ]);

    const toggleAttendance = (id, prayer) => {
        setStudents(students.map(student =>
            student.id === id
                ? { ...student, attendance: { ...student.attendance, [prayer]: !student.attendance[prayer] } }
                : student
        ));
    };

    const calculateSummary = (attendance) => {
        return Object.values(attendance).filter(Boolean).length;
    };

    const markAll = (prayer) => {
        setStudents(students.map(student => ({
            ...student,
            attendance: { ...student.attendance, [prayer]: true }
        })));
    };

    return (
        <div className="namaz-dashboard-container">
            <button className="sidebar-mobile-toggle" onClick={toggleSidebar}>
                <FaBars />
            </button>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <main className="main-content">
                {/* Header */}
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

                {/* Content Body */}
                <div className="content-body container">
                    <div className="page-header">
                        <div>
                            <h2 className="page-title">Namaz Attendance</h2>
                            <p className="page-subtitle">Record daily prayer attendance for students</p>
                        </div>
                        <div className="header-buttons">
                            <button className="btn btn-outline"><FaDownload /> Export Report</button>
                            <button className="btn btn-primary"><FaSave /> Save Attendance</button>
                        </div>
                    </div>

                    {/* Filter Section */}
                    <div className="filter-section card">
                        <div className="filter-group">
                            <label>Select Date</label>
                            <div className="input-with-icon">
                                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                                {/* <FaCalendarAlt className="field-icon" /> */}
                            </div>
                        </div>
                        <div className="filter-group">
                            <label>Class</label>
                            <select><option>Select Class</option></select>
                        </div>
                        <div className="filter-group">
                            <label>Section</label>
                            <select><option>Select Section</option></select>
                        </div>
                        <div className="filter-group search-group">
                            <label>Search Student</label>
                            <div className="search-input">
                                <FaSearch className="search-icon" />
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="stats-row">
                        <div className="stat-card attendance-average">
                            <div className="stat-header">
                                <div>
                                    <h3><FaChartLine /> Daily Attendance Average</h3>
                                    <p className="stat-desc">Excellent participation today! 5% increase from yesterday.</p>
                                </div>
                                <div className="stat-value">85%</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="stat-card total-students">
                            <h3>Total Students</h3>
                            <div className="student-count">
                                <span className="count">32</span>
                                <span className="status">Present Now</span>
                            </div>
                        </div>
                    </div>

                    {/* Attendance Table */}
                    <div className="attendance-table-container card">
                        <table className="attendance-table">
                            <thead>
                                <tr>
                                    <th>Student Details</th>
                                    <th className="prayer-header">Fajr <span className="mark-all" onClick={() => markAll('fajr')}>Mark All</span></th>
                                    <th className="prayer-header">Zuhr <span className="mark-all" onClick={() => markAll('zuhr')}>Mark All</span></th>
                                    <th className="prayer-header">Asr <span className="mark-all" onClick={() => markAll('asr')}>Mark All</span></th>
                                    <th className="prayer-header">Maghrib <span className="mark-all" onClick={() => markAll('maghrib')}>Mark All</span></th>
                                    <th className="prayer-header">Isha <span className="mark-all" onClick={() => markAll('isha')}>Mark All</span></th>
                                    <th>Summary</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id}>
                                        <td>
                                            <div className="student-info">
                                                <div className="avatar-placeholder">{student.name.charAt(0)}{student.name.split(' ')[1]?.charAt(0)}</div>
                                                <div>
                                                    <p className="student-name">{student.name}</p>
                                                    <p className="student-roll">Roll No: {student.rollNo}</p>
                                                </div>
                                            </div>
                                        </td>
                                        {['fajr', 'zuhr', 'asr', 'maghrib', 'isha'].map((prayer) => (
                                            <td key={prayer} className="checkbox-cell">
                                                <div
                                                    className={`custom-checkbox ${student.attendance[prayer] ? 'checked' : ''}`}
                                                    onClick={() => toggleAttendance(student.id, prayer)}
                                                >
                                                    {student.attendance[prayer] && <FaCheck />}
                                                </div>
                                            </td>
                                        ))}
                                        <td>
                                            <span className={`summary-badge count-${calculateSummary(student.attendance)}`}>
                                                {calculateSummary(student.attendance)}/5
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bottom-actions">
                        <button className="btn btn-primary"><MdAssignment /> View Attendance Report</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default NamazAttendance;
