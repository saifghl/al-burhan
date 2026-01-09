import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TeacherSubmissions.css';
import { FaHistory, FaFilter, FaCheck, FaTimes, FaEllipsisH, FaSearch } from 'react-icons/fa';

const TeacherSubmissions = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('All Submission types');
    const [filterClass, setFilterClass] = useState('All Classes');

    // Dummy data for stats
    const stats = [
        { title: 'Pending Review', count: 12, sub: 'Requires immediate attention', color: 'orange', icon: '...' },
        { title: 'Approved Today', count: 5, sub: '+2 from yesterday', color: 'green', icon: '✔' },
        { title: 'Rejected Today', count: 1, sub: 'Returned for correction', color: 'red', icon: '✖' }
    ];

    // Dummy data for table
    const submissions = [
        {
            id: 1,
            teacher: 'John Doe',
            email: 'j.doe@school.edu',
            type: 'Exam Results',
            typeColor: 'purple',
            class: 'Class 10-A',
            subject: 'Mathematics',
            date: 'Oct 24, 2023',
            status: 'Pending'
        },
        {
            id: 2,
            teacher: 'Sarah Smith',
            email: 's.smith@school.edu',
            type: 'Attendance',
            typeColor: 'blue',
            class: 'Class 5-B',
            subject: 'Daily Log',
            date: 'Oct 24, 2023',
            status: 'Pending'
        },
        {
            id: 3,
            teacher: 'Michael Chen',
            email: 'm.chen@school.edu',
            type: 'Notice',
            typeColor: 'orange',
            class: 'All Students',
            subject: 'Sports Day',
            date: 'Oct 23, 2023',
            status: 'Pending'
        },
        {
            id: 4,
            teacher: 'Emily Rose',
            email: 'e.rose@school.edu',
            type: 'Activity',
            typeColor: 'teal',
            class: 'Class 8-C',
            subject: 'Science Project',
            date: 'Oct 23, 2023',
            status: 'Pending'
        },
        {
            id: 5,
            teacher: 'Robert Fox',
            email: 'r.fox@school.edu',
            type: 'Exam Results',
            typeColor: 'purple',
            class: 'Class 9-A',
            subject: 'Physics',
            date: 'Oct 22, 2023',
            status: 'Pending'
        }
    ];

    return (
        <div className="teacher-submissions-container">
            {/* Breadcrumb */}
            <div className="submission-breadcrumb">
                Home / Approvals / <span>Teachers</span>
            </div>

            {/* Header */}
            <div className="submission-header">
                <div>
                    <h1>Pending Teacher Submissions</h1>
                    <p>Review and manage data submitted by teachers before publishing.</p>
                </div>
                <button className="view-history-btn">
                    <FaHistory /> View History
                </button>
            </div>

            {/* Stats Cards */}
            <div className="stats-container">
                {stats.map((stat, index) => (
                    <div key={index} className={`stat-card ${stat.color}`}>
                        <div className="stat-header">
                            <span>{stat.title}</span>
                            <span className={`status-icon ${stat.color}`}>{stat.icon === '...' ? <FaEllipsisH /> : stat.icon === '✔' ? <FaCheck /> : <FaTimes />}</span>
                        </div>
                        <h2>{stat.count}</h2>
                        <p className={stat.color === 'green' ? 'positive' : ''}>{stat.sub}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="search-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by teacher name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filters-right">
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                        <option>All Submission types</option>
                        <option>Exam Results</option>
                        <option>Attendance</option>
                    </select>
                    <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)}>
                        <option>All Classes</option>
                        <option>Class 10-A</option>
                        <option>Class 5-B</option>
                    </select>
                    <button className="filter-btn"><FaFilter /> Filter</button>
                </div>
            </div>

            {/* Table */}
            <div className="submissions-table-container">
                <table className="submissions-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}><input type="checkbox" /></th>
                            <th>Teacher Name</th>
                            <th>Submission Type</th>
                            <th>Class/Subject</th>
                            <th>Date Submitted</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((item) => (
                            <tr key={item.id}>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <div className="teacher-info">
                                        <div className="avatar-circle"></div>
                                        <div>
                                            <div className="t-name">{item.teacher}</div>
                                            <div className="t-email">{item.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className={`type-badge ${item.typeColor}`}>
                                        {/* Icons could be mapped here based on type */}
                                        {item.type}
                                    </span>
                                </td>
                                <td>
                                    <div className="class-info">
                                        <span className="c-name">{item.class}</span>
                                        <span className="c-sub">{item.subject}</span>
                                    </div>
                                </td>
                                <td className="date-cell">{item.date}</td>
                                <td>
                                    <span className="status-badge pending">
                                        • {item.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="icon-btn check"><FaCheck /></button>
                                        <button className="icon-btn cross"><FaTimes /></button>
                                        <button className="review-btn" onClick={() => navigate(`/admin/teacher-submissions/${item.id}`)}>Review</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <span>Showing 1 to 5 of 12 results</span>
                    <div className="page-controls">
                        <span className="prev">Previous</span>
                        <span className="next active">Next</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherSubmissions;
