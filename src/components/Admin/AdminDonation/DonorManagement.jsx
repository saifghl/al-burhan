import React, { useState } from 'react';
import { FaPlus, FaCloudDownloadAlt, FaSearch, FaEllipsisV, FaEye, FaBan, FaUnlock, FaUserFriends, FaUserCheck, FaMoneyBillWave, FaArrowUp } from 'react-icons/fa';
import './DonorManagement.css';

const DonorManagement = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const donors = [
        { id: 1, name: 'Sarah Jenkins', email: 'sarah.j@example.com', phone: '+1 (555) 012-3456', date: 'Oct 24, 2023', total: '₹1,250.00', status: 'Active', avatar: 'SJ', color: '#e2e8f0' },
        { id: 2, name: 'Michael Chen', email: 'm.chen88@gmail.com', phone: '+1 (555) 987-6543', date: 'Nov 02, 2023', total: '₹850.00', status: 'Active', avatar: 'MC', color: '#e2e8f0' },
        { id: 3, name: 'Emma Roberts', email: 'emma.r@workmail.com', phone: '+44 20 7123 4567', date: 'Dec 15, 2023', total: '₹2,100.00', status: 'Disabled', avatar: 'ER', color: '#f1f5f9' },
        { id: 4, name: 'David Kim', email: 'david.kim@studio.co', phone: '+1 (555) 333-2222', date: 'Jan 10, 2024', total: '₹5,000.00', status: 'Active', avatar: 'DK', color: '#e2e8f0' },
        { id: 5, name: 'Lisa Martinez', email: 'lisa.m@example.org', phone: '+1 (555) 777-8888', date: 'Feb 05, 2024', total: '₹325.00', status: 'Active', avatar: 'LM', color: '#f3e8ff', textColor: '#9333ea' },
    ];

    const stats = [
        { title: 'Total Donors', value: '1,248', trend: '+12%', icon: <FaUserFriends />, type: 'users' },
        { title: 'Active Donors', value: '1,102', trend: '+5%', icon: <FaUserCheck />, type: 'active' },
        { title: 'Total Revenue', value: '₹452,000', trend: '+22%', icon: <FaMoneyBillWave />, type: 'revenue' },
    ];

    return (
        <div className="donor-management">
            {/* Header */}
            <header className="page-header">
                <div className="header-content">
                    <div className="breadcrumbs">
                        <span>Dashboard</span> / <span>Donors</span> / <span className="current">All Donors</span>
                    </div>
                    <h1>Donor Management</h1>
                    <p>Oversee and manage all registered donor accounts and their contributions.</p>
                </div>
                <button className="btn-add-donor"><FaPlus /> Add New Donor</button>
            </header>

            {/* Stats Cards */}
            <section className="stats-row">
                {stats.map((stat, index) => (
                    <div className="dm-stat-card" key={index}>
                        <div className="dm-stat-info">
                            <h3>{stat.title}</h3>
                            <div className="dm-stat-numbers">
                                <span className="dm-stat-value">{stat.value}</span>
                                <span className="dm-stat-trend"><FaArrowUp /> {stat.trend}</span>
                            </div>
                        </div>
                        <div className={`dm-stat-icon icon-${stat.type}`}>{stat.icon}</div>
                    </div>
                ))}
            </section>

            {/* Controls */}
            <section className="controls-row">
                <div className="filters">
                    <select className="filter-select"><option>All modules</option></select>
                    <select className="filter-select"><option>All</option></select>
                </div>
                <div className="search-export">
                    <div className="search-bar">
                        <FaSearch />
                        <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <button className="btn-export-simple"><FaCloudDownloadAlt /> Export</button>
                </div>
            </section>

            {/* Donors Table */}
            <section className="donors-table-container">
                <table className="donors-table">
                    <thead>
                        <tr>
                            <th>Donor Name</th>
                            <th>Email / Phone</th>
                            <th>Registration Date</th>
                            <th>Total Donated</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors.map(donor => (
                            <tr key={donor.id}>
                                <td>
                                    <div className="donor-profile">
                                        <div className="donor-avatar" style={{ backgroundColor: donor.color, color: donor.textColor || '#475569' }}>
                                            {donor.avatar}
                                        </div>
                                        <span className="donor-name-text">{donor.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="donor-contact">
                                        <div className="d-email">{donor.email}</div>
                                        <div className="d-phone">{donor.phone}</div>
                                    </div>
                                </td>
                                <td className="d-date">{donor.date}</td>
                                <td className="d-total">{donor.total}</td>
                                <td>
                                    <span className={`status-badge ${donor.status.toLowerCase()}`}>
                                        {donor.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button className="btn-icon" onClick={() => window.location.href = `/admin/donors/${donor.id}`}><FaEye /></button>
                                        <button className="btn-icon">{donor.status === 'Active' ? <FaBan /> : <FaUnlock />}</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <span>Showing <strong>1</strong> to <strong>5</strong> of <strong>1,248</strong> results</span>
                    <div className="page-controls">
                        <button className="page-btn disabled">&lt;</button>
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <span className="page-dots">...</span>
                        <button className="page-btn">12</button>
                        <button className="page-btn">&gt;</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DonorManagement;
