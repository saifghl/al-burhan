import React, { useState } from 'react';
import { FaCalendarAlt, FaSearch, FaFilter, FaDownload, FaCheck, FaSave, FaHistory, FaClock } from 'react-icons/fa';
import AttendanceHistoryModal from './AttendanceHistoryModal';
import './MarkTeacherAttendance.css';

const MarkTeacherAttendance = () => {
    // Modal State
    const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

    // Mock Data
    const [teachers, setTeachers] = useState([
        { id: 'EMP-2049', name: 'Sarah Jenkins', dept: 'Science', status: 'Present', inTime: '08:00', outTime: '16:00', hrs: '8h 00m', remark: '' },
        { id: 'EMP-2103', name: 'Michael Chen', dept: 'Math', status: 'Absent', inTime: '--:--', outTime: '--:--', hrs: '-', remark: 'Sick Leave' },
        { id: 'EMP-3042', name: 'Emily Davis', dept: 'English', status: 'Leave', inTime: '--:--', outTime: '--:--', hrs: '-', remark: 'Pending Approval (Casual Leave)' },
        { id: 'EMP-4110', name: 'David Kim', dept: 'Physics', status: '', inTime: '--:--', outTime: '--:--', hrs: '-', remark: 'Please mark status' },
        { id: 'EMP-2055', name: 'Lisa Wong', dept: 'Arts', status: 'Present', inTime: '09:00', outTime: '15:30', hrs: '6h 30m', remark: 'Half Day' },
    ]);

    const handleStatusChange = (id, newStatus) => {
        setTeachers(teachers.map(t => t.id === id ? { ...t, status: newStatus } : t));
    };

    return (
        <div className="mark-attendance-page">
            {/* Breadcrumb */}
            <div className="ma-breadcrumb">
                Dashboard / Attendance / <span>Mark Attendance</span>
            </div>

            {/* Header */}
            <div className="ma-header">
                <div className="ma-header-left">
                    <h1>Mark Teacher Attendance</h1>
                    <p>Manage daily attendance records for <strong>Tuesday, October 24, 2023</strong></p>
                </div>
                <button className="ma-history-btn" onClick={() => setIsHistoryModalOpen(true)}>
                    <FaHistory /> Attendance History
                </button>
            </div>

            {/* Stats Row */}
            <div className="ma-stats-row">
                <div className="ma-stat-card">
                    <div className="stat-label">Pending Reviews</div>
                    <div className="stat-value">12 <span className="stat-sub warn">Action Needed</span></div>
                </div>
                <div className="ma-stat-card bg-green-light">
                    <div className="stat-label col-green">Present Today</div>
                    <div className="stat-value text-green">45</div>
                </div>
                <div className="ma-stat-card">
                    <div className="stat-label col-red">Absent Today</div>
                    <div className="stat-value text-red">3</div>
                </div>
                <div className="ma-stat-card">
                    <div className="stat-label">On Leave</div>
                    <div className="stat-value">2</div>
                </div>
            </div>

            {/* Filters */}
            <div className="ma-filters-bar">
                <div className="ma-filter-group">
                    <label>Date</label>
                    <div className="ma-input-wrapper">
                        <input type="date" defaultValue="2023-10-24" />
                    </div>
                </div>
                <div className="ma-filter-group">
                    <label>Department</label>
                    <select><option>All Departments</option></select>
                </div>
                <div className="ma-filter-group wide">
                    <label>Search Teacher</label>
                    <div className="ma-search-wrapper">
                        <FaSearch className="search-icon" />
                        <input type="text" placeholder="Search by name or ID..." />
                    </div>
                </div>
                <div className="ma-filter-actions">
                    <span className="clear-link">Clear Filters</span>
                    <button className="apply-btn"><FaFilter /> Apply</button>
                </div>
            </div>

            {/* Table */}
            <div className="ma-table-container">
                <table className="ma-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}><input type="checkbox" className="custom-checkbox" /></th>
                            <th style={{ textAlign: 'left' }}>Teacher</th>
                            <th>Status</th>
                            <th>In Time</th>
                            <th>Out Time</th>
                            <th>Hrs</th>
                            <th style={{ textAlign: 'left' }}>Remarks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachers.map((teacher, index) => (
                            <tr key={teacher.id}>
                                <td><input type="checkbox" className="custom-checkbox" /></td>
                                <td className="teacher-cell">
                                    <div className="teacher-info">
                                        <div className="avatar-circle"></div>
                                        <div>
                                            <div className="teacher-name">{teacher.name}</div>
                                            <div className="teacher-meta">{teacher.id} • {teacher.dept}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="status-toggle-group">
                                        <button
                                            className={`status-toggle ${teacher.status === 'Present' ? 'active-present' : ''}`}
                                            onClick={() => handleStatusChange(teacher.id, 'Present')}
                                        >Present</button>
                                        <button
                                            className={`status-toggle ${teacher.status === 'Absent' ? 'active-absent' : ''}`}
                                            onClick={() => handleStatusChange(teacher.id, 'Absent')}
                                        >Absent</button>
                                        <button
                                            className={`status-toggle ${teacher.status === 'Leave' ? 'active-leave' : ''}`}
                                            onClick={() => handleStatusChange(teacher.id, 'Leave')}
                                        >Leave</button>
                                    </div>
                                </td>
                                <td className="time-cell">{teacher.inTime}</td>
                                <td className="time-cell">{teacher.outTime}</td>
                                <td className="time-cell">{teacher.hrs}</td>
                                <td>
                                    {teacher.remark === 'Pending Approval (Casual Leave)' ? (
                                        <span className="badge-pending">Pending Approval <span className="text-muted">Casual Leave</span></span>
                                    ) : teacher.remark === 'Please mark status' ? (
                                        <span className="text-orange">Please mark status</span>
                                    ) : (
                                        <input type="text" className="remark-input" defaultValue={teacher.remark} placeholder="Add remark..." />
                                    )}
                                </td>
                                <td>
                                    <button className="icon-btn-gray"><FaClock /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer Actions */}
                <div className="ma-footer-actions">
                    <div className="selection-info">
                        <strong>2 teachers selected</strong> <span className="select-all-Link">Select All</span>
                    </div>
                    <div className="ma-footer-buttons">
                        <button className="ma-btn-ghost"><FaDownload /> Export CSV</button>
                        <button className="ma-btn-white"><FaCheck /> Approve Selected</button>
                        <button className="ma-btn-green"><FaSave /> Save Attendance</button>
                    </div>
                </div>
            </div>

            {/* History Modal */}
            <AttendanceHistoryModal
                isOpen={isHistoryModalOpen}
                onClose={() => setIsHistoryModalOpen(false)}
            />
        </div>
    );
};

export default MarkTeacherAttendance;
