import React from 'react';
import {
    FaCalendarAlt,
    FaLock,
    FaShieldAlt,
    FaHistory,
    FaBolt,
    FaBell,
    FaListAlt,
    FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AdminMobileNav from '../AdminDonation/AdminMobileNav';
import './SystemControlCenter.css';

const SystemControlCenter = () => {
    return (
        <div className="system-control-container">
            {/* Mobile Nav */}
            <AdminMobileNav />

            {/* Header */}
            <div className="scc-header">
                <div className="scc-title">
                    <span className="scc-breadcrumb">Home {'>'} Admin {'>'} System Control</span>
                    <h1>System Control Center</h1>
                </div>
                <div className="scc-status-badges">
                    <div className="badge-operational">
                        <div className="status-dot-pulse"></div>
                        System Operational
                    </div>
                    <span className="scc-uptime">Uptime: 99.9%</span>
                </div>
                <div className="scc-last-login">Last login: Today, 09:42 AM</div>
            </div>

            {/* Status Cards */}
            <div className="scc-grid-row">
                {/* Card 1 */}
                <Link to="/admin/settings/academic-year" className="scc-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="scc-card-content">
                        <span className="scc-card-label">Active Academic Year</span>
                        <span className="scc-card-value">2023-2024</span>
                        <span className="scc-card-status status-green">Active</span>
                    </div>
                    <FaCalendarAlt className="scc-card-icon" />
                </Link>

                {/* Card 2 */}
                <Link to="/admin/settings/password-policy" className="scc-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="scc-card-content">
                        <span className="scc-card-label">Password Policy</span>
                        <span className="scc-card-value">Strong</span>
                        <span className="scc-card-status status-green">Enforced</span>
                    </div>
                    <FaLock className="scc-card-icon" />
                </Link>

                {/* Card 3 */}
                <Link to="/admin/settings/portal-access" className="scc-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="scc-card-content">
                        <span className="scc-card-label">Portal Access Rules</span>
                        <span className="scc-card-value">5 Active</span>
                        <span className="scc-card-status status-green">Open</span>
                    </div>
                    <FaShieldAlt className="scc-card-icon" />
                </Link>

                {/* Card 4 */}
                <Link to="/admin/settings/activity-logs" className="scc-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="scc-card-content">
                        <span className="scc-card-label">Log Events (24h)</span>
                        <span className="scc-card-value">142 Events</span>
                        <span className="scc-card-status status-blue">Normal Load</span>
                    </div>
                    <FaHistory className="scc-card-icon" />
                </Link>
            </div>

            {/* Quick Actions */}
            <div className="section-header">
                <FaBolt className="bolt-icon" /> Quick Actions
            </div>

            <div className="scc-grid-row">

                <Link to="/admin/settings/academic-year" className="quick-action-card" style={{ textDecoration: 'none' }}>
                    <div className="qa-icon green"><FaCalendarAlt /></div>
                    <h4>Manage Academic Year</h4>
                    <p>Setup new term dates</p>
                </Link>

                <Link to="/admin/settings/password-policy" className="quick-action-card" style={{ textDecoration: 'none' }}>
                    <div className="qa-icon green"><FaShieldAlt /></div>
                    <h4>Security Settings</h4>
                    <p>2FA & Password Policy</p>
                </Link>

                <Link to="/admin/settings/notification-templates" className="quick-action-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="qa-icon green"><FaBell /></div>
                    <h4>Notification Templates</h4>
                    <p>Edit SMS & Email alerts</p>
                </Link>

                <Link to="/admin/settings/activity-logs" className="quick-action-card" style={{ textDecoration: 'none', cursor: 'pointer', color: 'inherit' }}>
                    <div className="qa-icon green"><FaListAlt /></div>
                    <h4>View System Logs</h4>
                    <p>Audit trail & errors</p>
                </Link>
            </div>

            {/* Activity Log */}
            <div className="scc-table-container">
                <div className="table-header">
                    <h3><FaListAlt /> Recent Activity Log</h3>
                    <Link to="/admin/settings/activity-logs" className="view-all-link" style={{ textDecoration: 'none' }}>View all logs <FaArrowRight /></Link>
                </div>
                <table className="activity-table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>Action</th>
                            <th>Context</th>
                            <th>IP Address</th>
                            <th>Timestamp</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar bg-blue-100">AK</div>
                                    <div className="user-info">
                                        <span className="user-name">Ahmed Khan</span>
                                        <span className="user-role">Admin</span>
                                    </div>
                                </div>
                            </td>
                            <td>Updated Student Record</td>
                            <td>ID: #ST-2024-089</td>
                            <td>192.168.1.42</td>
                            <td>Today, 10:23 AM</td>
                            <td><span className="log-status success">Success</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar bg-purple-100">FS</div>
                                    <div className="user-info">
                                        <span className="user-name">Fatima Sheikh</span>
                                        <span className="user-role">Finance Manager</span>
                                    </div>
                                </div>
                            </td>
                            <td>Generated Fee Report</td>
                            <td>Monthly: Sep 2024</td>
                            <td>192.168.1.15</td>
                            <td>Today, 09:15 AM</td>
                            <td><span className="log-status success">Success</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar bg-red-100">SY</div>
                                    <div className="user-info">
                                        <span className="user-name">System</span>
                                        <span className="user-role">Automated</span>
                                    </div>
                                </div>
                            </td>
                            <td>Backup Failed</td>
                            <td>Daily DB Backup</td>
                            <td>localhost</td>
                            <td>Yesterday, 11:59 PM</td>
                            <td><span className="log-status failed">Failed</span></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="user-cell">
                                    <div className="user-avatar bg-orange-100">YB</div>
                                    <div className="user-info">
                                        <span className="user-name">Yusuf Bilal</span>
                                        <span className="user-role">Teacher</span>
                                    </div>
                                </div>
                            </td>
                            <td>Login Attempt</td>
                            <td>Portal Access</td>
                            <td>10.0.0.55</td>
                            <td>Yesterday, 08:30 PM</td>
                            <td><span className="log-status warning">Warning</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SystemControlCenter;
