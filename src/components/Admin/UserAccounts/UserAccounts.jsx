import React, { useState } from 'react';
import { FaPlus, FaCloudDownloadAlt, FaSearch, FaEllipsisV, FaFilter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './UserAccounts.css';

const UserAccounts = () => {
    // State
    const [currentPage, setCurrentPage] = useState(1);
    const [users] = useState([
        { id: 'John Doe', userId: '#STD-001', username: 'jdoe_math', role: 'Teacher', status: 'Active', lastLogin: 'Oct 24, 2023 09:42 AM', email: 'john.doe@edu.com' },
        { id: 'Sarah Smith', userId: '#STD-002', username: 'ssmith_eng', role: 'Student', status: 'Active', lastLogin: 'Oct 23, 2023 02:15 PM', email: 'sarah.s@edu.com' },
        { id: 'Michael Connor', userId: '#ADM-045', username: 'm_connor', role: 'Admin', status: 'Active', lastLogin: 'Oct 24, 2023 08:00 AM', email: 'm.connor@edu.com' },
        { id: 'Emily Blunt', userId: '#STD-003', username: 'emily_b', role: 'Student', status: 'Suspended', lastLogin: 'Sep 12, 2023 11:30 AM', email: 'emily.b@edu.com' },
        { id: 'David Ross', userId: '#PAR-102', username: 'dross_p', role: 'Parent', status: 'Inactive', lastLogin: '--', email: 'david.r@edu.com' },
        { id: 'Alice Cooper', userId: '#DNR-009', username: 'a_cooper', role: 'Donor', status: 'Active', lastLogin: 'Oct 20, 2023 10:00 AM', email: 'alice@donate.org' },
        { id: 'Robert Brown', userId: '#STD-004', username: 'rob_brown', role: 'Student', status: 'Active', lastLogin: 'Oct 24, 2023 08:45 AM', email: 'rob.b@edu.com' },
        { id: 'Linda White', userId: '#TCH-002', username: 'linda_sci', role: 'Teacher', status: 'Active', lastLogin: 'Oct 22, 2023 03:20 PM', email: 'linda.w@edu.com' },
        { id: 'James Green', userId: '#PAR-103', username: 'james_g', role: 'Parent', status: 'Active', lastLogin: 'Oct 21, 2023 06:15 PM', email: 'james.g@edu.com' },
        { id: 'Karen Black', userId: '#ADM-046', username: 'karen_b', role: 'Admin', status: 'Active', lastLogin: 'Oct 24, 2023 09:00 AM', email: 'karen.b@edu.com' },
    ]);

    const getRoleClass = (role) => {
        switch (role.toLowerCase()) {
            case 'teacher': return 'role-teacher';
            case 'student': return 'role-student';
            case 'admin': return 'role-admin';
            case 'parent': return 'role-parent';
            case 'donor': return 'role-donor';
            default: return '';
        }
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'active': return 'status-active';
            case 'suspended': return 'status-suspended';
            case 'inactive': return 'status-inactive';
            default: return '';
        }
    };

    return (
        <div className="user-accounts-container">
            {/* Header */}
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 10px 0' }}>All User Accounts</h1>
                <p style={{ color: '#64748b', margin: 0 }}>Manage access, roles, and permissions for all registered users.</p>
            </div>

            <div className="ua-header-controls">
                <button className="btn-export">
                    <FaCloudDownloadAlt /> Export CSV
                </button>
                <Link to="/admin/user-accounts/create" style={{ textDecoration: 'none' }}>
                    <button className="btn-create">
                        Create User Account
                    </button>
                </Link>
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="filter-group search">
                    <label className="filter-label">Search Users</label>
                    <div style={{ position: 'relative' }}>
                        <FaSearch style={{ position: 'absolute', left: '12px', top: '12px', color: '#94a3b8' }} />
                        <input type="text" className="filter-input" placeholder="Name, ID, or Username" style={{ width: '100%', paddingLeft: '35px', boxSizing: 'border-box' }} />
                    </div>
                </div>
                <div className="filter-group">
                    <label className="filter-label">Role</label>
                    <select className="filter-select">
                        <option>All Roles</option>
                        <option>Admin</option>
                        <option>Teacher</option>
                        <option>Student</option>
                        <option>Parent</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label className="filter-label">Status</label>
                    <select className="filter-select">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                        <option>Suspended</option>
                    </select>
                </div>
                <div className="filter-group">
                    <label className="filter-label">Last Login</label>
                    <input type="date" className="filter-input" />
                </div>
                <button className="btn-clear">Clear</button>
            </div>

            {/* Table */}
            <div className="ua-table-container">
                <table className="ua-table">
                    <thead>
                        <tr>
                            <th style={{ width: '40px' }}><input type="checkbox" /></th>
                            <th>User ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Last Login</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <Link to={`/admin/user-accounts/${user.userId.replace('#', '')}`} style={{ color: '#64748b', fontWeight: '500', textDecoration: 'none' }}>
                                        {user.userId}
                                    </Link>
                                </td>
                                <td>
                                    <div className="ua-user-cell">
                                        <div className="ua-avatar">
                                            {user.id.split(' ').map(n => n[0]).join('')}
                                        </div>
                                        <div className="ua-user-info">
                                            <Link to={`/admin/user-accounts/${user.userId.replace('#', '')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <h4>{user.id}</h4>
                                            </Link>
                                            <span>{user.email}</span>
                                        </div>
                                    </div>
                                </td>
                                <td style={{ fontWeight: '500', color: '#334155' }}>{user.username}</td>
                                <td>
                                    <span className={`role-badge ${getRoleClass(user.role)}`}>{user.role}</span>
                                </td>
                                <td>
                                    <div className={`status-badge ${getStatusClass(user.status)}`}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></div>
                                        {user.status}
                                    </div>
                                </td>
                                <td style={{ color: '#64748b', fontSize: '13px' }}>{user.lastLogin}</td>
                                <td>
                                    <FaEllipsisV style={{ color: '#94a3b8', cursor: 'pointer' }} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="ua-footer">
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Showing 1 to {users.length} of 50 users</span>
                    <div className="pagination">
                        <button
                            className="page-btn"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        >
                            Previous
                        </button>
                        {[1, 2, 3].map(page => (
                            <button
                                key={page}
                                className={`page-btn ${currentPage === page ? 'active' : ''}`}
                                onClick={() => setCurrentPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="page-btn"
                            onClick={() => setCurrentPage(prev => prev + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
                <Link to="/admin/user-accounts/permissions" style={{ textDecoration: 'none' }}>
                    <button className="btn-permissions">
                        Set rules and permission
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default UserAccounts;
