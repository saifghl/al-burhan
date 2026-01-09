import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AttendanceResults.css';
import {
    FaSearch,
    FaBell,
    FaQuestionCircle,
    FaCalendarAlt,
    FaUser,
    FaUsers,
    FaEllipsisH,
    FaFileExport,
    FaCheck
} from 'react-icons/fa';
import { MdStickyNote2 } from "react-icons/md";


const AttendanceResults = () => {
    const [activeTab, setActiveTab] = useState('attendance');
    const navigate = useNavigate();

    const [pendingAttendance] = useState([
        { id: 1, date: 'Oct 24, 2023', class: 'Grade 10', section: 'A', teacher: 'Mrs. Sarah Jenkins', students: '32 Students', status: 'Pending', avatarColors: '#E2F0FF', avatarText: '#2D8EFF' },
        { id: 2, date: 'Oct 24, 2023', class: 'Grade 09', section: 'B', teacher: 'Mr. John Doe', students: '28 Students', status: 'Pending', avatarColors: '#FAE2FF', avatarText: '#C92DFF' },
        { id: 3, date: 'Oct 24, 2023', class: 'Grade 11', section: 'Sci', teacher: 'Ms. Emily Blunt', students: '30 Students', status: 'Pending', avatarColors: '#E2FFF0', avatarText: '#2DFF8E' },
        { id: 4, date: 'Oct 23, 2023', class: 'Grade 08', section: 'A', teacher: 'Mr. Mark Smith', students: '25 Students', status: 'Pending', avatarColors: '#FFE2E2', avatarText: '#FF2D2D' },
        { id: 5, date: 'Oct 23, 2023', class: 'Grade 12', section: 'Comm', teacher: 'Mrs. Linda Green', students: '35 Students', status: 'Review ASAP', avatarColors: '#FFF8E2', avatarText: '#FFC82D' },
    ]);

    const getStatusStyle = (status) => {
        if (status === 'Review ASAP') return 'status-urgent';
        return 'status-pending';
    };

    return (
        <div className="attendance-page-container">
            {/* Top Navigation / Header within the page */}
            {/* Top Navigation / Header within the page */}
            <div className="attendance-header-nav">
                <div className="tab-container">
                    <span className="page-title-text active">Attendance</span>
                    <span
                        className="page-title-text"
                        onClick={() => navigate('/admin/exam-schedules')}
                    >
                        Result
                    </span>
                </div>

                <div className="header-right-tools">
                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search..." />
                    </div>
                    <button className="icon-btn notification-btn"><FaBell /><span className="dot"></span></button>
                    <button className="icon-btn help-btn"><FaQuestionCircle /></button>
                </div>
            </div>


            {/* Main Content Area */}
            <div className="attendance-content-wrapper">

                {/* Pending Attendance Header Section */}
                <div className="section-header">
                    <div className="text-content">
                        <h1>Pending Attendance</h1>
                        <p>Review attendance entries submitted by teachers before final approval. Entries older than 7 days are flagged automatically.</p>
                    </div>
                    <button className="mark-teacher-attendance-btn" onClick={() => navigate('/admin/mark-attendance')}>Mark teacher attendance</button>
                </div>

                {/* Stats & Filters Row */}
                <div className="stats-filters-row">
                    {/* Stats Card */}
                    <div className="stats-card">
                        <div className="stats-info">
                            <span className="stats-label">Pending Reviews</span>
                            <span className="stats-value">42</span>
                        </div>
                        <div className="stats-icon-wrapper">
                            <MdStickyNote2 />
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="filters-container">
                        <div className="filter-group date-filter">
                            <label>Date</label>
                            <div className="input-with-icon">
                                <FaCalendarAlt />
                                <input type="text" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div className="filter-group class-filter">
                            <label>Class</label>
                            <div className="select-with-icon">
                                <FaUsers />
                                <select>
                                    <option>All Classes</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-group teacher-filter">
                            <label>Teacher</label>
                            <div className="input-with-icon">
                                <FaSearch />
                                <input type="text" placeholder="Search Teacher" />
                            </div>
                        </div>
                        <div className="filter-actions">
                            <button className="clear-filters-btn">Clear Filters</button>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="table-container">
                    <table className="attendance-table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" className="custom-checkbox" /></th>
                                <th>Date</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Teacher Name</th>
                                <th>Total Students</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingAttendance.map((row) => (
                                <tr key={row.id}>
                                    <td><input type="checkbox" className="custom-checkbox" /></td>
                                    <td className="date-cell">{row.date}</td>
                                    <td className="class-cell">{row.class}</td>
                                    <td>
                                        <span className="section-badge" style={{ color: row.avatarText, backgroundColor: row.avatarColors }}>
                                            {row.section}
                                        </span>
                                    </td>
                                    <td className="teacher-cell">
                                        <div className="teacher-info">
                                            <div className="teacher-avatar" style={{ backgroundColor: row.avatarColors, color: row.avatarText }}>
                                                {row.teacher.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
                                            </div>
                                            <span>{row.teacher}</span>
                                        </div>
                                    </td>
                                    <td className="students-cell">{row.students}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusStyle(row.status)}`}>
                                            <span className="dot"></span> {row.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="review-btn" onClick={() => navigate(`/admin/attendance-review/${row.id}`)}>Review</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination & Footer Actions */}
                    <div className="table-footer">
                        <div className="showing-text">Showing 1-5 of 42 entries</div>
                        <div className="pagination">
                            <button className="page-nav prev">&lt;</button>
                            <button className="page-num active">1</button>
                            <button className="page-num">2</button>
                            <button className="page-num">3</button>
                            <span className="dots">...</span>
                            <button className="page-num">9</button>
                            <button className="page-nav next">&gt;</button>
                        </div>
                    </div>

                    <div className="bottom-actions">
                        <button className="export-btn"><FaFileExport /> Export</button>
                        <button className="approve-selected-btn"><FaCheck /> Approve Selected</button>
                    </div>
                </div>

                {/* Bottom Alert/Notification */}
                <div className="bottom-notification-center">
                    <button className="view-approved-btn" onClick={() => navigate('/admin/approved-records')}>View Approved attendance required</button>
                </div>
            </div>
        </div >
    );
};

export default AttendanceResults;
