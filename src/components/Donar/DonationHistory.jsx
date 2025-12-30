import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonationHistory.css';
import '../Donar/Dashboard.css';

// Importing Assets
import UserAvatar from '../../assets/Picture33.png'; // Assuming this is a profile pic
import Madarsa1 from '../../assets/Picture16.png';
import Madarsa2 from '../../assets/Picture17.png';
import Madarsa3 from '../../assets/Picture18.png';
import Madarsa4 from '../../assets/Picture19.png';
import Madarsa5 from '../../assets/Picture20.png';

const DonationHistory = () => {
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const Icons = {
        Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
        Home: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
        Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        LogOut: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
        Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
        Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
        Download: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
        Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
        ChevronRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
        ChevronLeft: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>,
        ChevronDown: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
        MoreVertical: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>,
    };

    const historyData = [
        { id: 1, date: 'Oct 24, 2023', madarsa: 'Darul Uloom', purpose: 'Zakat Fund', amount: '₹12,000.00', status: 'Completed', purposeType: 'purple', img: Madarsa1 },
        { id: 2, date: 'Oct 12, 2023', madarsa: 'Madarsa Al-Noor', purpose: 'Infrastructure', amount: '₹40,000.00', status: 'Completed', purposeType: 'pink', img: Madarsa2 },
        { id: 3, date: 'Sep 28, 2023', madarsa: 'Jamia Islamia', purpose: 'Student Support', amount: '₹6,000.00', status: 'Pending', purposeType: 'orange', img: Madarsa3 },
        { id: 4, date: 'Sep 15, 2023', madarsa: 'Madarsa Faiz-e-Aam', purpose: 'Sadaqah', amount: '₹16,000.00', status: 'Completed', purposeType: 'green', img: Madarsa4 },
        { id: 5, date: 'Aug 02, 2023', madarsa: 'Suffah Academy', purpose: 'Zakat Fund', amount: '₹10,000.00', status: 'Failed', purposeType: 'purple', img: Madarsa5 }
    ];

    return (
        <div className="dashboard-layout">
            {/* Left Menu Sidebar - Reused but with active link changed */}
            <aside className={`left-sidebar ${sidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-brand">
                    <span className="brand-icon">🏰</span>
                    <span className="brand-text">Al Burhan</span>
                </div>

                <div className="sidebar-menu">
                    <div className="menu-group">
                        <span className="menu-label">Menu</span>
                        <a href="#home" className="menu-item" onClick={(e) => { e.preventDefault(); navigate('/dashboard') }}>
                            <Icons.Home /> Home
                        </a>
                        <a href="/donation-history" className="menu-item active" onClick={(e) => e.preventDefault()}>
                            <Icons.Clock /> Donation History
                        </a>
                    </div>
                </div>

                <div className="sidebar-footer">
                    <a href="#logout" className="menu-item logout">
                        <Icons.LogOut /> Sign Out
                    </a>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="dashboard-main history-main">
                {/* Header */}
                <header className="dashboard-header">
                    <div className="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Icons.Menu />
                    </div>
                    <div className="header-actions-right">
                        <button className="icon-btn"><Icons.Bell /></button>
                        <button className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></button>
                        <div className="user-avatar">
                            <img src={UserAvatar} alt="User" />
                        </div>
                    </div>
                </header>

                <div className="history-content-container">
                    <div className="page-header-row">
                        <div className="title-block">
                            <h1 className="page-title">Donation History</h1>
                            <p className="page-subtitle">Manage your past contributions and download receipts.</p>
                        </div>
                        <button className="download-report-btn">
                            <Icons.Download /> Download Report
                        </button>
                    </div>

                    {/* Stats Overview */}
                    <div className="history-stats-row">
                        <div className="history-stat-card">
                            <span className="h-stat-label">Total Donated</span>
                            <div className="h-stat-value">₹1,045,800.00</div>
                        </div>
                        <div className="history-stat-card">
                            <span className="h-stat-label">Lives Impacted</span>
                            <div className="h-stat-value">14</div>
                        </div>
                        <div className="history-stat-card">
                            <span className="h-stat-label">Most Recent Donation</span>
                            <div className="h-stat-value highlight">₹12,600.00</div>
                        </div>
                    </div>

                    {/* Filters & Search */}
                    <div className="table-controls">
                        <div className="table-filters-right">
                            <button className="filter-dropdown-btn">
                                Date Range <Icons.ChevronDown />
                            </button>
                            <button className="filter-dropdown-btn">
                                Status: All <Icons.ChevronDown />
                            </button>
                            <button className="filter-dropdown-btn">
                                Campaign Type <Icons.ChevronDown />
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="history-table-wrapper">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Madarsa</th>
                                    <th>Purpose</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((item) => (
                                    <tr key={item.id}>
                                        <td className="date-cell">{item.date}</td>
                                        <td className="madarsa-cell">
                                            <div className="madarsa-info">
                                                <div className="madarsa-avatar-img-box">
                                                    <img src={item.img} alt={item.madarsa} />
                                                </div>
                                                <span className="madarsa-name-text">{item.madarsa}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`purpose-text ${item.purposeType}`}>{item.purpose}</span>
                                        </td>
                                        <td className="amount-cell">{item.amount}</td>
                                        <td>
                                            <span className="status-indicator">
                                                <span className={`status-dot ${item.status.toLowerCase()}`}></span>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="icon-action-btn">
                                                <Icons.MoreVertical />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="pagination-row">
                        <span className="showing-text">Showing 1 to 5 of 24 results</span>
                        <div className="pagination-controls-text">
                            <button className="text-page-nav disabled">Previous</button>
                            <button className="page-number active">1</button>
                            <button className="page-number">2</button>
                            <button className="page-number">3</button>
                            <span className="page-ellipsis">...</span>
                            <button className="text-page-nav">Next</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DonationHistory;
