import React, { useState } from 'react';
import { FaBell, FaBullhorn, FaUpload, FaPaperPlane, FaSearch, FaFilter, FaEye } from 'react-icons/fa';
/* Using specific icons to match the image broadly */
import { MdNotificationsActive, MdEventNote, MdDrafts } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import './NoticesAndActivities.css';

const NoticesAndActivities = () => {
    const navigate = useNavigate();
    // Mock Data
    const [activities] = useState([
        {
            id: 'N-2023-021',
            title: 'Eid Holiday Announcement',
            type: 'Notice',
            visibility: 'All Students',
            createdDate: 'Oct 24, 2023',
            status: 'Published'
        },
        {
            id: 'A-2023-042',
            title: 'Quran Recitation Competition',
            type: 'Activity',
            visibility: 'Class 5-B',
            createdDate: 'Oct 22, 2023',
            status: 'Published'
        },
        {
            id: 'N-2023-089',
            title: 'Monthly Fee Reminder',
            type: 'Notification',
            visibility: 'Parents Only',
            createdDate: 'Oct 20, 2023',
            status: 'Draft'
        },
        {
            id: 'N-2023-012',
            title: 'Examination Schedule',
            type: 'Notice',
            visibility: 'All Students',
            createdDate: 'Oct 18, 2023',
            status: 'Published'
        }
    ]);

    const getStatusClass = (status) => {
        return status.toLowerCase();
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'Notice': return '#4A90E2';
            case 'Activity': return '#9C27B0';
            case 'Notification': return '#F5A623';
            default: return '#666';
        }
    };

    return (
        <div className="notices-page-container">
            {/* Page Header (Not strictly in design image but good for consistency, kept minimal) */}
            {/* Based on image, headers are seemingly inside the content or implicitly handled. 
                I will stick to the layout in the image which is a card-like dashboard. */}

            {/* Stats Overview */}
            <div className="na-stats-row">
                <div className="na-stat-card">
                    <div className="na-stat-header">
                        <span>Total Notices</span>
                        <div className="na-icon-circle blue"><FaBullhorn /></div>
                    </div>
                    <div className="na-stat-value">124</div>
                    <div className="na-stat-trend positive">↗ 5% this week</div>
                </div>

                <div className="na-stat-card">
                    <div className="na-stat-header">
                        <span>Active Activities</span>
                        <div className="na-icon-circle purple"><MdEventNote /></div>
                    </div>
                    <div className="na-stat-value">8</div>
                    <div className="na-stat-trend neutral">Ongoing events</div>
                </div>

                <div className="na-stat-card">
                    <div className="na-stat-header">
                        <span>Notifications Sent</span>
                        <div className="na-icon-circle blue-dark"><MdNotificationsActive /></div>
                    </div>
                    <div className="na-stat-value">1,050</div>
                    <div className="na-stat-trend positive">↗ 12% this week</div>
                </div>

                <div className="na-stat-card">
                    <div className="na-stat-header">
                        <span>Draft Messages</span>
                        <div className="na-icon-circle yellow"><MdDrafts /></div>
                    </div>
                    <div className="na-stat-value">3</div>
                    <div className="na-stat-trend neutral">Pending review</div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="na-section">
                <h2 className="na-section-title">Quick Actions</h2>
                <div className="na-actions-row">
                    <button
                        className="na-action-btn primary"
                        onClick={() => navigate('/admin/create-notice')}
                    >
                        <FaBullhorn /> Create Notice
                    </button>
                    <button
                        className="na-action-btn secondary"
                        onClick={() => navigate('/admin/upload-activity')}
                    >
                        <FaUpload /> Upload Activity
                    </button>
                    <button
                        className="na-action-btn secondary"
                        onClick={() => navigate('/admin/send-notification')}
                    >
                        <FaPaperPlane /> Send Notification
                    </button>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="na-section">
                <div className="na-section-header">
                    <h2 className="na-section-title">Recent Activity</h2>
                    <a href="#" className="view-all-link">View All →</a>
                </div>

                <div className="na-table-card">
                    <table className="na-table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Visibility</th>
                                <th>Created Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {activities.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="na-title-cell">
                                            <span className="na-item-title">{item.title}</span>
                                            <span className="na-item-ref">Reference ID: #{item.id}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <span style={{ color: getTypeColor(item.type), fontWeight: 500 }}>
                                            {item.type}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="na-visibility">
                                            <FaEye className="vis-icon" /> {item.visibility}
                                        </div>
                                    </td>
                                    <td>{item.createdDate}</td>
                                    <td>
                                        <span className={`na-status-badge ${getStatusClass(item.status)}`}>
                                            • {item.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="na-more-btn">...</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="na-pagination">
                        <span>Showing 1 to 4 of 24 results</span>
                        <div className="na-page-dots">
                            <span className="active"></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoticesAndActivities;
