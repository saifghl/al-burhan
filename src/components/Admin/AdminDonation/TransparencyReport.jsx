import React, { useState } from 'react';
import {
    FaCog,
    FaPen,
    FaDownload,
    FaCheck,
    FaWallet,
    FaChartPie,
    FaCoins,
    FaBook,
    FaTools,
    FaPrint,
    FaGraduationCap,
    FaFilter,
    FaEllipsisV,
    FaArrowDown
} from 'react-icons/fa';
import AdminMobileNav from './AdminMobileNav';
import './TransparencyReport.css';

const TransparencyReport = () => {
    const [isPublished, setIsPublished] = useState(true);

    const togglePublish = () => setIsPublished(!isPublished);
    const handleEdit = () => alert("Edit Descriptions feature coming soon!");
    const handleDownload = () => alert("Downloading Transparency Report PDF...");
    const handleViewCategories = (e) => {
        e.preventDefault();
        alert("Navigating to detailed category view...");
    };
    const handleShowAll = () => alert("Loading all historical transactions...");

    return (
        <div className="transparency-report-container">
            <AdminMobileNav />
            {/* Admin Controls Banner */}
            <div className="admin-controls-banner">
                <div className="admin-controls-left">
                    <FaCog className="admin-icon" />
                    <div className="controls-info">
                        <h3>Admin Controls</h3>
                        <p>Manage the visibility and content of this transparency report.</p>
                    </div>
                </div>
                <div className="admin-controls-actions">
                    <div className="report-status">
                        Report Status:
                        <div className="toggle-switch" onClick={togglePublish} style={{ background: isPublished ? '#65a30d' : '#cbd5e1' }}>
                            <div className="toggle-knob" style={{ right: isPublished ? '2px' : 'auto', left: isPublished ? 'auto' : '2px' }}></div>
                        </div>
                        <span style={{ color: isPublished ? '#166534' : '#64748b' }}>
                            {isPublished ? 'Published' : 'Hidden'}
                        </span>
                    </div>
                    <button className="edit-desc-btn" onClick={handleEdit}>
                        <FaPen /> Edit Descriptions
                    </button>
                </div>
            </div>

            {/* Header */}
            <div className="report-header-section">
                <div className="report-title">
                    <span className="public-view-badge">Public View</span>
                    <h1>Transparency Report</h1>
                    <p>Fiscal Year 2023-2024</p>
                </div>
                <button className="download-report-btn" onClick={handleDownload}>
                    <FaDownload /> Download Report (PDF)
                </button>
            </div>

            {/* Verified Banner */}
            <div className="verified-banner">
                <div className="verified-content">
                    <div className="verified-icon">
                        <FaCheck />
                    </div>
                    <div className="verified-text">
                        <h4>Verified by Madarsa Administration</h4>
                        <p>All financial data has been audited and approved by the central committee on Nov 1, 2023.</p>
                    </div>
                </div>
                <div className="verified-seal">
                    {/* Placeholder for seal icon */}
                    <FaCheck style={{ border: '3px solid #bbf7d0', borderRadius: '50%', padding: '4px' }} />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="report-stats-grid">
                <div className="report-stat-card">
                    <div className="stat-header">
                        <div className="stat-icon-box icon-blue">
                            <FaWallet />
                        </div>
                        <span className="trend-badge trend-up">↗ +12%</span>
                    </div>
                    <span className="stat-label">Total Donations Received</span>
                    <span className="stat-value">$125,000.00</span>
                    {/* Note: User image shows no progress bar here but one card has one. Replicating varied design */}
                </div>

                <div className="report-stat-card">
                    <div className="stat-header">
                        <div className="stat-icon-box icon-purple">
                            <FaChartPie />
                        </div>
                        <span className="trend-badge trend-up">↗ +8%</span>
                    </div>
                    <span className="stat-label">Total Funds Utilized</span>
                    <span className="stat-value">$98,000.00</span>
                    <div className="stat-progress-bar">
                        <div className="stat-progress-fill" style={{ width: '78%', background: '#a855f7' }}></div>
                    </div>
                </div>

                <div className="report-stat-card">
                    <div className="stat-header">
                        <div className="stat-icon-box icon-orange">
                            <FaCoins />
                        </div>
                        {/* No trend badge in image for this one */}
                    </div>
                    <span className="stat-label">Remaining Balance</span>
                    <span className="stat-value">$27,000.00</span>
                    <span className="stat-label" style={{ fontSize: '11px', marginTop: '4px' }}>Available for immediate allocation</span>
                </div>
            </div>

            {/* Content Grid */}
            <div className="report-content-grid">
                {/* Left: Fund Usage */}
                <div className="category-usage-card">
                    <span className="card-title">Category-wise Fund Usage</span>

                    <div className="usage-item">
                        <div className="usage-header">
                            <span>Student Scholarships</span>
                            <span>45%</span>
                        </div>
                        <div className="usage-bar-bg">
                            <div className="usage-bar-fill" style={{ width: '45%', background: '#0ea5e9' }}></div>
                        </div>
                        <span className="usage-subtext">$44,100 allocated</span>
                    </div>

                    <div className="usage-item">
                        <div className="usage-header">
                            <span>Building Maintenance</span>
                            <span>30%</span>
                        </div>
                        <div className="usage-bar-bg">
                            <div className="usage-bar-fill" style={{ width: '30%', background: '#10b981' }}></div>
                        </div>
                        <span className="usage-subtext">$29,400 allocated</span>
                    </div>

                    <div className="usage-item">
                        <div className="usage-header">
                            <span>Staff Salaries</span>
                            <span>15%</span>
                        </div>
                        <div className="usage-bar-bg">
                            <div className="usage-bar-fill" style={{ width: '15%', background: '#f59e0b' }}></div>
                        </div>
                        <span className="usage-subtext">$14,700 allocated</span>
                    </div>

                    <div className="usage-item">
                        <div className="usage-header">
                            <span>Administrative</span>
                            <span>10%</span>
                        </div>
                        <div className="usage-bar-bg">
                            <div className="usage-bar-fill" style={{ width: '10%', background: '#64748b' }}></div>
                        </div>
                        <span className="usage-subtext">$9,800 allocated</span>
                    </div>

                    <a href="#" className="view-detailed-link" onClick={handleViewCategories}>View Detailed Categories ➔</a>
                </div>

                {/* Right: Recent Utilizations */}
                <div className="recent-util-card">
                    <div className="card-header-row">
                        <span className="card-title" style={{ marginBottom: 0 }}>Recent Utilizations</span>
                        <div className="header-icons">
                            <FaFilter />
                            <FaEllipsisV />
                        </div>
                    </div>

                    <div className="util-table-header">
                        <span>Transaction Details</span>
                        <span>Category</span>
                        <span>Date</span>
                        <span style={{ textAlign: 'right' }}>Amount</span>
                    </div>

                    <div className="util-item">
                        <div className="util-details">
                            <div className="util-icon icon-light-blue"><FaBook /></div>
                            <div className="util-text">
                                <h4>Library Books Purchase</h4>
                                <p>Invoice #INV-2023-001</p>
                            </div>
                        </div>
                        <div><span className="category-tag tag-edu">Education</span></div>
                        <span className="util-date">Oct 24, 2023</span>
                        <span className="util-amount">$1,200.00</span>
                    </div>

                    <div className="util-item">
                        <div className="util-details">
                            <div className="util-icon icon-light-green"><FaTools /></div>
                            <div className="util-text">
                                <h4>Roof Repairs - West Wing</h4>
                                <p>Contractor: BuildRight Inc.</p>
                            </div>
                        </div>
                        <div><span className="category-tag tag-maint">Maintenance</span></div>
                        <span className="util-date">Oct 20, 2023</span>
                        <span className="util-amount">$3,500.00</span>
                    </div>

                    <div className="util-item">
                        <div className="util-details">
                            <div className="util-icon icon-light-gray"><FaPrint /></div>
                            <div className="util-text">
                                <h4>Office Supplies</h4>
                                <p>Monthly Restock</p>
                            </div>
                        </div>
                        <div><span className="category-tag tag-admin">Admin</span></div>
                        <span className="util-date">Oct 18, 2023</span>
                        <span className="util-amount">$450.00</span>
                    </div>

                    <div className="util-item">
                        <div className="util-details">
                            <div className="util-icon icon-light-yellow"><FaGraduationCap /></div>
                            <div className="util-text">
                                <h4>Merit Scholarship Distribution</h4>
                                <p>Fall Semester Batch A</p>
                            </div>
                        </div>
                        <div><span className="category-tag tag-edu">Education</span></div>
                        <span className="util-date">Oct 15, 2023</span>
                        <span className="util-amount">$5,000.00</span>
                    </div>

                    <button className="show-all-btn" onClick={handleShowAll}>Show All Transactions</button>
                </div>
            </div>

            {/* Footer */}
            <div className="report-footer">
                <span>© 2023 Donation Manager. All rights reserved.</span>
                <div className="footer-links">
                    <span onClick={() => alert('Opening Privacy Policy...')} style={{ cursor: 'pointer' }}>Privacy Policy</span>
                    <span onClick={() => alert('Opening Terms of Service...')} style={{ cursor: 'pointer' }}>Terms of Service</span>
                    <span onClick={() => alert('Contacting Support...')} style={{ cursor: 'pointer' }}>Contact Support</span>
                </div>
            </div>
        </div>
    );
};

export default TransparencyReport;
