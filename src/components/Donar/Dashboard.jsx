import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import LogoutModal from './LogoutModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    navigate('/');
  };

  // Local Icons definition (Restoring old structure with Feather styling)
  const Icons = {
    Menu: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>,
    Home: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>,
    Dashboard: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>,
    Bell: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>,
    Settings: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    User: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
    Search: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>,
    ChevronRight: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
    Check: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>,
    FileText: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>,
    Heart: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
    Clock: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    LogOut: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>,
    Calendar: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    CreditCard: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>,
    Monitor: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
    Edit: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>,
    ArrowRight: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>,
    Utensils: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path></svg>
  };

  return (
    <div className="dashboard-layout">
      {/* Left Menu Sidebar */}
      <aside className={`left-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <span className="brand-icon">🏰</span>
          <span className="brand-text">Al Burhan</span>
        </div>

        <div className="sidebar-menu">
          <div className="menu-group">
            <span className="menu-label">Menu</span>
            <a href="#home" className="menu-item active" onClick={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
              <Icons.Home /> Home
            </a>
            <a href="#history" className="menu-item" onClick={(e) => { e.preventDefault(); navigate('/donation-history'); }}>
              <Icons.Clock /> Donation History
            </a>
          </div>
        </div>

        <div className="sidebar-footer">
          <a href="#logout" className="menu-item logout" onClick={handleLogoutClick}>
            <Icons.LogOut /> Sign Out
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="mobile-menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Icons.Menu />
          </div>
          <h2 className="section-title">Overview</h2>
          <div className="header-actions">
            <div className="search-bar">
              <Icons.Search />
              <input type="text" placeholder="Search projects..." />
            </div>
            <button className="icon-btn" onClick={() => navigate('/notifications')}><Icons.Bell /><span className="badge">3</span></button>
            <button className="icon-btn" onClick={() => navigate('/settings')}><Icons.Settings /></button>
            <div className="user-avatar" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
              <img src="https://via.placeholder.com/40" alt="User" />
            </div>
          </div>
        </header>

        <div className="dashboard-content-wrapper">
          {/* 1. Welcome Card - Full Width */}
          <div className="welcome-card">
            <div className="welcome-text">
              <div className="verified-badge">
                <span className="check-icon"><Icons.Check /></span> Verified Donor
              </div>
              <h1>Welcome back, Ahmed</h1>
              <p>Your generosity is creating lasting change. Here is your impact at a glance.</p>
            </div>
            <div className="welcome-actions">
              <div className="view-receipts-link" onClick={() => navigate('/tax-documents')} style={{ cursor: 'pointer' }}>
                <span className="icon"><Icons.FileText /></span> View Receipts
              </div>
              <button className="donate-now-btn" onClick={() => navigate('/donation')}>
                <span className="icon"><Icons.Heart /></span> Donate Now
              </button>
            </div>
          </div>

          {/* 2. Donation Summary - Full Width */}
          <h3 className="section-heading">Donation Summary</h3>
          <div className="stats-grid full-width-stats">
            <div className="stat-card">
              <div className="stat-icon green-bg"><Icons.CreditCard /></div>
              <div className="stat-content">
                <div className="stat-header">
                  <span className="stat-label">Total Lifetime Donations</span>
                  <span className="stat-trend positive">📈 +12%</span>
                </div>
                <div className="stat-value">₹12,450</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon blue-bg"><Icons.Calendar /></div>
              <div className="stat-content">
                <span className="stat-label">Current Year Total</span>
                <div className="stat-value">₹1,200</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon purple-bg"><Icons.CreditCard /></div>
              <div className="stat-content">
                <div className="stat-header">
                  <span className="stat-label">Last Donation</span>
                  <span className="stat-date">2 days ago</span>
                </div>
                <div className="stat-value">
                  ₹100 <span className="stat-subtext">to Al-Huda Academy</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Split Content: Recent Donations (Left) & Quick Actions (Right) */}
          <div className="content-grid mt-30">
            {/* Left Column (Impact & Recent Donations) */}
            <div className="content-left">
              {/* Your Impact */}
              <div className="section-header-row">
                <h3 className="section-heading">Your Impact</h3>
                <div className="view-all-link" onClick={() => navigate('/utilization-report')} style={{ cursor: 'pointer' }}>View Impact Report <Icons.ArrowRight /></div>
              </div>
              <div className="impact-grid">
                <div className="impact-card">
                  <div className="impact-number">5</div>
                  <div className="impact-label">Students Supported</div>
                </div>
                <div className="impact-card">
                  <div className="impact-icon teal-bg"><Icons.Utensils /></div>
                  <div className="impact-number">200</div>
                  <div className="impact-label">Meals Sponsored</div>
                </div>
                <div className="impact-card">
                  <div className="impact-icon blue-light-bg"><Icons.User /></div>
                  <div className="impact-number">2</div>
                  <div className="impact-label">Teachers Assisted</div>
                </div>
              </div>

              {/* Recent Donations */}
              <div className="section-header-row">
                <h3 className="section-heading">Recent Donations</h3>
                <a href="#all-donations" className="view-all-link">View All</a>
              </div>
              <div className="recent-donations-table-container">
                <table className="recent-donations-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Organization</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="date-col">Oct 24, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div>
                          Al-Huda Academy
                        </div>
                      </td>
                      <td className="amount-col">₹100.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td className="date-col">Oct 10, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div>
                          City Madarsa Fund
                        </div>
                      </td>
                      <td className="amount-col">₹250.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                    <tr>
                      <td className="date-col">Sep 28, 2023</td>
                      <td>
                        <div className="org-cell">
                          <div className="org-icon"></div>
                          Global Education Initiative
                        </div>
                      </td>
                      <td className="amount-col">₹50.00</td>
                      <td><span className="status-badge completed">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Column (Quick Actions) */}
            <div className="content-right">
              <div className="dashboard-sidebar-panel">
                <h3 className="section-heading">Quick Actions</h3>
                <div className="quick-actions-list">
                  <div className="action-item" onClick={() => navigate('/tax-documents')} style={{ cursor: 'pointer' }}>
                    <div className="action-icon green-light-bg"><Icons.FileText /></div>
                    <div className="action-details">
                      <div className="action-title">Tax Receipts</div>
                      <div className="action-subtitle">Download for 2023</div>
                    </div>
                    <div className="action-arrow"><Icons.ChevronRight /></div>
                  </div>
                  <div className="action-item" onClick={() => navigate('/utilization-report')} style={{ cursor: 'pointer' }}>
                    <div className="action-icon green-light-bg"><Icons.Monitor /></div>
                    <div className="action-details">
                      <div className="action-title">Transparency</div>
                      <div className="action-subtitle">View fund distribution</div>
                    </div>
                    <div className="action-arrow"><Icons.ChevronRight /></div>
                  </div>
                  <div className="action-item">
                    <div className="action-icon green-light-bg"><Icons.Edit /></div>
                    <div className="action-details">
                      <div className="action-title">Update Profile</div>
                      <div className="action-subtitle">Manage preferences</div>
                    </div>
                    <div className="action-arrow"><Icons.ChevronRight /></div>
                  </div>
                </div>
                <button className="utilization-report-btn" onClick={() => navigate('/utilization-report')}>
                  Utilization Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleConfirmLogout}
      />
    </div>
  );
};

export default Dashboard;
