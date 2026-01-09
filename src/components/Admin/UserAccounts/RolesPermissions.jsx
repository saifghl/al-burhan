import React, { useState } from 'react';
import { FaEdit, FaEye, FaEyeSlash, FaSearch, FaSave } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './UserAccounts.css';

const RolesPermissions = () => {
    // Permissions Structure
    // 0 = No Access, 1 = View Only, 2 = Full Edit
    const [permissions, setPermissions] = useState([
        { id: 1, category: 'Academics', module: 'Grading System', admin: 2, teacher: 2, student: 1, parent: 1, donor: 0 },
        { id: 2, category: 'Academics', module: 'Course Schedules', admin: 2, teacher: 1, student: 1, parent: 1, donor: 0 },
        { id: 3, category: 'Administration', module: 'User Accounts', admin: 2, teacher: 0, student: 0, parent: 0, donor: 0 },
        { id: 4, category: 'Administration', module: 'Payroll & Finance', admin: 2, teacher: 0, student: 0, parent: 0, donor: 0 },
        { id: 5, category: 'Communication', module: 'Announcements', admin: 2, teacher: 2, student: 1, parent: 1, donor: 1 },
    ]);

    const handlePermissionChange = (id, role, level) => {
        setPermissions(permissions.map(p => p.id === id ? { ...p, [role]: level } : p));
    };

    const renderToggle = (id, role, currentLevel) => {
        return (
            <div className="matrix-cell">
                <FaEyeSlash
                    className={`perm-icon ${currentLevel === 0 ? 'active' : ''}`}
                    onClick={() => handlePermissionChange(id, role, 0)}
                    title="No Access"
                />
                <FaEye
                    className={`perm-icon ${currentLevel === 1 ? 'active' : ''}`}
                    onClick={() => handlePermissionChange(id, role, 1)}
                    title="View Only"
                />
                <FaEdit
                    className={`perm-icon ${currentLevel === 2 ? 'active' : ''}`}
                    onClick={() => handlePermissionChange(id, role, 2)}
                    title="Full Edit"
                />
            </div>
        );
    };

    return (
        <div className="user-accounts-container">
            <div style={{ marginBottom: '30px' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e293b', margin: '0 0 10px 0' }}>Roles & Permissions</h1>
                <p style={{ color: '#64748b', margin: 0 }}>Manage access levels and configure module visibility for all system roles.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div style={{ position: 'relative', width: '300px' }}>
                    <FaSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
                    <input type="text" className="filter-input" placeholder="Search modules..." style={{ width: '100%', paddingLeft: '35px' }} />
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#64748b' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span> Full Edit</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }}></span> View Only</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#cbd5e1' }}></span> No Access</div>
                </div>
            </div>

            <div className="ua-table-container" style={{ padding: '20px' }}>
                <div className="permissions-matrix">
                    <div className="matrix-header">
                        <div style={{ textAlign: 'left', paddingLeft: '20px', fontWeight: '600', color: '#64748b' }}>Module Name</div>
                        <div>
                            <div className="matrix-role-header">Admin</div>
                            <span className="matrix-role-badge role-admin">System Owner</span>
                        </div>
                        <div>
                            <div className="matrix-role-header">Teacher</div>
                            <span className="matrix-role-badge role-teacher">Faculty</span>
                        </div>
                        <div>
                            <div className="matrix-role-header">Student</div>
                            <span className="matrix-role-badge role-student">Learner</span>
                        </div>
                        <div>
                            <div className="matrix-role-header">Parent</div>
                            <span className="matrix-role-badge role-parent">Guardian</span>
                        </div>
                        <div>
                            <div className="matrix-role-header">Donor</div>
                            <span className="matrix-role-badge role-donor">External</span>
                        </div>
                    </div>

                    {/* Group by Category (Simplified for now, assuming sorted or just listing) */}
                    {permissions.map((perm) => (
                        <div className="matrix-row" key={perm.id}>
                            <div style={{ paddingLeft: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                {/* Icon placeholder */}
                                <div style={{ color: '#94a3b8' }}>🔹</div>
                                <div>
                                    <div style={{ fontWeight: '600', color: '#1e293b' }}>{perm.module}</div>
                                    <div style={{ fontSize: '12px', color: '#94a3b8' }}>{perm.category}</div>
                                </div>
                            </div>
                            {renderToggle(perm.id, 'admin', perm.admin)}
                            {renderToggle(perm.id, 'teacher', perm.teacher)}
                            {renderToggle(perm.id, 'student', perm.student)}
                            {renderToggle(perm.id, 'parent', perm.parent)}
                            {renderToggle(perm.id, 'donor', perm.donor)}
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                <Link to="/admin/user-accounts">
                    <button className="btn-export" style={{ border: '1px solid #cbd5e1' }}>Cancel</button>
                </Link>
                <button className="btn-create">
                    <FaSave /> Save Changes
                </button>
            </div>
        </div>
    );
};

export default RolesPermissions;
