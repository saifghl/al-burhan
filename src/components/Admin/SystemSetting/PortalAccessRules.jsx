import React, { useState } from 'react';
import {
    FaGlobe,
    FaEye,
    FaCloudUploadAlt,
    FaPaperPlane,
    FaHistory,
    FaLock,
    FaSave,
    FaExclamationTriangle,
    FaCheck
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './PortalAccessRules.css';

const PortalAccessRules = () => {

    // Initial Permissions Data
    // 0: Student, 1: Parent, 2: Teacher, 3: Donor, 4: Admin
    // For Admin: always true/active
    const [permissions, setPermissions] = useState({
        portalAccess: { student: true, parent: true, teacher: true, donor: false },
        viewResults: { student: true, parent: true, teacher: true, donor: false },
        uploadMaterials: { student: false, parent: false, teacher: true, donor: false },
        sendMessages: { student: false, parent: false, teacher: true, donor: false },
        viewHistory: { student: false, parent: true, teacher: false, donor: true },
    });

    const togglePermission = (key, role) => {
        setPermissions(prev => ({
            ...prev,
            [key]: {
                ...prev[key],
                [role]: !prev[key][role]
            }
        }));
    };

    const roles = [
        { key: 'student', label: 'Student', id: 1 },
        { key: 'parent', label: 'Parent', id: 2 },
        { key: 'teacher', label: 'Teacher', id: 3 },
        { key: 'donor', label: 'Donor', id: 4 },
        { key: 'admin', label: 'Admin', id: null, isLocked: true }
    ];

    return (
        <div className="par-container">
            <AdminMobileNav />

            <div className="par-header">
                <div className="par-title-block">
                    <span className="par-breadcrumb">Settings {'>'} Access Control</span>
                    <div className="par-title">
                        <h1>Portal Access Rules</h1>
                        <p>Manage role-based permissions for the web portal. Changes affect user access immediately after saving.</p>
                    </div>
                </div>
                <div className="par-header-actions">
                    <button className="btn-discard">Discard</button>
                    <button className="btn-save-rules"><FaSave /> Save Rules</button>
                </div>
            </div>

            <div className="par-content-scroll">

                <div className="par-matrix-card">
                    <div className="matrix-legend">
                        <h3>Access Matrix</h3>
                        <div className="legend-items">
                            <span><span className="legend-dot dot-green"></span>Enabled</span>
                            <span><span className="legend-dot dot-gray"></span>Disabled</span>
                        </div>
                    </div>

                    <div className="par-matrix-wrapper">
                        <table className="par-matrix-table">
                            <thead>
                                <tr>
                                    <th className="col-permission">Permission Control</th>
                                    {roles.map(role => (
                                        <th key={role.key}>
                                            <div className="role-header">
                                                <span className="role-name">{role.label}</span>
                                                {role.id ? (
                                                    <span className="role-badge">Role ID: {role.id}</span>
                                                ) : (
                                                    <FaLock size={10} color="#64748b" />
                                                )}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {/* Row 1: Master Switch */}
                                <tr className="permission-row" style={{ background: '#fcfcfc' }}>
                                    <td>
                                        <div className="permission-info">
                                            <div className="perm-icon-wrapper" style={{ background: '#eff6ff', color: '#3b82f6' }}>
                                                <FaGlobe />
                                            </div>
                                            <div className="permission-text">
                                                <h4>Portal Access</h4>
                                                <p>Master switch for login capability</p>
                                            </div>
                                        </div>
                                    </td>
                                    {roles.map(role => (
                                        <td key={role.key} className="cell-center">
                                            {role.isLocked ? (
                                                <span className="status-active-badge">ACTIVE</span>
                                            ) : (
                                                <label className="par-switch">
                                                    <input
                                                        type="checkbox"
                                                        checked={permissions.portalAccess[role.key]}
                                                        onChange={() => togglePermission('portalAccess', role.key)}
                                                    />
                                                    <span className="par-slider"></span>
                                                </label>
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                {/* Category: Academics */}
                                <tr className="category-row">
                                    <td colSpan={roles.length + 1}>Academics</td>
                                </tr>

                                <tr className="permission-row">
                                    <td>
                                        <div className="permission-info">
                                            <div className="perm-icon-wrapper is-white" style={{ background: 'white', border: '1px solid #f1f5f9', color: '#64748b' }}>
                                                <FaEye />
                                            </div>
                                            <div className="permission-text">
                                                <h4>View Exam Results</h4>
                                            </div>
                                        </div>
                                    </td>
                                    {roles.map(role => (
                                        <td key={role.key} className="cell-center">
                                            {role.isLocked ? (
                                                <FaCheck className="status-check" />
                                            ) : (
                                                role.key === 'donor' ? (
                                                    <span className="status-dot-cell"></span>
                                                ) : (
                                                    <label className="par-switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={permissions.viewResults[role.key]}
                                                            onChange={() => togglePermission('viewResults', role.key)}
                                                        />
                                                        <span className="par-slider"></span>
                                                    </label>
                                                )
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                <tr className="permission-row">
                                    <td>
                                        <div className="permission-info">
                                            <div className="perm-icon-wrapper is-white" style={{ background: 'white', border: '1px solid #f1f5f9', color: '#64748b' }}>
                                                <FaCloudUploadAlt />
                                            </div>
                                            <div className="permission-text">
                                                <h4>Upload Course Material</h4>
                                            </div>
                                        </div>
                                    </td>
                                    {roles.map(role => (
                                        <td key={role.key} className="cell-center">
                                            {role.isLocked ? (
                                                <FaCheck className="status-check" />
                                            ) : (
                                                (role.key === 'student' || role.key === 'parent' || role.key === 'donor') ? (
                                                    <span className="status-dot-cell"></span>
                                                ) : (
                                                    <label className="par-switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={permissions.uploadMaterials[role.key]}
                                                            onChange={() => togglePermission('uploadMaterials', role.key)}
                                                        />
                                                        <span className="par-slider"></span>
                                                    </label>
                                                )
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                {/* Category: Communication */}
                                <tr className="category-row">
                                    <td colSpan={roles.length + 1}>Communication</td>
                                </tr>

                                <tr className="permission-row">
                                    <td>
                                        <div className="permission-info">
                                            <div className="perm-icon-wrapper is-white" style={{ background: 'white', border: '1px solid #f1f5f9', color: '#64748b' }}>
                                                <FaPaperPlane />
                                            </div>
                                            <div className="permission-text">
                                                <h4>Send Messages</h4>
                                            </div>
                                        </div>
                                    </td>
                                    {roles.map(role => (
                                        <td key={role.key} className="cell-center">
                                            {role.isLocked ? (
                                                <FaCheck className="status-check" />
                                            ) : (
                                                (role.key === 'student' || role.key === 'parent' || role.key === 'donor') ? (
                                                    <span className="status-dot-cell"></span>
                                                ) : (
                                                    <label className="par-switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={permissions.sendMessages[role.key]}
                                                            onChange={() => togglePermission('sendMessages', role.key)}
                                                        />
                                                        <span className="par-slider"></span>
                                                    </label>
                                                )
                                            )}
                                        </td>
                                    ))}
                                </tr>

                                {/* Category: Finance */}
                                <tr className="category-row">
                                    <td colSpan={roles.length + 1}>Finance</td>
                                </tr>

                                <tr className="permission-row">
                                    <td>
                                        <div className="permission-info">
                                            <div className="perm-icon-wrapper is-white" style={{ background: 'white', border: '1px solid #f1f5f9', color: '#64748b' }}>
                                                <FaHistory />
                                            </div>
                                            <div className="permission-text">
                                                <h4>View Donation History</h4>
                                            </div>
                                        </div>
                                    </td>
                                    {roles.map(role => (
                                        <td key={role.key} className="cell-center">
                                            {role.isLocked ? (
                                                <FaCheck className="status-check" />
                                            ) : (
                                                (role.key === 'student' || role.key === 'teacher') ? (
                                                    <span className="status-dot-cell"></span>
                                                ) : (
                                                    <label className="par-switch">
                                                        <input
                                                            type="checkbox"
                                                            checked={permissions.viewHistory[role.key]}
                                                            onChange={() => togglePermission('viewHistory', role.key)}
                                                        />
                                                        <span className="par-slider"></span>
                                                    </label>
                                                )
                                            )}
                                        </td>
                                    ))}
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="danger-zone-card">
                    <div className="danger-info">
                        <div className="alert-icon-box">
                            <FaExclamationTriangle />
                        </div>
                        <div className="danger-text">
                            <h4>Reset Default Configuration</h4>
                            <p>This will revert all permission toggles to their original system state. Custom role adjustments will be lost.</p>
                        </div>
                    </div>
                    <button className="btn-reset-default">Reset to Defaults</button>
                </div>

            </div>
        </div>
    );
};

export default PortalAccessRules;
