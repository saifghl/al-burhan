import React, { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaFilter, FaDownload, FaSyncAlt, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './PublicRequests.css';

const AdmissionRequests = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('All Statuses');
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
    const requests = [
        { id: 'REQ-2024-089', name: 'Lucas Miller', grade: 'Grade 3', parent: 'Sarah Miller', phone: '+1 (555) 012-3456', date: 'Oct 24, 2023', status: 'New', avatar: 'LM', color: '#e0f2fe', text: '#0369a1' },
        { id: 'REQ-2024-088', name: 'Sophia Jones', grade: 'Kindergarten', parent: 'Mark Jones', email: 'mark.j@email.com', date: 'Oct 23, 2023', status: 'Accepted', avatar: 'SJ', color: '#fae8ff', text: '#d946ef' },
        { id: 'REQ-2024-087', name: 'Emma Watson', grade: 'Grade 5', parent: 'David Watson', phone: '+1 (555) 987-6543', date: 'Oct 22, 2023', status: 'Hold', avatar: 'EW', color: '#f1f5f9', text: '#64748b' },
        { id: 'REQ-2024-086', name: 'Oliver Lee', grade: 'Grade 1', parent: 'Jennifer Lee', email: 'jen.lee@email.com', date: 'Oct 21, 2023', status: 'Rejected', avatar: 'OL', color: '#ffedd5', text: '#f97316' },
        { id: 'REQ-2024-085', name: 'Ethan Hunt', grade: 'Grade 9', parent: 'Tom Hunt', phone: '+1 (555) 777-8888', date: 'Oct 20, 2023', status: 'New', avatar: 'EH', color: '#e2e8f0', text: '#64748b' },
    ];

    const handleRowClick = (id) => {
        navigate(`/admin/public-requests/${id}`);
    };

    return (
        <div className="public-requests-container">
            {/* Breadcrumbs */}
            <div className="breadcrumbs">
                <span className="breadcrumb-item" onClick={() => navigate('/admin')}>Dashboard</span>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">Admission Requests</span>
            </div>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <div>
                    <h1 className="page-title">Admission Requests</h1>
                    <p className="page-subtitle">Manage and track all incoming student applications.</p>
                </div>
                <button className="btn-primary-action" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <FaDownload /> Export Data
                </button>
            </div>

            {/* Filters */}
            <div className="filters-section">
                <div className="filter-group">
                    <label className="filter-label">Search</label>
                    <div className="filter-input-wrapper">
                        <FaSearch className="filter-icon" />
                        <input
                            type="text"
                            className="filter-input"
                            placeholder="Quick Filters: Name, ID..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div className="filter-group">
                    <label className="filter-label">Date Range</label>
                    <div className="filter-input-wrapper">
                        <FaCalendarAlt className="filter-icon" />
                        <input type="text" className="filter-input" placeholder="Select dates" />
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn-primary-action" style={{ height: '42px', padding: '0 20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <FaFilter /> Apply Filters
                    </button>
                    <button style={{ height: '42px', width: '42px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'white', color: '#64748b', cursor: 'pointer' }}>
                        <FaSyncAlt />
                    </button>
                </div>
            </div>

            {/* Status Tabs */}
            <div className="quick-filters">
                <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginRight: '10px' }}>Quick Filters:</span>
                {['All Statuses', 'New', 'Accepted', 'Rejected', 'Hold'].map(status => (
                    <div
                        key={status}
                        className={`filter-badge ${activeTab === status ? 'active' : ''}`}
                        onClick={() => setActiveTab(status)}
                    >
                        {status}
                        {status === 'New' && <span className="count-badge">4</span>}
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="requests-table-container">
                <table className="requests-table">
                    <thead>
                        <tr>
                            <th>Req ID</th>
                            <th>Student Name</th>
                            <th>Class Applied</th>
                            <th>Parent Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map(req => (
                            <tr key={req.id}>
                                <td>
                                    <span className="req-id" onClick={() => handleRowClick(req.id)}>#{req.id}</span>
                                </td>
                                <td>
                                    <div className="student-info">
                                        <div className="avatar-circle" style={{ background: req.color, color: req.text }}>
                                            {req.avatar}
                                        </div>
                                        <span className="student-name">{req.name}</span>
                                    </div>
                                </td>
                                <td>{req.grade}</td>
                                <td>
                                    <div style={{ fontWeight: '500', color: '#1e293b' }}>{req.parent}</div>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>{req.email || req.phone}</div>
                                </td>
                                <td>{req.date}</td>
                                <td>
                                    <span className={`status-badge status-${req.status.toLowerCase()}`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td>
                                    <span style={{ color: '#64A926', fontSize: '12px', fontWeight: '600', cursor: 'pointer', marginRight: '15px' }} onClick={() => handleRowClick(req.id)}>View Details</span>
                                    <span style={{ color: '#0369a1', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }} onClick={(e) => { e.stopPropagation(); navigate(`/admin/public-requests/${req.id}/register`); }}>Register</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div style={{ padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
                    <span style={{ fontSize: '13px', color: '#64748b' }}>Showing <b>1-5</b> of <b>124</b> results</span>
                    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b' }}><FaChevronLeft /></button>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#64A926', color: 'white', border: 'none', fontWeight: '600' }}>1</button>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', color: '#64748b', border: 'none', cursor: 'pointer' }}>2</button>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', color: '#64748b', border: 'none', cursor: 'pointer' }}>3</button>
                        <span style={{ color: '#64748b' }}>...</span>
                        <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'none', color: '#64748b', border: 'none', cursor: 'pointer' }}>12</button>
                        <button style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#64748b' }}><FaChevronRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionRequests;
