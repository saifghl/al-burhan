import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaPlus, FaRedo, FaEllipsisV, FaEye } from 'react-icons/fa';
import './StudentRecords.css';

const StudentList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data based on image
    const students = [
        { id: 'MDR-23-001', name: 'Ahmed Ali', class: 'Class 5', section: 'A', parent: 'Mohammed Ali', status: 'Active' },
        { id: 'MDR-23-042', name: 'Zainab Khan', class: 'Class 5', section: 'B', parent: 'Omar Khan', status: 'Active' },
        { id: 'MDR-22-115', name: 'Ibrahim Yusuf', class: 'Class 6', section: 'A', parent: 'Yusuf Ibrahim', status: 'Passed' },
        { id: 'MDR-23-088', name: 'Fatima Ali', class: 'Class 4', section: 'C', parent: 'Hassan Ali', status: 'Left' },
        { id: 'MDR-23-012', name: 'Bilal Ahmed', class: 'Class 5', section: 'A', parent: 'Ahmed Raza', status: 'Active' },
    ];

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return 'status-active';
            case 'passed': return 'status-passed';
            case 'left': return 'status-left';
            default: return '';
        }
    };

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    };

    return (
        <div className="student-records-container">
            {/* Header */}
            <div className="sr-page-header">
                <div className="sr-title">
                    <h1>All Students</h1>
                    <p>Manage, search, and view all student records.</p>
                </div>
                <button className="btn-add-student">
                    <FaPlus /> Add New Student
                </button>
            </div>

            {/* Filters */}
            <div className="sr-filters">
                <div className="search-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by Name or Madarsa ID"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="filter-wrapper">
                    <label>Class</label>
                    <select className="filter-select">
                        <option>All Classes</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                    </select>
                </div>
                <div className="filter-wrapper">
                    <label>Status</label>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Passed</option>
                        <option>Left</option>
                    </select>
                </div>
                <div className="filter-wrapper">
                    <label>Year</label>
                    <select className="filter-select">
                        <option>All Years</option>
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
                <button className="btn-reset">
                    <FaRedo /> Reset
                </button>
            </div>

            {/* Table */}
            <div className="sr-table-container">
                <table className="sr-table">
                    <thead>
                        <tr>
                            <th>Madarsa ID</th>
                            <th>Student Name</th>
                            <th>Class</th>
                            <th>Section</th>
                            <th>Parent Name</th>
                            <th>Status</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>
                                    <div className="student-info-cell">
                                        <div className="student-avatar-sm" style={{
                                            backgroundColor: student.name.startsWith('Z') || student.name.startsWith('F') ? '#dbeafe' : '#f1f5f9',
                                            color: student.name.startsWith('Z') || student.name.startsWith('F') ? '#2563eb' : '#64748b'
                                        }}>
                                            {getInitials(student.name)}
                                        </div>
                                        <span className="student-name">{student.name}</span>
                                    </div>
                                </td>
                                <td>{student.class}</td>
                                <td>{student.section}</td>
                                <td>{student.parent}</td>
                                <td>
                                    <span className={`status-badge ${getStatusClass(student.status)}`}>
                                        {student.status}
                                    </span>
                                </td>
                                <td className="text-right">
                                    <button
                                        className="action-menu-btn"
                                        onClick={() => navigate(`/admin/student-records/${student.id}`)}
                                        title="View Profile"
                                    >
                                        <FaEye />
                                    </button>
                                    <button className="action-menu-btn">
                                        <FaEllipsisV />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="sr-pagination">
                    <span className="pagination-info">Showing 1 to 5 of 42 results</span>
                    <div className="pagination-controls">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span style={{ padding: '6px' }}>...</span>
                        <button className="page-btn">8</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentList;
