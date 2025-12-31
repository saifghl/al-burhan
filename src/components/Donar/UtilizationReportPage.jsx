import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UtilizationReportPage.css';
import '../Donar/DonationDetailsPage.css'; // Reusing top nav styling

// Importing Assets
import UserAvatar from '../../assets/Picture33.png';
// Icons will be inline or reused from library if needed, for now SVG

const UtilizationReportPage = () => {
    const navigate = useNavigate();

    const Icons = {
        Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        Filter: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>,
        Download: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
        Check: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
        ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
        // Stats Icons
        Money: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>,
        Utilized: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
        Balance: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f57c00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>,
        Category: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7b1fa2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
        SignOut: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
        ArrowLeft: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    };

    const utilizationData = [
        { id: 1, name: 'Madarsa Al-Noor', loc: 'New Delhi, India', budget: '₹50,000', utilized: '₹42,000', status: 84, tags: ['Edu', 'Sal'] },
        { id: 2, name: 'Darul Uloom', loc: 'Deoband, UP', budget: '₹75,000', utilized: '₹68,500', status: 91, tags: ['Food', 'Sal'] },
        { id: 3, name: 'Jamia Islamia', loc: 'Hyderabad, TS', budget: '₹40,000', utilized: '₹22,000', status: 55, tags: ['Util'] },
        { id: 4, name: 'Faizan-e-Madina', loc: 'Karachi, PK', budget: '₹120,000', utilized: '₹95,400', status: 79, tags: ['Edu', 'Food'] }
    ];

    return (
        <div className="donation-details-page-v2"> {/* Reuse layout wrapper */}
            {/* Top Navigation Bar */}
            <header className="top-navbar-full">
                <div className="navbar-logo-section">
                    <span className="brand-logo-icon">🏰</span>
                    <span className="brand-name-text">Al Burhan</span>
                </div>

                <div className="search-section-hidden"> {/* Placeholder to push rights */} </div>

                <div className="navbar-actions-section">
                    <button className="icon-btn-nav" onClick={() => navigate('/notifications')}><Icons.Bell /></button>
                    <button className="icon-btn-nav" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                    <div className="user-avatar-nav" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
                        <img src={UserAvatar} alt="User" />
                    </div>
                </div>
            </header>

            <div className="details-body-content">

                {/* Filters and Title Header */}
                <div className="util-header-row">
                    <div className="util-title-group">
                        <button className="back-btn-circle" onClick={() => navigate(-1)}>
                            <Icons.ArrowLeft />
                        </button>
                        <div className="util-title-block">
                            <h1>Madarsa Fund Utilization Report</h1>
                            <p>Track how your contributions are supporting categories like Salary, Food, Education, and Utilities across institutions.</p>
                        </div>
                    </div>
                    <div className="util-filters-container">
                        <div className="filters-top-row">
                            <div className="filter-item">
                                <label>Fiscal Year</label>
                                <select><option>FY 2023-24</option></select>
                            </div>
                            <div className="filter-item">
                                <label>Region</label>
                                <select><option>All Regions</option></select>
                            </div>
                        </div>
                        <div className="filters-bottom-row">
                            <div className="filter-item">
                                <label>Search</label>
                                <div className="util-search-box-wide">
                                    <Icons.Search />
                                    <input type="text" placeholder="Search Specific Madarsa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="util-stats-grid">
                    <div className="util-stat-card">
                        <div className="us-header">
                            <span>Total Funds</span>
                            <div className="us-icon green-bg"><Icons.Money /></div>
                        </div>
                        <div className="us-value">₹1,250,000</div>
                        <div className="us-trend green-text">↗ +12% from last month</div>
                    </div>
                    <div className="util-stat-card">
                        <div className="us-header">
                            <span>Total Utilized</span>
                            <div className="us-icon blue-bg"><Icons.Utilized /></div>
                        </div>
                        <div className="us-value">₹890,000</div>
                        <div className="us-trend green-text">↗ 71.2% utilization rate</div>
                    </div>
                    <div className="util-stat-card">
                        <div className="us-header">
                            <span>Remaining Balance</span>
                            <div className="us-icon orange-bg"><Icons.Balance /></div>
                        </div>
                        <div className="us-value">₹360,000</div>
                        <div className="us-trend gray-text">Available for allocation</div>
                    </div>
                    <div className="util-stat-card">
                        <div className="us-header">
                            <span>Top Category</span>
                            <div className="us-icon purple-bg"><Icons.Category /></div>
                        </div>
                        <div className="us-value">Education</div>
                        <div className="us-trend gray-text">45% of total spend</div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="util-charts-row">
                    <div className="chart-card-main">
                        <div className="cc-header">
                            <h3>Expenditure by Top 5 Madarsas</h3>
                            <button className="view-all-link">View All</button>
                        </div>
                        <div className="bar-chart-visual">
                            {/* CSS Bar Chart */}
                            <div className="chart-bars-area">
                                <div className="c-bar-group"><div className="c-bar h-40"></div><span className="c-label">Al-Noor</span></div>
                                <div className="c-bar-group"><div className="c-bar h-60"></div><span className="c-label">Darul Uloom</span></div>
                                <div className="c-bar-group"><div className="c-bar h-30"></div><span className="c-label">Jamia Islamia</span></div>
                                <div className="c-bar-group"><div className="c-bar h-80"></div><span className="c-label">Faizan-e-Madina</span></div>
                                <div className="c-bar-group"><div className="c-bar h-50"></div><span className="c-label">Suffah Academy</span></div>
                            </div>
                            <div className="chart-legend-row">
                                <span className="legend-dot green"></span> Education
                                <span className="legend-dot blue"></span> Salary
                                <span className="legend-dot yellow"></span> Food
                                <span className="legend-dot gray"></span> Utilities
                            </div>
                        </div>
                    </div>
                    <div className="chart-card-side">
                        <div className="cc-header">
                            <h3>Category Distribution</h3>
                            <span className="cc-sub">Overall spend across all institutions</span>
                        </div>
                        <div className="donut-chart-visual">
                            <div className="donut-circle">
                                <div className="donut-hole">
                                    <span className="donut-center-val">100%</span>
                                    <span className="donut-center-label">Total Spend</span>
                                </div>
                            </div>
                            <ul className="donut-legend-list">
                                <li><span className="dot green"></span> Education <span className="val">45%</span></li>
                                <li><span className="dot blue"></span> Salary <span className="val">25%</span></li>
                                <li><span className="dot yellow"></span> Food <span className="val">15%</span></li>
                                <li><span className="dot gray"></span> Utilities <span className="val">15%</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Detailed List */}
                <div className="util-detailed-section">
                    <div className="ud-header-row">
                        <h3>Detailed Madarsa Utilization</h3>
                        <div className="ud-actions">
                            <button className="ud-act-btn"><Icons.Filter /> Filter</button>
                            <button className="ud-act-btn"><Icons.Download /> Export</button>
                        </div>
                    </div>

                    <table className="util-table">
                        <thead>
                            <tr>
                                <th>Madarsa Name</th>
                                <th>Total Budget</th>
                                <th>Utilized</th>
                                <th>Utilization Status</th>
                                <th align="right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {utilizationData.map(item => (
                                <tr key={item.id}>
                                    <td>
                                        <div className="u-madarsa-info">
                                            <div className="u-avatar-circle"></div>
                                            <div className="u-text-group">
                                                <span className="u-name">{item.name}</span>
                                                <span className="u-loc">{item.loc}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="u-val"><strong>{item.budget}</strong></td>
                                    <td className="u-val-sec"><strong>{item.utilized}</strong></td>
                                    <td>
                                        <div className="u-status-cell">
                                            <div className="u-prog-bar-wrapper">
                                                <div className="u-prog-track">
                                                    <div className="u-prog-fill" style={{ width: `${item.status}%`, backgroundColor: item.status < 60 ? '#f59e0b' : '#6aa342' }}></div>
                                                </div>
                                                <span className="u-prog-val">{item.status}%</span>
                                            </div>
                                            <div className="u-tags-row">
                                                {item.tags.map(tag => (
                                                    <span key={tag} className={`u-tag-badge ${tag.toLowerCase()}`}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </td>
                                    <td align="right">
                                        <button className="view-rpt-link">View Report</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="pagination-footer">
                        <span>Showing 1-4 of 24 results</span>
                        <div className="page-btns">
                            <button className="pg-btn">Previous</button>
                            <button className="pg-btn">Next</button>
                        </div>
                    </div>

                    <div className="bottom-signout-row">
                        <button className="signout-link"><Icons.ArrowRight /> Sign Out</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UtilizationReportPage;
