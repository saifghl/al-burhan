import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaHistory, FaSave, FaUserCircle, FaRedo, FaBan, FaPen } from 'react-icons/fa';
import ToggleSwitch from '../PublicContent/ToggleSwitch';
import './UserAccounts.css';

const UserDetails = () => {
    const { userId } = useParams();

    // Mock user data - in a real app fetch based on userId
    const [user, setUser] = useState({
        id: userId || 'STD-001',
        firstName: 'John',
        lastName: 'Doe',
        username: 'jdoe_math',
        email: 'john.doe@edu.com',
        phone: '+1 (555) 012-3456',
        address: '123 Education Lane, Springfield, IL 62704',
        role: 'Teacher',
        status: 'Active',
        lastLogin: 'Oct 24, 09:42 AM',
        permissions: {
            studentRecords: true,
            publishContent: true,
            systemSettings: false
        }
    });

    const [classes] = useState([
        { name: '10-A', subject: 'Mathematics', students: 24 },
        { name: '09-B', subject: 'Algebra', students: 18 }
    ]);

    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="user-accounts-container user-details-page">
            {/* Header */}
            <div className="ua-page-header">
                <div>
                    <h1 className="ua-page-title">User Details</h1>
                    <div className="ua-breadcrumbs">
                        <Link to="/admin/user-accounts">User Accounts</Link> / <span className="active">#{user.id}</span>
                    </div>
                </div>
                <div className="ua-header-actions">
                    <button className="btn-export">
                        <FaHistory /> View Audit Log
                    </button>
                    <button className="btn-create">
                        <FaSave /> Save Changes
                    </button>
                </div>
            </div>

            <div className="ua-details-grid">
                {/* Left Sidebar */}
                <div className="ua-sidebar">
                    {/* Profile Card */}
                    <div className="ua-card profile-card">
                        <div className="profile-avatar-container active-ring">
                            <div className="profile-avatar">
                                <FaUserCircle />
                            </div>
                            <div className="online-indicator"></div>
                        </div>
                        <h2>{user.firstName} {user.lastName}</h2>
                        <div className="profile-email">{user.email}</div>
                        <div className="profile-badges">
                            <span className={`role-badge ${user.role.toLowerCase()}`}>{user.role}</span>
                            <span className={`status-badge ${user.status.toLowerCase()}`}>{user.status}</span>
                        </div>
                        <div className="profile-meta">
                            <div className="meta-item">
                                <div className="label">User ID</div>
                                <div className="value">#{user.id}</div>
                            </div>
                            <div className="meta-item right">
                                <div className="label">Last Login</div>
                                <div className="value">{user.lastLogin}</div>
                            </div>
                        </div>
                    </div>

                    {/* Account Actions */}
                    <div className="ua-card">
                        <h3 className="card-title">Account Actions</h3>
                        <div className="action-item">
                            <span>Reset Password</span>
                            <FaRedo className="action-icon" />
                        </div>
                        <div className="suspend-box">
                            <span>Suspend Account</span>
                            <FaBan />
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="ua-main-content">
                    {/* General Information */}
                    <div className="ua-card">
                        <div className="card-header">
                            <h3 className="card-title">General Information</h3>
                            <button className="btn-edit-link">Edit Details</button>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={user.firstName} onChange={handleInputChange} />
                            </div>
                            <div className="input-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={user.lastName} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="input-row">
                            <div className="input-group">
                                <label>Username</label>
                                <input type="text" name="username" value={user.username} onChange={handleInputChange} />
                            </div>
                            <div className="input-group">
                                <label>Phone Number</label>
                                <input type="text" name="phone" value={user.phone} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="input-group">
                            <label>Address</label>
                            <input type="text" name="address" value={user.address} style={{ width: '100%' }} onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Permissions & Access */}
                    <div className="ua-card">
                        <h3 className="card-title">Permissions & Access</h3>
                        <p className="card-subtitle">Manage what this user can view and edit.</p>

                        <div className="permission-row">
                            <div>
                                <div className="perm-title">Student Records Access</div>
                                <div className="perm-desc">Can view and edit student grades and attendance.</div>
                            </div>
                            <ToggleSwitch checked={user.permissions.studentRecords} onChange={(v) => setUser({ ...user, permissions: { ...user.permissions, studentRecords: v } })} />
                        </div>
                        <div className="permission-row">
                            <div>
                                <div className="perm-title">Publish Content</div>
                                <div className="perm-desc">Can post notices and public content.</div>
                            </div>
                            <ToggleSwitch checked={user.permissions.publishContent} onChange={(v) => setUser({ ...user, permissions: { ...user.permissions, publishContent: v } })} />
                        </div>
                        <div className="permission-row no-border">
                            <div>
                                <div className="perm-title">System Settings</div>
                                <div className="perm-desc">Can modify global application settings.</div>
                            </div>
                            <ToggleSwitch checked={user.permissions.systemSettings} onChange={(v) => setUser({ ...user, permissions: { ...user.permissions, systemSettings: v } })} />
                        </div>
                    </div>

                    {/* Associated Classes */}
                    <div className="ua-card">
                        <div className="card-header">
                            <h3 className="card-title">Associated Classes</h3>
                            <button className="btn-view-all">
                                View All <span>&rarr;</span>
                            </button>
                        </div>
                        <div className="table-responsive">
                            <table className="ua-simple-table">
                                <thead>
                                    <tr>
                                        <th>Class Name</th>
                                        <th>Subject</th>
                                        <th>Students</th>
                                        <th className="text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {classes.map((cls, idx) => (
                                        <tr key={idx}>
                                            <td className="fw-600">{cls.name}</td>
                                            <td className="text-gray">{cls.subject}</td>
                                            <td>
                                                <div className="student-avatars">
                                                    <div className="avatar-group">
                                                        <div className="avatar sm"></div>
                                                        <div className="avatar sm overlap"></div>
                                                    </div>
                                                    <span className="count-badge">+{cls.students}</span>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <FaPen className="action-icon-sm" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
