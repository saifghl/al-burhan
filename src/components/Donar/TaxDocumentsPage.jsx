import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaxDocumentsPage.css';
import UserAvatar from '../../assets/Picture33.png'; // User Avatar

// Icons
const Icons = {
    Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.96l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.26-1.13.59-1.62.96l-2.39-.96c-.21-.08-.47-.01-.59.22L3.13 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.96l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.26 1.13-.59 1.62-.96l2.39.96c.21.08.47.01.59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path></svg>,
    HelpCircle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>,
    TrendingUp: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    CheckCircle: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
    FileText: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>,
    Send: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
    Search: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
    CreditCard: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
    Columns: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path></svg>,
    Mail: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
    SignOut: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    ArrowLeft: () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
};

const TaxDocumentsPage = () => {
    const navigate = useNavigate();

    const receipts = [
        { id: '#RCT-1024', date: 'Oct 12, 2023', org: 'Darul Uloom Center', type: 'General Fund', amount: '₹50.00', method: 'Visa •••• 4242' },
        { id: '#RCT-0988', date: 'Sep 01, 2023', org: 'Madarsa Al-Nur', type: 'Zakat Contribution', amount: '₹100.00', method: 'Bank Transfer' },
        { id: '#RCT-0852', date: 'Aug 15, 2023', org: 'Islamic Relief Fund', type: 'Emergency Aid', amount: '₹250.00', method: 'Visa •••• 4242' },
        { id: '#RCT-0721', date: 'Jul 30, 2023', org: 'Masjid Al-Falah', type: 'Building Construction', amount: '₹500.00', method: 'PayPal' },
        { id: '#RCT-0615', date: 'Jun 12, 2023', org: 'Darul Uloom Center', type: 'Monthly Sponsorship', amount: '₹350.00', method: 'Visa •••• 4242' }
    ];

    return (
        <div className="td-layout-standalone">
            {/* Header */}
            <header className="td-header-standalone">
                <div className="logo-section">
                    <span className="logo-icon">🏰</span>
                    <span className="logo-text">Al Burhan</span>
                </div>
                <div className="header-right">
                    <div className="td-search-top">
                        <Icons.Search />
                        <input type="text" placeholder="Search Donations" />
                    </div>
                    <div className="icon-btn" onClick={() => navigate('/notifications')}><Icons.Bell /></div>
                    <div className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></div>
                    <div className="user-avatar-small" onClick={() => navigate('/profile')}>
                        <img src={UserAvatar} alt="User" />
                    </div>
                </div>
            </header>

            <main className="td-content-container">

                {/* Title Section */}
                <div className="td-page-title-row">
                    <div className="td-title-group">
                        <button className="back-btn-circle" onClick={() => navigate(-1)}>
                            <Icons.ArrowLeft />
                        </button>
                        <div>
                            <h1>Tax Documents & Receipts</h1>
                            <p>View and manage your donation history and tax statements for the fiscal year. All documents are securely stored.</p>
                        </div>
                    </div>
                    <button className="btn-help-center"><Icons.HelpCircle /> Help Center</button>
                </div>

                {/* Stats Grid */}
                <div className="td-stats-grid">
                    <div className="td-stat-card">
                        <div className="td-stat-header">
                            <span className="stat-label">2023 Total Contributions</span>
                            <span className="icon-circle green-light"><Icons.TrendingUp /></span>
                        </div>
                        <div className="td-stat-value">₹1,250.00</div>
                        <div className="td-stat-subtext"><span className="green-text">+15%</span> from last year</div>
                    </div>

                    <div className="td-stat-card">
                        <div className="td-stat-header">
                            <span className="stat-label">Tax Deductible Amount</span>
                            <span className="icon-circle green-light"><Icons.CheckCircle /></span>
                        </div>
                        <div className="td-stat-value">₹1,250.00</div>
                        <div className="td-stat-subtext">100% of contributions are eligible</div>
                    </div>

                    <div className="td-stat-card">
                        <div className="td-stat-header">
                            <span className="stat-label">Receipts Issued</span>
                            <span className="icon-circle green-light"><Icons.FileText /></span>
                        </div>
                        <div className="td-stat-value">12</div>
                        <div className="td-stat-subtext"><span className="green-text">+2</span> new this month</div>
                    </div>
                </div>

                {/* Hero Banner */}
                <div className="td-hero-banner">
                    <div className="td-hero-content">
                        <div className="tag-ready"><Icons.CheckCircle /> Tax Ready</div>
                        <h2>2023 Consolidated Tax Statement</h2>
                        <p>Your annual summary for tax filing purposes is ready to download. Includes all contributions made between Jan 1, 2023 and Dec 31, 2023.</p>
                        <div className="td-hero-actions">
                            <button className="btn-download"><Icons.Download /> Download PDF</button>
                            <button className="btn-email"><Icons.Send /> Email to Me</button>
                        </div>
                    </div>
                    <div className="td-hero-image">
                        {/* Placeholder for the illustration in the design */}
                        <div className="illustration-placeholder">
                            <div className="paper-stack">
                                <div className="paper p1"></div>
                                <div className="paper p2"></div>
                                <div className="calculator">
                                    <div className="calc-screen"></div>
                                    <div className="calc-btns"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="td-history-section">
                    <div className="td-history-header">
                        <div className="td-history-title-group">
                            <h3>Donation History</h3>
                            <span className="pill-badge">12 Receipts</span>
                        </div>
                        <div className="td-history-filters">
                            <select className="year-select">
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                            <div className="search-box-small">
                                <Icons.Search />
                                <input type="text" placeholder="Search by Madarsa or ID" />
                            </div>
                        </div>
                    </div>

                    <div className="td-table-wrapper">
                        <table className="td-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Organization</th>
                                    <th>Receipt ID</th>
                                    <th>Amount</th>
                                    <th>Payment Method</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {receipts.map((r, i) => (
                                    <tr key={i}>
                                        <td className="fw-bold">{r.date}</td>
                                        <td>
                                            <div className="org-cell-col">
                                                <span className="org-name">{r.org}</span>
                                                <span className="org-type">{r.type}</span>
                                            </div>
                                        </td>
                                        <td className="green-text-mono">{r.id}</td>
                                        <td className="fw-bold">{r.amount}</td>
                                        <td>
                                            <div className="pay-method">
                                                {r.method.includes('Visa') ? <Icons.CreditCard /> : <Icons.Columns />}
                                                {r.method}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="action-icons">
                                                <button className="icon-btn-table"><Icons.Download /></button>
                                                <button className="icon-btn-table"><Icons.Mail /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="td-pagination">
                        <span className="showing-text">Showing 1-5 of 12</span>
                        <div className="page-btns">
                            <button className="page-btn" disabled>Previous</button>
                            <button className="page-btn">Next</button>
                        </div>
                    </div>
                </div>

                <div className="bottom-signout-row-td">
                    <button className="signout-link" onClick={() => navigate('/')}>
                        <Icons.SignOut /> Sign Out
                    </button>
                </div>

            </main>
        </div>
    );
};

export default TaxDocumentsPage;
