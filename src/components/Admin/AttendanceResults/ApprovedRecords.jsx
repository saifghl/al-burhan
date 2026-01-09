import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaFilter, FaDownload, FaEye, FaLock, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ApprovedRecords.css';

const ApprovedRecords = () => {
    // Mock Data
    const [records] = useState([
        { id: 1, date: 'Oct 24, 2023', class: 'Grade 10', section: 'A', teacher: 'Sarah Jenkins', teacherImg: '', status: 'Approved' },
        { id: 2, date: 'Oct 24, 2023', class: 'Grade 10', section: 'B', teacher: 'Mark Anderson', teacherImg: '', status: 'Approved' },
        { id: 3, date: 'Oct 23, 2023', class: 'Grade 9', section: 'C', teacher: 'Emily Lee', teacherImg: '', status: 'Locked' },
        { id: 4, date: 'Oct 23, 2023', class: 'Grade 11', section: 'Science', teacher: 'Robert King', teacherImg: '', status: 'Approved' },
        { id: 5, date: 'Oct 22, 2023', class: 'Grade 12', section: 'Arts', teacher: 'Linda Scott', teacherImg: '', status: 'Locked' },
    ]);

    const getStatusBadge = (status) => {
        if (status === 'Approved') {
            return <span className="ar-status-badge approved"><FaCheckCircle /> Approved</span>;
        } else {
            return <span className="ar-status-badge locked"><FaLock /> Locked</span>;
        }
    };

    return (
        <div className="approved-records-page">
            {/* Breadcrumb */}
            <div className="ar-breadcrumb">
                Dashboard / Attendance / <span>Approved Records</span>
            </div>

            {/* Header */}
            <div className="ar-header">
                <h1>Approved Attendance Records</h1>
                <p>View and manage finalized attendance logs. These records are locked and cannot be edited without administrator override.</p>
            </div>

            {/* Filter Bar */}
            <div className="ar-filter-bar">
                <div className="ar-search-group">
                    <FaSearch className="ar-search-icon" />
                    <input type="text" placeholder="Search by teacher name..." />
                </div>

                <div className="ar-filters-right">
                    <div className="ar-filter-item">
                        <FaCalendarAlt className="ar-icon-gray" />
                        <span>Oct 2023</span>
                    </div>
                    <div className="ar-filter-item">
                        <FaFilter className="ar-icon-gray" />
                        <span>Class: All</span>
                    </div>
                    <div className="ar-filter-item">
                        <span>Section: All</span>
                    </div>
                    <button className="ar-export-btn">
                        <FaDownload /> Export CSV
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="ar-table-container">
                <table className="ar-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Teacher</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {records.map((record) => (
                            <tr key={record.id}>
                                <td className="ar-date-cell">{record.date}</td>
                                <td>{record.class}</td>
                                <td>{record.section}</td>
                                <td>
                                    <div className="ar-teacher-info">
                                        <div className="ar-avatar-circle">
                                            {record.teacher.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <span>{record.teacher}</span>
                                    </div>
                                </td>
                                <td>{getStatusBadge(record.status)}</td>
                                <td>
                                    <button className="ar-view-btn"><FaEye /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Footer Pagination */}
                <div className="ar-footer">
                    <span className="ar-showing-text">Showing 1-5 of 50 records</span>
                    <div className="ar-pagination-controls">
                        <button className="ar-page-text-btn disabled">Previous</button>
                        <button className="ar-page-text-btn active">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovedRecords;
