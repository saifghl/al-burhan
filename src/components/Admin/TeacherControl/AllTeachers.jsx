import React, { useState } from 'react';
import { FaSearch, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './AllTeachers.css';

const AllTeachers = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All Status');
    const [subjectFilter, setSubjectFilter] = useState('All Subject');
    const [classFilter, setClassFilter] = useState('All Classes');
    const navigate = useNavigate();

    // Mock Data based on the provided design image
    const teachersData = [
        {
            id: 'TCH-001',
            name: 'Sarah Jenkins',
            subject: 'Mathematics',
            contact: '+1 (555) 123-4567',
            classes: ['10-A Math', '11-B Phys'],
            status: 'Active',
            initials: null
        },
        {
            id: 'TCH-002',
            name: 'David Chen',
            subject: 'Science',
            contact: '+1 (555) 987-6543',
            classes: ['09-C Bio', '10-A Chem', 'Home Room'],
            status: 'Active',
            initials: null
        },
        {
            id: 'TCH-003',
            name: 'Emily Ross',
            subject: 'English Literature',
            contact: '+1 (555) 456-7890',
            classes: ['11-A Lit', '12-B Lit'],
            status: 'Inactive',
            initials: null
        },
        {
            id: 'TCH-004',
            name: 'Marcus Johnson',
            subject: 'History',
            contact: '+1 (555) 234-5678',
            classes: ['10-A Hist', '10-B Hist'],
            status: 'Active',
            initials: null
        },
        {
            id: 'TCH-005',
            name: 'Amanda Miller',
            subject: 'Physical Education',
            contact: '+1 (555) 345-6789',
            classes: ['All Grades'],
            status: 'On Leave',
            initials: 'AM'
        }
    ];

    const getStatusClass = (status) => {
        switch (status) {
            case 'Active': return 'active';
            case 'Inactive': return 'inactive';
            case 'On Leave': return 'on-leave';
            default: return '';
        }
    };

    return (
        <div className="all-teachers-container">
            {/* Header */}
            <div className="teachers-header">
                <div className="title-section">
                    <div className="breadcrumbs">
                        Home <span>&gt;</span> Faculty Management <span>&gt;</span> <strong>All Teachers</strong>
                    </div>
                    <h1>All Teachers</h1>
                    <p className="subtitle-desc">Manage faculty profiles, assign classes, and oversee permissions.</p>
                </div>
                <button className="add-btn" onClick={() => navigate('/admin/teacher-profile')}>
                    <FaPlus /> Add New Teacher
                </button>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                <div className="search-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search by Name, ID or Phone..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <select className="filter-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>On Leave</option>
                </select>

                <select className="filter-select" value={subjectFilter} onChange={(e) => setSubjectFilter(e.target.value)}>
                    <option>All Subject</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>History</option>
                    <option>English Literature</option>
                    <option>Physical Education</option>
                </select>

                <select className="filter-select" value={classFilter} onChange={(e) => setClassFilter(e.target.value)}>
                    <option>All Classes</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                </select>

                <button className="clear-btn">Clear</button>
            </div>

            {/* Table */}
            <div className="table-container">
                <table className="teachers-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Teacher</th>
                            <th>Contact</th>
                            <th>Assigned Classes</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachersData.map((teacher, index) => (
                            <tr key={index}>
                                <td>{teacher.id}</td>
                                <td>
                                    <div className="teacher-info">
                                        <div className={`avatar-circle ${teacher.initials ? 'am' : ''}`}>
                                            {teacher.initials || (
                                                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#cbd5e0' }}></div>
                                            )}
                                        </div>
                                        <div className="t-details">
                                            <h4>{teacher.name}</h4>
                                            <span>{teacher.subject}</span>
                                        </div>
                                    </div>
                                </td>
                                <td>{teacher.contact}</td>
                                <td>
                                    <span className="classes-wrapper">
                                        {teacher.classes.map((cls, idx) => (
                                            <span key={idx} className="class-tag">{cls}</span>
                                        ))}
                                    </span>
                                </td>
                                <td>
                                    <div className={`status-badge ${getStatusClass(teacher.status)}`}>
                                        <span className="status-dot"></span>
                                        {teacher.status}
                                    </div>
                                </td>
                                <td>
                                    <button className="view-btn" onClick={() => navigate('/admin/teacher-profile')}>View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Actions */}
            <div className="bottom-actions" style={{ textAlign: 'right', marginTop: '20px' }}>
                <button className="view-submission-btn" onClick={() => navigate('/admin/teacher-submissions')}>
                    View Teacher Submission
                </button>
            </div>

        </div>
    );
};

export default AllTeachers;
