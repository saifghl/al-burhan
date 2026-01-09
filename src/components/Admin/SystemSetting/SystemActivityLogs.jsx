import React, { useState } from 'react';
import {
    FaDownload,
    FaFilter,
    FaSearch,
    FaSyncAlt,
    FaLock,
    FaChevronLeft,
    FaChevronRight
} from 'react-icons/fa';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './SystemActivityLogs.css';

const SystemActivityLogs = () => {
    // Mock Data
    const logs = [
        {
            id: 1,
            adminName: 'Maulana Yusuf',
            adminId: 'ADM-001',
            avatarColor: '#dcfce7',
            textColor: '#166534',
            initials: 'MY',
            action: 'Updated Student Fee Record',
            actionColor: '#16a34a',
            module: 'Finance',
            moduleClass: 'mod-finance',
            date: 'Oct 24, 2023',
            time: '10:45 AM',
            ip: '192.168.1.45'
        },
        {
            id: 2,
            adminName: 'Sister Khadija',
            adminId: 'ADM-024',
            avatarColor: '#ffedd5',
            textColor: '#9a3412',
            initials: 'SK',
            action: 'Removed Archived Course',
            actionColor: '#dc2626',
            module: 'Academics',
            moduleClass: 'mod-academics',
            date: 'Oct 23, 2023',
            time: '02:15 PM',
            ip: '10.0.0.12'
        },
        {
            id: 3,
            adminName: 'Ahmed H.',
            adminId: 'IT-002',
            avatarColor: '#dbeafe',
            textColor: '#1e40af',
            initials: 'AH',
            action: 'System Backup Initiated',
            actionColor: '#2563eb',
            module: 'System',
            moduleClass: 'mod-system',
            date: 'Oct 23, 2023',
            time: '09:00 AM',
            ip: '127.0.0.1'
        },
        {
            id: 4,
            adminName: 'Maulana Yusuf',
            adminId: 'ADM-001',
            avatarColor: '#dcfce7',
            textColor: '#166534',
            initials: 'MY',
            action: 'Approved New Student Application',
            actionColor: '#16a34a',
            module: 'Admission',
            moduleClass: 'mod-admission',
            date: 'Oct 22, 2023',
            time: '04:30 PM',
            ip: '192.168.1.45'
        },
        {
            id: 5,
            adminName: 'Fatima A.',
            adminId: 'HR-012',
            avatarColor: '#ffe4e6',
            textColor: '#9f1239',
            initials: 'FA',
            action: 'Edited Staff Profile (Phone)',
            actionColor: '#f59e0b',
            module: 'Staff HR',
            moduleClass: 'mod-hr',
            date: 'Oct 22, 2023',
            time: '11:12 AM',
            ip: '192.168.1.88'
        }
    ];

    const loginLogs = [
        {
            id: 1,
            name: 'Ahmed Khan',
            email: 'ahmed.k@madarsa.edu',
            role: 'Admin',
            roleClass: 'role-admin',
            loginTime: 'Oct 24, 09:00 AM',
            logoutTime: '--',
            ip: '192.168.1.1',
            status: 'Success',
            statusClass: 'status-success',
            avatarColor: '#dbeafe',
            textColor: '#1e40af',
            initials: 'AK'
        },
        {
            id: 2,
            name: 'Fatima Ali',
            email: 'fatima.a@madarsa.edu',
            role: 'Teacher',
            roleClass: 'role-teacher',
            loginTime: 'Oct 24, 08:55 AM',
            logoutTime: 'Oct 24, 08:58 AM',
            ip: '192.168.1.45',
            status: 'Success',
            statusClass: 'status-success',
            avatarColor: '#ffedd5',
            textColor: '#9a3412',
            initials: 'FA'
        },
        {
            id: 3,
            name: 'Unknown',
            email: 'Alert: Suspicious',
            isSuspicious: true,
            role: '--',
            roleClass: '',
            loginTime: 'Oct 24, 03:00 AM',
            logoutTime: '--',
            ip: '14.23.100.2',
            ipClass: 'ip-danger',
            status: 'Failed',
            statusClass: 'status-failed',
            avatarColor: '#fee2e2',
            textColor: '#dc2626',
            initials: '?'
        },
        {
            id: 4,
            name: 'Muhammad Siddiqui',
            email: 'm.siddiqui@madarsa.edu',
            role: 'Staff',
            roleClass: 'role-staff',
            loginTime: 'Oct 23, 04:15 PM',
            logoutTime: 'Oct 23, 06:00 PM',
            ip: '192.168.1.12',
            status: 'Success',
            statusClass: 'status-success',
            avatarColor: '#dbeafe',
            textColor: '#1e40af',
            initials: 'MS'
        },
        {
            id: 5,
            name: 'Zainab Rehman',
            email: 'zainab.r@madarsa.edu',
            role: 'Teacher',
            roleClass: 'role-teacher',
            loginTime: 'Oct 23, 08:30 AM',
            logoutTime: 'Oct 23, 02:45 PM',
            ip: '192.168.1.55',
            status: 'Success',
            statusClass: 'status-success',
            avatarColor: '#f3e8ff',
            textColor: '#7e22ce',
            initials: 'ZR'
        }
    ];

    const auditLogs = [
        {
            id: 1,
            recordType: 'Student',
            recordTypeClass: 'rec-student',
            recordId: 'STU-2023-882',
            changedField: 'Guardian Phone',
            oldValue: '+92 300 1234567',
            newValue: '+92 300 9876543',
            changedBy: 'M. Khan',
            initials: 'MK',
            avatarColor: '#f3e8ff',
            textColor: '#7e22ce',
            date: 'Oct 24, 2023',
            time: '10:42 AM'
        },
        {
            id: 2,
            recordType: 'Donation',
            recordTypeClass: 'rec-donation',
            recordId: 'DON-8821',
            changedField: 'Amount',
            oldValue: '$500.00',
            newValue: '$50.00',
            changedBy: 'Admin User',
            initials: 'AA',
            avatarColor: '#dcfce7',
            textColor: '#166534',
            date: 'Oct 24, 2023',
            time: '09:15 AM'
        },
        {
            id: 3,
            recordType: 'Result',
            recordTypeClass: 'rec-result',
            recordId: 'RES-Exam-04',
            changedField: 'Grade',
            oldValue: 'B+',
            newValue: 'A-',
            changedBy: 'Z. Rahman',
            initials: 'ZR',
            avatarColor: '#dbeafe',
            textColor: '#1e40af',
            date: 'Oct 23, 2023',
            time: '04:30 PM'
        },
        {
            id: 4,
            recordType: 'Student',
            recordTypeClass: 'rec-student',
            recordId: 'STU-2023-104',
            changedField: 'Enrollment Status',
            oldValue: 'Pending',
            newValue: 'Active',
            changedBy: 'Admin User',
            initials: 'AA',
            avatarColor: '#dcfce7',
            textColor: '#166534',
            date: 'Oct 23, 2023',
            time: '02:12 PM'
        },
        {
            id: 5,
            recordType: 'System',
            recordTypeClass: 'rec-system',
            recordId: 'SYS-CONF-01',
            changedField: 'Tax Rate',
            oldValue: '5%',
            newValue: '5.5%',
            changedBy: 'System Auto',
            initials: 'SYS',
            avatarColor: '#ffe4e6',
            textColor: '#9f1239',
            date: 'Oct 23, 2023',
            time: '12:00 AM'
        }
    ];

    const [activeTab, setActiveTab] = useState('audit');

    return (
        <div className="sal-container">
            <AdminMobileNav />

            {/* Header Section */}
            <div className="sal-header">
                <span className="sal-breadcrumb">Settings / Activity Logs</span>

                <div className="sal-title-row">
                    <div className="sal-tabs">
                        <button
                            className={`sal-tab-btn ${activeTab === 'admin' ? 'active' : ''}`}
                            onClick={() => setActiveTab('admin')}
                        >
                            Admin Activity Logs
                        </button>
                        <button
                            className={`sal-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
                            onClick={() => setActiveTab('login')}
                        >
                            Login Logs
                        </button>
                        <button
                            className={`sal-tab-btn ${activeTab === 'audit' ? 'active' : ''}`}
                            onClick={() => setActiveTab('audit')}
                        >
                            Audit Logs
                        </button>
                    </div>

                    <button className="btn-export-logs">
                        <FaDownload /> Export Logs
                    </button>
                </div>

                <p className="sal-description">Monitor system access, security alerts, and user login history.</p>
            </div>

            {/* Main Content Card */}
            <div className="sal-card">

                {/* Filters */}
                <div className="sal-filters">
                    <div className="filter-row-top">
                        <div className="filter-label"><FaFilter /> Filters</div>
                        <div className="filter-dropdowns">
                            <select className="sal-select"><option>Date: Last 30 Days</option></select>
                            <select className="sal-select"><option>Type: All Records</option></select>
                            <select className="sal-select"><option>User: All Admins</option></select>
                        </div>
                    </div>

                    <div className="filter-row-bottom">
                        <div className="sal-search-wrapper">
                            <FaSearch className="sal-search-icon" />
                            <input type="text" className="sal-search-input" placeholder="" />
                            {/* Design shows empty placeholder but green bg */}
                        </div>
                        <button className="btn-apply-filters">Apply</button>
                        <button className="btn-refresh"><FaSyncAlt /></button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="sal-table-wrapper">
                    {activeTab === 'admin' && (
                        <table className="sal-table">
                            <thead>
                                <tr>
                                    <th>Admin Name</th>
                                    <th>Action Performed</th>
                                    <th>Module</th>
                                    <th>Date & Time</th>
                                    <th>IP Address</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map(log => (
                                    <tr key={log.id}>
                                        <td>
                                            <div className="user-info-cell">
                                                <div
                                                    className="user-avatar-sm"
                                                    style={{ background: log.avatarColor, color: log.textColor }}
                                                >
                                                    {log.initials}
                                                </div>
                                                <div className="user-text-col">
                                                    <span className="user-name">{log.adminName}</span>
                                                    <span className="user-id">ID: {log.adminId}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-cell">
                                                <div className="action-dot" style={{ background: log.actionColor }}></div>
                                                {log.action}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`module-badge ${log.moduleClass}`}>
                                                {log.module}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="date-cell">
                                                <span>{log.date}</span>
                                                <span className="time-sub">{log.time}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="ip-cell">{log.ip}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {activeTab === 'login' && (
                        <table className="sal-table">
                            <thead>
                                <tr>
                                    <th>User Name</th>
                                    <th>Role</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>IP Address</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loginLogs.map(log => (
                                    <tr key={log.id}>
                                        <td>
                                            <div className="user-info-cell">
                                                <div
                                                    className="user-avatar-sm"
                                                    style={{ background: log.avatarColor, color: log.textColor }}
                                                >
                                                    {log.initials}
                                                </div>
                                                <div className="user-text-col">
                                                    <span className="user-name">{log.name}</span>
                                                    <span className={`user-id ${log.isSuspicious ? 'text-danger' : ''}`} style={log.isSuspicious ? { color: '#dc2626' } : { color: '#64748b' }}>
                                                        {log.email}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {log.role !== '--' ? (
                                                <span className={`role-badge-sm ${log.roleClass}`}>{log.role}</span>
                                            ) : (
                                                <span style={{ color: '#94a3b8' }}>--</span>
                                            )}
                                        </td>
                                        <td>
                                            <span style={{ fontSize: '13px', color: '#334155' }}>{log.loginTime}</span>
                                        </td>
                                        <td>
                                            <span style={{ fontSize: '13px', color: '#64748b' }}>{log.logoutTime}</span>
                                        </td>
                                        <td>
                                            <span className={`ip-cell ${log.ipClass === 'ip-danger' ? 'ip-danger' : ''}`}>{log.ip}</span>
                                        </td>
                                        <td>
                                            <span className={`status-pill ${log.statusClass}`}>
                                                <span className={`dot ${log.statusClass === 'status-success' ? 'dot-success' : 'dot-failed'}`}></span>
                                                {log.status}
                                            </span>
                                        </td>
                                        <td>
                                            {log.isSuspicious ? (
                                                <button className="action-btn-icon danger"><FaLock /></button>
                                            ) : (
                                                <button className="action-btn-icon"><span style={{ transform: 'rotate(90deg)', display: 'inline-block' }}>...</span></button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {activeTab === 'audit' && (
                        <table className="sal-table">
                            <thead>
                                <tr>
                                    <th>Record Type</th>
                                    <th>Record ID</th>
                                    <th>Changed Field</th>
                                    <th>Old Value</th>
                                    <th>New Value</th>
                                    <th>Changed By</th>
                                    <th>Date & Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auditLogs.map(log => (
                                    <tr key={log.id}>
                                        <td>
                                            <span className={`record-badge ${log.recordTypeClass}`}>
                                                <span className="rec-dot"></span>{log.recordType}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="record-id-text">{log.recordId}</span>
                                        </td>
                                        <td>
                                            <span style={{ fontWeight: '600', fontSize: '13px', color: '#334155' }}>{log.changedField}</span>
                                        </td>
                                        <td>
                                            <span className="val-old" title={log.oldValue}>{log.oldValue}</span>
                                        </td>
                                        <td>
                                            <span className="val-new" title={log.newValue}>{log.newValue}</span>
                                        </td>
                                        <td>
                                            <div className="user-info-cell">
                                                <div
                                                    className="user-avatar-xs"
                                                    style={{ background: log.avatarColor, color: log.textColor }}
                                                >
                                                    {log.initials}
                                                </div>
                                                <span style={{ fontSize: '13px', color: '#334155' }}>{log.changedBy}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="date-cell">
                                                <span>{log.date}</span>
                                                <span className="time-sub">{log.time}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                {/* Footer Pagination */}
                <div className="sal-footer">
                    <span className="showing-text">Showing 1 to 5 of 128 entries</span>
                    <div className="pagination-controls">
                        <button className="page-btn"><FaChevronLeft /></button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span style={{ color: '#64748b', fontSize: '12px' }}>...</span>
                        <button className="page-btn">12</button>
                        <button className="page-btn"><FaChevronRight /></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SystemActivityLogs;
